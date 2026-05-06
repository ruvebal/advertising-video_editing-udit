---
layout: lesson
title: 'Post-Production Techniques – Sound, Color, and Effects'
week: 8
description: 'Polish your work with professional sound design, color grading, and visual effects.'
permalink: /prompts/week-08/
prev_week:
 number: 7
 title: 'Production Sprint – Team Edit-on-Camera Videothon'
 url: /prompts/week-07/
next_week:
 number: 9
 title: 'Digital Platforms, Algorithms & Ethics in Advertising'
 url: /prompts/week-09/
---

<!-- prettier-ignore-start -->

## 📋 Tabla de contenidos

{: .no_toc }

- TOC
{:toc}
<!-- prettier-ignore-end -->

# Week 8: Post-Production Techniques – Sound, Color, and Effects

## Lesson Development Prompt for Instructors

> _"The rough cut reveals the story. The fine cut reveals the soul. The final cut reveals the master."_
> — Tao of the Video Editor

<figure class="spectacle-image">
<img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Mixing_and_mastering.jpg" alt="Mixing and mastering desk (post-production audio polish)" loading="lazy" />
<figcaption>
<p>Mixing and mastering desk—visual shorthand for Week 8’s post-production polish (levels, EQ, dynamics, deliverables).</p>
<p class="image-credit"><a href="https://commons.wikimedia.org/wiki/File:Mixing_and_mastering.jpg">Wikimedia Commons</a> • CC BY-SA 4.0</p>
</figcaption>
</figure>

---

## Context & Learning Goals

### Historical Foundation

- **Walter Murch's "Rule of Six":** Hierarchy of editing priorities (emotion, story, rhythm, eye trace, 2D plane, 3D space)
- **Color Grading Evolution:** From photochemical timing to digital color correction
- **Sound Design History:** From mono to stereo to surround to Atmos
- **Motion Graphics:** From optical printing to After Effects to AI-assisted tools

### Technical Skills to Introduce

- **Color Correction & Grading:** Lumetri Color panel, scopes, LUTs, color theory
- **Sound Design:** Essential Sound panel, mixing, EQ, compression, audio effects
- **Motion Graphics:** After Effects basics, dynamic linking, animated titles
- **AI-Assisted Tools:** Auto-reframe, auto-ducking, speech-to-text, content-aware fill
- **Professional Export:** Codecs, formats, delivery specifications

### Critical Thinking Objectives

- How does color affect emotion and perception?
- What role does sound play in storytelling?
- When are effects enhancement vs. distraction?
- How do AI tools change the editor's role?
- What defines "professional quality"?

### Week 8 Success Indicators

By the end of Week 8, students should be able to:

- ✓ Perform basic color correction and creative grading
- ✓ Mix audio with proper levels and effects
- ✓ Create simple motion graphics and titles
- ✓ Use AI tools to streamline workflow
- ✓ Export in professional formats for multiple platforms
- ✓ Apply polish techniques to their final projects

---

## Session A: Polishing the Edit – Advanced Post-Production (2 hours)

### Opening (10 minutes)

> _"Editing is three acts: Assembly reveals structure. Refinement reveals rhythm. Polish reveals artistry."_

**Today's Focus:**
"Post-production is where good becomes great. Color grading sets mood. Sound design creates immersion. Motion graphics add professionalism. Together, they transform your edit from student work to portfolio piece."

**Demonstrate:**

- Show before/after of same edit
- Before: Flat color, inconsistent audio, no graphics
- After: Graded, mixed, titled
- "Same footage. Different impact."

---

### Core Lecture: The Three Pillars of Polish (60 minutes)

#### 1. Color Correction & Grading (25 min)

<figure class="spectacle-image">
<img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Vectorscope_graticule.png" alt="Vectorscope graticule showing target boxes for color calibration" loading="lazy" style="background-color:white;"/>
<figcaption>
<p>Vectorscope graticule: use it to check saturation and color balance while correcting footage and keeping legal broadcast-safe chroma.</p>
<p class="image-credit"><a href="https://commons.wikimedia.org/wiki/File:Vectorscope_graticule.png">Wikimedia Commons</a> • License per file record</p>
</figcaption>
</figure>

{% include video-player.html
 platform="file"
 url="https://upload.wikimedia.org/wikipedia/commons/0/08/Color_correction_and_grading_test.webm"
 title="Color correction vs grading — demo clip (Wikimedia Commons free license)"
 timestamps="0:00|Before,0:10|Correction,0:20|Creative grade" %}

<figure class="spectacle-image">
<img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Histogram_equalization.png" alt="Histogram equalization example showing before/after image and histogram" loading="lazy" style="background-color:white;"/>
<figcaption>
<p>Histogram equalization (CC0): a quick way to explain “fix first, stylize second” (distribution/contrast before creative looks).</p>
<p class="image-credit"><a href="https://commons.wikimedia.org/wiki/File:Histogram_equalization.png">Wikimedia Commons</a> • CC0</p>
</figcaption>
</figure>

**The Difference:**

- **Color Correction:** Technical fix (exposure, white balance, consistency)
- **Color Grading:** Creative choice (mood, style, emotion)

**Why Color Matters:**

**Psychological Effects:**

- **Warm tones (orange, yellow):** Happiness, nostalgia, comfort
- **Cool tones (blue, teal):** Sadness, isolation, technology
- **Desaturated:** Realism, documentary, seriousness
- **Vibrant:** Energy, youth, excitement
- **High contrast:** Drama, intensity
- **Low contrast:** Softness, dreaminess

**Examples in Advertising:**

- Luxury brands: Often desaturated with teal/orange (cinematic)
- Food: Warm, saturated (appetizing)
- Tech: Cool, blue (futuristic)
- Eco-products: Green, natural tones
- Children's products: Bright, primary colors

**The Workflow:**

**Step 1: Color Correction (Fix)**

1. **Exposure:** Adjust brightness (not too dark, not blown out)
2. **White Balance:** Correct color temperature (remove color casts)
3. **Contrast:** Adjust highlights and shadows
4. **Matching:** Make all shots in scene look consistent

**Step 2: Color Grading (Style)**

1. **Apply Look:** LUT or manual adjustments
2. **Enhance Mood:** Push colors toward emotional goal
3. **Draw Focus:** Vignette, selective color
4. **Final Polish:** Subtle refinements

**Adobe Premiere Pro: Lumetri Color Panel**

**Demonstrate Live:**

**Basic Correction:**

