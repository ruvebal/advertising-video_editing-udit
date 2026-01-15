# Week 8: Post-Production Techniques – Sound, Color, and Effects
## Lesson Development Prompt for Instructors

> *"The rough cut reveals the story. The fine cut reveals the soul. The final cut reveals the master."*  
> — Tao of the Video Editor

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

> *"Editing is three acts: Assembly reveals structure. Refinement reveals rhythm. Polish reveals artistry."*

**Recap Week 7:**
- Videothon: Rapid production under pressure
- Teamwork and adaptation
- "Last week you created rough diamonds. This week we learn to cut and polish them into gems."

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

> *"Color is the editor's paintbrush. Use it to guide the eye and stir the heart."*

#### 2. Sound Design & Mixing (25 min)

**Why Sound Matters:**

**Statistics:**
- 70% of emotional impact comes from audio
- Viewers forgive bad video more than bad audio
- Professional audio = professional perception

**The Three Layers:**

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
- Whooshes, impacts, ambience
- Subtle but noticeable
- Target: -12 to -6 dB (contextual)

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

> *"The audience hears with their emotions. Sound is the direct path to the heart."*

#### 3. Motion Graphics & Titles (10 min)

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

> *"Motion graphics are the editor's punctuation. Use them to emphasize, clarify, and brand."*

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

> *"Today your rough cuts become refined. Your vision becomes reality. Your work becomes portfolio-worthy."*

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

> *"You are no longer assembling clips. You are crafting experiences. This is the work of the professional editor."*

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

### The Hierarchy of Editing Priorities

**Walter Murch (Editor: *Apocalypse Now*, *The English Patient*):**

**The Six Priorities (in order of importance):**

**1. Emotion (51%):** Does the cut reflect the emotion of the moment?
**2. Story (23%):** Does the cut advance the story?
**3. Rhythm (10%):** Does the cut occur at a rhythmically interesting moment?
**4. Eye Trace (7%):** Does the cut respect where the viewer's eye is focused?
**5. Two-Dimensional Plane (5%):** Does the cut respect screen direction and composition?
**6. Three-Dimensional Space (4%):** Does the cut maintain spatial continuity?

**Application to Post-Production:**

**Color Grading = Emotion (51%)**
- Color directly affects emotional response
- Most important post-production element
- Can change entire feeling of piece

**Sound Design = Emotion + Story (74%)**
- Sound conveys emotion powerfully
- Sound advances story (dialogue, music cues)
- Second most important element

**Motion Graphics = Story + Rhythm (33%)**
- Graphics clarify story (product names, CTAs)
- Animation adds rhythm and energy
- Important but tertiary to color and sound

**The Lesson:**
"Focus your post-production time on what matters most: Emotion through color and sound. Graphics are polish, not foundation."

> *"The editor who understands Murch's hierarchy never wastes time on the wrong things. Emotion first. Always."*

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

## Additional Resources

### Color Grading
- **YouTube:** "Color Grading for Beginners" (Peter McKinnon)
- **LinkedIn Learning:** "Premiere Pro: Color Correction and Grading"
- **Color Grading Central:** Tutorials and LUTs

### Sound Design
- **Freesound.org:** Free sound effects library
- **Epidemic Sound:** Royalty-free music (subscription)
- **YouTube Audio Library:** Free music and SFX
- **Boom Library:** Professional sound effects

### Motion Graphics
- **After Effects Kickstart:** Free course
- **Video Copilot:** Tutorials and plugins
- **Motion Array:** Templates and presets

### AI Tools
- **Adobe Sensei:** Built into Creative Cloud
- **Runway ML:** AI video tools
- **Descript:** AI transcription and editing

---

## Instructor Notes

### Timing Breakdown (Session A)
- 10 min: Opening
- 60 min: Core lecture (Color 25, Sound 25, Graphics 10)
- 30 min: Screening and analysis
- 20 min: Assignment explanation

### Timing Breakdown (Session B)
- 10 min: Opening
- 40 min: Technical demonstrations (Color 15, Sound 15, Graphics 10)
- 60 min: Individual lab work and consultation
- 10 min: Group critique

### Common Challenges

**Challenge 1: Students Overwhelmed by Options**
- **Solution:** Provide step-by-step checklist
- Focus on basics first
- Advanced techniques are optional

**Challenge 2: Technical Issues**
- **Solution:** Have backup projects ready
- Know common troubleshooting
- Pair struggling students with advanced students

**Challenge 3: Time Management**
- **Solution:** Set priorities clearly
- "Color and sound first, graphics if time"
- Remind: Can continue outside class

### Facilitation Tips

**Demonstrate Generously:**
- Show techniques multiple times
- Record demos for later reference
- Provide written guides

**Individualize Feedback:**
- Each project has different needs
- Tailor advice to their specific work
- Celebrate their unique vision

**Encourage Experimentation:**
- "Try different LUTs and see what feels right"
- "Push the grade too far, then pull back"
- "Learning happens through doing"

> *"The master colorist knows: Color is emotion made visible. The master sound designer knows: Sound is emotion made audible. Together, they create magic."*

---

## Next Week Preview

**Week 9: Digital Platforms, Algorithms & Ethics in Advertising**

We shift from technique to context and responsibility. Students will explore:
- How platforms shape editing choices
- Algorithmic content distribution
- Attention economy and addictive design
- Ethical considerations in persuasive editing
- Feminist and anti-consumerist critiques

**Hands-on:** Platform optimization workshop, rough cut feedback sessions.

> *"Next week, we ask the hard questions: What is our responsibility as editors? How do we create ethically in an attention economy? The technical master becomes the ethical practitioner."*

---

**End of Week 8 Lesson Prompt**

*May your students discover the artistry of color, the power of sound, and the polish that transforms good work into great work.*
