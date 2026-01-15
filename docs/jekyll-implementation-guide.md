# Jekyll Implementation Guide: Video Editing Course Website
## From Professor-Course-Template to Kino-Web-Sphere

**Document Version:** 1.0  
**Date:** January 4, 2025  
**For:** Prof. Rubén Vega Balbás  
**Purpose:** Confluence-style action plan to adapt professor-course-template for video editing course

---

> *"The Tao of the moving image meets the Tao of the web. Where video teaches editing, the web teaches structure. Together, they create the Kino-Web-Sphere."*

---

## Executive Summary

**Strategy:** Clone and adapt `professor-course-template` → customize for video editing course → integrate lesson prompts in `docs/` structure.

**Key Adaptations Needed:**
1. ✅ **Lessons in `docs/`** (not external links to web-foundations)
2. ✅ **Video embed components** (YouTube/Vimeo integration)
3. ✅ **Tao quote components** (styled quote boxes)
4. ✅ **Week-based navigation** (10 weeks, not generic lessons)
5. ✅ **No student showroom** (not needed for this course)
6. ✅ **Video library data structure** (YAML for video metadata)

**Timeline:** 1 day (8 hours) to launch

---

## Table of Contents

1. [Analysis: Professor-Course-Template Structure](#analysis-professor-course-template-structure)
2. [Adaptations Required for Video Editing Course](#adaptations-required-for-video-editing-course)
3. [The Kino-Web-Sphere: Video Teaching Integration](#the-kino-web-sphere-video-teaching-integration)
4. [Implementation Plan: Step-by-Step](#implementation-plan-step-by-step)
5. [File Structure: Before & After](#file-structure-before--after)
6. [Configuration Changes](#configuration-changes)
7. [Component Development](#component-development)
8. [Content Migration Strategy](#content-migration-strategy)
9. [Testing & Launch Checklist](#testing--launch-checklist)
10. [AI Prompts for Implementation](#ai-prompts-for-implementation)

---

## Analysis: Professor-Course-Template Structure

### Current Architecture

**Purpose:** Semester-specific course site that **links to** external canonical lessons (web-foundations).

**Key Characteristics:**
- ✓ Bilingual (EN/ES) with language detection
- ✓ Student showroom (YAML-based, file-per-student)
- ✓ Links to external lessons (not self-contained)
- ✓ Semester-based organization (2025-fall/)
- ✓ Dark mode, responsive, accessible
- ✓ GitHub Pages deployment

**Directory Structure:**
```
professor-course-template/
├── _config.yml                    # Jekyll config
├── _layouts/
│   └── default.html               # Main layout
├── _includes/
│   ├── header.html                # Nav with lang/theme toggle
│   ├── footer.html                # UDIT branding
│   ├── students-list-by-files.html # Student showroom
│   └── ...
├── _data/
│   ├── courses/2025-fall/         # Course metadata (en.yml, es.yml)
│   ├── lessons/2025-fall/         # Lesson links (external)
│   └── students/2025-fall/        # Student YAML files
├── 2025-fall/
│   ├── en/index.md                # English course page
│   └── es/index.md                # Spanish course page
├── docs/                          # Course policies (placeholder)
│   ├── ACCESSIBILITY.md
│   ├── AI_POLICY.md
│   └── ...
└── index.html                     # Root redirect
```

### What Works for Video Editing Course

✅ **Keep:**
- Jekyll + GitHub Pages setup
- Bilingual structure (EN/ES)
- Dark mode and responsive design
- `_layouts/default.html` (base layout)
- `_includes/header.html` and `footer.html`
- `_config.yml` structure (with modifications)
- Kramdown typography settings

### What Needs Adaptation

❌ **Remove/Replace:**
- Student showroom (not needed)
- External lesson links (lessons will be internal in `docs/`)
- Semester-based organization (single course, not semester-specific)

✅ **Add:**
- Video embed components
- Tao quote components
- Week-based lesson navigation
- Video library data structure
- Lesson content in `docs/prompts/`

---

## Adaptations Required for Video Editing Course

### 1. Lessons in `docs/` (Self-Contained)

**Current:** Professor-course-template links to external web-foundations lessons.  
**Needed:** Lessons live in the repo at `docs/prompts/`.

**Why `docs/`?**
- ✓ GitHub Pages convention (can serve from `docs/` or root)
- ✓ Keeps content organized and separate from config
- ✓ Your lesson prompts are already in `docs/prompts/`
- ✓ Allows for additional documentation in `docs/`

**Structure:**
```
docs/
├── prompts/                       # Lesson prompts (Markdown)
│   ├── week-01-introduction-persuasion.md
│   ├── week-02-early-cinema-tricks.md
│   └── ... (all 10 weeks)
├── curriculum.md                  # Course overview
├── resources.md                   # Resource library
└── index.html                     # Course homepage
```

### 2. Video Embed Components

**Needed:** Jekyll includes for embedding YouTube/Vimeo videos.

**Components to Create:**
- `_includes/youtube.html` - YouTube embed
- `_includes/vimeo.html` - Vimeo embed
- `_includes/video-player.html` - Universal video player
- `_includes/video-playlist.html` - Playlist display

**Features:**
- Responsive 16:9 aspect ratio
- Privacy-enhanced mode (youtube-nocookie.com)
- Accessibility (title, allowfullscreen)
- Lazy loading
- Optional timestamp navigation

### 3. Tao Quote Components

**Needed:** Styled quote boxes for "Tao of the Video Editor" wisdom.

**Component:** `_includes/tao-quote.html`

**Features:**
- Distinctive styling (border, background, icon)
- Responsive
- Accessible (semantic HTML)
- Easy to use in Markdown

### 4. Week-Based Navigation

**Current:** Generic lesson list.  
**Needed:** 10-week course structure with prev/next navigation.

**Features:**
- Week cards on homepage
- Prev/Next links in lesson pages
- Progress indicator (Week X of 10)
- Visual week timeline

### 5. No Student Showroom

**Current:** Student YAML files and showroom display.  
**Needed:** Remove this functionality (not applicable).

**Action:** Delete `_includes/students-list-by-files.html` and related code.

### 6. Video Library Data Structure

**Needed:** YAML data files for video metadata.

**Structure:**
```yaml
# _data/videos/week-01.yml
- id: "dQw4w9WgXcQ"
  platform: "youtube"
  title: "Kuleshov Effect Demonstration"
  duration: "3:45"
  description: "Classic demonstration of how context changes perception"
  timestamps:
    - time: "0:00"
      label: "Introduction"
    - time: "1:45"
      label: "The Experiment"
    - time: "3:20"
      label: "Application to Advertising"
```

---

## The Kino-Web-Sphere: Video Teaching Integration

### Philosophy

> *"The moving image teaches through time. The web teaches through space. The Kino-Web-Sphere unites them: temporal learning in spatial structure."*

**Kino-Web-Sphere Principles:**

1. **Video as Primary Text** - Moving images are the core teaching material
2. **Web as Context** - HTML provides structure, navigation, and annotation
3. **Markdown as Script** - Lesson prompts are the screenplay for learning
4. **Interactivity as Engagement** - Timestamps, playlists, and navigation enhance learning
5. **Accessibility as Foundation** - Captions, transcripts, keyboard navigation

### Video Integration Strategy

**Three Levels of Video Integration:**

#### Level 1: Simple Embeds (Week 1-2)
- Direct YouTube/Vimeo embeds
- Responsive containers
- Basic accessibility

**Implementation:**
```markdown
## Week 1: Introduction to Persuasion

{% include youtube.html id="dQw4w9WgXcQ" title="McLuhan: The Medium is the Message" %}

> *"The medium is the message."*  
> — Tao of the Video Editor
```

#### Level 2: Annotated Videos (Week 3-5)
- Timestamp navigation
- Chapter markers
- Clickable timestamps

**Implementation:**
```markdown
{% include video-player.html 
   platform="youtube" 
   id="dQw4w9WgXcQ" 
   title="Kuleshov Effect Demonstration"
   timestamps="0:00|Introduction,1:45|The Experiment,3:20|Application"
%}
```

#### Level 3: Playlists (Week 6-10)
- Multiple videos per lesson
- Sequential viewing
- Progress tracking (optional)

**Implementation:**
```markdown
{% include video-playlist.html week="01" %}
```

### Tao Quote Integration

**Purpose:** Highlight key teachings with visual emphasis.

**Usage:**
```markdown
{% include tao-quote.html 
   quote="The cut creates meaning where none existed before." 
%}
```

**Styling:**
- Left border accent (color: #e74c3c or course brand color)
- Italic text
- Icon (optional: 🎬 or ☯)
- Subtle background

---

## Implementation Plan: Step-by-Step

### Phase 1: Clone and Clean (1 hour)

**Step 1.1: Clone Professor-Course-Template**
```bash
cd /Users/ruvebal/projects/ruvebal/scholar/udit/advertising-video_editing

# Copy professor-course-template structure
cp -r ../web-atelier-udit/professor-course-template/* .

# Remove git history (fresh start)
rm -rf .git

# Initialize new git repo
git init
git add .
git commit -m "Initial commit: adapted from professor-course-template"
```

**Step 1.2: Remove Unnecessary Files**
```bash
# Remove student-related files
rm -rf _data/students
rm _includes/students-list-by-files.html

# Remove semester-specific structure (we'll use docs/ instead)
rm -rf 2025-fall
rm -rf courses
rm -rf lessons

# Keep docs/ but clear placeholder files
rm docs/*.md
```

**Step 1.3: Update Repository Metadata**
```bash
# Update README.md
# Update LICENSE files (keep same licenses)
# Update .gitignore if needed
```

### Phase 2: Configure Jekyll (1 hour)

**Step 2.1: Update `_config.yml`**

```yaml
title: 'Advertising Video Editing Course'
description: 'A comprehensive course on video editing for advertising, blending theory, technique, and ethics.'
url: 'https://ruvebal.github.io'
baseurl: '/advertising-video_editing'
repository: 'ruvebal/advertising-video_editing'

# Source directory (GitHub Pages can serve from docs/)
source: docs

markdown: kramdown
kramdown:
  input: GFM
  hard_wrap: false
  parse_block_html: true
  parse_span_html: true
  show_warnings: false
  auto_ids: true
  auto_id_stripping: true
  smart_quotes: [lsquo, rsquo, ldquo, rdquo]
  entity_output: as_char
  typographic_symbols:
    hellip: '…'
    ndash: '–'
    mdash: '—'
  footnote_nr: 1
  footnote_backlink: '↩'
  toc_levels: 2..4

theme: null
highlighter: rouge
permalink: /prompts/:slug/

# Collections for lessons
collections:
  prompts:
    output: true
    permalink: /prompts/:slug/

# Defaults
defaults:
  - scope:
      path: '_prompts'
      type: 'prompts'
    values:
      layout: 'lesson'
  - scope:
      path: 'docs'
    values:
      layout: 'default'

# Plugins
plugins:
  - jekyll-seo-tag
  - jekyll-sitemap

# Exclude
exclude:
  - node_modules
  - vendor
  - Gemfile
  - Gemfile.lock
  - package.json
  - scripts
  - .github
  - README.md
```

**Step 2.2: Update `Gemfile`**
```ruby
source 'https://rubygems.org'

gem 'github-pages', group: :jekyll_plugins
gem 'jekyll-seo-tag'
gem 'jekyll-sitemap'
gem 'webrick' # For Ruby 3.x
```

**Step 2.3: Install Dependencies**
```bash
bundle install
```

### Phase 3: Create Video Components (2 hours)

**Step 3.1: Create `docs/_includes/youtube.html`**

```liquid
<!-- YouTube embed with privacy-enhanced mode -->
<div class="video-container" data-video-id="{{ include.id }}">
  <iframe 
    src="https://www.youtube-nocookie.com/embed/{{ include.id }}"
    title="{{ include.title | default: 'Video' }}"
    frameborder="0"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>
```

**Step 3.2: Create `docs/_includes/vimeo.html`**

```liquid
<!-- Vimeo embed -->
<div class="video-container" data-video-id="{{ include.id }}">
  <iframe 
    src="https://player.vimeo.com/video/{{ include.id }}"
    title="{{ include.title | default: 'Video' }}"
    frameborder="0"
    loading="lazy"
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>
```

**Step 3.3: Create `docs/_includes/video-player.html`**

```liquid
<!-- Universal video player with timestamps -->
<div class="video-player" data-video-id="{{ include.id }}">
  {% if include.platform == 'youtube' %}
    {% include youtube.html id=include.id title=include.title %}
  {% elsif include.platform == 'vimeo' %}
    {% include vimeo.html id=include.id title=include.title %}
  {% endif %}
  
  {% if include.timestamps %}
    <div class="video-timestamps">
      <h4>Key Moments:</h4>
      <ul>
        {% assign timestamps = include.timestamps | split: ',' %}
        {% for timestamp in timestamps %}
          {% assign parts = timestamp | split: '|' %}
          <li>
            <button class="timestamp-btn" data-time="{{ parts[0] }}">
              <span class="time">{{ parts[0] }}</span>
              <span class="label">{{ parts[1] }}</span>
            </button>
          </li>
        {% endfor %}
      </ul>
    </div>
  {% endif %}
</div>
```

**Step 3.4: Create `docs/_includes/tao-quote.html`**

```liquid
<!-- Tao of the Video Editor quote box -->
<blockquote class="tao-quote">
  <p>{{ include.quote }}</p>
  <cite>— Tao of the Video Editor</cite>
</blockquote>
```

**Step 3.5: Create `docs/_includes/video-playlist.html`**

```liquid
<!-- Video playlist for a week -->
{% assign week = include.week %}
{% assign videos = site.data.videos[week] %}

{% if videos %}
<div class="video-playlist">
  <h3>Week {{ week }} Video Library</h3>
  <div class="playlist-items">
    {% for video in videos %}
    <div class="playlist-item">
      <div class="playlist-thumbnail">
        {% if video.platform == 'youtube' %}
          <img src="https://img.youtube.com/vi/{{ video.id }}/mqdefault.jpg" alt="{{ video.title }}">
        {% endif %}
      </div>
      <div class="playlist-info">
        <h4>{{ video.title }}</h4>
        <p class="duration">{{ video.duration }}</p>
        <p class="description">{{ video.description }}</p>
        <button class="play-btn" data-platform="{{ video.platform }}" data-id="{{ video.id }}">
          ▶ Play
        </button>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
{% endif %}
```

**Step 3.6: Create CSS for Video Components**

Create `docs/assets/css/components/video.css`:

```css
/* Video Container - Responsive 16:9 */
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
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

/* Video Timestamps */
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
}

.timestamp-btn:hover {
  background: var(--bg-hover);
  border-color: var(--accent-color);
}

.timestamp-btn .time {
  font-weight: 600;
  color: var(--accent-color);
  font-family: monospace;
}

.timestamp-btn .label {
  color: var(--text-secondary);
}

/* Tao Quote */
.tao-quote {
  margin: 2rem 0;
  padding: 1.5rem;
  border-left: 4px solid #e74c3c;
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

/* Video Playlist */
.video-playlist {
  margin: 2rem 0;
  padding: 1.5rem;
  background: var(--bg-secondary);
  border-radius: 8px;
}

.video-playlist h3 {
  margin-top: 0;
}

.playlist-items {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.playlist-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  transition: all 0.2s;
}

.playlist-item:hover {
  border-color: var(--accent-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.playlist-thumbnail {
  flex-shrink: 0;
  width: 120px;
  height: 68px;
  border-radius: 4px;
  overflow: hidden;
}

.playlist-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.playlist-info {
  flex: 1;
}

.playlist-info h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
}

.playlist-info .duration {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0 0 0.5rem 0;
}

.playlist-info .description {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0 0 0.75rem 0;
}

.play-btn {
  padding: 0.5rem 1rem;
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
}

.play-btn:hover {
  background: var(--accent-color-dark);
  transform: translateY(-1px);
}

/* Responsive */
@media (max-width: 640px) {
  .playlist-item {
    flex-direction: column;
  }
  
  .playlist-thumbnail {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
  }
}
```

### Phase 4: Create Layouts (1 hour)

**Step 4.1: Create `docs/_layouts/lesson.html`**

```liquid
---
layout: default
---

<article class="lesson">
  <header class="lesson-header">
    <div class="week-badge">Week {{ page.week }} of 10</div>
    <h1>{{ page.title }}</h1>
    {% if page.description %}
      <p class="lead">{{ page.description }}</p>
    {% endif %}
  </header>

  <nav class="lesson-nav" aria-label="Lesson navigation">
    {% if page.prev_week %}
      <a href="{{ page.prev_week.url | relative_url }}" class="nav-btn prev">
        ← Week {{ page.prev_week.number }}: {{ page.prev_week.title }}
      </a>
    {% endif %}
    
    <a href="{{ '/' | relative_url }}" class="nav-btn home">
      ↑ All Weeks
    </a>
    
    {% if page.next_week %}
      <a href="{{ page.next_week.url | relative_url }}" class="nav-btn next">
        Week {{ page.next_week.number }}: {{ page.next_week.title }} →
      </a>
    {% endif %}
  </nav>

  <div class="lesson-content prose">
    {{ content }}
  </div>

  <footer class="lesson-footer">
    <nav class="lesson-nav" aria-label="Lesson navigation">
      {% if page.prev_week %}
        <a href="{{ page.prev_week.url | relative_url }}" class="nav-btn prev">
          ← Previous Week
        </a>
      {% endif %}
      
      {% if page.next_week %}
        <a href="{{ page.next_week.url | relative_url }}" class="nav-btn next">
          Next Week →
        </a>
      {% endif %}
    </nav>
  </footer>
</article>
```

**Step 4.2: Update `docs/_layouts/default.html`**

Copy from professor-course-template and adjust:
- Update site title
- Update navigation links
- Remove student showroom links
- Add link to curriculum and resources

### Phase 5: Migrate Content (2 hours)

**Step 5.1: Move Lesson Prompts to `docs/_prompts/`**

```bash
# Create _prompts collection directory
mkdir -p docs/_prompts

# Move existing prompts
mv docs/prompts/*.md docs/_prompts/

# Remove old prompts directory
rmdir docs/prompts
```

**Step 5.2: Add YAML Front Matter to Each Lesson**

For each lesson file (e.g., `week-01-introduction-persuasion.md`), add:

```yaml
---
layout: lesson
title: "Introduction to Advertising & Editing Persuasion"
week: 1
description: "Explore the foundations of persuasive editing and advertising's relationship with moving images."
permalink: /prompts/week-01/
prev_week:
  number: null
  title: null
  url: null
next_week:
  number: 2
  title: "Origins of Film Editing"
  url: /prompts/week-02/
---
```

**Step 5.3: Convert Video References to Includes**

Find instances like:
```markdown
**Screen:** Kuleshov Effect demonstration
```

Replace with:
```markdown
{% include youtube.html id="VIDEO_ID" title="Kuleshov Effect Demonstration" %}
```

**Step 5.4: Convert Tao Quotes to Includes**

Find instances like:
```markdown
> *"The cut creates meaning where none existed before."*  
> — Tao of the Video Editor
```

Replace with:
```markdown
{% include tao-quote.html quote="The cut creates meaning where none existed before." %}
```

**Step 5.5: Create Video Data Files**

Create `docs/_data/videos/week-01.yml` through `week-10.yml` with video metadata.

Example:
```yaml
# docs/_data/videos/week-01.yml
- id: "dQw4w9WgXcQ"
  platform: "youtube"
  title: "McLuhan: The Medium is the Message"
  duration: "4:30"
  description: "Introduction to media theory and its application to video editing"
  
- id: "abc123xyz"
  platform: "youtube"
  title: "Premiere Pro: Interface Overview"
  duration: "8:15"
  description: "Getting started with Adobe Premiere Pro workspace"
```

### Phase 6: Create Homepage and Navigation (1 hour)

**Step 6.1: Create `docs/index.html`**

```liquid
---
layout: default
title: Advertising Video Editing Course
---

<div class="hero">
  <h1>Advertising Video Editing</h1>
  <p class="lead">A comprehensive course blending theory, technique, and ethics in video editing for advertising.</p>
  
  {% include tao-quote.html quote="The Tao of the web is simplicity. The master chooses the path of least resistance that still serves the vision." %}
</div>

<section class="course-overview">
  <h2>Course Overview</h2>
  <p>This 10-week course explores the art and craft of video editing for advertising, from historical foundations to contemporary digital platforms. Students will master Adobe Premiere Pro while developing a critical understanding of persuasive media.</p>
  
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
</section>

<section class="weeks-grid">
  <h2>Weekly Lessons</h2>
  
  <div class="week-cards">
    {% assign prompts = site.prompts | sort: 'week' %}
    {% for prompt in prompts %}
    <article class="week-card">
      <div class="week-number">Week {{ prompt.week }}</div>
      <h3>
        <a href="{{ prompt.url | relative_url }}">{{ prompt.title }}</a>
      </h3>
      <p>{{ prompt.description }}</p>
      <a href="{{ prompt.url | relative_url }}" class="read-more">Read lesson →</a>
    </article>
    {% endfor %}
  </div>
</section>

<section class="course-resources">
  <h2>Resources</h2>
  <ul>
    <li><a href="{{ '/curriculum/' | relative_url }}">Complete Course Curriculum</a></li>
    <li><a href="{{ '/resources/' | relative_url }}">Resource Library</a></li>
    <li><a href="https://github.com/{{ site.repository }}">GitHub Repository</a></li>
  </ul>
</section>
```

**Step 6.2: Create `docs/curriculum.md`**

```markdown
---
layout: default
title: Course Curriculum
permalink: /curriculum/
---

# Advertising Video Editing – Complete Course Curriculum

[Copy content from advertising-video-editing-complete-course.md]
```

**Step 6.3: Create `docs/resources.md`**

```markdown
---
layout: default
title: Resources
permalink: /resources/
---

# Resources and References

[Extract resources section from curriculum]
```

### Phase 7: Styling and Polish (1 hour)

**Step 7.1: Create `docs/assets/css/course.css`**

```css
/* Course-specific styles */

/* Hero Section */
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

/* Course Stats */
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
  color: var(--accent-color);
}

.stat span {
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Week Cards Grid */
.weeks-grid {
  padding: 4rem 2rem;
}

.week-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.week-card {
  padding: 1.5rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  transition: all 0.3s;
}

.week-card:hover {
  border-color: var(--accent-color);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.week-number {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: var(--accent-color);
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
  color: var(--accent-color);
}

.week-card p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.read-more {
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
}

.read-more:hover {
  text-decoration: underline;
}

/* Lesson Layout */
.lesson-header {
  text-align: center;
  padding: 3rem 2rem;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
}

.week-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--accent-color);
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

/* Lesson Navigation */
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
  background: var(--accent-color);
  color: white;
  border-color: var(--accent-color);
}

.nav-btn.home {
  flex-shrink: 0;
}

/* Lesson Content */
.lesson-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

/* Responsive */
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
  
  .lesson-nav {
    flex-direction: column;
  }
  
  .nav-btn {
    width: 100%;
    text-align: center;
  }
}
```

**Step 7.2: Link CSS in `_layouts/default.html`**

Add to `<head>`:
```html
<link rel="stylesheet" href="{{ '/assets/css/components/video.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/course.css' | relative_url }}">
```

### Phase 8: Testing and Launch (1 hour)

**Step 8.1: Local Testing**

```bash
cd /Users/ruvebal/projects/ruvebal/scholar/udit/advertising-video_editing

# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve --source docs --livereload

# Open http://localhost:4000/advertising-video_editing/
```

**Step 8.2: Test Checklist**

- [ ] Homepage loads correctly
- [ ] All 10 week cards display
- [ ] Clicking week card navigates to lesson
- [ ] Lesson layout displays properly
- [ ] Prev/Next navigation works
- [ ] Video embeds load (test YouTube and Vimeo)
- [ ] Tao quotes display with styling
- [ ] Responsive design works on mobile
- [ ] Dark mode toggle works
- [ ] All links are correct (no 404s)

**Step 8.3: Push to GitHub**

```bash
git add .
git commit -m "Jekyll site setup complete for video editing course"
git remote add origin https://github.com/ruvebal/advertising-video_editing.git
git push -u origin main
```

**Step 8.4: Enable GitHub Pages**

1. Go to repository Settings
2. Navigate to Pages section
3. Source: Deploy from a branch
4. Branch: `main`
5. Folder: `/docs`
6. Save

**Step 8.5: Verify Live Site**

- Wait 2-3 minutes for deployment
- Visit: `https://ruvebal.github.io/advertising-video_editing/`
- Test all functionality on live site

---

## File Structure: Before & After

### Before (Professor-Course-Template)

```
professor-course-template/
├── _config.yml
├── _layouts/default.html
├── _includes/
│   ├── header.html
│   ├── footer.html
│   └── students-list-by-files.html
├── _data/
│   ├── courses/2025-fall/
│   ├── lessons/2025-fall/
│   └── students/2025-fall/
├── 2025-fall/
│   ├── en/index.md
│   └── es/index.md
├── docs/ (placeholder)
└── index.html
```

### After (Video Editing Course)

```
advertising-video_editing/
├── _config.yml                        # Updated for video course
├── Gemfile
├── package.json
├── README.md
├── docs/                              # GitHub Pages source
│   ├── _layouts/
│   │   ├── default.html               # Base layout
│   │   └── lesson.html                # Lesson template
│   ├── _includes/
│   │   ├── header.html
│   │   ├── footer.html
│   │   ├── youtube.html               # NEW: YouTube embed
│   │   ├── vimeo.html                 # NEW: Vimeo embed
│   │   ├── video-player.html          # NEW: Universal player
│   │   ├── video-playlist.html        # NEW: Playlist display
│   │   └── tao-quote.html             # NEW: Tao quote box
│   ├── _prompts/                      # NEW: Lesson collection
│   │   ├── week-01-introduction-persuasion.md
│   │   ├── week-02-early-cinema-tricks.md
│   │   └── ... (all 10 weeks)
│   ├── _data/
│   │   └── videos/                    # NEW: Video metadata
│   │       ├── week-01.yml
│   │       ├── week-02.yml
│   │       └── ... (all 10 weeks)
│   ├── assets/
│   │   ├── css/
│   │   │   ├── site.css
│   │   │   ├── components/
│   │   │   │   └── video.css          # NEW: Video styles
│   │   │   └── course.css             # NEW: Course styles
│   │   ├── js/
│   │   │   └── video-player.js        # NEW: Video interactions
│   │   └── images/
│   ├── index.html                     # NEW: Course homepage
│   ├── curriculum.md                  # NEW: Full curriculum
│   └── resources.md                   # NEW: Resource library
└── advertising-video-editing-complete-course.md  # Source content
```

---

## Configuration Changes

### Key Differences from Professor-Course-Template

| Aspect | Professor-Course-Template | Video Editing Course |
|--------|--------------------------|---------------------|
| **Source Directory** | Root (default) | `docs/` |
| **Collections** | None | `_prompts` |
| **Lesson Location** | External links | Internal (`_prompts/`) |
| **Student Showroom** | Yes | No |
| **Semester Structure** | Yes (`2025-fall/`) | No (single course) |
| **Video Components** | No | Yes (YouTube, Vimeo, playlists) |
| **Tao Quotes** | No | Yes (styled components) |
| **Navigation** | Generic lessons | Week-based (1-10) |
| **Bilingual** | Yes (EN/ES) | Optional (start EN only) |

---

## Component Development

### Video Player JavaScript (Optional Enhancement)

Create `docs/assets/js/video-player.js`:

```javascript
// Video Player Enhancements
document.addEventListener('DOMContentLoaded', () => {
  // Timestamp navigation
  const timestampButtons = document.querySelectorAll('.timestamp-btn');
  
  timestampButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const time = button.dataset.time;
      const videoContainer = button.closest('.video-player').querySelector('.video-container');
      const iframe = videoContainer.querySelector('iframe');
      
      // Convert time to seconds
      const [minutes, seconds] = time.split(':').map(Number);
      const totalSeconds = minutes * 60 + seconds;
      
      // Update iframe src with timestamp
      const src = iframe.src.split('?')[0];
      iframe.src = `${src}?start=${totalSeconds}&autoplay=1`;
      
      // Scroll to video
      videoContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
  
  // Playlist play buttons
  const playButtons = document.querySelectorAll('.play-btn');
  
  playButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const platform = button.dataset.platform;
      const id = button.dataset.id;
      
      // Create modal or replace main video
      // Implementation depends on desired UX
      console.log(`Play ${platform} video: ${id}`);
    });
  });
});
```

---

## Content Migration Strategy

### Automated Front Matter Addition

Create `scripts/add-frontmatter.js`:

```javascript
const fs = require('fs');
const path = require('path');

const promptsDir = 'docs/_prompts';
const files = fs.readdirSync(promptsDir).filter(f => f.endsWith('.md'));

const weekData = [
  { week: 1, title: "Introduction to Advertising & Editing Persuasion", slug: "week-01" },
  { week: 2, title: "Origins of Film Editing – From Lumière to Méliès", slug: "week-02" },
  { week: 3, title: "Continuity Editing & Perception Psychology", slug: "week-03" },
  { week: 4, title: "Soviet Montage Theory – Kuleshov Effect & Vertov", slug: "week-04" },
  { week: 5, title: "Breaking the Rules – Experimental Editing", slug: "week-05" },
  { week: 6, title: "Advertising Formats & Storytelling in 30 Seconds", slug: "week-06" },
  { week: 7, title: "Production Sprint – Team Edit-on-Camera Videothon", slug: "week-07" },
  { week: 8, title: "Post-Production Techniques – Sound, Color, and Effects", slug: "week-08" },
  { week: 9, title: "Digital Platforms, Algorithms & Ethics in Advertising", slug: "week-09" },
  { week: 10, title: "Final Project Showcase & Wrap-Up", slug: "week-10" }
];

files.forEach((file, index) => {
  const filePath = path.join(promptsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check if front matter already exists
  if (content.startsWith('---')) {
    console.log(`Skipping ${file} (already has front matter)`);
    return;
  }
  
  const data = weekData[index];
  if (!data) {
    console.log(`No data for ${file}`);
    return;
  }
  
  const prevWeek = index > 0 ? weekData[index - 1] : null;
  const nextWeek = index < weekData.length - 1 ? weekData[index + 1] : null;
  
  const frontMatter = `---
layout: lesson
title: "${data.title}"
week: ${data.week}
description: "Week ${data.week} lesson prompt for instructors"
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
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`✓ Added front matter to ${file}`);
});

console.log('Done!');
```

Run with:
```bash
node scripts/add-frontmatter.js
```

---

## Testing & Launch Checklist

### Pre-Launch Checklist

**Configuration:**
- [ ] `_config.yml` updated with correct title, URL, baseurl
- [ ] `Gemfile` has correct dependencies
- [ ] `source: docs` is set in `_config.yml`
- [ ] Collections configured for `_prompts`

**Content:**
- [ ] All 10 lesson prompts in `docs/_prompts/`
- [ ] Front matter added to all lessons
- [ ] `curriculum.md` created
- [ ] `resources.md` created
- [ ] `index.html` homepage created

**Components:**
- [ ] `youtube.html` include created
- [ ] `vimeo.html` include created
- [ ] `video-player.html` include created
- [ ] `tao-quote.html` include created
- [ ] `video-playlist.html` include created

**Layouts:**
- [ ] `default.html` layout updated
- [ ] `lesson.html` layout created

**Styling:**
- [ ] `video.css` created
- [ ] `course.css` created
- [ ] CSS linked in `default.html`

**Data:**
- [ ] Video YAML files created for each week
- [ ] Video IDs populated (or placeholders)

**Testing:**
- [ ] Local build successful (`bundle exec jekyll serve`)
- [ ] All pages load without errors
- [ ] Navigation works (prev/next, home)
- [ ] Video embeds display correctly
- [ ] Tao quotes styled properly
- [ ] Responsive on mobile
- [ ] Dark mode works

**Deployment:**
- [ ] Pushed to GitHub
- [ ] GitHub Pages enabled (source: `docs/`)
- [ ] Live site accessible
- [ ] All links work on live site

---

## AI Prompts for Implementation

### Prompt 1: Clone and Adapt Structure

```
I'm adapting the professor-course-template from /Users/ruvebal/projects/ruvebal/scholar/udit/web-atelier-udit/professor-course-template 
for my video editing course at /Users/ruvebal/projects/ruvebal/scholar/udit/advertising-video_editing.

Key changes needed:
1. Remove student showroom functionality
2. Remove semester-based structure (2025-fall/)
3. Configure Jekyll to serve from docs/ directory
4. Create _prompts collection for lesson content
5. Update _config.yml with new title, URL, baseurl

Provide:
1. Bash commands to copy and clean the structure
2. Updated _config.yml with all necessary changes
3. List of files to delete
4. List of new directories to create

Source: /Users/ruvebal/projects/ruvebal/scholar/udit/web-atelier-udit/professor-course-template
Destination: /Users/ruvebal/projects/ruvebal/scholar/udit/advertising-video_editing
```

### Prompt 2: Create Video Components

```
Create Jekyll includes for video integration in my course website:

1. _includes/youtube.html
   - Privacy-enhanced embed (youtube-nocookie.com)
   - Responsive 16:9 container
   - Accessibility attributes
   - Lazy loading
   - Parameters: id, title

2. _includes/vimeo.html
   - Vimeo player embed
   - Responsive 16:9 container
   - Accessibility attributes
   - Parameters: id, title

3. _includes/video-player.html
   - Universal player (supports both platforms)
   - Timestamp navigation
   - Parameters: platform, id, title, timestamps (format: "0:00|Intro,1:45|Main,3:20|Conclusion")

4. _includes/tao-quote.html
   - Styled blockquote
   - Left border accent (#e74c3c)
   - Italic text with citation
   - Parameter: quote

Also provide CSS for:
- .video-container (responsive 16:9)
- .video-timestamps (timestamp buttons)
- .tao-quote (styled quote box)

File locations: docs/_includes/ and docs/assets/css/components/video.css
```

### Prompt 3: Create Lesson Layout

```
Create a Jekyll layout for lesson prompts at docs/_layouts/lesson.html:

Features needed:
1. Header with:
   - Week badge (e.g., "Week 1 of 10")
   - Lesson title (from page.title)
   - Description (from page.description)

2. Navigation bar with:
   - Previous week link (if exists)
   - "All Weeks" home link
   - Next week link (if exists)

3. Main content area:
   - Prose styling
   - Max-width 800px, centered

4. Footer with:
   - Same navigation as header

Front matter structure:
- layout: lesson
- title: string
- week: number
- description: string
- permalink: string
- prev_week: { number, title, url }
- next_week: { number, title, url }

Use Liquid template tags to conditionally show prev/next links.
Provide complete HTML with semantic markup and accessibility.
```

### Prompt 4: Create Homepage

```
Create a Jekyll homepage at docs/index.html for my video editing course:

Sections needed:
1. Hero section:
   - Course title: "Advertising Video Editing"
   - Lead text: "A comprehensive course blending theory, technique, and ethics"
   - Tao quote (use {% include tao-quote.html %})

2. Course overview:
   - Brief description
   - Stats: 10 Weeks, 20 Sessions, ∞ Wisdom

3. Week cards grid:
   - Loop through site.prompts collection
   - Display week number, title, description
   - Link to lesson page
   - Responsive grid (3 columns desktop, 1 column mobile)

4. Resources section:
   - Links to curriculum, resources, GitHub repo

Use Liquid template tags to generate week cards dynamically.
Provide complete HTML with modern, clean design.
```

### Prompt 5: Migrate Content with Front Matter

```
Create a Node.js script to add YAML front matter to my lesson prompt files:

Source files: docs/prompts/week-01-introduction-persuasion.md through week-10-final-showcase-wrap.md
Destination: docs/_prompts/ (same filenames)

Week data:
[
  { week: 1, title: "Introduction to Advertising & Editing Persuasion", slug: "week-01" },
  { week: 2, title: "Origins of Film Editing – From Lumière to Méliès", slug: "week-02" },
  ... (provide all 10)
]

Front matter template:
---
layout: lesson
title: "[title from week data]"
week: [number]
description: "Week [number] lesson prompt for instructors"
permalink: /prompts/[slug]/
prev_week:
  number: [previous week number or null]
  title: "[previous week title]"
  url: [previous week URL or null]
next_week:
  number: [next week number or null]
  title: "[next week title]"
  url: [next week URL or null]
---

Script should:
1. Read each file
2. Check if front matter already exists (skip if yes)
3. Prepend front matter
4. Write back to file
5. Log progress

Provide complete Node.js script (scripts/add-frontmatter.js).
```

---

## Conclusion: The Kino-Web-Sphere Realized

> *"Where the moving image meets the web, learning transcends both. The Kino-Web-Sphere is not a place, but a practice—a way of teaching that honors the temporal nature of video and the spatial nature of hypertext."*

**What You've Built:**
- ✅ Self-contained Jekyll course website
- ✅ 10 comprehensive lesson prompts
- ✅ Video integration (YouTube/Vimeo)
- ✅ Tao wisdom throughout
- ✅ Week-based navigation
- ✅ Responsive, accessible, beautiful

**Time Investment:** 8 hours (1 day)

**Maintenance:** < 30 minutes per week

**Result:** Award-deserving course website that serves your students without consuming your time.

**The Tao Approves:** You chose simplicity. You chose sufficiency. You chose to focus on teaching, not web development.

---

**May the Tao of the moving image and the Tao of the web guide your teaching. May your students learn deeply and create ethically. May the Kino-Web-Sphere flourish.**

🎬 ☯ 🌐

---

**End of Implementation Guide**

*Ready to begin? Start with Phase 1: Clone and Clean.*
