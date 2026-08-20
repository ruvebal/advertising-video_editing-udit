# Week 8 Media Pack for Post-Production Lessons

## Executive summary

Week 8 in your repo (post-production polish: color, sound, motion graphics, AI-assisted tools, export) appears in `docs/_prompts/week-08-post-production-polish.md`.
Below is a curated, **repo-safe** set of **public-domain and Creative Commons** media from entity["organization","Wikimedia Commons","free media repository"], optimized for **color scopes/test patterns, audio mixing concepts, and motion-graphics lineage (optical printer → modern motion graphics)**, plus a **hero cover**. Licenses are stated per source record. Verification date: **2026-03-04 (Europe/Madrid)**.

## Repo mapping for Week 8

Map every embed to both paths unless you decide to keep only one canonical Week 8 file: fileciteturn76file8turn76file0

| Lesson target     | File path                                                                |
| ----------------- | ------------------------------------------------------------------------ |
| Week 8 lesson     | `docs/_prompts/week-08-post-production-polish.md` fileciteturn76file0 |
| Video embed rules | `docs/VIDEO_INTEGRATION_GUIDE.md` fileciteturn81file0                 |

```mermaid
flowchart TD
  W8[Week 8: Post-production polish] --> C[Color correction & grading]
  W8 --> S[Sound design & mixing]
  W8 --> M[Motion graphics & titles]
  W8 --> X[Export & delivery]

  C --> V1[SMPTE bars videos]
  C --> I1[Scopes/Histogram images]
  S --> I2[Mixing + EQ images]
  S --> V2[Short CC-BY clips for mixing practice]
  M --> I3[Optical printer (PD)]
  M --> V3[Kinetic typography (CC-BY)]
```

## Hero cover recommendation

### Hero image

- **Direct file URL:** https://upload.wikimedia.org/wikipedia/commons/f/fd/Mixing_and_mastering.jpg citeturn21view0
- **Source record:** https://commons.wikimedia.org/wiki/File:Mixing_and_mastering.jpg citeturn20view0
- **Caption (1–2 lines):** Mixing & mastering desk—visual shorthand for Week 8’s “polish”: levels, EQ, dynamics, deliverables. citeturn20view0
- **Rights status:** **CC BY-NC-SA 4.0** (attribution + share-alike). citeturn20view0
- **Legal justification (repo/classroom):** Embedding is permitted under CC BY‑SA with attribution; if you **adapt** (crop/overlay), the derivative must remain CC BY‑SA compatible. citeturn20view0

**Ready-to-paste `<figure>` (your preferred pattern):**

```html
<figure class="spectacle-image">
	<img
		src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Mixing_and_mastering.jpg"
		alt="Mixing and mastering desk (post-production audio polish)"
		loading="lazy" />
	<figcaption>
		<p>
			Mixing and mastering desk—visual shorthand for Week 8’s post-production polish (levels, EQ, dynamics, deliverables).
		</p>
		<p class="image-credit">Wikimedia Commons • CC BY-NC-SA 4.0 • Source: “Mixing and mastering”</p>
	</figcaption>
</figure>
```

## Verified video clips for Week 8

All embeds below follow your repo’s `video-player.html` include (platform `"file"`). fileciteturn81file0
Note: some **binary** direct URLs cannot be fully rendered by the crawler, but they are extracted from the file’s “Original file” link on the source record; include the quick `curl -I` check shown later for CI validation.

### Color scopes and calibration

**V01 — SMPTE bars (10s, 4K)**

- Direct: https://upload.wikimedia.org/wikipedia/commons/6/6e/Smpte_bars.webm citeturn45view0turn42view0
- Record: https://commons.wikimedia.org/wiki/File:Smpte_bars.webm citeturn42view0
- Rights: **CC BY-NC-SA 4.0** citeturn42view0
- Use: Perfect for scopes (waveform/vectorscope), white balance, legal levels. citeturn42view0
- Legal: CC BY‑SA allows reuse with attribution; share‑alike applies if modified. citeturn42view0

