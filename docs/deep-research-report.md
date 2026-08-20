# Curated Public‑Domain and Free‑Use Media Pack for Weeks 3–4 in ruvebal/advertising-video_editing-udit

## Executive summary

Weeks 3–4 in your repo map cleanly to two complementary research threads: (a) _continuity editing as attention engineering_ (rules such as the 180° axis, match-on-action, and “edit blindness”), and (b) _montage as meaning-by-juxtaposition_ (Kuleshov, Eisenstein, Vertov). citeturn27search0turn27search4turn26search1turn26search0turn26search2
To keep your public repo legally robust, this pack prioritizes **public domain (PD)** and **Creative Commons (CC)** media from entity["organization","Wikimedia Commons","media repository"] and PD‑forward archival pipelines (notably entity["organization","Prelinger Archives","ephemeral film archive"] via entity["organization","Internet Archive","nonprofit digital library"], whose classroom suitability and large PD share are widely documented). citeturn10search0turn16search1
Verification note (honest constraint): the environment used here can fetch and parse _record pages_ reliably but cannot “open” large binary media streams to prove HTTP‑200 at the file URL level; you still get **direct file URLs** (not landing pages), plus a **one‑line curl check** below for pre‑PR validation (timestamp: 2026‑02‑11 CET). citeturn19view0turn28view1turn12search0

## Repo targets and mapping logic

**Lesson files found in repo (connector-backed):**

- Week 3: `docs/_prompts/week-03-continuity-gestalt.md`
- Week 4: `docs/_prompts/week-04-soviet-montage-kuleshov.md`

**Why these media choices fit the lessons (analytical rationale):**
Continuity editing rules can be taught as applied cognition/attention design (useful anchors: entity["people","Tim J. Smith","film cognition researcher"]’s “Attentional Theory of Cinematic Continuity”, DOI: 10.3167/proj.2012.060102, and “edit blindness”, DOI: 10.16910/jemr.2.2.6). citeturn27search0turn27search4
Montage concepts are reinforced with (i) historically canonical PD films associated with entity["people","Sergei Eisenstein","soviet filmmaker 1898-1948"], entity["people","Dziga Vertov","soviet filmmaker 1896-1954"], and entity["people","Lev Kuleshov","soviet filmmaker 1899-1970"], and (ii) modern experimental corroboration of “Kuleshov effect” framing (DOI: 10.1093/scan/nsl014). citeturn14search0turn18search11turn15search2turn26search1

## Direct video file URLs for Weeks 3–4

All items below are **direct file URLs** (binary), each paired with a **source record URL** that contains the rights statement/license tag. Selection emphasizes commercials/ads first, then canonical montage/continuity films. citeturn11search0turn16search3turn16search0turn11search2turn11search1turn29search2turn10search4turn28view1turn15search2turn18search11turn19view0turn13search2

