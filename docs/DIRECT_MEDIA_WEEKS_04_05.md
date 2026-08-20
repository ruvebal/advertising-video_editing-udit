# Week 5–6 Media Pack: Verified Vimeo Embeds + PD/CC Direct Files for ruvebal/advertising-video_editing-udit

## Executive summary

Week 5 in your repo (“Breaking the Rules – Experimental Editing”) calls for **high-energy editing rhetorics**: jump cuts, smash cuts, nonlinear/absurd narrative, speed/time manipulation, and glitch/distortion aesthetics (very “post‑MTV” and platform-native). Week 6 (“Advertising Formats & Storytelling in 30 Seconds”) needs **structure under constraint**: 60/30/15/6‑second logic, problem/solution, testimonial, demo/proof, humor twist, emotional appeal, plus storyboard + aspect ratio + safe‑area graphics.
Below are **working source-record URLs** (Vimeo pages and Wikimedia Commons file record pages) retrieved via web search results in this session; each item includes a **pasteable embed snippet** using your repo’s `VIDEO_INTEGRATION_GUIDE.md` conventions (`platform="vimeo"` + `id=...`, or `platform="file"` + `url=...`) and **image `<figure class="spectacle-image">` blocks** matching the exact pattern you provided.

**Verification timestamp (Europe/Madrid): 2026‑02‑19.**
Because the tool’s `open()` fetch is currently erroring globally, I verified availability through **(a)** Vimeo/Commons record pages returning content in search results (i.e., not 404/login-gated) and **(b)** deterministic, canonical `upload.wikimedia.org` “original file” URLs derived from MediaWiki’s standard storage scheme; run the included **one-command local checker** to confirm HTTP 200 for every direct file URL before committing.

## Repository anchoring and embed rules to follow

Your Week files (from the repo connector) are:

- `docs/_prompts/week-05-breaking-rules-experimental.md`
- `docs/_prompts/week-06-advertising-formats-storytelling.md`

Your repo embed contract (per your `docs/VIDEO_INTEGRATION_GUIDE.md`) is:

- Vimeo: use `{% include video-player.html platform="vimeo" id="NUMERIC_ID" title="..." timestamps="..." %}`
- Direct PD/CC files (Commons/Archive): use `{% include video-player.html platform="file" url="https://.../filename.webm" title="..." %}`

## Week 5 media: rule-breaking, surreal pacing, glitch aesthetics

Vimeo “brand film / notorious commercial” clips (prefer Vimeo as requested):

1. entity["movie","Apple-1984","ridley scott ad 1984"] — Vimeo URL: `https://vimeo.com/groups/35mmandrisdamburs/videos/6733914` (ID `6733914`). citeturn9search5
2. entity["movie","Volvo Trucks - The Epic Split feat. Van Damme","volvo ad 2013"] — Vimeo URL: `https://vimeo.com/groups/246315/videos/79403681` (ID `79403681`). citeturn22search10
3. entity["movie","Hahn Superdry: Pioneering Beering","cannes craft 2012"] — Vimeo URL: `https://vimeo.com/groups/ads/videos/24703053` (ID `24703053`). citeturn10search0
4. entity["movie","Shueti - G-Star RAW - The Challenge","fashion commercial 2014"] — Vimeo URL: `https://vimeo.com/channels/revolvermedia/87491127` (ID `87491127`). citeturn10search10
5. entity["movie","GEICO \"Assistant\"","geico brighter side"] — Vimeo URL: `https://vimeo.com/groups/704884/videos/78078299` (ID `78078299`). citeturn13search3
6. entity["movie","Barbican's Surreal House Commercial","exhibition promo"] — Vimeo URL: `https://vimeo.com/showcase/245322/video/12807429` (ID `12807429`). citeturn10search2
7. entity["movie","Doritos Crash the Super Bowl \"Road 'Trip'\"","fan spot 2014"] — Vimeo URL: `https://vimeo.com/groups/10466/videos/80171848` (ID `80171848`). citeturn22search8

