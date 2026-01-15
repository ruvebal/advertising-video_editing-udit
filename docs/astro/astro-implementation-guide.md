# Astro Implementation Guide: Video Editing Course Website
## Modern Static Site with Islands Architecture for the Kino-Web-Sphere

**Document Version:** 1.0  
**Date:** January 4, 2025  
**For:** Prof. Rubén Vega Balbás  
**Purpose:** Alternative implementation using Astro for video editing course website

---

> *"The Tao of Astro: Ship less JavaScript, load faster, teach better. Islands of interactivity in an ocean of static content."*

---

## Executive Summary

**Strategy:** Build from scratch with Astro → leverage Markdown content → add interactive video components as needed.

**Why Consider Astro:**
1. ✅ **Zero JavaScript by default** (faster than Jekyll)
2. ✅ **Built-in Markdown support** (your lessons work as-is)
3. ✅ **Component islands** (interactive video players without full SPA)
4. ✅ **Modern DX** (TypeScript, Vite, hot reload)
5. ✅ **GitHub Pages compatible** (static output)
6. ✅ **Future-proof** (easy to add React/Vue/Svelte later)

**Key Advantages Over Jekyll:**
- 🚀 **10-100x faster builds** (seconds vs minutes)
- 🎨 **Modern component model** (`.astro` files)
- 🔧 **Better TypeScript support** (type-safe props)
- 📦 **NPM ecosystem** (use any JS library)
- 🎬 **Better video integration** (custom players, no Liquid hacks)

**Time Investment:**
- Astro setup: **3-4 hours** (new to you)
- Content migration: **1-2 hours** (Markdown works as-is)
- **Total: 4-6 hours** (vs 4-7 for Jekyll)

**Trade-off:** Learning curve (new framework) vs. modern tooling and performance.

---

## Table of Contents

