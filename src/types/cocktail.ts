export type CocktailCategory = 
  | 'Tutti'
  | 'Aperitivi Italiani'
  | 'IBA The Unforgettables'
  | 'IBA Contemporary Classics'
  | 'IBA New Era Drinks';

export type PartyIntensity = 'aperitivo' | 'standard' | 'festa' | 'maratona' | 'openbar';

export type BrandTier = 'standard' | 'premium';

export interface IngredientBrand {
  standard: string;
  premium: string;
  notes?: string;
}

export type IngredientCategory = 
  | 'spirit' 
  | 'liqueur' 
  | 'wine' 
  | 'mixer' 
  | 'syrup' 
  | 'fresh' 
  | 'bitters' 
  | 'coffee'
  | 'other';

export interface IngredientPriceEstimate {
  standard: number; // in Euro (€)
  premium: number;  // in Euro (€)
}

export interface Ingredient {
  name: string;
  mlPerDrink: number;
  bottleSizeMl: number;
  unit?: 'ml' | 'piece' | 'dash' | 'leaves' | 'spoon' | 'fresh';
  piecePerDrink?: number;
  packPieces?: number;
  categoryType: IngredientCategory;
  brands: IngredientBrand;
  estimatedPrice?: IngredientPriceEstimate;
  optional?: boolean;
}

export interface EquipmentItem {
  tool: string;
  diyAlternative: string;
  purpose: string;
  iconType: 'jigger' | 'shaker' | 'strainer' | 'spoon' | 'muddler' | 'mixing-glass' | 'peeler' | 'ice';
}

export interface BatchInstructions {
  steps: string[];
  ratioExplanation: string;
  dilutionTip: string;
  coolingTip: string;
}

export interface Instructions {
  single: string[];
  batch: BatchInstructions;
}

export interface Cocktail {
  id: string;
  name: string;
  tagline: string;
  category: 'Aperitivi Italiani' | 'IBA The Unforgettables' | 'IBA Contemporary Classics' | 'IBA New Era Drinks';
  glass: string;
  technique: string;
  iceKgPerDrink: number;
  abv: number;
  flavorProfile: string[];
  description: string;
  ingredients: Ingredient[];
  equipment: EquipmentItem[];
  instructions: Instructions;
  colorAccent: 'red' | 'blue' | 'yellow';
}

export type CocktailRecipe = Cocktail;

export interface PartyConfig {
  cocktailId: string;
  guestsCount: number;
  intensity: PartyIntensity;
  drinksPerPerson?: number; // 1, 2, 3, 4, 5
  brandTier: 'standard' | 'premium';
}

export interface CalculatedIngredient {
  name: string;
  categoryType: IngredientCategory;
  totalMl: number;
  totalPieces: number;
  unit: 'ml' | 'piece' | 'dash' | 'leaves' | 'spoon' | 'fresh';
  bottleSizeMl: number;
  bottlesNeeded: number;
  unitPrice: number;
  totalCost: number;
  effectiveCost: number;
  leftoverMl: number;
  leftoverPercentage: number;
  recommendedBrand: string;
  alternativeBrand: string;
  brandNotes?: string;
}

export interface PartyCalculationResult {
  totalDrinks: number;
  drinksPerPerson: number;
  totalIceKg: number;
  iceBags2Kg: number;
  iceTotalCost: number;
  ingredients: CalculatedIngredient[];
  totalBottlesCount: number;
  totalShoppingCost: number;      // Spesa totale alla cassa
  costPerPerson: number;          // Quota per persona
  effectiveCostTotal: number;     // Costo reale della sola quantità consumata
  effectiveCostPerDrink: number;  // Costo per singolo drink casalingo
  barSavingsEstimate: number;     // Risparmio vs consumazione al cocktail bar (~€9-10/drink)
  servingsSummary: string;
}
