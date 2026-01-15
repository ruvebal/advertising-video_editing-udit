# Astro Site Strategy: Localization, Modularization, CI/CD, Extensions, Metadata, Accessibility

**Document Version:** 1.0  
**Date:** January 4, 2026  
**Scope:** Advertising Video Editing course site (Astro stack, Tailwind CSS latest)

---

## 1. Localization Strategy

| Layer | Recommendation | Notes |
|-------|----------------|-------|
| Routing | Use Astro i18n routing (`src/pages/[lang]/...`) or `astro-i18next` for path-based locales (`/en`, `/es`). | Keeps GitHub Pages-compatible static output. |
| Content | Store localized Markdown via `src/content/prompts/{lang}/week-01.mdx`. Define Zod schemas per locale to ensure parity. | Reuse existing Spanish prompts when ready. |
| UI Strings | Centralize in `src/locales/en.json`, `es.json`; load via Astro endpoints or bundler alias `@locales`. | Works with `astro-i18next`. |
| Language Switcher | Component in Header with `<link rel="alternate" hreflang="...">` support; ensures SEO. | Provide keyboard-accessible toggle + persisted preference (localStorage). |
| Date/Number Formatting | Use `Intl.DateTimeFormat` on client islands only where dynamic (e.g., schedule). | Avoid unnecessary hydration. |

**Tooling:** `astro-i18next`, `typesafe-i18n`, or custom `Astro.locals` injection.

---

## 2. Modularization Strategy

1. **Directory Conventions**
   - `src/components/` for pure presentation
   - `src/features/` for grouped logic (e.g., `video/`, `resources/`)
   - `src/data/` for JSON/TS data sources
   - `src/content/` (astro content collections) for Markdown/MDX lessons

2. **Barrel Files**
   - Export components via `src/components/index.ts` for clean imports.

3. **Composable Utilities**
   - `src/utils/astro.ts` for helper functions (slug generation, metadata builders).

4. **Design Tokens**
   - Maintain `tailwind.config.mjs` with custom theme (colors, spacing) and reflect in `src/styles/tokens.css` for non-Tailwind contexts (e.g., `<style>` blocks).

5. **Content Collections**
   - Use `defineCollection` for `prompts`, `resources`, `videos` to ensure typed frontmatter.

---

## 3. CI/CD Strategy

| Stage | Tool | Purpose |
|-------|------|---------|
| Lint/Test | GitHub Actions (`lint-test.yml`) running `npm run lint`, `npm run check`, Playwright smoke tests. | Blocks PRs failing QA. |
| Build | `deploy.yml` (already outlined) builds Astro with Node 20, caches `~/.npm`. | Fast deployments. |
| Preview | Optional Vercel/Netlify preview for PRs, but GitHub Pages remains prod. | Use `actions/upload-pages-artifact`. |
| Performance Budget | Add `lighthouse-ci` workflow to ensure ≥95 scores before merge. | Use `treosh/lighthouse-ci-action`. |
| Accessibility | Integrate `pa11y-ci` or `axe-core` action. | Ensures no regressions. |

**Branch Strategy:** `main` for production, feature branches + PR approvals.

---

## 4. Extension Scripts (Validation & Automation)

| Script | Location | Description |
|--------|----------|-------------|
| `scripts/validate-urls.ts` | Node script using `node-fetch` to check all external links (from Markdown + data files). Exits non-zero on 4xx/5xx. | Run in CI weekly or per PR. |
| `scripts/check-video-ids.ts` | Validates YouTube/Vimeo IDs exist (via oEmbed endpoints). | Prevents broken embeds. |
| `scripts/generate-open-graph.ts` | Uses `@vercel/og` or `satori` to create OG images per lesson. | Run pre-build. |
| `scripts/audit-fonts.ts` | Ensures self-hosted fonts in `/public/fonts` are referenced; warns on missing preload. | Maintains performance. |

Add npm scripts: `"lint": "eslint \"src/**/*.{ts,tsx,astro,mdx}\"", "check": "astro check", "validate:urls": "ts-node scripts/validate-urls.ts", "validate:videos": "ts-node scripts/check-video-ids.ts"`.

---

## 5. Metadata Strategy

1. **Open Graph & Twitter Cards**
   - Use `Astro.seo` helpers or custom utilities to generate OG tags per page.
   - Generate bespoke OG images (1080×566) via `scripts/generate-open-graph.ts`.
   - Include `og:video` metadata when embedding flagship videos.