```
Lumetri Color Panel:
1. Basic Correction
   - Exposure: Adjust overall brightness
   - Contrast: Increase for punch
   - Highlights: Pull down if blown out
   - Shadows: Lift if too dark
   - Whites/Blacks: Set true white and black points
```

**Creative Grading:**

```
2. Creative
   - Look: Apply LUT (cinematic presets)
   - Adjustments: Faded Film, Sharpen, Vibrance
   - Color Wheels: Shadows/Midtones/Highlights
     - Teal shadows + Orange highlights = "Blockbuster look"
```

**Curves:**

```
3. Curves
   - RGB Curves: Fine-tune specific tones
   - Hue vs. Saturation: Target specific colors
   - S-curve: Classic contrast boost
```

**Using Scopes:**

```
Lumetri Scopes (Window > Lumetri Scopes):
- Waveform: Check exposure (0-100 IRE)
- Vectorscope: Check color balance
- Histogram: Overall tonal distribution
- RGB Parade: Check individual color channels
```

**Pro Tips:**

- Grade on calibrated monitor (or at least consistent lighting)
- Don't over-grade (subtlety is sophistication)
- Match shots within scenes
- Save presets for consistency across projects

> _"Color is the editor's paintbrush. Use it to guide the eye and stir the heart."_

#### 2. Sound Design & Mixing (25 min)

<figure class="spectacle-image">
<img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Smiley_Face_EQ.png" alt="Smiley-face EQ curve: boosted lows and highs with scooped mids" loading="lazy" />
<figcaption>
<p>“Smiley face” EQ curve: a common beginner mistake (too much bass + treble, missing vocal mids). Use this to discuss presence, intelligibility, and restraint.</p>
<p class="image-credit"><a href="https://commons.wikimedia.org/wiki/File:Smiley_Face_EQ.png">Wikimedia Commons</a> • Public domain</p>
</figcaption>
</figure>

<figure class="spectacle-image">
<img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Mixing_console.jpg" alt="Audio mixing console with faders and knobs" loading="lazy" />
<figcaption>
<p>Mixing console (public domain): a concrete visual for signal flow, gain staging, and why mixing is about decisions—not plugins.</p>
<p class="image-credit"><a href="https://commons.wikimedia.org/wiki/File:Mixing_console.jpg">Wikimedia Commons</a> • Public domain</p>
</figcaption>
</figure>

<figure class="spectacle-image">
<img src="https://upload.wikimedia.org/wikipedia/commons/5/50/FletcherMunson_ELC.png" alt="Equal-loudness contours chart (Fletcher–Munson curves)" loading="lazy" />
<figcaption>
<p>Equal-loudness contours: why mixes that sound “balanced” at one volume can sound harsh or dull at another (monitor at consistent loudness).</p>
<p class="image-credit"><a href="https://commons.wikimedia.org/wiki/File:FletcherMunson_ELC.png">Wikimedia Commons</a> • CC BY-SA 3.0 + GFDL</p>
</figcaption>
</figure>

**Why Sound Matters:**

**Statistics:**

- 70% of emotional impact comes from audio
- Viewers forgive bad video more than bad audio
- Professional audio = professional perception

**The Four Layers:**

**Layer 1: Dialogue/Voiceover**

- Must be clear and intelligible
- Centered in stereo field
- Consistent volume throughout
- Target: -12 to -6 dB

**Layer 2: Music**

- Sets emotional tone
- Should support, not overpower
- Duck under dialogue (auto-ducking)
- Target: -18 to -12 dB (under dialogue), -12 to -6 dB (alone)

**Layer 3: Sound Effects (SFX)**

- Adds realism and impact
- Whooshes, impacts, designed sounds
- Subtle but noticeable
- Target: -12 to -6 dB (contextual)

**Layer 4: Live Sound from the Scene (Wild Sound / Atmos)**

- **Room tone / ambience:** Continuous sound of the location (air, hum, crowd murmur). Record 30–60 seconds of "silence" on set; use under edits to avoid dead gaps and to smooth dialogue cuts.
- **Wildtracks:** Non-sync recordings from the same location (footsteps, cloth, props, off-camera activity). Cut in to support picture or hide edits.
- **Production sound:** Use clean production ambience when dialogue is absent; layer with subtle room tone so scenes don’t drop into a vacuum.
- **In advertising:** Same principles—product handling, environment (store, street, kitchen), and "presence" make spots feel real and premium.
- Target: -24 to -18 dB (bed); raise briefly for emphasis, never competing with dialogue or music.
- **Cinema/video theory:** This layer is what separates "recording" from "world-building"; it preserves continuity of space and time and supports suspension of disbelief (Michel Chion, Walter Murch).

**Adobe Premiere Pro: Essential Sound Panel**

**Demonstrate Live:**

**Dialogue Cleanup:**

```
Essential Sound Panel:
1. Select audio clip
2. Audio Type: Dialogue
3. Preset: Clean Up Dialogue
4. Repair:
   - Reduce Noise (remove hiss)
   - Reduce Rumble (remove low-end)
   - DeHum (remove electrical hum)
   - DeEss (reduce sibilance)
5. Clarity:
   - Dynamics (compress for consistency)
   - EQ (boost presence around 3kHz)
```

**Music Mixing:**

```
1. Audio Type: Music
2. Preset: Balance Music
3. Ducking:
   - Enable "Duck Against" > Select dialogue track
   - Fade: 0.5s
   - Reduce by: -15 to -20 dB
   - Music automatically lowers when dialogue plays
```

**Sound Effects:**

```
1. Audio Type: SFX
2. Adjust volume to fit context
3. Pan left/right for spatial positioning
4. Add reverb for space (if needed)
```

**Audio Transitions:**

**J-Cut (Audio Leads Video):**

- Hear next scene before seeing it
- Creates smooth, professional transition
- Unlink audio/video, extend audio earlier

**L-Cut (Video Leads Audio):**

- See next scene while hearing previous
- Natural conversation flow
- Unlink audio/video, extend audio later

**Crossfade:**

```
Effects > Audio Transitions > Crossfade
- Constant Power (default, smooth)
- Exponential Fade (for music)
```

**Pro Tips:**

