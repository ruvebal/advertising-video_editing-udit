# Video Integration Guide

## Overview

This Jekyll-based course website supports embedding videos from multiple platforms (YouTube, Vimeo, and others) directly into lesson markdown files. The system includes responsive video players, timestamp navigation, and playlist functionality.

---

## Architecture

### Components

1. **Video Player Include** (`_includes/video-player.html`)
   - Universal wrapper that supports multiple platforms
   - Optional timestamp navigation
   - Automatically handles YouTube and Vimeo embeds

2. **Platform-Specific Includes**
   - `_includes/youtube.html` - YouTube embeds (privacy-enhanced mode)
   - `_includes/vimeo.html` - Vimeo embeds
   - Both use responsive 16:9 containers

3. **Video Playlist Include** (`_includes/video-playlist.html`)
   - Displays a collection of videos for a week
   - Pulls data from YAML files in `_data/videos/`

4. **Styling** (`assets/css/video.css`)
   - Responsive video containers (16:9 aspect ratio)
   - Timestamp button styling
   - Playlist item layouts
   - Dark mode support

---

## How to Include Videos in Lessons

### Method 1: Single Video Embed (Recommended)

Use the `video-player` include for individual videos with optional timestamps:

```liquid
{% include video-player.html
   platform="youtube"
   id="dQw4w9WgXcQ"
   title="Kuleshov Effect Demonstration"
   timestamps="0:00|Introduction,1:45|Key Concepts,3:20|Application" %}
```

**Parameters:**
- `platform` (required): `"youtube"` or `"vimeo"`
- `id` (required): Video ID from the platform
- `title` (optional): Accessible title for the iframe
- `timestamps` (optional): Comma-separated list of `time|label` pairs

**Example in Markdown:**

```markdown
## Core Lecture: Theory

### 1. Marshall McLuhan: "The Medium is the Message"

{% include video-player.html
   platform="youtube"
   id="ImaH51F4HBw"
   title="Marshall McLuhan - The Medium is the Message"
   timestamps="0:00|Introduction,2:15|Key Thesis,4:30|Application to Editing" %}

**Key Thesis:**
The form of media influences how content is received, often more than the content itself.
```

---

### Method 2: Direct Platform Includes

For simpler embeds without timestamps, use platform-specific includes:

#### YouTube

```liquid
{% include youtube.html
   id="dQw4w9WgXcQ"
   title="Video Title" %}
```

#### Vimeo

```liquid
{% include vimeo.html
   id="123456789"
   title="Video Title" %}
```

---

### Method 3: Video Playlist

Display a curated list of videos for a week using YAML data:

**Step 1:** Create/update `_data/videos/week-01.yml`:

```yaml
# Week 1 Video Library
- id: "ImaH51F4HBw"
  platform: "youtube"
  title: "Marshall McLuhan: The Medium is the Message"
  duration: "4:30"
  description: "Introduction to media theory and its application to video editing"

- id: "abc123xyz"
  platform: "vimeo"
  title: "Society of the Spectacle - Documentary"
  duration: "8:15"
  description: "Understanding Guy Debord's critique of modern consumer society"

- id: "def456uvw"
  platform: "youtube"
  title: "Premiere Pro Interface Overview"
  duration: "12:00"
  description: "Getting started with Adobe Premiere Pro workspace"
```

**Step 2:** Include the playlist in your lesson:

```liquid
{% include video-playlist.html week="week-01" %}
```

This will automatically:
- Display all videos from `_data/videos/week-01.yml`
- Show thumbnails (YouTube only)
- Display duration and descriptions
- Provide play buttons that open videos

---

## Finding Video IDs

### YouTube

1. **From URL:**
   - Full URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
   - Short URL: `https://youtu.be/dQw4w9WgXcQ`
   - **Video ID:** `dQw4w9WgXcQ` (the part after `v=` or after `youtu.be/`)

2. **From Embed Code:**
   ```html
   <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ">
   ```
   - **Video ID:** `dQw4w9WgXcQ` (the part after `/embed/`)

### Vimeo

1. **From URL:**
   - `https://vimeo.com/123456789`
   - **Video ID:** `123456789` (the number in the URL)

2. **From Embed Code:**
   ```html
   <iframe src="https://player.vimeo.com/video/123456789">
   ```
   - **Video ID:** `123456789` (the number after `/video/`)

---

## Timestamp Format

Timestamps allow students to jump to specific moments in videos:

**Format:** `"time|label,time|label,time|label"`