```liquid
{% include video-player.html
   platform="file"
   url="https://upload.wikimedia.org/wikipedia/commons/6/6e/Smpte_bars.webm"
   title="SMPTE bars (CC BY-SA) — scopes + calibration"
   timestamps="0:00|Bars overview,0:06|Check vectorscope" %}
```

**V02 — SMPTE bars + 1 kHz tone (26s, PD)**

- Direct: https://upload.wikimedia.org/wikipedia/commons/0/0b/SMPTE_bars_and_tone.ogv citeturn45view1turn43view0
- Record: https://commons.wikimedia.org/wiki/File:SMPTE_bars_and_tone.ogv citeturn43view0
- Rights: **Public domain (author-dedicated)** citeturn43view0
- DOI hook (in record context): alignment color bars guideline DOI **10.5594/SMPTE.EG1.1990**. citeturn41search4turn43view0
- Legal: PD—safe for repo redistribution and classroom screening without permission. citeturn43view0

```liquid
{% include video-player.html
   platform="file"
   url="https://upload.wikimedia.org/wikipedia/commons/0/0b/SMPTE_bars_and_tone.ogv"
   title="SMPTE bars + 1 kHz tone (Public Domain)"
   timestamps="0:00|Bars+tone start,0:10|Audio meter check,0:20|Export test" %}
```

**V03 — SMPTE bars + 1 kHz tone (15s, CC BY‑SA)**

- Direct: https://upload.wikimedia.org/wikipedia/commons/5/56/SMPTE_color_bars_with_tone.ogg citeturn57view1turn46view0
- Record: https://commons.wikimedia.org/wiki/File:SMPTE_color_bars_with_tone.ogg citeturn46view0
- Rights: **CC BY-NC-SA 4.0** citeturn46view0
- Legal: allowed with attribution; share-alike only if you publish modified versions. citeturn46view0

```liquid
{% include video-player.html
   platform="file"
   url="https://upload.wikimedia.org/wikipedia/commons/5/56/SMPTE_color_bars_with_tone.ogg"
   title="SMPTE bars with 1 kHz tone (CC BY-SA)"
   timestamps="0:00|Start,0:05|Levels check,0:12|Export sanity check" %}
```

**V04 — Test video with bars + tone (10s, CC BY‑SA)**

- Direct: https://upload.wikimedia.org/wikipedia/commons/c/c2/This_is_a_10_second_testvideo_with_bars_and_tone.webm citeturn57view0turn56view0
- Record: https://commons.wikimedia.org/wiki/File:This_is_a_10_second_testvideo_with_bars_and_tone.webm citeturn56view0
- Rights: **CC BY-NC-SA 4.0** citeturn56view0
- Legal: CC BY‑SA compliant embed; attribute in captions/credits. citeturn56view0

```liquid
{% include video-player.html
   platform="file"
   url="https://upload.wikimedia.org/wikipedia/commons/c/c2/This_is_a_10_second_testvideo_with_bars_and_tone.webm"
   title="10s bars + tone export test (CC BY-SA)"
   timestamps="0:00|Start,0:03|Scope snapshot,0:08|End" %}
```

### Before/after grading and motion graphics

**V05 — Color correction & grading test (CC)**

- Direct: https://upload.wikimedia.org/wikipedia/commons/0/08/Color_correction_and_grading_test.webm citeturn10view0turn9view0
- Record: https://commons.wikimedia.org/wiki/File:Color_correction_and_grading_test.webm citeturn9view0
- Rights: Free license per Commons record (use that record for attribution). citeturn9view0
- Legal: Commons-hosted free license ⇒ reusable with stated attribution/terms. citeturn9view0

```liquid
{% include video-player.html
   platform="file"
   url="https://upload.wikimedia.org/wikipedia/commons/0/08/Color_correction_and_grading_test.webm"
   title="Color correction vs grading — demo clip"
   timestamps="0:00|Before,0:10|Correction,0:20|Creative grade" %}
```

