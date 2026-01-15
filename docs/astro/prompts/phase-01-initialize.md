# Phase 01 · Initialize the Astro Project

> **Goal:** Scaffold a production-ready Astro project with modern tooling for an award-worthy video editing course website.

---

## Prompt

You are an **Astro Expert and Digital Humanities Specialist** assisting me in building an award-worthy Astro site for the **Advertising Video Editing** course. The project lives at:

```
/Users/ruvebal/projects/ruvebal/scholar/udit/advertising-video_editing
```

Execute the following with precision:

### 1. Create Astro Project

```bash
npm create astro@latest . -- --template minimal --typescript strict --git
```

- Confirm TypeScript strict mode
- Initialize git if not present
- Accept defaults for other prompts

### 2. Install Core Integrations (Latest Versions)

```bash
npm install @astrojs/mdx @astrojs/react @astrojs/sitemap
npm install react react-dom
npm install -D tailwindcss@latest postcss autoprefixer
npm install -D @tailwindcss/typography @tailwindcss/forms @tailwindcss/aspect-ratio
npx tailwindcss init -p
```

### 3. Configure `astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ruvebal.github.io',
  base: '/advertising-video_editing',
  integrations: [
    mdx(),
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES', en: 'en-US' }
      }
    }),
    tailwind({ applyBaseStyles: false })
  ],
  markdown: {
    shikiConfig: { theme: 'github-dark', wrap: true }
  },
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@data': '/src/data',
        '@utils': '/src/utils',
        '@styles': '/src/styles',
        '@locales': '/src/locales'
      }
    }
  }
});
```

### 4. Configure `tailwind.config.mjs`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'kino-red': { 500: '#e74c3c', 600: '#c0392b', 700: '#a93226' },
        'kino-dark': { 900: '#1a1a1a', 800: '#2c2c2c', 700: '#404040' },
        'kino-light': { 100: '#f8f9fa', 200: '#e9ecef', 300: '#dee2e6' }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace']
      },
      aspectRatio: { 'video': '16 / 9' },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-links': theme('colors.kino-red.500'),
            maxWidth: '75ch'
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ]
};
```

### 5. Seed Project Structure

```
src/
├── components/          # Reusable UI components
│   └── index.ts         # Barrel export
├── layouts/             # Page layouts
│   ├── BaseLayout.astro
│   └── LessonLayout.astro
├── pages/               # File-based routing
│   ├── index.astro
│   └── prompts/
├── content/             # Content collections
│   └── config.ts
├── data/                # JSON/TS data sources
│   ├── weeks.ts
│   ├── videos.json
│   └── author.ts        # Author metadata (ORCID, etc.)
├── locales/             # i18n strings
│   ├── en.json
│   └── es.json
├── styles/
│   ├── global.css       # Tailwind imports + tokens
│   └── video.css        # Video-specific styles
├── utils/
│   └── metadata.ts      # JSON-LD builders
└── types/
    └── frontmatter.d.ts
public/
├── fonts/               # Self-hosted fonts
├── images/
└── favicon.svg
```

### 6. Create `src/data/author.ts` (Academic Identity)

```typescript
export const author = {
  name: 'Rubén Vega Balbás, PhD',
  email: 'ruben.vega@udit.es',
  url: 'https://www.udit.es/professors/ruben-vega-balbas',
  orcid: 'https://orcid.org/0000-0001-6862-9081',
  affiliation: {
    name: 'UDIT, University of Design, Innovation and Technology',
    url: 'https://www.udit.es',
    address: 'Av. Alfonso XIII, 97, 28016 Madrid, Spain'
  },
  sameAs: [
    'https://github.com/ruvebal',
    'https://mastodon.social/@ruvebal',
    'http://www.ruvebal.art/'
  ]
};
```

### 7. Create `src/styles/global.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-accent: theme('colors.kino-red.500');
    --color-accent-dark: theme('colors.kino-red.600');
    color-scheme: light dark;
  }
  
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
  
  html { scroll-behavior: smooth; }
  
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
  }
}

@layer components {
  .skip-link {
    @apply absolute -top-10 left-0 bg-kino-red-500 text-white px-4 py-2 z-50 focus:top-0 transition-all;
  }
}
```

### 8. Performance Budget Targets

| Metric | Target | Notes |
|--------|--------|-------|
| First Contentful Paint | < 1.5s | 3G throttle |
| Largest Contentful Paint | < 2.5s | Hero image optimization |
| Cumulative Layout Shift | < 0.1 | Reserve space for embeds |
| Total Blocking Time | < 200ms | Minimal JS islands |
| Bundle per page | < 80KB | Monitor with build stats |

---

## Implementation Report Template

Upon completion, produce a Markdown report:

```markdown
# Phase 01 Implementation Report

## Summary
- Astro version: X.X.X
- Tailwind version: X.X.X
- Node version: X.X.X

## Commands Executed
1. `npm create astro@latest ...`
2. `npm install ...`

## Files Generated
- `astro.config.mjs` ✅
- `tailwind.config.mjs` ✅
- `tsconfig.json` ✅
- `src/data/author.ts` ✅
- `src/styles/global.css` ✅

## Directory Structure
[tree output]

## Deviations & Notes
- [Any issues encountered]

## Next Steps
- Proceed to Phase 02: Layouts
```
