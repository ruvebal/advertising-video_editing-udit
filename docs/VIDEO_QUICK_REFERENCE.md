# Video Integration Quick Reference

## 🎬 Single Video Embed

```liquid
{% include video-player.html
   platform="youtube"
   id="VIDEO_ID"
   title="Video Title"
   timestamps="0:00|Intro,1:45|Main,3:20|End" %}
```

## 📺 Platform-Specific

### YouTube
```liquid
{% include youtube.html id="VIDEO_ID" title="Title" %}
```

### Vimeo
```liquid
{% include vimeo.html id="VIDEO_ID" title="Title" %}
```

## 📋 Video Playlist

```liquid
{% include video-playlist.html week="week-01" %}
```

Requires: `_data/videos/week-01.yml`

---

## 🔍 Finding Video IDs

**YouTube:**
- URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- **ID:** `dQw4w9WgXcQ`

**Vimeo:**
- URL: `https://vimeo.com/123456789`
- **ID:** `123456789`

---

## ⏱️ Timestamp Format

```
"0:00|Label,1:45|Label,3:20|Label"
```

- Format: `MM:SS` or `HH:MM:SS`
- Separator: `|` between time and label
- Comma: `,` between entries

---

## 📝 YAML Playlist Format

```yaml
# _data/videos/week-01.yml
- id: "VIDEO_ID"
  platform: "youtube"
  title: "Video Title"
  duration: "5:30"
  description: "Description here"
```

---

## ✅ Checklist

- [ ] Video ID is correct (11 chars for YouTube, numeric for Vimeo)
- [ ] Platform is lowercase: `"youtube"` or `"vimeo"`
- [ ] Title is descriptive and accessible
- [ ] Timestamps use correct format (if included)
- [ ] YAML file exists for playlists (if using playlist)

---

**Full Guide:** See `VIDEO_INTEGRATION_GUIDE.md`