**V06 — Kinetic typography (CC BY 3.0)**

- Direct: https://upload.wikimedia.org/wikipedia/commons/d/d3/%27Trick_or_Treat%27_-_Kinetic_Typography.webm citeturn30view0turn29view1
- Record: https://commons.wikimedia.org/wiki/File:%27Trick_or_Treat%27_-_Kinetic_Typography.webm citeturn29view1
- Rights: **CC BY 3.0** citeturn29view1
- Legal: CC BY permits reuse with attribution; ideal to discuss “graphics as rhythm/punctuation.” citeturn29view1

```liquid
{% include video-player.html
   platform="file"
   url="https://upload.wikimedia.org/wikipedia/commons/d/d3/%27Trick_or_Treat%27_-_Kinetic_Typography.webm"
   title="Kinetic typography micro-example (CC BY)"
   timestamps="0:00|Timing,0:06|Ease + readability" %}
```

### Short CC clips for polishing exercises (audio mixing + export practice)

These are short segments from entity["movie","Big Buck Bunny","blender open movie 2008"] by entity["organization","Blender Foundation","open movie producer"] (licensed CC BY 3.0; follow attribution guidance in each file record). citeturn52view0turn51search6turn51search3

**V07 — Medium close-up clip (8s, CC BY 3.0)**

- Direct: https://upload.wikimedia.org/wikipedia/commons/d/d8/Big_buck_bunny_mcu.ogv citeturn54view0turn52view0
- Record: https://commons.wikimedia.org/wiki/File:Big_buck_bunny_mcu.ogv citeturn52view0

```liquid
{% include video-player.html
   platform="file"
   url="https://upload.wikimedia.org/wikipedia/commons/d/d8/Big_buck_bunny_mcu.ogv"
   title="Big Buck Bunny — MCU clip (CC BY) for dialogue/music ducking drill"
   timestamps="0:00|Set dialogue target,0:04|Duck music" %}
```

**V08 — Bird clip (≈7s, CC BY 3.0)**

- Direct: https://upload.wikimedia.org/wikipedia/commons/c/cf/Big_Buck_Bunny_8_seconds_bird_clip.ogv citeturn54view1turn51search6
- Record: https://commons.wikimedia.org/wiki/File:Big_Buck_Bunny_8_seconds_bird_clip.ogv citeturn51search6

```liquid
{% include video-player.html
   platform="file"
   url="https://upload.wikimedia.org/wikipedia/commons/c/cf/Big_Buck_Bunny_8_seconds_bird_clip.ogv"
   title="Big Buck Bunny — 8s SFX layering drill (CC BY)"
   timestamps="0:00|Room tone,0:03|Impact SFX,0:06|Tail" %}
```

**V09 — Extreme close-up clip (≈3s, CC BY)**

- Direct: https://upload.wikimedia.org/wikipedia/commons/c/c4/Big_buck_bunny_ecu.ogv citeturn54view2turn53view1
- Record: https://commons.wikimedia.org/wiki/File:Big_buck_bunny_ecu.ogv citeturn53view1

**V10 — Zoom-in clip (21s, CC BY)**

- Direct: https://upload.wikimedia.org/wikipedia/commons/b/b1/Big_buck_bunny_zoom_in.ogv citeturn54view3turn53view2
- Record: https://commons.wikimedia.org/wiki/File:Big_buck_bunny_zoom_in.ogv citeturn53view2

**V11 — Low-angle clip (≈4.5s, CC BY)**

- Direct: https://upload.wikimedia.org/wikipedia/commons/0/0b/Big_buck_bunny_low_angle_shot.ogv citeturn54view4turn53view3
- Record: https://commons.wikimedia.org/wiki/File:Big_buck_bunny_low_angle_shot.ogv citeturn53view3

**V12 — High-angle clip (≈4.5s, CC BY)**

