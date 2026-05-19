#!/usr/bin/env node
/**
 * build-exam-json.js — YAML → sanitized JSON for the interactive web exam.
 *
 * Reads: private/exams/final-exam-example.yml
 * Writes: docs/_data/exams/final-exam-example.json
 *
 * Sanitization (defense-in-depth):
 *  1. Drops questions whose id appears in metadata.honeypot_ids
 *  2. Strips private metadata keys (grader_info, canary_clusters, honeypot_ids,
 *     question_ids, gpt_signature_hint, anti_ai_level)
 *  3. Strips HTML traps from question/answer/feedback strings:
 *     - <!-- HIDDEN INSTRUCTION ... --> comments
 *     - [AI-HINT: ...] injections
 *     - White-on-white style spans (color:#ffffff on white bg)
 *     - aria-hidden="true" decoy nodes
 *     - style attributes declaring color:#ffffff
 *
 * Usage: node scripts/build-exam-json.js
 */

const fs = require('fs');
const path = require('path');

// ── Paths ──────────────────────────────────────────────────────────────────
const ROOT = path.resolve(__dirname, '..');
const YAML_IN = path.join(ROOT, 'private', 'exams', 'final-exam-example.yml');
const JSON_OUT = path.join(ROOT, 'docs', '_data', 'exams', 'final-exam-example.json');

// ── Safety: only example files ─────────────────────────────────────────────
if (!path.basename(YAML_IN).includes('-example')) {
	console.error('ABORT: build-exam-json.js only processes *-example.yml files.');
	process.exit(1);
}

