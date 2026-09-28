# DATA-NOTES — Betontechnieken020 demo rebuild

Crawled 2026-09-28 from https://www.betontechnieken020.nl (JouwWeb, site id 1806376).
Raw HTML + text extractions kept outside the repo (scratchpad); this file is the source of truth for the build.

## 1. Sources

| Live URL | Status | Used for |
|---|---|---|
| `/` | 200 | Home copy, service tiles, betonrot, werkwijze, cost FAQ, Geveltechnieken020 block |
| `/over-ons` | 200 | About, materieel, values (4), work list, 9 kernwaarden |
| `/wat-doen-we` | 200 | Full work list (18 items), advice copy, **public comment section + rating widget** |
| `/wat-doen-we/betonreparatie-en-renovatie` | 200 | Betonrot (what/how/recognise/cause), mortels, normen |
| `/wat-doen-we/vloercoatings` | 200 | Coating types, maintenance, "zelf coaten", 1-day/60-min claim |
| `/wat-doen-we/beton-injecteren` | 200 | Kelderafdichting, injectie, vochtweringen, causes of basement leaks |
| `/wat-doen-we/schilderwerken` | 200 | 3-step painting process, smooth vs structure paint |
| `/wat-doen-we/gevelreiniging` | 200 | Stralen, impregneren, voegwerk, cost tips |
| `/wat-doen-we/totaal-vastgoedonderhoud` | 200 | RGS (Resultaat Gericht Samenwerken), 4 phases, benefits |
| `/wat-doen-we/constructie-verstevigingen` | 200 | Koolstof lamellen, staalconsoles, 6 application goals |
| `/wat-doen-we/koolstof-lijmwapening` | 301 → constructie-verstevigingen | duplicate |
| `/wat-doen-we/garagevloeren` | 200 | Garage/parkeergarage coatings (starr/antislip/scheuroverbruggend) |
| `/projecten-1` | 200 | **20 projects** + 20-slide VÓÓR/NÁ gallery + 3-step process image |
| `/projecten` | 301 → `/werkwijze` | ⚠ footer "Projecten" + "Balkonreparatie" point here |
| `/werkwijze` | 200 | YouTube video `4x6w9_QcnJo`, process text, kernwaarden (dup of over-ons) |
| `/offerte-aanvragen-1` | 200 | Quote form fields (incl. voorkeur werkopname-dagen ma–vr, 5 photo uploads) |
| `/contact` | 200 | Same form as offerte; phone hours |
| `/contact/contact-1` | 301 → offerte-aanvragen-1 | duplicate |
| `/contact/algemene-voorwaarden` | 200 | Terms (supplier guarantee wording, liability insurance) |
| `/contact/privacy-policy` | **404** | ⚠ linked from every footer |

Video: `https://www.youtube-nocookie.com/embed/4x6w9_QcnJo` (werkwijze page; the vloercoatings copy says "bekijk het filmpje hieronder" but the video is **not** on that page).

## 2. Assets

- **Hotlinking** `primary.jwwb.nl` works (CORS `*`, 1-year cache) **but** project images are 0.5–3.4 MB PNGs and the JouwWeb resizer ignores `width` (returns 650 KB WebP). Hotlinking would sink Lighthouse on mobile and the demo would break the day they leave JouwWeb.
  → **Decision: download + re-encode locally as WebP (max 1600px, ~80–200 KB) with descriptive flat filenames.** Originals remain on JouwWeb as fallback.
- `-high` variants only exist for images that JouwWeb itself references (gallery slides, `adadsadas-high.jpg`, `draagconsole-high.jpg`, two betonrot photos). `N-high.png` for the numbered project photos = 404.
- **Logo**: only `kvz1iz/400JpgdpiLogo.jpg` (1919×1159 JPG, white background, text "BETONTECHNIEKEN020 / Aannemer&Detachering"). No SVG/PNG exists. → will trace to SVG / produce transparent PNG. **Upsell: "uw logo als scherpe vector".**
- **Project gallery (20 slides)**: branded cards with a clean left VÓÓR / right NÁ split — ideal for the before/after slider after cropping the photo area out of the frame. These are separate from the 20 project entries (not linked to a location/text) → will be used as "Voor & na" showcase items, not attributed to specific projects unless the image obviously matches.
- **Numbered project photos (1–20)**: collages. Clean 2-panel L/R splits (slider-able): 1, 2, 4, 5, 6, 8, 9, 10, 12, 13, 16, 17, 18, 19, 20. Multi-panel / grid (gallery view): 3, 7, 11, 14, 15.

## 3. Brand colours (sampled from logo pixels)