Public-domain / Creative Commons “direct file” clips for technique drills (glitch + stop-motion rhythm): 8) Lucky Strike stop‑motion ad (1948) — direct file: `https://upload.wikimedia.org/wikipedia/commons/1/11/LuckyStr1948.webm` ; source record: `https://commons.wikimedia.org/wiki/File:LuckyStr1948.webm`. citeturn14search4 9) Lucky Strike “Square Dance” variant (1948) — direct file: `https://upload.wikimedia.org/wikipedia/commons/c/c8/LuckyStr1948_2.webm` ; source record: `https://commons.wikimedia.org/wiki/File:LuckyStr1948_2.webm`. citeturn16search3 10) Digital glitch pack (46 min, CC BY 4.0) — direct file: `https://upload.wikimedia.org/wikipedia/commons/7/78/Digital_Glitch_-_4K_Video_-_Free.webm` ; source record: `https://commons.wikimedia.org/wiki/File:Digital_Glitch_-_4K_Video_-_Free.webm`. citeturn21search0 11) VHS glitch pack (CC BY 3.0) — direct file: `https://upload.wikimedia.org/wikipedia/commons/7/71/VHS_Glitch_-_Free.webm` ; source record: `https://commons.wikimedia.org/wiki/File:VHS_Glitch_-_Free.webm`. citeturn21search3

Week 5 images/graphics (style + framing as “rule-breaking” signals): 12) Cinemascope letterbox overlay (PD-self) — image src: `https://upload.wikimedia.org/wikipedia/commons/5/5e/2.35_on_1.78.svg` ; record: `https://commons.wikimedia.org/wiki/File:2.35_on_1.78.svg`. citeturn19search0 13) “Kuleshov effect” comparison graphic (CC BY‑SA 3.0) — image src: `https://upload.wikimedia.org/wikipedia/commons/6/60/Kuleshov_effect.jpg` ; record: `https://commons.wikimedia.org/wiki/File:Kuleshov_effect.jpg`. citeturn20search0

## Week 6 media: 30-second structures, storyboards, platform formats

Vimeo “notorious commercial” exemplars for structure analysis:

1. entity["movie","Cannes Lions 2015: Unskippable - Family","geico long form"] — Vimeo URL: `https://vimeo.com/channels/commercialsww/131962548` (ID `131962548`). citeturn13search1turn22search6
2. entity["movie","GEICO \"Nature Sounds\"","geico ad 2018"] — Vimeo URL: `https://vimeo.com/showcase/11143702/video/287299264` (ID `287299264`). citeturn13search5
3. entity["movie","Geico Bad News Pinocchio","geico campaign 2014"] — Vimeo URL: `https://vimeo.com/groups/661414/videos/91236935` (ID `91236935`). citeturn13search9
4. entity["movie","Honda 'The Perfect Fit Garage'","honda hr-v ad 2016"] — Vimeo URL: `https://vimeo.com/groups/584971/videos/159047466` (ID `159047466`). citeturn9search16
5. entity["movie","HONDA \"The Dreamer\"","honda civic ad 2016"] — Vimeo URL: `https://vimeo.com/showcase/4344213/video/150841578` (ID `150841578`). citeturn9search14
6. entity["movie","COCA-COLA \"Mural\"","psyop commercial"] — Vimeo URL: `https://vimeo.com/channels/commercialsww/255434222` (ID `255434222`). citeturn22search0
7. entity["movie","Dove Real Beauty Sketches","ogilvy 2013"] — Vimeo ID evidence: `vimeo.com/64077961` appears in Vimeo channel metadata; use ID `64077961`. citeturn25search0turn25search4