2. **JSON-LD**
   - Homepage: `EducationalOrganization` + `Course`.
   - Lessons: `CourseInstance` with `hasCourseInstance`, `video`, `learningResourceType`.
   - Resource library: `ItemList`.

3. **Sitemap & RSS**
   - Use `@astrojs/sitemap` for `sitemap-index.xml`.
   - Provide `atom.xml` for new lesson updates.

4. **Canonical & Alternate**
   - Set `<link rel="canonical">` and `hreflang` for localized pages.

5. **Performance Metadata**
   - Add `theme-color`, `color-scheme`, and `viewport-fit=cover`.

---

## 6. Accessibility Strategy

| Area | Action |
|------|--------|
| Landmarks | Ensure Header, Main, Footer, and Section landmarks with `aria-label`s. |
| Color & Contrast | Define tokens meeting WCAG AA (use Tailwind `theme.extend.colors`). Provide dark/light variations. |
| Keyboard Navigation | Skip links, focus-visible styles, logical tab order. Test with `tab` + `shift+tab`. |
| Media | Provide captions/transcripts for video embeds (link to YouTube captions). Add descriptive `title` attributes and transcripts under each video. |
| Motion | Respect `prefers-reduced-motion`: disable parallax, heavy animations in CSS/JS. |
| Forms | If adding submission forms, use `@tailwindcss/forms` with proper labels and error messaging. |
| Testing | Incorporate `axe-core` scans, screen reader spot checks (VoiceOver/NVDA). Document findings in QA reports. |

---

## 7. Tailwind (Latest) Adoption Notes

- Use `tailwindcss@latest` with `postcss.config.cjs` + `tailwind.config.mjs`.
- Enable plugins: `typography`, `forms`, `aspect-ratio`, `container-queries` (experimental) for layout finesse.
- Store design tokens in `theme.extend`: custom fonts, spacing scale tuned for video aspect ratios, gradient palettes (`kino-sunrise`, `noir-void`).
- Leverage `@layer base` to normalize typographic rhythm for Markdown/MDX content.
- Document upgrade strategy (e.g., scheduled `npm outdated` check) to stay current.

---

## 8. Rich Academic Metadata for Knowledge Graphs

### 8.1 Schema.org Types

| Page Type | Schema | Key Properties |
|-----------|--------|----------------|
| Homepage | `Course` | `name`, `description`, `provider`, `instructor`, `hasCourseInstance` |
| Lesson | `LearningResource` | `learningResourceType`, `educationalLevel`, `isPartOf`, `position` |
| Video | `VideoObject` | `embedUrl`, `duration`, `thumbnailUrl`, `uploadDate` |
| Resource | `CreativeWork` | `author`, `datePublished`, `license` |
| Author | `Person` | `name`, `identifier` (ORCID), `affiliation`, `sameAs` |

### 8.2 ORCID Integration

Include ORCID in all author references for academic discoverability:

```json
{
  "@type": "Person",
  "name": "Rubén Vega Balbás, PhD",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "ORCID",
    "value": "https://orcid.org/0000-0001-6862-9081"
  }
}
```

### 8.3 Academic Graph Connections

- **Google Scholar**: Ensure JSON-LD `ScholarlyArticle` for any research-oriented content.
- **OpenAlex**: Use DOIs where applicable; link to institutional profiles.
- **Wikidata**: Consider linking to Wikidata entities for film theory concepts (e.g., `Q174165` for "montage").
- **Dublin Core**: Include `DC.creator`, `DC.subject`, `DC.rights` meta tags for library harvesting.

### 8.4 Citation Support

Add citation export for lessons:

