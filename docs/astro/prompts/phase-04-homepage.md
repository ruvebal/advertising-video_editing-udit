# Phase 04 · Compose the Homepage Experience

> **Goal:** Create an immersive, award-worthy homepage with Course JSON-LD, cinematic hero, week cards grid, and featured video gallery.

---

## Prompt

You are an **Astro Expert and Digital Humanities Specialist** composing the homepage for the **Advertising Video Editing** course at:

```
/Users/ruvebal/projects/ruvebal/scholar/udit/advertising-video_editing
```

---

## Task 1: Create `src/data/weeks.ts`

```typescript
export interface Week {
  week: number;
  title: string;
  description: string;
  slug: string;
  duration?: string;
  videoCount?: number;
  keywords?: string[];
}

export const weeks: Week[] = [
  {
    week: 1,
    title: 'Introduction to Advertising & Editing Persuasion',
    description: 'Explore the foundations of persuasive editing and advertising\'s relationship with moving images.',
    slug: 'week-01',
    duration: '3h',
    videoCount: 4,
    keywords: ['persuasion', 'advertising history', 'Adobe Premiere intro']
  },
  {
    week: 2,
    title: 'Origins of Film Editing – From Lumière to Méliès',
    description: 'Discover the birth of cinema and the first editing techniques.',
    slug: 'week-02',
    duration: '3h',
    videoCount: 5,
    keywords: ['film history', 'Lumière', 'Méliès', 'early cinema']
  },
  {
    week: 3,
    title: 'Continuity Editing & Perception Psychology',
    description: 'Master the invisible art of continuity and understand viewer perception.',
    slug: 'week-03',
    duration: '3h',
    videoCount: 4,
    keywords: ['continuity', 'Gestalt', '180-degree rule', 'J-cuts']
  },
  {
    week: 4,
    title: 'Soviet Montage Theory – Kuleshov Effect & Vertov',
    description: 'Explore revolutionary editing theories that changed cinema forever.',
    slug: 'week-04',
    duration: '3h',
    videoCount: 6,
    keywords: ['Kuleshov', 'Eisenstein', 'Vertov', 'montage']
  },
  {
    week: 5,
    title: 'Breaking the Rules – Experimental Editing',
    description: 'Challenge conventions with jump cuts, nonlinear narratives, and MTV aesthetics.',
    slug: 'week-05',
    duration: '3h',
    videoCount: 5,
    keywords: ['jump cuts', 'Godard', 'experimental', 'MTV']
  },
  {
    week: 6,
    title: 'Advertising Formats & Storytelling in 30 Seconds',
    description: 'Learn to craft compelling narratives within tight time constraints.',
    slug: 'week-06',
    duration: '3h',
    videoCount: 4,
    keywords: ['ad formats', 'storyboarding', '30-second spots']
  },
  {
    week: 7,
    title: 'Production Sprint – Team Edit-on-Camera Videothon',
    description: 'Experience rapid production and teamwork under pressure.',
    slug: 'week-07',
    duration: '6h',
    videoCount: 2,
    keywords: ['videothon', 'teamwork', 'rapid production']
  },
  {
    week: 8,
    title: 'Post-Production Techniques – Sound, Color, and Effects',
    description: 'Polish your work with advanced color grading, sound design, and effects.',
    slug: 'week-08',
    duration: '3h',
    videoCount: 6,
    keywords: ['color grading', 'sound design', 'Lumetri', 'AI tools']
  },
  {
    week: 9,
    title: 'Digital Platforms, Algorithms & Ethics in Advertising',
    description: 'Navigate the digital landscape and ethical considerations of modern advertising.',
    slug: 'week-09',
    duration: '3h',
    videoCount: 4,
    keywords: ['platforms', 'algorithms', 'ethics', 'attention economy']
  },
  {
    week: 10,
    title: 'Final Project Showcase & Wrap-Up',
    description: 'Present your work and reflect on your journey as a video editor.',
    slug: 'week-10',
    duration: '3h',
    videoCount: 2,
    keywords: ['showcase', 'presentation', 'reflection']
  }
];
```

---

## Task 2: Create `src/pages/index.astro`