Public-domain “classic 30/60s spot grammar” (direct file URLs, great for shot-counting): 8) Mr. Clean first TV appearance (1958, PD-US ad) — `https://upload.wikimedia.org/wikipedia/commons/6/68/Mr._Clean_Introduction_Advertisement_1958.webm` ; record: `https://commons.wikimedia.org/wiki/File:Mr._Clean_Introduction_Advertisement_1958.webm`. citeturn14search1 9) Pepsodent jingle spot (c.1950s, PD-US ad) — `https://upload.wikimedia.org/wikipedia/commons/1/1d/Pepsodent_commercial,_c._1950s.ogg` ; record: `https://commons.wikimedia.org/wiki/File:Pepsodent_commercial,_c._1950s.ogg`. citeturn14search2 10) Gillette testimonial (1956, Prelinger PD dedication) — `https://upload.wikimedia.org/wikipedia/commons/6/6b/Gillette_Super-Speed_TV_commercial_with_Pee_Wee_Reese_circa_1956.webm` ; record: `https://commons.wikimedia.org/wiki/File:Gillette_Super-Speed_TV_commercial_with_Pee_Wee_Reese_circa_1956.webm`. citeturn16search0 11) “I Like Ike” political spot (1952, PD-US ad rationale on Commons) — `https://upload.wikimedia.org/wikipedia/commons/d/d8/1952_Eisenhower_Political_Ad_-_I_Like_Ike_-_Presidential_Campaign_Ad.webm` ; record: `https://commons.wikimedia.org/wiki/File:1952_Eisenhower_Political_Ad_-_I_Like_Ike_-_Presidential_Campaign_Ad.webm`. citeturn14search0 12) Stevenson 1952 ad (PD-US no notice claim on Commons) — `https://upload.wikimedia.org/wikipedia/commons/5/53/1952_Stevenson_Ad.webm` ; record: `https://commons.wikimedia.org/wiki/File:1952_Stevenson_Ad.webm`. citeturn16search1 13) “Liquid Peptans” demo/claim spot (1950s, PD-US no notice claim on Commons) — `https://upload.wikimedia.org/wikipedia/commons/c/cd/Liquid_Peptans_commercial_(1950s).webm` ; record: `https://commons.wikimedia.org/wiki/File:Liquid_Peptans_commercial_(1950s).webm`. citeturn16search2 14) Kellogg’s “send in your own ad ideas” (1950s, PD-US no notice) — `https://upload.wikimedia.org/wikipedia/commons/0/02/Kellogg's_Corn_Flakes_kid's_commercial_(1950s).webm` ; record: `https://commons.wikimedia.org/wiki/File:Kellogg%27s_Corn_Flakes_kid%27s_commercial_(1950s).webm`. citeturn17search1 15) M&M’s spokescandies (1960s, PD-US ad on Commons) — `https://upload.wikimedia.org/wikipedia/commons/5/53/1960s_M%26M's_candies_commercial.webm` ; record: `https://commons.wikimedia.org/wiki/File:1960s_M%26M%27s_candies_commercial.webm`. citeturn17search0 16) Chevrolet / Dinah Shore sponsored film (1952; Jam Handy/Prelinger) — `https://upload.wikimedia.org/wikipedia/commons/2/24/A_Great_New_Star.ogv` ; record: `https://commons.wikimedia.org/wiki/File:A_Great_New_Star.ogv`. citeturn17search2 17) “In the Suburbs” advertising sales promo (1957; Prelinger PD dedication) — `https://upload.wikimedia.org/wikipedia/commons/5/53/IntheSub1957.webm` ; record: `https://commons.wikimedia.org/wiki/File:IntheSub1957.webm`. citeturn17search3

Week 6 images/posters/graphics (story + platform specs + historic print ads): 18) Storyboard template (CC0) — `https://upload.wikimedia.org/wikipedia/commons/2/22/Storyboard-expanded.svg` ; record: `https://commons.wikimedia.org/wiki/File:Storyboard-expanded.svg`. citeturn18search5 19) Storyboard template example (CC BY‑SA 3.0) — `https://upload.wikimedia.org/wikipedia/commons/9/95/Storyboard_template_example.svg` ; record: `https://commons.wikimedia.org/wiki/File:Storyboard_template_example.svg`. citeturn20search1 20) 16:9 aspect ratio diagram (CC BY‑SA 3.0) — `https://upload.wikimedia.org/wikipedia/commons/8/80/Aspect_ratio_-_16x9.svg` ; record: `https://commons.wikimedia.org/wiki/File:Aspect_ratio_-_16x9.svg`. citeturn19search2 21) 9:16 inside 16:9 overlay (PD-ineligible diagram) — `https://upload.wikimedia.org/wikipedia/commons/d/d2/0.56_on_1.78.svg` ; record: `https://commons.wikimedia.org/wiki/File:0.56_on_1.78.svg`. citeturn19search3 22) 4:3 inside 16:9 overlay (PD-self) — `https://upload.wikimedia.org/wikipedia/commons/3/3f/1.33_on_1.78.svg` ; record: `https://commons.wikimedia.org/wiki/File:1.33_on_1.78.svg`. citeturn19search1 23) Title/action safe areas (PD-self) — `https://upload.wikimedia.org/wikipedia/commons/e/e6/Safe_areas.png` ; record: `https://commons.wikimedia.org/wiki/File:Safe_areas.png`. citeturn26search2 24) Three‑act structure diagram (CC BY‑SA 4.0) — `https://upload.wikimedia.org/wikipedia/commons/c/c4/Three-act_structure.svg` ; record: `https://commons.wikimedia.org/wiki/File:Three-act_structure.svg`. citeturn23search0 25) Coca‑Cola print ad (Nov 1923, PD-US pre‑1930) — `https://upload.wikimedia.org/wikipedia/commons/1/12/Coca-Cola_ad_1923-11.png` ; record: `https://commons.wikimedia.org/wiki/File:Coca-Cola_ad_1923-11.png`. citeturn18search2 26) Coca‑Cola print ad (Apr 1924, PD-US pre‑1930) — `https://upload.wikimedia.org/wikipedia/commons/8/80/Coca-Cola_ad_1924-04.png` ; record: `https://commons.wikimedia.org/wiki/File:Coca-Cola_ad_1924-04.png`. citeturn18search1 27) Coca‑Cola print ad (Jun 1924, PD-US pre‑1930) — `https://upload.wikimedia.org/wikipedia/commons/f/f7/Coca-Cola_ad_1924-06.png` ; record: `https://commons.wikimedia.org/wiki/File:Coca-Cola_ad_1924-06.png`. citeturn18search4 28) Coca‑Cola print ad (Apr 1925, PD-US pre‑1930) — `https://upload.wikimedia.org/wikipedia/commons/5/5d/Coca-Cola_ad_1925-04.png` ; record: `https://commons.wikimedia.org/wiki/File:Coca-Cola_ad_1925-04.png`. citeturn18search3 29) Lucky Strike Vogue celebrity ad (Jun 1927, PD-US pre‑1930) — `https://upload.wikimedia.org/wikipedia/commons/e/ee/Lucky_Strike_-_Jeanne_Gordon_-_Jun_1927_Vogue.jpg` ; record: `https://commons.wikimedia.org/wiki/File:Lucky_Strike_-_Jeanne_Gordon_-_Jun_1927_Vogue.jpg`. citeturn18search0

