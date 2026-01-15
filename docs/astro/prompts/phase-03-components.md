# Phase 03 · Engineer Signature Components

> **Goal:** Build award-worthy, accessible video components with cinematic styling, progressive enhancement, and schema.org VideoObject metadata.

---

## Prompt

You are an **Astro Expert and Web Media Technologist** creating signature components for the **Advertising Video Editing** course at:

```
/Users/ruvebal/projects/ruvebal/scholar/udit/advertising-video_editing
```

---

## Task 1: Create `src/components/VideoPlayer.astro`

```astro
---
interface Timestamp {
  time: string;
  label: string;
  seconds?: number;
}

interface Props {
  platform: 'youtube' | 'vimeo';
  id: string;
  title: string;
  description?: string;
  duration?: string;
  thumbnailUrl?: string;
  uploadDate?: string;
  timestamps?: Timestamp[];
  autoplay?: boolean;
  startAt?: number;
}

const {
  platform,
  id,
  title,
  description,
  duration,
  thumbnailUrl,
  uploadDate,
  timestamps = [],
  autoplay = false,
  startAt = 0
} = Astro.props;

// Parse timestamps to seconds
const parsedTimestamps = timestamps.map(ts => {
  const parts = ts.time.split(':').map(Number);
  const seconds = parts.length === 3
    ? parts[0] * 3600 + parts[1] * 60 + parts[2]
    : parts[0] * 60 + parts[1];
  return { ...ts, seconds };
});

// Build embed URL
const embedUrl = platform === 'youtube'
  ? `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1${autoplay ? '&autoplay=1' : ''}${startAt ? `&start=${startAt}` : ''}`
  : `https://player.vimeo.com/video/${id}?dnt=1${autoplay ? '&autoplay=1' : ''}`;

// Thumbnail for lazy loading
const posterUrl = thumbnailUrl || (platform === 'youtube'
  ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
  : null);

// Schema.org VideoObject
const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: title,
  description: description || title,
  thumbnailUrl: posterUrl,
  uploadDate: uploadDate,
  duration: duration,
  embedUrl: embedUrl,
  contentUrl: platform === 'youtube'
    ? `https://www.youtube.com/watch?v=${id}`
    : `https://vimeo.com/${id}`
};

const componentId = `video-${id}`;
---

