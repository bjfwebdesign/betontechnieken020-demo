/* Betontechnieken020 — gestructureerde inhoud.
   Bron: www.betontechnieken020.nl (projecten-1 en dienstpagina's), gecrawld 2026-09-28.
   Projecttitels zijn redactioneel afgeleid uit de eigen projecttekst (titleEditorial: true)
   // PLACEHOLDER: projecttitels laten controleren door klant */

window.SERVICES = [
  {
    id: 'betonreparatie',
    url: 'betonreparatie.html',
    name: 'Betonreparatie & renovatie',
    short: 'Betonrot, balkonreparatie en spuitbeton volgens CUR-Aanbeveling 118.',
    problems: ['betonrot', 'scheuren', 'constructief'],
    image: 'dienst-betonreparatie.webp'
  },
  {
    id: 'vloercoatings',
    url: 'vloercoatings.html',
    name: 'Vloercoatings',
    short: 'Balkon, galerij, garage, bedrijfsvloer en gietvloer: epoxy, PU of acrylaat.',
    problems: ['vloer', 'coating'],
    image: 'dienst-vloercoating.webp'
  },
  {
    id: 'injecteren',
    url: 'beton-injecteren.html',
    name: 'Beton injecteren',
    short: 'Scheuren dichten, kelderafdichting en lekkages waterdicht maken.',
    problems: ['lekkage', 'scheuren'],
    image: 'dienst-beton-injecteren.webp'
  },
  {
    id: 'constructie',
    url: 'constructieverstevigingen.html',
    name: 'Constructieverstevigingen',
    short: 'Koolstof-lijmwapening, staalconsoles en constructief betonherstel.',
    problems: ['constructief'],
    image: 'dienst-constructieverstevigingen.webp'
  },
  {
    id: 'garagevloeren',
    url: 'garagevloeren.html',
    name: 'Garagevloeren',
    short: 'Parkeergarages renoveren met antislip- en scheuroverbruggende coatings.',
    problems: ['vloer', 'lekkage'],
    image: 'dienst-garagevloeren.webp'
  },
  {
    id: 'schilderwerken',
    url: 'schilderwerken.html',
    name: 'Schilderwerken',
    short: 'Beton schilderen en conserveren na herstel, voor een lange levensduur.',
    problems: ['onderhoud'],
    image: 'dienst-schilderwerken.webp'
  },
  {
    id: 'gevelreiniging',
    url: 'gevelreiniging.html',
    name: 'Gevelreiniging & impregneren',
    short: 'Gevel stralen en daarna impregneren tegen vocht.',
    problems: ['onderhoud', 'lekkage'],
    image: 'dienst-gevelreiniging.webp'
  },
  {
    id: 'vastgoedonderhoud',
    url: 'vastgoedonderhoud.html',
    name: 'Totaal vastgoedonderhoud',
    short: 'Resultaatgericht onderhoud van complete complexen, met één aanspreekpunt.',
    problems: ['onderhoud'],
    image: 'dienst-vastgoedonderhoud.webp'
  }
];

/* Projecten. images[]: bij een gesplitste collage (links vóór, rechts na) staan
   before/after apart; anders een gallery-lijst. */