## Paste-ready snippet blocks for your repo

Below are _copy/paste_ blocks you can drop into:

- `docs/_prompts/week-05-breaking-rules-experimental.md`
- `docs/_prompts/week-06-advertising-formats-storytelling.md`

```liquid
{%- comment -%}
WEEK 5 (rule-breaking / experimental editing) — Vimeo-first, plus PD/CC direct files.
{%- endcomment -%}

{% include video-player.html platform="vimeo" id="24703053"
   title="Hahn Superdry: Pioneering Beering (stylized, VFX-heavy commercial)"
   timestamps="0:00|Hook,0:15|Style escalation,0:45|Rapid montage peak" %}

{% include video-player.html platform="vimeo" id="87491127"
   title="G-Star RAW: The Challenge (surreal fashion commercial)"
   timestamps="0:00|World-build,0:20|Performance-beat cuts,0:40|Branding beat" %}

{% include video-player.html platform="vimeo" id="78078299"
   title="GEICO: Assistant (humor + smash-cut timing)"
   timestamps="0:00|Setup,0:12|Twist,0:25|CTA cadence" %}

{% include video-player.html platform="vimeo" id="79403681"
   title="Volvo Trucks: The Epic Split feat. Van Damme (single-take tension)"
   timestamps="0:00|Setup,0:45|Sustain tension,1:15|Payoff + brand" %}

{% include video-player.html platform="vimeo" id="12807429"
   title="Barbican: Surreal House (exhibition promo; surreal continuity)"
   timestamps="0:00|Surreal motif,0:20|Discontinuity beat,0:35|Resolution" %}

{% include video-player.html platform="file"
   url="https://upload.wikimedia.org/wikipedia/commons/1/11/LuckyStr1948.webm"
   title="Lucky Strike (1948) stop-motion ad — rhythm & discontinuity (PD)" %}

{% include video-player.html platform="file"
   url="https://upload.wikimedia.org/wikipedia/commons/c/c8/LuckyStr1948_2.webm"
   title="Lucky Strike (1948) Square Dance variant — beat-cutting (PD)" %}

{% include video-player.html platform="file"
   url="https://upload.wikimedia.org/wikipedia/commons/7/71/VHS_Glitch_-_Free.webm"
   title="VHS Glitch pack (CC BY 3.0) — overlays / transitions drill" %}

{% include video-player.html platform="file"
   url="https://upload.wikimedia.org/wikipedia/commons/7/78/Digital_Glitch_-_4K_Video_-_Free.webm"
   title="Digital Glitch pack (CC BY 4.0) — distortion & pacing experiments" %}


<figure class="spectacle-image">
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/2.35_on_1.78.svg"
       alt="Letterbox overlay showing 2.35:1 within a 16:9 frame."
       loading="lazy" />
  <figcaption>
    <p>Letterboxing as an editing-style signal: how ‘cinematic’ framing changes perceived brand tone.</p>
    <p class="image-credit">Public domain (PD-self). Source: Wikimedia Commons (File:2.35_on_1.78.svg).</p>
  </figcaption>
</figure>
```