- Always monitor with headphones (catch issues)
- Room tone/ambience makes scenes feel real
- Silence is powerful (don't fill every moment)
- Export audio separately for professional mixing (if needed)

> _"The audience hears with their emotions. Sound is the direct path to the heart."_

#### 3. Motion Graphics & Titles (10 min)

{% include video-player.html
 platform="file"
 url="https://upload.wikimedia.org/wikipedia/commons/d/d3/%27Trick_or_Treat%27_-_Kinetic_Typography.webm"
 title="Kinetic typography micro-example (CC BY) — timing + readability"
 timestamps="0:00|Timing,0:06|Ease + readability" %}

<figure class="spectacle-image">
<img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Opticalprinter.jpg" alt="Optical printer machine used for analog compositing and effects" loading="lazy" />
<figcaption>
<p>Optical printer (public domain): a historical bridge from analog compositing to modern motion graphics and VFX workflows.</p>
<p class="image-credit"><a href="https://commons.wikimedia.org/wiki/File:Opticalprinter.jpg">Wikimedia Commons</a> • Public domain</p>
</figcaption>
</figure>

<figure class="spectacle-image">
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/BTS_Quadra_444_Telecine.JPG" alt="Telecine machine used for transferring film to video" loading="lazy" />
<figcaption>
<p>Telecine hardware: a bridge image for the shift from photochemical finishing to digital intermediate workflows (where “grade + deliverables” live today).</p>
<p class="image-credit"><a href="https://commons.wikimedia.org/wiki/File:BTS_Quadra_444_Telecine.JPG">Wikimedia Commons</a> • License per file record</p>
</figcaption>
</figure>

**Why Motion Graphics Matter:**

**In Advertising:**

- Brand logos and product names
- Call-to-action text
- Lower thirds (names, titles)
- Animated statistics or features
- Visual interest and polish

**Adobe After Effects Integration:**

**Dynamic Link Workflow:**

```
1. In Premiere: Right-click > Replace with After Effects Composition
2. After Effects opens with clip
3. Create animation in AE
4. Save and close
5. Premiere updates automatically (no export needed)
```

**Common Motion Graphics:**

**1. Animated Title:**

- Text fades in, scales, or slides
- Kinetic typography (words move with energy)
- Use for product names, CTAs

**2. Lower Third:**

- Name and title appear in lower third of frame
- Professional look for testimonials, interviews
- Animate in/out smoothly

**3. Logo Animation:**

- Brand logo appears with motion
- End slate with contact info
- Builds brand recognition

**4. Product Callouts:**

- Arrows, circles, highlights pointing to features
- Animated text explaining benefits
- Common in product demos

**Premiere Pro: Legacy Title Tool (Quick Option):**

```
Graphics > New Item > Legacy Title
- Type text
- Adjust font, size, color
- Add background or stroke
- Drag to timeline
```

**Essential Graphics Panel (Modern Option):**

```
Window > Essential Graphics
- Browse templates
- Drag to timeline
- Customize text and colors
- Professional results quickly
```

**Pro Tips:**

- Less is more (don't over-animate)
- Match brand style guide
- Ensure text is readable (size, contrast, duration)
- Safe zones: Keep important text away from edges

> _"Motion graphics are the editor's punctuation. Use them to emphasize, clarify, and brand."_

---

### Screening & Analysis: Before/After Comparisons (30 minutes)

#### Example 1: Color Grading Transformation (10 min)

**Screen:** Same commercial, two versions

- Version A: Flat, uncorrected footage
- Version B: Professionally graded

**Analysis:**

- How does color change the mood?
- Which version feels more expensive/professional?
- What specific colors were enhanced?
- How does it affect product perception?

#### Example 2: Sound Design Impact (10 min)

**Screen:** Same ad, two versions

- Version A: Dialogue only, no music or SFX
- Version B: Full sound design

**Analysis:**

- How does music change emotional impact?
- What do sound effects add?
- How does audio mixing affect clarity?
- Which version is more engaging?

#### Example 3: Motion Graphics Polish (10 min)

**Screen:** Same ad, two versions

- Version A: No graphics, basic titles
- Version B: Animated graphics, professional titles

**Analysis:**

- How do graphics enhance message?
- Do they distract or support?
- How do they affect brand perception?
- What's the right balance?

**Key Insight:**
"Post-production polish is the difference between amateur and professional. It's not about showing off—it's about serving the message with excellence."

---

### Assignment for Session B (20 minutes)

**Homework (Complete before Session B):**

**1. Bring Final Project Rough Cut**

- Import all footage into Premiere Pro
- Assemble rough cut (story structure in place)
- Don't worry about polish yet
- Length: 60-90 seconds (will trim to 60 in polish)

**2. Identify Polish Needs**

- Which shots need color correction?
- Where is audio unclear or inconsistent?
- What graphics/titles are needed?
- Write brief notes

**3. Gather Assets**

- Music (royalty-free or licensed)
- Sound effects (if needed)
- Logo files (vector if possible)
- Any graphics or images

**4. Reading**

- "Color Theory for Video" (handout)
- "Audio Mixing Basics" (guide)
- "Motion Graphics Best Practices" (article)

---

## Session B: Hands-On Post-Production Lab (2 hours)

### Opening (10 minutes)

> _"Today your rough cuts become refined. Your vision becomes reality. Your work becomes portfolio-worthy."_

**Today's Structure:**
"This is an open lab. I'll demonstrate key techniques, then you'll apply them to your projects. I'll circulate for one-on-one consultation. By end of class, your projects should be significantly polished."

**The Goal:**
"Leave today with:

- Color-corrected and graded footage
- Clean, mixed audio
- At least basic titles/graphics
- Clear path to completion"

---

### Technical Demonstrations (40 minutes)

#### Demo 1: Color Grading Workflow (15 min)

**Instructor demonstrates on sample project:**

**Step 1: Correction**

1. Select first clip
2. Lumetri Color > Basic Correction
3. Auto button (starting point)
4. Adjust Exposure, Contrast, Highlights, Shadows
5. Check scopes (Waveform should be 0-100)

**Step 2: Matching**

1. Copy Lumetri Color effect (Cmd+C)
2. Paste to similar shots (Cmd+V)
3. Adjust individual clips as needed
4. Goal: Consistent look within scene

**Step 3: Creative Grade**

1. Lumetri Color > Creative
2. Apply LUT or manual adjustments
3. Color Wheels: Teal shadows, orange highlights (optional)
4. Adjust intensity to taste

**Step 4: Final Polish**

1. Vignette (Lumetri > Vignette)
2. Sharpen slightly (Creative > Sharpen)
3. Watch full sequence to ensure consistency

**Save Preset:**

```
Right-click Lumetri Color effect > Save Preset
Name: "Project_ColorGrade_v01"
Apply to future projects
```

#### Demo 2: Audio Mixing Workflow (15 min)

**Instructor demonstrates on sample project:**

**Step 1: Organize Tracks**

```
A1: Dialogue/VO
A2: Music
A3: SFX
A4: Ambience
```

**Step 2: Clean Dialogue**

1. Select dialogue clips
2. Essential Sound > Dialogue
3. Repair: Reduce Noise, Reduce Rumble
4. Clarity: Dynamics, EQ
5. Target level: -12 dB

**Step 3: Mix Music**

1. Select music clip
2. Essential Sound > Music
3. Enable Ducking against A1 (dialogue)
4. Adjust fade and reduction
5. Target level: -18 dB (under dialogue)

**Step 4: Add SFX**

1. Import sound effects
2. Place on A3
3. Adjust volume to fit
4. Add reverb if needed (Effects > Reverb)

**Step 5: Master Mix**

1. Add Audio Track Mixer (Window > Audio Track Mixer)
2. Adjust overall levels
3. Check for clipping (red meters)
4. Export audio test to check on different devices

#### Demo 3: Simple Motion Graphics (10 min)

**Instructor demonstrates:**

**Option A: Essential Graphics Template**

```
1. Window > Essential Graphics
2. Browse > Local Templates > Lower Thirds
3. Drag template to timeline above video
4. Edit Text panel: Change text
5. Adjust colors to match brand
```

**Option B: After Effects Title (Quick)**

```
1. Right-click clip > Replace with After Effects Composition
2. In AE: Create text layer
3. Add animation preset (Effects & Presets > Text > Animate In)
4. Save and close
5. Premiere updates automatically
```

**Option C: Legacy Title (Fastest)**

```
1. Graphics > New Item > Legacy Title
2. Type text
3. Style: Font, size, color
4. Add stroke or shadow for readability
5. Drag to timeline
```

**Pro Tip:** Create end slate with:

- Product name/logo
- Website or social media handle
- Call-to-action
- Duration: 3-5 seconds

---

### Individual Lab Work & Consultation (60 minutes)

#### Student Work Time

**Students work on their final projects:**

**Priority Order:**

1. **Color Correction:** Fix exposure, white balance
2. **Color Grading:** Apply creative look
3. **Audio Cleanup:** Remove noise, balance levels
4. **Audio Mixing:** Music, SFX, ducking
5. **Graphics:** Titles, lower thirds, end slate
6. **Final Review:** Watch through completely

#### Instructor Circulation

**One-on-One Consultations:**

- Visit each student (5-10 minutes each)
- Review their rough cut
- Identify biggest improvements needed
- Demonstrate technique if needed
- Provide specific feedback

**Common Issues to Address:**

**Color:**

- "Your footage is too dark—lift shadows"
- "Shots don't match—copy grade from shot 1"
- "Too saturated—pull back vibrance"

**Audio:**

- "Dialogue is too quiet—boost to -12 dB"
- "Music overpowers—duck it down"
- "Background noise—use Reduce Noise"

**Graphics:**

- "Title is too small—increase size"
- "Text is hard to read—add stroke or background"
- "CTA is missing—add end slate"

**Pacing:**

- "This shot is too long—trim 2 seconds"
- "Cut feels abrupt—add 0.5s dissolve"
- "Overall too slow—tighten throughout"

#### Advanced Techniques (For Fast Finishers)

**AI-Assisted Tools:**

**Auto-Reframe (Vertical Video):**

```
Window > Auto Reframe
Select horizontal sequence
Target Aspect Ratio: 9:16 (vertical)
Motion Tracking: Default
Create Sequence
AI automatically reframes for vertical
```

**Speech to Text (Captions):**

```
Window > Text
Transcribe Sequence
Language: English
Create Captions
Edit for accuracy
Style captions (font, position)
```

**Content-Aware Fill (Remove Objects):**

```
Export clip to After Effects
Select object with Roto Brush
Effects > Content-Aware Fill
Render (slow but magical)
```

---

### Captions, Subtitles & Social Media Text (15 minutes)

> _"Text on screen can be information, emotion, or both. Know which you're using and why."_

#### The Critical Distinction: Motion Graphics vs. Captions

**Two Different Purposes:**

| **Motion Graphics Text**                                                         | **Captions/Subtitles**                                                   |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Intentional design element** — part of the creative vision from the start      | **Accessibility/transcription** — represents spoken words                |
| Examples: Titles, lower thirds, callouts, animated statistics, brand messaging   | Examples: Dialogue transcription, translations, accessibility compliance |
| **Creative control**: Font, color, animation all serve brand/story               | **Functional priority**: Readability, accuracy, timing                   |
| Added in post as graphic layers                                                  | Generated from audio or imported as text files                           |
| **Motion graphics mindset**: "How does this text enhance the visual experience?" | **Caption mindset**: "How do I ensure every viewer gets the message?"    |

**The Social Media Blur:**

Modern short-form content (TikTok, Instagram Reels, YouTube Shorts) has created a hybrid:

- "Social captions" — stylized, animated, often word-by-word reveals
- Functionally they're captions (transcribe speech), but aesthetically they're motion graphics
- This requires specialized tools (covered below)

#### Method 1: Adobe Premiere Pro Native Captions

**Best for:**

- Professional deliverables requiring accessibility compliance
- Broadcast/streaming standards (CEA-608, CEA-708, Teletext)
- Multi-language subtitle tracks
- Closed captions (viewer can toggle on/off)

**Adobe Premiere Pro Workflow:**

**Step 1: Generate Transcript**

```
Window > Text > Transcribe Sequence
Language: [Select language]
Audio analysis: Transcribe in-point to out-point
Click "Transcribe"
Wait for processing (progress shown in Text panel)
```

Adobe Official Guide: https://helpx.adobe.com/premiere/desktop/add-text-images/insert-captions/auto-transcribe-video-using-speech-to-text.html

**Step 2: Create Captions**

```
Once transcript appears in Text panel:
"..." menu > Create Captions
Caption preset: Subtitle default (or broadcast standard)
Format: CEA-608/708 for broadcast, Teletext for some regions
Create from transcript: [Select transcript]
Click "Create"
```

Adobe Official Guide: https://helpx.adobe.com/premiere/desktop/add-text-images/insert-captions/create-captions.html

**Step 3: Edit & Style**

```
Captions appear on dedicated caption track
Text panel > Captions tab to edit text/timing
Essential Graphics panel to style:
  - Font (choose highly readable typeface)
  - Size (readable on mobile devices)
  - Background (semi-transparent for contrast)
  - Position (usually lower third, but adjust for safe zones)
```

**Closed vs. Open Captions:**

- **Closed Captions (CC)**: Viewer can toggle; embedded as metadata; required for broadcast accessibility
- **Open Captions**: Burned into video; always visible; used for social media where platforms may not support caption tracks

Adobe Reference: https://helpx.adobe.com/ph_fil/premiere-pro/how-to/subtitles.html

**Exporting Captions:**

```
File > Export > Media
Caption export options:
  - Create sidecar file (.srt, .vtt) for platforms supporting caption uploads
  - Burn captions into video for universal visibility
  - Embed in MXF/QuickTime for broadcast delivery
```

Premiere Pro Captions Overview: https://helpx.adobe.com/premiere-pro/using/working-with-captions.html

#### Method 2: External Social Media Captioning Tools

**When to use external tools:**

- Need "TikTok-style" animated captions (word-by-word reveals, bouncy effects)
- Creating vertical video content specifically
- Faster workflow for high-volume social content
- Stylized captions that match platform aesthetics

**Popular Tools:**

**CapCut (Free / Desktop & Mobile)**

- Auto-generates captions with high accuracy
- Built-in "TikTok style" animation presets
- Word-by-word highlighting effects
- Supports 20+ languages with auto-translation
- Direct export optimized for social platforms
- URL: https://www.capcut.com/tools/auto-caption-generator

**Captions.ai**

- AI-powered editor that auto-cuts and adds stylized captions
- Automatic B-roll insertion and scene detection
- Multiple caption animation styles
- Auto-translation to global languages
- URL: https://captions.ai/

**VEED.io**

- 99.9% accuracy auto-subtitle generator
- "Dynamic subtitles" — animated captions that pop/glide
- Customizable fonts, colors, animations
- One-click translation to multiple languages
- URL: https://www.veed.io/tools/auto-subtitle-generator-online

**Zubtitle**

- AI captions + video resizing for social platforms
- Animated caption templates
- Automatic aspect ratio optimization
- Branded watermark/logo placement
- URL: https://zubtitle.com/

#### Choosing Your Caption Strategy

**Decision Matrix:**

| **Scenario**                  | **Recommended Tool**      | **Reason**                                     |
| ----------------------------- | ------------------------- | ---------------------------------------------- |
| Broadcast/TV delivery         | Premiere Pro native       | CEA-608/708 compliance, closed caption support |
| Corporate/institutional video | Premiere Pro native       | Accessibility standards, sidecar file export   |
| YouTube long-form             | Premiere Pro native       | SRT export for upload, SEO benefits            |
| TikTok/Instagram Reels        | CapCut or Captions.ai     | Platform-native styling, animation effects     |
| High-volume social content    | VEED or Zubtitle          | Speed, templates, batch processing             |
| Multi-platform repurposing    | External tools + Premiere | Export variations optimized per platform       |

**Best Practices for Social Media Captions:**

1. **Assume sound-off viewing**: 85% of social videos are watched without sound
2. **First 3 seconds matter**: Hook viewers with visible text immediately
3. **Readability over style**: Ensure text is legible on small screens
4. **Timing is crucial**: Captions should appear slightly before speech (200-300ms)
5. **Keep lines short**: 32 characters max per line for mobile readability
6. **Safe zones**: Keep captions within center 80% of frame (platforms overlay UI)
7. **Brand consistency**: Use brand colors/fonts if platform permits

**The Hybrid Workflow:**

For professional social media content:

1. Edit and color grade in Premiere Pro
2. Export clean video
3. Import to CapCut/Captions.ai for stylized captions
4. Final export optimized for each platform

> _"Captions are no longer an afterthought for accessibility—they're a primary design element for engagement. But never sacrifice clarity for style."_

---

### Group Critique & Feedback (10 minutes)

**Format:**

- Show 2-3 student projects (before/after if possible)
- Highlight improvements made
- Class provides feedback

**Guiding Questions:**

- "How did color grading change the mood?"
- "How did audio mixing improve clarity?"
- "Do the graphics enhance or distract?"
- "What else could be refined?"

**Celebrate Progress:**

- Acknowledge hard work
- Highlight creative solutions
- Encourage continued refinement

> _"You are no longer assembling clips. You are crafting experiences. This is the work of the professional editor."_

---

## Community Best Practices: Post-Production

### From Professional Colorists

**1. "Fix Before You Grade"**

- Correct technical issues first
- Then apply creative look
- Don't try to fix with style

**2. "Grade in Context"**

- Watch full sequence, not just one shot
- Ensure consistency across cuts
- Match within scenes

**3. "Subtlety is Sophistication"**

- Heavy grades look amateurish
- Gentle adjustments feel professional
- "If you notice the grade, it's too much"

**4. "Use Reference Images"**

- Find images with desired mood
- Match colors to reference
- Builds consistent aesthetic

### From Professional Sound Designers

**1. "Dialogue is King"**

- Everything else serves dialogue clarity
- If you can't hear words, nothing else matters
- Duck music, reduce SFX if needed

**2. "Layer Your Sound"**

- Dialogue + Music + SFX + Ambience
- Each layer adds depth
- But don't overcrowd

**3. "Room Tone is Essential"**

- Record 30 seconds of "silence" on set
- Use to fill gaps
- Makes edits invisible

**4. "Mix for the Medium"**

- TV: Wider dynamic range okay
- Mobile: Compress more (small speakers)
- Theater: Full dynamic range
- Web: Moderate compression

### From Motion Graphics Artists

**1. "Animate with Purpose"**

- Every movement should have reason
- Don't animate just because you can
- Serve the message

**2. "Timing is Everything"**

- Fast = energetic, modern
- Slow = elegant, luxurious
- Match brand personality

**3. "Readability First"**

- Text must be legible
- Sufficient contrast
- On screen long enough to read (1 second per 3 words)

**4. "Brand Consistency"**

- Use brand fonts, colors, style
- Create templates for efficiency
- Maintain professional identity

---

## Theory Integration: Walter Murch's Rule of Six

<figure class="spectacle-image">
<img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Walter_Murch.jpg" alt="Walter Murch at work" loading="lazy" />
<figcaption>
<p><strong>Walter Murch</strong> — Editor and theorist associated with the “Rule of Six,” emphasizing emotion and story as the highest priorities in editing decisions.</p>
<p class="image-credit"><a href="https://commons.wikimedia.org/wiki/File:Walter_Murch.jpg">Wikimedia Commons</a> • CC BY 2.0</p>
</figcaption>
</figure>

### The Hierarchy of Editing Priorities

**Walter Murch (editor of _Apocalypse Now_ and _The English Patient_)**

<figure class="quote">
<blockquote>
a list of six criteria for what makes a good cut. At the top of the list is Emotion, the thing
you come to last, if at all, at film school largely because
it's the hardest thing to define and deal with.
How do you want the audience to feel? If they are feeling
what you want them to feel all the way through
the film, you've done about as much as you can ever
do. What they finally remember is not the editing, not
the camerawork, not the performances, not even the
story-it's how they felt.
An ideal cut (for me) is the one that satisfies all
the following six criteria at once: 1) it is true to the
emotion of the moment; 2) it advances the story; 3) it
occurs at a moment that is rhythmically interesting
and "right"; 4) it acknowledges what you might call
"eye-trace"-the concern with the location and movement
of the audience's focus of interest within the
frame; 5) it respects "planarity"-the grammar of three
dimensions transposed by photography to two (the
questions of stage-line, etc.); 6) and it respects the
three-dimensional continuity of the actual space
(where people are in the room and in relation to one
another).
1) Emotion 51 %
2) Story 23%
3) Rhythm 10%
4) Eye-trace 7%
5) Two-dimensional plane of screen 5%
6) Three-dimensional space of action 4%
Emotion, at the top of the list, is the thing that
you should try to preserve at all costs. If you find
you have to sacrifice certain of those six things to
THE RULE OF SIX
make a cut, sacrifice your way up, item by item, from
the bottom.
</blockquote>
<figcaption>
&mdash; Walter Murch, <em>In the Blink of an Eye</em>, pp. 17-19, ISBN 1-879505-62-2
</figcaption>
</figure>