window.PROJECTS = [
  {
    id: 'blijdorp-antislip',
    title: 'Chemisch bestendige antislipcoating — Diergaarde Blijdorp',
    titleEditorial: true,
    location: 'Rotterdam',
    services: ['vloercoatings'],
    clientType: 'Dierentuin',
    workSteps: ['Chemisch bestendig antislip-vloercoatingsysteem aangebracht voor Diergaarde Blijdorp.'],
    materialsAndNorms: [
      '2-componenten, zeer snel uithardende, gepigmenteerde coating zonder oplosmiddelen',
      'Toepasbaar in het levensmiddelenbereik (testrapport beschikbaar)'
    ],
    urgent: false,
    before: 'project-blijdorp-antislip-voor.webp',
    after: 'project-blijdorp-antislip-na.webp',
    images: ['project-blijdorp-antislip.webp']
  },
  {
    id: 'alkmaar-deckcoat',
    title: 'DeckCoat antislipsysteem in een parkeergarage',
    titleEditorial: true,
    location: 'Alkmaar',
    services: ['garagevloeren', 'vloercoatings'],
    workSteps: [
      'Antislip-coatingsysteem aangebracht op de gladde betonvloeren van een parkeergarage.',
      'Antisliplaag ingestrooid voor meer grip voor auto’s én voetgangers, ook bij regen of sneeuw.'
    ],
    materialsAndNorms: ['DeckCoat-systeem, geschikt voor parkeergarages met gemiddelde verkeersbelasting en gladde betonoppervlakken'],
    urgent: false,
    images: ['project-alkmaar-deckcoat.webp']
  },
  {
    id: 'helmond-viaduct',
    title: 'Spoedherstel aanrijschade aan viaductkolom',
    titleEditorial: true,
    location: 'Helmond',
    services: ['betonreparatie', 'constructie'],
    workSteps: ['Constructief betonherstel van een aanrijschade aan een dragende kolom van een viaduct.'],
    materialsAndNorms: [
      'Krimpgecompenseerde, rheoplastische mortel voor constructief betonherstel',
      'Voldoet aan CUR-Aanbeveling 118',
      'Brandgedrag volgens DIN 4102 deel I (05/98)'
    ],
    urgent: true,
    before: 'project-helmond-viaduct-voor.webp',
    after: 'project-helmond-viaduct-na.webp',
    images: ['project-helmond-viaduct.webp']
  },
  {
    id: 'leiden-kolom',
    title: 'Spoedherstel aanrijschade aan kolom in nieuwbouw',
    titleEditorial: true,
    location: 'Leiden',
    services: ['betonreparatie', 'constructie'],
    workSteps: ['Constructief betonherstel van een aanrijschade aan een dragende kolom in een nieuwbouwproject.'],
    materialsAndNorms: [
      'Krimpgecompenseerde, rheoplastische mortel voor constructief betonherstel',
      'Voldoet aan CUR-Aanbeveling 118',
      'Brandgedrag volgens DIN 4102 deel I (05/98)'
    ],
    urgent: true,
    before: 'project-leiden-kolom-voor.webp',
    after: 'project-leiden-kolom-na.webp',
    images: ['project-leiden-kolom.webp']
  },
  {
    id: 'muiden-distilleerderij',
    title: 'Vloeistofdichte epoxy-antislipvloer voor een distilleerderij',
    titleEditorial: true,
    location: 'Muiden',
    services: ['vloercoatings'],
    clientType: 'Bedrijf (distilleerderij)',
    workSteps: ['Vloeistofdicht epoxy-antislipvloercoatingsysteem aangebracht in een distilleerderij.'],
    materialsAndNorms: [
      'Zelfnivellerende gietlaag op betonnen en cementgebonden dekvloeren',
      'Geschikt voor normale tot gemiddeld zware belasting: opslag, logistiek, productie, werkplaatsen, garages en laadperrons'
    ],
    urgent: false,
    before: 'project-muiden-distilleerderij-voor.webp',
    after: 'project-muiden-distilleerderij-na.webp',
    images: ['project-muiden-distilleerderij.webp']
  },
  {
    id: 'amsterdam-balkon-pu',
    title: 'Balkonrenovatie met polyurethaan coatingsysteem',
    titleEditorial: true,
    location: '',
    services: ['vloercoatings', 'schilderwerken', 'betonreparatie'],
    workSteps: [
      'Stalen randliggers en stalen balkondragers ontroest en geconserveerd.',
      'Polyurethaan vloercoatingsysteem aangebracht.',
      'Plafonds in twee lagen geschilderd.'
    ],
    materialsAndNorms: ['1-componenten, zeer elastische coating op polyurethaanbasis: glad of antislip, UV-bestendig, waterdicht en scheuroverbruggend'],
    urgent: false,
    images: ['project-balkon-polyurethaan.webp']
  },
  {
    id: 'amsterdam-frans-balkon',
    title: 'Betonherstel draagconsoles van een oud Frans balkon',
    titleEditorial: true,
    location: 'Amsterdam',
    services: ['betonreparatie'],
    workSteps: ['Betonherstel aan de draagconsoles van een oud Frans balkon.'],
    materialsAndNorms: [
      'Krimpgecompenseerde, rheoplastische mortel voor constructief betonherstel',
      'Voldoet aan CUR-Aanbeveling 118',
      'Brandgedrag volgens DIN 4102 deel I (05/98)'
    ],
    urgent: false,
    images: ['project-amsterdam-frans-balkon.webp']
  },
  {
    id: 'balkon-epoxy-antislip',
    title: 'Scheurherstel balkononderzijde en epoxy-antislipcoating',
    titleEditorial: true,
    location: '',
    services: ['betonreparatie', 'vloercoatings'],
    workSteps: [
      'Betonschade en scheurvorming hersteld aan de onderzijde van de balkonvloer.',
      'Antislip epoxy-vloercoatingsysteem aangebracht om de constructie waterdicht te maken tegen weersinvloeden.'
    ],
    materialsAndNorms: [
      'Krimpgecompenseerde, rheoplastische mortel, voldoet aan CUR-Aanbeveling 118',
      'CE-markering volgens EN 1504-2 (oppervlaktebescherming betonvloeren)',
      'CE-markering volgens EN 13813 (kunstharsafwerking)'
    ],
    urgent: false,
    images: ['project-balkon-epoxy-antislip.webp']
  },
  {
    id: 'amsterdam-staalconsoles',
    title: 'Constructieversteviging met chemisch verankerde staalconsoles',
    titleEditorial: true,
    location: 'Amsterdam',
    services: ['constructie'],
    workSteps: [
      'Stalen draagconsoles chemisch verankerd in de draagmuur.',
      'Berekeningen uitgevoerd door de eigen betonconstructeur.'
    ],
    materialsAndNorms: ['Constructieve berekening door betonconstructeur binnen het bedrijf'],
    urgent: false,
    images: ['project-amsterdam-staalconsoles.webp']
  },
  {
    id: 'amsterdam-pilaar',
    title: 'Constructief herstel van een dragende pilaar',
    titleEditorial: true,
    location: 'Amsterdam',
    services: ['betonreparatie', 'constructie'],
    workSteps: [
      'Constructief betonherstel van een dragende pilaar.',
      'Eerdere, onjuist uitgevoerde reparatie verwijderd; daardoor was de schade teruggekomen.'
    ],
    materialsAndNorms: [
      'Krimpgecompenseerde, rheoplastische mortel voor constructief betonherstel',
      'Voldoet aan CUR-Aanbeveling 118',
      'Brandgedrag volgens DIN 4102 deel I (05/98)'
    ],
    urgent: false,
    images: ['project-amsterdam-pilaar.webp']
  },
  {
    id: 'den-haag-balkons',
    title: 'Complete balkonrenovatie met dekvloer op afschot',
    titleEditorial: true,
    location: 'Den Haag',
    services: ['vloercoatings', 'schilderwerken', 'betonreparatie'],
    workSteps: [
      'Stalen randliggers en stalen balkondragers ontroest en geconserveerd.',
      'Zandcement dekvloer op afschot aangebracht.',
      'Polyurethaan vloercoatingsysteem aangebracht.',
      'Plafonds in twee lagen geschilderd.',
      'Hekwerk ontroest en geconserveerd in de gewenste kleur.'
    ],
    materialsAndNorms: ['Polyurethaan vloercoatingsysteem'],
    urgent: false,
    images: ['project-den-haag-balkons.webp']
  },
  {
    id: 'amsterdam-plafond-injectie',
    title: 'Scheur in balkonplafond geïnjecteerd en constructief hersteld',
    titleEditorial: true,
    location: 'Amsterdam',
    services: ['injecteren', 'betonreparatie', 'schilderwerken'],
    workSteps: [
      'Scheurvorming aan een plafond geïnjecteerd en constructief hersteld.',
      'Stalen balkondragers ontroest en geconserveerd.',
      'Plafonds in twee lagen geschilderd.'
    ],
    materialsAndNorms: [],
    urgent: false,
    before: 'project-amsterdam-plafond-injectie-voor.webp',
    after: 'project-amsterdam-plafond-injectie-na.webp',
    images: ['project-amsterdam-plafond-injectie.webp']
  },
  {
    id: 'houten-parkeergarage-injectie',
    title: 'Watervoerende scheur in parkeergarage waterdicht geïnjecteerd',
    titleEditorial: true,
    location: 'Houten',
    services: ['injecteren', 'garagevloeren'],
    workSteps: ['Watervoerende scheur met een hogedruk-injectiepomp volledig gevuld met constructief waterdichte hars.'],
    materialsAndNorms: [
      '2-componenten flexibele injectiehars voor waterafdichting',
      'Toegelaten in het drinkwaterbereik',
      'Gecertificeerd volgens EN 1504-5'
    ],
    urgent: false,
    images: ['project-houten-parkeergarage-injectie.webp']
  },
  {
    id: 'hoofddorp-balkons',
    title: 'Roestuitslag op balkons hersteld met epoxy-antislipcoating',
    titleEditorial: true,
    location: 'Hoofddorp',
    services: ['vloercoatings', 'betonreparatie'],
    workSteps: ['Roestuitslag op de balkonvloeren hersteld en afgewerkt met een epoxy-antislipvloercoatingsysteem.'],
    materialsAndNorms: [
      'CE-markering volgens EN 1504-2 (oppervlaktebescherming betonvloeren)',
      'CE-markering volgens EN 13813 (kunstharsafwerking)'
    ],
    urgent: false,
    images: ['project-hoofddorp-balkons.webp']
  },
  {
    id: 'amsterdam-kelder',
    title: 'Kelder rondom waterdicht gemaakt',
    titleEditorial: true,
    location: 'Amsterdam',
    services: ['injecteren'],
    workSteps: [
      'Kelder rondom waterdicht geïnjecteerd.',
      'Wanden en aansluitingen met de vloerconstructie rondom bekuipt.',
      'Afgewerkt met een flexibele, haarscheuroverbruggende 2-componenten afdichtmortel op cementbasis.'
    ],
    materialsAndNorms: [
      'Afdichtmortel hoog mechanisch belastbaar',
      'Bestand tegen max. 3 bar waterdruk (bij 4 mm laagdikte)'
    ],
    urgent: false,
    images: ['project-amsterdam-kelder.webp']
  },
  {
    id: 'amstelveen-wandcoating',
    title: 'Epoxy-coatingsysteem op betonnen wanden',
    titleEditorial: true,
    location: 'Amstelveen',
    services: ['vloercoatings', 'schilderwerken'],
    workSteps: ['Epoxy-coatingsysteem aangebracht op betonnen wanden.'],
    materialsAndNorms: ['2-componenten, geurarme, snel uithardende epoxy-rolcoating: slijtvast, naadloos, onderhoudsarm en glanzend'],
    urgent: false,
    before: 'project-amstelveen-wandcoating-voor.webp',
    after: 'project-amstelveen-wandcoating-na.webp',
    images: ['project-amstelveen-wandcoating.webp']
  },
  {
    id: 'wormerveer-balkon-lekkage',
    title: 'Lekkend balkon hersteld en waterdicht gecoat',
    titleEditorial: true,
    location: 'Wormerveer',
    services: ['betonreparatie', 'vloercoatings'],
    workSteps: ['Betonherstel aan de balkonvloer en afwerking met een waterdicht vloercoatingsysteem; de lekkage is verholpen.'],
    materialsAndNorms: ['Waterdicht vloercoatingsysteem'],
    urgent: false,
    before: 'project-wormerveer-balkon-voor.webp',
    after: 'project-wormerveer-balkon-na.webp',
    images: ['project-wormerveer-balkon.webp']
  },
  {
    id: 'amsterdam-randliggers',
    title: 'Randliggers vervangen en balkons voorzien van epoxy-antislip',
    titleEditorial: true,
    location: 'Amsterdam',
    services: ['vloercoatings', 'constructie', 'schilderwerken'],
    workSteps: [
      'Stalen randliggers verwijderd en vervangen door nieuwe, verzinkte stalen randliggers.',
      'Stalen balkondragers ontroest en geconserveerd.',
      'Zandcement dekvloer op afschot aangebracht.',
      'Epoxy-antislipvloercoatingsysteem aangebracht.',
      'Plafonds in twee lagen geschilderd.'
    ],
    materialsAndNorms: ['Epoxy-antislipvloercoatingsysteem'],
    urgent: false,
    before: 'project-amsterdam-randliggers-voor.webp',
    after: 'project-amsterdam-randliggers-na.webp',
    images: ['project-amsterdam-randliggers.webp']
  },
  {
    id: 'scheveningen-lateien',
    title: 'Betonherstel aan lateien met marmergrit-afwerking',
    titleEditorial: true,
    location: 'Scheveningen',
    services: ['betonreparatie'],
    workSteps: [
      'Betonherstel aan de lateien.',
      'Afgewerkt met marmergrit, verlijmd met epoxy.'
    ],
    materialsAndNorms: [
      'Krimpgecompenseerde, rheoplastische mortel voor constructief betonherstel',
      'Voldoet aan CUR-Aanbeveling 118',
      'Brandgedrag volgens DIN 4102 deel I (05/98)'
    ],
    urgent: false,
    before: 'project-scheveningen-lateien-voor.webp',
    after: 'project-scheveningen-lateien-na.webp',
    images: ['project-scheveningen-lateien.webp']
  },
  {
    id: 'rotterdam-gietvloer',
    title: 'Betonherstel en naadloze gietvloer',
    titleEditorial: true,
    location: 'Rotterdam',
    services: ['betonreparatie', 'vloercoatings'],
    workSteps: ['Betonherstel en afwerking met een gietvloer.'],
    // PLACEHOLDER: originele kop noemt "Epoxy Gietvloer", materiaaltekst "polyurethaan gietvloer" — klant laten bevestigen
    materialsAndNorms: ['2-componenten, niet-vergelende, gepigmenteerde gietvloer zonder oplosmiddelen, vloeistofdicht', 'Leverbaar in alle RAL- en NCS-kleuren'],
    urgent: false,
    before: 'project-rotterdam-gietvloer-voor.webp',
    after: 'project-rotterdam-gietvloer-na.webp',
    images: ['project-rotterdam-gietvloer.webp']
  }
];

