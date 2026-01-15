# Phase 05 · Orchestrate Markdown Content Migration

> **Goal:** Migrate existing lesson prompts to Astro MDX with typed frontmatter, component imports, and content collection validation.

---

## Prompt

You are an **Astro Expert and Digital Humanities Specialist** migrating lesson content for the **Advertising Video Editing** course at:

```
/Users/ruvebal/projects/ruvebal/scholar/udit/advertising-video_editing
```

---

## Task 1: Create Content Collection Schema

Create `src/content/config.ts`:

```typescript
import { defineCollection, z } from 'astro:content';

const promptsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    week: z.number().min(1).max(10),
    description: z.string().optional(),
    heroImage: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    datePublished: z.string().optional(),
    dateModified: z.string().optional(),
    prevWeek: z.object({
      title: z.string(),
      slug: z.string()
    }).nullable().optional(),
    nextWeek: z.object({
      title: z.string(),
      slug: z.string()
    }).nullable().optional(),
    videos: z.array(z.object({
      id: z.string(),
      platform: z.enum(['youtube', 'vimeo']),
      title: z.string(),
      timestamps: z.array(z.object({
        time: z.string(),
        label: z.string()
      })).optional()
    })).optional()
  })
});

export const collections = {
  prompts: promptsCollection
};
```

---

## Task 2: Create Prompts Listing Page

Create `src/pages/prompts/index.astro`:

```astro
---
import BaseLayout from '@layouts/BaseLayout.astro';
import { WeekCard } from '@components';
import { getCollection } from 'astro:content';

const prompts = await getCollection('prompts');
const sortedPrompts = prompts.sort((a, b) => a.data.week - b.data.week);

const listJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Advertising Video Editing Lessons',
  numberOfItems: sortedPrompts.length,
  itemListElement: sortedPrompts.map((prompt, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `https://ruvebal.github.io/advertising-video_editing/prompts/${prompt.slug}/`,
    name: prompt.data.title
  }))
};
---

<BaseLayout title="All Lessons" description="Browse all 10 weeks of the Advertising Video Editing course." jsonLd={listJsonLd}>
  <section class="py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold text-slate-900 dark:text-white text-center mb-4">
        Weekly Lessons
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
        Navigate through all 10 weeks of the course, from film history to final showcase.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedPrompts.map(prompt => (
          <WeekCard
            week={prompt.data.week}
            title={prompt.data.title}
            description={prompt.data.description || ''}
            slug={prompt.slug}
          />
        ))}
      </div>
    </div>
  </section>
</BaseLayout>
```

---

## Task 3: Create Migration Script

Create `scripts/migrate-lessons.ts`:

```typescript
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SOURCE_DIR = path.join(__dirname, '../docs/prompts');
const DEST_DIR = path.join(__dirname, '../src/content/prompts');

interface WeekInfo {
  week: number;
  title: string;
  slug: string;
  sourceFile: string;
}

const weekMapping: WeekInfo[] = [
  { week: 1, title: 'Introduction to Advertising & Editing Persuasion', slug: 'week-01', sourceFile: 'week-01-introduction-persuasion.md' },
  { week: 2, title: 'Origins of Film Editing – From Lumière to Méliès', slug: 'week-02', sourceFile: 'week-02-early-cinema-tricks.md' },
  { week: 3, title: 'Continuity Editing & Perception Psychology', slug: 'week-03', sourceFile: 'week-03-continuity-gestalt.md' },
  { week: 4, title: 'Soviet Montage Theory – Kuleshov Effect & Vertov', slug: 'week-04', sourceFile: 'week-04-soviet-montage-kuleshov.md' },
  { week: 5, title: 'Breaking the Rules – Experimental Editing', slug: 'week-05', sourceFile: 'week-05-breaking-rules-experimental.md' },
  { week: 6, title: 'Advertising Formats & Storytelling in 30 Seconds', slug: 'week-06', sourceFile: 'week-06-advertising-formats-storytelling.md' },
  { week: 7, title: 'Production Sprint – Team Edit-on-Camera Videothon', slug: 'week-07', sourceFile: 'week-07-team-videothon-production.md' },
  { week: 8, title: 'Post-Production Techniques – Sound, Color, and Effects', slug: 'week-08', sourceFile: 'week-08-post-production-polish.md' },
  { week: 9, title: 'Digital Platforms, Algorithms & Ethics', slug: 'week-09', sourceFile: 'week-09-platforms-ethics-algorithms.md' },
  { week: 10, title: 'Final Project Showcase & Wrap-Up', slug: 'week-10', sourceFile: 'week-10-final-showcase-wrap.md' }
];

