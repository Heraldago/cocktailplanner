export type Language = 'it' | 'en';

export interface Translations {
  header: {
    title: string;
    edition: string;
    subtitle: (count: number) => string;
    brandTierLabel: string;
    standardTier: string;
    premiumTier: string;
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
    barSavingsBadge: (savings: number) => string;
    kpiBottles: string;
    kpiBottlesUnit: (count: number) => string;
    kpiIce: string;
    kpiIceUnit: (count: number) => string;
    kpiTier: string;
    ingredientsDetailTitle: string;
    priceDisclaimer: string;
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
  };
  mobileFab: {
    jumpToPlan: (cocktailName: string) => string;
  };
  footer: {
    tagline: string;
    credit: string;
    disclaimer: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  it: {
    header: {
      title: 'Cocktail Party Planner',
      edition: 'IBA + Italy Edition',
      subtitle: (count) => `Calcolatore spesa supermarket & guida fai-da-te per ${count} cocktail`,
      brandTierLabel: 'Fascia Brand:',
      standardTier: 'Supermercato',
      premiumTier: 'Enoteca / Premium',
    },
    hero: {
      badge: 'Form Follows Function • Bauhaus Cocktail Engine',
      titleMain: 'PIANIFICA IL TUO',
      titleHighlight: 'COCKTAIL',
      titleEnd: 'PARTY',
      description: 'Scegli il drink, imposta gli invitati e ottieni la lista esatta della spesa in bottiglie reali dei supermercati italiani, gli strumenti DIY di casa e le istruzioni in caraffa.',
      searchPlaceholder: 'Cerca per nome, distillato (Gin, Tequila, Campari...) o tipo...',
      filterTasteLabel: 'Profilo Gusto (Forma Bauhaus):',
      filterStrengthLabel: 'Grado Alcolico (Colore):',
      suggestedLabel: '⚡ Popolari:',
      mathBadgeTitle: '100% MATEMATICA',
      mathBadgeSub: 'Zero sprechi • Spesa esatta',
    },
    legend: {
      title: 'Guida Semiotica Bauhaus',
      tasteProfiles: 'Forme (Gusto):',
      squareBitter: '⏹️ Quadrato: Bitter & Aperitivo',
      triangleSweetSour: '🔺 Triangolo: Dolce & Sour / Tropicale',
      circleDry: '⚪ Cerchio: Dry & Spirit-Forward',
      strengths: 'Colori (Alcol):',
      light: '🟡 Giallo: Leggero (<15% ABV)',
      medium: '🔵 Blu: Medio (15-25% ABV)',
      strong: '🔴 Rosso: Forte (>25% ABV)',
    },
    filter: {
      all: 'Tutti',
      bitter: '⏹️ Bitter & Aperitivi',
      sweetSour: '🔺 Dolce & Sour',
      dry: '⚪ Dry & Intensi',
      allStrength: 'Tutte le gradazioni',
      light: '🟡 Leggero (<15%)',
      medium: '🔵 Medio (15-25%)',
      strong: '🔴 Forte (>25%)',
    },
    cocktailGrid: {
      stepTitle: (count) => `1. Seleziona il Cocktail (${count} disponibili)`,
      clickToPlan: 'Clicca per pianificare',
      selectedBadge: 'SELEZIONATO',
      ingredientsLabel: 'Ingredienti:',
      notFoundTitle: 'Nessun cocktail trovato',
      notFoundDesc: 'Prova a cercare con un altro nome, un distillato (Gin, Tequila, Rum, Bourbon) o reimposta i filtri.',
      showAllBtn: 'Mostra tutti i cocktail',
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
      summaryBadge: (summary, cost) => `${summary} • ~€${cost}/persona`,
    },
    shopping: {
      title: 'Lista Spesa & Budget',
      subtitle: 'Calcolo per eccesso (Math.ceil) con stima prezzi retail in Italia',
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
      barSavingsBadge: (sav) => `Risparmi ~€ ${sav.toFixed(0)} vs cocktail bar!`,
      kpiBottles: 'Totale Bottiglie',
      kpiBottlesUnit: (c) => c === 1 ? 'Bottiglia' : 'Bottiglie',
      kpiIce: 'Ghiaccio Fabbisogno',
      kpiIceUnit: (c) => c === 1 ? 'Sacco 2kg' : 'Sacchi 2kg',
      kpiTier: 'Fascia Prezzo Attiva',
      ingredientsDetailTitle: 'Dettaglio Articoli con Stima Prezzo:',
      priceDisclaimer: 'Prezzi medi stimati supermercati/enoteche IT',
      volumeNeeded: 'Volume necessario:',
      volumeBought: 'Volume acquistato:',
      leftoverInfo: (ml, pct) => `ℹ️ Avanzeranno ~${ml}ml (${pct}% della bottiglia)`,
      brandLabel: '👉 Brand:',
      unitPriceEstimated: (p) => `Prezzo unitario stimato: ~€ ${p} / unità`,
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
    },
    mobileFab: {
      jumpToPlan: (name) => `🍸 Vai al Piano: ${name}`,
    },
    footer: {
      tagline: 'Cocktail Party Planner • Costruttivismo Bauhaus & Mixology',
      credit: 'Creato per celebrare l\'arte della miscelazione casalinga senza sprechi.',
      disclaimer: 'Bevi responsabilmente. Drink responsibly.',
    },
  },
  en: {
    header: {
      title: 'Cocktail Party Planner',
      edition: 'IBA + Global Edition',
      subtitle: (count) => `Smart supermarket grocery calculator & DIY guide for ${count} cocktails`,
      brandTierLabel: 'Brand Tier:',
      standardTier: 'Supermarket',
      premiumTier: 'Wine Shop / Premium',
    },
    hero: {
      badge: 'Form Follows Function • Bauhaus Cocktail Engine',
      titleMain: 'PLAN YOUR',
      titleHighlight: 'COCKTAIL',
      titleEnd: 'PARTY',
      description: 'Pick a cocktail, set your guests, and get the exact bottle shopping list (Math.ceil), DIY kitchen tools, and batch pitcher instructions.',
      searchPlaceholder: 'Search by name, spirit (Gin, Tequila, Campari...) or style...',
      filterTasteLabel: 'Taste Profile (Bauhaus Shape):',
      filterStrengthLabel: 'Alcohol Strength (Color):',
      suggestedLabel: '⚡ Popular:',
      mathBadgeTitle: '100% MATHEMATICS',
      mathBadgeSub: 'Zero waste • Exact bottles',
    },
    legend: {
      title: 'Bauhaus Semiotic Guide',
      tasteProfiles: 'Shapes (Taste):',
      squareBitter: '⏹️ Square: Bitter & Aperitivo',
      triangleSweetSour: '🔺 Triangle: Sweet & Sour / Tropical',
      circleDry: '⚪ Circle: Dry & Spirit-Forward',
      strengths: 'Colors (Strength):',
      light: '🟡 Yellow: Light (<15% ABV)',
      medium: '🔵 Blue: Medium (15-25% ABV)',
      strong: '🔴 Red: Strong (>25% ABV)',
    },
    filter: {
      all: 'All',
      bitter: '⏹️ Bitter & Aperitif',
      sweetSour: '🔺 Sweet & Sour',
      dry: '⚪ Dry & Spirit-Forward',
      allStrength: 'All Strengths',
      light: '🟡 Light (<15%)',
      medium: '🔵 Medium (15-25%)',
      strong: '🔴 Strong (>25%)',
    },
    cocktailGrid: {
      stepTitle: (count) => `1. Select Cocktail (${count} available)`,
      clickToPlan: 'Click to plan',
      selectedBadge: 'SELECTED',
      ingredientsLabel: 'Ingredients:',
      notFoundTitle: 'No cocktails found',
      notFoundDesc: 'Try searching with another name, spirit (Gin, Tequila, Rum, Bourbon) or reset the filters.',
      showAllBtn: 'Show all cocktails',
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
      summaryBadge: (summary, cost) => `${summary} • ~€${cost}/guest`,
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
      barSavingsBadge: (sav) => `You save ~€ ${sav.toFixed(0)} vs cocktail bar!`,
      kpiBottles: 'Total Bottles',
      kpiBottlesUnit: (c) => c === 1 ? 'Bottle' : 'Bottles',
      kpiIce: 'Ice Supply',
      kpiIceUnit: (c) => c === 1 ? '2kg Bag' : '2kg Bags',
      kpiTier: 'Active Brand Tier',
      ingredientsDetailTitle: 'Item Details with Estimated Price:',
      priceDisclaimer: 'Average estimated retail prices (IT/EU)',
      volumeNeeded: 'Volume needed:',
      volumeBought: 'Volume purchased:',
      leftoverInfo: (ml, pct) => `ℹ️ Leftover ~${ml}ml (${pct}% of the bottle)`,
      brandLabel: '👉 Brand:',
      unitPriceEstimated: (p) => `Estimated unit price: ~€ ${p} / unit`,
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
      batchTitle: (name, count) => `Pitcher for ${count} Drinks of ${name}`,
      ratioLabel: 'Proportions & Formula:',
      dilutionTipTitle: 'Golden Rule: Thermal Dilution (15%)',
      coolingTipTitle: 'Temperature Control',
    },
    equipment: {
      title: 'Equipment & DIY',
      subtitle: 'Professional bar tools and their home kitchen DIY hacks',
      techniqueLabel: 'Technique:',
      glassLabel: 'Glass:',
      diyHackLabel: 'DIY Hack:',
      purposeLabel: 'Why it matters:',
    },
    mobileFab: {
      jumpToPlan: (name) => `🍸 View Plan: ${name}`,
    },
    footer: {
      tagline: 'Cocktail Party Planner • Bauhaus Constructivism & Mixology',
      credit: 'Created to celebrate the art of zero-waste home bartending.',
      disclaimer: 'Bevi responsabilmente. Drink responsibly.',
    },
  },
};