**Why this matters for Week 8:** Murch's hierarchy gives students a practical way to prioritize post-production decisions. Polish is not decoration. It is a disciplined way of protecting emotion and clarifying story.

**The Six Priorities (in order of importance):**

**1. Emotion (51%):** Does the cut reflect the emotion of the moment?
**2. Story (23%):** Does the cut advance the story?
**3. Rhythm (10%):** Does the cut occur at a rhythmically interesting moment?
**4. Eye Trace (7%):** Does the cut respect where the viewer's eye is focused?
**5. Two-Dimensional Plane (5%):** Does the cut respect screen direction and composition?
**6. Three-Dimensional Space (4%):** Does the cut maintain spatial continuity?

### Application to Post-Production

- **Color grading = emotion first:** color changes how the audience feels before they consciously analyze the image.
- **Sound design = emotion + story:** sound carries mood, emphasis, clarity, and narrative direction with enormous efficiency.
- **Motion graphics = story + rhythm:** titles, labels, and animated elements help structure information, but they should support rather than dominate the cut.

**Teaching takeaway:** Focus post-production time on what matters most. Protect emotion through color and sound first; treat graphics as support, not foundation.

> _"The editor who understands Murch's hierarchy never wastes time on the wrong things. Emotion first. Always."_

---

## Assignment & Homework

