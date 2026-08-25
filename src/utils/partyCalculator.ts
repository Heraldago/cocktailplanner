import { Cocktail, PartyConfig, PartyCalculationResult, CalculatedIngredient, Ingredient, BrandTier, PartyIntensity } from '../types/cocktail';
import { Language } from '../i18n/translations';
import { CountryConfig, formatCurrency, COUNTRIES } from './countryLocalization';

export const INTENSITY_DRINKS_MAP: Record<PartyIntensity, { label: string; drinks: number; description: string; emoji: string }> = {
  aperitivo: {
    label: 'Aperitivo (1 Drink)',
    drinks: 1,
    description: '1 drink a testa, perfetto per un brindisi iniziale o aperitivo leggero.',
    emoji: '🍸',
  },
  standard: {
    label: 'Standard (2 Drink)',
    drinks: 2,
    description: '2 drink a testa, la media ideale per una cena o serata tra amici.',
    emoji: '🥂',
  },
  festa: {
    label: 'Festa (3 Drink)',
    drinks: 3,
    description: '3 drink a testa, per una vera festa con musica e balli.',
    emoji: '🎉',
  },
  maratona: {
    label: 'Maratona (4 Drink)',
    drinks: 4,
    description: '4 drink a testa, per serate lunghe e impegnative fino a notte fonda.',
    emoji: '⚡',
  },
  openbar: {
    label: 'Open Bar (5 Drink)',
    drinks: 5,
    description: '5 drink a testa, livello massimo open bar per eventi scatenati.',
    emoji: '🔥',
  },
};

/**
 * Base EUR pricing heuristics
 */
function getEstimatedUnitPrice(ing: Ingredient, tier: BrandTier): number {
  if (ing.estimatedPrice) {
    return tier === 'premium' ? ing.estimatedPrice.premium : ing.estimatedPrice.standard;
  }

  const name = ing.name.toLowerCase();

  // Specific special items
  if (name.includes('chartreuse')) {
    return tier === 'premium' ? 52.0 : 45.0;
  }
  if (name.includes('champagne')) {
    return tier === 'premium' ? 48.0 : 36.0;
  }
  if (name.includes('prosecco') || name.includes('spumante')) {
    return tier === 'premium' ? 16.0 : 7.5;
  }
  if (name.includes('angostura') || name.includes('peychaud') || name.includes('bitters')) {
    return tier === 'premium' ? 22.0 : 17.5;
  }
  if (name.includes('maraschino')) {
    return tier === 'premium' ? 24.0 : 18.0;
  }
  if (name.includes('cointreau') || name.includes('curaçao') || name.includes('triple sec')) {
    return tier === 'premium' ? 28.0 : 18.5;
  }
  if (name.includes('campari')) {
    return tier === 'premium' ? 22.0 : 14.0;
  }
  if (name.includes('aperol')) {
    return tier === 'premium' ? 14.0 : 11.5;
  }
  if (name.includes('vermouth')) {
    return tier === 'premium' ? 24.0 : 9.5;
  }
  if (name.includes('tequila')) {
    return tier === 'premium' ? 44.0 : 19.0;
  }
  if (name.includes('bourbon') || name.includes('whiskey') || name.includes('whisky') || name.includes('rye') || name.includes('scotch')) {
    return tier === 'premium' ? 42.0 : 22.0;
  }
  if (name.includes('cognac') || name.includes('brandy') || name.includes('calvados')) {
    return tier === 'premium' ? 45.0 : 18.0;
  }
  if (name.includes('rum') || name.includes('rhum') || name.includes('cachaça')) {
    return tier === 'premium' ? 28.0 : 14.5;
  }
  if (name.includes('gin')) {
    return tier === 'premium' ? 36.0 : 15.5;
  }
  if (name.includes('vodka')) {
    return tier === 'premium' ? 38.0 : 13.5;
  }

  // Category defaults
  switch (ing.categoryType) {
    case 'spirit':
      return tier === 'premium' ? 36.0 : 16.0;
    case 'liqueur':
      return tier === 'premium' ? 26.0 : 14.0;
    case 'wine':
      return tier === 'premium' ? 20.0 : 8.5;
    case 'mixer':
      if (ing.bottleSizeMl <= 250) {
        return tier === 'premium' ? 1.8 : 1.1;
      }
      return tier === 'premium' ? 4.5 : 2.0;
    case 'coffee':
      return tier === 'premium' ? 3.0 : 1.5;
    case 'syrup':
      return tier === 'premium' ? 3.5 : 1.5;
    case 'fresh':
      return tier === 'premium' ? 3.0 : 1.8;
    case 'bitters':
      return tier === 'premium' ? 20.0 : 16.0;
    case 'other':
    default:
      return tier === 'premium' ? 3.5 : 2.0;
  }
}