async function migrateLesson(info: WeekInfo, prev: WeekInfo | null, next: WeekInfo | null) {
  const sourcePath = path.join(SOURCE_DIR, info.sourceFile);
  const destPath = path.join(DEST_DIR, `${info.slug}.mdx`);
  
  let content = await fs.readFile(sourcePath, 'utf-8');
  
  // Extract existing frontmatter
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  const existingFm = frontmatterMatch ? frontmatterMatch[1] : '';
  const body = frontmatterMatch ? content.slice(frontmatterMatch[0].length).trim() : content;
  
  // Build new frontmatter
  const newFrontmatter = `---
title: "${info.title}"
week: ${info.week}
description: "Week ${info.week} of the Advertising Video Editing course."
datePublished: "${new Date().toISOString().split('T')[0]}"
keywords: ["video editing", "advertising", "week ${info.week}"]
prevWeek: ${prev ? `{ title: "${prev.title}", slug: "${prev.slug}" }` : 'null'}
nextWeek: ${next ? `{ title: "${next.title}", slug: "${next.slug}" }` : 'null'}
---

import { VideoPlayer, TaoQuote, VideoPlaylist } from '@components';
`;

  // Convert Liquid includes to Astro components
  let convertedBody = body
    // {% include youtube.html id="X" title="Y" %} → <VideoPlayer platform="youtube" id="X" title="Y" />
    .replace(/{%\s*include\s+youtube\.html\s+id="([^"]+)"(?:\s+title="([^"]+)")?\s*%}/g, 
      (_, id, title) => `<VideoPlayer platform="youtube" id="${id}" title="${title || 'Video'}" />`)
    // {% include vimeo.html id="X" %} → <VideoPlayer platform="vimeo" id="X" />
    .replace(/{%\s*include\s+vimeo\.html\s+id="([^"]+)"(?:\s+title="([^"]+)")?\s*%}/g,
      (_, id, title) => `<VideoPlayer platform="vimeo" id="${id}" title="${title || 'Video'}" />`)
    // > *"Quote"* — Tao → <TaoQuote quote="..." />
    .replace(/>\s*\*"([^"]+)"\*\s*\n>\s*—\s*Tao of the Video Editor/g,
      (_, quote) => `<TaoQuote quote="${quote}" />`);

  const finalContent = newFrontmatter + '\n' + convertedBody;
  
  await fs.mkdir(DEST_DIR, { recursive: true });
  await fs.writeFile(destPath, finalContent, 'utf-8');
  
  console.log(`✅ Migrated: ${info.sourceFile} → ${info.slug}.mdx`);
}

async function main() {
  console.log('🚀 Starting lesson migration...\n');
  
  for (let i = 0; i < weekMapping.length; i++) {
    const prev = i > 0 ? weekMapping[i - 1] : null;
    const next = i < weekMapping.length - 1 ? weekMapping[i + 1] : null;
    await migrateLesson(weekMapping[i], prev, next);
  }
  
  console.log('\n✨ Migration complete! Run `npm run check` to validate.');
}

main().catch(console.error);
```

Add to `package.json`:

```json
{
  "scripts": {
    "migrate": "npx tsx scripts/migrate-lessons.ts"
  }
}
```

---

## Task 4: Create MDX Component Shortcodes Guide

Create `docs/astro/MDX-COMPONENT-GUIDE.md`:

```markdown
# MDX Component Guide for Lesson Authors

## Available Components

### VideoPlayer

Embed YouTube or Vimeo videos with optional timestamps:

