/* Betontechnieken020 — app.js (vanilla, geen dependencies) */

/* =====================================================================
   INSTELLINGEN — door de klant aan te passen
   ===================================================================== */

// PLACEHOLDER: form endpoint (bijv. Formspree/Web3Forms). Leeg = demo-modus met mailto + WhatsApp.
const FORM_ENDPOINT = '';
// PLACEHOLDER: GTM / Google Ads conversion ID — vul in zodra het account bekend is, bv. 'AW-123456789/AbC-D_efG'
const ADS_CONVERSION = '';

const CONTACT = {
  phone: '+31202101904',
  phoneLabel: '020 210 1904',
  email: 'info@betontechnieken020.nl',
  whatsapp: '31628935347' // correct: met landcode 31 (oude site miste die)
};

/* Schadecheck: probleem → dienst-regels.
   Per gekozen probleem wordt de EERSTE regel gebruikt waarvan (optioneel) de locatie overeenkomt.
   services = id's uit window.SERVICES. text = uitleg in gewone taal op het resultaatscherm. */
const SCHADECHECK_RULES = [
  // --- betonrot (afbrokkelend beton / roestvlekken) ---
  { problem: 'betonrot', locations: ['balkon'], services: ['betonreparatie', 'vloercoatings'],
    text: 'Afbrokkelend beton en roest op een balkon of galerij wijzen meestal op betonrot. Wij herstellen dit volgens CUR-Aanbeveling 118 en beschermen het daarna met een waterdicht coatingsysteem.' },
  { problem: 'betonrot', locations: ['constructie'], services: ['betonreparatie', 'constructie'],
    text: 'Betonrot aan een kolom, ligger of plafond tast de draagkracht aan. Wij herstellen constructief met krimpgecompenseerde reparatiemortel (CUR-Aanbeveling 118) en beoordelen met onze eigen betonconstructeur of versteviging nodig is.' },
  { problem: 'betonrot', locations: ['parkeergarage'], services: ['betonreparatie', 'garagevloeren'],
    text: 'Roestvlekken en afbrokkelend beton in een parkeergarage ontstaan vaak door vocht en dooizout. Wij herstellen het beton en beschermen de vloer daarna met een coating tegen vocht, dooizout en corrosie.' },
  { problem: 'betonrot', services: ['betonreparatie'],
    text: 'Afbrokkelend beton met roestvlekken wijst meestal op betonrot: de wapening roest, zet uit en drukt het beton kapot. Wij verwijderen het aangetaste beton, behandelen de wapening tegen corrosie en herstellen volgens CUR-Aanbeveling 118.' },

  // --- lekkage / vocht ---
  { problem: 'lekkage', locations: ['kelder'], services: ['injecteren'],
    text: 'Vocht of lekkage in een kelder zit meestal in de kim (aansluiting vloer en wand), in scheuren of rond doorvoeringen. Wij injecteren deze waterdicht (kelderafdichting) en kunnen wanden afdichten met een flexibele afdichtmortel die bestand is tegen 3 bar waterdruk.' },
  { problem: 'lekkage', locations: ['balkon'], services: ['betonreparatie', 'vloercoatings'],
    text: 'Een lekkend balkon of lekkende galerij verhelpen wij met betonherstel en daarna een waterdicht vloercoatingsysteem, zodat er geen water meer in de constructie trekt.' },
  { problem: 'lekkage', locations: ['parkeergarage'], services: ['injecteren', 'garagevloeren'],
    text: 'Watervoerende scheuren in een parkeergarage injecteren wij onder hoge druk met flexibele injectiehars (EN 1504-5). Een scheuroverbruggende coating voorkomt daarna nieuwe vochtintreding.' },
  { problem: 'lekkage', locations: ['gevel'], services: ['gevelreiniging', 'injecteren'],
    text: 'Vocht via de gevel pakken wij aan door te reinigen en te impregneren, zodat water niet meer wordt opgenomen. Voor voegwerk en metselwerkherstel verwijzen wij naar ons dochterbedrijf Geveltechnieken020.' },
  { problem: 'lekkage', services: ['injecteren'],
    text: 'Lekkende constructies maken wij waterdicht door scheuren en holle ruimten onder druk te injecteren met flexibele injectiehars.' },

  // --- scheuren ---
  { problem: 'scheuren', locations: ['constructie'], services: ['injecteren', 'constructie'],
    text: 'Scheuren in een kolom, ligger of plafond vullen wij constructief met 2-componentenhars of een cementsuspensie. Onze betonconstructeur beoordeelt of extra versteviging, zoals koolstof-lijmwapening, nodig is.' },
  { problem: 'scheuren', locations: ['gevel'], services: ['betonreparatie'],
    text: 'Scheuren in betonnen gevelonderdelen herstellen wij zelf. Voor scheurherstel in metselwerk verwijzen wij naar ons dochterbedrijf Geveltechnieken020.' },
  { problem: 'scheuren', services: ['injecteren', 'betonreparatie'],
    text: 'Scheuren injecteren wij: waterdicht met flexibele hars, of constructief met 2-componentenhars. Komt de scheur door roestende wapening, dan herstellen wij eerst het beton.' },

  // --- gladde of versleten vloer ---
  { problem: 'vloer', locations: ['parkeergarage'], services: ['garagevloeren'],
    text: 'Gladde parkeergaragevloeren maken wij veiliger met een antislip-coatingsysteem met ingestrooide antisliplaag, zoals DeckCoat. Dat helpt auto’s én voetgangers, ook bij regen of sneeuw.' },
  { problem: 'vloer', locations: ['bedrijfsvloer'], services: ['vloercoatings'],
    text: 'Een versleten bedrijfsvloer krijgt met een epoxy-coating of zelfnivellerende gietlaag weer een naadloze, slijtvaste en chemisch bestendige toplaag, ook als antislip.' },
  { problem: 'vloer', services: ['vloercoatings'],
    text: 'Een gladde of versleten vloer krijgt met een antislip-vloercoating weer grip en een beschermde, makkelijk te onderhouden toplaag.' },

  // --- nieuwe vloer / coating ---
  { problem: 'coating', locations: ['balkon'], services: ['vloercoatings'],
    text: 'Voor balkons en galerijen adviseren wij meestal een UV-bestendig polyurethaan- of epoxy-antislipsysteem. Bij particulieren coaten wij een balkon vaak binnen 1 dag, en na 60 minuten is het weer beloopbaar.' },
  { problem: 'coating', locations: ['parkeergarage'], services: ['garagevloeren'],
    text: 'Voor parkeergarages zijn er starre coatings, antislipcoatings en scheuroverbruggende coatings. Welke past, bepalen wij na inspectie van de vloer.' },
  { problem: 'coating', services: ['vloercoatings'],
    text: 'Voor elke ruimte is er een passend systeem: epoxy (hard, chemisch bestendig), polyurethaan (flexibel, UV-bestendig) of acrylaat (slijtvast, antislip). Wij adviseren na inspectie van de ondergrond.' },

  // --- constructieve schade ---
  { problem: 'constructief', services: ['constructie', 'betonreparatie'],
    text: 'Constructieve schade herstellen wij met constructieve reparatiemortel, koolstof-lijmwapening of staalconsoles. De berekeningen maakt onze eigen betonconstructeur.' },

  // --- onderhoud / schilderwerk ---
  { problem: 'onderhoud', locations: ['gevel'], services: ['gevelreiniging'],
    text: 'Een vervuilde gevel reinigen wij door te stralen, waarna wij adviseren te impregneren. Complete gevelrenovaties voert ons dochterbedrijf Geveltechnieken020 uit.' },
  { problem: 'onderhoud', services: ['schilderwerken'],
    text: 'Beton schilderen wij na een goede voorbereiding: oneffenheden vullen, primer aanbrengen en daarna in één of twee lagen afwerken. Zo is het beton langer beschermd.' },

  // --- anders ---
  { problem: 'anders', services: [],
    text: 'Staat uw situatie er niet tussen? Geen probleem. Wij kijken op locatie en adviseren u vrijblijvend.' }
];

