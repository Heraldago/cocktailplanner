import { Cocktail } from '../types/cocktail';
import { UNFORGETTABLES_COCKTAILS } from './unforgettables';
import { CONTEMPORARY_COCKTAILS } from './contemporary';
import { APERITIVI_AND_EXTRAS_COCKTAILS } from './aperitivi';

// Combine and deduplicate if needed
const ALL_COCKTAILS: Cocktail[] = [
  ...APERITIVI_AND_EXTRAS_COCKTAILS,
  ...UNFORGETTABLES_COCKTAILS,
  ...CONTEMPORARY_COCKTAILS,
];

// Ensure unique by ID
const seen = new Set<string>();
export const COCKTAILS_DATABASE: Cocktail[] = ALL_COCKTAILS.filter((c) => {
  if (seen.has(c.id)) return false;
  seen.add(c.id);
  return true;
});

export default COCKTAILS_DATABASE;
