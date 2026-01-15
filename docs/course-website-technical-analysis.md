# Advertising Video Editing Course Website: Technical Architecture Analysis

**Document Version:** 1.0  
**Date:** January 4, 2025  
**Prepared for:** Prof. Rubén Vega Balbás  
**Prepared by:** Technical Architecture & Product Strategy Analysis  

---

## Executive Summary

> *"The Tao of the web is simplicity. The master chooses the path of least resistance that still serves the vision."*

**Recommendation:** **Jekyll (GitHub Pages)** for immediate deployment, with optional **Hugo** consideration for future scalability.

**Key Decision Factors:**
- ✅ **Zero hosting cost** (GitHub Pages)
- ✅ **Minimal maintenance** (static site, no server)
- ✅ **Proven pattern** (your web-atelier-udit already uses this)
- ✅ **Content-first** (Markdown/YAML source)
- ✅ **Video embedding** (YouTube/Vimeo integration)
- ✅ **Fast deployment** (< 1 week to launch)

**Time Investment:**
- Jekyll: **2-4 hours** setup + content migration
- Hugo: **4-6 hours** setup + content migration
- React: **20-40 hours** development + infrastructure

**The professor should focus on teaching, not web development.** Choose Jekyll.

---

## Table of Contents

1. [Requirements Analysis](#requirements-analysis)
2. [Option 1: Jekyll (GitHub Pages) - RECOMMENDED](#option-1-jekyll-github-pages---recommended)
3. [Option 2: Hugo (GitHub Pages)](#option-2-hugo-github-pages)
4. [Option 3: React App (Vercel/Netlify)](#option-3-react-app-vercelnelify)
5. [Comparison Matrix](#comparison-matrix)
6. [Video Content Strategy](#video-content-strategy)
7. [Implementation Roadmap](#implementation-roadmap)
8. [AI Prompts for Each Option](#ai-prompts-for-each-option)
9. [Final Recommendation](#final-recommendation)

---

## Requirements Analysis

### Core Requirements

**Content Management:**
- ✓ 10 weekly lesson prompts (already in Markdown)
- ✓ Course curriculum overview
- ✓ Resources and references
- ✓ Student project showcase (optional)
- ✓ Tao of the Video Editor quotes throughout

**Video Integration:**
- ✓ Embed educational video fragments
- ✓ YouTube/Vimeo player integration
- ✓ Video playlists by week/topic
- ✓ Annotations and timestamps
- ✓ Responsive video players

**Technical Requirements:**
- ✓ Fast loading (students on mobile)
- ✓ Accessible (WCAG 2.1 AA minimum)
- ✓ Multilingual support (Spanish/English)
- ✓ SEO optimized
- ✓ Print-friendly (students may print lessons)
- ✓ GitHub Pages compatible (free hosting)

**Maintenance Requirements:**
- ✓ **Minimal time investment** (you're a professor, not a web developer)
- ✓ Easy content updates (Markdown/YAML)
- ✓ No server maintenance
- ✓ Automated deployment
- ✓ Version control (Git)

### Constraints

**Time Constraint:**
- You have **limited time** to build this
- Focus should be on **teaching and content**, not web development
- Solution must be **quick to deploy** (< 1 week)

**Budget Constraint:**
- **Zero hosting cost preferred** (GitHub Pages)
- Avoid paid services unless absolutely necessary

**Skill Constraint:**
- You're proficient in web technologies but **time is precious**
- Solution should leverage **existing patterns** (web-atelier-udit)
- Minimize learning curve

---

## Option 1: Jekyll (GitHub Pages) - RECOMMENDED

### Overview

Jekyll is a static site generator that converts Markdown to HTML. It's the **same technology you're already using** for web-atelier-udit, making it the path of least resistance.

### Architecture

```
advertising-video_editing/
├── docs/                          # GitHub Pages source
│   ├── _config.yml               # Jekyll configuration
│   ├── _layouts/                 # HTML templates
│   │   ├── default.html
│   │   ├── lesson.html
│   │   └── week.html
│   ├── _includes/                # Reusable components
│   │   ├── header.html
│   │   ├── footer.html
│   │   ├── video-embed.html
│   │   └── tao-quote.html
│   ├── _data/                    # YAML data files
│   │   ├── course.yml            # Course metadata
│   │   ├── videos.yml            # Video library
│   │   └── resources.yml         # External resources
│   ├── assets/                   # CSS, JS, images
│   │   ├── css/
│   │   │   └── main.css          # Tailwind CSS
│   │   ├── js/
│   │   │   └── video-player.js
│   │   └── images/
│   ├── prompts/                  # Your existing lesson prompts
│   │   ├── week-01-introduction-persuasion.md
│   │   ├── week-02-early-cinema-tricks.md
│   │   └── ... (all 10 weeks)
│   ├── index.html                # Homepage
│   ├── curriculum.md             # Course overview
│   └── resources.md              # Resource library
├── Gemfile                       # Ruby dependencies
├── package.json                  # Node dependencies (Tailwind)
└── tailwind.config.js            # Tailwind configuration
```

### Advantages

**✅ Proven Pattern:**
- You already use Jekyll for web-atelier-udit
- Copy configuration and structure
- Minimal learning curve

**✅ Zero Cost:**
- GitHub Pages hosting (free)
- No server costs
- No build minutes charges

**✅ Content-First:**
- Write in Markdown (your prompts are already Markdown)
- YAML for structured data (videos, resources)
- No database needed

**✅ Fast Deployment:**
- Push to GitHub → automatic build → live site
- No manual deployment steps
- CI/CD built-in

**✅ Video Integration:**
- Simple YouTube/Vimeo embeds via includes
- Responsive video players
- Playlist support

**✅ Minimal Maintenance:**
- Static HTML (no server vulnerabilities)
- No updates required (unless you want new features)
- Reliable and stable

### Disadvantages

**❌ Build Time:**
- Jekyll can be slow for large sites (not an issue for 10 lessons)
- Ruby dependency (but you already have this)

**❌ Limited Interactivity:**
- No real-time features (not needed for your use case)
- No user accounts (not needed)

**❌ Plugin Limitations:**
- GitHub Pages only supports specific Jekyll plugins
- Custom plugins require workarounds

### Video Integration Strategy

**YouTube Embed Include:**
```liquid
<!-- _includes/youtube.html -->
<div class="video-container">
  <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/{{ include.id }}" 
    title="{{ include.title }}"
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>
```

**Usage in Markdown:**
```markdown
## Week 1: Introduction to Persuasion

{% include youtube.html id="dQw4w9WgXcQ" title="Kuleshov Effect Demonstration" %}

> *"The cut creates meaning where none existed before."*  
> — Tao of the Video Editor
```

**Video Library (YAML):**
```yaml
# _data/videos.yml
week_01:
  - id: "dQw4w9WgXcQ"
    title: "Kuleshov Effect Demonstration"
    duration: "3:45"
    platform: "youtube"
    description: "Classic demonstration of how context changes perception"
  
  - id: "abc123xyz"
    title: "Early Cinema: Méliès Magic"
    duration: "5:20"
    platform: "vimeo"
    description: "Exploring the origins of special effects"
```

### Time Investment

**Initial Setup:** 2-4 hours
- Copy web-atelier-udit structure
- Customize for video editing course
- Configure Tailwind CSS
- Create video embed includes

**Content Migration:** 2-3 hours
- Your prompts are already Markdown (minimal work)
- Add YAML front matter
- Organize into weeks
- Add video embeds

**Total:** **4-7 hours** to launch

### Maintenance

**Ongoing:** < 30 minutes per week
- Add new video links
- Update lesson content
- Fix typos

---

## Option 2: Hugo (GitHub Pages)

### Overview

Hugo is a **faster** static site generator written in Go. It's similar to Jekyll but with better performance and more modern features.

### Architecture

```
advertising-video_editing/
├── content/                      # Markdown content
│   ├── prompts/
│   │   ├── week-01.md
│   │   └── ... (all 10 weeks)
│   ├── curriculum.md
│   └── resources.md
├── layouts/                      # HTML templates
│   ├── _default/
│   │   ├── baseof.html
│   │   ├── single.html
│   │   └── list.html
│   ├── partials/
│   │   ├── header.html
│   │   ├── footer.html
│   │   └── video-embed.html
│   └── shortcodes/
│       ├── youtube.html
│       └── vimeo.html
├── data/                         # YAML/JSON data
│   ├── videos.yml
│   └── resources.yml
├── static/                       # Assets
│   ├── css/
│   ├── js/
│   └── images/
├── config.toml                   # Hugo configuration
└── package.json                  # Node dependencies
```

### Advantages

**✅ Speed:**
- **10-100x faster** than Jekyll
- Instant builds (< 1 second for 10 pages)
- Better developer experience

**✅ Modern Features:**
- Built-in image processing
- Better multilingual support
- More flexible templating (Go templates)

**✅ No Ruby:**
- Single binary (no gem dependencies)
- Easier to install and update
- Cross-platform

**✅ Content Organization:**
- Better content structure (sections, taxonomies)
- Powerful front matter (TOML, YAML, JSON)
- Content archetypes (templates for new content)

**✅ Video Integration:**
- Built-in YouTube/Vimeo shortcodes
- Easy custom shortcodes

### Disadvantages

**❌ Learning Curve:**
- Different from Jekyll (you'd need to learn Hugo)
- Go template syntax (different from Liquid)
- New configuration format (TOML)

**❌ Less Familiar:**
- You don't have existing Hugo projects
- Would need to start from scratch
- More time investment upfront

**❌ GitHub Pages Setup:**
- Requires GitHub Actions workflow (not automatic like Jekyll)
- Slightly more complex deployment

### Video Integration Strategy

**Built-in YouTube Shortcode:**
```markdown
## Week 1: Introduction to Persuasion

{{< youtube dQw4w9WgXcQ >}}

> *"The cut creates meaning where none existed before."*  
> — Tao of the Video Editor
```

**Custom Video Shortcode with Timestamps:**
```html
<!-- layouts/shortcodes/video.html -->
<div class="video-container" data-timestamps="{{ .Get "timestamps" }}">
  {{ if eq (.Get "platform") "youtube" }}
    <iframe src="https://www.youtube.com/embed/{{ .Get "id" }}" ...></iframe>
  {{ else if eq (.Get "platform") "vimeo" }}
    <iframe src="https://player.vimeo.com/video/{{ .Get "id" }}" ...></iframe>
  {{ end }}
</div>
```

**Usage:**
```markdown
{{< video platform="youtube" id="dQw4w9WgXcQ" timestamps="0:00,1:30,3:45" >}}
```

### Time Investment

**Initial Setup:** 4-6 hours
- Learn Hugo basics
- Set up project structure
- Configure GitHub Actions deployment
- Create templates and shortcodes

**Content Migration:** 2-3 hours
- Convert to Hugo front matter
- Organize content structure
- Add video embeds

**Total:** **6-9 hours** to launch

### Maintenance

**Ongoing:** < 30 minutes per week
- Same as Jekyll

---

## Option 3: React App (Vercel/Netlify)

### Overview

A full React application like your adadi.org site. Provides maximum flexibility and interactivity but requires **significantly more development time**.

### Architecture

```
advertising-video_editing-web/
├── app/                          # React Router v7 app
│   ├── routes/
│   │   ├── _index.tsx            # Homepage
│   │   ├── curriculum.tsx        # Course overview
│   │   ├── prompts/
│   │   │   ├── _index.tsx        # Prompts list
│   │   │   └── $week.tsx         # Individual week
│   │   └── resources.tsx
│   ├── components/
│   │   ├── VideoPlayer.tsx
│   │   ├── TaoQuote.tsx
│   │   ├── LessonNav.tsx
│   │   └── WeekCard.tsx
│   ├── data/
│   │   ├── prompts/              # Markdown files
│   │   │   ├── week-01.md
│   │   │   └── ... (all 10)
│   │   ├── videos.json
│   │   └── course.json
│   └── utils/
│       ├── markdown.ts           # Markdown parser
│       └── video.ts              # Video utilities
├── public/                       # Static assets
├── components.json               # shadcn/ui config
├── tailwind.config.js
├── vite.config.ts
├── package.json
└── react-router.config.ts
```

### Advantages

**✅ Maximum Flexibility:**
- Full control over UI/UX
- Interactive features (video annotations, quizzes, etc.)
- Dynamic content loading
- Client-side routing (smooth navigation)

**✅ Modern Stack:**
- React 19 + React Router v7
- TypeScript for type safety
- Tailwind CSS + shadcn/ui components
- Framer Motion for animations

**✅ Rich Video Features:**
- Custom video player with annotations
- Timestamp navigation
- Playlist management
- Progress tracking (if you add backend)

**✅ Reusable Components:**
- Build component library
- Consistent design system
- Easy to extend

**✅ Developer Experience:**
- Hot module replacement
- Fast refresh
- Modern tooling (Vite)

### Disadvantages

**❌ Time Investment:**
- **20-40 hours** initial development
- Requires React expertise
- Complex setup and configuration

**❌ Hosting Costs:**
- Vercel/Netlify (free tier limits)
- May need paid plan for bandwidth (video embeds)

**❌ Maintenance:**
- Dependency updates (npm packages)
- Security patches
- Breaking changes in React ecosystem

**❌ Overkill:**
- **You don't need this complexity** for a course website
- Static content doesn't require React
- SEO requires extra work (SSR/SSG)

**❌ Build Complexity:**
- Markdown parsing in React
- Code splitting configuration
- Bundle optimization
- Deployment pipeline

### Video Integration Strategy

**React Video Player Component:**
```tsx
// app/components/VideoPlayer.tsx
import { useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

interface VideoPlayerProps {
  platform: 'youtube' | 'vimeo';
  videoId: string;
  title: string;
  timestamps?: { time: string; label: string }[];
}

export function VideoPlayer({ platform, videoId, title, timestamps }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const embedUrl = platform === 'youtube' 
    ? `https://www.youtube.com/embed/${videoId}`
    : `https://player.vimeo.com/video/${videoId}`;
  
  return (
    <div className="video-container">
      <iframe
        src={embedUrl}
        title={title}
        className="w-full aspect-video"
        allowFullScreen
      />
      {timestamps && (
        <div className="timestamps mt-4">
          {timestamps.map((ts, i) => (
            <button key={i} className="timestamp-btn">
              {ts.time} - {ts.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
```

**Markdown Content Loader:**
```tsx
// app/routes/prompts/$week.tsx
import { useLoaderData } from 'react-router';
import { marked } from 'marked';
import { readFile } from 'fs/promises';
import { VideoPlayer } from '~/components/VideoPlayer';

export async function loader({ params }: { params: { week: string } }) {
  const markdown = await readFile(`./app/data/prompts/${params.week}.md`, 'utf-8');
  const html = marked(markdown);
  
  // Parse video metadata from front matter
  const videos = parseVideos(markdown);
  
  return { html, videos };
}

export default function WeekPrompt() {
  const { html, videos } = useLoaderData();
  
  return (
    <div className="lesson-container">
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {videos.map(video => (
        <VideoPlayer key={video.id} {...video} />
      ))}
    </div>
  );
}
```

### Time Investment

**Initial Setup:** 8-12 hours
- Set up React Router v7 project
- Configure Tailwind + shadcn/ui
- Set up Markdown parsing
- Create base components

**Component Development:** 8-16 hours
- Video player component
- Lesson navigation
- Quote components
- Layout and styling

**Content Integration:** 4-8 hours
- Convert Markdown to React-compatible format
- Add video metadata
- Test all pages

**Deployment:** 2-4 hours
- Configure Vercel/Netlify
- Set up CI/CD
- Test production build

**Total:** **22-40 hours** to launch

### Maintenance

**Ongoing:** 1-2 hours per month
- Dependency updates
- Security patches
- Bug fixes

---

## Comparison Matrix

| Criteria | Jekyll | Hugo | React App |
|----------|--------|------|-----------|
| **Setup Time** | 2-4 hours | 4-6 hours | 8-12 hours |
| **Content Migration** | 2-3 hours | 2-3 hours | 4-8 hours |
| **Total Launch Time** | **4-7 hours** | **6-9 hours** | **22-40 hours** |
| **Learning Curve** | ✅ Low (you know it) | ⚠️ Medium | ❌ High |
| **Hosting Cost** | ✅ Free (GitHub Pages) | ✅ Free (GitHub Pages) | ⚠️ Free tier limits |
| **Build Speed** | ⚠️ Slow (Ruby) | ✅ Very fast (Go) | ⚠️ Medium (Vite) |
| **Maintenance** | ✅ Minimal | ✅ Minimal | ❌ Regular updates |
| **Video Integration** | ✅ Simple embeds | ✅ Built-in shortcodes | ✅ Custom players |
| **Interactivity** | ❌ Limited | ❌ Limited | ✅ Full control |
| **SEO** | ✅ Excellent | ✅ Excellent | ⚠️ Requires SSR |
| **Accessibility** | ✅ Easy | ✅ Easy | ⚠️ Requires work |
| **Content Management** | ✅ Markdown/YAML | ✅ Markdown/YAML | ⚠️ Markdown + JSON |
| **Multilingual** | ⚠️ Manual | ✅ Built-in | ⚠️ Custom solution |
| **Proven Pattern** | ✅ web-atelier-udit | ❌ New to you | ⚠️ adadi.org (complex) |
| **Recommendation** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |

---

## Video Content Strategy

### Video Hosting Options

**YouTube (Recommended):**
- ✅ Free unlimited hosting
- ✅ Reliable CDN (fast worldwide)
- ✅ Built-in player controls
- ✅ Captions/subtitles support
- ✅ Playlist organization
- ⚠️ Ads (unless YouTube Premium)
- ⚠️ Requires Google account

**Vimeo:**
- ✅ No ads
- ✅ Professional appearance
- ✅ Better privacy controls
- ❌ Limited free tier (500MB/week)
- ❌ Paid plans required for more storage

**Self-Hosted (Not Recommended):**
- ❌ Bandwidth costs
- ❌ Storage costs
- ❌ Requires video CDN
- ❌ Complex setup

### Video Organization Strategy

**Playlist Structure:**
```yaml
# _data/videos.yml
playlists:
  - id: "week-01-introduction"
    title: "Week 1: Introduction to Persuasion"
    description: "Foundational concepts and historical context"
    videos:
      - id: "abc123"
        title: "McLuhan: The Medium is the Message"
        duration: "4:30"
        timestamps:
          - time: "0:00"
            label: "Introduction"
          - time: "1:45"
            label: "Key Concepts"
          - time: "3:20"
            label: "Application to Editing"
      
      - id: "def456"
        title: "Premiere Pro: Interface Overview"
        duration: "8:15"
        timestamps:
          - time: "0:00"
            label: "Workspace Setup"
          - time: "2:30"
            label: "Timeline Basics"
          - time: "5:00"
            label: "Effects Panel"
```

### Video Embedding Best Practices

**Responsive Embeds:**
```css
/* Maintain 16:9 aspect ratio */
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

**Accessibility:**
```html
<iframe 
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Descriptive title for screen readers"
  allowfullscreen
  loading="lazy"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
</iframe>
```

**Privacy-Enhanced Mode (YouTube):**
```html
<!-- Use youtube-nocookie.com for privacy -->
<iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID"></iframe>
```

### Timestamp Navigation

**Simple JavaScript Enhancement:**
```javascript
// assets/js/video-timestamps.js
document.querySelectorAll('.timestamp-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const time = link.dataset.time; // e.g., "1:45"
    const [minutes, seconds] = time.split(':').map(Number);
    const totalSeconds = minutes * 60 + seconds;
    
    const iframe = document.querySelector('.video-container iframe');
    const src = iframe.src;
    iframe.src = `${src.split('?')[0]}?start=${totalSeconds}&autoplay=1`;
  });
});
```

**Usage in Markdown:**
```markdown
**Key Moments:**
- [0:00 - Introduction](javascript:void(0)){: .timestamp-link data-time="0:00"}
- [1:45 - Kuleshov Effect](javascript:void(0)){: .timestamp-link data-time="1:45"}
- [3:20 - Application](javascript:void(0)){: .timestamp-link data-time="3:20"}
```

---

## Implementation Roadmap

### Phase 1: Jekyll Setup (Week 1)

**Day 1: Project Setup (2 hours)**
- [ ] Create `docs/` directory in advertising-video_editing repo
- [ ] Copy `_config.yml` from web-atelier-udit
- [ ] Customize for video editing course
- [ ] Set up Gemfile and package.json
- [ ] Configure Tailwind CSS

**Day 2: Layout & Components (2 hours)**
- [ ] Create `_layouts/default.html` (base layout)
- [ ] Create `_layouts/lesson.html` (lesson template)
- [ ] Create `_includes/header.html` (navigation)
- [ ] Create `_includes/footer.html`
- [ ] Create `_includes/youtube.html` (video embed)
- [ ] Create `_includes/tao-quote.html` (quote component)

**Day 3: Content Migration (2 hours)**
- [ ] Add YAML front matter to existing prompts
- [ ] Move prompts to `docs/prompts/`
- [ ] Create `index.html` (homepage)
- [ ] Create `curriculum.md` (course overview)
- [ ] Create `resources.md` (resource library)

**Day 4: Video Integration (1 hour)**
- [ ] Create `_data/videos.yml` (video library)
- [ ] Add video embeds to lesson prompts
- [ ] Test responsive video players
- [ ] Add timestamp navigation (optional)

**Day 5: Testing & Launch (1 hour)**
- [ ] Test all pages locally (`bundle exec jekyll serve`)
- [ ] Fix any broken links or formatting
- [ ] Push to GitHub
- [ ] Enable GitHub Pages in repo settings
- [ ] Verify live site

**Total: 8 hours over 5 days**

### Phase 2: Content Enhancement (Ongoing)

**Week 2-3: Video Content**
- [ ] Upload educational video fragments to YouTube
- [ ] Create playlists by week/topic
- [ ] Add video descriptions and timestamps
- [ ] Embed videos in lesson prompts

**Week 4-5: Polish**
- [ ] Add Tao quotes throughout
- [ ] Improve typography and spacing
- [ ] Add print stylesheet
- [ ] Test accessibility (WAVE, axe)

**Week 6+: Maintenance**
- [ ] Update content as needed
- [ ] Add new videos
- [ ] Fix student-reported issues

---

## AI Prompts for Each Option

### Jekyll Implementation Prompts

#### Prompt 1: Initial Setup

```
I'm creating a GitHub Pages site for my Advertising Video Editing course using Jekyll. 
I already have a Jekyll site at /Users/ruvebal/projects/ruvebal/scholar/udit/web-atelier-udit/web-foundations 
that I want to use as a template.

Create a complete Jekyll setup for /Users/ruvebal/projects/ruvebal/scholar/udit/advertising-video_editing/docs/ with:

1. _config.yml configured for:
   - Title: "Advertising Video Editing Course"
   - URL: https://ruvebal.github.io/advertising-video_editing
   - Collections for lessons/prompts
   - Kramdown markdown with GFM
   - Jekyll plugins: jekyll-seo-tag, jekyll-sitemap

2. Gemfile with:
   - github-pages gem
   - jekyll-seo-tag
   - jekyll-sitemap

3. package.json with:
   - Tailwind CSS setup
   - PostCSS configuration
   - Build scripts

4. Directory structure:
   - _layouts/ (default.html, lesson.html)
   - _includes/ (header.html, footer.html, youtube.html, tao-quote.html)
   - _data/ (videos.yml, resources.yml)
   - assets/ (css/, js/, images/)
   - prompts/ (for lesson markdown files)

5. Tailwind configuration matching web-atelier-udit style

Provide complete file contents for each configuration file.
```

#### Prompt 2: Video Embed Component

```
Create a Jekyll include for embedding YouTube and Vimeo videos with the following features:

1. Responsive 16:9 aspect ratio container
2. Support for both YouTube and Vimeo
3. Privacy-enhanced mode (youtube-nocookie.com)
4. Accessibility attributes (title, allowfullscreen)
5. Lazy loading
6. Optional timestamp navigation

File: _includes/video-embed.html

Usage in Markdown:
{% include video-embed.html platform="youtube" id="dQw4w9WgXcQ" title="Kuleshov Effect" %}

Also create CSS for responsive video containers in assets/css/components/video.css
```

#### Prompt 3: Lesson Template

```
Create a Jekyll layout for lesson prompts with:

1. YAML front matter schema:
   - title
   - week
   - description
   - learning_objectives (array)
   - videos (array of video IDs)
   - resources (array of links)

2. Layout structure:
   - Header with week number and title
   - Table of contents (auto-generated from headings)
   - Main content area
   - Sidebar with:
     - Learning objectives
     - Video playlist
     - Resources
     - Navigation to prev/next week
   - Footer with Tao quote

3. Responsive design (mobile-first)
4. Print-friendly styles
5. Accessibility (ARIA landmarks, skip links)

File: _layouts/lesson.html

Provide complete HTML with Liquid template tags.
```

#### Prompt 4: Content Migration

```
I have 10 lesson prompt files in Markdown at:
/Users/ruvebal/projects/ruvebal/scholar/udit/advertising-video_editing/docs/prompts/

Convert them to Jekyll-compatible format by:

1. Adding YAML front matter to each file:
   ---
   layout: lesson
   title: [extract from filename]
   week: [extract week number]
   description: [extract from first paragraph]
   permalink: /prompts/week-[number]/
   ---

2. Converting any special formatting to Jekyll includes:
   - Video embeds → {% include video-embed.html %}
   - Tao quotes → {% include tao-quote.html %}

3. Creating _data/videos.yml with all video metadata extracted from the lessons

Provide a script or step-by-step process to automate this migration.
```

---

### Hugo Implementation Prompts

#### Prompt 1: Initial Setup

```
I'm creating a GitHub Pages site for my Advertising Video Editing course using Hugo.
I want to deploy via GitHub Actions.

Create a complete Hugo setup for /Users/ruvebal/projects/ruvebal/scholar/udit/advertising-video_editing/ with:

1. config.toml configured for:
   - Title: "Advertising Video Editing Course"
   - BaseURL: https://ruvebal.github.io/advertising-video_editing/
   - Language: en (with es support)
   - Taxonomies: weeks, topics
   - Params for course metadata

2. Directory structure:
   - content/prompts/ (lesson markdown files)
   - layouts/_default/ (baseof.html, single.html, list.html)
   - layouts/partials/ (header.html, footer.html)
   - layouts/shortcodes/ (youtube.html, vimeo.html, tao-quote.html)
   - data/ (videos.yml, resources.yml)
   - static/ (css/, js/, images/)

3. GitHub Actions workflow (.github/workflows/hugo.yml) for:
   - Building Hugo site
   - Deploying to GitHub Pages
   - Running on push to main branch

4. package.json with Tailwind CSS setup

Provide complete configuration files and directory structure.
```

#### Prompt 2: Video Shortcodes

```
Create Hugo shortcodes for video embeds with:

1. youtube.html shortcode:
   - Usage: {{< youtube "VIDEO_ID" >}}
   - Responsive container
   - Privacy-enhanced mode
   - Accessibility attributes

2. vimeo.html shortcode:
   - Usage: {{< vimeo "VIDEO_ID" >}}
   - Responsive container
   - Accessibility attributes

3. video.html shortcode (advanced):
   - Usage: {{< video platform="youtube" id="VIDEO_ID" title="Title" timestamps="0:00,1:45,3:20" >}}
   - Support for both platforms
   - Timestamp navigation
   - Custom styling

Files: layouts/shortcodes/youtube.html, vimeo.html, video.html

Also provide CSS for responsive video containers.
```

#### Prompt 3: Content Archetypes

```
Create Hugo archetypes for lesson prompts:

File: archetypes/prompts.md

Front matter template:
---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
week: 
description: ""
learning_objectives:
  - 
videos:
  - platform: "youtube"
    id: ""
    title: ""
    duration: ""
resources:
  - title: ""
    url: ""
    type: ""
---

This allows creating new lessons with: hugo new prompts/week-11-advanced-techniques.md
```

---

### React App Implementation Prompts

#### Prompt 1: Project Setup

```
Create a React Router v7 project for my Advertising Video Editing course website.

Use the following stack:
- React 19
- React Router v7
- TypeScript
- Tailwind CSS + shadcn/ui
- Vite
- Framer Motion (for animations)

Project structure:
- app/routes/ (file-based routing)
- app/components/ (reusable components)
- app/data/prompts/ (markdown lesson files)
- app/utils/ (markdown parser, video utilities)
- public/ (static assets)

Initialize with:
1. react-router.config.ts
2. vite.config.ts
3. tailwind.config.js
4. tsconfig.json
5. package.json with all dependencies

Provide complete configuration files and setup instructions.
```

#### Prompt 2: Video Player Component

```
Create a React video player component with:

Features:
1. Support for YouTube and Vimeo embeds
2. Responsive 16:9 aspect ratio
3. Timestamp navigation (clickable timestamps jump to specific times)
4. Playlist support (multiple videos in sequence)
5. Accessibility (keyboard navigation, ARIA labels)
6. Loading states and error handling

Component: app/components/VideoPlayer.tsx

Props interface:
- platform: 'youtube' | 'vimeo'
- videoId: string
- title: string
- timestamps?: Array<{ time: string; label: string }>
- playlist?: Array<Video>

Use Tailwind CSS for styling and lucide-react for icons.
Provide complete TypeScript component with types.
```

#### Prompt 3: Markdown Content Loader

```
Create a React Router loader for loading and parsing Markdown lesson content:

Requirements:
1. Load Markdown files from app/data/prompts/
2. Parse front matter (YAML)
3. Convert Markdown to HTML (use marked library)
4. Extract video metadata from front matter
5. Type-safe with TypeScript

File: app/routes/prompts.$week.tsx

Loader function should:
- Read Markdown file based on route param
- Parse YAML front matter
- Convert Markdown to HTML
- Return typed data for component

Component should:
- Display lesson content
- Render VideoPlayer components for embedded videos
- Show navigation to prev/next lessons
- Display Tao quotes in styled boxes

Provide complete TypeScript implementation.
```

#### Prompt 4: Deployment Configuration

```
Create deployment configuration for Vercel:

1. vercel.json with:
   - Build command
   - Output directory
   - Environment variables
   - Redirects and rewrites

2. GitHub Actions workflow (.github/workflows/deploy.yml) for:
   - Running tests
   - Building production bundle
   - Deploying to Vercel
   - Running on push to main branch

3. Environment variables setup:
   - Development (.env.development)
   - Production (.env.production)

Provide complete configuration files and deployment instructions.
```

---

## Final Recommendation

### The Tao Says: Choose Jekyll

> *"The master does not seek complexity. The master seeks sufficiency. What is sufficient is perfect."*

**Why Jekyll:**

1. **You Already Know It** - web-atelier-udit uses Jekyll
2. **Zero Cost** - GitHub Pages hosting
3. **Minimal Time** - 4-7 hours to launch
4. **Content-First** - Your prompts are already Markdown
5. **Proven Pattern** - Copy and customize existing structure
6. **Low Maintenance** - Static site, no server, no updates

**When to Consider Hugo:**
- If you want faster builds (not critical for 10 lessons)
- If you plan to scale to 100+ lessons
- If you want better multilingual support

**When to Consider React:**
- If you need interactive features (video annotations, quizzes, user accounts)
- If you have 20-40 hours to invest
- If you want to build a complex learning platform

**For Your Use Case:**
You need a simple, fast-to-deploy course website that showcases your excellent lesson content and embeds educational videos. **Jekyll is the perfect choice.**

---

## Implementation Decision Tree

```
START: Do you need user accounts, quizzes, or complex interactivity?
├─ YES → Consider React (but be prepared for 20-40 hours)
└─ NO → Continue

Do you have more than 50 lessons?
├─ YES → Consider Hugo (faster builds)
└─ NO → Continue

Do you already know Jekyll?
├─ YES → ✅ CHOOSE JEKYLL
└─ NO → Do you want to learn Hugo?
    ├─ YES → Consider Hugo (4-6 hour learning curve)
    └─ NO → ✅ CHOOSE JEKYLL (easier to learn)
```

**Your Path: ✅ JEKYLL**

---

## Next Steps

### Immediate Actions (This Week)

1. **Create `docs/` directory** in advertising-video_editing repo
2. **Copy Jekyll configuration** from web-atelier-udit
3. **Set up basic layouts** (default, lesson)
4. **Create video embed include**
5. **Migrate one lesson** as a test
6. **Push to GitHub and enable Pages**

### AI-Assisted Implementation

Use the Jekyll prompts above with your AI assistant (Cascade, ChatGPT, Claude) to:
1. Generate configuration files
2. Create layout templates
3. Build video embed components
4. Automate content migration

### Timeline

- **Week 1:** Setup and first lesson live
- **Week 2:** All lessons migrated
- **Week 3:** Video integration complete
- **Week 4:** Polish and launch

---

## Conclusion

**The Tao of the Video Editor teaches us: "In limitation, the master reveals mastery."**

The same principle applies to web development. You don't need a complex React app to share your wisdom. A simple, elegant Jekyll site will serve your students beautifully while respecting your time.

**Choose Jekyll. Launch in a week. Focus on teaching.**

> *"The best website is the one that exists. The perfect website is the one that serves its purpose. Choose existence over perfection."*  
> — Tao of the Web Developer

---

**Document End**

*Prepared with care for Prof. Rubén Vega Balbás*  
*May the Tao guide your choice and your teaching.*