<figure class="video-player group" id={componentId} itemscope itemtype="https://schema.org/VideoObject">
  <meta itemprop="name" content={title} />
  <meta itemprop="thumbnailUrl" content={posterUrl} />
  
  <!-- Video Container with Aspect Ratio -->
  <div class="relative aspect-video rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/10 dark:ring-white/10">
    <!-- Poster/Facade for Performance -->
    <div class="video-facade absolute inset-0 cursor-pointer bg-kino-dark-900" data-embed-url={embedUrl}>
      {posterUrl && (
        <img
          src={posterUrl}
          alt={`Video thumbnail: ${title}`}
          class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          loading="lazy"
          decoding="async"
        />
      )}
      
      <!-- Play Button Overlay -->
      <div class="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
        <button
          class="play-btn w-20 h-20 rounded-full bg-kino-red-500 hover:bg-kino-red-600 flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform focus:outline-none focus:ring-4 focus:ring-kino-red-500/50"
          aria-label={`Play video: ${title}`}
        >
          <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Iframe (injected on click) -->
    <iframe
      class="video-iframe absolute inset-0 w-full h-full hidden"
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      loading="lazy"
    ></iframe>
  </div>
  
  <!-- Caption -->
  <figcaption class="mt-4 text-center">
    <p class="font-semibold text-slate-900 dark:text-white" itemprop="name">{title}</p>
    {description && (
      <p class="text-sm text-slate-600 dark:text-slate-400 mt-1" itemprop="description">{description}</p>
    )}
  </figcaption>
  
  <!-- Timestamp Navigation -->
  {parsedTimestamps.length > 0 && (
    <nav class="mt-4 p-4 bg-slate-100 dark:bg-kino-dark-800 rounded-lg" aria-label="Video chapters">
      <h4 class="text-sm font-semibold text-slate-900 dark:text-white mb-3">📍 Key Moments</h4>
      <ul class="space-y-2" role="list">
        {parsedTimestamps.map(({ time, label, seconds }) => (
          <li>
            <button
              class="timestamp-btn w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left hover:bg-white dark:hover:bg-kino-dark-700 transition-colors focus:outline-none focus:ring-2 focus:ring-kino-red-500"
              data-seconds={seconds}
              data-video-id={componentId}
            >
              <span class="font-mono text-sm text-kino-red-500 bg-kino-red-500/10 px-2 py-1 rounded">{time}</span>
              <span class="text-sm text-slate-700 dark:text-slate-300">{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )}
  
  <!-- JSON-LD -->
  <script type="application/ld+json" set:html={JSON.stringify(videoSchema)} />
</figure>

<style>
  .video-player:focus-within .video-facade {
    display: none;
  }
  
  .video-player.playing .video-facade {
    display: none;
  }
  
  .video-player.playing .video-iframe {
    display: block;
  }
  
  @media (prefers-reduced-motion: reduce) {
    .play-btn {
      transform: none !important;
    }
  }
</style>

<script>
  // Facade click → load iframe
  document.querySelectorAll('.video-facade').forEach(facade => {
    facade.addEventListener('click', () => {
      const container = facade.closest('.video-player');
      const iframe = container?.querySelector('.video-iframe') as HTMLIFrameElement;
      const embedUrl = facade.getAttribute('data-embed-url');
      
      if (iframe && embedUrl) {
        iframe.src = embedUrl + '&autoplay=1';
        container?.classList.add('playing');
        iframe.focus();
      }
    });
  });
  
  // Timestamp navigation
  document.querySelectorAll('.timestamp-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const seconds = btn.getAttribute('data-seconds');
      const videoId = btn.getAttribute('data-video-id');
      const container = document.getElementById(videoId || '');
      const iframe = container?.querySelector('.video-iframe') as HTMLIFrameElement;
      const facade = container?.querySelector('.video-facade') as HTMLElement;
      
      if (iframe && seconds) {
        const baseUrl = facade?.getAttribute('data-embed-url')?.split('?')[0];
        iframe.src = `${baseUrl}?autoplay=1&start=${seconds}`;
        container?.classList.add('playing');
        container?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
</script>
```

---

## Task 2: Create `src/components/TaoQuote.astro`

```astro
---
interface Props {
  quote?: string;
  author?: string;
  source?: string;
}

const {
  quote,
  author = 'Tao of the Video Editor',
  source
} = Astro.props;
---

<figure class="tao-quote my-8 relative" role="figure" aria-label="Quote">
  <!-- Decorative film strip -->
  <div class="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-kino-red-500 via-kino-red-600 to-kino-red-700 rounded-full" aria-hidden="true"></div>
  
  <blockquote class="relative pl-6 py-4 pr-4 bg-gradient-to-r from-kino-red-500/5 via-transparent to-transparent rounded-r-xl">
    <p class="text-lg md:text-xl font-serif italic text-slate-800 dark:text-slate-200 leading-relaxed">
      {quote ? `"${quote}"` : <slot />}
    </p>
  </blockquote>
  
  <figcaption class="mt-3 pl-6 flex items-center gap-2">
    <span class="text-kino-red-500" aria-hidden="true">—</span>
    <cite class="text-sm font-medium text-slate-600 dark:text-slate-400 not-italic">
      {author}
      {source && <span class="text-slate-500">, {source}</span>}
    </cite>
  </figcaption>
</figure>
```

---

## Task 3: Create `src/components/WeekCard.astro`

```astro
---
interface Props {
  week: number;
  title: string;
  description: string;
  slug: string;
  tone?: 'bright' | 'noir';
  duration?: string;
  videoCount?: number;
}

const {
  week,
  title,
  description,
  slug,
  tone = 'bright',
  duration,
  videoCount
} = Astro.props;

const base = import.meta.env.BASE_URL;
const href = `${base}prompts/${slug}/`;

const toneClasses = tone === 'noir'
  ? 'bg-kino-dark-800 border-kino-dark-700 hover:border-kino-red-500'
  : 'bg-white dark:bg-kino-dark-800 border-slate-200 dark:border-kino-dark-700 hover:border-kino-red-500';
---

<article class={`week-card group relative p-6 rounded-xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${toneClasses}`}>
  <!-- Week Badge -->
  <div class="inline-flex items-center gap-2 px-3 py-1 bg-kino-red-500 text-white text-xs font-bold rounded-full mb-4 shadow-lg">
    <span>Week {week}</span>
    {videoCount && <span class="opacity-75">· {videoCount} videos</span>}
  </div>
  
  <!-- Title -->
  <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-kino-red-500 transition-colors">
    <a href={href} class="after:absolute after:inset-0">
      {title}
    </a>
  </h3>
  
  <!-- Description -->
  <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
    {description}
  </p>
  
  <!-- Footer -->
  <div class="flex items-center justify-between text-sm">
    {duration && (
      <span class="text-slate-500 dark:text-slate-500">
        ⏱ {duration}
      </span>
    )}
    <span class="text-kino-red-500 font-semibold group-hover:translate-x-1 transition-transform">
      Start lesson →
    </span>
  </div>
  
  <!-- Hover gradient -->
  <div class="absolute inset-0 rounded-xl bg-gradient-to-br from-kino-red-500/0 to-kino-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" aria-hidden="true"></div>
</article>
```

---

## Task 4: Create `src/components/VideoPlaylist.astro`

```astro
---
import VideoPlayer from './VideoPlayer.astro';

interface Video {
  id: string;
  platform: 'youtube' | 'vimeo';
  title: string;
  description?: string;
  duration?: string;
  thumbnailUrl?: string;
  tags?: string[];
}

interface Props {
  videos: Video[];
  title?: string;
  layout?: 'grid' | 'list';
  filterByTag?: string;
}

const {
  videos,
  title = 'Video Gallery',
  layout = 'grid',
  filterByTag
} = Astro.props;

const filteredVideos = filterByTag
  ? videos.filter(v => v.tags?.includes(filterByTag))
  : videos;

const gridClasses = layout === 'grid'
  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
  : 'space-y-6';
---

<section class="video-playlist" aria-labelledby="playlist-title">
  <h2 id="playlist-title" class="text-2xl font-bold text-slate-900 dark:text-white mb-6">
    🎬 {title}
  </h2>
  
  <div class={gridClasses}>
    {filteredVideos.map(video => (
      <article class="video-card bg-white dark:bg-kino-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <!-- Thumbnail -->
        <a href={`#video-${video.id}`} class="block relative aspect-video overflow-hidden">
          <img
            src={video.thumbnailUrl || `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
            alt={video.title}
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
            decoding="async"
          />
          <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <span class="w-12 h-12 rounded-full bg-kino-red-500 flex items-center justify-center">
              <svg class="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </span>
          </div>
          {video.duration && (
            <span class="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded">
              {video.duration}
            </span>
          )}
        </a>
        
        <!-- Info -->
        <div class="p-4">
          <h3 class="font-semibold text-slate-900 dark:text-white text-sm line-clamp-2">
            {video.title}
          </h3>
          {video.description && (
            <p class="text-slate-600 dark:text-slate-400 text-xs mt-1 line-clamp-2">
              {video.description}
            </p>
          )}
          {video.tags && video.tags.length > 0 && (
            <div class="flex flex-wrap gap-1 mt-2">
              {video.tags.slice(0, 3).map(tag => (
                <span class="px-2 py-0.5 bg-slate-100 dark:bg-kino-dark-700 text-slate-600 dark:text-slate-400 text-xs rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    ))}
  </div>
</section>
```

---

## Task 5: Create `src/components/index.ts` (Barrel Export)

```typescript
// Video components
export { default as VideoPlayer } from './VideoPlayer.astro';
export { default as VideoPlaylist } from './VideoPlaylist.astro';

// Content components
export { default as TaoQuote } from './TaoQuote.astro';
export { default as WeekCard } from './WeekCard.astro';

// Layout components
export { default as Header } from './Header.astro';
export { default as Footer } from './Footer.astro';

// Re-export types
export type { LessonFrontmatter, WeekNav, PageFrontmatter } from '../types/frontmatter';
```

---

## Task 6: Create `src/styles/video.css`

```css
/* Video Player Enhancements */
.video-player {
  --video-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.video-player:hover {
  --video-shadow: 0 25px 50px -12px rgba(231, 76, 60, 0.15);
}

.video-player .video-facade img {
  filter: brightness(0.95);
  transition: filter 0.3s ease;
}

.video-player:hover .video-facade img {
  filter: brightness(1);
}

/* Timestamp pills animation */
.timestamp-btn {
  position: relative;
  overflow: hidden;
}

.timestamp-btn::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0;
  background: linear-gradient(90deg, var(--color-accent) 0%, transparent 100%);
  opacity: 0.1;
  transition: width 0.3s ease;
}

.timestamp-btn:hover::before {
  width: 100%;
}

/* Reduce motion */
@media (prefers-reduced-motion: reduce) {
  .video-player,
  .timestamp-btn::before {
    transition: none !important;
  }
}
```

---

## Implementation Report Template

```markdown
# Phase 03 Implementation Report

## Components Created

| Component | Props | Features |
|-----------|-------|----------|
| VideoPlayer.astro | platform, id, title, timestamps, etc. | Facade pattern, JSON-LD VideoObject, ARIA, timestamp nav |
| TaoQuote.astro | quote, author, source | Accessible figure/blockquote, gradient styling |
| WeekCard.astro | week, title, description, slug, tone | Hover effects, reduced-motion safe |
| VideoPlaylist.astro | videos, title, layout, filterByTag | Grid/list layouts, tag filtering |
| index.ts | — | Barrel exports for clean imports |

## Video Display Features
- **Facade pattern**: Poster image until play (faster LCP)
- **Privacy-enhanced embeds**: youtube-nocookie.com
- **Schema.org VideoObject**: Rich snippets for search
- **Timestamp navigation**: Jump to key moments
- **Responsive aspect-ratio**: 16:9 via Tailwind aspect-video

## Accessibility
- ARIA labels on play buttons
- Role and aria-label on timestamp nav
- Focus-visible rings
- Reduced-motion support

## Tailwind Features
- aspect-video, line-clamp
- Group hover states
- Gradient overlays
- Ring utilities for focus

## Performance
- Lazy loading images + iframes
- Facade pattern delays iframe load
- Decoding="async" on images

## Next Steps
- Proceed to Phase 04: Homepage