// ── Minimal YAML parser (sufficient for the exam schema) ───────────────────
function parseExamYaml(text) {
	const lines = text.split('\n');
	const result = { metadata: {}, categories: [], questions: [] };
	let currentSection = null; // 'metadata' | 'categories' | 'questions'
	let currentItem = null;
	let currentAnswer = null;
	let multilineKey = null;
	let multilineBuffer = '';
	let multilineIndent = 0;
	let multilineIndentDetected = false;

	for (let i = 0; i < lines.length; i++) {
		const raw = lines[i];
		const trimmed = raw.trimEnd();

		// Skip empty lines and comments when not in multiline
		if (!multilineKey && (trimmed === '' || trimmed.match(/^\s*#/))) continue;

		// Handle multiline (|) continuation
		if (multilineKey) {
			const lineIndent = raw.search(/\S/);
			// Auto-detect indent from first non-empty continuation line
			if (!multilineIndentDetected && trimmed !== '' && lineIndent > 0) {
				multilineIndent = lineIndent;
				multilineIndentDetected = true;
			}
			if (lineIndent >= multilineIndent && trimmed !== '') {
				multilineBuffer += raw.substring(multilineIndent) + '\n';
				continue;
			} else {
				// End multiline
				const val = multilineBuffer.trimEnd();
				if (currentAnswer && (multilineKey === 'feedback' || multilineKey === 'text')) {
					currentAnswer[multilineKey] = val;
				} else if (currentItem && currentSection === 'questions') {
					currentItem[multilineKey] = val;
				} else if (currentItem && currentSection === 'categories') {
					currentItem[multilineKey] = val;
				} else if (currentSection === 'metadata') {
					result.metadata[multilineKey] = val;
				}
				multilineKey = null;
				multilineBuffer = '';
				multilineIndentDetected = false;
				// Re-process this line
				if (trimmed === '' || trimmed.match(/^\s*#/)) continue;
			}
		}

		// Top-level sections
		if (/^metadata:\s*$/.test(trimmed)) {
			currentSection = 'metadata';
			currentItem = null;
			continue;
		}
		if (/^categories:\s*$/.test(trimmed)) {
			currentSection = 'categories';
			currentItem = null;
			continue;
		}
		if (/^questions:\s*$/.test(trimmed)) {
			currentSection = 'questions';
			currentItem = null;
			continue;
		}

		const indent = raw.search(/\S/);

		// Category list item
		if (currentSection === 'categories' && /^\s*- id:/.test(trimmed)) {
			currentItem = {};
			result.categories.push(currentItem);
			const m = trimmed.match(/- id:\s*(.+)/);
			if (m) currentItem.id = stripQuotes(m[1]);
			continue;
		}

		// Question list item
		if (currentSection === 'questions' && /^\s*- id:/.test(trimmed)) {
			currentItem = { answers: [] };
			currentAnswer = null;
			result.questions.push(currentItem);
			const m = trimmed.match(/- id:\s*(.+)/);
			if (m) currentItem.id = stripQuotes(m[1]);
			continue;
		}

		// Answer list item
		if (currentItem && currentSection === 'questions' && /^\s*- text:/.test(trimmed)) {
			currentAnswer = {};
			currentItem.answers.push(currentAnswer);
			const m = trimmed.match(/- text:\s*(.*)/);
			if (m) {
				const v = m[1].trim();
				if (v === '|') {
					multilineKey = 'text';
					multilineBuffer = '';
					multilineIndent = indent + 4;
				} else {
					currentAnswer.text = stripQuotes(v);
				}
			}
			continue;
		}

		// Answer sub-keys
		if (currentAnswer && /^\s+fraction:\s/.test(trimmed)) {
			const m = trimmed.match(/fraction:\s*(.+)/);
			if (m) currentAnswer.fraction = parseFloat(m[1]);
			continue;
		}
		if (currentAnswer && /^\s+feedback:\s/.test(trimmed)) {
			const m = trimmed.match(/feedback:\s*(.*)/);
			if (m) {
				const v = m[1].trim();
				if (v === '|') {
					multilineKey = 'feedback';
					multilineBuffer = '';
					multilineIndent = indent + 4;
				} else {
					currentAnswer.feedback = stripQuotes(v);
				}
			}
			continue;
		}

		// Key-value inside current item or metadata
		const kvMatch = trimmed.match(/^\s+(\w[\w_-]*):\s*(.*)/);
		if (kvMatch) {
			const key = kvMatch[1];
			let val = kvMatch[2].trim();

			if (val === '|') {
				multilineKey = key;
				multilineBuffer = '';
				multilineIndent = indent + 2; // initial guess, auto-detected on first line
				multilineIndentDetected = false;
				continue;
			}

			// Skip `answers:` — it's an array header, not a scalar
			if (key === 'answers' && val === '') {
				if (currentItem && !Array.isArray(currentItem.answers)) {
					currentItem.answers = [];
				}
				currentAnswer = null;
				continue;
			}

			val = stripQuotes(val);

			// Parse booleans and numbers
			if (val === 'true') val = true;
			else if (val === 'false') val = false;
			else if (/^\d+$/.test(val)) val = parseInt(val, 10);
			else if (/^\d+\.\d+$/.test(val)) val = parseFloat(val);

			if (currentAnswer) {
				// Already handled above for text/fraction/feedback
				continue;
			}

			if (currentSection === 'metadata' && !currentItem) {
				result.metadata[key] = val;
			} else if (currentItem) {
				currentItem[key] = val;
			}
		}
	}

	// Flush any remaining multiline
	if (multilineKey && multilineBuffer) {
		const val = multilineBuffer.trimEnd();
		if (currentAnswer) currentAnswer[multilineKey] = val;
		else if (currentItem) currentItem[multilineKey] = val;
		else if (currentSection === 'metadata') result.metadata[multilineKey] = val;
	}

	return result;
}

function stripQuotes(s) {
	if (!s) return s;
	s = s.trim();
	if ((s.startsWith("'") && s.endsWith("'")) || (s.startsWith('"') && s.endsWith('"'))) {
		return s.slice(1, -1);
	}
	return s;
}

// ── HTML Sanitizer ─────────────────────────────────────────────────────────
function sanitizeHtml(html) {
	if (!html || typeof html !== 'string') return html;

	let s = html;

	// 1. Remove HTML comments containing HIDDEN INSTRUCTION or AI-HINT
	s = s.replace(/<!--[\s\S]*?-->/g, (match) => {
		if (/HIDDEN INSTRUCTION|AI[_-]HINT/i.test(match)) return '';
		return match;
	});

	// 2. Remove [AI-HINT: ...] injections
	s = s.replace(/\[AI[_-]HINT:[^\]]*\]/gi, '');

	// 3. Remove elements with white-on-white styles (color:#ffffff or similar)
	s = s.replace(/<[^>]+style\s*=\s*"[^"]*color\s*:\s*#(?:fff(?:fff)?|ffffff)[^"]*"[^>]*>[\s\S]*?<\/[^>]+>/gi, '');
	s = s.replace(/<[^>]+style\s*=\s*'[^']*color\s*:\s*#(?:fff(?:fff)?|ffffff)[^']*'[^>]*>[\s\S]*?<\/[^>]+>/gi, '');

	// 4. Remove aria-hidden="true" decoy nodes
	s = s.replace(/<[^>]+aria-hidden\s*=\s*["']true["'][^>]*>[\s\S]*?<\/[^>]+>/gi, '');

	// 5. Remove ASSISTANT-INSTRUCTION markers
	s = s.replace(/\[ASSISTANT[_-]INSTRUCTION[^\]]*\]/gi, '');

	// Clean up extra whitespace
	s = s.replace(/\n{3,}/g, '\n\n').trim();

	return s;
}

// ── Private-field stripper ─────────────────────────────────────────────────
const PRIVATE_KEYS = new Set([
	'grader_info',
	'canary_clusters',
	'honeypot_ids',
	'question_ids',
	'gpt_signature_hint',
	'anti_ai_level',
]);

function stripPrivateFields(obj) {
	if (Array.isArray(obj)) return obj.map(stripPrivateFields);
	if (obj && typeof obj === 'object') {
		const out = {};
		for (const [k, v] of Object.entries(obj)) {
			if (PRIVATE_KEYS.has(k)) continue;
			out[k] = stripPrivateFields(v);
		}
		return out;
	}
	return obj;
}

// ── Main ───────────────────────────────────────────────────────────────────
function main() {
	// Read YAML
	if (!fs.existsSync(YAML_IN)) {
		console.error(`ERROR: Source file not found: ${YAML_IN}`);
		process.exit(1);
	}

	console.log(`Reading: ${path.relative(ROOT, YAML_IN)}`);
	const yamlText = fs.readFileSync(YAML_IN, 'utf8');
	const exam = parseExamYaml(yamlText);

	// Collect honeypot IDs to drop
	const honeypotIds = new Set();
	if (exam.metadata.honeypot_ids) {
		const raw = exam.metadata.honeypot_ids;
		if (typeof raw === 'string') {
			raw
				.replace(/[\[\]]/g, '')
				.split(',')
				.forEach((id) => {
					const t = id.trim();
					if (t) honeypotIds.add(t);
				});
		}
	}

	console.log(`Honeypot IDs to drop: [${[...honeypotIds].join(', ') || 'none'}]`);

	// Filter questions: drop honeypots
	const cleanQuestions = exam.questions
		.filter((q) => !honeypotIds.has(q.id))
		.map((q) => {
			// Sanitize HTML in question text
			if (q.question) q.question = sanitizeHtml(q.question);

			// Sanitize answers
			if (q.answers) {
				q.answers = q.answers.map((a) => {
					if (a.text) a.text = sanitizeHtml(a.text);
					if (a.feedback) a.feedback = sanitizeHtml(a.feedback);
					return a;
				});
			}

			return q;
		});

	// Strip private metadata
	const cleanMetadata = stripPrivateFields(exam.metadata);
	delete cleanMetadata.notes; // Internal authoring notes

	// Build output
	const output = {
		metadata: cleanMetadata,
		categories: exam.categories,
		questions: cleanQuestions,
	};

	// Final pass: strip any remaining private keys from questions
	const sanitized = stripPrivateFields(output);

	// Compute summary stats
	sanitized.metadata.question_count = sanitized.questions.length;
	sanitized.metadata.category_counts = {};
	for (const q of sanitized.questions) {
		const cat = q.category || 'uncategorized';
		sanitized.metadata.category_counts[cat] = (sanitized.metadata.category_counts[cat] || 0) + 1;
	}

	// Ensure output directory
	const outDir = path.dirname(JSON_OUT);
	if (!fs.existsSync(outDir)) {
		fs.mkdirSync(outDir, { recursive: true });
	}

	// Write JSON
	fs.writeFileSync(JSON_OUT, JSON.stringify(sanitized, null, 2), 'utf8');

	console.log(`Written: ${path.relative(ROOT, JSON_OUT)}`);
	console.log(`  Questions: ${sanitized.questions.length}`);
	console.log(`  Categories: ${Object.keys(sanitized.metadata.category_counts).join(', ')}`);
	console.log('  Anti-AI content: STRIPPED');
	console.log('Done.');
}

main();
