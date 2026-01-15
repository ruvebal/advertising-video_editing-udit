const fs = require('fs');
const path = require('path');

const promptsDir = path.join(__dirname, '../docs/_prompts');
const files = fs.readdirSync(promptsDir).filter((file) => file.endsWith('.md'));

const tocSnippet = `\n<!-- prettier-ignore-start -->\n## 📋 Tabla de contenidos\n{: .no_toc }\n- TOC\n{:toc}\n<!-- prettier-ignore-end -->\n\n`;

files.forEach((file) => {
	const filePath = path.join(promptsDir, file);
	let content = fs.readFileSync(filePath, 'utf8');

	if (content.includes('{:toc}')) {
		console.log(`✅ TOC already present in ${file}`);
		return;
	}

	const parts = content.split('---');
	if (parts.length < 3) {
		console.warn(`⚠️ Could not detect front matter in ${file}`);
		return;
	}

	const frontMatter = parts[0] + '---' + parts[1] + '---';
	const body = parts.slice(2).join('---').trimStart();
	const updated = `${frontMatter}\n${tocSnippet}${body}`;

	fs.writeFileSync(filePath, updated, 'utf8');
	console.log(`➕ Added TOC snippet to ${file}`);
});
