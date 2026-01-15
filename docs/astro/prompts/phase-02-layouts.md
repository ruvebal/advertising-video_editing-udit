# Phase 02 · Craft Base & Lesson Layouts

> **Goal:** Create semantic, accessible layouts with rich JSON-LD metadata for academic discoverability and award-worthy visual polish.

---

## Prompt

You are an **Astro Expert and Digital Humanities Specialist** designing premium layouts for the **Advertising Video Editing** course site at:

```
/Users/ruvebal/projects/ruvebal/scholar/udit/advertising-video_editing
```

---

## Task 1: Create `src/utils/metadata.ts` (JSON-LD Builders)

```typescript
import { author } from '@data/author';

interface PageMeta {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  type?: 'Course' | 'LearningResource' | 'Article';
  week?: number;
  keywords?: string[];
}

export function buildCourseJsonLd(meta: PageMeta) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: meta.title,
    description: meta.description,
    url: meta.url,
    provider: {
      '@type': 'CollegeOrUniversity',
      name: author.affiliation.name,
      url: author.affiliation.url
    },
    instructor: {
      '@type': 'Person',
      name: author.name,
      identifier: {
        '@type': 'PropertyValue',
        propertyID: 'ORCID',
        value: author.orcid
      },
      affiliation: {
        '@type': 'CollegeOrUniversity',
        name: author.affiliation.name,
        url: author.affiliation.url
      },
      sameAs: author.sameAs
    },
    educationalLevel: 'Undergraduate',
    courseCode: 'AVE-301',
    numberOfCredits: 6,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'blended',
      courseWorkload: 'PT60H'
    },
    license: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
    inLanguage: ['es', 'en'],
    keywords: meta.keywords || ['video editing', 'advertising', 'film theory', 'Adobe Premiere']
  };
}

export function buildLessonJsonLd(meta: PageMeta) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: meta.title,
    description: meta.description,
    url: meta.url,
    datePublished: meta.datePublished,
    dateModified: meta.dateModified,
    author: {
      '@type': 'Person',
      name: author.name,
      identifier: {
        '@type': 'PropertyValue',
        propertyID: 'ORCID',
        value: author.orcid
      }
    },
    publisher: {
      '@type': 'Organization',
      name: 'ADVERTISING VIDEO EDITING (UDIT)',
      url: 'https://github.com/ruvebal/advertising-video_editing'
    },
    educationalLevel: 'Undergraduate',
    learningResourceType: 'lesson',
    isPartOf: {
      '@type': 'Course',
      name: 'Advertising Video Editing',
      url: 'https://ruvebal.github.io/advertising-video_editing/'
    },
    position: meta.week,
    license: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
    keywords: meta.keywords
  };
}
```

---

## Task 2: Create `src/layouts/BaseLayout.astro`

```astro
---
import Header from '@components/Header.astro';
import Footer from '@components/Footer.astro';
import { buildCourseJsonLd } from '@utils/metadata';
import '@styles/global.css';

interface Props {
  title: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  jsonLd?: Record<string, unknown>;
  lang?: 'en' | 'es';
  alternateUrl?: string;
}

const {
  title,
  description = 'Advertising Video Editing: A comprehensive course blending theory, technique, and ethics.',
  image = '/images/og-hero.jpg',
  type = 'website',
  jsonLd,
  lang = 'es',
  alternateUrl
} = Astro.props;

const canonicalUrl = new URL(Astro.url.pathname, Astro.site);
const ogImage = new URL(image, Astro.site);
const alternateLang = lang === 'es' ? 'en' : 'es';
---

<!DOCTYPE html>
<html lang={lang} class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <meta name="color-scheme" content="light dark" />
  <meta name="theme-color" content="#e74c3c" />
  
  <title>{title} · Advertising Video Editing</title>
  <meta name="description" content={description} />
  <meta name="author" content="Rubén Vega Balbás, PhD" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href={`${import.meta.env.BASE_URL}favicon.svg`} />
  
  <!-- Canonical & Alternates -->
  <link rel="canonical" href={canonicalUrl} />
  {alternateUrl && (
    <>
      <link rel="alternate" hreflang={alternateLang} href={alternateUrl} />
      <link rel="alternate" hreflang={lang} href={canonicalUrl.toString()} />
      <link rel="alternate" hreflang="x-default" href={canonicalUrl.toString()} />
    </>
  )}
  
  <!-- Open Graph -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content={type} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="Advertising Video Editing" />
  <meta property="og:locale" content={lang === 'es' ? 'es_ES' : 'en_US'} />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />
  
  <!-- Preload fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Merriweather:ital@0;1&display=swap" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Merriweather:ital@0;1&display=swap" />
  
  <!-- JSON-LD Structured Data -->
  {jsonLd && (
    <script type="application/ld+json" set:html={JSON.stringify(jsonLd)} />
  )}
</head>
<body class="bg-white dark:bg-kino-dark-900 text-slate-900 dark:text-slate-100 antialiased">
  <a href="#main-content" class="skip-link">Skip to main content</a>
  
  <Header lang={lang} />
  
  <main id="main-content" role="main">
    <slot />
  </main>
  
  <Footer />
  
  <!-- Theme toggle script -->
  <script>
    const toggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Check system preference or stored preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      html.classList.add('dark');
    }
    
    toggle?.addEventListener('click', () => {
      html.classList.toggle('dark');
      localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
    });
  </script>
</body>
</html>
```

