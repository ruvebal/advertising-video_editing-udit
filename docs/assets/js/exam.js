/**
 * exam.js — Alpine.js component for the interactive exam.
 *
 * Modes:
 *   study  — immediate feedback on click, free navigation
 *   exam   — 30-min countdown, no feedback until submit
 *   review — after submit, show all answers + correct + feedback
 *
 * Persistence: localStorage keyed by exam id.
 * Keyboard: ←/→ navigate, A/B/C/D select answer, Enter submit (exam mode).
 */

function registerExamApp() {
	Alpine.data('examApp', () => ({
		// State
		mode: 'study',
		currentIndex: 0,
		answers: {}, // { questionId: answerIndex }
		submitted: false,
		score: 0,
		timerSeconds: 0,
		timerInterval: null,

		// Derived from DOM data (set in init)
		questions: [],
		questionFractions: {}, // { questionId: [fraction0, fraction1, ...] }
		questionPoints: {}, // { questionId: points }
		totalQuestions: 0,
		totalPoints: 0,
		storageKey: 'exam-sample-v1',

		init() {
			// Parse questions from the rendered slides
			const slides = document.querySelectorAll('.exam-slide');
			this.questions = [];
			slides.forEach((slide) => {
				const id = slide.id.replace('slide-', '');
				this.questions.push({ id });

				// Parse fractions from answer buttons data
				const answerBtns = slide.querySelectorAll('.exam-answer-btn');
				this.questionFractions[id] = [];
				answerBtns.forEach((btn) => {
					// Extract fraction from x-bind class expression
					const classExpr = btn.getAttribute(':class') || btn.getAttribute('x-bind:class') || '';
					const fractionMatch = classExpr.match(/(\d+)\s*===\s*0/);
					// We'll get fractions from the feedback icons instead
				});

				// Parse points from the header
				const ptsEl = slide.querySelector('.exam-q-points');
				if (ptsEl) {
					const pts = parseInt(ptsEl.textContent);
					this.questionPoints[id] = isNaN(pts) ? 2 : pts;
				} else {
					this.questionPoints[id] = 2;
				}
			});

			this.totalQuestions = this.questions.length;
			this.totalPoints = Object.values(this.questionPoints).reduce((a, b) => a + b, 0);

			// Parse fractions from DOM by examining the Alpine expressions on the buttons
			// We need to extract fraction values from the template
			this._parseFractionsFromMarkup();

			// Read mode from URL hash
			const hash = window.location.hash;
			if (hash.includes('mode=exam')) this.setMode('exam');
			else if (hash.includes('mode=review')) {
				// Can only enter review if we have saved submitted state
				this.setMode('study');
			}

			// Restore from localStorage
			this._restore();

			// Keyboard handler for answer selection
			document.addEventListener('keydown', (e) => {
				const key = e.key.toUpperCase();
				if (['A', 'B', 'C', 'D'].includes(key)) {
					const idx = key.charCodeAt(0) - 65; // A=0, B=1, C=2, D=3
					const q = this.questions[this.currentIndex];
					if (q) this.selectAnswer(q.id, idx);
				}
				if (e.key === 'Enter' && this.mode === 'exam' && !this.submitted) {
					this.submitExam();
				}
			});
		},

		_parseFractionsFromMarkup() {
			// Extract fractions by examining the exam-shell template's rendered output
			// The fractions are embedded in Alpine expressions on buttons
			const slides = document.querySelectorAll('.exam-slide');
			slides.forEach((slide) => {
				const id = slide.id.replace('slide-', '');
				const btns = slide.querySelectorAll('.exam-answer-btn');
				const fractions = [];
				btns.forEach((btn) => {
					const classAttr = btn.getAttribute(':class') || '';
					// Look for patterns like "100 > 0" (correct) or "0 === 0" (incorrect)
					// In the template: {{ a.fraction }} > 0 and {{ a.fraction }} === 0
					const matches = classAttr.match(/&&\s*(\d+)\s*>/g);
					if (matches && matches.length > 0) {
						const numMatch = matches[0].match(/(\d+)/);
						fractions.push(numMatch ? parseInt(numMatch[1]) : 0);
					} else {
						// Try to find from correct-answer pattern
						const correctMatch = classAttr.match(/(\d+)\s*>\s*0/);
						if (correctMatch) {
							fractions.push(parseInt(correctMatch[1]));
						} else {
							fractions.push(0);
						}
					}
				});
				this.questionFractions[id] = fractions;
			});
		},

		// ── Mode management ─────────────────────────────────────────────
		setMode(mode) {
			if (mode === 'review' && !this.submitted) return;
			if (mode === 'exam' && this.submitted) return;

			this.mode = mode;
			window.location.hash = `mode=${mode}`;

			if (mode === 'exam' && !this.submitted) {
				this.startTimer();
			} else {
				this.stopTimer();
			}

			if (mode === 'study') {
				// Reset if switching to study from exam without submitting
				if (!this.submitted) {
					this.answers = {};
					this.currentIndex = 0;
				}
			}
		},

		// ── Navigation ──────────────────────────────────────────────────
		prevQuestion() {
			if (this.currentIndex > 0) this.currentIndex--;
		},

		nextQuestion() {
			if (this.currentIndex < this.totalQuestions - 1) this.currentIndex++;
		},

		goTo(idx) {
			if (idx >= 0 && idx < this.totalQuestions) this.currentIndex = idx;
		},

		resetExam() {
			if (!confirm('Reset all answers and start over?')) return;
			this.stopTimer();
			this.answers = {};
			this.submitted = false;
			this.score = 0;
			this.timerSeconds = 0;
			this.currentIndex = 0;
			this.mode = 'study';
			window.location.hash = 'mode=study';
			try {
				localStorage.removeItem(this.storageKey);
			} catch (e) {}
		},

		handleEscape() {
			if (this.mode === 'exam' && !this.submitted) {
				if (confirm('Exit exam mode? Your progress will be kept.')) {
					this.setMode('study');
				}
			}
		},

		// ── Answer selection ────────────────────────────────────────────
		selectAnswer(qId, answerIdx) {
			// In review mode or already answered in study mode, don't allow changes
			if (this.mode === 'review') return;
			if (this.mode === 'study' && this.answers[qId] !== undefined && this.answers[qId] !== null) return;

			// Validate answerIdx is within bounds
			const fractions = this.questionFractions[qId];
			if (!fractions || answerIdx >= fractions.length) return;

			this.answers[qId] = answerIdx;
			this._save();

			// In study mode, auto-advance after a short delay
			if (this.mode === 'study') {
				setTimeout(() => {
					if (this.currentIndex < this.totalQuestions - 1) {
						this.nextQuestion();
					}
				}, 1200);
			}
		},

		// ── Scoring ─────────────────────────────────────────────────────
		isCorrect(qId) {
			const idx = this.answers[qId];
			if (idx === undefined || idx === null) return false;
			const fractions = this.questionFractions[qId];
			return fractions && fractions[idx] > 0;
		},

		submitExam() {
			if (this.answeredCount < this.totalQuestions) {
				if (!confirm(`You have answered ${this.answeredCount} of ${this.totalQuestions} questions. Submit anyway?`)) {
					return;
				}
			}

			this.submitted = true;
			this.stopTimer();
			this._calculateScore();
			this._save();
			this.setMode('review');
			this.currentIndex = 0;
		},

		_calculateScore() {
			let total = 0;
			for (const q of this.questions) {
				if (this.isCorrect(q.id)) {
					total += this.questionPoints[q.id] || 2;
				}
			}
			this.score = total;
		},

		// ── Timer ───────────────────────────────────────────────────────
		startTimer() {
			this.stopTimer();
			this.timerSeconds = 30 * 60; // 30 minutes
			this.timerInterval = setInterval(() => {
				this.timerSeconds--;
				if (this.timerSeconds <= 0) {
					this.timerSeconds = 0;
					this.submitExam();
				}
			}, 1000);
		},

		stopTimer() {
			if (this.timerInterval) {
				clearInterval(this.timerInterval);
				this.timerInterval = null;
			}
		},

		// ── Computed ────────────────────────────────────────────────────
		get answeredCount() {
			return Object.values(this.answers).filter((v) => v !== undefined && v !== null).length;
		},

		get progressPercent() {
			if (this.totalQuestions === 0) return 0;
			return Math.round((this.answeredCount / this.totalQuestions) * 100);
		},

		get timerDisplay() {
			const m = Math.floor(this.timerSeconds / 60);
			const s = this.timerSeconds % 60;
			return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
		},

		get scorePct() {
			if (this.totalPoints === 0) return 0;
			return Math.round((this.score / this.totalPoints) * 100);
		},

		getDisplayIndex(qId) {
			const idx = this.questions.findIndex((q) => q.id === qId);
			return idx >= 0 ? idx + 1 : '?';
		},

		// ── Persistence ─────────────────────────────────────────────────
		_save() {
			try {
				const data = {
					answers: this.answers,
					submitted: this.submitted,
					score: this.score,
					mode: this.mode,
					currentIndex: this.currentIndex,
				};
				localStorage.setItem(this.storageKey, JSON.stringify(data));
			} catch (e) {
				// localStorage unavailable
			}
		},

		_restore() {
			try {
				const raw = localStorage.getItem(this.storageKey);
				if (!raw) return;
				const data = JSON.parse(raw);
				if (data.answers) this.answers = data.answers;
				if (data.submitted) {
					this.submitted = true;
					this._calculateScore();
				}
				if (data.currentIndex !== undefined) this.currentIndex = data.currentIndex;
			} catch (e) {
				// Corrupted data, ignore
			}
		},
	}));
}

// Bootstrap: register before Alpine starts (normal case) or immediately if
// Alpine already initialised (edge case where CDN resolved first).
if (window.Alpine) {
	registerExamApp();
} else {
	document.addEventListener('alpine:init', registerExamApp);
}
