import { Cocktail } from '../types/cocktail';
import { UNFORGETTABLES_COCKTAILS } from './unforgettables';
import { CONTEMPORARY_COCKTAILS } from './contemporary';
import { APERITIVI_AND_EXTRAS_COCKTAILS } from './aperitivi';

// Combine all cocktails
const RAW_COCKTAILS: Cocktail[] = [
  ...APERITIVI_AND_EXTRAS_COCKTAILS,
  ...UNFORGETTABLES_COCKTAILS,
  ...CONTEMPORARY_COCKTAILS,
];

// Deduplicate
const seen = new Set<string>();
const uniqueCocktails: Cocktail[] = RAW_COCKTAILS.filter((c) => {
  if (seen.has(c.id)) return false;
  seen.add(c.id);
  return true;
});

// Top 6 most popular & iconic party staples displayed first
const FEATURED_ORDER = [
  'negroni',
  'aperol-spritz',
  'margarita',
  'mojito',
  'espresso-martini',
  'gin-tonic',
];

export const COCKTAILS_DATABASE: Cocktail[] = uniqueCocktails.sort((a, b) => {
  const indexA = FEATURED_ORDER.indexOf(a.id);
  const indexB = FEATURED_ORDER.indexOf(b.id);
  
  if (indexA !== -1 && indexB !== -1) return indexA - indexB;
  if (indexA !== -1) return -1;
  if (indexB !== -1) return 1;
  return a.name.localeCompare(b.name);
});

export default COCKTAILS_DATABASE;