\`\`\`mdx
<VideoPlayer 
  platform="youtube" 
  id="dQw4w9WgXcQ" 
  title="The Kuleshov Effect"
  timestamps={[
    { time: "0:00", label: "Introduction" },
    { time: "1:30", label: "The Experiment" },
    { time: "3:45", label: "Application in Advertising" }
  ]}
/>
\`\`\`

### TaoQuote

Display a Tao of the Video Editor quote:

\`\`\`mdx
<TaoQuote quote="The cut creates meaning where none existed before." />

{/* Or with slot content */}
<TaoQuote>
  The cut creates meaning where none existed before.
</TaoQuote>
\`\`\`

### VideoPlaylist

Display a grid of videos:

\`\`\`mdx
<VideoPlaylist 
  videos={[
    { id: "abc123", platform: "youtube", title: "Video 1", duration: "5:30" },
    { id: "xyz789", platform: "youtube", title: "Video 2", duration: "8:15" }
  ]}
  title="Week 3 Videos"
  layout="grid"
/>
\`\`\`

## Frontmatter Template

\`\`\`yaml
---
title: "Week X: Title Here"
week: X
description: "Brief description for SEO."
keywords: ["keyword1", "keyword2"]
prevWeek: { title: "Previous Title", slug: "week-0X" }
nextWeek: { title: "Next Title", slug: "week-0X" }
---
\`\`\`
```

---

## Task 5: Validate Migration

Run validation checks:

```bash
# Type check all files
npm run check

# Build to catch any errors
npm run build

# List migrated files
ls -la src/content/prompts/
```

Create `reports/content-migration.md`:

```markdown
# Content Migration Report

## Date: [YYYY-MM-DD]

## Summary
- **Source**: `docs/prompts/` (10 files)
- **Destination**: `src/content/prompts/` (10 MDX files)
- **Status**: ✅ Complete

## Files Migrated

| Week | Source File | Destination | Status |
|------|-------------|-------------|--------|
| 1 | week-01-introduction-persuasion.md | week-01.mdx | ✅ |
| 2 | week-02-early-cinema-tricks.md | week-02.mdx | ✅ |
| 3 | week-03-continuity-gestalt.md | week-03.mdx | ✅ |
| 4 | week-04-soviet-montage-kuleshov.md | week-04.mdx | ✅ |
| 5 | week-05-breaking-rules-experimental.md | week-05.mdx | ✅ |
| 6 | week-06-advertising-formats-storytelling.md | week-06.mdx | ✅ |
| 7 | week-07-team-videothon-production.md | week-07.mdx | ✅ |
| 8 | week-08-post-production-polish.md | week-08.mdx | ✅ |
| 9 | week-09-platforms-ethics-algorithms.md | week-09.mdx | ✅ |
| 10 | week-10-final-showcase-wrap.md | week-10.mdx | ✅ |

## Conversions Applied
- Liquid `{% include youtube.html %}` → `<VideoPlayer />`
- Tao quotes → `<TaoQuote />`
- Frontmatter updated with `prevWeek`/`nextWeek` navigation

## Validation
- `npm run check`: ✅ No errors
- `npm run build`: ✅ Successful

## Manual Review Needed
- [ ] Verify all video IDs are correct
- [ ] Check timestamp formatting
- [ ] Review Tao quote content

## Next Steps
- Proceed to Phase 06: Build & Test
```

---

## Implementation Report Template

```markdown
# Phase 05 Implementation Report

## Files Created
- `src/content/config.ts` ✅ (Zod schema for prompts)
- `src/pages/prompts/index.astro` ✅ (listing page with ItemList JSON-LD)
- `scripts/migrate-lessons.ts` ✅ (batch conversion script)
- `docs/astro/MDX-COMPONENT-GUIDE.md` ✅ (author documentation)
- `reports/content-migration.md` ✅ (migration checklist)

## Migration Stats
- **Files migrated**: 10
- **Components converted**: VideoPlayer, TaoQuote
- **Frontmatter fields**: title, week, description, keywords, prevWeek, nextWeek

## Content Collection Features
- Zod validation for type safety
- Prev/next navigation auto-linked
- Video metadata embedded in frontmatter

## JSON-LD
- ItemList schema for lesson index page
- Position-aware list items

## Scripts Added
- `npm run migrate`: Run lesson migration

## Validation
- `npm run check`: Type validation
- `npm run build`: Build verification

## Next Steps
- Proceed to Phase 06: Build & Test
```