```tsv
id	title	direct_file_url	source_record_url	rights_status	caption	legal_use_note
w3v01	Pepsodent commercial (c.1950s)	https://upload.wikimedia.org/wikipedia/commons/1/1d/Pepsodent_commercial%2C_c._1950s.ogg	https://commons.wikimedia.org/wiki/File:Pepsodent_commercial%2C_c._1950s.ogg	PD-US no notice; Prelinger PD	Continuity product-demo cuts.	PD => ok to host; cite Commons record.
w4v01	Lucky Strike commercial (1948)	https://upload.wikimedia.org/wikipedia/commons/1/11/LuckyStr1948.webm	https://commons.wikimedia.org/wiki/File:LuckyStr1948.webm	Prelinger PD dedication (CC-PD)	Stop-motion montage rhythm.	PD => ok; cite Commons record.
w3v02	Gillette Super-Speed ad (c.1956)	https://upload.wikimedia.org/wikipedia/commons/6/6b/Gillette_Super-Speed_TV_commercial_with_Pee_Wee_Reese_circa_1956.webm	https://commons.wikimedia.org/wiki/File:Gillette_Super-Speed_TV_commercial_with_Pee_Wee_Reese_circa_1956.webm	PD-US no notice; CC-PD	Testimonial continuity editing.	PD => ok; cite Commons record.
w4v02	A Great New Star (1952) – Chevrolet	https://upload.wikimedia.org/wikipedia/commons/2/24/A_Great_New_Star.ogv	https://commons.wikimedia.org/wiki/File:A_Great_New_Star.ogv	Prelinger CC Public Domain Dedication	Sponsored musical promo; continuity vs inserts.	PD dedication => ok; cite Commons record.
w4v03	‘I Like Ike’ political ad (1952)	https://upload.wikimedia.org/wikipedia/commons/e/e7/1952_Eisenhower_Political_Ad_-_I_Like_Ike_-_Presidential_Campaign_Ad.webm	https://commons.wikimedia.org/wiki/File:1952_Eisenhower_Political_Ad_-_I_Like_Ike_-_Presidential_Campaign_Ad.webm	PD-US no notice (ad)	Political montage + jingle.	PD => ok; cite Commons record.
w3v03	M&M’s animated commercial (1960s)	https://upload.wikimedia.org/wikipedia/commons/5/53/1960s_M%26M%27s_candies_commercial.webm	https://commons.wikimedia.org/wiki/File:1960s_M%26M%27s_candies_commercial.webm	PD-US no notice (ad)	Rhythmic cutting in animation.	PD => ok; cite Commons record.
w3v04	In the Sub (1957)	https://upload.wikimedia.org/wikipedia/commons/5/53/IntheSub1957.webm	https://commons.wikimedia.org/wiki/File:IntheSub1957.webm	Prelinger CC Public Domain Dedication	Continuity across urban spaces.	PD dedication => ok; cite Commons record.
w4v04	Kuleshov Effect Example (2012)	https://upload.wikimedia.org/wikipedia/commons/e/e9/KuleshovEffectExample.ogv	https://commons.wikimedia.org/wiki/File:KuleshovEffectExample.ogv	CC BY-SA 3.0	Reconstruction of Kuleshov experiment.	CC BY-SA => ok w/ attribution + SA for edits.
w4v05	Mr. West in the Land of the Bolsheviks (1924)	https://upload.wikimedia.org/wikipedia/commons/1/17/Mr_West_%281924%29.webm	https://commons.wikimedia.org/wiki/File:Mr_West_%281924%29.webm	Commons-hosted (check file tags)	Kuleshov-directed montage/propaganda comedy.	Use only if file page lists PD/CC; cite record.
w4v06	Man with a Movie Camera (1929)	https://upload.wikimedia.org/wikipedia/commons/5/52/Man_With_A_Movie_Camera_%28Dziga_Vertov%2C_1929%29.webm	https://commons.wikimedia.org/wiki/File:Man_With_A_Movie_Camera_%28Dziga_Vertov%2C_1929%29.webm	PD (pre-1930; PD-Russia)	Canonical montage + kino-eye.	PD => ok; cite Commons record.
w4v07	Battleship Potemkin (1925)	https://upload.wikimedia.org/wikipedia/commons/b/bf/Battleship_Potemkin.webm	https://commons.wikimedia.org/wiki/File:Battleship_Potemkin.webm	PD (US pre-1931; PD-Russia)	Odessa Steps montage analysis anchor.	PD => ok; cite Commons record.
w3v05	Intolerance (1916)	https://upload.wikimedia.org/wikipedia/commons/9/9c/Intolerance_%28D._W._Griffith%2C_1916%29.webm	https://commons.wikimedia.org/wiki/File:Intolerance_%28D._W._Griffith%2C_1916%29.webm	PD (US pre-1930)	Cross-cutting + early continuity grammar.	PD => ok; cite Commons record.
```

## Direct image and poster file URLs for Weeks 3–4

These are direct images/graphics used to teach spatial continuity + Gestalt (Week 3) and montage/Kuleshov + Soviet film iconography (Week 4). citeturn12search0turn12search7turn12search4turn12search15turn15search1turn17search1turn17search2turn17search6turn18search0turn13search4turn11search3turn12search11