### For Next Week (Week 9: Platforms, Ethics & Algorithms)

#### 1. Continue Final Project Polish

- Apply color grading to all footage
- Mix audio professionally
- Add necessary graphics/titles
- **Rough cut due Week 9 for feedback**

#### 2. Written Reflection (200-250 words)

Answer:

- How did color grading change your project's mood?
- What was most challenging about audio mixing?
- How do motion graphics enhance your message?
- What AI tools did you experiment with?
- What still needs work before final submission?

#### 3. Reading: Ethics & Platforms

- "The Attention Economy and Addictive Design" (article)
- "Ethics of Persuasive Editing" (handout)
- "Platform Algorithms and Content Strategy" (guide)

#### 4. Viewing: Platform-Specific Content

- Watch ads optimized for different platforms
- Note differences in editing, pacing, format
- Consider ethical implications of platform design

#### 5. Export Test Version

- Export your current project
- Watch on phone (test mobile viewing)
- Watch on TV/computer (test large screen)
- Note any issues to fix

---

## Assessment Criteria: Week 8 Lab Work

### Progress Check (10 points - Participation/Effort)

**Color Work (3 points)**

- ✓ Attempted color correction on footage
- ✓ Applied creative grade
- ✓ Shots show consistency

**Audio Work (3 points)**