---

## Task 3: Create `src/layouts/LessonLayout.astro`

```astro
---
import BaseLayout from './BaseLayout.astro';
import { buildLessonJsonLd } from '@utils/metadata';

interface WeekNav {
  title: string;
  slug: string;
}

interface Props {
  frontmatter: {
    title: string;
    week: number;
    description?: string;
    heroImage?: string;
    prevWeek?: WeekNav | null;
    nextWeek?: WeekNav | null;
    keywords?: string[];
    datePublished?: string;
    dateModified?: string;
  };
  headings?: Array<{ depth: number; slug: string; text: string }>;
}

const { frontmatter, headings = [] } = Astro.props;
const { title, week, description, heroImage, prevWeek, nextWeek, keywords, datePublished, dateModified } = frontmatter;

const base = import.meta.env.BASE_URL;
const canonicalUrl = new URL(Astro.url.pathname, Astro.site).toString();

const jsonLd = buildLessonJsonLd({
  title,
  description: description || `Week ${week} of the Advertising Video Editing course`,
  url: canonicalUrl,
  week,
  keywords,
  datePublished,
  dateModified
});

const toc = headings.filter(h => h.depth <= 3);
---

<BaseLayout title={title} description={description} image={heroImage} type="article" jsonLd={jsonLd}>
  <article class="lesson" itemscope itemtype="https://schema.org/LearningResource">
    <meta itemprop="position" content={String(week)} />
    
    <!-- Hero Header -->
    <header class="relative py-16 px-4 bg-gradient-to-br from-kino-dark-900 via-kino-dark-800 to-kino-red-700 text-white">
      <div class="max-w-4xl mx-auto text-center">
        <span class="inline-block px-4 py-2 bg-kino-red-500 rounded-full text-sm font-semibold mb-4 shadow-lg">
          Week {week} of 10
        </span>
        <h1 class="text-3xl md:text-5xl font-bold mb-4" itemprop="name">{title}</h1>
        {description && (
          <p class="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto" itemprop="description">
            {description}
          </p>
        )}
      </div>
    </header>
    
    <!-- Sticky Navigation -->
    <nav class="sticky top-16 z-30 bg-white/95 dark:bg-kino-dark-900/95 backdrop-blur border-b border-slate-200 dark:border-kino-dark-700" aria-label="Lesson navigation">
      <div class="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        {prevWeek ? (
          <a href={`${base}prompts/${prevWeek.slug}/`} class="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-kino-red-500 transition-colors">
            <span aria-hidden="true">←</span>
            <span class="hidden sm:inline">Week {week - 1}</span>
          </a>
        ) : <div></div>}
        
        <a href={base} class="text-sm font-semibold text-kino-red-500 hover:text-kino-red-600">
          All Weeks
        </a>
        
        {nextWeek ? (
          <a href={`${base}prompts/${nextWeek.slug}/`} class="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-kino-red-500 transition-colors">
            <span class="hidden sm:inline">Week {week + 1}</span>
            <span aria-hidden="true">→</span>
          </a>
        ) : <div></div>}
      </div>
    </nav>
    
    <!-- Content with optional TOC -->
    <div class="max-w-6xl mx-auto px-4 py-12 lg:grid lg:grid-cols-[1fr_250px] lg:gap-12">
      <div class="prose prose-slate dark:prose-invert prose-lg max-w-none prose-headings:scroll-mt-24 prose-a:text-kino-red-500 prose-a:no-underline hover:prose-a:underline">
        <slot />
      </div>
      
      <!-- Table of Contents (desktop) -->
      {toc.length > 0 && (
        <aside class="hidden lg:block">
          <nav class="sticky top-32" aria-label="Table of contents">
            <h2 class="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-4">On this page</h2>
            <ul class="space-y-2 text-sm">
              {toc.map(heading => (
                <li style={`padding-left: ${(heading.depth - 2) * 0.75}rem`}>
                  <a href={`#${heading.slug}`} class="text-slate-600 dark:text-slate-400 hover:text-kino-red-500 transition-colors">
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      )}
    </div>
    
    <!-- Footer Navigation -->
    <footer class="border-t border-slate-200 dark:border-kino-dark-700 py-8 px-4">
      <nav class="max-w-4xl mx-auto flex justify-between" aria-label="Lesson pagination">
        {prevWeek ? (
          <a href={`${base}prompts/${prevWeek.slug}/`} class="group flex flex-col">
            <span class="text-sm text-slate-500">Previous</span>
            <span class="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-kino-red-500">
              ← {prevWeek.title}
            </span>
          </a>
        ) : <div></div>}
        
        {nextWeek ? (
          <a href={`${base}prompts/${nextWeek.slug}/`} class="group flex flex-col text-right">
            <span class="text-sm text-slate-500">Next</span>
            <span class="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-kino-red-500">
              {nextWeek.title} →
            </span>
          </a>
        ) : <div></div>}
      </nav>
    </footer>
  </article>