```tsv
id	title	direct_file_url	source_record_url	rights_status	caption	legal_use_note
w3i01	180-degree rule diagram	https://upload.wikimedia.org/wikipedia/commons/b/be/180_degree_rule.svg	https://commons.wikimedia.org/wiki/File:180_degree_rule.svg	CC BY-SA 3.0 / GFDL	Axis-of-action schematic.	CC BY-SA => ok w/ attribution; SA for edits.
w3i02	Gestalt closure diagram (simple)	https://upload.wikimedia.org/wikipedia/commons/3/30/Gestalt_closure.svg	https://commons.wikimedia.org/wiki/File:Gestalt_closure.svg	Public domain (ineligible)	Closure principle in one graphic.	PD => ok; cite record.
w3i03	Gestalt closure icon	https://upload.wikimedia.org/wikipedia/commons/a/af/Law_of_closure_gestalt_svg_hariadhi.svg	https://commons.wikimedia.org/wiki/File:Law_of_closure_gestalt_svg_hariadhi.svg	CC BY-NC-SA 4.0	Modern closure glyph.	CC BY-SA => ok w/ attribution; SA for edits.
w3i04	Gestalt principles sheet	https://upload.wikimedia.org/wikipedia/commons/d/dc/Gestalt_Principles_1.png	https://commons.wikimedia.org/wiki/File:Gestalt_Principles_1.png	CC BY-NC-SA 4.0	Proximity/similarity/continuity.	CC BY-SA => ok w/ attribution; SA for edits.
w4i01	Kuleshov effect illustration	https://upload.wikimedia.org/wikipedia/commons/6/60/Kuleshov_effect.jpg	https://commons.wikimedia.org/wiki/File:Kuleshov_effect.jpg	CC BY-SA 3.0	Context changes reading of face.	CC BY-SA => ok w/ attribution; SA for edits.
w4i02	Battleship Potemkin poster (1927)	https://upload.wikimedia.org/wikipedia/commons/7/72/Kino0.jpg	https://commons.wikimedia.org/wiki/File:Kino0.jpg	Public domain (Russia)	Poster artifact for montage era.	PD => ok; cite record.
w4i03	Odessa Steps baby carriage still	https://upload.wikimedia.org/wikipedia/commons/e/ea/Carrozzina_potemkin.jpg	https://commons.wikimedia.org/wiki/File:Carrozzina_potemkin.jpg	Public domain (Russia)	Iconic montage still for shot-by-shot.	PD => ok; cite record.
w4i04	Potemkin ship still	https://upload.wikimedia.org/wikipedia/commons/2/2a/Battleship_Potemkin-Ship_portrait.jpg	https://commons.wikimedia.org/wiki/File:Battleship_Potemkin-Ship_portrait.jpg	Public domain (Russia)	Still for establishing vs montage cuts.	PD => ok; cite record.
w4i05	Man with a Movie Camera frame	https://upload.wikimedia.org/wikipedia/commons/8/8b/Man_with_a_Movie_Camera_by_Dziga_Vertov.jpg	https://commons.wikimedia.org/wiki/File:Man_with_a_Movie_Camera_by_Dziga_Vertov.jpg	Public domain (Russia/US per Commons)	Reflexive camera gaze frame.	PD => ok; cite record.
w3i05	Intolerance publicity image (1919 scan)	https://upload.wikimedia.org/wikipedia/commons/e/e1/Intolerance_%281916%29_-_Talmadge.jpg	https://commons.wikimedia.org/wiki/File:Intolerance_%281916%29_-_Talmadge.jpg	Public domain (US)	Star/publicity context for continuity era.	PD => ok; cite record.
w3i06	Framegrab: Pee Wee Reese in Gillette ad	https://upload.wikimedia.org/wikipedia/commons/0/01/Pee_Wee_Reese_-_Gillette_commercial.jpg	https://commons.wikimedia.org/wiki/File:Pee_Wee_Reese_-_Gillette_commercial.jpg	Prelinger PD dedication	Ad still for continuity + endorsement.	PD => ok; cite record.
w3i07	Figure–ground gestalt image	https://upload.wikimedia.org/wikipedia/commons/4/43/Gestaltsystem.jpg	https://commons.wikimedia.org/wiki/File:Gestaltsystem.jpg	Public domain (author dedicated)	Attention/figure-ground for cut masking.	PD => ok; cite record.
```

## Repo-ready integration snippets, mapping table, and DOI anchors

Continuity editing (Week 3) has a strong cognitive literature base (AToCC; “edit blindness”). citeturn27search0turn27search4
Montage and Kuleshov framing have both film-theory and empirical support (e.g., DOI: 10.1093/scan/nsl014; montage overview DOI: 10.4324/9781135000356-REMO18-1). citeturn26search1turn26search0

```html
<!-- HTML <figure> pattern (drop into Week 3 or 4 markdown) -->
<figure class="spectacle-image">
	<img
		src="https://upload.wikimedia.org/wikipedia/commons/b/be/180_degree_rule.svg"
		alt="180-degree rule diagram showing camera arc around the axis of action"
		loading="lazy" />
	<figcaption>
		<p>180° rule: keep camera positions on one side of the action axis to preserve screen direction.</p>
		<p class="image-credit">CC BY-SA (see Commons record). Source: Wikimedia Commons.</p>
	</figcaption>
</figure>
```

```liquid
{%- comment -%}
Video embedding: docs/_includes/video-player.html currently supports YouTube/Vimeo.
To embed direct PD/CC files from Wikimedia upload, add a "file" platform in video-player.html
(see patch instructions below), then use:
{%- endcomment -%}

{% include video-player.html platform="file"
   src="https://upload.wikimedia.org/wikipedia/commons/e/e9/KuleshovEffectExample.ogv"
   title="Kuleshov Effect Example (CC BY-SA 3.0)" %}
```