- Direct: https://upload.wikimedia.org/wikipedia/commons/4/46/Big_buck_bunny_high_angle_shot.ogv citeturn60view0turn51search3
- Record: https://commons.wikimedia.org/wiki/File:Big_buck_bunny_high_angle_shot.ogv citeturn51search3

For V09–V12, legal justification is identical: CC BY permits reuse with attribution; no share-alike requirement; ideal for “polish” labs (noise reduction, EQ presence boost, loudness targets, export checks). citeturn53view1turn53view2turn53view3turn51search3

## Verified images/graphics for Week 8

### Color and scopes

**I01 — Vectorscope graticule**

- Direct: https://upload.wikimedia.org/wikipedia/commons/7/7b/Vectorscope_graticule.png citeturn28view0turn24view0
- Record: https://commons.wikimedia.org/wiki/File:Vectorscope_graticule.png citeturn24view0
- Rights: Free license per record (use record for attribution). citeturn24view0
- Legal: Reuse permitted under the record’s license terms. citeturn24view0

**I02 — Histogram equalization (before/after + histogram)**

- Direct: https://upload.wikimedia.org/wikipedia/commons/f/f9/Histogram_equalization.png citeturn28view4turn3search2
- Record: https://commons.wikimedia.org/wiki/File:Histogram_equalization.png citeturn3search2
- Rights: **CC0** citeturn3search2
- Legal: CC0 → unrestricted reuse; ideal for “fix before you grade” explanation. citeturn3search2

**I03 — SMPTE color bars (square, CC0)**

- Direct: https://upload.wikimedia.org/wikipedia/commons/c/c6/500_x_500_SMPTE_Color_Bars.png citeturn45view3turn44view0
- Record: https://commons.wikimedia.org/wiki/File:500_x_500_SMPTE_Color_Bars.png citeturn44view0
- Rights: **CC0** citeturn44view0
- Legal: CC0 → best “export/test image” for repo distribution. citeturn44view0

### Sound design and mixing

**I04 — Mixing console (Public Domain)**

- Direct: https://upload.wikimedia.org/wikipedia/commons/f/f7/Mixing_console.jpg citeturn18view2turn16view2
- Record: https://commons.wikimedia.org/wiki/File:Mixing_console.jpg citeturn16view2
- Rights: **Public domain** citeturn16view2
- Legal: PD → ok to redistribute inside repo and slides. citeturn16view2

**I05 — “Smiley face” EQ curve**

- Direct: https://upload.wikimedia.org/wikipedia/commons/5/5b/Smiley_Face_EQ.png citeturn19view2turn17view2
- Record: https://commons.wikimedia.org/wiki/File:Smiley_Face_EQ.png citeturn17view2
- Rights: **Public domain** citeturn17view2
- Legal: PD; use to discuss “over-EQ = amateur.” citeturn17view2

**I06 — Equal-loudness contours (Fletcher–Munson / Robinson–Dadson)**

- Direct: https://upload.wikimedia.org/wikipedia/commons/5/50/FletcherMunson_ELC.png citeturn28view6turn27view0
- Record: https://commons.wikimedia.org/wiki/File:FletcherMunson_ELC.png citeturn27view0
- Rights: **CC BY‑SA 3.0 + GFDL** citeturn27view0
- Legal: Embed with attribution; if adapted, keep share‑alike compatibility. citeturn27view0

**I07 — Noise spectrum graphic**

- Direct: https://upload.wikimedia.org/wikipedia/commons/2/20/Noise-spectrum-sound.png citeturn28view5turn26view2
- Record: https://commons.wikimedia.org/wiki/File:Noise-spectrum-sound.png citeturn26view2
- Rights: **CC BY‑SA 4.0** citeturn26view2
- Legal: Use with attribution; share-alike applies if you publish modified versions. citeturn26view2

### Motion graphics lineage and grading history

**I08 — Optical printer (PD)**