- ✓ Cleaned dialogue/VO
- ✓ Mixed music appropriately
- ✓ Levels are balanced

**Graphics Work (2 points)**

- ✓ Added titles or graphics
- ✓ Readable and professional

**Progress Toward Completion (2 points)**

- ✓ Significant work completed in lab
- ✓ Clear path to final delivery

**Note:** This is effort-based, not quality-based. Goal is to ensure students are making progress.

---

## Final Export & Platform Delivery

> _"The export is the last creative decision you make. A bad export undoes every good edit before it."_

### The Export Mindset

Exporting isn't just "saving a file" — it's the final creative and technical decision:

- **Wrong codec** = compression artifacts that ruin your color grade
- **Wrong resolution** = platform crops or letterboxes your work
- **Wrong bitrate** = blocky video that looks amateur
- **No captions** = 85% of viewers scroll past

### Platform-Specific Export Specifications

#### YouTube

**Official reference:** https://support.google.com/youtube/answer/1722171

| Setting               | Value                              |
| --------------------- | ---------------------------------- |
| **Container**         | MP4                                |
| **Video Codec**       | H.264 (AVC), High Profile          |
| **Resolution**        | 1920×1080 minimum (16:9)           |
| **Frame Rate**        | Match source (24, 25, 30 fps)      |
| **Bitrate (1080p)**   | 8 Mbps (SDR), 10-12 Mbps (HDR)     |
| **Bitrate (4K)**      | 35-45 Mbps (SDR), 44-56 Mbps (HDR) |
| **Audio Codec**       | AAC-LC                             |
| **Audio Sample Rate** | 48 kHz                             |
| **Audio Bitrate**     | 384 kbps (stereo)                  |
| **Keyframe**          | Every 2 seconds (closed GOP)       |
| **Scan**              | Progressive (no interlacing)       |
| **Max File Size**     | 256 GB                             |

**Student Tip:** Upload at 1440p or 4K even if your source is 1080p — YouTube assigns a better codec (VP9) to higher-resolution uploads, improving visible quality.

#### TikTok

**Official reference:** https://ads.tiktok.com/business/creativecenter