export function calculatePartyRequirements(
  cocktail: Cocktail,
  config: PartyConfig
): PartyCalculationResult {
  const drinksPerPerson = config.drinksPerPerson !== undefined
    ? config.drinksPerPerson
    : (INTENSITY_DRINKS_MAP[config.intensity]?.drinks || 2);

  const totalDrinks = Math.round(config.guestsCount * drinksPerPerson);

  const totalIceKg = Number((cocktail.iceKgPerDrink * totalDrinks).toFixed(1));
  const iceBags2Kg = Math.max(1, Math.ceil(totalIceKg / 2.0));
  const iceBagUnitPrice = config.brandTier === 'premium' ? 3.0 : 2.2;
  const iceTotalCost = Number((iceBags2Kg * iceBagUnitPrice).toFixed(2));

  let totalShoppingCost = iceTotalCost;
  let effectiveCostTotal = (totalIceKg * (iceBagUnitPrice / 2.0));

  const calculatedIngredients: CalculatedIngredient[] = cocktail.ingredients.map((ing) => {
    const totalMl = ing.mlPerDrink > 0 ? ing.mlPerDrink * totalDrinks : 0;
    
    let totalPieces = 0;
    let bottlesNeeded = 0;
    let leftoverMl = 0;
    let leftoverPercentage = 0;

    if (ing.piecePerDrink && ing.piecePerDrink > 0) {
      totalPieces = Math.ceil(ing.piecePerDrink * totalDrinks);
      const pack = ing.packPieces || 1;
      bottlesNeeded = Math.ceil(totalPieces / pack);
    } else if (ing.mlPerDrink > 0 && ing.bottleSizeMl > 0) {
      bottlesNeeded = Math.ceil(totalMl / ing.bottleSizeMl);
      leftoverMl = (bottlesNeeded * ing.bottleSizeMl) - totalMl;
      const totalVolumeBought = bottlesNeeded * ing.bottleSizeMl;
      leftoverPercentage = totalVolumeBought > 0 ? Math.round((leftoverMl / totalVolumeBought) * 100) : 0;
    } else {
      bottlesNeeded = 1;
    }

    const unitPrice = getEstimatedUnitPrice(ing, config.brandTier);
    const totalCost = Number((bottlesNeeded * unitPrice).toFixed(2));
    
    let effectiveCost = totalCost;
    if (ing.categoryType === 'bitters') {
      effectiveCost = Number((totalDrinks * 0.15).toFixed(2));
    } else if (ing.bottleSizeMl > 0 && totalMl > 0) {
      const fractionUsed = Math.min(bottlesNeeded, totalMl / ing.bottleSizeMl);
      effectiveCost = Number((fractionUsed * unitPrice).toFixed(2));
    } else if (ing.piecePerDrink && ing.packPieces) {
      const piecePrice = unitPrice / ing.packPieces;
      effectiveCost = Number((totalPieces * piecePrice).toFixed(2));
    }

    totalShoppingCost += totalCost;
    effectiveCostTotal += effectiveCost;

    const recommendedBrand = config.brandTier === 'premium' ? ing.brands.premium : ing.brands.standard;
    const alternativeBrand = config.brandTier === 'premium' ? ing.brands.standard : ing.brands.premium;

    return {
      name: ing.name,
      categoryType: ing.categoryType,
      totalMl,
      totalPieces,
      unit: ing.unit || 'ml',
      bottleSizeMl: ing.bottleSizeMl,
      bottlesNeeded,
      unitPrice,
      totalCost,
      effectiveCost,
      leftoverMl,
      leftoverPercentage,
      recommendedBrand,
      alternativeBrand,
      brandNotes: ing.brands.notes,
    };
  });

  const totalBottlesCount = calculatedIngredients
    .filter((i) => i.categoryType !== 'fresh' && i.categoryType !== 'other')
    .reduce((acc, curr) => acc + curr.bottlesNeeded, 0);

  const costPerPerson = Number((totalShoppingCost / config.guestsCount).toFixed(2));
  const effectiveCostPerDrink = totalDrinks > 0 ? Number((effectiveCostTotal / totalDrinks).toFixed(2)) : 0;

  const averageBarDrinkPrice = config.brandTier === 'premium' ? 12.0 : 9.0;
  const barTotalEstimatedCost = totalDrinks * averageBarDrinkPrice;
  const barSavingsEstimate = Math.max(0, Number((barTotalEstimatedCost - totalShoppingCost).toFixed(2)));

  const servingsSummary = `${config.guestsCount} guests × ${drinksPerPerson} drinks = ${totalDrinks} total drinks`;

  return {
    totalDrinks,
    drinksPerPerson,
    totalIceKg,
    iceBags2Kg,
    iceTotalCost,
    ingredients: calculatedIngredients,
    totalBottlesCount,
    totalShoppingCost: Number(totalShoppingCost.toFixed(2)),
    costPerPerson,
    effectiveCostTotal: Number(effectiveCostTotal.toFixed(2)),
    effectiveCostPerDrink,
    barSavingsEstimate,
    servingsSummary,
  };
}