**Example:**
```liquid
timestamps="0:00|Introduction,1:45|Key Concepts,3:20|Application,5:00|Conclusion"
```

**Rules:**
- Use `MM:SS` or `HH:MM:SS` format
- Separate time and label with `|` (pipe)
- Separate entries with `,` (comma)
- No spaces around separators (optional but cleaner)

**Rendered Output:**
- Creates clickable buttons below the video
- Each button shows time and label
- Clicking jumps to that timestamp in the video

---

## Adding Other Video Sources

### Option 1: Extend video-player.html

Edit `_includes/video-player.html` to add support for new platforms:

```liquid
<!-- Universal video player with timestamps -->
<div class="video-player" data-video-id="{{ include.id }}">
	{% if include.platform == 'youtube' %}
		{% include youtube.html id=include.id title=include.title %}
	{% elsif include.platform == 'vimeo' %}
		{% include vimeo.html id=include.id title=include.title %}
	{% elsif include.platform == 'custom' %}
		<!-- Add custom embed code here -->
		<div class="video-container">
			<iframe
				src="{{ include.embed_url }}"
				title="{{ include.title | default: 'Video' }}"
				frameborder="0"
				loading="lazy"
				allowfullscreen>
			</iframe>
		</div>
	{% endif %}

	{% if include.timestamps %}
	<!-- Timestamp navigation (existing code) -->
	{% endif %}
</div>
```

### Option 2: Create New Include

Create `_includes/custom-video.html`:

```liquid
<!-- Custom video embed -->
<div class="video-container" data-video-id="{{ include.id }}">
	<iframe
		src="{{ include.embed_url }}"
		title="{{ include.title | default: 'Video' }}"
		frameborder="0"
		loading="lazy"
		allow="autoplay; fullscreen; picture-in-picture"
		allowfullscreen>
	</iframe>
</div>
```

**Usage:**
```liquid
{% include custom-video.html
   embed_url="https://example.com/player/video/123"
   title="Custom Video" %}
```

### Supported Platforms (Easy to Add)

**Loom:**
```liquid
{% elsif include.platform == 'loom' %}
	<div class="video-container">
		<iframe
			src="https://www.loom.com/embed/{{ include.id }}"
			title="{{ include.title }}"
			frameborder="0"
			allowfullscreen>
		</iframe>
	</div>
```

**Wistia:**
```liquid
{% elsif include.platform == 'wistia' %}
	<div class="video-container">
		<script src="https://fast.wistia.com/embed/medias/{{ include.id }}.jsonp" async></script>
		<div class="wistia_embed wistia_async_{{ include.id }}" style="height:360px;width:640px"></div>
	</div>
```

**Vimeo Livestream:**
```liquid
{% elsif include.platform == 'vimeo-live' %}
	<div class="video-container">
		<iframe
			src="https://vimeo.com/event/{{ include.id }}/embed"
			title="{{ include.title }}"
			frameborder="0"
			allowfullscreen>
		</iframe>
	</div>
```

---

## Best Practices

### 1. Always Provide Titles

```liquid
{% include video-player.html
   platform="youtube"
   id="dQw4w9WgXcQ"
   title="Descriptive Video Title" %}
```

**Why:** Improves accessibility and SEO.

### 2. Use Timestamps for Long Videos

For videos longer than 5 minutes, add timestamps to help students navigate:

```liquid
{% include video-player.html
   platform="youtube"
   id="dQw4w9WgXcQ"
   title="Long Tutorial"
   timestamps="0:00|Introduction,2:30|Setup,5:15|Main Content,8:45|Conclusion" %}
```

### 3. Organize Videos in YAML

For multiple videos per week, use the playlist system:

```yaml
# _data/videos/week-01.yml
- id: "video1"
  platform: "youtube"
  title: "Video 1"
  duration: "5:00"
  description: "Description here"

- id: "video2"
  platform: "youtube"
  title: "Video 2"
  duration: "3:30"
  description: "Another description"
```

### 4. Context Around Videos

Always provide context before embedding:

```markdown
## Screening & Analysis

### Example 1: Apple "1984" Super Bowl Commercial

**Context:** Aired during 1984 Super Bowl, directed by Ridley Scott, introducing Macintosh computer.

{% include video-player.html
   platform="youtube"
   id="VtvjbmoDx-I"
   title="Apple 1984 Super Bowl Commercial" %}

**Analysis Points:**
- Opening: Dystopian gray world, marching workers
- Pacing: Slow build with rhythmic cuts
- Montage: Intercutting between Big Brother and heroine
```