</BaseLayout>
```

---

## Task 4: Create `src/components/Header.astro`

```astro
---
interface Props {
  lang?: 'en' | 'es';
}

const { lang = 'es' } = Astro.props;
const base = import.meta.env.BASE_URL;
---

<header class="bg-white dark:bg-kino-dark-900 border-b border-slate-200 dark:border-kino-dark-700 sticky top-0 z-40 backdrop-blur-sm bg-opacity-95">
  <nav class="max-w-6xl mx-auto px-4 py-4" aria-label="Main navigation">
    <div class="flex items-center justify-between">
      <a href={base} class="flex items-center gap-3 font-bold text-xl text-slate-900 dark:text-white hover:text-kino-red-500 transition-colors">
        <span class="text-2xl" aria-hidden="true">🎬</span>
        <span class="hidden sm:inline">Advertising Video Editing</span>
        <span class="sm:hidden">AVE</span>
      </a>
      
      <ul class="flex items-center gap-4 md:gap-6 text-sm">
        <li>
          <a href={`${base}curriculum/`} class="text-slate-600 dark:text-slate-400 hover:text-kino-red-500 transition-colors">
            {lang === 'es' ? 'Currículum' : 'Curriculum'}
          </a>
        </li>
        <li>
          <a href={`${base}resources/`} class="text-slate-600 dark:text-slate-400 hover:text-kino-red-500 transition-colors">
            {lang === 'es' ? 'Recursos' : 'Resources'}
          </a>
        </li>
        <li>
          <button id="theme-toggle" class="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="Toggle theme">
            <span class="dark:hidden">🌙</span>
            <span class="hidden dark:inline">☀️</span>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</header>
```

---

## Task 5: Create `src/components/Footer.astro`

```astro
---
import { author } from '@data/author';

const currentYear = new Date().getFullYear();
---