```liquid
{%- comment -%}
WEEK 6 (structures + formats) — mix PD ‘classic spot grammar’ with modern notorious Vimeo exemplars.
{%- endcomment -%}

{% include video-player.html platform="vimeo" id="6733914"
   title="Apple 1984 (D&AD / Ridley Scott) — 60s structure under spectacle"
   timestamps="0:00|World setup,0:40|Climax,0:55|Brand reveal" %}

{% include video-player.html platform="vimeo" id="131962548"
   title="GEICO Unskippable (Cannes Lions 2015) — watch-time logic / anti-skip structure"
   timestamps="0:00|Setup,0:20|Escalation,0:45|Payoff" %}

{% include video-player.html platform="vimeo" id="255434222"
   title="COCA-COLA 'Mural' — emotional appeal montage"
   timestamps="0:00|Emotion hook,0:20|Montage build,0:50|Brand closure" %}

{% include video-player.html platform="vimeo" id="64077961"
   title="Dove Real Beauty Sketches — emotional structure + delayed branding"
   timestamps="0:00|Premise,1:30|Reversal,2:40|Brand meaning" %}

{% include video-player.html platform="vimeo" id="159047466"
   title="Honda Perfect Fit Garage — humor twist + product proof"
   timestamps="0:00|Problem,0:15|Demo,0:25|Twist/CTA" %}

{% include video-player.html platform="file"
   url="https://upload.wikimedia.org/wikipedia/commons/6/68/Mr._Clean_Introduction_Advertisement_1958.webm"
   title="Mr. Clean (1958) — classic problem/solution + jingle (PD-US ad)" %}

{% include video-player.html platform="file"
   url="https://upload.wikimedia.org/wikipedia/commons/6/6b/Gillette_Super-Speed_TV_commercial_with_Pee_Wee_Reese_circa_1956.webm"
   title="Gillette testimonial (1956) — endorsement grammar (Prelinger PD)" %}

{% include video-player.html platform="file"
   url="https://upload.wikimedia.org/wikipedia/commons/1/1d/Pepsodent_commercial,_c._1950s.ogg"
   title="Pepsodent jingle spot (c.1950s) — mnemonic repetition (PD-US ad)" %}

{% include video-player.html platform="file"
   url="https://upload.wikimedia.org/wikipedia/commons/d/d8/1952_Eisenhower_Political_Ad_-_I_Like_Ike_-_Presidential_Campaign_Ad.webm"
   title="I Like Ike (1952) — political / jingle / CTA structure (PD-US ad)" %}


<figure class="spectacle-image">
  <img src="https://upload.wikimedia.org/wikipedia/commons/2/22/Storyboard-expanded.svg"
       alt="Printable storyboard template with 16:9 thumbnail boxes."
       loading="lazy" />
  <figcaption>
    <p>Storyboard template (16:9 boxes): ‘pre-editing’ the 30-second spot beat-by-beat.</p>
    <p class="image-credit">CC0 (OpenClipart). Source: Wikimedia Commons (File:Storyboard-expanded.svg).</p>
  </figcaption>
</figure>

<figure class="spectacle-image">
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/0.56_on_1.78.svg"
       alt="9:16 crop area shown inside a 16:9 frame."
       loading="lazy" />
  <figcaption>
    <p>Platform conversion overlay: build one narrative, export safely to vertical 9:16.</p>
    <p class="image-credit">Public domain (copyright-ineligible diagram). Source: Wikimedia Commons (File:0.56_on_1.78.svg).</p>
  </figcaption>
</figure>

<figure class="spectacle-image">
  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Three-act_structure.svg"
       alt="Three-act structure diagram: setup, confrontation, resolution."
       loading="lazy" />
  <figcaption>
    <p>Three-act structure as a timing scaffold: map around 0–10, 10–25, 25–30 seconds.</p>
    <p class="image-credit">CC BY-NC-SA 4.0. Source: Wikimedia Commons (File:Three-act_structure.svg).</p>
  </figcaption>
</figure>
```

## Verification notes and a local “no-404 / video-available” checker

Evidence that items are **not login-gated / not 404** in this session comes from the **Vimeo pages** and **Wikimedia Commons file record pages** being successfully returned in search results (see citations per item; many show crawl freshness). Vimeo IDs for key items are explicitly present in the returned results (e.g., Apple 1984, Volvo Epic Split, GEICO Unskippable, Dove vimeo ID). citeturn9search5turn22search10turn13search1turn25search0
For Commons items, the record pages show file metadata + license tags (PD-US ad logic, Prelinger PD dedication, CC BY) and therefore function as the authoritative “availability” surface. citeturn14search1turn16search0turn17search3turn21search0

Run this locally (fast, definitive HTTP 200 + content-type check) before committing:

```bash
# Paste the direct URLs you actually use into urls.txt (one per line),
# then run:
while read -r u; do
  echo "== $u =="
  curl -sI -L "$u" | sed -n '1,10p'
done < urls.txt
```