// Voor VvE's, woningcorporaties en vastgoedbeheerders tonen we ook totaal vastgoedonderhoud.
const ORG_TYPES = ['vve', 'corporatie', 'beheerder'];

/* Dienstpagina → voorinstelling van de schadecheck */
const SERVICE_PRESET = {
  betonreparatie: { problems: ['betonrot'] },
  vloercoatings: { problems: ['coating'] },
  injecteren: { problems: ['lekkage'] },
  constructie: { problems: ['constructief'] },
  garagevloeren: { problems: ['vloer'], locations: ['parkeergarage'] },
  schilderwerken: { problems: ['onderhoud'] },
  gevelreiniging: { problems: ['onderhoud'], locations: ['gevel'] },
  vastgoedonderhoud: { problems: ['onderhoud'] }
};

/* ===================================================================== */

(function () {
  'use strict';

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const ico = (id, cls = '') => `<svg class="ico ${cls}" aria-hidden="true" focusable="false"><use href="#i-${id}"/></svg>`;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const store = {
    get(k) { try { return JSON.parse(sessionStorage.getItem(k)); } catch (e) { return null; } },
    set(k, v) { try { sessionStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } },
    del(k) { try { sessionStorage.removeItem(k); } catch (e) { /* ignore */ } }
  };
  const SERVICES = window.SERVICES || [];
  const PROJECTS = window.PROJECTS || [];
  const svcById = (id) => SERVICES.find((s) => s.id === id);
  window.dataLayer = window.dataLayer || [];

  /* ---------- 1. Attributie: gclid / gbraid / wbraid / utm_* bewaren ---------- */
  const ATTR_KEYS = ['gclid', 'gbraid', 'wbraid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  const attr = (() => {
    const saved = store.get('b020_attr') || {};
    const qs = new URLSearchParams(location.search);
    let changed = false;
    ATTR_KEYS.forEach((k) => { if (qs.get(k)) { saved[k] = qs.get(k); changed = true; } });
    if (changed) {
      if (!saved.landing_page) saved.landing_page = location.pathname.split('/').pop() || 'index.html';
      store.set('b020_attr', saved);
    }
    return saved;
  })();
  const attrParams = () => {
    const p = new URLSearchParams();
    ATTR_KEYS.forEach((k) => { if (attr[k]) p.set(k, attr[k]); });
    return p;
  };
  // Interne links voorzien van de parameters, zodat ze ook zonder sessionStorage behouden blijven.
  function decorateLinks(root = document) {
    const p = attrParams();
    if (![...p.keys()].length) return;
    $$('a[href]', root).forEach((a) => {
      const href = a.getAttribute('href');
      if (!href || /^(https?:|mailto:|tel:|#|\/\/)/.test(href) || !/\.html/.test(href)) return;
      const [path, hash] = href.split('#');
      const [base, query] = path.split('?');
      const q = new URLSearchParams(query || '');
      p.forEach((v, k) => { if (!q.has(k)) q.set(k, v); });
      a.setAttribute('href', `${base}?${q.toString()}${hash ? '#' + hash : ''}`);
    });
  }
  function fillHiddenAttr(form) {
    ATTR_KEYS.concat('landing_page').forEach((k) => {
      let el = form.querySelector(`input[name="${k}"]`);
      if (!el) { el = document.createElement('input'); el.type = 'hidden'; el.name = k; form.appendChild(el); }
      el.value = attr[k] || '';
    });
  }

  /* ---------- 2. Header: mobiel menu + megamenu ---------- */
  function initHeader() {
    const toggle = $('.nav-toggle');
    const nav = $('#main-nav');
    const mq = window.matchMedia('(max-width: 960px)');
    const setMobile = () => {
      if (!nav || !toggle) return;
      if (mq.matches) { nav.hidden = toggle.getAttribute('aria-expanded') !== 'true'; }
      else { nav.hidden = false; toggle.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }
    };
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        const open = toggle.getAttribute('aria-expanded') !== 'true';
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
        nav.hidden = !open;
        document.body.style.overflow = open ? 'hidden' : '';
      });
      mq.addEventListener('change', setMobile);
      setMobile();
    }
    $$('[data-mega]').forEach((btn) => {
      const panel = document.getElementById(btn.getAttribute('aria-controls'));
      const set = (open) => { btn.setAttribute('aria-expanded', String(open)); panel.hidden = !open; };
      btn.addEventListener('click', (e) => { e.stopPropagation(); set(btn.getAttribute('aria-expanded') !== 'true'); });
      document.addEventListener('click', (e) => { if (!mq.matches && !panel.contains(e.target)) set(false); });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') { set(false); btn.focus(); } });
      panel.addEventListener('focusout', (e) => { if (!mq.matches && !panel.contains(e.relatedTarget) && e.relatedTarget !== btn) set(false); });
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggle && toggle.getAttribute('aria-expanded') === 'true') { toggle.click(); toggle.focus(); }
    });
  }

  /* ---------- 3. Voor/na-slider ---------- */
  function baHTML(before, after, alt, opts = {}) {
    const eager = opts.eager ? 'fetchpriority="high"' : 'loading="lazy"';
    return `<div class="ba" data-ba>
      <img class="ba-after" src="${esc(after)}" alt="${esc(alt)} — na" ${eager} decoding="async" width="800" height="600">
      <img class="ba-before" src="${esc(before)}" alt="${esc(alt)} — voor" ${eager} decoding="async" width="800" height="600">
      <span class="ba-label ba-label--before">Vóór</span><span class="ba-label ba-label--after">Na</span>
      <div class="ba-handle" aria-hidden="true"><span class="ba-knob"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7l-5 5 5 5M15 7l5 5-5 5"/></svg></span></div>
      <input type="range" min="0" max="100" value="50" step="1" aria-label="Vergelijk vóór en na: ${esc(alt)}" aria-valuetext="50% vóór">
    </div>`;
  }
  function initBA(root = document) {
    $$('[data-ba]', root).forEach((el) => {
      if (el.dataset.ready) return;
      el.dataset.ready = '1';
      const input = $('input[type="range"]', el);
      const set = (v) => {
        el.style.setProperty('--pos', v + '%');
        input.setAttribute('aria-valuetext', `${Math.round(v)}% vóór zichtbaar`);
      };
      input.addEventListener('input', () => set(input.value));
      // Pointer: direct naar de aangeklikte positie (ook bij slepen op touch)
      const fromPointer = (e) => {
        const r = el.getBoundingClientRect();
        const v = Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100));
        input.value = v; set(v);
      };
      let drag = false;
      el.addEventListener('pointerdown', (e) => { drag = true; fromPointer(e); });
      window.addEventListener('pointerup', () => { drag = false; });
      el.addEventListener('pointermove', (e) => { if (drag) fromPointer(e); });
      set(input.value);
      // Eén rustige hint-beweging bij eerste zichtbaarheid van de hero-slider
      if (el.hasAttribute('data-ba-hint') && !reduceMotion && 'IntersectionObserver' in window) {
        const io = new IntersectionObserver(([en]) => {
          if (!en.isIntersecting) return;
          io.disconnect();
          const seq = [50, 35, 62, 50]; let i = 0;
          el.querySelector('.ba-before').style.transition = 'clip-path .5s ease';
          el.querySelector('.ba-handle').style.transition = 'left .5s ease';
          const tick = () => { if (i >= seq.length) { el.querySelector('.ba-before').style.transition = ''; el.querySelector('.ba-handle').style.transition = ''; return; } input.value = seq[i]; set(seq[i]); i++; setTimeout(tick, 520); };
          setTimeout(tick, 700);
        }, { threshold: .6 });
        io.observe(el);
      }
    });
  }

  /* ---------- 4. Reveal (rustig, alleen op gemarkeerde elementen) ---------- */
  function initReveal(root = document) {
    const els = $$('.reveal:not(.is-in)', root);
    if (reduceMotion || !('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('is-in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach((e) => io.observe(e));
  }

  /* ---------- 5. Projecten ---------- */
  const svcName = (id) => (svcById(id) || {}).name || id;
  const projThumb = (p) => p.after || p.images[0];
  function projectCard(p, headingLevel = 3) {
    const h = `h${headingLevel}`;
    return `<li class="reveal"><button type="button" class="project-card" data-project="${esc(p.id)}" aria-haspopup="dialog">
      <span class="thumb"><img src="${esc(projThumb(p))}" alt="" loading="lazy" decoding="async" width="600" height="375">
      ${p.urgent ? `<span class="badge-urgent">${ico('alert')}Spoedreparatie</span>` : ''}</span>
      <span class="body">
        <${h}>${esc(p.title)}<span class="star" title="Redactionele titel, nog te bevestigen">*</span></${h}>
        <span class="project-meta">${p.location ? `<span>${ico('pin')}${esc(p.location)}</span>` : ''}${p.before ? `<span>${ico('compare')}Vóór/na</span>` : ''}</span>
        <ul class="tags" aria-label="Diensten">${p.services.map((s) => `<li>${esc(svcName(s))}</li>`).join('')}</ul>
      </span>
    </button></li>`;
  }
  function renderProjects(container, list, level) {
    container.innerHTML = list.map((p) => projectCard(p, level)).join('');
    initReveal(container);
  }

  // Lightbox
  let lbList = [];
  let lbIndex = 0;
  let lbReturn = null;
  function lightbox() {
    let dlg = $('#project-dialog');
    if (dlg) return dlg;
    dlg = document.createElement('dialog');
    dlg.id = 'project-dialog';
    dlg.className = 'lightbox';
    dlg.setAttribute('aria-labelledby', 'lb-title');
    document.body.appendChild(dlg);
    dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('close', () => { if (lbReturn) lbReturn.focus(); });
    dlg.addEventListener('keydown', (e) => {
      if (e.target.matches('input[type="range"]')) return;
      if (e.key === 'ArrowRight') { showProject(lbIndex + 1); }
      if (e.key === 'ArrowLeft') { showProject(lbIndex - 1); }
    });
    return dlg;
  }
  function showProject(i) {
    if (!lbList.length) return;
    lbIndex = (i + lbList.length) % lbList.length;
    const p = lbList[lbIndex];
    const dlg = lightbox();
    const media = p.before
      ? baHTML(p.before, p.after, p.title) + `<div class="lb-thumbs"><button type="button" aria-pressed="true" data-lb-view="ba"><img src="${esc(p.after)}" alt="Vóór/na-vergelijking"></button><button type="button" aria-pressed="false" data-lb-view="collage"><img src="${esc(p.images[0])}" alt="Originele fotocollage"></button></div>`
      : `<img class="lb-single" src="${esc(p.images[0])}" alt="${esc(p.title)} — projectfoto's" width="1200" height="800">`;
    dlg.innerHTML = `<button type="button" class="lb-close" aria-label="Sluiten">${ico('close')}</button>
      <div class="lb-inner">
        <div class="lb-media" data-lb-media>${media}</div>
        <div class="lb-text">
          <p class="small muted" style="margin:0 0 .35rem">Project ${lbIndex + 1} van ${lbList.length}${p.urgent ? ' · <strong style="color:var(--red-dark)">Spoedreparatie</strong>' : ''}</p>
          <h2 id="lb-title">${esc(p.title)}<span class="star">*</span></h2>
          <p class="project-meta">${p.location ? `<span>${ico('pin')}${esc(p.location)}</span>` : '<span>Locatie niet vermeld</span>'}${p.clientType ? `<span>${ico('building')}${esc(p.clientType)}</span>` : ''}</p>
          <h3>Uitgevoerde werkzaamheden</h3>
          <ol>${p.workSteps.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>
          ${p.materialsAndNorms.length ? `<h3>Materialen en normen</h3><ul class="checklist">${p.materialsAndNorms.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>` : ''}
          <h3>Diensten</h3>
          <ul class="tags">${p.services.map((s) => `<li><a href="${esc((svcById(s) || {}).url || 'projecten.html')}">${esc(svcName(s))}</a></li>`).join('')}</ul>
          <p class="editorial-note">* Titel redactioneel samengevat uit de projectomschrijving.</p>
          <div class="lb-nav">
            <button type="button" class="btn btn--ghost" data-lb-prev>${ico('arrow-left')}Vorige</button>
            <button type="button" class="btn btn--ghost" data-lb-next>Volgende${ico('arrow-right')}</button>
            <a class="btn" href="offerte.html?dienst=${esc(p.services[0])}">Vergelijkbaar project aanvragen</a>
          </div>
        </div>
      </div>`;
    $('.lb-close', dlg).addEventListener('click', () => dlg.close());
    $('[data-lb-prev]', dlg).addEventListener('click', () => showProject(lbIndex - 1));
    $('[data-lb-next]', dlg).addEventListener('click', () => showProject(lbIndex + 1));
    $$('[data-lb-view]', dlg).forEach((b) => b.addEventListener('click', () => {
      const m = $('[data-lb-media]', dlg);
      $$('[data-lb-view]', dlg).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      const old = $('.ba, .lb-single', m);
      const html = b.dataset.lbView === 'ba' ? baHTML(p.before, p.after, p.title) : `<img class="lb-single" src="${esc(p.images[0])}" alt="${esc(p.title)} — originele fotocollage" width="1200" height="800">`;
      old.insertAdjacentHTML('beforebegin', html); old.remove(); initBA(m);
    }));
    initBA(dlg);
    decorateLinks(dlg);
    if (!dlg.open) dlg.showModal();
    $('#lb-title', dlg).setAttribute('tabindex', '-1');
    $('.lb-close', dlg).focus();
  }
  function bindProjectClicks(container, listGetter) {
    container.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-project]');
      if (!btn) return;
      lbList = listGetter();
      lbReturn = btn;
      showProject(lbList.findIndex((p) => p.id === btn.dataset.project));
    });
  }

  function initProjectBlocks() {
    // Uitgelicht / gerelateerd
    $$('[data-projects]').forEach((c) => {
      const mode = c.dataset.projects;
      let list;
      if (mode === 'featured') {
        const ids = (c.dataset.ids || '').split(',');
        list = ids.map((id) => PROJECTS.find((p) => p.id === id)).filter(Boolean);
      } else {
        const tags = mode.split(',');
        list = PROJECTS.filter((p) => p.services.some((s) => tags.includes(s)))
          .sort((a, b) => (tags.includes(b.services[0]) - tags.includes(a.services[0])) || (!!b.before - !!a.before));
        const max = parseInt(c.dataset.max || '3', 10);
        list = list.slice(0, max);
      }
      if (!list.length) { const sec = c.closest('[data-hide-empty]'); if (sec) sec.hidden = true; return; }
      renderProjects(c, list, parseInt(c.dataset.level || '3', 10));
      bindProjectClicks(c, () => list);
    });

    // Projectenpagina met filters
    const grid = $('#project-grid');
    if (!grid) return;
    const state = { service: 'alle', location: 'alle', urgent: false };
    const qs = new URLSearchParams(location.search);
    if (qs.get('dienst') && svcById(qs.get('dienst'))) state.service = qs.get('dienst');
    if (qs.get('spoed')) state.urgent = true;

    // Kaarten, dienstchips en locaties staan statisch in de HTML (SEO + geen layout shift).
    const svcChips = $('#filter-service');
    const locSel = $('#filter-location');
    const urgentBtn = $('#filter-urgent');
    const count = $('#filter-count');

    const filtered = () => PROJECTS.filter((p) =>
      (state.service === 'alle' || p.services.includes(state.service)) &&
      (state.location === 'alle' || p.location === state.location) &&
      (!state.urgent || p.urgent));
    const apply = () => {
      $$('[data-f="service"]', svcChips).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.v === state.service)));
      urgentBtn.setAttribute('aria-pressed', String(state.urgent));
      locSel.value = state.location;
      const list = filtered();
      const ids = new Set(list.map((p) => p.id));
      $$('li[data-id]', grid).forEach((li) => { li.hidden = !ids.has(li.dataset.id); });
      $('[data-empty]', grid).hidden = list.length > 0;
      count.textContent = `${list.length} ${list.length === 1 ? 'project' : 'projecten'} getoond`;
    };
    svcChips.addEventListener('click', (e) => { const b = e.target.closest('[data-f]'); if (!b) return; state.service = b.dataset.v; apply(); });
    locSel.addEventListener('change', () => { state.location = locSel.value; apply(); });
    urgentBtn.addEventListener('click', () => { state.urgent = !state.urgent; apply(); });
    grid.addEventListener('click', (e) => { if (e.target.closest('[data-reset]')) { state.service = 'alle'; state.location = 'alle'; state.urgent = false; apply(); svcChips.querySelector('button').focus(); } });
    bindProjectClicks(grid, filtered);
    apply();
  }

  /* ---------- 6. FAQ: accordion + zoeken ---------- */
  function initFAQ() {
    $$('.faq-q').forEach((b) => {
      b.addEventListener('click', () => {
        const open = b.getAttribute('aria-expanded') !== 'true';
        b.setAttribute('aria-expanded', String(open));
        document.getElementById(b.getAttribute('aria-controls')).hidden = !open;
      });
    });
    const input = $('#faq-search');
    if (!input) return;
    const items = $$('.faq-item');
    const status = $('#faq-status');
    const cats = $$('[data-faq-cat]');
    let cat = 'alle';
    items.forEach((it) => { it.dataset.text = it.textContent.toLowerCase(); });
    const run = () => {
      const q = input.value.trim().toLowerCase();
      let n = 0;
      items.forEach((it) => {
        const show = (!q || it.dataset.text.includes(q)) && (cat === 'alle' || it.dataset.cat === cat);
        it.hidden = !show;
        if (show) n++;
        const btn = $('.faq-q', it), ans = document.getElementById(btn.getAttribute('aria-controls'));
        if (q && show) { btn.setAttribute('aria-expanded', 'true'); ans.hidden = false; }
      });
      $$('[data-faq-group]').forEach((g) => { g.hidden = !$$('.faq-item', g).some((i) => !i.hidden); });
      status.textContent = q || cat !== 'alle' ? `${n} ${n === 1 ? 'vraag' : 'vragen'} gevonden` : '';
    };
    input.addEventListener('input', run);
    cats.forEach((c) => c.addEventListener('click', () => { cat = c.dataset.faqCat; cats.forEach((x) => x.setAttribute('aria-pressed', String(x === c))); run(); }));
  }

  /* ---------- 7. Formulieren: versturen, tracking, fallback ---------- */
  function trackLead(event, data) {
    window.dataLayer.push(Object.assign({ event }, data, { gclid: attr.gclid || undefined }));
    // PLACEHOLDER: GTM / Google Ads conversion ID — activeert zodra ADS_CONVERSION en gtag aanwezig zijn
    if (ADS_CONVERSION && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', { send_to: ADS_CONVERSION });
    }
  }
  async function send(formData) {
    if (!FORM_ENDPOINT) return { demo: true };
    const res = await fetch(FORM_ENDPOINT, { method: 'POST', body: formData, headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error('Versturen mislukt (' + res.status + ')');
    return { demo: false };
  }
  const mailto = (subject, body) => `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const waLink = (text) => `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const PHONE_RE = /^[+()\d\s-]{8,}$/;

  function setError(field, msg) {
    const wrap = field.closest('.field');
    const err = wrap && $('.field-error', wrap);
    if (!wrap || !err) return;
    wrap.classList.toggle('has-error', !!msg);
    err.hidden = !msg;
    err.innerHTML = msg ? ico('alert', 'ico--sm') + esc(msg) : '';
    field.setAttribute('aria-invalid', msg ? 'true' : 'false');
  }
  function validateField(el) {
    const v = el.value.trim();
    let msg = '';
    if (el.required && !v) msg = el.dataset.msg || 'Dit veld is verplicht.';
    else if (v && el.type === 'email' && !EMAIL_RE.test(v)) msg = 'Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl.';
    else if (v && el.type === 'tel' && !PHONE_RE.test(v)) msg = 'Vul een geldig telefoonnummer in, bijvoorbeeld 06 12345678.';
    setError(el, msg);
    return !msg;
  }
  function validateForm(form) {
    const fields = $$('input[required], select[required], textarea[required], input[type="email"], input[type="tel"]', form).filter((f) => !f.closest('[hidden]'));
    let first = null;
    fields.forEach((f) => { if (!validateField(f) && !first) first = f; });
    if (first) first.focus();
    return !first;
  }
  function liveValidation(form) {
    form.addEventListener('blur', (e) => { if (e.target.matches('input, select, textarea') && e.target.getAttribute('aria-invalid') !== null) validateField(e.target); }, true);
    form.addEventListener('input', (e) => { if (e.target.getAttribute('aria-invalid') === 'true') validateField(e.target); });
  }

  function initSimpleForms() {
    $$('form[data-form]').forEach((form) => {
      fillHiddenAttr(form);
      liveValidation(form);
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!validateForm(form)) return;
        const kind = form.dataset.form; // 'quick' | 'contact'
        const fd = new FormData(form);
        if (fd.get('website')) return; // honeypot
        const status = $('.form-status', form);
        const lines = [];
        fd.forEach((v, k) => { if (v && k !== 'website') lines.push(`${k}: ${v}`); });
        try {
          const r = await send(fd);
          trackLead(kind === 'quick' ? 'offerte_aanvraag' : 'contact_aanvraag', { form: kind, service: fd.get('dienst') || (kind === 'quick' ? 'vloercoatings' : ''), client_type: fd.get('klanttype') || '' });
          status.hidden = false;
          status.className = 'form-status form-status--ok';
          if (r.demo) {
            const subj = kind === 'quick' ? 'Terugbelverzoek vloercoating' : 'Contactformulier website';
            status.innerHTML = `<p><strong>Bijna klaar.</strong> Uw e-mailprogramma opent met uw bericht. Verstuur die e-mail om de aanvraag af te ronden.</p><p class="small">Liever direct contact? Bel <a href="tel:${CONTACT.phone}">${CONTACT.phoneLabel}</a> of <a href="${waLink(subj + '\n' + lines.join('\n'))}" target="_blank" rel="noopener">stuur een WhatsApp</a>.</p>`;
            location.href = mailto(subj, lines.join('\n'));
          } else {
            status.innerHTML = '<p><strong>Bedankt, uw aanvraag is verstuurd.</strong> Wij nemen binnen werktijden contact met u op.</p>';
            form.reset(); fillHiddenAttr(form);
          }
          status.setAttribute('tabindex', '-1'); status.focus();
        } catch (err) {
          status.hidden = false; status.className = 'form-status callout';
          status.innerHTML = `<p><strong>Het versturen is niet gelukt.</strong> Probeer het opnieuw of bel ons op <a href="tel:${CONTACT.phone}">${CONTACT.phoneLabel}</a>.</p>`;
        }
      });
    });
  }

  /* ---------- 8. Welke coating past bij u? ---------- */
  const COATINGS = {
    epoxy: { name: 'Epoxy-coating', col: 'epoxy' },
    pu: { name: 'Polyurethaan-coating (PU)', col: 'pu' },
    acrylaat: { name: 'Acrylaat-coating', col: 'acrylaat' },
    deckcoat: { name: 'DeckCoat-antislipsysteem', col: null },
    gietvloer: { name: 'Zelfnivellerende gietvloer', col: 'epoxy' }
  };
  function coatingAdvice(surface, uv, chem) {
    if (surface === 'parkeergarage') return { key: 'deckcoat', why: 'Parkeergaragevloeren zijn vaak glad, zeker bij regen of sneeuw. Het DeckCoat-systeem krijgt een ingestrooide antisliplaag en is gemaakt voor parkeergarages met gemiddelde verkeersbelasting.', alt: 'Bij lekkage of scheuren: een scheuroverbruggende coating.', location: 'parkeergarage' };
    if (surface === 'productie') return chem
      ? { key: 'epoxy', why: 'Epoxy is zeer hard en bestand tegen oliën, chemicaliën en chemisch reinigen. Voor levensmiddelen passen wij een oplosmiddelvrij, chemisch bestendig antislipsysteem toe, zoals bij Diergaarde Blijdorp.', alt: 'Voor opslag en productie ook als vloeistofdichte gietlaag.', location: 'bedrijfsvloer' }
      : { key: 'gietvloer', why: 'Een zelfnivellerende gietvloer geeft een naadloze, vloeistofdichte en onderhoudsarme vloer voor opslag, logistiek en productie, in alle RAL- en NCS-kleuren.', alt: 'Epoxy als er toch met oliën of chemicaliën gewerkt wordt.', location: 'bedrijfsvloer' };
    if (surface === 'garage') return chem
      ? { key: 'epoxy', why: 'In een garage of werkplaats met olie en vet is epoxy de sterkste keuze: zeer hard, bestand tegen krassen, oliën en chemisch reinigen.', alt: 'Acrylaat als antislip en slijtvastheid voorop staan.', location: 'bedrijfsvloer' }
      : { key: 'acrylaat', why: 'Acrylaat is erg sterk en slijtvast, bestand tegen vloeistoffen en goed als antislip uit te voeren. Dat past bij een intensief gebruikte vloer zonder chemicaliën.', alt: 'Epoxy als er toch olie of chemicaliën op de vloer komen.', location: 'bedrijfsvloer' };
    if (surface === 'balkon') return chem
      ? { key: 'epoxy', why: 'Op een balkon of galerij met vet of vervuiling kiest u voor een epoxy-antislipsysteem: hard, waterdicht en makkelijk schoon te houden.', alt: 'Polyurethaan als flexibiliteit en UV-bestendigheid belangrijker zijn.', location: 'balkon' }
      : { key: 'pu', why: 'Buiten, in zon en regen, werkt polyurethaan het best: flexibel, UV-bestendig, waterdicht en scheuroverbruggend. Voor particulieren coaten wij een balkon vaak binnen 1 dag, en na 60 minuten is het weer beloopbaar.', alt: 'Epoxy-antislip als de vloer extra hard moet zijn.', location: 'balkon' };
    // woning
    if (chem) return { key: 'epoxy', why: 'Komen er oliën of schoonmaakmiddelen op de vloer, dan is epoxy de veiligste keuze door de hoge chemische bestendigheid.', alt: 'Polyurethaan voor meer loopcomfort.', location: 'woning' };
    return { key: 'pu', why: uv ? 'Polyurethaan is UV-bestendig, verkleurt daardoor minder en loopt comfortabeler dan epoxy. Ideaal in woningen met veel daglicht.' : 'Polyurethaan is flexibeler en zachter dan epoxy en verhoogt het loopcomfort. Daarom is het de standaardkeuze voor woningen.', alt: 'Epoxy als de vloer extra hard moet zijn.', location: 'woning' };
  }
  function initCoatingHelper() {
    const form = $('#coating-helper');
    if (!form) return;
    const out = $('#helper-result');
    const table = $('#coating-compare');
    const run = () => {
      const surface = (form.querySelector('input[name="surface"]:checked') || {}).value;
      const uvEl = form.querySelector('input[name="uv"]:checked');
      const chemEl = form.querySelector('input[name="chem"]:checked');
      // Stapsgewijs tonen
      $$('[data-helper-step]', form).forEach((fs) => {
        const n = +fs.dataset.helperStep;
        fs.hidden = (n === 2 && !surface) || (n === 3 && (!surface || !uvEl));
      });
      if (!surface || !uvEl || !chemEl) { out.hidden = true; return; }
      const a = coatingAdvice(surface, uvEl.value === 'ja', chemEl.value === 'ja');
      const c = COATINGS[a.key];
      const q = new URLSearchParams({ dienst: surface === 'parkeergarage' ? 'garagevloeren' : 'vloercoatings', coating: c.name, locatie: a.location });
      out.hidden = false;
      out.innerHTML = `<h3>Ons advies: ${esc(c.name)}</h3><p>${esc(a.why)}</p><p class="small muted">Alternatief: ${esc(a.alt)} Indicatief advies. De definitieve keuze maken wij na inspectie van de ondergrond.</p>
        <div class="btn-row"><a class="btn" href="offerte.html?${q.toString()}">Offerte aanvragen voor ${esc(c.name.toLowerCase())}</a><a class="btn btn--ghost" href="tel:${CONTACT.phone}">${ico('phone')}Bel ${CONTACT.phoneLabel}</a></div>`;
      decorateLinks(out);
      if (table) {
        $$('.is-hl', table).forEach((e) => e.classList.remove('is-hl'));
        if (c.col) $$(`[data-col="${c.col}"]`, table).forEach((e) => e.classList.add('is-hl'));
      }
      // quick form ruimte meenemen
      const qf = $('#quick-ruimte');
      if (qf) { const map = { balkon: 'Balkon of galerij', woning: 'Woning', garage: 'Garage of bedrijfsvloer', parkeergarage: 'Parkeergarage', productie: 'Productie of levensmiddelen' }; qf.value = map[surface] || qf.value; }
    };
    form.addEventListener('change', run);
    run();
    // Tabelkop-knoppen: kolom markeren
    if (table) $$('thead button', table).forEach((b) => b.addEventListener('click', () => {
      const col = b.dataset.colBtn;
      const on = !b.closest('th').classList.contains('is-hl');
      $$('.is-hl', table).forEach((e) => e.classList.remove('is-hl'));
      $$('thead button', table).forEach((x) => x.setAttribute('aria-pressed', 'false'));
      if (on) { $$(`[data-col="${col}"]`, table).forEach((e) => e.classList.add('is-hl')); b.setAttribute('aria-pressed', 'true'); }
    }));
  }

  /* ---------- 9. Video- en kaart-facade (geen third-party tot klik) ---------- */
  function initFacades() {
    $$('[data-yt]').forEach((b) => b.addEventListener('click', () => {
      const f = document.createElement('iframe');
      f.src = `https://www.youtube-nocookie.com/embed/${b.dataset.yt}?autoplay=1&rel=0&modestbranding=1`;
      f.title = b.dataset.title || 'Video';
      f.allow = 'autoplay; encrypted-media; picture-in-picture';
      f.allowFullscreen = true;
      b.replaceWith(f); f.focus();
    }));
    $$('[data-map]').forEach((b) => b.addEventListener('click', () => {
      const f = document.createElement('iframe');
      f.className = 'map';
      f.src = `https://www.google.com/maps?q=${encodeURIComponent(b.dataset.map)}&output=embed`;
      f.title = 'Kaart: ' + b.dataset.map;
      f.loading = 'lazy';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      b.closest('.map-facade').replaceWith(f);
    }));
  }

  /* ---------- 10. Schadecheck-wizard ---------- */
  const LABELS = {
    problems: { scheuren: 'Scheuren', betonrot: 'Afbrokkelend beton / roestvlekken (betonrot)', lekkage: 'Lekkage of vocht', vloer: 'Gladde of versleten vloer', coating: 'Nieuwe vloer of coating gewenst', constructief: 'Constructieve schade', onderhoud: 'Onderhoud of schilderwerk', anders: 'Anders' },
    locations: { balkon: 'Balkon of galerij', kelder: 'Kelder', parkeergarage: 'Parkeergarage', bedrijfsvloer: 'Bedrijfs- of productievloer', gevel: 'Gevel', constructie: 'Constructie (kolom, ligger, plafond)', woning: 'Woning, binnen' },
    clientType: { particulier: 'Particulier', vve: 'VvE', corporatie: 'Woningcorporatie', beheerder: 'Vastgoedbeheerder', bedrijf: 'Bedrijf' },
    urgency: { spoed: 'Spoed (veiligheidsrisico)', kort: 'Binnen 1–3 maanden', planning: 'Oriëntatie of planning' },
    days: { ma: 'Maandag', di: 'Dinsdag', wo: 'Woensdag', do: 'Donderdag', vr: 'Vrijdag' }
  };
  const WZ_KEY = 'b020_schadecheck';

  function adviceFor(st) {
    const services = []; const texts = [];
    st.problems.forEach((pr) => {
      const rule = SCHADECHECK_RULES.find((r) => r.problem === pr && (!r.locations || r.locations.some((l) => st.locations.includes(l))));
      if (!rule) return;
      rule.services.forEach((s) => { if (!services.includes(s)) services.push(s); });
      if (!texts.includes(rule.text)) texts.push(rule.text);
    });
    if (ORG_TYPES.includes(st.clientType) && !services.includes('vastgoedonderhoud')) {
      services.push('vastgoedonderhoud');
      texts.push('Voor ' + LABELS.clientType[st.clientType].toLowerCase() + 's plannen wij het werk met zo min mogelijk overlast voor bewoners en kunnen wij het onderhoud meerjarig voor u regelen, met één vast aanspreekpunt.');
    }
    return { services, texts };
  }
  function relatedFor(services, locations) {
    const locWords = { balkon: /balkon|galerij/i, kelder: /kelder/i, parkeergarage: /parkeergarage|garage/i, bedrijfsvloer: /bedrijf|distill|vloer|dierentuin/i, constructie: /kolom|pilaar|console|plafond|ligger/i, gevel: /latei|gevel|wand/i, woning: /woning/i };
    return PROJECTS.map((p) => {
      let score = p.services.filter((s) => services.includes(s)).length * 2;
      locations.forEach((l) => { if (locWords[l] && locWords[l].test(p.title + ' ' + p.workSteps.join(' '))) score += 3; });
      if (p.before) score += 0.5;
      return { p, score };
    }).filter((x) => x.score >= 2).sort((a, b) => b.score - a.score).slice(0, 3).map((x) => x.p);
  }

  function initWizard() {
    const wz = $('#schadecheck');
    if (!wz) return;
    const steps = $$('.wz-step', wz);
    const total = steps.filter((s) => s.dataset.count !== 'no').length; // vraagstappen
    const bar = $('.wz-bar span', wz);
    const progressText = $('[data-wz-progress]', wz);
    const btnBack = $('[data-wz-back]', wz);
    const btnNext = $('[data-wz-next]', wz);
    const btnSend = $('[data-wz-send]', wz);
    const form = $('form', wz);
    fillHiddenAttr(form);
    liveValidation(form);

    const blank = { problems: [], locations: [], clientType: '', org: '', units: '', size: 40, sizeUnknown: false, balconies: '', urgency: '', days: [], name: '', company: '', address: '', postcode: '', city: '', phone: '', email: '', notes: '', coating: '', step: 0 };
    let st = Object.assign({}, blank, store.get(WZ_KEY) || {});
    let photos = []; // {name, blob, url, size}

    // Voorinstelling via URL (dienstpagina, probleemtegel, coatinghulp)
    const qs = new URLSearchParams(location.search);
    const fresh = qs.get('dienst') || qs.get('probleem') || qs.get('locatie');
    if (fresh && !qs.get('hervat')) {
      const pre = SERVICE_PRESET[qs.get('dienst')] || {};
      st = Object.assign({}, blank, {
        problems: qs.get('probleem') ? qs.get('probleem').split(',').filter((p) => LABELS.problems[p]) : (pre.problems || []),
        locations: qs.get('locatie') ? qs.get('locatie').split(',').filter((l) => LABELS.locations[l]) : (pre.locations || []),
        coating: qs.get('coating') || ''
      });
      if (st.coating) st.notes = `Voorkeur uit de coatinghulp: ${st.coating}.`;
    }

    // State → formulier
    const setChecks = (name, values) => $$(`input[name="${name}"]`, form).forEach((i) => { i.checked = Array.isArray(values) ? values.includes(i.value) : i.value === values; });
    function hydrate() {
      setChecks('problems', st.problems); setChecks('locations', st.locations); setChecks('clientType', st.clientType);
      setChecks('urgency', st.urgency); setChecks('days', st.days);
      ['org', 'units', 'balconies', 'name', 'company', 'address', 'postcode', 'city', 'phone', 'email', 'notes'].forEach((k) => { const el = form.elements[k]; if (el) el.value = st[k] || ''; });
      form.elements.size.value = st.size; form.elements.sizeUnknown.checked = st.sizeUnknown;
      syncConditional();
    }
    function collect() {
      const vals = (n) => $$(`input[name="${n}"]:checked`, form).map((i) => i.value);
      st.problems = vals('problems'); st.locations = vals('locations'); st.days = vals('days');
      st.clientType = vals('clientType')[0] || ''; st.urgency = vals('urgency')[0] || '';
      ['org', 'units', 'balconies', 'name', 'company', 'address', 'postcode', 'city', 'phone', 'email', 'notes'].forEach((k) => { const el = form.elements[k]; if (el) st[k] = el.value.trim(); });
      st.size = +form.elements.size.value; st.sizeUnknown = form.elements.sizeUnknown.checked;
      store.set(WZ_KEY, st);
    }
    function syncConditional() {
      $('[data-org-fields]', wz).hidden = !ORG_TYPES.includes(st.clientType);
      $('[data-spoed]', wz).hidden = st.urgency !== 'spoed';
      const out = $('#wz-size-out');
      out.textContent = st.sizeUnknown ? '?' : st.size;
      form.elements.size.disabled = st.sizeUnknown;
      form.elements.size.setAttribute('aria-valuetext', st.sizeUnknown ? 'Weet ik niet' : `${st.size} vierkante meter`);
      $('[data-balconies]', wz).hidden = !st.locations.includes('balkon');
      $('#wz-size-unit').textContent = st.sizeUnknown ? 'weet ik niet' : 'm²';
    }
    form.addEventListener('change', () => { collect(); syncConditional(); });
    form.addEventListener('input', (e) => { if (e.target.name === 'size') { collect(); syncConditional(); } });

    // Validatie per stap
    function stepError(stepEl, msg) {
      const box = $('.wz-error', stepEl);
      if (!box) return;
      box.hidden = !msg; box.innerHTML = msg ? ico('alert', 'ico--sm') + esc(msg) : '';
    }
    function validateStep(i) {
      const s = steps[i];
      const need = s.dataset.require;
      stepError(s, '');
      if (need === 'problems' && !st.problems.length) { stepError(s, 'Kies minimaal één probleem. Twijfelt u? Kies dan "Anders".'); $('input', s).focus(); return false; }
      if (need === 'locations' && !st.locations.length) { stepError(s, 'Kies waar het probleem zit.'); $('input', s).focus(); return false; }
      if (need === 'clientType' && !st.clientType) { stepError(s, 'Kies voor wie u de offerte aanvraagt.'); $('input', s).focus(); return false; }
      if (need === 'urgency' && !st.urgency) { stepError(s, 'Kies hoe urgent het is.'); $('input', s).focus(); return false; }
      if (need === 'contact') return validateForm(s);
      return true;
    }

    let current = Math.min(st.step || 0, steps.length - 2);
    function show(i, dir = 1) {
      steps.forEach((s, n) => { s.hidden = n !== i; s.classList.remove('is-entering', 'from-back'); });
      const s = steps[i];
      void s.offsetWidth;
      s.classList.add('is-entering'); if (dir < 0) s.classList.add('from-back');
      current = i; st.step = i; store.set(WZ_KEY, st);
      const isResult = s.dataset.step === 'result';
      const isDone = s.dataset.step === 'done';
      const n = Math.min(i + 1, total);
      bar.parentElement.parentElement.hidden = isDone;
      bar.style.setProperty('--p', isResult || isDone ? '100%' : `${(i / total) * 100}%`);
      progressText.innerHTML = isResult ? '<strong>Controleren en versturen</strong>' : `<strong>Vraag ${n} van ${total}</strong>`;
      $('[data-wz-remaining]', wz).textContent = isResult || isDone ? '' : `nog ± ${Math.max(1, Math.round((total - i) * 0.3))} min`;
      btnBack.hidden = i === 0 || isDone;
      btnNext.hidden = isResult || isDone;
      btnSend.hidden = !isResult;
      $('.wz-nav', wz).hidden = isDone;
      if (isResult) renderResult();
      const h = $('h2', s); h.setAttribute('tabindex', '-1');
      if (dir !== 0) h.focus({ preventScroll: true });
      if (dir !== 0) { const top = wz.getBoundingClientRect().top + window.scrollY - (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10) || 64) - 12; if (window.scrollY > top) window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' }); }
    }
    btnNext.addEventListener('click', () => { collect(); if (validateStep(current)) show(current + 1, 1); });
    btnBack.addEventListener('click', () => { collect(); show(current - 1, -1); });
    form.addEventListener('submit', (e) => { e.preventDefault(); if (!btnNext.hidden) btnNext.click(); });
    // Enter op tegels = volgende
    form.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.target.matches('.opt input')) { e.preventDefault(); btnNext.click(); }
    });

    // Foto's: max 5, verkleinen naar max 1600px
    const fileInput = $('#wz-photos');
    const drop = $('.dropzone', wz);
    const list = $('.previews', wz);
    const photoMsg = $('[data-photo-msg]', wz);
    function compress(file) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        const url = URL.createObjectURL(file);
        img.onload = () => {
          const max = 1600; let { width: w, height: h } = img;
          if (Math.max(w, h) > max) { const r = max / Math.max(w, h); w = Math.round(w * r); h = Math.round(h * r); }
          const c = document.createElement('canvas'); c.width = w; c.height = h;
          c.getContext('2d').drawImage(img, 0, 0, w, h);
          URL.revokeObjectURL(url);
          c.toBlob((b) => b ? resolve(b) : reject(new Error('Comprimeren mislukt')), 'image/jpeg', 0.8);
        };
        img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Dit bestand kunnen wij niet lezen als foto.')); };
        img.src = url;
      });
    }
    async function addFiles(files) {
      const imgs = Array.from(files).filter((f) => /^image\//.test(f.type));
      let msg = '';
      if (imgs.length < files.length) msg = 'Alleen foto’s (JPG, PNG, HEIC als uw toestel die omzet) kunnen worden toegevoegd. ';
      for (const f of imgs) {
        if (photos.length >= 5) { msg += 'Maximaal 5 foto’s. '; break; }
        try {
          const blob = await compress(f);
          photos.push({ name: f.name.replace(/\.[^.]+$/, '') + '.jpg', blob, url: URL.createObjectURL(blob), size: blob.size, orig: f.size });
        } catch (err) { msg += err.message + ' '; }
      }
      photoMsg.textContent = msg.trim();
      renderPhotos();
    }
    function renderPhotos() {
      list.innerHTML = photos.map((p, i) => `<li><img src="${p.url}" alt="Foto ${i + 1}: ${esc(p.name)}"><span class="size">${Math.round(p.size / 1024)} KB</span><button type="button" data-rm="${i}" aria-label="Verwijder foto ${i + 1}">${ico('close', 'ico--sm')}</button></li>`).join('');
      $('[data-photo-count]', wz).textContent = `${photos.length} van 5 foto’s toegevoegd`;
    }
    fileInput.addEventListener('change', () => { addFiles(fileInput.files); fileInput.value = ''; });
    list.addEventListener('click', (e) => { const b = e.target.closest('[data-rm]'); if (!b) return; URL.revokeObjectURL(photos[+b.dataset.rm].url); photos.splice(+b.dataset.rm, 1); renderPhotos(); fileInput.focus(); });
    ['dragenter', 'dragover'].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.add('is-over'); }));
    ['dragleave', 'drop'].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.remove('is-over'); }));
    drop.addEventListener('drop', (e) => addFiles(e.dataTransfer.files));

    // Samenvatting
    function summaryRows() {
      const L = LABELS;
      const rows = [
        ['Probleem', st.problems.map((p) => L.problems[p]).join(', '), 0],
        ['Waar', st.locations.map((l) => L.locations[l]).join(', '), 1],
        ['Aanvrager', (L.clientType[st.clientType] || '') + (st.org ? ` — ${st.org}` : '') + (st.units ? ` (${st.units} woningen/balkons)` : ''), 2],
        ['Omvang', (st.sizeUnknown ? 'Weet ik niet' : `± ${st.size} m²`) + (st.balconies ? `, ${st.balconies} balkons/galerijen` : ''), 3],
        ['Urgentie', L.urgency[st.urgency] || '', 4],
        ['Foto’s', photos.length ? `${photos.length} foto${photos.length > 1 ? '’s' : ''}` : 'Geen', 5],
        ['Voorkeur inspectie', st.days.length ? st.days.map((d) => L.days[d]).join(', ') : 'Geen voorkeur', 6],
        ['Contact', [st.name, st.company, st.phone, st.email].filter(Boolean).join(' · '), 6],
        ['Adres', [st.address, st.postcode, st.city].filter(Boolean).join(', ') || '—', 6]
      ];
      if (st.notes) rows.push(['Toelichting', st.notes, 6]);
      return rows;
    }
    function summaryText() {
      const adv = adviceFor(st);
      return [
        'Schadecheck via de website',
        '',
        ...summaryRows().map(([k, v]) => `${k}: ${v}`),
        '',
        'Voorgestelde diensten: ' + (adv.services.map((s) => svcName(s)).join(', ') || 'advies op locatie'),
        attr.gclid ? `gclid: ${attr.gclid}` : '',
        attr.utm_campaign ? `utm_campaign: ${attr.utm_campaign}` : ''
      ].filter((l, i, a) => l !== '' || a[i - 1] !== '').join('\n');
    }
    function renderResult() {
      const adv = adviceFor(st);
      const rel = relatedFor(adv.services, st.locations);
      const box = $('[data-result]', wz);
      box.innerHTML = `
        <div class="advice">
          <h3>Wat wij verwachten</h3>
          ${adv.services.length ? `<ul class="advice-services" aria-label="Aanbevolen diensten">${adv.services.map((s) => `<li><a href="${esc(svcById(s).url)}" target="_blank" rel="noopener">${esc(svcName(s))}</a></li>`).join('')}</ul>` : ''}
          ${adv.texts.map((t) => `<p>${esc(t)}</p>`).join('')}
          <p class="small muted" style="margin:0">Dit is een eerste inschatting op basis van uw antwoorden. De inspectie op locatie is gratis en vrijblijvend.</p>
        </div>
        ${st.urgency === 'spoed' ? `<div class="spoed-callout">${ico('alert')}<div><p><strong>Spoed? Wacht niet op de e-mail.</strong> Bel ons direct, dan plannen wij zo snel mogelijk.</p><a class="btn btn--white" href="tel:${CONTACT.phone}">Bel ${CONTACT.phoneLabel}</a></div></div>` : ''}
        ${rel.length ? `<h3 style="margin-top:1.5rem">Vergelijkbare projecten</h3><ul class="mini-projects">${rel.map((p) => `<li><a href="projecten.html#${esc(p.id)}" target="_blank" rel="noopener"><img src="${esc(projThumb(p))}" alt="" loading="lazy" width="400" height="250"><span>${esc(p.title)}${p.location ? ` — ${esc(p.location)}` : ''}</span></a></li>`).join('')}</ul>` : ''}
        <h3>Uw antwoorden</h3>
        <table class="summary"><caption class="visually-hidden">Samenvatting van uw antwoorden</caption><tbody>
          ${summaryRows().map(([k, v, step]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v) || '—'}</td><td><button type="button" data-goto="${step}">Wijzig<span class="visually-hidden"> ${esc(k.toLowerCase())}</span></button></td></tr>`).join('')}
        </tbody></table>`;
      decorateLinks(box);
    }
    wz.addEventListener('click', (e) => { const b = e.target.closest('[data-goto]'); if (b) show(+b.dataset.goto, -1); });

    // Versturen
    btnSend.addEventListener('click', async () => {
      collect();
      const adv = adviceFor(st);
      const text = summaryText();
      const fd = new FormData(form);
      ['problems', 'locations', 'days'].forEach((k) => fd.delete(k));
      fd.set('probleem', st.problems.map((p) => LABELS.problems[p]).join(', '));
      fd.set('locatie', st.locations.map((l) => LABELS.locations[l]).join(', '));
      fd.set('voorkeur_dagen', st.days.map((d) => LABELS.days[d]).join(', '));
      fd.set('advies_diensten', adv.services.join(','));
      fd.set('samenvatting', text);
      photos.forEach((p, i) => fd.append('foto_' + (i + 1), p.blob, p.name));
      btnSend.disabled = true;
      try {
        const r = await send(fd);
        trackLead('offerte_aanvraag', { form: 'schadecheck', service: adv.services[0] || 'onbekend', services: adv.services.join(','), client_type: st.clientType, urgency: st.urgency });
        const done = $('[data-step="done"]', wz);
        $('[data-done-demo]', done).hidden = !r.demo;
        $('[data-done-sent]', done).hidden = r.demo;
        $('[data-wa-photos]', done).href = waLink(`Hallo Betontechnieken020, hierbij de foto’s bij mijn schadecheck.\n\n${text}`);
        $('[data-wa-photos]', done).hidden = r.demo ? false : photos.length > 0;
        show(steps.indexOf(done), 1);
        if (r.demo) location.href = mailto(`Offerteaanvraag schadecheck — ${LABELS.clientType[st.clientType] || ''} — ${st.city || st.name}`, text + (photos.length ? `\n\n(${photos.length} foto’s stuur ik via WhatsApp.)` : ''));
        store.del(WZ_KEY);
      } catch (err) {
        stepError(steps[current], 'Het versturen is niet gelukt. Probeer het opnieuw of bel ' + CONTACT.phoneLabel + '.');
      } finally { btnSend.disabled = false; }
    });

    hydrate();
    show(current, 0);
  }

  /* ---------- 11. Init ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    $$('[data-year]').forEach((e) => { e.textContent = new Date().getFullYear(); });
    initHeader();
    initBA();
    initProjectBlocks();
    initFAQ();
    initCoatingHelper();
    initFacades();
    initSimpleForms();
    initWizard();
    initReveal();
    decorateLinks();
    // Deeplink naar project (#id) op projectenpagina
    const openFromHash = () => {
      if (!$('#project-grid') || !location.hash) return;
      const b = document.querySelector(`[data-project="${CSS.escape(location.hash.slice(1))}"]`);
      if (b) b.click();
    };
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
  });
})();
