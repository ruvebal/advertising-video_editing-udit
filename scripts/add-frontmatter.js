const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../docs/prompts');
const destDir = path.join(__dirname, '../docs/_prompts');

// Ensure destination directory exists
if (!fs.existsSync(destDir)) {
	fs.mkdirSync(destDir, { recursive: true });
}

const weekData = [
	{ week: 1, title: "Introduction to Advertising & Editing Persuasion", slug: "week-01", file: "week-01-introduction-persuasion.md", description: "Explore the foundations of persuasive editing and advertising's relationship with moving images." },
	{ week: 2, title: "Origins of Film Editing – From Lumière to Méliès", slug: "week-02", file: "week-02-early-cinema-tricks.md", description: "Discover how early cinema pioneers created magic through in-camera tricks and editing." },
	{ week: 3, title: "Continuity Editing & Perception Psychology", slug: "week-03", file: "week-03-continuity-gestalt.md", description: "Master the invisible art of continuity editing and understand Gestalt perception principles." },
	{ week: 4, title: "Soviet Montage Theory – Kuleshov Effect & Vertov", slug: "week-04", file: "week-04-soviet-montage-kuleshov.md", description: "Learn how Soviet filmmakers revolutionized editing through montage and the Kuleshov Effect." },
	{ week: 5, title: "Breaking the Rules – Experimental Editing", slug: "week-05", file: "week-05-breaking-rules-experimental.md", description: "Explore jump cuts, nonlinear narratives, and when to break editing conventions." },
	{ week: 6, title: "Advertising Formats & Storytelling in 30 Seconds", slug: "week-06", file: "week-06-advertising-formats-storytelling.md", description: "Master the art of telling compelling stories within strict time constraints." },
	{ week: 7, title: "Production Sprint – Team Edit-on-Camera Videothon", slug: "week-07", file: "week-07-team-videothon-production.md", description: "Collaborate under pressure in a fast-paced team production challenge." },
	{ week: 8, title: "Post-Production Techniques – Sound, Color, and Effects", slug: "week-08", file: "week-08-post-production-polish.md", description: "Polish your work with professional sound design, color grading, and visual effects." },
	{ week: 9, title: "Digital Platforms, Algorithms & Ethics in Advertising", slug: "week-09", file: "week-09-platforms-ethics-algorithms.md", description: "Navigate the attention economy while maintaining ethical standards." },
	{ week: 10, title: "Final Project Showcase & Wrap-Up", slug: "week-10", file: "week-10-final-showcase-wrap.md", description: "Present your portfolio-worthy final project and reflect on your journey." }
];

weekData.forEach((data, index) => {
	const sourceFile = path.join(sourceDir, data.file);
	const destFile = path.join(destDir, data.file);
	
	if (!fs.existsSync(sourceFile)) {
		console.log(`⚠ Source file not found: ${data.file}`);
		return;
	}
	
	let content = fs.readFileSync(sourceFile, 'utf8');
	
	// Skip if front matter already exists
	if (content.startsWith('---')) {
		console.log(`⏭ Skipping ${data.file} (already has front matter)`);
		// Still copy to destination
		fs.writeFileSync(destFile, content, 'utf8');
		return;
	}
	
	const prevWeek = index > 0 ? weekData[index - 1] : null;
	const nextWeek = index < weekData.length - 1 ? weekData[index + 1] : null;
	
	const frontMatter = `---
layout: lesson
title: "${data.title}"
week: ${data.week}
description: "${data.description}"
permalink: /prompts/${data.slug}/
prev_week:
  number: ${prevWeek ? prevWeek.week : 'null'}
  title: "${prevWeek ? prevWeek.title : ''}"
  url: ${prevWeek ? `/prompts/${prevWeek.slug}/` : 'null'}
next_week:
  number: ${nextWeek ? nextWeek.week : 'null'}
  title: "${nextWeek ? nextWeek.title : ''}"
  url: ${nextWeek ? `/prompts/${nextWeek.slug}/` : 'null'}
---

`;
	
	const newContent = frontMatter + content;
	fs.writeFileSync(destFile, newContent, 'utf8');
	console.log(`✓ Added front matter to ${data.file}`);
});

console.log('\n✅ Done! Files are in docs/_prompts/');