<footer class="bg-slate-50 dark:bg-kino-dark-800 border-t border-slate-200 dark:border-kino-dark-700 mt-16 pt-12 pb-8">
  <div class="max-w-4xl mx-auto px-4">
    <!-- Brand -->
    <p class="font-semibold text-slate-900 dark:text-white mb-2">
      ADVERTISING VIDEO EDITING (UDIT)
    </p>
    <p class="italic text-slate-600 dark:text-slate-400 mb-4">
      The Tao of the Video Editor — Critical Coding for a Better Living.
    </p>
    
    <!-- Licenses -->
    <div class="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
      <a href="https://github.com/ruvebal/advertising-video_editing/blob/main/LICENSE-CODE" target="_blank" rel="noopener noreferrer" class="hover:text-kino-red-500 underline">
        Code: MIT
      </a>
      <span>·</span>
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer" class="hover:text-kino-red-500 underline">
        Content: CC BY-NC-SA 4.0
      </a>
    </div>
    
    <!-- Author -->
    <p class="text-sm text-slate-600 dark:text-slate-400 mb-6">
      © {currentYear} {author.name} — {author.affiliation.name}
      <br />
      ORCID: <a href={author.orcid} class="text-kino-red-500 hover:underline">{author.orcid}</a>
    </p>
    
    <!-- Institution -->
    <div class="border-t border-slate-200 dark:border-kino-dark-700 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <p class="text-xs font-semibold text-slate-900 dark:text-white mb-2">Contact</p>
        <p class="text-xs text-slate-600 dark:text-slate-400">{author.affiliation.address}</p>
        <a href={`mailto:${author.email}`} class="text-xs text-kino-red-500 hover:underline">{author.email}</a>
      </div>
      <div>
        <p class="text-xs font-semibold text-slate-900 dark:text-white mb-2">Follow</p>
        <ul class="flex flex-wrap gap-3 text-xs">
          <li><a href="https://github.com/ruvebal" target="_blank" rel="noopener" class="text-slate-600 dark:text-slate-400 hover:text-kino-red-500">GitHub</a></li>
          <li><a href="https://mastodon.social/@ruvebal" target="_blank" rel="noopener" class="text-slate-600 dark:text-slate-400 hover:text-kino-red-500">Mastodon</a></li>
          <li><a href="https://www.youtube.com/@UDIT_ES" target="_blank" rel="noopener" class="text-slate-600 dark:text-slate-400 hover:text-kino-red-500">YouTube</a></li>
        </ul>
      </div>
    </div>
    
    <!-- UDIT Logo -->
    <div class="mt-6 pt-6 border-t border-slate-200 dark:border-kino-dark-700">
      <a href={author.affiliation.url} target="_blank" rel="noopener">
        <img src="https://assets.griddo.udit.es/pro-udit/static/logo-udit-218a5df2b42af4ad4d649285a262f6e6.png" alt="UDIT logo" class="h-8 w-auto opacity-75 hover:opacity-100 transition-opacity" loading="lazy" />
      </a>
    </div>
  </div>
</footer>
```

---

## Task 6: Create `src/types/frontmatter.d.ts`

```typescript
export interface WeekNav {
  title: string;
  slug: string;
}

export interface LessonFrontmatter {
  layout: string;
  title: string;
  week: number;
  description?: string;
  heroImage?: string;
  prevWeek?: WeekNav | null;
  nextWeek?: WeekNav | null;
  keywords?: string[];
  datePublished?: string;
  dateModified?: string;
  videoPlaylistId?: string;
}

export interface PageFrontmatter {
  title: string;
  description?: string;
  image?: string;
}
```

---

## Implementation Report Template

```markdown
# Phase 02 Implementation Report

## Files Created
- `src/utils/metadata.ts` ✅ (JSON-LD builders with ORCID, schema.org)
- `src/layouts/BaseLayout.astro` ✅ (OG, Twitter, canonical, hreflang, theme toggle)
- `src/layouts/LessonLayout.astro` ✅ (week nav, TOC, microdata)
- `src/components/Header.astro` ✅ (responsive, theme toggle, i18n-ready)
- `src/components/Footer.astro` ✅ (licenses, ORCID, institution)
- `src/types/frontmatter.d.ts` ✅

## SEO & Metadata
- JSON-LD: Course, LearningResource schemas
- Open Graph: title, description, image, type
- Twitter Cards: summary_large_image
- Canonical URLs + hreflang alternates
- ORCID identifier for academic graphs

## Accessibility
- Skip link with focus-visible
- ARIA landmarks (navigation, main, footer)
- Semantic HTML (article, header, nav, footer)
- Keyboard-accessible theme toggle

## Tailwind Features
- Dark mode via class strategy
- Typography plugin for prose
- Responsive grid (lg:grid-cols-[1fr_250px])
- Backdrop blur, gradients, transitions

## Next Steps
- Proceed to Phase 03: Components
```
