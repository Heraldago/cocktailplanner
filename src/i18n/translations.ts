export type Language = 'en' | 'it' | 'es' | 'fr' | 'pt' | 'de';

export interface Translations {
  header: {
    title: string;
    edition: string;
    subtitle: (count: number) => string;
    brandTierLabel: string;
    standardTier: string;
    premiumTier: string;
    madeBy: string;
    countryLabel: string;
    languageLabel: string;
  };
  hero: {
    badge: string;
    titleMain: string;
    titleHighlight: string;
    titleEnd: string;
    description: string;
    searchPlaceholder: string;
    filterTasteLabel: string;
    filterStrengthLabel: string;
    filterTierLabel: string;
    suggestedLabel: string;
    mathBadgeTitle: string;
    mathBadgeSub: string;
  };
  legend: {
    title: string;
    tasteProfiles: string;
    squareBitter: string;
    triangleSweetSour: string;
    circleDry: string;
    strengths: string;
    light: string;
    medium: string;
    strong: string;
  };
  filter: {
    all: string;
    bitter: string;
    sweetSour: string;
    dry: string;
    allStrength: string;
    light: string;
    medium: string;
    strong: string;
  };
  cocktailGrid: {
    stepTitle: (count: number) => string;
    clickToPlan: string;
    selectedBadge: string;
    ingredientsLabel: string;
    notFoundTitle: string;
    notFoundDesc: string;
    showAllBtn: string;
    viewAllBtn: (total: number) => string;
    showLessBtn: string;
    showingLabel: (shown: number, total: number) => string;
  };
  configurator: {
    stepTitle: string;
    subtitle: (cocktailName: string) => string;
    estimatedBudgetBadge: string;
    totalNeedsBadge: string;
    drinksTotal: string;
    guestsLabel: string;
    personSingular: string;
    personPlural: string;
    maxGuests: string;
    quickPresetsLabel: string;
    drinksPerPersonLabel: string;
    drinksPerPersonSingular: string;
    drinksPerPersonPlural: string;
    intensityLevels: {
      aperitivo: { label: string; sub: string; desc: string };
      standard: { label: string; sub: string; desc: string };
      festa: { label: string; sub: string; desc: string };
      maratona: { label: string; sub: string; desc: string };
      openbar: { label: string; sub: string; desc: string };
    };
  };
  resultsHeader: {
    stepTitle: (cocktailName: string) => string;
    summaryBadge: (summary: string, costPerPerson: string) => string;
  };
  shopping: {
    title: string;
    subtitle: string;
    copyBtn: string;
    copiedToast: string;
    budgetWidgetTitle: string;
    activeTierBadge: (isPremium: boolean) => string;
    totalRegisterTitle: string;
    totalRegisterDesc: string;
    costPerGuestTitle: string;
    perGuestSuffix: string;
    costPerGuestDesc: (guestsCount: number) => string;
    effectiveCostTitle: string;
    perDrinkSuffix: string;
    barSavingsBadge: (savings: string) => string;
    kpiBottles: string;
    kpiBottlesUnit: (count: number) => string;
    kpiIce: string;
    kpiIceUnit: (count: number) => string;
    kpiTier: string;
    tierSupermarketLabel: string;
    tierEnotecaLabel: string;
    bottleSingular: string;
    bottlePlural: string;
    packSingular: string;
    packPlural: string;
    ingredientsDetailTitle: string;
    priceDisclaimer: string;
    localSupermarketsLabel: string;
    volumeNeeded: string;
    volumeBought: string;
    leftoverInfo: (ml: number, pct: number) => string;
    brandLabel: string;
    unitPriceEstimated: (price: string) => string;
    iceBoxTitle: string;
    iceBoxHeading: (bags: number, kg: number) => string;
    iceBoxDesc: string;
    iceRateBadge: string;
  };
  preparation: {
    title: string;
    singleTab: string;
    batchTab: string;
    singleDesc: string;
    singleGlassBadge: string;
    guestsSuffix: string;
    batchTitle: (cocktailName: string, drinks: number) => string;
    ratioLabel: string;
    dilutionTipTitle: string;
    coolingTipTitle: string;
  };
  equipment: {
    title: string;
    subtitle: string;
    techniqueLabel: string;
    glassLabel: string;
    diyHackLabel: string;
    purposeLabel: string;
    toolsAndHacksTitle: string;
    goldenRuleTitle: string;
    goldenRuleText: string;
  };
  mobileFab: {
    jumpToPlan: (cocktailName: string) => string;
  };
  footer: {
    tagline: string;
    credit: string;
    disclaimer: string;
    backToTop: string;
    finishedBannerTitle: string;
    finishedBannerSub: string;
    partyRulesTitle: string;
    partyRuleIceTitle: string;
    partyRuleIceText: string;
    partyRuleBatchTitle: string;
    partyRuleBatchText: string;
    partyRuleGlassesTitle: string;
    partyRuleGlassesText: string;
    responsibleDrinkingTitle: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  // 1. ENGLISH (Default Global)
  en: {
    header: {
      title: 'Cocktail Party Planner',
      edition: 'Global Edition',
      subtitle: (count) => `Smart grocery shopping calculator & DIY bar guide for ${count} cocktails`,
      brandTierLabel: 'Brand & Price Tier:',
      standardTier: 'Supermarket',
      premiumTier: 'Wine Shop / Premium',
      madeBy: 'by',
      countryLabel: 'Country / Market:',
      languageLabel: 'Language:',
    },
    hero: {
      badge: 'Form Follows Function • Bauhaus Cocktail Engine',
      titleMain: 'PLAN YOUR',
      titleHighlight: 'COCKTAIL',
      titleEnd: 'PARTY',
      description: 'Pick a cocktail, set your guests, and get the exact bottle shopping list (Math.ceil), DIY kitchen bar hacks, and batch pitcher recipes.',
      searchPlaceholder: 'Search by name, spirit (Gin, Tequila, Campari...) or style...',
      filterTasteLabel: 'Taste Profile (Bauhaus Shape):',
      filterStrengthLabel: 'Alcohol Strength (Color):',
      filterTierLabel: 'Brand & Budget Tier:',
      suggestedLabel: '⚡ Popular:',
      mathBadgeTitle: '100% MATHEMATICS',
      mathBadgeSub: 'Zero waste • Exact bottles',
    },
    legend: {
      title: 'Bauhaus Semiotic Guide',
      tasteProfiles: 'Shapes (Taste):',
      squareBitter: 'Square: Bitter & Aperitif',
      triangleSweetSour: 'Triangle: Sweet & Sour / Tropical',
      circleDry: 'Circle: Dry & Spirit-Forward',
      strengths: 'Colors (Strength):',
      light: 'Yellow: Light (<15% ABV)',
      medium: 'Blue: Medium (15-25% ABV)',
      strong: 'Red: Strong (>25% ABV)',
    },
    filter: {
      all: 'All',
      bitter: 'Bitter & Aperitif',
      sweetSour: 'Sweet & Sour',
      dry: 'Dry & Spirit-Forward',
      allStrength: 'All Strengths',
      light: 'Light (<15%)',
      medium: 'Medium (15-25%)',
      strong: 'Strong (>25%)',
    },
    cocktailGrid: {
      stepTitle: (count) => `1. Select Cocktail (${count} available)`,
      clickToPlan: 'Click to plan',
      selectedBadge: 'SELECTED',
      ingredientsLabel: 'Ingredients:',
      notFoundTitle: 'No cocktails found',
      notFoundDesc: 'Try searching with another spirit (Gin, Tequila, Rum, Bourbon) or reset filters.',
      showAllBtn: 'Show all cocktails',
      viewAllBtn: (total) => `View All Cocktails (${total})`,
      showLessBtn: 'Show Less (Top 6 Recommended)',
      showingLabel: (shown, total) => `Showing ${shown} of ${total} cocktails`,
    },
    configurator: {
      stepTitle: '2. Party Configuration',
      subtitle: (name) => `Portion parameters for ${name}`,
      estimatedBudgetBadge: 'Estimated Budget',
      totalNeedsBadge: 'Total Needs',
      drinksTotal: 'DRINKS',
      guestsLabel: 'Number of Guests:',
      personSingular: 'guest',
      personPlural: 'guests',
      maxGuests: '30 (Max)',
      quickPresetsLabel: 'Presets:',
      drinksPerPersonLabel: 'Drinks per Guest (1 - 5):',
      drinksPerPersonSingular: 'drink',
      drinksPerPersonPlural: 'drinks',
      intensityLevels: {
        aperitivo: { label: 'Aperitif', sub: '1 drink', desc: '1 drink per guest, perfect for a toast or light aperitivo.' },
        standard: { label: 'Standard', sub: '2 drinks', desc: '2 drinks per guest, ideal average for dinner or casual hangout.' },
        festa: { label: 'Party', sub: '3 drinks', desc: '3 drinks per guest, for a lively party with music and dancing.' },
        maratona: { label: 'Marathon', sub: '4 drinks', desc: '4 drinks per guest, for long energetic nights.' },
        openbar: { label: 'Open Bar', sub: '5 drinks', desc: '5 drinks per guest, full open bar level for epic celebrations.' },
      },
    },
    resultsHeader: {
      stepTitle: (name) => `3. Operational Plan & Budget: ${name}`,
      summaryBadge: (summary, cost) => `${summary} • ~${cost}/guest`,
    },
    shopping: {
      title: 'Shopping List & Budget',
      subtitle: 'Ceiling calculation (Math.ceil) with real retail price estimates',
      copyBtn: 'Copy List & Budget',
      copiedToast: 'Copied to Clipboard!',
      budgetWidgetTitle: 'Shopping Budget & Cost per Guest Calculator',
      activeTierBadge: (isPrem) => isPrem ? 'Wine Shop / Premium Tier' : 'Supermarket Tier',
      totalRegisterTitle: 'Total Shopping at Checkout',
      totalRegisterDesc: 'Purchase of full bottles, ice bags and fresh ingredients.',
      costPerGuestTitle: 'Cost per Guest',
      perGuestSuffix: '/ guest',
      costPerGuestDesc: (guests) => `Split among ${guests} ${guests === 1 ? 'guest' : 'guests'}.`,
      effectiveCostTitle: 'Drink Cost & Bar Savings',
      perDrinkSuffix: '/ drink',
      barSavingsBadge: (sav) => `You save ~${sav} vs cocktail bar!`,
      kpiBottles: 'Total Bottles',
      kpiBottlesUnit: (c) => c === 1 ? 'Bottle' : 'Bottles',
      kpiIce: 'Ice Supply',
      kpiIceUnit: (c) => c === 1 ? '2kg Bag' : '2kg Bags',
      kpiTier: 'Active Brand Tier',
      tierSupermarketLabel: 'Supermarket',
      tierEnotecaLabel: 'Wine Shop',
      bottleSingular: 'bottle',
      bottlePlural: 'bottles',
      packSingular: 'pack',
      packPlural: 'packs',
      ingredientsDetailTitle: 'Item Details with Estimated Price:',
      priceDisclaimer: 'Average estimated retail prices',
      localSupermarketsLabel: 'Recommended Local Stores:',
      volumeNeeded: 'Volume needed:',
      volumeBought: 'Volume purchased:',
      leftoverInfo: (ml, pct) => `ℹ️ Leftover ~${ml}ml (${pct}% of bottle)`,
      brandLabel: '👉 Brand:',
      unitPriceEstimated: (p) => `Estimated unit price: ~${p} / unit`,
      iceBoxTitle: 'Essential Ice Supply',
      iceBoxHeading: (bags, kg) => `${bags} Bags of 2kg (~${kg} kg)`,
      iceBoxDesc: 'Available at supermarket freezer aisles or 24/7 gas stations.',
      iceRateBadge: '~0.18 kg / drink',
    },
    preparation: {
      title: 'Instructions & Preparation',
      singleTab: 'Single Serve',
      batchTab: 'Pitcher (Batch Party)',
      singleDesc: 'Classic on-demand single cocktail method:',
      singleGlassBadge: '1 Glass',
      guestsSuffix: 'Guests',
      batchTitle: (name, count) => `Pitcher for ${count} Drinks of ${name}`,
      ratioLabel: 'Proportions & Formula:',
      dilutionTipTitle: 'Golden Rule: Thermal Dilution (15%)',
      coolingTipTitle: 'Temperature Control',
    },
    equipment: {
      title: 'Equipment & DIY Hacks',
      subtitle: 'Professional bar tools and their home kitchen DIY hacks',
      techniqueLabel: 'Technique:',
      glassLabel: 'Glass:',
      diyHackLabel: 'DIY Hack:',
      purposeLabel: 'Why it matters:',
      toolsAndHacksTitle: 'Bar Tools & Kitchen Hacks:',
      goldenRuleTitle: 'Golden Rule:',
      goldenRuleText: 'Always chill your glassware in the freezer or with ice cubes before pouring.',
    },
    mobileFab: {
      jumpToPlan: (name) => `🍸 View Plan: ${name}`,
    },
    footer: {
      tagline: 'Cocktail Party Planner • Bauhaus Constructivism & Mixology',
      credit: 'Created to celebrate the art of zero-waste home bartending.',
      disclaimer: 'Drink responsibly.',
      backToTop: 'Back to Top',
      finishedBannerTitle: 'Finished planning?',
      finishedBannerSub: 'Go back to top to choose another cocktail or adjust filters',
      partyRulesTitle: 'Golden Rules for the Party',
      partyRuleIceTitle: 'Ice Supply:',
      partyRuleIceText: 'Never run low, calculate 1 bag of 2kg for every 10-12 drinks.',
      partyRuleBatchTitle: 'Pitcher Batching:',
      partyRuleBatchText: 'For pitchers without ice, add 15% chilled water for thermal dilution.',
      partyRuleGlassesTitle: 'Chilled Glasses:',
      partyRuleGlassesText: 'Chill your glassware in the freezer before your guests arrive.',
      responsibleDrinkingTitle: 'Drink Responsibly',
    },
  },

  // 2. ITALIANO
  it: {
    header: {
      title: 'Cocktail Party Planner',
      edition: 'Edizione Italiana',
      subtitle: (count) => `Calcolatore spesa supermarket & guida fai-da-te per ${count} cocktail`,
      brandTierLabel: 'Fascia Brand:',
      standardTier: 'Supermercato',
      premiumTier: 'Enoteca / Premium',
      madeBy: 'by',
      countryLabel: 'Paese / Mercato:',
      languageLabel: 'Lingua:',
    },
    hero: {
      badge: 'Form Follows Function • Bauhaus Cocktail Engine',
      titleMain: 'PIANIFICA IL TUO',
      titleHighlight: 'COCKTAIL',
      titleEnd: 'PARTY',
      description: 'Scegli il drink, imposta gli invitati e ottieni la lista esatta della spesa in bottiglie reali dei supermercati, gli strumenti DIY di casa e le istruzioni in caraffa.',
      searchPlaceholder: 'Cerca per nome, distillato (Gin, Tequila, Campari...) o tipo...',
      filterTasteLabel: 'Profilo Gusto (Forma Bauhaus):',
      filterStrengthLabel: 'Grado Alcolico (Colore):',
      filterTierLabel: 'Fascia Brand & Prezzo:',
      suggestedLabel: '⚡ Popolari:',
      mathBadgeTitle: '100% MATEMATICA',
      mathBadgeSub: 'Zero sprechi • Spesa esatta',
    },
    legend: {
      title: 'Guida Semiotica Bauhaus',
      tasteProfiles: 'Forme (Gusto):',
      squareBitter: 'Quadrato: Bitter & Aperitivo',
      triangleSweetSour: 'Triangolo: Dolce & Sour / Tropicale',
      circleDry: 'Cerchio: Dry & Spirit-Forward',
      strengths: 'Colori (Alcol):',
      light: 'Giallo: Leggero (<15% ABV)',
      medium: 'Blu: Medio (15-25% ABV)',
      strong: 'Rosso: Forte (>25% ABV)',
    },
    filter: {
      all: 'Tutti',
      bitter: 'Bitter & Aperitivi',
      sweetSour: 'Dolce & Sour',
      dry: 'Dry & Intensi',
      allStrength: 'Tutte le gradazioni',
      light: 'Leggero (<15%)',
      medium: 'Medio (15-25%)',
      strong: 'Forte (>25%)',
    },
    cocktailGrid: {
      stepTitle: (count) => `1. Seleziona il Cocktail (${count} disponibili)`,
      clickToPlan: 'Clicca per pianificare',
      selectedBadge: 'SELEZIONATO',
      ingredientsLabel: 'Ingredienti:',
      notFoundTitle: 'Nessun cocktail trovato',
      notFoundDesc: 'Prova a cercare con un altro nome, un distillato (Gin, Tequila, Rum, Bourbon) o reimposta i filtri.',
      showAllBtn: 'Mostra tutti i cocktail',
      viewAllBtn: (total) => `Vedi Tutti i Cocktail (${total})`,
      showLessBtn: 'Mostra Meno (I 6 Consigliati)',
      showingLabel: (shown, total) => `Stai visualizzando ${shown} di ${total} cocktail`,
    },
    configurator: {
      stepTitle: '2. Configura il Party',
      subtitle: (name) => `Parametri per il calcolo delle porzioni di ${name}`,
      estimatedBudgetBadge: 'Spesa Stimata',
      totalNeedsBadge: 'Fabbisogno Totale',
      drinksTotal: 'DRINK',
      guestsLabel: 'Numero di Invitati:',
      personSingular: 'persona',
      personPlural: 'persone',
      maxGuests: '30 (Max)',
      quickPresetsLabel: 'Preset:',
      drinksPerPersonLabel: 'Drink a Testa (1 - 5):',
      drinksPerPersonSingular: 'drink',
      drinksPerPersonPlural: 'drink',
      intensityLevels: {
        aperitivo: { label: 'Aperitivo', sub: '1 drink', desc: '1 drink a testa, perfetto per un brindisi iniziale o aperitivo leggero.' },
        standard: { label: 'Standard', sub: '2 drink', desc: '2 drink a testa, la media ideale per una cena o serata tra amici.' },
        festa: { label: 'Festa', sub: '3 drink', desc: '3 drink a testa, per una vera festa con musica e balli.' },
        maratona: { label: 'Maratona', sub: '4 drink', desc: '4 drink a testa, per serate lunghe e impegnative fino a notte fonda.' },
        openbar: { label: 'Open Bar', sub: '5 drink', desc: '5 drink a testa, livello massimo open bar per eventi scatenati.' },
      },
    },
    resultsHeader: {
      stepTitle: (name) => `3. Piano Operativo & Budget: ${name}`,
      summaryBadge: (summary, cost) => `${summary} • ~${cost}/persona`,
    },
    shopping: {
      title: 'Lista Spesa & Budget',
      subtitle: 'Calcolo per eccesso (Math.ceil) con stima prezzi retail locali',
      copyBtn: 'Copia Lista & Budget',
      copiedToast: 'Copiato negli Appunti!',
      budgetWidgetTitle: 'Calcolatore Spesa & Quota per Ospite',
      activeTierBadge: (isPrem) => isPrem ? 'Fascia Enoteca / Premium' : 'Fascia Supermercato',
      totalRegisterTitle: 'Totale Spesa alla Cassa',
      totalRegisterDesc: 'Acquisto di tutte le bottiglie intere, ghiaccio e ingredienti freschi.',
      costPerGuestTitle: 'Quota a Persona',
      perGuestSuffix: '/ ospite',
      costPerGuestDesc: (guests) => `Diviso tra i ${guests} ${guests === 1 ? 'invitato' : 'invitati'} presenti.`,
      effectiveCostTitle: 'Costo Drink & Risparmio',
      perDrinkSuffix: '/ drink',
      barSavingsBadge: (sav) => `Risparmi ~${sav} vs cocktail bar!`,
      kpiBottles: 'Totale Bottiglie',
      kpiBottlesUnit: (c) => c === 1 ? 'Bottiglia' : 'Bottiglie',
      kpiIce: 'Ghiaccio Fabbisogno',
      kpiIceUnit: (c) => c === 1 ? 'Sacco 2kg' : 'Sacchi 2kg',
      kpiTier: 'Fascia Prezzo Attiva',
      tierSupermarketLabel: 'Supermercato',
      tierEnotecaLabel: 'Enoteca',
      bottleSingular: 'bottiglia',
      bottlePlural: 'bottiglie',
      packSingular: 'confezione',
      packPlural: 'confezioni',
      ingredientsDetailTitle: 'Dettaglio Articoli con Stima Prezzo:',
      priceDisclaimer: 'Prezzi medi stimati supermercati/enoteche',
      localSupermarketsLabel: 'Supermercati locali consigliati:',
      volumeNeeded: 'Volume necessario:',
      volumeBought: 'Volume acquistato:',
      leftoverInfo: (ml, pct) => `ℹ️ Avanzeranno ~${ml}ml (${pct}% della bottiglia)`,
      brandLabel: '👉 Brand:',
      unitPriceEstimated: (p) => `Prezzo unitario stimato: ~${p} / unità`,
      iceBoxTitle: 'Scorta Ghiaccio Essenziale',
      iceBoxHeading: (bags, kg) => `${bags} Sacchetti da 2kg (~${kg} kg)`,
      iceBoxDesc: 'Disponibili nel banco surgelati dei supermercati o benzinai 24/7.',
      iceRateBadge: '~0.18 kg / drink',
    },
    preparation: {
      title: 'Istruzioni & Preparazione',
      singleTab: 'Singolo Drink',
      batchTab: 'Caraffa (Batch Party)',
      singleDesc: 'Metodo classico passo-passo al momento:',
      singleGlassBadge: '1 Bicchiere',
      guestsSuffix: 'Ospiti',
      batchTitle: (name, count) => `Caraffa per ${count} Drink di ${name}`,
      ratioLabel: 'Proporzioni & Formula:',
      dilutionTipTitle: 'Regola d\'Oro: Diluizione Termica (15%)',
      coolingTipTitle: 'Controllo del Freddo',
    },
    equipment: {
      title: 'Attrezzatura & DIY',
      subtitle: 'Utensili professionali da bar e le loro alternative casalinghe fai-da-te',
      techniqueLabel: 'Tecnica:',
      glassLabel: 'Bicchiere:',
      diyHackLabel: 'Fai da te:',
      purposeLabel: 'A cosa serve:',
      toolsAndHacksTitle: 'Strumenti & Trucchi Casalinghi:',
      goldenRuleTitle: 'Regola d\'oro:',
      goldenRuleText: 'Raffredda sempre i bicchieri in frigorifero o con cubetti di ghiaccio prima di versare il drink.',
    },
    mobileFab: {
      jumpToPlan: (name) => `🍸 Vai al Piano: ${name}`,
    },
    footer: {
      tagline: 'Cocktail Party Planner • Costruttivismo Bauhaus & Mixology',
      credit: 'Creato per celebrare l\'arte della miscelazione casalinga senza sprechi.',
      disclaimer: 'Bevi responsabilmente.',
      backToTop: 'Torna all\'Inizio',
      finishedBannerTitle: 'Hai finito di pianificare?',
      finishedBannerSub: 'Torna all\'inizio per scegliere un altro cocktail o cambiare i filtri',
      partyRulesTitle: 'Regole d\'Oro del Party',
      partyRuleIceTitle: 'Ghiaccio:',
      partyRuleIceText: 'Mai lesinare, calcola sempre 1 sacco da 2kg ogni 10-12 drink.',
      partyRuleBatchTitle: 'Batching in Caraffa:',
      partyRuleBatchText: 'In caraffa senza ghiaccio, aggiungi il 15% di acqua fredda per la diluizione.',
      partyRuleGlassesTitle: 'Bicchieri Freddi:',
      partyRuleGlassesText: 'Metti sempre i bicchieri in frigo prima che arrivino gli ospiti.',
      responsibleDrinkingTitle: 'Bevi Responsabilmente',
    },
  },

  // 3. ESPAÑOL
  es: {
    header: {
      title: 'Cocktail Party Planner',
      edition: 'Edición Española',
      subtitle: (count) => `Calculadora de compras para supermercados y guía DIY para ${count} cócteles`,
      brandTierLabel: 'Gama de Marcas:',
      standardTier: 'Supermercado',
      premiumTier: 'Licorería / Premium',
      madeBy: 'by',
      countryLabel: 'País / Mercado:',
      languageLabel: 'Idioma:',
    },
    hero: {
      badge: 'Form Follows Function • Bauhaus Cocktail Engine',
      titleMain: 'PLANIFICA TU',
      titleHighlight: 'COCKTAIL',
      titleEnd: 'PARTY',
      description: 'Elige tu cóctel, define los invitados y obtén la lista exacta de botellas de supermercado, trucos caseros y jarras para fiestas.',
      searchPlaceholder: 'Buscar por nombre, destilado (Gin, Tequila, Ron...) o tipo...',
      filterTasteLabel: 'Perfil de Sabor (Forma Bauhaus):',
      filterStrengthLabel: 'Graduación Alcohólica (Color):',
      filterTierLabel: 'Gama de Marcas y Presupuesto:',
      suggestedLabel: '⚡ Populares:',
      mathBadgeTitle: '100% MATEMÁTICAS',
      mathBadgeSub: 'Cero desperdicios • Botellas exactas',
    },
    legend: {
      title: 'Guía Semiótica Bauhaus',
      tasteProfiles: 'Formas (Sabor):',
      squareBitter: 'Cuadrado: Bitter & Aperitivo',
      triangleSweetSour: 'Triángulo: Dulce & Sour / Tropical',
      circleDry: 'Círculo: Dry & Seco',
      strengths: 'Colores (Alcohol):',
      light: 'Amarillo: Ligero (<15% ABV)',
      medium: 'Azul: Medio (15-25% ABV)',
      strong: 'Rojo: Fuerte (>25% ABV)',
    },
    filter: {
      all: 'Todos',
      bitter: 'Bitter & Aperitivos',
      sweetSour: 'Dulce & Sour',
      dry: 'Dry & Intensos',
      allStrength: 'Todas las graduaciones',
      light: 'Ligero (<15%)',
      medium: 'Medio (15-25%)',
      strong: 'Fuerte (>25%)',
    },
    cocktailGrid: {
      stepTitle: (count) => `1. Selecciona el Cóctel (${count} disponibles)`,
      clickToPlan: 'Clic para planificar',
      selectedBadge: 'SELECCIONADO',
      ingredientsLabel: 'Ingredientes:',
      notFoundTitle: 'No se encontraron cócteles',
      notFoundDesc: 'Prueba a buscar con otro destilado (Gin, Tequila, Ron, Bourbon) o restablece los filtros.',
      showAllBtn: 'Mostrar todos los cócteles',
      viewAllBtn: (total) => `Ver Todos los Cócteles (${total})`,
      showLessBtn: 'Mostrar Menos (Top 6 Recomendados)',
      showingLabel: (shown, total) => `Mostrando ${shown} de ${total} cócteles`,
    },
    configurator: {
      stepTitle: '2. Configurar la Fiesta',
      subtitle: (name) => `Parámetros de porciones para ${name}`,
      estimatedBudgetBadge: 'Presupuesto Estimado',
      totalNeedsBadge: 'Necesidad Total',
      drinksTotal: 'DRINKS',
      guestsLabel: 'Número de Invitados:',
      personSingular: 'persona',
      personPlural: 'personas',
      maxGuests: '30 (Máx)',
      quickPresetsLabel: 'Ajustes:',
      drinksPerPersonLabel: 'Bebidas por Invitado (1 - 5):',
      drinksPerPersonSingular: 'bebida',
      drinksPerPersonPlural: 'bebidas',
      intensityLevels: {
        aperitivo: { label: 'Aperitivo', sub: '1 bebida', desc: '1 bebida por persona, perfecto para un brindis o aperitivo ligero.' },
        standard: { label: 'Estándar', sub: '2 bebidas', desc: '2 bebidas por persona, el promedio ideal para cenas o reuniones.' },
        festa: { label: 'Fiesta', sub: '3 bebidas', desc: '3 bebidas por persona, para fiestas animadas con música y baile.' },
        maratona: { label: 'Maratón', sub: '4 bebidas', desc: '4 bebidas por persona, para noches largas e intensas.' },
        openbar: { label: 'Barra Libre', sub: '5 bebidas', desc: '5 bebidas por persona, nivel máximo barra libre para grandes celebraciones.' },
      },
    },
    resultsHeader: {
      stepTitle: (name) => `3. Plan Operativo y Presupuesto: ${name}`,
      summaryBadge: (summary, cost) => `${summary} • ~${cost}/persona`,
    },
    shopping: {
      title: 'Lista de Compras y Presupuesto',
      subtitle: 'Cálculo al alza (Math.ceil) con precios reales de supermercado',
      copyBtn: 'Copiar Lista y Presupuesto',
      copiedToast: '¡Copiado al portapapeles!',
      budgetWidgetTitle: 'Calculadora de Compras y Costo por Invitado',
      activeTierBadge: (isPrem) => isPrem ? 'Gama Licorería / Premium' : 'Gama Supermercado',
      totalRegisterTitle: 'Total de Compras en Caja',
      totalRegisterDesc: 'Compra de botellas enteras, bolsas de hielo e ingredientes frescos.',
      costPerGuestTitle: 'Cuota por Persona',
      perGuestSuffix: '/ invitado',
      costPerGuestDesc: (guests) => `Dividido entre los ${guests} ${guests === 1 ? 'invitado' : 'invitados'}.`,
      effectiveCostTitle: 'Costo por Bebida y Ahorro',
      perDrinkSuffix: '/ bebida',
      barSavingsBadge: (sav) => `¡Ahorras ~${sav} vs coctelería!`,
      kpiBottles: 'Total Botellas',
      kpiBottlesUnit: (c) => c === 1 ? 'Botella' : 'Botellas',
      kpiIce: 'Hielo Necesario',
      kpiIceUnit: (c) => c === 1 ? 'Bolsa 2kg' : 'Bolsas 2kg',
      kpiTier: 'Gama de Precio Activa',
      tierSupermarketLabel: 'Supermercado',
      tierEnotecaLabel: 'Licorería',
      bottleSingular: 'botella',
      bottlePlural: 'botellas',
      packSingular: 'paquete',
      packPlural: 'paquetes',
      ingredientsDetailTitle: 'Detalle de Artículos y Precio Estimado:',
      priceDisclaimer: 'Precios minoristas medios estimados',
      localSupermarketsLabel: 'Supermercados recomendados:',
      volumeNeeded: 'Volumen necesario:',
      volumeBought: 'Volumen comprado:',
      leftoverInfo: (ml, pct) => `ℹ️ Sobrarán ~${ml}ml (${pct}% de la botella)`,
      brandLabel: '👉 Marca:',
      unitPriceEstimated: (p) => `Precio unitario estimado: ~${p} / unidad`,
      iceBoxTitle: 'Suministro Esencial de Hielo',
      iceBoxHeading: (bags, kg) => `${bags} Bolsas de 2kg (~${kg} kg)`,
      iceBoxDesc: 'Disponible en congeladores de supermercados o gasolineras 24/7.',
      iceRateBadge: '~0.18 kg / copa',
    },
    preparation: {
      title: 'Instrucciones y Preparación',
      singleTab: 'Copa Individual',
      batchTab: 'Jarra (Batch Party)',
      singleDesc: 'Método clásico paso a paso en el momento:',
      singleGlassBadge: '1 Copa',
      guestsSuffix: 'Invitados',
      batchTitle: (name, count) => `Jarra para ${count} Copas de ${name}`,
      ratioLabel: 'Proporciones y Fórmula:',
      dilutionTipTitle: 'Regla de Oro: Dilución Térmica (15%)',
      coolingTipTitle: 'Control del Frío',
    },
    equipment: {
      title: 'Equipamiento y DIY',
      subtitle: 'Herramientas de bar profesional y alternativas caseras DIY',
      techniqueLabel: 'Técnica:',
      glassLabel: 'Copa / Vaso:',
      diyHackLabel: 'Truco DIY:',
      purposeLabel: 'Por qué importa:',
      toolsAndHacksTitle: 'Herramientas de Bar y Trucos Caseros:',
      goldenRuleTitle: 'Regla de oro:',
      goldenRuleText: 'Enfría siempre las copas en el congelador o con cubitos de hielo antes de servir.',
    },
    mobileFab: {
      jumpToPlan: (name) => `🍸 Ver Plan: ${name}`,
    },
    footer: {
      tagline: 'Cocktail Party Planner • Constructivismo Bauhaus y Mixología',
      credit: 'Creado para celebrar el arte de la coctelería casera sin desperdicios.',
      disclaimer: 'Bebe con responsabilidad.',
      backToTop: 'Volver Arriba',
      finishedBannerTitle: '¿Terminaste de planificar?',
      finishedBannerSub: 'Vuelve arriba para elegir otro cóctel o cambiar los filtros',
      partyRulesTitle: 'Reglas de Oro para la Fiesta',
      partyRuleIceTitle: 'Hielo:',
      partyRuleIceText: 'Nunca escatimes, calcula siempre 1 bolsa de 2kg por cada 10-12 copas.',
      partyRuleBatchTitle: 'Jarras de Grupo:',
      partyRuleBatchText: 'En jarra sin hielo, añade un 15% de agua fría para la dilución perfecta.',
      partyRuleGlassesTitle: 'Copas Frías:',
      partyRuleGlassesText: 'Enfría siempre las copas en el congelador antes de que lleguen los invitados.',
      responsibleDrinkingTitle: 'Bebe con Responsabilidad',
    },
  },

  // 4. FRANÇAIS
  fr: {
    header: {
      title: 'Cocktail Party Planner',
      edition: 'Édition Française',
      subtitle: (count) => `Calculateur de courses supermarché & guide DIY pour ${count} cocktails`,
      brandTierLabel: 'Gamme de Prix:',
      standardTier: 'Supermarché',
      premiumTier: 'Caviste / Premium',
      madeBy: 'by',
      countryLabel: 'Pays / Marché:',
      languageLabel: 'Langue:',
    },
    hero: {
      badge: 'Form Follows Function • Bauhaus Cocktail Engine',
      titleMain: 'ORGANISEZ VOTRE',
      titleHighlight: 'COCKTAIL',
      titleEnd: 'PARTY',
      description: 'Choisissez votre cocktail, entrez vos invités et obtenez la liste exacte des bouteilles de supermarché, astuces DIY et pichets de groupe.',
      searchPlaceholder: 'Rechercher par nom, spiritueux (Gin, Tequila, Rhum...) ou style...',
      filterTasteLabel: 'Profil Gustatif (Forme Bauhaus):',
      filterStrengthLabel: 'Degré d\'Alcool (Couleur):',
      filterTierLabel: 'Gamme & Budget:',
      suggestedLabel: '⚡ Populaires:',
      mathBadgeTitle: '100% MATHÉMATIQUES',
      mathBadgeSub: 'Zéro gaspillage • Bouteilles exactes',
    },
    legend: {
      title: 'Guide Sémiotique Bauhaus',
      tasteProfiles: 'Formes (Goût):',
      squareBitter: 'Carré: Bitter & Apéritif',
      triangleSweetSour: 'Triangle: Sweet & Sour / Fruité',
      circleDry: 'Cercle: Dry & Spiritueux',
      strengths: 'Couleurs (Alcool):',
      light: 'Jaune: Léger (<15% ABV)',
      medium: 'Bleu: Modéré (15-25% ABV)',
      strong: 'Rouge: Fort (>25% ABV)',
    },
    filter: {
      all: 'Tous',
      bitter: 'Bitter & Apéritif',
      sweetSour: 'Sweet & Sour',
      dry: 'Dry & Intenses',
      allStrength: 'Toutes teneurs',
      light: 'Léger (<15%)',
      medium: 'Modéré (15-25%)',
      strong: 'Fort (>25%)',
    },
    cocktailGrid: {
      stepTitle: (count) => `1. Sélectionner le Cocktail (${count} disponibles)`,
      clickToPlan: 'Cliquer pour planifier',
      selectedBadge: 'SÉLECTIONNÉ',
      ingredientsLabel: 'Ingrédients:',
      notFoundTitle: 'Aucun cocktail trouvé',
      notFoundDesc: 'Essayez un autre spiritueux (Gin, Tequila, Rhum, Bourbon) ou réinitialisez les filtres.',
      showAllBtn: 'Afficher tous les cocktails',
      viewAllBtn: (total) => `Voir Tous les Cocktails (${total})`,
      showLessBtn: 'Afficher Moins (Top 6 Recommandés)',
      showingLabel: (shown, total) => `Affichage de ${shown} sur ${total} cocktails`,
    },
    configurator: {
      stepTitle: '2. Configurer la Soirée',
      subtitle: (name) => `Paramètres de portions pour ${name}`,
      estimatedBudgetBadge: 'Budget Estimé',
      totalNeedsBadge: 'Besoins Totaux',
      drinksTotal: 'VERRES',
      guestsLabel: 'Nombre d\'Invités:',
      personSingular: 'personne',
      personPlural: 'personnes',
      maxGuests: '30 (Max)',
      quickPresetsLabel: 'Préréglages:',
      drinksPerPersonLabel: 'Verres par Invité (1 - 5):',
      drinksPerPersonSingular: 'verre',
      drinksPerPersonPlural: 'verres',
      intensityLevels: {
        aperitivo: { label: 'Apéritif', sub: '1 verre', desc: '1 verre par personne, idéal pour un toast ou apéro léger.' },
        standard: { label: 'Standard', sub: '2 verres', desc: '2 verres par personne, la moyenne idéale pour un dîner entre amis.' },
        festa: { label: 'Fête', sub: '3 verres', desc: '3 verres par personne, pour une fête animée avec musique.' },
        maratona: { label: 'Marathon', sub: '4 verres', desc: '4 verres par personne, pour les longues soirées festives.' },
        openbar: { label: 'Open Bar', sub: '5 verres', desc: '5 verres par personne, niveau open bar maximum pour grands événements.' },
      },
    },
    resultsHeader: {
      stepTitle: (name) => `3. Plan Opérationnel & Budget: ${name}`,
      summaryBadge: (summary, cost) => `${summary} • ~${cost}/invité`,
    },
    shopping: {
      title: 'Liste de Courses & Budget',
      subtitle: 'Calcul au supérieur (Math.ceil) avec estimations des prix locaux',
      copyBtn: 'Copier la Liste & Budget',
      copiedToast: 'Copié dans le presse-papiers!',
      budgetWidgetTitle: 'Calculateur Budget & Coût par Invité',
      activeTierBadge: (isPrem) => isPrem ? 'Gamme Caviste / Premium' : 'Gamme Supermarché',
      totalRegisterTitle: 'Total Courses en Caisse',
      totalRegisterDesc: 'Achat des bouteilles entières, sacs de glaçons et produits frais.',
      costPerGuestTitle: 'Part par Personne',
      perGuestSuffix: '/ invité',
      costPerGuestDesc: (guests) => `Divisé entre les ${guests} ${guests === 1 ? 'invité' : 'invités'}.`,
      effectiveCostTitle: 'Coût par Verre & Économie',
      perDrinkSuffix: '/ verre',
      barSavingsBadge: (sav) => `Vous économisez ~${sav} vs bar à cocktails!`,
      kpiBottles: 'Total Bouteilles',
      kpiBottlesUnit: (c) => c === 1 ? 'Bouteille' : 'Bouteilles',
      kpiIce: 'Glaçons Requis',
      kpiIceUnit: (c) => c === 1 ? 'Sac 2kg' : 'Sacs 2kg',
      kpiTier: 'Gamme de Prix Active',
      tierSupermarketLabel: 'Supermarché',
      tierEnotecaLabel: 'Caviste',
      bottleSingular: 'bouteille',
      bottlePlural: 'bouteilles',
      packSingular: 'paquet',
      packPlural: 'paquets',
      ingredientsDetailTitle: 'Détail des Articles & Prix Estimés:',
      priceDisclaimer: 'Prix de détail moyens estimés',
      localSupermarketsLabel: 'Supermarchés recommandés:',
      volumeNeeded: 'Volume nécessaire:',
      volumeBought: 'Volume acheté:',
      leftoverInfo: (ml, pct) => `ℹ️ Reste ~${ml}ml (${pct}% de la bouteille)`,
      brandLabel: '👉 Marque:',
      unitPriceEstimated: (p) => `Prix unitaire estimé: ~${p} / unité`,
      iceBoxTitle: 'Stock de Glaçons Essentiel',
      iceBoxHeading: (bags, kg) => `${bags} Sacs de 2kg (~${kg} kg)`,
      iceBoxDesc: 'Disponible au rayon surgelés des supermarchés ou stations-service 24/7.',
      iceRateBadge: '~0.18 kg / verre',
    },
    preparation: {
      title: 'Instructions & Préparation',
      singleTab: 'Verre Individuel',
      batchTab: 'Pichet (Batch Party)',
      singleDesc: 'Méthode classique minute verre par verre:',
      singleGlassBadge: '1 Verre',
      guestsSuffix: 'Invités',
      batchTitle: (name, count) => `Pichet pour ${count} Verres de ${name}`,
      ratioLabel: 'Proportions & Formule:',
      dilutionTipTitle: 'Règle d\'Or: Dilution Thermique (15%)',
      coolingTipTitle: 'Gestion du Froid',
    },
    equipment: {
      title: 'Équipement & Astuces DIY',
      subtitle: 'Outils de barman professionnel et alternatives maison DIY',
      techniqueLabel: 'Technique:',
      glassLabel: 'Verre:',
      diyHackLabel: 'Astuce DIY:',
      purposeLabel: 'Pourquoi c\'est utile:',
      toolsAndHacksTitle: 'Outils de Bar & Astuces Maison:',
      goldenRuleTitle: 'Règle d\'or:',
      goldenRuleText: 'Refroidissez toujours vos verres au congélateur ou avec des glaçons avant de servir.',
    },
    mobileFab: {
      jumpToPlan: (name) => `🍸 Voir le Plan: ${name}`,
    },
    footer: {
      tagline: 'Cocktail Party Planner • Constructivisme Bauhaus & Mixologie',
      credit: 'Créé pour célébrer l\'art du cocktail maison sans gaspillage.',
      disclaimer: 'À consommer avec modération.',
      backToTop: 'Retour en Haut',
      finishedBannerTitle: 'Planification terminée?',
      finishedBannerSub: 'Retournez en haut pour choisir un autre cocktail ou modifier les filtres',
      partyRulesTitle: 'Règles d\'Or pour la Fête',
      partyRuleIceTitle: 'Stock de Glaçons:',
      partyRuleIceText: 'Ne soyez jamais à court, prévoyez 1 sac de 2kg pour 10-12 verres.',
      partyRuleBatchTitle: 'Préparation en Pichet:',
      partyRuleBatchText: 'En pichet sans glace, ajoutez 15% d\'eau très fraîche pour la dilution idéale.',
      partyRuleGlassesTitle: 'Verres Givrés:',
      partyRuleGlassesText: 'Placez toujours vos verres au frais avant l\'arrivée de vos invités.',
      responsibleDrinkingTitle: 'Consommez avec Modération',
    },
  },

  // 5. PORTUGUÊS (Brasil / Portugal)
  pt: {
    header: {
      title: 'Cocktail Party Planner',
      edition: 'Edição Global',
      subtitle: (count) => `Calculadora de compras de supermercado e guia DIY para ${count} coquetéis`,
      brandTierLabel: 'Linha de Bebidas:',
      standardTier: 'Supermercado',
      premiumTier: 'Adega / Premium',
      madeBy: 'by',
      countryLabel: 'País / Mercado:',
      languageLabel: 'Idioma:',
    },
    hero: {
      badge: 'Form Follows Function • Bauhaus Cocktail Engine',
      titleMain: 'PLANEJE SUA',
      titleHighlight: 'COCKTAIL',
      titleEnd: 'PARTY',
      description: 'Escolha o drink, defina os convidados e receba a lista exata de garrafas de supermercado, truques caseiros e jarras para festas.',
      searchPlaceholder: 'Buscar por nome, destilado (Gin, Tequila, Rum, Cachaça...) ou estilo...',
      filterTasteLabel: 'Perfil de Sabor (Forma Bauhaus):',
      filterStrengthLabel: 'Teor Alcoólico (Cor):',
      filterTierLabel: 'Linha e Orçamento:',
      suggestedLabel: '⚡ Populares:',
      mathBadgeTitle: '100% MATEMÁTICA',
      mathBadgeSub: 'Zero desperdício • Garrafas exatas',
    },
    legend: {
      title: 'Guia Semiótico Bauhaus',
      tasteProfiles: 'Formas (Sabor):',
      squareBitter: 'Quadrado: Bitter & Aperitivo',
      triangleSweetSour: 'Triângulo: Doce & Sour / Tropical',
      circleDry: 'Círculo: Seco & Spirit-Forward',
      strengths: 'Cores (Teor):',
      light: 'Amarelo: Leve (<15% ABV)',
      medium: 'Azul: Médio (15-25% ABV)',
      strong: 'Vermelho: Forte (>25% ABV)',
    },
    filter: {
      all: 'Todos',
      bitter: 'Bitter & Aperitivos',
      sweetSour: 'Doce & Sour',
      dry: 'Seco & Intensos',
      allStrength: 'Todos os teores',
      light: 'Leve (<15%)',
      medium: 'Médio (15-25%)',
      strong: 'Forte (>25%)',
    },
    cocktailGrid: {
      stepTitle: (count) => `1. Escolha o Coquetel (${count} disponíveis)`,
      clickToPlan: 'Clique para planejar',
      selectedBadge: 'SELECIONADO',
      ingredientsLabel: 'Ingredientes:',
      notFoundTitle: 'Nenhum coquetel encontrado',
      notFoundDesc: 'Tente outro destilado (Gin, Tequila, Rum, Bourbon) ou redefina os filtros.',
      showAllBtn: 'Ver todos os coquetéis',
      viewAllBtn: (total) => `Ver Todos os Coquetéis (${total})`,
      showLessBtn: 'Mostrar Menos (Top 6 Recomendados)',
      showingLabel: (shown, total) => `Exibindo ${shown} de ${total} coquetéis`,
    },
    configurator: {
      stepTitle: '2. Configurar a Festa',
      subtitle: (name) => `Parâmetros de porções para ${name}`,
      estimatedBudgetBadge: 'Orçamento Estimado',
      totalNeedsBadge: 'Necessidade Total',
      drinksTotal: 'DRINKS',
      guestsLabel: 'Número de Convidados:',
      personSingular: 'convidado',
      personPlural: 'convidados',
      maxGuests: '30 (Máx)',
      quickPresetsLabel: 'Predefinições:',
      drinksPerPersonLabel: 'Drinks por Pessoa (1 - 5):',
      drinksPerPersonSingular: 'drink',
      drinksPerPersonPlural: 'drinks',
      intensityLevels: {
        aperitivo: { label: 'Aperitivo', sub: '1 drink', desc: '1 drink por pessoa, ideal para brinde ou encontro leve.' },
        standard: { label: 'Padrão', sub: '2 drinks', desc: '2 drinks por pessoa, a média ideal para jantares ou resenha.' },
        festa: { label: 'Festa', sub: '3 drinks', desc: '3 drinks por pessoa, para festas animadas com música e dança.' },
        maratona: { label: 'Maratona', sub: '4 drinks', desc: '4 drinks por pessoa, para noites longas e intensas.' },
        openbar: { label: 'Open Bar', sub: '5 drinks', desc: '5 drinks por pessoa, nível open bar total para comemorações épicas.' },
      },
    },
    resultsHeader: {
      stepTitle: (name) => `3. Plano Operacional e Orçamento: ${name}`,
      summaryBadge: (summary, cost) => `${summary} • ~${cost}/pessoa`,
    },
    shopping: {
      title: 'Lista de Compras e Orçamento',
      subtitle: 'Cálculo por excesso (Math.ceil) com estimativas de preços locais',
      copyBtn: 'Copiar Lista e Orçamento',
      copiedToast: 'Copiado para a área de transferência!',
      budgetWidgetTitle: 'Calculadora de Compras e Custo por Convidado',
      activeTierBadge: (isPrem) => isPrem ? 'Linha Adega / Premium' : 'Linha Supermercado',
      totalRegisterTitle: 'Total das Compras no Caixa',
      totalRegisterDesc: 'Compra de garrafas fechadas, sacos de gelo e ingredientes frescos.',
      costPerGuestTitle: 'Rateio por Pessoa',
      perGuestSuffix: '/ convidado',
      costPerGuestDesc: (guests) => `Dividido entre os ${guests} ${guests === 1 ? 'convidado' : 'convidados'}.`,
      effectiveCostTitle: 'Custo por Drink e Economia',
      perDrinkSuffix: '/ drink',
      barSavingsBadge: (sav) => `Você economiza ~${sav} vs bar de drinks!`,
      kpiBottles: 'Total de Garrafas',
      kpiBottlesUnit: (c) => c === 1 ? 'Garrafa' : 'Garrafas',
      kpiIce: 'Gelo Necessário',
      kpiIceUnit: (c) => c === 1 ? 'Saco 2kg' : 'Sacos 2kg',
      kpiTier: 'Faixa de Preço Ativa',
      tierSupermarketLabel: 'Supermercado',
      tierEnotecaLabel: 'Adega',
      bottleSingular: 'garrafa',
      bottlePlural: 'garrafas',
      packSingular: 'pacote',
      packPlural: 'pacotes',
      ingredientsDetailTitle: 'Detalhe dos Itens e Preço Estimado:',
      priceDisclaimer: 'Preços médios de varejo estimados',
      localSupermarketsLabel: 'Supermercados locais recomendados:',
      volumeNeeded: 'Volume necessário:',
      volumeBought: 'Volume comprado:',
      leftoverInfo: (ml, pct) => `ℹ️ Sobrarão ~${ml}ml (${pct}% da garrafa)`,
      brandLabel: '👉 Marca:',
      unitPriceEstimated: (p) => `Preço unitário estimado: ~${p} / unidade`,
      iceBoxTitle: 'Estoque Essencial de Gelo',
      iceBoxHeading: (bags, kg) => `${bags} Sacos de 2kg (~${kg} kg)`,
      iceBoxDesc: 'Disponível em freezers de supermercados ou postos 24h.',
      iceRateBadge: '~0.18 kg / drink',
    },
    preparation: {
      title: 'Instruções e Preparo',
      singleTab: 'Drink Individual',
      batchTab: 'Jarra (Batch Party)',
      singleDesc: 'Método clássico copo a copo na hora:',
      singleGlassBadge: '1 Copo',
      guestsSuffix: 'Convidados',
      batchTitle: (name, count) => `Jarra para ${count} Drinks de ${name}`,
      ratioLabel: 'Proporções e Fórmula:',
      dilutionTipTitle: 'Regra de Ouro: Diluição Térmica (15%)',
      coolingTipTitle: 'Controle de Temperatura',
    },
    equipment: {
      title: 'Utensílios e Dicas DIY',
      subtitle: 'Ferramentas de bar profissional e alternativas caseiras DIY',
      techniqueLabel: 'Técnica:',
      glassLabel: 'Copo / Taça:',
      diyHackLabel: 'Dica DIY:',
      purposeLabel: 'Por que é importante:',
      toolsAndHacksTitle: 'Utensílios de Bar & Dicas Caseiras:',
      goldenRuleTitle: 'Regra de ouro:',
      goldenRuleText: 'Sempre gele os copos no congelador ou com cubos de gelo antes de servir.',
    },
    mobileFab: {
      jumpToPlan: (name) => `🍸 Ver Plano: ${name}`,
    },
    footer: {
      tagline: 'Cocktail Party Planner • Construtivismo Bauhaus & Mixologia',
      credit: 'Criado para celebrar a arte da coquetelaria em casa sem desperdício.',
      disclaimer: 'Beba com moderação.',
      backToTop: 'Voltar ao Topo',
      finishedBannerTitle: 'Terminou o planejamento?',
      finishedBannerSub: 'Volte ao topo para escolher outro drink ou ajustar os filtros',
      partyRulesTitle: 'Regras de Ouro para a Festa',
      partyRuleIceTitle: 'Gelo:',
      partyRuleIceText: 'Nunca economize, calcule sempre 1 saco de 2kg para cada 10-12 drinks.',
      partyRuleBatchTitle: 'Jarras de Grupo:',
      partyRuleBatchText: 'Em jarra sem gelo, adicione 15% de água gelada para a diluição ideal.',
      partyRuleGlassesTitle: 'Copos Gelados:',
      partyRuleGlassesText: 'Sempre gele os copos na geladeira antes dos convidados chegarem.',
      responsibleDrinkingTitle: 'Beba com Moderação',
    },
  },

  // 6. DEUTSCH
  de: {
    header: {
      title: 'Cocktail Party Planner',
      edition: 'Globale Ausgabe',
      subtitle: (count) => `Intelligenter Einkaufsrechner & DIY Bar-Guide für ${count} Cocktails`,
      brandTierLabel: 'Marken- & Preisklasse:',
      standardTier: 'Supermarkt',
      premiumTier: 'Fachhandel / Premium',
      madeBy: 'by',
      countryLabel: 'Land / Markt:',
      languageLabel: 'Sprache:',
    },
    hero: {
      badge: 'Form Follows Function • Bauhaus Cocktail Engine',
      titleMain: 'PLANE DEINE',
      titleHighlight: 'COCKTAIL',
      titleEnd: 'PARTY',
      description: 'Cocktail wählen, Gäste eingeben und genaue Flaschen-Einkaufsliste, DIY Bar-Tricks und Kannen-Rezepte erhalten.',
      searchPlaceholder: 'Nach Name, Spirituose (Gin, Tequila, Rum...) oder Art suchen...',
      filterTasteLabel: 'Geschmacksprofil (Bauhaus-Form):',
      filterStrengthLabel: 'Alkoholgehalt (Farbe):',
      filterTierLabel: 'Marken & Preisklasse:',
      suggestedLabel: '⚡ Beliebt:',
      mathBadgeTitle: '100% MATHEMATIK',
      mathBadgeSub: 'Null Verschwendung • Exakte Flaschen',
    },
    legend: {
      title: 'Bauhaus Semiotik-Guide',
      tasteProfiles: 'Formen (Geschmack):',
      squareBitter: 'Quadrat: Bitter & Aperitif',
      triangleSweetSour: 'Dreieck: Sweet & Sour / Fruchtig',
      circleDry: 'Kreis: Dry & Spirituosenbetont',
      strengths: 'Farben (Alkoholgehalt):',
      light: 'Gelb: Leicht (<15% ABV)',
      medium: 'Blau: Mittel (15-25% ABV)',
      strong: 'Rot: Stark (>25% ABV)',
    },
    filter: {
      all: 'Alle',
      bitter: 'Bitter & Aperitif',
      sweetSour: 'Sweet & Sour',
      dry: 'Dry & Intensiv',
      allStrength: 'Alle Stärken',
      light: 'Leicht (<15%)',
      medium: 'Mittel (15-25%)',
      strong: 'Stark (>25%)',
    },
    cocktailGrid: {
      stepTitle: (count) => `1. Cocktail Auswählen (${count} verfügbar)`,
      clickToPlan: 'Klicken zum Planen',
      selectedBadge: 'AUSGEWÄHLT',
      ingredientsLabel: 'Zutaten:',
      notFoundTitle: 'Keine Cocktails gefunden',
      notFoundDesc: 'Versuche eine andere Spirituose (Gin, Tequila, Rum, Bourbon) oder setze die Filter zurück.',
      showAllBtn: 'Alle Cocktails anzeigen',
      viewAllBtn: (total) => `Alle Cocktails Anzeigen (${total})`,
      showLessBtn: 'Weniger Anzeigen (Top 6 Empfohlen)',
      showingLabel: (shown, total) => `${shown} von ${total} Cocktails angezeigt`,
    },
    configurator: {
      stepTitle: '2. Party Konfigurieren',
      subtitle: (name) => `Portionsparameter für ${name}`,
      estimatedBudgetBadge: 'Geschätztes Budget',
      totalNeedsBadge: 'Gesamtbedarf',
      drinksTotal: 'DRINKS',
      guestsLabel: 'Anzahl der Gäste:',
      personSingular: 'Person',
      personPlural: 'Personen',
      maxGuests: '30 (Max)',
      quickPresetsLabel: 'Voreinstellungen:',
      drinksPerPersonLabel: 'Drinks pro Gast (1 - 5):',
      drinksPerPersonSingular: 'Drink',
      drinksPerPersonPlural: 'Drinks',
      intensityLevels: {
        aperitivo: { label: 'Aperitif', sub: '1 Drink', desc: '1 Drink pro Person, perfekt zum Anstoßen oder für lockere Treffen.' },
        standard: { label: 'Standard', sub: '2 Drinks', desc: '2 Drinks pro Person, der ideale Durchschnitt für Abendessen.' },
        festa: { label: 'Party', sub: '3 Drinks', desc: '3 Drinks pro Person, für ausgelassene Feiern mit Musik und Tanz.' },
        maratona: { label: 'Marathon', sub: '4 Drinks', desc: '4 Drinks pro Person, für lange, intensive Nächte.' },
        openbar: { label: 'Open Bar', sub: '5 Drinks', desc: '5 Drinks pro Person, maximale Open-Bar-Stufe für große Feiern.' },
      },
    },
    resultsHeader: {
      stepTitle: (name) => `3. Ablaufplan & Budget: ${name}`,
      summaryBadge: (summary, cost) => `${summary} • ~${cost}/Gast`,
    },
    shopping: {
      title: 'Einkaufsliste & Budget',
      subtitle: 'Aufrundungs-Berechnung (Math.ceil) mit geschätzten Einzelhandelspreisen',
      copyBtn: 'Liste & Budget Kopieren',
      copiedToast: 'In die Zwischenablage kopiert!',
      budgetWidgetTitle: 'Einkaufsbudget & Kosten pro Gast Rechner',
      activeTierBadge: (isPrem) => isPrem ? 'Fachhandel / Premium-Klasse' : 'Supermarkt-Klasse',
      totalRegisterTitle: 'Gesamteinkauf an der Kasse',
      totalRegisterDesc: 'Kauf ganzer Flaschen, Eisbeutel und frischer Zutaten.',
      costPerGuestTitle: 'Anteil pro Person',
      perGuestSuffix: '/ Gast',
      costPerGuestDesc: (guests) => `Aufgeteilt auf die ${guests} ${guests === 1 ? 'Gast' : 'Gäste'}.`,
      effectiveCostTitle: 'Kosten pro Drink & Ersparnis',
      perDrinkSuffix: '/ Drink',
      barSavingsBadge: (sav) => `Du sparst ~${sav} ggü. Cocktailbar!`,
      kpiBottles: 'Gesamt Flaschen',
      kpiBottlesUnit: (c) => c === 1 ? 'Flasche' : 'Flaschen',
      kpiIce: 'Eisbedarf',
      kpiIceUnit: (c) => c === 1 ? '2kg Beutel' : '2kg Beutel',
      kpiTier: 'Aktive Preisklasse',
      tierSupermarketLabel: 'Supermarkt',
      tierEnotecaLabel: 'Fachhandel',
      bottleSingular: 'Flasche',
      bottlePlural: 'Flaschen',
      packSingular: 'Packung',
      packPlural: 'Packungen',
      ingredientsDetailTitle: 'Artikeldetails mit geschätzten Preisen:',
      priceDisclaimer: 'Durchschnittliche geschätzte Einzelhandelspreise',
      localSupermarketsLabel: 'Empfohlene Supermärkte / Märkte:',
      volumeNeeded: 'Benötigte Menge:',
      volumeBought: 'Gekaufte Menge:',
      leftoverInfo: (ml, pct) => `ℹ️ Übrig bleiben ~${ml}ml (${pct}% der Flasche)`,
      brandLabel: '👉 Marke:',
      unitPriceEstimated: (p) => `Geschätzter Stückpreis: ~${p} / Einheit`,
      iceBoxTitle: 'Wichtiger Eisvorrat',
      iceBoxHeading: (bags, kg) => `${bags} Beutel à 2kg (~${kg} kg)`,
      iceBoxDesc: 'Erhältlich in der Tiefkühlabteilung im Supermarkt oder an Tankstellen 24/7.',
      iceRateBadge: '~0.18 kg / Drink',
    },
    preparation: {
      title: 'Zubereitung & Anleitung',
      singleTab: 'Einzelner Drink',
      batchTab: 'Kanne (Batch Party)',
      singleDesc: 'Klassische Zubereitung Glas für Glas:',
      singleGlassBadge: '1 Glas',
      guestsSuffix: 'Gäste',
      batchTitle: (name, count) => `Kanne für ${count} Drinks von ${name}`,
      ratioLabel: 'Verhältnisse & Formel:',
      dilutionTipTitle: 'Goldene Regel: Thermische Verwässerung (15%)',
      coolingTipTitle: 'Temperaturkontrolle',
    },
    equipment: {
      title: 'Equipment & DIY-Tricks',
      subtitle: 'Professionelle Barwerkzeuge und praktische Küchen-Alternativen',
      techniqueLabel: 'Technik:',
      glassLabel: 'Glas:',
      diyHackLabel: 'DIY-Trick:',
      purposeLabel: 'Warum es wichtig ist:',
      toolsAndHacksTitle: 'Bar-Equipment & Küchen-Tricks:',
      goldenRuleTitle: 'Goldene Regel:',
      goldenRuleText: 'Kühle deine Gläser vor dem Servieren immer im Eisfach oder mit Eiswürfeln vor.',
    },
    mobileFab: {
      jumpToPlan: (name) => `🍸 Zum Plan: ${name}`,
    },
    footer: {
      tagline: 'Cocktail Party Planner • Bauhaus-Konstruktivismus & Mixologie',
      credit: 'Entwickelt für das perfekte Home-Bartending ohne Verschwendung.',
      disclaimer: 'Bitte verantwortungsvoll trinken.',
      backToTop: 'Nach Oben',
      finishedBannerTitle: 'Planung abgeschlossen?',
      finishedBannerSub: 'Gehe nach oben, um einen anderen Cocktail zu wählen oder Filter anzupassen',
      partyRulesTitle: 'Goldene Regeln für die Party',
      partyRuleIceTitle: 'Eisvorrat:',
      partyRuleIceText: 'Niemals sparen: Plane 1 Beutel à 2kg für alle 10-12 Drinks ein.',
      partyRuleBatchTitle: 'Kannen-Batching:',
      partyRuleBatchText: 'In der Kanne ohne Eis: 15% kaltes Wasser für die ideale Schmelzwasser-Verdünnung zugeben.',
      partyRuleGlassesTitle: 'Vorgekühlte Gläser:',
      partyRuleGlassesText: 'Stelle die Gläser vor Eintreffen der Gäste immer kurz in den Kühlschrank.',
      responsibleDrinkingTitle: 'Verantwortungsvoll Genießen',
    },
  },
};
