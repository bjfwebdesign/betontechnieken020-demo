# PLACEHOLDERS: to confirm with Betontechnieken020

Everything below is either unverified, written by BJF Webdesign, or needs an account or ID from the client.
Search the code for `PLACEHOLDER` to find each spot. Items visitors can see carry a small red `*`.

## Claims and content

- [ ] **"10 jaar garantie"**: not found anywhere on the current site. It is **not shown** in the demo. If they confirm it (and on what: coatings? all work?), it's a strong addition to the trust bar and the coatings page.
- [ ] **Years of experience**: the current site says both "25 jaar" and "35 jaar". Not shown. Which is correct?
- [ ] **24/7 / spoed availability**: the old meta tags say "24/7 beschikbaar", but phone hours are ma–vr 07:30–17:30. The demo shows only the office hours.
- [ ] **Callback time** on the Ads quick form: "Binnen werktijden meestal dezelfde dag*" (`vloercoatings.html`).
- [ ] **Geveltechnieken020 relation**: "dochterbedrijf" (as on the current site) or sister company?
- [ ] **20 project titles** (`site-data.js`, `titleEditorial: true`): short titles summarised from each project's own text. Marked `*` on the site.
- [ ] **Project 20 (Rotterdam)**: the heading says "Epoxy gietvloer", the material text says "polyurethaan gietvloer". Which is it?
- [ ] **Two projects without location**: the balkon-PU project and the balkon-epoxy-antislip project.
- [ ] **Coating comparison table** (`vloercoatings.html`): values marked `*` are my interpretation, especially epoxy UV resistance (the project texts call their epoxy "UV-bestendig") and all acrylate values except strength, wear and liquid resistance.
- [ ] **Coating helper logic** (`app.js`, `coatingAdvice`): which system is recommended per surface and use.
- [ ] **Schadecheck advice texts** (`app.js`, `SCHADECHECK_RULES` at the top): all derived from their own service pages. The client can adjust them in one place.
- [ ] **FAQ answers written by BJF Webdesign** (marked "Concepttekst" on the page):
  - "Wat moet ik aanleveren voor een offerte?"
  - "Kunnen jullie met spoed komen?"
  - "Wat kost beton injecteren?" (`beton-injecteren.html`)
- [ ] **Spoed safety advice** in the schadecheck: "Zet het gebied zo nodig af."
- [ ] **Horizontal logo lockup**: new arrangement of the existing logo, for the header.
- [ ] **Photo ownership**: `dienst-garagevloeren.webp` may be stock. The Lek-Tech watermarked photo has already been removed.

## Accounts, IDs and legal

- [ ] **Form endpoint**: `FORM_ENDPOINT` at the top of `app.js`. Until it's filled, all forms run in demo mode: the visitor's e-mail app opens with a clean summary, and photos can be sent via WhatsApp.
  - **File uploads (situation photos) need a paid tier** on both Formspree and Web3Forms; check current pricing.
  - **Recommendation: Formspree (paid plan with file uploads).** It accepts the multipart `FormData` the schadecheck already sends (up to 5 photos, compressed client-side to max 1600px), has spam filtering, and sends a readable e-mail. Web3Forms Pro works too.
- [ ] **Google Tag Manager container ID**: paste the GTM snippet into the `<head>` of every page (or ask BJF Webdesign to do it). The site already pushes a `dataLayer` event on every lead:
  - `offerte_aanvraag` with `form` (`schadecheck` / `quick`), `service`, `services`, `client_type`, `urgency`, `gclid`
  - `contact_aanvraag` for the contact form
- [ ] **Google Ads conversion ID**: `ADS_CONVERSION` in `app.js` (format `AW-XXXXXXXXX/xxxxxxxx`). Or configure the conversion in GTM on the `offerte_aanvraag` event.
- [ ] **KvK and btw-nummer** for the footer (`<!-- PLACEHOLDER -->` in every footer).
- [ ] **Privacyverklaring** (`privacy.html`): a draft is provided. It needs the KvK number, retention periods and processors (form service, Google). The current site links to a privacy page that returns 404.
- [ ] **Domain**: canonical URLs, `sitemap.xml` and the schema.org data assume the site will live on `https://www.betontechnieken020.nl/`. Change `SITE` in the generator if the domain differs.

## Reviews to add (none are shown now)

- [ ] **Google Bedrijfsprofiel reviews**: the best source. With permission, add 3–5 real reviews with name and date on the home page and the coatings page. A review widget or `AggregateRating` markup can follow.
- [ ] The current site has JouwWeb comments (Caroline, Maringo, Arjan van Napel, Barend K), a 3.5★ widget (34 votes) and one **unanswered negative comment** (Willem Verhaar, 18 days old). Ask whether they want any of the positive ones used.
- [ ] **Client logos / references** (VvE's, corporaties, Diergaarde Blijdorp?): only with permission.