| Setting           | Value                                    |
| ----------------- | ---------------------------------------- |
| **Container**     | MP4 or MOV                               |
| **Video Codec**   | H.264                                    |
| **Resolution**    | 1080×1920 (9:16 vertical)                |
| **Frame Rate**    | 24, 25, or 30 fps                        |
| **Bitrate**       | 6-8 Mbps (1080p)                         |
| **Audio Codec**   | AAC                                      |
| **Audio Bitrate** | 128-256 kbps                             |
| **Max File Size** | 287.6 MB (iOS), 72 MB (Android)          |
| **Max Duration**  | 60 seconds (in-app), 10 minutes (upload) |

**Student Tip:** TikTok re-encodes everything on upload. Start with the highest quality your file limit allows — don't pre-compress.

#### Instagram Reels

**Official reference:** https://help.instagram.com/1038071743007909

| Setting           | Value                     |
| ----------------- | ------------------------- |
| **Container**     | MP4                       |
| **Video Codec**   | H.264                     |
| **Resolution**    | 1080×1920 (9:16 vertical) |
| **Frame Rate**    | 24, 25, or 30 fps         |
| **Bitrate**       | 5-8 Mbps (1080p)          |
| **Audio Codec**   | AAC                       |
| **Audio Bitrate** | 128-256 kbps              |
| **Max File Size** | 650 MB                    |
| **Max Duration**  | 90 seconds (Reels)        |

**Student Tip:** Instagram does NOT support 4K. Always downscale to 1080p before uploading — uploading 4K causes Instagram's compression to degrade quality more aggressively.

### Adobe Premiere Pro Export Workflow

**Official reference:** https://helpx.adobe.com/premiere-pro/using/export-video.html

**Quick Export (for social media):**

```
File > Export > Media
Select destination: YouTube / TikTok / Facebook / X
Premiere auto-configures format, codec, and bitrate
Click Export
```

**Social Media Presets:**

```
File > Export > Media
Preset dropdown > More presets...
Browse platform-specific presets:
  - YouTube 1080p Full HD
  - TikTok 1080p Vertical
  - Instagram Reels 1080p
Select and export
```

**Official reference for social export:** https://helpx.adobe.com/premiere/desktop/render-and-export/export-files/export-videos-for-social-media-channels.html

**Advanced/Custom Export:**

```
File > Export > Media
Format: H.264
Preset: Match Source - Adaptive High Bitrate
  OR customize manually:
    - Video: H.264, match frame rate, VBR 2-pass
    - Bitrate: Target 10 Mbps, Max 12 Mbps (1080p)
    - Audio: AAC, 48 kHz, 320 kbps
    - Check: Render at Maximum Depth
    - Check: Use Maximum Render Quality
Export
```

### The Master File Strategy

For professional work, export in two stages:

**Step 1: Export Master File**

- Format: QuickTime ProRes 422 or high-bitrate H.264 (20-25 Mbps)
- Full resolution, no platform compression
- Archive this as your "source of truth"

**Step 2: Create Platform Versions**

- From the master, export optimized versions for each platform
- YouTube: H.264, 16:9, 8-12 Mbps
- TikTok: H.264, 9:16, 6-8 Mbps
- Instagram: H.264, 9:16, 5-8 Mbps

### Reframing Horizontal to Vertical: The Pixel Problem

> _"You can't invent pixels that don't exist. But you can plan for them before you shoot."_

**The Math Problem:**

Your horizontal edit is 1920×1080. A vertical deliverable needs 1080×1920. That means you need 1920 pixels of height — but your source only has 1080. You're short by 840 pixels (78% deficit).

**Strategy 1: Shoot 4K (Best — Pre-Production Solution)**

If source footage is 4K (3840×2160), you have 2160 vertical pixels. A 1080×1920 vertical crop uses 1920 of those 2160 — no upscaling needed, just crop.

```
4K source:  3840 × 2160
Vertical crop: center 1080 × 1920
Result: 1:1 pixel mapping, zero quality loss
```

**Strategy 2: Adobe Auto Reframe (Good — AI-Assisted)**

Premiere Pro's Auto Reframe analyzes motion and automatically keeps the action centered in a vertical frame.

**Official reference:** https://helpx.adobe.com/premiere-pro/using/auto-reframe.html

```
Sequence > Auto Reframe Sequence
Target Aspect Ratio: Vertical 9:16
Motion Tracking: Default (or Slower Motion for interviews)
Click Create
```

Auto Reframe creates a new sequence with motion keyframes that follow the subject. Review and tweak manually — AI isn't perfect.

**Strategy 3: Blurred Background Fill (Good — No Quality Loss on Main Image)**

The most common social media technique. Scale the original clip to fill the vertical frame, apply heavy Gaussian Blur, then place the original clip centered on top.

```
Duplicate clip on track above
Bottom track: Scale to fill 1080×1920, add Gaussian Blur (40-60)
Top track: Keep original scale, centered
Optional: Add a colored background instead of blur for branded look
```

**Strategy 4: Scale Up / Punch In (Acceptable — With Quality Loss)**

Scale the 1080-height source to fill 1920 pixels. This is a 178% scale — expect visible softness.

```
Set Scale to 178% (1920 / 1080 = 1.78)
Reposition Y axis to frame the subject
Accept the quality trade-off
```

**When this works:** 4K source, good lighting, sharp lens, final delivery on phone screens where softness is less visible.

**Strategy 5: Split Layout / Multi-Clip Stack (Creative)**

Instead of one clip filling the frame, stack two or three clips vertically. Works well for comparison, reaction, or multi-angle content.

```
1080×1920 canvas
Top third: Clip A (cropped to 1080×640)
Middle third: Clip B (cropped to 1080×640)
Bottom third: Clip C or text/graphics (1080×640)
```

**Strategy 6: Shoot Vertical Natively (Best — Production Solution)**

The real answer: plan for vertical delivery during production. Shoot with the camera rotated 90° or use a second camera locked off in vertical orientation.

### Decision Matrix: Which Strategy When

| **Source Quality**    | **Content Type**        | **Recommended Strategy**                      |
| --------------------- | ----------------------- | --------------------------------------------- |
| 4K source             | Any                     | Auto Reframe or manual crop (no quality loss) |
| 1080p, single subject | Talking head, interview | Blurred background fill                       |
| 1080p, lots of motion | Action, sports          | Auto Reframe + accept softness                |
| 1080p, multi-angle    | Tutorial, reaction      | Split layout / stacked clips                  |
| Any, pre-production   | Planning ahead          | Shoot vertical natively                       |