### 5. Privacy-Enhanced Mode

YouTube embeds automatically use `youtube-nocookie.com` (privacy-enhanced mode) to reduce tracking. This is already configured in `_includes/youtube.html`.

### 6. Responsive Design

All video containers are responsive (16:9 aspect ratio) and work on mobile, tablet, and desktop. No additional configuration needed.

---

## Examples from Existing Lessons

### Example 1: Simple YouTube Embed

From `week-01-introduction-persuasion.md`:

```markdown
#### Example 1: Apple "1984" Super Bowl Commercial (60 seconds)

**Context:** Aired during 1984 Super Bowl, directed by Ridley Scott.

{% include video-player.html
   platform="youtube"
   id="VtvjbmoDx-I"
   title="Apple 1984 Super Bowl Commercial" %}

**Analysis Points:**
- Opening: Dystopian gray world
- Pacing: Slow build with rhythmic cuts
```

### Example 2: Video with Timestamps

```markdown
### Core Lecture: Theory

{% include video-player.html
   platform="youtube"
   id="ImaH51F4HBw"
   title="Marshall McLuhan - The Medium is the Message"
   timestamps="0:00|Introduction,2:15|Key Thesis,4:30|Application,6:00|Discussion" %}

**Key Concepts:**
1. The form of media influences reception
2. Platform shapes editing approach
3. Medium and message are inseparable
```

### Example 3: Video Playlist

```markdown
## Week 1 Video Library

{% include video-playlist.html week="week-01" %}

These videos complement the readings and provide visual examples of the concepts discussed in class.
```

---

## Troubleshooting

### Video Not Displaying

1. **Check Video ID:**
   - Ensure the ID is correct (no extra characters)
   - YouTube IDs are 11 characters
   - Vimeo IDs are numeric

2. **Check Platform Parameter:**
   - Must be exactly `"youtube"` or `"vimeo"` (lowercase, with quotes in Liquid)

3. **Check Video Privacy:**
   - Ensure video is not private or unlisted (if unlisted, ID should still work)
   - Check if video is region-restricted

### Timestamps Not Working

1. **Check Format:**
   - Must be `"time|label,time|label"` format
   - No spaces around `|` or `,` (optional but recommended)

2. **Check Time Format:**
   - Use `MM:SS` or `HH:MM:SS`
   - Times must be valid (e.g., not `99:99`)

### Playlist Not Showing

1. **Check YAML File:**
   - File must be in `_data/videos/week-XX.yml`
   - Week parameter must match filename (e.g., `week="week-01"` for `week-01.yml`)

2. **Check YAML Syntax:**
   - Ensure proper indentation (2 spaces)
   - All required fields present (`id`, `platform`, `title`)

---

## Technical Details

### Responsive Container

The video container uses a CSS trick to maintain 16:9 aspect ratio:

```css
.video-container {
	position: relative;
	padding-bottom: 56.25%; /* 16:9 aspect ratio */
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

This ensures videos scale properly on all screen sizes.

### Lazy Loading

All iframes use `loading="lazy"` to improve page load performance. Videos only load when they're about to enter the viewport.

### Accessibility

- All iframes have `title` attributes
- Timestamp buttons are keyboard accessible
- Playlist items have proper semantic HTML

---

## Future Enhancements

Potential improvements to consider:

1. **Auto-generate Timestamps:**
   - Parse video description for timestamps
   - Extract from YouTube chapter markers

2. **Video Analytics:**
   - Track which videos students watch
   - Identify popular content

3. **Downloadable Transcripts:**
   - Link to transcripts for accessibility
   - Auto-generate from captions

4. **Video Search:**
   - Search across all course videos
   - Filter by week, topic, or platform

---

## Summary

**Quick Reference:**

```liquid
<!-- Single video with timestamps -->
{% include video-player.html
   platform="youtube"
   id="VIDEO_ID"
   title="Video Title"
   timestamps="0:00|Intro,1:45|Main" %}

<!-- Simple embed -->
{% include youtube.html id="VIDEO_ID" title="Title" %}

<!-- Playlist -->
{% include video-playlist.html week="week-01" %}
```

**File Locations:**
- Includes: `docs/_includes/video-player.html`, `youtube.html`, `vimeo.html`
- Data: `docs/_data/videos/week-XX.yml`
- Styles: `docs/assets/css/video.css`
- Lessons: `docs/_prompts/week-XX-*.md`

---

*For questions or issues, refer to the main project documentation or create an issue in the repository.*