export function generateShoppingListText(
  cocktail: Cocktail,
  config: PartyConfig,
  result: PartyCalculationResult,
  lang: Language = 'en',
  countryConfig?: CountryConfig
): string {
  const country = countryConfig || COUNTRIES.US;

  const format = (eurAmount: number) => formatCurrency(eurAmount, country);

  if (lang === 'it') {
    let text = `🍹 COCKTAIL PARTY PLANNER - LISTA SPESA & BUDGET (${country.flag} ${country.nameLocal})\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `Cocktail: ${cocktail.name.toUpperCase()}\n`;
    text += `Invitati: ${config.guestsCount} persone (${result.totalDrinks} drink totali)\n`;
    text += `Livello: ${result.drinksPerPerson} drink a testa\n`;
    text += `Fascia Brand: ${config.brandTier === 'premium' ? 'PREMIUM (Enoteca)' : 'STANDARD (Supermercato)'}\n\n`;

    text += `💰 STIMA SPESA & QUOTA:\n`;
    text += `• Totale spesa alla cassa: ~${format(result.totalShoppingCost)}\n`;
    text += `• Quota a persona: ~${format(result.costPerPerson)} / invitato\n`;
    text += `• Costo reale per drink: ~${format(result.effectiveCostPerDrink)} / bicchiere\n`;
    text += `• Risparmio stimato vs Bar: ~${format(result.barSavingsEstimate)} 🎉\n\n`;

    text += `🛒 BOTTIGLIE E INGREDIENTI DA ACQUISTARE:\n`;
    result.ingredients.forEach((ing, index) => {
      if (ing.totalPieces > 0) {
        text += `${index + 1}. [ ] ${ing.name}: ${ing.bottlesNeeded} conf. (${ing.totalPieces} pz) (~${format(ing.totalCost)})\n`;
        text += `   👉 Consigliato: ${ing.recommendedBrand}\n`;
      } else if (ing.totalMl > 0) {
        const cl = (ing.totalMl / 10).toFixed(0);
        text += `${index + 1}. [ ] ${ing.name}: ${ing.bottlesNeeded}x da ${ing.bottleSizeMl}ml (~${format(ing.totalCost)}) [Serve: ${ing.totalMl}ml / ${cl}cl]\n`;
        text += `   👉 Brand consigliato: ${ing.recommendedBrand}\n`;
        if (ing.leftoverMl > 0) {
          text += `   ℹ️ Avanzeranno ~${ing.leftoverMl}ml (${ing.leftoverPercentage}% della bottiglia)\n`;
        }
      } else {
        text += `${index + 1}. [ ] ${ing.name}: 1 confezione (~${format(ing.totalCost)})\n`;
        text += `   👉 Consigliato: ${ing.recommendedBrand}\n`;
      }
    });

    text += `\n🧊 GHIACCIO:\n`;
    text += `• [ ] ${result.iceBags2Kg} sacchetti da 2kg (~${format(result.iceTotalCost)}) [Fabbisogno: ~${result.totalIceKg} kg]\n`;

    text += `\n🏪 Supermercati consigliati: ${country.supermarkets.slice(0, 4).join(', ')}\n`;

    text += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `Generato con Cocktail Party Planner | cocktailplanner.vercel.app`;

    return text;
  }

  // Default English / International
  let text = `🍹 COCKTAIL PARTY PLANNER - SHOPPING LIST & BUDGET (${country.flag} ${country.nameEn})\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  text += `Cocktail: ${cocktail.name.toUpperCase()}\n`;
  text += `Guests: ${config.guestsCount} guests (${result.totalDrinks} total drinks)\n`;
  text += `Drinks per Guest: ${result.drinksPerPerson} drink/guest\n`;
  text += `Brand Tier: ${config.brandTier === 'premium' ? 'PREMIUM (Wine Shop)' : 'STANDARD (Supermarket)'}\n\n`;

  text += `💰 ESTIMATED BUDGET & SPLIT:\n`;
  text += `• Total at checkout: ~${format(result.totalShoppingCost)}\n`;
  text += `• Cost per guest: ~${format(result.costPerPerson)} / guest\n`;
  text += `• Real cost per drink: ~${format(result.effectiveCostPerDrink)} / drink\n`;
  text += `• Estimated bar savings: ~${format(result.barSavingsEstimate)} 🎉\n\n`;

  text += `🛒 BOTTLES & INGREDIENTS TO BUY:\n`;
  result.ingredients.forEach((ing, index) => {
    if (ing.totalPieces > 0) {
      text += `${index + 1}. [ ] ${ing.name}: ${ing.bottlesNeeded} pack(s) (${ing.totalPieces} pcs) (~${format(ing.totalCost)})\n`;
      text += `   👉 Recommended: ${ing.recommendedBrand}\n`;
    } else if (ing.totalMl > 0) {
      const cl = (ing.totalMl / 10).toFixed(0);
      text += `${index + 1}. [ ] ${ing.name}: ${ing.bottlesNeeded}x ${ing.bottleSizeMl}ml bottles (~${format(ing.totalCost)}) [Needed: ${ing.totalMl}ml / ${cl}cl]\n`;
      text += `   👉 Recommended brand: ${ing.recommendedBrand}\n`;
      if (ing.leftoverMl > 0) {
        text += `   ℹ️ Leftover ~${ing.leftoverMl}ml (${ing.leftoverPercentage}% of bottle)\n`;
      }
    } else {
      text += `${index + 1}. [ ] ${ing.name}: 1 pack (~${format(ing.totalCost)})\n`;
      text += `   👉 Recommended: ${ing.recommendedBrand}\n`;
    }
  });

  text += `\n🧊 ICE:\n`;
  text += `• [ ] ${result.iceBags2Kg} bags of 2kg ice (~${format(result.iceTotalCost)}) [Needed: ~${result.totalIceKg} kg]\n`;

  text += `\n🏪 Recommended local stores: ${country.supermarkets.slice(0, 4).join(', ')}\n`;

  text += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  text += `Created with Cocktail Party Planner | cocktailplanner.vercel.app`;

  return text;
}
