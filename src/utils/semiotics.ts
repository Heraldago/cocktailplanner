import { Cocktail } from '../types/cocktail';

export type TasteCategory = 'all' | 'bitter' | 'sweet-sour' | 'dry';
export type StrengthCategory = 'all' | 'light' | 'medium' | 'strong';
export type BauhausShape = 'square' | 'triangle' | 'circle';
export type BauhausColor = 'yellow' | 'blue' | 'red';

export interface CocktailSemiotics {
  shape: BauhausShape;
  taste: 'bitter' | 'sweet-sour' | 'dry';
  strength: 'light' | 'medium' | 'strong';
  color: BauhausColor;
  colorHex: string;
  shapeEmoji: string;
  tasteLabelIt: string;
  tasteLabelEn: string;
  strengthLabelIt: string;
  strengthLabelEn: string;
}

export function getCocktailSemiotics(cocktail: Cocktail): CocktailSemiotics {
  // 1. Determine Strength & Color (based on ABV)
  let strength: 'light' | 'medium' | 'strong' = 'medium';
  let color: BauhausColor = 'blue';
  let colorHex = '#1040C0';

  if (cocktail.abv < 15) {
    strength = 'light';
    color = 'yellow';
    colorHex = '#F0C020';
  } else if (cocktail.abv > 25) {
    strength = 'strong';
    color = 'red';
    colorHex = '#D02020';
  } else {
    strength = 'medium';
    color = 'blue';
    colorHex = '#1040C0';
  }

  // 2. Determine Taste Profile & Bauhaus Shape
  const tags = [
    cocktail.category,
    ...cocktail.flavorProfile,
    ...cocktail.ingredients.map((i) => i.name),
    cocktail.name,
    cocktail.tagline,
  ].join(' ').toLowerCase();

  let taste: 'bitter' | 'sweet-sour' | 'dry' = 'sweet-sour';
  let shape: BauhausShape = 'triangle';
  let shapeEmoji = '🔺';

  // Explicit checks
  const isBitter = 
    tags.includes('bitter') || 
    tags.includes('amaricante') || 
    tags.includes('amaro') || 
    tags.includes('campari') || 
    tags.includes('aperol') || 
    tags.includes('cynar') || 
    tags.includes('fernet') || 
    tags.includes('americano') || 
    tags.includes('negroni') || 
    tags.includes('boulevardier') || 
    tags.includes('rabo de galo') || 
    tags.includes('cardinale') || 
    tags.includes('hanky panky') || 
    tags.includes('garibaldi');

  const isDry = 
    !isBitter && (
      tags.includes('dry') || 
      tags.includes('secco') || 
      tags.includes('martini') || 
      tags.includes('manhattan') || 
      tags.includes('vesper') || 
      tags.includes('tuxedo') || 
      tags.includes('french 75') || 
      tags.includes('gibson') || 
      tags.includes('martinez') || 
      tags.includes('old fashioned') || 
      tags.includes('sazerac') || 
      tags.includes('rusty nail') || 
      tags.includes('stinger') || 
      tags.includes('spirit-forward') || 
      tags.includes('gin tonic')
    );

  if (isBitter) {
    taste = 'bitter';
    shape = 'square';
    shapeEmoji = '⏹️';
  } else if (isDry) {
    taste = 'dry';
    shape = 'circle';
    shapeEmoji = '⚪';
  } else {
    taste = 'sweet-sour';
    shape = 'triangle';
    shapeEmoji = '🔺';
  }

  // Labels
  const tasteLabelIt = taste === 'bitter' ? 'Bitter & Aperitivo' : taste === 'dry' ? 'Dry & Spirit-Forward' : 'Dolce & Sour / Fresco';
  const tasteLabelEn = taste === 'bitter' ? 'Bitter & Aperitif' : taste === 'dry' ? 'Dry & Spirit-Forward' : 'Sweet & Sour / Fresh';

  const strengthLabelIt = strength === 'light' ? 'Leggero (<15% ABV)' : strength === 'medium' ? 'Medio (15-25% ABV)' : 'Forte (>25% ABV)';
  const strengthLabelEn = strength === 'light' ? 'Light (<15% ABV)' : strength === 'medium' ? 'Medium (15-25% ABV)' : 'Strong (>25% ABV)';

  return {
    shape,
    taste,
    strength,
    color,
    colorHex,
    shapeEmoji,
    tasteLabelIt,
    tasteLabelEn,
    strengthLabelIt,
    strengthLabelEn,
  };
}