1. [Why Astro for Video Teaching](#why-astro-for-video-teaching)
2. [Astro vs Jekyll Comparison](#astro-vs-jekyll-comparison)
3. [Architecture Overview](#architecture-overview)
4. [Implementation Plan: Step-by-Step](#implementation-plan-step-by-step)
5. [Project Structure](#project-structure)
6. [Configuration](#configuration)
7. [Component Development](#component-development)
8. [Content Integration](#content-integration)
9. [Video Integration Strategy](#video-integration-strategy)
10. [Deployment to GitHub Pages](#deployment-to-github-pages)
11. [AI Prompts for Implementation](#ai-prompts-for-implementation)
12. [Migration Path: Jekyll → Astro](#migration-path-jekyll--astro)

---

## Why Astro for Video Teaching

### The Islands Architecture Philosophy

> *"In the Kino-Web-Sphere, most content is static—text, images, embedded videos. Only specific interactions need JavaScript. Astro's islands architecture honors this truth."*

**Astro's Islands:**
- 📄 **Static by default** - HTML pages with zero JS
- 🏝️ **Interactive islands** - Add JS only where needed (video players, timestamps)
- 🚀 **Partial hydration** - Load JS progressively
- 🎯 **Performance first** - Students on slow connections benefit

**Perfect for Video Course:**
- Lesson text: **Static HTML** (no JS needed)
- Video embeds: **Static iframe** (YouTube/Vimeo handles playback)
- Timestamp navigation: **Interactive island** (small JS bundle)
- Playlists: **Interactive island** (only if clicked)

### Astro's Markdown Superpowers

**Your lessons are already Markdown.** Astro treats Markdown as first-class:

```markdown
---
title: "Week 1: Introduction to Persuasion"
week: 1
---

# Introduction to Advertising & Editing Persuasion

<VideoPlayer platform="youtube" id="dQw4w9WgXcQ" />

<TaoQuote>
  The cut creates meaning where none existed before.
</TaoQuote>
```

**Astro compiles this to:**
- Static HTML (fast)
- Scoped CSS (no conflicts)
- Optional JS (only for interactive components)

### Modern Developer Experience

**Astro provides:**
- ⚡ **Instant hot reload** (see changes immediately)
- 🔍 **TypeScript support** (catch errors early)
- 🎨 **Component syntax** (HTML-like, easy to learn)
- 📦 **NPM packages** (use any video library)
- 🛠️ **Vite build tool** (modern, fast)

**Jekyll provides:**
- 🐌 Slow builds (Ruby)
- 🔧 Liquid templates (verbose)
- 💎 Gem dependencies (Ruby ecosystem)
- 📝 Limited interactivity

---

## Astro vs Jekyll Comparison

| Aspect | Jekyll | Astro |
|--------|--------|-------|
| **Build Speed** | 🐌 Slow (30s-2m) | ⚡ Fast (1-5s) |
| **Learning Curve** | ✅ You know it | ⚠️ New (but easy) |
| **Markdown Support** | ✅ Excellent | ✅ Excellent |
| **Component Model** | ❌ Liquid includes | ✅ `.astro` components |
| **TypeScript** | ❌ No | ✅ Built-in |
| **Video Integration** | ⚠️ Liquid hacks | ✅ Native components |
| **Interactivity** | ❌ Limited | ✅ Islands architecture |
| **NPM Packages** | ❌ No | ✅ Yes |
| **Hot Reload** | ⚠️ Slow | ⚡ Instant |
| **GitHub Pages** | ✅ Native | ✅ Via GitHub Actions |
| **Setup Time** | ✅ 2-4 hours | ⚠️ 3-4 hours |
| **Maintenance** | ✅ Minimal | ✅ Minimal |
| **Future-Proof** | ⚠️ Ruby declining | ✅ Modern JS ecosystem |
| **Performance** | ✅ Good | ✅ Excellent |

### Decision Matrix

**Choose Jekyll if:**
- ✅ You want to start immediately (familiar)
- ✅ You don't want to learn new tools
- ✅ You're comfortable with Liquid templates
- ✅ You don't need interactive features

**Choose Astro if:**
- ✅ You want modern tooling
- ✅ You're open to learning (gentle curve)
- ✅ You want better video integration
- ✅ You might add interactivity later (quizzes, annotations)
- ✅ You value performance and build speed

---

## Architecture Overview

### Astro Project Structure

```
advertising-video_editing/
├── src/
│   ├── pages/                         # Routes (file-based)
│   │   ├── index.astro                # Homepage
│   │   ├── curriculum.md              # Course overview
│   │   ├── resources.md               # Resource library
│   │   └── prompts/                   # Lesson pages
│   │       ├── week-01.md
│   │       ├── week-02.md
│   │       └── ... (all 10 weeks)
│   ├── layouts/
│   │   ├── BaseLayout.astro           # Base HTML structure
│   │   └── LessonLayout.astro         # Lesson template
│   ├── components/
│   │   ├── Header.astro               # Site header
│   │   ├── Footer.astro               # Site footer
│   │   ├── VideoPlayer.astro          # YouTube/Vimeo embed
│   │   ├── TaoQuote.astro             # Quote component
│   │   ├── VideoPlaylist.astro        # Playlist display
│   │   ├── WeekCard.astro             # Week card component
│   │   └── TimestampNav.tsx           # Interactive timestamps (React island)
│   ├── data/
│   │   └── videos.json                # Video metadata
│   └── styles/
│       ├── global.css                 # Global styles
│       └── video.css                  # Video-specific styles
├── public/                            # Static assets
│   ├── images/
│   └── favicon.svg
├── astro.config.mjs                   # Astro configuration
├── tsconfig.json                      # TypeScript config
├── package.json                       # Dependencies
└── README.md
```

### How Astro Works

**Build Process:**
1. **Markdown → HTML** - Your `.md` lessons compile to static HTML
2. **Components → HTML** - `.astro` components render to HTML
3. **Islands → JS** - Interactive components get minimal JS
4. **Output → `dist/`** - Static site ready for GitHub Pages

**Runtime:**
- Most pages: **0 KB JavaScript** (pure HTML/CSS)
- Interactive pages: **Only necessary JS** (e.g., timestamp navigation)
- Video embeds: **YouTube/Vimeo handles it** (no custom JS needed)

---

## Implementation Plan: Step-by-Step

### Phase 1: Initialize Astro Project (30 minutes)

**Step 1.1: Create Astro Project**

```bash
cd /Users/ruvebal/projects/ruvebal/scholar/udit/advertising-video_editing

# Create Astro project (use template)
npm create astro@latest . -- --template minimal --typescript strict --git

# Answer prompts:
# - Install dependencies? Yes
# - Initialize git? Yes (if not already initialized)
```

**Step 1.2: Install Additional Dependencies**

```bash
# Install Markdown plugins
npm install @astrojs/mdx

# Install React for interactive islands (optional)
npm install @astrojs/react react react-dom

# Install Tailwind CSS (optional, for styling)
npm install @astrojs/tailwind tailwindcss
```

**Step 1.3: Update `astro.config.mjs`**

```javascript
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ruvebal.github.io',
  base: '/advertising-video_editing',
  integrations: [
    mdx(),
    react(),
    tailwind()
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
```

### Phase 2: Create Base Layouts (45 minutes)

**Step 2.1: Create `src/layouts/BaseLayout.astro`**

```astro
---
interface Props {
  title: string;
  description?: string;
}

const { title, description = 'Advertising Video Editing Course' } = Astro.props;
const { base } = Astro.site ? { base: import.meta.env.BASE_URL } : { base: '/' };
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} | Advertising Video Editing</title>
  <meta name="description" content={description}>
  <link rel="icon" type="image/svg+xml" href={`${base}favicon.svg`}>
  
  <!-- SEO -->
  <meta property="og:title" content={title}>
  <meta property="og:description" content={description}>
  <meta property="og:type" content="website">
  
  <!-- Fonts (optional) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  
  <Header />
  
  <main id="main-content">
    <slot />
  </main>
  
  <Footer />
</body>
</html>

<style is:global>
  :root {
    --accent: #e74c3c;
    --accent-dark: #c0392b;
    --text-primary: #2c3e50;
    --text-secondary: #7f8c8d;
    --bg-primary: #ffffff;
    --bg-secondary: #f8f9fa;
    --border-color: #dee2e6;
  }
  
  @media (prefers-color-scheme: dark) {
    :root {
      --text-primary: #ecf0f1;
      --text-secondary: #bdc3c7;
      --bg-primary: #1a1a1a;
      --bg-secondary: #2c2c2c;
      --border-color: #404040;
    }
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Inter', system-ui, sans-serif;
    line-height: 1.6;
    color: var(--text-primary);
    background: var(--bg-primary);
  }
  
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--accent);
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 100;
  }
  
  .skip-link:focus {
    top: 0;
  }
</style>
```

**Step 2.2: Create `src/layouts/LessonLayout.astro`**

```astro
---
import BaseLayout from './BaseLayout.astro';

interface Props {
  frontmatter: {
    title: string;
    week: number;
    description?: string;
    prevWeek?: { title: string; slug: string };
    nextWeek?: { title: string; slug: string };
  };
}

const { frontmatter } = Astro.props;
const { title, week, description, prevWeek, nextWeek } = frontmatter;
---

<BaseLayout title={title} description={description}>
  <article class="lesson">
    <header class="lesson-header">
      <div class="week-badge">Week {week} of 10</div>
      <h1>{title}</h1>
      {description && <p class="lead">{description}</p>}
    </header>
    
    <nav class="lesson-nav" aria-label="Lesson navigation">
      {prevWeek && (
        <a href={`/advertising-video_editing/prompts/${prevWeek.slug}/`} class="nav-btn prev">
          ← Week {week - 1}: {prevWeek.title}
        </a>
      )}
      
      <a href="/advertising-video_editing/" class="nav-btn home">
        ↑ All Weeks
      </a>
      
      {nextWeek && (
        <a href={`/advertising-video_editing/prompts/${nextWeek.slug}/`} class="nav-btn next">
          Week {week + 1}: {nextWeek.title} →
        </a>
      )}
    </nav>
    
    <div class="lesson-content prose">
      <slot />
    </div>
    
    <footer class="lesson-footer">
      <nav class="lesson-nav" aria-label="Lesson navigation">
        {prevWeek && (
          <a href={`/advertising-video_editing/prompts/${prevWeek.slug}/`} class="nav-btn prev">
            ← Previous Week
          </a>
        )}
        
        {nextWeek && (
          <a href={`/advertising-video_editing/prompts/${nextWeek.slug}/`} class="nav-btn next">
            Next Week →
          </a>
        )}
      </nav>
    </footer>
  </article>
</BaseLayout>

<style>
  .lesson-header {
    text-align: center;
    padding: 3rem 2rem;
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border-color);
  }
  
  .week-badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--accent);
    color: white;
    border-radius: 4px;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .lesson-header h1 {
    margin: 0.5rem 0;
    font-size: 2.5rem;
  }
  
  .lesson-header .lead {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 1rem auto 0;
  }
  
  .lesson-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem 2rem;
    background: var(--bg-primary);
    border-bottom: 1px solid var(--border-color);
  }
  
  .lesson-footer .lesson-nav {
    border-bottom: none;
    border-top: 1px solid var(--border-color);
  }
  
  .nav-btn {
    padding: 0.75rem 1.5rem;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 4px;
    text-decoration: none;
    color: var(--text-primary);
    font-weight: 600;
    transition: all 0.2s;
  }
  
  .nav-btn:hover {
    background: var(--accent);
    color: white;
    border-color: var(--accent);
  }
  
  .lesson-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 3rem 2rem;
  }
  
  .prose {
    line-height: 1.8;
  }
  
  .prose h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }
  
  .prose h3 {
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    font-size: 1.4rem;
  }
  
  .prose p {
    margin-bottom: 1rem;
  }
  
  .prose ul, .prose ol {
    margin-bottom: 1rem;
    padding-left: 2rem;
  }
  
  .prose li {
    margin-bottom: 0.5rem;
  }
  
  @media (max-width: 768px) {
    .lesson-header h1 {
      font-size: 2rem;
    }
    
    .lesson-nav {
      flex-direction: column;
    }
    
    .nav-btn {
      width: 100%;
      text-align: center;
    }
  }
</style>
```

### Phase 3: Create Video Components (1 hour)

**Step 3.1: Create `src/components/VideoPlayer.astro`**

```astro
---
interface Props {
  platform: 'youtube' | 'vimeo';
  id: string;
  title?: string;
  timestamps?: string; // Format: "0:00|Intro,1:45|Main,3:20|End"
}

const { platform, id, title = 'Video', timestamps } = Astro.props;

const embedUrl = platform === 'youtube'
  ? `https://www.youtube-nocookie.com/embed/${id}`
  : `https://player.vimeo.com/video/${id}`;

const parsedTimestamps = timestamps
  ? timestamps.split(',').map(ts => {
      const [time, label] = ts.split('|');
      return { time, label };
    })
  : null;
---

<div class="video-player" data-video-id={id}>
  <div class="video-container">
    <iframe
      src={embedUrl}
      title={title}
      frameborder="0"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  
  {parsedTimestamps && (
    <div class="video-timestamps">
      <h4>Key Moments:</h4>
      <ul>
        {parsedTimestamps.map(({ time, label }) => (
          <li>
            <button class="timestamp-btn" data-time={time}>
              <span class="time">{time}</span>
              <span class="label">{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>

<style>
  .video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    margin: 2rem 0;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  
  .video-timestamps {
    margin-top: 1rem;
    padding: 1rem;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  
  .video-timestamps h4 {
    margin-top: 0;
    font-size: 1rem;
    color: var(--text-primary);
  }
  
  .video-timestamps ul {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0 0 0;
  }
  
  .timestamp-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.5rem;
    background: transparent;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
    text-align: left;
    margin-bottom: 0.5rem;
  }
  
  .timestamp-btn:hover {
    background: var(--bg-primary);
    border-color: var(--accent);
  }
  
  .timestamp-btn .time {
    font-weight: 600;
    color: var(--accent);
    font-family: monospace;
  }
  
  .timestamp-btn .label {
    color: var(--text-secondary);
  }
</style>

<script>
  // Timestamp navigation
  document.querySelectorAll('.timestamp-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const time = (button as HTMLButtonElement).dataset.time;
      if (!time) return;
      
      const [minutes, seconds] = time.split(':').map(Number);
      const totalSeconds = minutes * 60 + seconds;
      
      const videoPlayer = button.closest('.video-player');
      const iframe = videoPlayer?.querySelector('iframe');
      if (!iframe) return;
      
      const src = iframe.src.split('?')[0];
      iframe.src = `${src}?start=${totalSeconds}&autoplay=1`;
      
      videoPlayer?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
</script>
```

**Step 3.2: Create `src/components/TaoQuote.astro`**

```astro
---
interface Props {
  quote?: string;
}

const { quote } = Astro.props;
---

<blockquote class="tao-quote">
  {quote ? (
    <p>{quote}</p>
  ) : (
    <slot />
  )}
  <cite>— Tao of the Video Editor</cite>
</blockquote>

<style>
  .tao-quote {
    margin: 2rem 0;
    padding: 1.5rem;
    border-left: 4px solid var(--accent);
    background: linear-gradient(to right, rgba(231, 76, 60, 0.05), transparent);
    border-radius: 0 8px 8px 0;
    font-style: italic;
  }
  
  .tao-quote p {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--text-primary);
  }
  
  .tao-quote cite {
    display: block;
    font-size: 0.9rem;
    color: var(--text-secondary);
    font-style: normal;
  }
</style>
```

**Step 3.3: Create `src/components/WeekCard.astro`**

```astro
---
interface Props {
  week: number;
  title: string;
  description: string;
  slug: string;
}

const { week, title, description, slug } = Astro.props;
const base = import.meta.env.BASE_URL;
---

<article class="week-card">
  <div class="week-number">Week {week}</div>
  <h3>
    <a href={`${base}prompts/${slug}/`}>{title}</a>
  </h3>
  <p>{description}</p>
  <a href={`${base}prompts/${slug}/`} class="read-more">Read lesson →</a>
</article>

<style>
  .week-card {
    padding: 1.5rem;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    transition: all 0.3s;
  }
  
  .week-card:hover {
    border-color: var(--accent);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  
  .week-number {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: var(--accent);
    color: white;
    border-radius: 4px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .week-card h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
  }
  
  .week-card h3 a {
    color: var(--text-primary);
    text-decoration: none;
  }
  
  .week-card h3 a:hover {
    color: var(--accent);
  }
  
  .week-card p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }
  
  .read-more {
    color: var(--accent);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
  }
  
  .read-more:hover {
    text-decoration: underline;
  }
</style>
```

**Step 3.4: Create `src/components/Header.astro`**

```astro
---
const base = import.meta.env.BASE_URL;
---

<header class="site-header">
  <div class="container">
    <a href={base} class="logo">
      <span class="logo-icon">🎬</span>
      <span class="logo-text">Advertising Video Editing</span>
    </a>
    
    <nav aria-label="Main navigation">
      <ul>
        <li><a href={base}>Home</a></li>
        <li><a href={`${base}curriculum/`}>Curriculum</a></li>
        <li><a href={`${base}resources/`}>Resources</a></li>
      </ul>
    </nav>
  </div>
</header>

<style>
  .site-header {
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border-color);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
    backdrop-filter: blur(10px);
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: var(--text-primary);
    font-weight: 700;
    font-size: 1.1rem;
  }
  
  .logo-icon {
    font-size: 1.5rem;
  }
  
  nav ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  nav a {
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s;
  }
  
  nav a:hover {
    color: var(--accent);
  }
  
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 1rem;
    }
    
    nav ul {
      gap: 1rem;
    }
    
    .logo-text {
      display: none;
    }
  }
</style>
```

**Step 3.5: Create `src/components/Footer.astro`**

```astro
---
const currentYear = new Date().getFullYear();
---

<footer class="site-footer">
  <div class="container">
    <p>
      © {currentYear} Rubén Vega Balbás, PhD — 
      <a href="https://www.udit.es" target="_blank" rel="noopener">UDIT</a>
    </p>
    <p class="licenses">
      <a href="https://github.com/ruvebal/advertising-video_editing" target="_blank" rel="noopener">
        View on GitHub
      </a>
    </p>
  </div>
</footer>

<style>
  .site-footer {
    background: var(--bg-secondary);
    border-top: 1px solid var(--border-color);
    padding: 2rem 0;
    margin-top: 4rem;
    text-align: center;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .site-footer p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }
  
  .site-footer a {
    color: var(--accent);
    text-decoration: none;
  }
  
  .site-footer a:hover {
    text-decoration: underline;
  }
</style>
```

### Phase 4: Create Homepage (30 minutes)

**Step 4.1: Create `src/pages/index.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import WeekCard from '../components/WeekCard.astro';
import TaoQuote from '../components/TaoQuote.astro';

const weeks = [
  { week: 1, title: "Introduction to Advertising & Editing Persuasion", slug: "week-01", description: "Explore the foundations of persuasive editing and advertising's relationship with moving images." },
  { week: 2, title: "Origins of Film Editing – From Lumière to Méliès", slug: "week-02", description: "Discover the birth of cinema and the first editing techniques." },
  { week: 3, title: "Continuity Editing & Perception Psychology", slug: "week-03", description: "Master the invisible art of continuity and understand viewer perception." },
  { week: 4, title: "Soviet Montage Theory – Kuleshov Effect & Vertov", slug: "week-04", description: "Explore revolutionary editing theories that changed cinema forever." },
  { week: 5, title: "Breaking the Rules – Experimental Editing", slug: "week-05", description: "Challenge conventions with jump cuts, nonlinear narratives, and MTV aesthetics." },
  { week: 6, title: "Advertising Formats & Storytelling in 30 Seconds", slug: "week-06", description: "Learn to craft compelling narratives within tight time constraints." },
  { week: 7, title: "Production Sprint – Team Edit-on-Camera Videothon", slug: "week-07", description: "Experience rapid production and teamwork under pressure." },
  { week: 8, title: "Post-Production Techniques – Sound, Color, and Effects", slug: "week-08", description: "Polish your work with advanced color grading, sound design, and effects." },
  { week: 9, title: "Digital Platforms, Algorithms & Ethics in Advertising", slug: "week-09", description: "Navigate the digital landscape and ethical considerations of modern advertising." },
  { week: 10, title: "Final Project Showcase & Wrap-Up", slug: "week-10", description: "Present your work and reflect on your journey as a video editor." }
];
---

<BaseLayout title="Home">
  <div class="hero">
    <h1>Advertising Video Editing</h1>
    <p class="lead">
      A comprehensive course blending theory, technique, and ethics in video editing for advertising.
    </p>
    
    <TaoQuote>
      The Tao of the web is simplicity. The master chooses the path of least resistance that still serves the vision.
    </TaoQuote>
  </div>
  
  <section class="course-overview">
    <div class="container">
      <h2>Course Overview</h2>
      <p>
        This 10-week course explores the art and craft of video editing for advertising, 
        from historical foundations to contemporary digital platforms. Students will master 
        Adobe Premiere Pro while developing a critical understanding of persuasive media.
      </p>
      
      <div class="course-stats">
        <div class="stat">
          <strong>10</strong>
          <span>Weeks</span>
        </div>
        <div class="stat">
          <strong>20</strong>
          <span>Sessions</span>
        </div>
        <div class="stat">
          <strong>∞</strong>
          <span>Wisdom</span>
        </div>
      </div>
    </div>
  </section>
  
  <section class="weeks-section">
    <div class="container">
      <h2>Weekly Lessons</h2>
      <div class="week-cards">
        {weeks.map(week => (
          <WeekCard {...week} />
        ))}
      </div>
    </div>
  </section>
  
  <section class="resources-section">
    <div class="container">
      <h2>Resources</h2>
      <ul>
        <li><a href={`${import.meta.env.BASE_URL}curriculum/`}>Complete Course Curriculum</a></li>
        <li><a href={`${import.meta.env.BASE_URL}resources/`}>Resource Library</a></li>
        <li><a href="https://github.com/ruvebal/advertising-video_editing">GitHub Repository</a></li>
      </ul>
    </div>
  </section>
</BaseLayout>

<style>
  .hero {
    text-align: center;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, var(--bg-secondary), var(--bg-primary));
  }
  
  .hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .hero .lead {
    font-size: 1.25rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto 2rem;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .course-overview {
    padding: 4rem 0;
  }
  
  .course-overview h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .course-overview p {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 2rem;
    color: var(--text-secondary);
  }
  
  .course-stats {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin: 2rem 0;
  }
  
  .stat {
    text-align: center;
  }
  
  .stat strong {
    display: block;
    font-size: 2.5rem;
    color: var(--accent);
  }
  
  .stat span {
    font-size: 0.9rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .weeks-section {
    padding: 4rem 0;
    background: var(--bg-secondary);
  }
  
  .weeks-section h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .week-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .resources-section {
    padding: 4rem 0;
  }
  
  .resources-section h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .resources-section ul {
    max-width: 600px;
    margin: 0 auto;
    list-style: none;
    padding: 0;
  }
  
  .resources-section li {
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .resources-section a {
    color: var(--accent);
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
  }
  
  .resources-section a:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2rem;
    }
    
    .course-stats {
      gap: 1.5rem;
    }
    
    .week-cards {
      grid-template-columns: 1fr;
    }
  }
</style>
```

### Phase 5: Migrate Lesson Content (1-2 hours)

**Step 5.1: Move Lessons to `src/pages/prompts/`**

```bash
# Create prompts directory
mkdir -p src/pages/prompts

# Copy lesson files
cp docs/prompts/week-01-introduction-persuasion.md src/pages/prompts/week-01.md
cp docs/prompts/week-02-early-cinema-tricks.md src/pages/prompts/week-02.md
# ... repeat for all 10 weeks
```

**Step 5.2: Update Front Matter for Astro**

For each lesson (e.g., `src/pages/prompts/week-01.md`):

```markdown
---
layout: ../../layouts/LessonLayout.astro
title: "Introduction to Advertising & Editing Persuasion"
week: 1
description: "Explore the foundations of persuasive editing and advertising's relationship with moving images."
prevWeek: null
nextWeek:
  title: "Origins of Film Editing"
  slug: "week-02"
---

# Introduction to Advertising & Editing Persuasion

[Rest of your lesson content...]
```

**Step 5.3: Convert Components to Astro Syntax**

**Before (Jekyll Liquid):**
```markdown
{% include youtube.html id="dQw4w9WgXcQ" title="Kuleshov Effect" %}

> *"The cut creates meaning where none existed before."*  
> — Tao of the Video Editor
```

**After (Astro):**
```markdown
<VideoPlayer platform="youtube" id="dQw4w9WgXcQ" title="Kuleshov Effect" />

<TaoQuote>
  The cut creates meaning where none existed before.
</TaoQuote>
```

**Step 5.4: Import Components in MDX**

If using `.mdx` files (recommended for components), add imports at the top:

```mdx
---
layout: ../../layouts/LessonLayout.astro
title: "Week 1: Introduction"
week: 1
---

import VideoPlayer from '../../components/VideoPlayer.astro';
import TaoQuote from '../../components/TaoQuote.astro';

# Introduction to Advertising & Editing Persuasion

<VideoPlayer platform="youtube" id="dQw4w9WgXcQ" title="Kuleshov Effect" />

<TaoQuote>
  The cut creates meaning where none existed before.
</TaoQuote>
```

### Phase 6: Build and Test (30 minutes)

**Step 6.1: Run Development Server**

```bash
npm run dev

# Open http://localhost:4321/advertising-video_editing/
```

**Step 6.2: Test Checklist**

- [ ] Homepage loads with all week cards
- [ ] Clicking week card navigates to lesson
- [ ] Lesson layout displays correctly
- [ ] Video embeds work
- [ ] Tao quotes styled properly
- [ ] Navigation (prev/next) works
- [ ] Responsive on mobile
- [ ] Dark mode works (if implemented)

**Step 6.3: Build for Production**

```bash
npm run build

# Output in dist/
# Test production build locally:
npm run preview
```

### Phase 7: Deploy to GitHub Pages (30 minutes)

**Step 7.1: Create GitHub Actions Workflow**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build site
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**Step 7.2: Configure GitHub Repository**

1. Push code to GitHub
2. Go to Settings → Pages
3. Source: **GitHub Actions**
4. Save

**Step 7.3: Push and Deploy**

```bash
git add .
git commit -m "Astro site setup complete"
git push origin main

# GitHub Actions will automatically build and deploy
# Check Actions tab for progress
```

---

## Video Integration Strategy

### Using Astro Components

**Simple YouTube Embed:**
```astro
<VideoPlayer 
  platform="youtube" 
  id="dQw4w9WgXcQ" 
  title="Kuleshov Effect Demonstration" 
/>
```

**With Timestamps:**
```astro
<VideoPlayer 
  platform="youtube" 
  id="dQw4w9WgXcQ" 
  title="Kuleshov Effect Demonstration"
  timestamps="0:00|Introduction,1:45|The Experiment,3:20|Application to Advertising"
/>
```

**Vimeo:**
```astro
<VideoPlayer 
  platform="vimeo" 
  id="123456789" 
  title="Early Cinema Techniques" 
/>
```

### Video Data Management

Create `src/data/videos.json`:

```json
{
  "week-01": [
    {
      "id": "dQw4w9WgXcQ",
      "platform": "youtube",
      "title": "McLuhan: The Medium is the Message",
      "duration": "4:30",
      "description": "Introduction to media theory"
    },
    {
      "id": "abc123xyz",
      "platform": "youtube",
      "title": "Premiere Pro: Interface Overview",
      "duration": "8:15",
      "description": "Getting started with Adobe Premiere Pro"
    }
  ],
  "week-02": [
    ...
  ]
}
```

**Use in Components:**
```astro
---
import videos from '../data/videos.json';

const weekVideos = videos['week-01'];
---

{weekVideos.map(video => (
  <VideoPlayer {...video} />
))}
```

---

## Deployment to GitHub Pages

### GitHub Actions Workflow

The workflow above handles:
1. ✅ Checkout code
2. ✅ Install Node.js and dependencies
3. ✅ Build Astro site (`npm run build`)
4. ✅ Upload to GitHub Pages
5. ✅ Deploy automatically

### Deployment Checklist

- [ ] `astro.config.mjs` has correct `site` and `base`
- [ ] `.github/workflows/deploy.yml` created
- [ ] Code pushed to GitHub
- [ ] GitHub Pages source set to "GitHub Actions"
- [ ] Workflow runs successfully
- [ ] Site accessible at `https://ruvebal.github.io/advertising-video_editing/`

---

## AI Prompts for Implementation

### Prompt 1: Initialize Astro Project

```
Create an Astro project for my video editing course website at:
/Users/ruvebal/projects/ruvebal/scholar/udit/advertising-video_editing

Requirements:
1. Use Astro with TypeScript (strict mode)
2. Install @astrojs/mdx for Markdown support
3. Install @astrojs/react for interactive components (optional)
4. Configure for GitHub Pages deployment
   - site: https://ruvebal.github.io
   - base: /advertising-video_editing

Provide:
1. Complete astro.config.mjs
2. tsconfig.json
3. package.json with all dependencies
4. Directory structure (src/pages, src/layouts, src/components)

Initialize with: npm create astro@latest
```

### Prompt 2: Create Base Layouts

```
Create Astro layouts for my course website:

1. src/layouts/BaseLayout.astro
   - HTML5 structure with semantic markup
   - Meta tags for SEO (title, description, og:tags)
   - Dark mode support (prefers-color-scheme)
   - Accessibility (skip link, ARIA landmarks)
   - Header and Footer components
   - Global styles (CSS variables, typography)

2. src/layouts/LessonLayout.astro
   - Extends BaseLayout
   - Props: frontmatter (title, week, description, prevWeek, nextWeek)
   - Header with week badge and title
   - Navigation bar (prev/next/home)
   - Main content area (prose styling, max-width 800px)
   - Footer with navigation

Provide complete Astro component code with TypeScript interfaces and scoped styles.
```

### Prompt 3: Create Video Components

```
Create Astro components for video integration:

1. src/components/VideoPlayer.astro
   - Props: platform ('youtube' | 'vimeo'), id, title, timestamps (optional)
   - Responsive 16:9 iframe embed
   - Privacy-enhanced YouTube (youtube-nocookie.com)
   - Timestamp navigation (parse "0:00|Intro,1:45|Main" format)
   - Client-side script for timestamp clicks
   - Scoped CSS for styling

2. src/components/TaoQuote.astro
   - Props: quote (optional, can use slot)
   - Styled blockquote with left border accent
   - Citation: "— Tao of the Video Editor"
   - Scoped CSS

3. src/components/WeekCard.astro
   - Props: week, title, description, slug
   - Card layout with hover effects
   - Week badge, title, description, "Read lesson →" link
   - Scoped CSS

Provide complete TypeScript-typed Astro components with styles.
```

### Prompt 4: Create Homepage

```
Create the homepage at src/pages/index.astro:

Sections:
1. Hero
   - Title: "Advertising Video Editing"
   - Lead text
   - TaoQuote component

2. Course Overview
   - Description paragraph
   - Stats: 10 Weeks, 20 Sessions, ∞ Wisdom

3. Week Cards Grid
   - Array of 10 weeks with title, description, slug
   - Map to WeekCard components
   - Responsive grid (3 cols desktop, 1 col mobile)

4. Resources
   - Links to curriculum, resources, GitHub

Use BaseLayout, import components, provide complete Astro code with styles.
```

### Prompt 5: Convert Markdown Lessons

```
Convert my Jekyll lesson prompts to Astro format:

Source: docs/prompts/week-01-introduction-persuasion.md (and 9 others)
Destination: src/pages/prompts/week-01.md (rename to match slug)

Changes needed:
1. Update front matter:
   - layout: ../../layouts/LessonLayout.astro
   - Add prevWeek/nextWeek objects (title, slug)

2. Convert Liquid includes to Astro components:
   - {% include youtube.html id="X" %} → <VideoPlayer platform="youtube" id="X" />
   - {% include tao-quote.html quote="X" %} → <TaoQuote>X</TaoQuote>

3. If using MDX, add component imports at top

Provide:
1. Example converted lesson file
2. Script to automate conversion (Node.js or bash)
3. Front matter template for all 10 weeks
```

---

## Migration Path: Jekyll → Astro

### If You Start with Jekyll, Then Want Astro

**Scenario:** You build the Jekyll site first, then decide Astro is better.

**Migration Steps:**

1. **Initialize Astro project** (as above)
2. **Copy Markdown content** - Your lessons work as-is (mostly)
3. **Convert Liquid to Astro** - Replace `{% include %}` with `<Component />`
4. **Recreate layouts** - Convert Jekyll layouts to Astro
5. **Update front matter** - Change `layout:` paths
6. **Test and deploy** - Use GitHub Actions

**Time:** 2-3 hours (content is already there)

### Side-by-Side Comparison

| Task | Jekyll | Astro |
|------|--------|-------|
| **Video embed** | `{% include youtube.html id="X" %}` | `<VideoPlayer platform="youtube" id="X" />` |
| **Tao quote** | `{% include tao-quote.html quote="X" %}` | `<TaoQuote>X</TaoQuote>` |
| **Layout** | `layout: lesson` | `layout: ../../layouts/LessonLayout.astro` |
| **Loop weeks** | `{% for prompt in site.prompts %}` | `{weeks.map(week => <WeekCard {...week} />)}` |
| **Conditional** | `{% if page.next_week %}` | `{nextWeek && <a href={...}>}` |

---

## Conclusion: Astro for the Kino-Web-Sphere

> *"Astro brings the speed of static sites with the power of modern components. For video teaching, this is the Tao: fast pages, interactive islands, minimal JavaScript."*

**Why Astro Wins:**
- ⚡ **Faster builds** (seconds, not minutes)
- 🎨 **Better components** (no Liquid hacks)
- 🚀 **Better performance** (less JS shipped)
- 🔧 **Modern tooling** (TypeScript, Vite, hot reload)
- 🎬 **Better video integration** (native components)

**When to Choose Astro:**
- ✅ You want modern tooling
- ✅ You're open to learning (gentle curve)
- ✅ You value performance
- ✅ You might add interactivity later

**When to Choose Jekyll:**
- ✅ You want to start immediately
- ✅ You don't want to learn new tools
- ✅ You're comfortable with Liquid

**The Tao Says:** Both paths lead to the same destination. Choose the one that serves your vision with least resistance.

---

**Total Implementation Time: 4-6 hours**

**Result:** Modern, fast, maintainable course website with excellent video integration.

**May the Tao of Astro guide your teaching. May your builds be fast and your students engaged. May the Kino-Web-Sphere flourish in the islands of interactivity.** 🎬 ⚡ 🏝️

---

**End of Astro Implementation Guide**

*Ready to build with Astro? Start with Phase 1: Initialize Astro Project.*