```markdown
| Media ID | Map to lesson file(s)                             |
| -------- | ------------------------------------------------- |
| w3v01    | docs/\_prompts/week-03-continuity-gestalt.md      |
| w4v01    | docs/\_prompts/week-04-soviet-montage-kuleshov.md |
| w3v02    | docs/\_prompts/week-03-continuity-gestalt.md      |
| w4v02    | docs/\_prompts/week-04-soviet-montage-kuleshov.md |
| w4v03    | docs/\_prompts/week-04-soviet-montage-kuleshov.md |
| w3v03    | docs/\_prompts/week-03-continuity-gestalt.md      |
| w3v04    | docs/\_prompts/week-03-continuity-gestalt.md      |
| w4v04    | docs/\_prompts/week-04-soviet-montage-kuleshov.md |
| w4v05    | docs/\_prompts/week-04-soviet-montage-kuleshov.md |
| w4v06    | docs/\_prompts/week-04-soviet-montage-kuleshov.md |
| w4v07    | docs/\_prompts/week-04-soviet-montage-kuleshov.md |
| w3v05    | docs/\_prompts/week-03-continuity-gestalt.md      |
| w3i01    | docs/\_prompts/week-03-continuity-gestalt.md      |
| w3i02    | docs/\_prompts/week-03-continuity-gestalt.md      |
| w3i03    | docs/\_prompts/week-03-continuity-gestalt.md      |
| w3i04    | docs/\_prompts/week-03-continuity-gestalt.md      |
| w4i01    | docs/\_prompts/week-04-soviet-montage-kuleshov.md |
| w4i02    | docs/\_prompts/week-04-soviet-montage-kuleshov.md |
| w4i03    | docs/\_prompts/week-04-soviet-montage-kuleshov.md |
| w4i04    | docs/\_prompts/week-04-soviet-montage-kuleshov.md |
| w4i05    | docs/\_prompts/week-04-soviet-montage-kuleshov.md |
| w3i05    | docs/\_prompts/week-03-continuity-gestalt.md      |
| w3i06    | docs/\_prompts/week-03-continuity-gestalt.md      |
| w3i07    | docs/\_prompts/week-03-continuity-gestalt.md      |
```

## Copyright posture and PR instructions

Because your repo is public, the safest baseline is: **only PD and explicitly free licenses (CC BY / CC BY‑SA / CC0, etc.)**—not classroom-only fair use. citeturn12search0turn19view0turn28view1
For advertising in particular, copyright normally applies; this pack uses commercials that Commons classifies as PD (often via “no notice” logic) or that are released via Prelinger’s PD dedication—so re‑hosting in a teaching repo is defensible _if you preserve attribution and any share‑alike requirements_. citeturn11search0turn16search0turn29search2turn10search0

```diff
# Minimal patch sketch: add HTML5 direct-file support to docs/_includes/video-player.html
# (place inside the existing <div class="video-container"> logic)
@@
 {% if include.platform == "youtube" %}
   ...existing...
 {% elsif include.platform == "vimeo" %}
   ...existing...
+{% elsif include.platform == "file" %}
+  <video controls preload="metadata" {% if include.poster %}poster="{{ include.poster }}"{% endif %}>
+    <source src="{{ include.src }}" type="{{ include.type | default: 'video/webm' }}">
+    Your browser does not support the video tag.
+  </video>
 {% endif %}
```

```bash
# Pre-merge URL sanity check (HTTP 200) — run locally (required because binary fetch is tool-limited here)
# Example for one item; extend by reading the TSV columns into a loop.
curl -I "https://upload.wikimedia.org/wikipedia/commons/e/e9/KuleshovEffectExample.ogv"

# Branch + file adds (suggested structure)
git checkout -b feat/week03-04-open-media-pack
mkdir -p docs/media

# Add two new pages (front matter recommended) and paste the TSV manifests + figure/video snippets:
#   docs/media/week-03-open-media.md
#   docs/media/week-04-open-media.md
# Then link them from the two prompt files.

git add docs/_includes/video-player.html docs/media/week-03-open-media.md docs/media/week-04-open-media.md
git commit -m "Add Week 03–04 open media pack (PD/CC) + HTML5 direct-file video support"

# PR (GitHub CLI)
gh pr create \
  --title "Week 03–04: PD/CC media pack + direct-file video support" \
  --body "Adds curated PD/CC videos, images, and rights notes for Week 3 (continuity/Gestalt) and Week 4 (Soviet montage/Kuleshov), plus HTML5 <video> support in video-player include."
```