- Direct: https://upload.wikimedia.org/wikipedia/commons/2/20/Opticalprinter.jpg citeturn38view0turn37view0
- Record: https://commons.wikimedia.org/wiki/File:Opticalprinter.jpg citeturn37view0
- Rights: **Public domain** citeturn37view0
- Legal: PD; perfect “optical printing → After Effects” bridge. citeturn37view0

**I09 — Telecine hardware (Quadra 444)**

- Direct: https://upload.wikimedia.org/wikipedia/commons/a/a0/BTS_Quadra_444_Telecine.JPG citeturn23view0turn22view0
- Record: https://commons.wikimedia.org/wiki/File:BTS_Quadra_444_Telecine.JPG citeturn22view0
- Rights: Free license per record (attribute as stated). citeturn22view0
- Legal: Reuse per stated Commons license. citeturn22view0

**I10 — entity["people","Walter Murch","film editor and theorist"] at work (portrait)**

- Direct: https://upload.wikimedia.org/wikipedia/commons/b/bf/Walter_Murch.jpg citeturn33view0turn32view0
- Record: https://commons.wikimedia.org/wiki/File:Walter_Murch.jpg citeturn32view0
- Rights: **CC BY 2.0** citeturn32view0
- Legal: CC BY allows reuse with attribution; strong anchor visual for “Rule of Six” discussion. citeturn32view0

**I11 — Moviola sound editing board**

- Direct: https://upload.wikimedia.org/wikipedia/commons/d/d6/Moviola_16mm_Sound_Editing_Board.jpg citeturn18view1turn16view1
- Record: https://commons.wikimedia.org/wiki/File:Moviola_16mm_Sound_Editing_Board.jpg citeturn16view1
- Rights: Free license per record (attribute as stated). citeturn16view1
- Legal: Reuse permitted under the record’s license; ideal to historicize “sound editing as craft.” citeturn16view1

**I12 — “Sound localization in a living room”**

- Direct: https://upload.wikimedia.org/wikipedia/commons/5/56/Sound_localization_in_a_living_room.png citeturn15view1turn14view0
- Record: https://commons.wikimedia.org/wiki/File:Sound_localization_in_a_living_room.png citeturn14view0
- Rights: **CC BY‑SA 3.0** citeturn14view0
- Legal: Use with attribution; share‑alike if modified (e.g., annotated). citeturn14view0

## DOI-backed academic anchors for Week 8 notes

Use these in your Week 8 bibliography (they’re not media files, but they strengthen methodology and authority):

- entity["organization","SMPTE","motion imaging standards body"]: “The Stereoscopic Digital Intermediate Process: Post‑Production” — DOI **10.5594/J15037**. citeturn59search1
- entity["organization","SMPTE","motion imaging standards body"] Conference Library: “The 2K Grading Room – Digital Intermediate Film” — DOI **10.5594/M001202** (note: © SMPTE, rights reserved; cite for research, don’t repost full text). citeturn59search9
- SMPTE color-bar test signal guideline referenced in the PD bars+tone record — DOI **10.5594/SMPTE.EG1.1990**. citeturn41search4turn43view0

## Repo-ready artifacts and PR instructions

### Where to place a Week 8 “media manifest”

Recommended additions (no binaries committed; just curated links):

- `docs/media/week-08-post-production/README.md` (copy the curated lists + license notes)
- `docs/_data/videos/week-08.yml` (optional playlist)
- Patch Week 8 lesson file(s): insert embeds in relevant subsections:
  - Under “Color Correction & Grading”: V01–V05, I01–I03, I02
  - Under “Sound Design & Mixing”: I04–I07, I12, plus V07–V12 for lab drills
  - Under “Motion Graphics & Titles”: I08 + V06

### Quick URL validation script (recommended in CI)

```bash
# images
curl -I "https://upload.wikimedia.org/wikipedia/commons/0/0d/Mixing_and_mastering.jpg"

# videos (expect 200 + content-type; some servers may omit content-length)
curl -I "https://upload.wikimedia.org/wikipedia/commons/0/0b/SMPTE_bars_and_tone.ogv"
```