- **Red `#C1252A`** (most frequent non-white/black: #c02428 / #c42428 / #c0242c) — contrast on white ≈ 5.9:1 (AA ✓).
- **Black `#050808`**.
- No other colours in the logo. Palette plan: red as primary accent (CTAs), near-black text, concrete-grey neutral scale, off-white bg.

## 4. Conflicting information

| Topic | Conflict | Handling |
|---|---|---|
| Experience | Meta over-ons: "Meer dan 25 jaar ervaring"; vastgoedonderhoud page: "Met 35 jaar ervaring" | Not shown. PLACEHOLDER. |
| Availability | Meta over-ons: "24/7 beschikbaar"; footer: phone ma–vr 07:30–17:30 | Show ma–vr 07:30–17:30 only. 24/7 spoed → PLACEHOLDER. |
| "10 jaar garantie" | **Not found anywhere** on the current site (visible copy or meta, all pages checked). Terms say supplier guarantee applies to third-party products. | Not shown at all unless client confirms (PLACEHOLDER). |
| "De beste Prijsgarantie" | A JouwWeb poll widget titled this sits on /wat-doen-we (Juist/Onjuist votes). Not a real offer. | Ignored. |
| E-mail | Footer: info@betontechnieken020.nl; JouwWeb schema.org: Betontechnieken020@gmail.com | Use info@. |
| Phone | Footer: +31 20 210 1904; schema.org telephone: +31 6 28935347 (= WhatsApp number) | Landline as main, mobile only for WhatsApp. |
| Geveltechnieken020 | Site calls it "dochterbedrijf" (subsidiary); brief says sister company | Use site wording "dochterbedrijf" — confirm. |
| Project 20 (Rotterdam) | Heading says "Epoxy Gietvloer", material says "polyurethaan gietvloer" | Title: "Betonherstel en gietvloer" + flag. |
| Work area | "Noord-Holland en omgevingen" vs "heel Nederland en het buitenland" vs "Amsterdam, Utrecht, Rotterdam en Den Haag" | Noord-Holland focus + projects across NL (per project locations). |
| Tagline | Logo says "Aannemer&Detachering"; site presents as betonspecialist | Keep logo as-is. |

## 5. Existing reviews found (real, but NOT used yet)

JouwWeb comment section on `/wat-doen-we` (public):
- Caroline (±1 jaar geleden): "Snel en vakkundig. Zetten net een stapje meer…" (positive)
- Maringo, Arjan van Napel, Barend K (6 jaar geleden): short positives
- **Willem Verhaar (18 dagen geleden): negative, unanswered** complaint about gutter cleaning (not their core service — possibly misdirected)
- Rating widget: 3.5 sterren / 34 stemmen

Per brief: no reviews are published in the demo. Listed in PLACEHOLDERS as "reviews to add after client consent — better source: Google Bedrijfsprofiel".

## 6. Gevonden problemen op de huidige site

(written in Dutch so it can be shown to the client)

1. **WhatsApp-knop werkt niet.** De link in de footer van elke pagina gebruikt `phone=628935347` zonder landcode 31. Bezoekers komen niet bij u uit.
2. **Privacyverklaring geeft een 404.** De link "Privacy Policy" in de footer van elke pagina leidt naar een niet-bestaande pagina. Voor een bedrijf dat formulieren met persoonsgegevens en foto's ontvangt is dat een AVG-risico.
3. **"Projecten" in de footer opent de Werkwijze-pagina**, net als de footerlink "Balkonreparatie". De echte projectenpagina staat op `/projecten-1`.
4. **Dubbele URL's:** `/koolstof-lijmwapening` = `/constructie-verstevigingen`, `/contact/contact-1` = `/offerte-aanvragen-1`, `/projecten` vs `/projecten-1`. Dit verdeelt SEO-waarde.
5. **Google Ads-landingspagina (Vloercoatings) heeft geen formulier boven de vouw**, geen telefoonnummer in beeld en verwijst naar "het filmpje hieronder" dat er niet staat.
6. **Geen conversiemeting op het formulier.** Google Ads kan daardoor niet optimaliseren op echte aanvragen, alleen op klikken.
7. **Meta-titels en -omschrijvingen zijn keyword-lijsten**, bv. "Vloercoating Slijtlaag Brug Tunnel Woning Betonreparatie Betononderhoud" en een description met ±30 losse zoekwoorden plus "ZZP Freelancers". De Over ons-pagina heeft als titel "Betoninjectie Vochtweringen beton lekkage". De homepage heeft géén meta-description.
8. **Wisselende aanspreekvorm:** "jouw woning", "wat wij voor jou kunnen betekenen" naast "u".
9. **Spelfouten:** "op elk schaal" (paginatitel homepage!), "beschermd" → beschermt, "Expoxy", "verlengt" → verlengd, "opzoek" → op zoek, "bewapening" → wapening, "overlast … geringe", "stalen fundering (bewapening)", "haar stroefheid", "dooizout".
10. **Losse templatezinnen:** "…streven naar uitmuntendheid… bijdragen aan jouw succes." staat zonder context op de homepage en de constructiepagina.
11. **Publieke reactiesectie met een onbeantwoorde negatieve reactie** (18 dagen oud) en een "De beste Prijsgarantie – Juist/Onjuist"-stemwidget op de dienstenpagina. Dat ziet een VvE-bestuur ook.
12. **Tegenstrijdige claims:** 25 vs 35 jaar ervaring, "24/7 beschikbaar" vs telefonisch ma–vr 07:30–17:30, gmail-adres in de gestructureerde data.
13. **Meerdere H1's per pagina** (tot 3), geen alt-teksten op afbeeldingen.
14. **Copyright © 2021.**
15. **Afbeeldingen van 1,5–3,4 MB** (PNG) op de projectenpagina → trage laadtijd op mobiel, precies waar Ads-verkeer binnenkomt.
16. **Garagevloeren-pagina dupliceert** de vloercoating-tekst (duplicate content).
17. **Offerteformulier = contactformulier**; geen begeleiding, geen spoedroute, geen kwalificatie (VvE/aantal balkons/urgentie).

18. **Foto van een ander bedrijf op de Gevelreiniging-pagina.** De vóór/na-foto van de gevel (`gevel-voor-en-na-standard.jpg`) draagt het watermerk "Lek-Tech – vochtvrij, duurzaam en gezond". Dat is een auteursrechtrisico en het ondermijnt de geloofwaardigheid. In de nieuwe site is deze foto weggelaten.
19. **Verkeerde koppen en volgorde bij foto's:** de collage van het Helmond-project staat andersom (links hersteld, rechts beschadigd), en de foto's naast "Betonrot herstellen" tonen deels al herstelde onderdelen.

## 7. Build decisions and findings (added during build)

- **Images:** downloaded and re-encoded to WebP (83 files, ~6 MB total, largest ~130 KB), not hotlinked. The JouwWeb resizer ignores `width`, so hotlinking would have loaded 1.5–3.4 MB PNGs.
- **Before/after pairs** have been checked by eye. The following numbered project collages are real L/R before/after splits and get a slider: 2, 4 (reversed in source, fixed), 5, 6, 8, 9, 13, 16, 17, 18. Collages 1, 10, 12, 19, 20 turned out to be two views of the *finished* job, not before/after, so they're shown as a normal photo. 3, 7, 11, 14, 15 are multi-panel collages.
- **Extra real before/after pairs** found among the betonreparatie page photos: kolomkop (`83e5eae7` → `8b0f3851`) and draagconsole (`b9797128` → `4b4b0df9`). Both are now used as sliders on `betonreparatie.html`.
- **Coating UV conflict:** the vloercoatings page presents PU as *the* UV-resistant option, compared with epoxy, but the project texts call their epoxy system "UV-bestendig". The comparison table follows the vloercoatings page and marks epoxy UV as "Beperkt*" for client confirmation.
- **Possible stock image:** `dienst-garagevloeren.webp` (source `parkeergaragevloerr-standard.jpg`) looks like a render/stock photo. Confirm ownership.
- **Unverified claims left out entirely:** 10 jaar garantie, 25/35 jaar ervaring, 24/7 beschikbaar, "Prijsgarantie", any review or rating.
- **Logo:** traced to SVG (`logo-betontechnieken020.svg` stacked, `logo-horizontal.svg` for the header, `logo-emblem.svg` as the icon) plus a transparent PNG. The horizontal lockup is a new arrangement of the existing parts, so the client should approve it. **Upsell: "uw logo als scherpe vector"**; the original only exists as a JPG.
- **Fonts self-hosted** (Archivo variable, 88 KB) instead of Google Fonts: faster, and no AVG issue with loading fonts from Google's servers.
- **Maps and YouTube** load only after a click (facade), so no third-party cookies before consent.
- **Pages are generated** from `~/betontechnieken020-build/generate-pages.py` (outside the repo, so the repo stays flat and deploy-clean). The HTML output is plain static files; small copy edits can be made directly in the HTML.

## 8. Needs client confirmation

See `PLACEHOLDERS.md`.