```typescript
// src/utils/citation.ts
export function generateBibTeX(lesson: LessonFrontmatter): string {
  return `@misc{vega${lesson.week},
  author = {Vega Balbás, Rubén},
  title = {${lesson.title}},
  year = {2026},
  howpublished = {\\url{https://ruvebal.github.io/advertising-video_editing/prompts/${lesson.slug}/}},
  note = {Advertising Video Editing Course, UDIT}
}`;
}
```

---

## 9. Video Display Best Practices

### 9.1 Performance

| Technique | Implementation | Benefit |
|-----------|----------------|---------|
| Facade Pattern | Poster image until click | Faster LCP, no iframe until needed |
| Privacy-Enhanced | `youtube-nocookie.com` | GDPR compliance, no tracking cookies |
| Lazy Loading | `loading="lazy"` on iframe | Defer offscreen videos |
| Aspect Ratio | `aspect-video` (16:9) | Prevent CLS |

### 9.2 Accessibility

- **Title Attribute**: Descriptive `title` on iframe (e.g., "Video: The Kuleshov Effect").
- **Captions**: Link to YouTube/Vimeo caption settings; consider embedding transcript toggle.
- **Play Button**: ARIA label `aria-label="Play video: {title}"`.
- **Keyboard**: Ensure play button is focusable and activates on Enter/Space.

### 9.3 Rich Snippets

Include `VideoObject` JSON-LD for each video:

```json
{
  "@type": "VideoObject",
  "name": "The Kuleshov Effect",
  "description": "How editing creates emotional meaning",
  "thumbnailUrl": "https://img.youtube.com/vi/xxx/maxresdefault.jpg",
  "uploadDate": "2024-01-15",
  "duration": "PT4M30S",
  "embedUrl": "https://www.youtube-nocookie.com/embed/xxx"
}
```

### 9.4 Timestamp Navigation

- Parse timestamps from frontmatter or inline props.
- Provide accessible button list with ARIA live region for screen readers.
- Update iframe `src` with `?start=` parameter on click.

---

## 10. Future Improvements Roadmap

### Phase 1: Polish (Post-Launch)

| Feature | Priority | Effort | Notes |
|---------|----------|--------|-------|
| OG Image Generation | High | 2h | Use `@vercel/og` or `satori` to create dynamic lesson cards |
| Search (Pagefind) | High | 3h | Integrate `@pagefind/default-ui` for client-side search |
| Reading Progress | Medium | 2h | Sticky progress bar on lessons |
| Print Styles | Medium | 1h | `@media print` for clean lesson PDFs |

### Phase 2: Interactivity

| Feature | Priority | Effort | Notes |
|---------|----------|--------|-------|
| Quiz Component | Medium | 4h | React island with local state, no backend |
| Video Annotations | Medium | 6h | Overlay timestamps with clickable markers |
| Student Portfolio Links | Low | 2h | Gallery of student work with consent |
| Discussion (Giscus) | Low | 1h | GitHub Discussions-powered comments |

### Phase 3: Localization

| Feature | Priority | Effort | Notes |
|---------|----------|--------|-------|
| Spanish Content | High | 10h | Translate 10 lessons |
| Language Switcher | High | 2h | Header toggle with localStorage |
| Hreflang Tags | High | 1h | SEO for multilingual |
| RTL Support | Low | 2h | If Arabic/Hebrew needed |

### Phase 4: Advanced Features

| Feature | Priority | Effort | Notes |
|---------|----------|--------|-------|
| LMS Integration | Low | 8h | SCORM/xAPI export for Moodle |
| Analytics (Plausible) | Low | 1h | Privacy-friendly analytics |
| PWA Support | Low | 2h | Offline lesson access |
| AI Tutor Island | Experimental | 10h | Claude API for Q&A on lessons |

### Phase 5: Maintenance

| Task | Frequency | Notes |
|------|-----------|-------|
| Dependency Updates | Monthly | `npm outdated` + manual review |
| Link Validation | Weekly | Automated via GitHub Actions |
| Video ID Check | Weekly | Ensure no broken embeds |
| Lighthouse Audit | Per deploy | Performance budget enforcement |
| Content Review | Semesterly | Update for curriculum changes |

---

## 11. Implementation Checklist

### Pre-Launch

- [ ] All 10 lessons migrated to MDX
- [ ] VideoPlayer with facade pattern working
- [ ] JSON-LD on homepage (Course) and lessons (LearningResource)
- [ ] ORCID in footer and JSON-LD
- [ ] Lighthouse ≥95 all categories
- [ ] pa11y-ci WCAG 2.1 AA passing
- [ ] GitHub Actions deploy pipeline green

### Post-Launch (Week 1)

- [ ] OG images generated
- [ ] Pagefind search integrated
- [ ] Google Search Console verified
- [ ] Analytics baseline established

### Ongoing

- [ ] Weekly link validation
- [ ] Monthly dependency updates
- [ ] Semester content refresh