/* Voor & na-showcase: gebrande VÓÓR/NÁ-kaarten van de projectenpagina, fotogedeelte bijgesneden.
   Niet gekoppeld aan een specifiek project (geen locatie in de bron). */
window.SHOWCASE = [
  { before: 'voorna-galerij-1-voor.webp', after: 'voorna-galerij-1-na.webp', label: 'Galerij voorzien van nieuw coatingsysteem', service: 'vloercoatings' },
  { before: 'voorna-balkon-2-voor.webp', after: 'voorna-balkon-2-na.webp', label: 'Balkonvloer gerenoveerd en gecoat', service: 'vloercoatings' },
  { before: 'voorna-galerij-3-voor.webp', after: 'voorna-galerij-3-na.webp', label: 'Galerij met slijtvaste antislipcoating', service: 'vloercoatings' },
  { before: 'voorna-console-4-voor.webp', after: 'voorna-console-4-na.webp', label: 'Draagconsole van betonrot hersteld', service: 'betonreparatie' },
  { before: 'voorna-bedrijfsvloer-5-voor.webp', after: 'voorna-bedrijfsvloer-5-na.webp', label: 'Bedrijfsvloer met glanzende gietvloer', service: 'vloercoatings' },
  { before: 'voorna-latei-6-voor.webp', after: 'voorna-latei-6-na.webp', label: 'Betonnen latei en raamomlijsting hersteld', service: 'betonreparatie' }
];