```astro
---
import BaseLayout from '@layouts/BaseLayout.astro';
import { WeekCard, TaoQuote, VideoPlayer } from '@components';
import { weeks } from '@data/weeks';
import { buildCourseJsonLd } from '@utils/metadata';
import { author } from '@data/author';

const base = import.meta.env.BASE_URL;
const siteUrl = 'https://ruvebal.github.io/advertising-video_editing/';

const courseJsonLd = buildCourseJsonLd({
  title: 'Advertising Video Editing',
  description: 'A comprehensive 10-week course blending film theory, editing technique, and advertising ethics.',
  url: siteUrl,
  keywords: ['video editing', 'advertising', 'film theory', 'Adobe Premiere Pro', 'montage']
});

// Featured videos for gallery teaser
const featuredVideos = [
  { id: 'dQw4w9WgXcQ', platform: 'youtube' as const, title: 'The Kuleshov Effect Explained', duration: '4:30' },
  { id: 'abc123xyz', platform: 'youtube' as const, title: 'Premiere Pro: Your First Edit', duration: '12:00' },
  { id: 'xyz789abc', platform: 'youtube' as const, title: 'The Art of the Jump Cut', duration: '8:45' }
];
---

<BaseLayout title="Home" jsonLd={courseJsonLd}>
  <!-- Hero Section -->
  <section class="hero relative min-h-[90vh] flex items-center justify-center overflow-hidden" aria-labelledby="hero-title">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-kino-dark-900 via-kino-dark-800 to-kino-red-700" aria-hidden="true"></div>
    
    <!-- Film grain overlay -->
    <div class="absolute inset-0 opacity-10 bg-[url('/images/grain.png')] bg-repeat pointer-events-none" aria-hidden="true"></div>
    
    <div class="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
      <span class="inline-block px-4 py-2 bg-kino-red-500/20 border border-kino-red-500/50 rounded-full text-sm font-medium mb-6">
        🎬 3rd Year Multimedia B.A. · UDIT
      </span>
      
      <h1 id="hero-title" class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
        Advertising<br />
        <span class="text-kino-red-500">Video Editing</span>
      </h1>
      
      <p class="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
        A comprehensive 10-week journey through film theory, editing technique, and the ethics of persuasive media.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <a href={`${base}prompts/week-01/`} class="px-8 py-4 bg-kino-red-500 hover:bg-kino-red-600 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
          Start Course →
        </a>
        <a href={`${base}curriculum/`} class="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur transition-all">
          View Curriculum
        </a>
      </div>
      
      <TaoQuote quote="The Tao of the web is simplicity. The master chooses the path of least resistance that still serves the vision." />
    </div>
    
    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
      <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </div>
  </section>
  
  <!-- Course Overview -->
  <section class="py-20 px-4 bg-white dark:bg-kino-dark-900" aria-labelledby="overview-title">
    <div class="max-w-4xl mx-auto text-center">
      <h2 id="overview-title" class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
        Course Overview
      </h2>
      <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
        From the Lumière brothers to TikTok algorithms, explore the art and ethics of editing 
        that shapes how we see the world. Master Adobe Premiere Pro while developing critical 
        thinking about persuasive media.
      </p>
      
      <!-- Stats -->
      <div class="grid grid-cols-3 gap-8 max-w-lg mx-auto">
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-kino-red-500">10</div>
          <div class="text-sm text-slate-500 uppercase tracking-wide mt-1">Weeks</div>
        </div>
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-kino-red-500">20</div>
          <div class="text-sm text-slate-500 uppercase tracking-wide mt-1">Sessions</div>
        </div>
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-kino-red-500">∞</div>
          <div class="text-sm text-slate-500 uppercase tracking-wide mt-1">Wisdom</div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Weekly Lessons Grid -->
  <section class="py-20 px-4 bg-slate-50 dark:bg-kino-dark-800" aria-labelledby="weeks-title">
    <div class="max-w-6xl mx-auto">
      <h2 id="weeks-title" class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-12">
        Weekly Lessons
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {weeks.map(week => (
          <WeekCard {...week} />
        ))}
      </div>
    </div>
  </section>
  
  <!-- Featured Videos -->
  <section class="py-20 px-4 bg-white dark:bg-kino-dark-900" aria-labelledby="videos-title">
    <div class="max-w-6xl mx-auto">
      <h2 id="videos-title" class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-4">
        Featured Videos
      </h2>
      <p class="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
        Preview key concepts and techniques from the course.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredVideos.map(video => (
          <VideoPlayer {...video} />
        ))}
      </div>
    </div>
  </section>
  
  <!-- Resources & Author -->
  <section class="py-20 px-4 bg-slate-50 dark:bg-kino-dark-800" aria-labelledby="resources-title">
    <div class="max-w-4xl mx-auto text-center">
      <h2 id="resources-title" class="text-3xl font-bold text-slate-900 dark:text-white mb-8">
        Resources
      </h2>
      
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <a href={`${base}curriculum/`} class="px-6 py-3 bg-white dark:bg-kino-dark-900 rounded-lg shadow hover:shadow-lg transition-shadow font-medium text-slate-900 dark:text-white">
          📚 Full Curriculum
        </a>
        <a href={`${base}resources/`} class="px-6 py-3 bg-white dark:bg-kino-dark-900 rounded-lg shadow hover:shadow-lg transition-shadow font-medium text-slate-900 dark:text-white">
          🔗 Resource Library
        </a>
        <a href="https://github.com/ruvebal/advertising-video_editing" target="_blank" rel="noopener" class="px-6 py-3 bg-white dark:bg-kino-dark-900 rounded-lg shadow hover:shadow-lg transition-shadow font-medium text-slate-900 dark:text-white">
          💻 GitHub Repository
        </a>
      </div>
      
      <!-- Author Card -->
      <div class="inline-flex items-center gap-4 p-4 bg-white dark:bg-kino-dark-900 rounded-xl shadow-lg">
        <div class="w-16 h-16 rounded-full bg-gradient-to-br from-kino-red-500 to-kino-red-700 flex items-center justify-center text-white text-2xl font-bold">
          RV
        </div>
        <div class="text-left">
          <p class="font-semibold text-slate-900 dark:text-white">{author.name}</p>
          <p class="text-sm text-slate-600 dark:text-slate-400">{author.affiliation.name}</p>
          <a href={author.orcid} class="text-xs text-kino-red-500 hover:underline">ORCID: 0000-0001-6862-9081</a>
        </div>
      </div>
    </div>
  </section>
</BaseLayout>

<style>
  @media (prefers-reduced-motion: reduce) {
    .animate-bounce {
      animation: none;
    }
    
    .hover\:-translate-y-1:hover {
      transform: none;
    }
  }
</style>
```