> _"The best reframe is the one you don't need. Shoot for your delivery format. Everything else is damage control."_

### Export Best Practices

1. **Use 2-pass VBR encoding** — better quality at same file size (takes longer but worth it)
2. **Check "Render at Maximum Depth"** — preserves color information in gradients
3. **Check "Use Maximum Render Quality"** — better scaling if resizing
4. **Export at source frame rate** — don't convert 24fps to 30fps or vice versa
5. **Always test on target device** — watch your export on a phone before publishing
6. **Keep captions in safe zones** — platforms overlay UI elements (buttons, handles) on edges
7. **Name files descriptively**: `ProjectName_Platform_Resolution_Date.mp4`

### Common Export Mistakes

| **Mistake**                   | **Result**                        | **Fix**                                 |
| ----------------------------- | --------------------------------- | --------------------------------------- |
| Exporting at wrong frame rate | Juddery motion                    | Match source frame rate exactly         |
| Too-low bitrate               | Blocky artifacts, banding         | Increase to platform recommendations    |
| Interlaced export             | Comb artifacts on digital screens | Always export progressive               |
| Wrong aspect ratio            | Black bars or cropping            | Match platform spec exactly             |
| Exporting 4K for Instagram    | Heavy compression artifacts       | Downscale to 1080p first                |
| Forgetting captions           | 85% audience loss on social       | Burn in open captions or export sidecar |

> _"The export is where your work meets the world. Respect it as much as the edit itself."_

---

## Additional Resources

### Color Grading

**Adobe Official:**

- Adobe Premiere Pro — Color management and Lumetri Color: https://helpx.adobe.com/premiere-pro/using/color-management-and-lumetri-color.html
- Adobe Premiere Pro — Lumetri Scopes (monitor color and exposure): https://helpx.adobe.com/premiere-pro/using/lumetri-scopes.html
- Adobe Premiere Pro — Get creative with color using Lumetri Looks: https://helpx.adobe.com/premiere-pro/using/creative-lumetri-looks.html
- Adobe Premiere Pro — Create and edit multiple Lumetri Color effects: https://helpx.adobe.com/premiere/desktop/correct-color/color-correction-fundamentals/create-and-edit-multiple-lumetri-color-effects.html

**Additional Learning:**

- YouTube — "How To Color Grade for Beginners" by Peter McKinnon: https://www.youtube.com/watch?v=6x9VDoTnl70
- LinkedIn Learning — "Premiere Pro: Color Correction and Enhancement": https://www.linkedin.com/learning/premiere-pro-2022-essential-training/color-correction-fixing-and-enhancing-color
- Color Grading Central — Tutorials and LUTs: https://www.colorgradingcentral.com/

### Sound Design

**Adobe Official:**

- Adobe Premiere Pro — Essential Sound panel: https://helpx.adobe.com/premiere-pro/using/premiere-essential-sound-panel.html
- Adobe Premiere Pro — Audio editing concepts and best practices: https://helpx.adobe.com/premiere-pro/using/bestpractices-audio.html
- Adobe Premiere Pro — Speech to Text (transcripts and captions): https://helpx.adobe.com/premiere-pro/using/speech-to-text.html
- Adobe Audition — Noise reduction and restoration effects: https://helpx.adobe.com/audition/using/noise-reduction-restoration-effects.html

**Additional Learning & Resources:**

- Freesound.org — Free sound effects library: https://freesound.org/
- Epidemic Sound — Royalty-free music (subscription): https://www.epidemicsound.com/
- YouTube Audio Library — Free music and SFX: https://support.google.com/youtube/answer/3376882
- BOOM Library — Professional sound effects: https://www.boomlibrary.com/

### Motion Graphics

**Adobe Official:**

- Adobe Premiere Pro — About Properties panel (text/graphics workflow): https://helpx.adobe.com/premiere-pro/using/about-properties-panel.html
- Adobe Premiere Pro — Dynamic Link with After Effects: https://helpx.adobe.com/premiere-pro/using/dynamic-link.html
- Adobe After Effects — Use Dynamic Link with Premiere Pro: https://helpx.adobe.com/after-effects/using/dynamic-link-effects.html
- Adobe Premiere Pro — Motion Graphics templates overview: https://www.adobe.com/products/premiere/motion-graphics-templates.html

**Additional Learning:**

- School of Motion — After Effects Kickstart (free course): https://www.schoolofmotion.com/courses/after-effects-kickstart
- Video Copilot — After Effects tutorials and plugins: https://www.videocopilot.net/
- Motion Array — Templates and presets: https://motionarray.com/

### AI Tools

**Adobe Official (Adobe Sensei):**

- Adobe Premiere Pro — Auto Reframe overview: https://helpx.adobe.com/premiere/desktop/add-video-effects/commonly-used-effects/auto-reframe-overview.html
- Adobe Premiere Pro — Add Auto Reframe to a sequence: https://helpx.adobe.com/premiere/desktop/add-video-effects/commonly-used-effects/add-auto-reframe-effect-to-a-sequence.html
- Adobe Premiere Pro — Auto transcribe video using Speech to Text: https://helpx.adobe.com/premiere/desktop/add-text-images/insert-captions/auto-transcribe-video-using-speech-to-text.html
- Adobe After Effects — Content-Aware Fill for video: https://helpx.adobe.com/after-effects/using/content-aware-fill.html
- Adobe Sensei — AI in Creative Cloud: https://www.adobe.com/ae_en/sensei/creative-cloud-artificial-intelligence.html

**Additional AI Tools:**

- Runway ML — AI video tools: https://runwayml.com/
- Descript — AI transcription and editing: https://www.descript.com/

### Export & Delivery

**Adobe Official:**

- Adobe Premiere Pro — Export video: https://helpx.adobe.com/premiere-pro/using/export-video.html
- Adobe Premiere Pro — Export workflow overview (video/audio): https://helpx.adobe.com/premiere-pro/using/workflow-overview-exporting.html
- Adobe Media Encoder — Export settings reference: https://helpx.adobe.com/media-encoder/using/export-settings-reference.html
- Adobe Media Encoder — Supported export formats: https://helpx.adobe.com/media-encoder/using/file-formats-supported-export.html

For books and academic references (including sound and post-production theory), see [Resources → Books, Articles & Academic References]({{ '/resources/' | relative_url }}#books-articles--academic-references).

---

**_ End of Lesson Content _**
