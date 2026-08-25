import { Cocktail } from '../types/cocktail';
import { Language } from '../i18n/translations';

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
  tasteLabel: string;
  strengthLabel: string;
  tasteLabelIt: string;
  tasteLabelEn: string;
  strengthLabelIt: string;
  strengthLabelEn: string;
}

export function getTasteLabel(taste: 'bitter' | 'sweet-sour' | 'dry', lang: Language = 'en'): string {
  const map: Record<Language, Record<'bitter' | 'sweet-sour' | 'dry', string>> = {
    en: {
      bitter: 'Bitter & Aperitif',
      'sweet-sour': 'Sweet & Sour / Fresh',
      dry: 'Dry & Spirit-Forward',
    },
    it: {
      bitter: 'Bitter & Aperitivo',
      'sweet-sour': 'Dolce & Sour / Fresco',
      dry: 'Dry & Spirit-Forward',
    },
    es: {
      bitter: 'Bitter & Aperitivo',
      'sweet-sour': 'Dulce & Sour / Fresco',
      dry: 'Dry & Seco',
    },
    fr: {
      bitter: 'Bitter & Apéritif',
      'sweet-sour': 'Sweet & Sour / Fruité',
      dry: 'Dry & Spiritueux',
    },
    pt: {
      bitter: 'Bitter & Aperitivo',
      'sweet-sour': 'Doce & Sour / Tropical',
      dry: 'Seco & Spirit-Forward',
    },
    de: {
      bitter: 'Bitter & Aperitif',
      'sweet-sour': 'Sweet & Sour / Fruchtig',
      dry: 'Dry & Intensiv',
    },
  };

  return map[lang]?.[taste] || map.en[taste];
}

export function getStrengthLabel(strength: 'light' | 'medium' | 'strong', lang: Language = 'en'): string {
  const map: Record<Language, Record<'light' | 'medium' | 'strong', string>> = {
    en: {
      light: 'Light (<15% ABV)',
      medium: 'Medium (15-25% ABV)',
      strong: 'Strong (>25% ABV)',
    },
    it: {
      light: 'Leggero (<15% ABV)',
      medium: 'Medio (15-25% ABV)',
      strong: 'Forte (>25% ABV)',
    },
    es: {
      light: 'Ligero (<15% ABV)',
      medium: 'Medio (15-25% ABV)',
      strong: 'Fuerte (>25% ABV)',
    },
    fr: {
      light: 'Léger (<15% ABV)',
      medium: 'Modéré (15-25% ABV)',
      strong: 'Fort (>25% ABV)',
    },
    pt: {
      light: 'Leve (<15% ABV)',
      medium: 'Médio (15-25% ABV)',
      strong: 'Forte (>25% ABV)',
    },
    de: {
      light: 'Leicht (<15% ABV)',
      medium: 'Mittel (15-25% ABV)',
      strong: 'Stark (>25% ABV)',
    },
  };

  return map[lang]?.[strength] || map.en[strength];
}

export function getCocktailSemiotics(cocktail: Cocktail, lang: Language = 'en'): CocktailSemiotics {
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

  const tasteLabel = getTasteLabel(taste, lang);
  const strengthLabel = getStrengthLabel(strength, lang);
  const tasteLabelIt = getTasteLabel(taste, 'it');
  const tasteLabelEn = getTasteLabel(taste, 'en');
  const strengthLabelIt = getStrengthLabel(strength, 'it');
  const strengthLabelEn = getStrengthLabel(strength, 'en');

  return {
    shape,
    taste,
    strength,
    color,
    colorHex,
    shapeEmoji,
    tasteLabel,
    strengthLabel,
    tasteLabelIt,
    tasteLabelEn,
    strengthLabelIt,
    strengthLabelEn,
  };
}