---

## Task 3: Create Hero Background Assets

1. **`public/images/grain.png`**: 200x200 subtle film grain texture (PNG, transparent)
2. **`public/images/og-hero.jpg`**: 1200x630 OG image with course title overlay

---

## Task 4: Add Intersection Observer for Reveal Animations (Optional Island)

Create `src/components/RevealOnScroll.tsx`:

```tsx
import { useEffect, useRef, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export default function RevealOnScroll({ children, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  
  return (
    <div ref={ref} className={`reveal-container ${className}`}>
      {children}
    </div>
  );
}
```

Add to `global.css`:

```css
.reveal-container {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal-container.revealed {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .reveal-container {
    opacity: 1;
    transform: none;
  }
}
```

---

## Implementation Report Template

```markdown
# Phase 04 Implementation Report

## Files Created
- `src/data/weeks.ts` ✅ (typed week metadata array)
- `src/pages/index.astro` ✅ (homepage with all sections)
- `src/components/RevealOnScroll.tsx` ✅ (optional React island)
- `public/images/grain.png` ⏳ (needs creation)
- `public/images/og-hero.jpg` ⏳ (needs creation)

## Sections Implemented
1. **Hero**: Gradient backdrop, CTAs, TaoQuote, scroll indicator
2. **Course Overview**: Stats grid (10/20/∞)
3. **Weekly Lessons**: 3-column responsive grid with WeekCard
4. **Featured Videos**: 3-column VideoPlayer grid
5. **Resources**: Links + author card with ORCID

## JSON-LD
- Course schema with instructor ORCID
- Provider (UDIT) linked
- Educational level, credits, keywords

## Tailwind Features
- min-h-[90vh] for hero
- Grid responsive: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Backdrop blur, gradients, shadows
- Dark mode support

## Accessibility
- ARIA section labels
- Reduced-motion fallbacks
- Semantic HTML sections

## Performance
- Lazy load VideoPlayer components
- Preload hero gradient (CSS, no image)
- Optional reveal animations

## Next Steps
- Proceed to Phase 05: Content Migration
```
