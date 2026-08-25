export type CountryCode = 'US' | 'IT' | 'GB' | 'ES' | 'FR' | 'DE' | 'BR';

export interface CountryConfig {
  code: CountryCode;
  nameEn: string;
  nameLocal: string;
  flag: string;
  currencySymbol: string;
  currencyCode: string;
  defaultLang: 'en' | 'it' | 'es' | 'fr' | 'pt' | 'de';
  priceMultiplier: number; // relative to base EUR prices
  supermarkets: string[];
  retailTipEn: string;
  retailTipLocal: string;
}

export const COUNTRIES: Record<CountryCode, CountryConfig> = {
  US: {
    code: 'US',
    nameEn: 'United States',
    nameLocal: 'United States',
    flag: '🇺🇸',
    currencySymbol: '$',
    currencyCode: 'USD',
    defaultLang: 'en',
    priceMultiplier: 1.15,
    supermarkets: ['Total Wine & More', 'Walmart', 'Target', 'Trader Joe\'s', 'Costco', 'BevMo!'],
    retailTipEn: 'Available at local liquor stores, Total Wine, or major grocery chains.',
    retailTipLocal: 'Available at local liquor stores, Total Wine, or major grocery chains.',
  },
  IT: {
    code: 'IT',
    nameEn: 'Italy',
    nameLocal: 'Italia',
    flag: '🇮🇹',
    currencySymbol: '€',
    currencyCode: 'EUR',
    defaultLang: 'it',
    priceMultiplier: 1.00,
    supermarkets: ['Esselunga', 'Conad', 'Coop', 'Carrefour', 'Pam / Panorama'],
    retailTipEn: 'Available in spirits aisles of major supermarkets (Esselunga, Conad, Coop).',
    retailTipLocal: 'Disponibile nel reparto liquori dei principali supermercati (Esselunga, Conad, Coop).',
  },
  GB: {
    code: 'GB',
    nameEn: 'United Kingdom',
    nameLocal: 'United Kingdom',
    flag: '🇬🇧',
    currencySymbol: '£',
    currencyCode: 'GBP',
    defaultLang: 'en',
    priceMultiplier: 0.90,
    supermarkets: ['Tesco', 'Sainsbury\'s', 'Waitrose', 'ASDA', 'Morrisons', 'Marks & Spencer'],
    retailTipEn: 'Available at major UK supermarkets (Tesco, Sainsbury\'s, Waitrose) or off-licences.',
    retailTipLocal: 'Available at major UK supermarkets (Tesco, Sainsbury\'s, Waitrose) or off-licences.',
  },
  ES: {
    code: 'ES',
    nameEn: 'Spain',
    nameLocal: 'España',
    flag: '🇪🇸',
    currencySymbol: '€',
    currencyCode: 'EUR',
    defaultLang: 'es',
    priceMultiplier: 0.95,
    supermarkets: ['Mercadona', 'Carrefour', 'El Corte Inglés', 'Dia', 'Alcampo'],
    retailTipEn: 'Available at Mercadona, Carrefour or El Corte Inglés Gourmet Club.',
    retailTipLocal: 'Disponible en la sección de licores de Mercadona, Carrefour o El Corte Inglés.',
  },
  FR: {
    code: 'FR',
    nameEn: 'France',
    nameLocal: 'France',
    flag: '🇫🇷',
    currencySymbol: '€',
    currencyCode: 'EUR',
    defaultLang: 'fr',
    priceMultiplier: 1.05,
    supermarkets: ['Carrefour', 'Monoprix', 'E.Leclerc', 'Auchan', 'Intermarché', 'Nicolas'],
    retailTipEn: 'Available in supermarket beverage sections (Monoprix, Carrefour) or Nicolas caves.',
    retailTipLocal: 'Disponible au rayon alcools des supermarchés (Monoprix, Carrefour) ou chez Nicolas.',
  },
  DE: {
    code: 'DE',
    nameEn: 'Germany',
    nameLocal: 'Deutschland',
    flag: '🇩🇪',
    currencySymbol: '€',
    currencyCode: 'EUR',
    defaultLang: 'de',
    priceMultiplier: 1.00,
    supermarkets: ['REWE', 'Edeka', 'Kaufland', 'ALDI', 'Lidl', 'Getränkemarkt'],
    retailTipEn: 'Available in beverage markets (Getränkemärkte) and supermarkets (REWE, Edeka).',
    retailTipLocal: 'Erhältlich im Getränkemarkt sowie bei REWE, Edeka oder Kaufland.',
  },
  BR: {
    code: 'BR',
    nameEn: 'Brazil',
    nameLocal: 'Brasil',
    flag: '🇧🇷',
    currencySymbol: 'R$',
    currencyCode: 'BRL',
    defaultLang: 'pt',
    priceMultiplier: 5.50,
    supermarkets: ['Pão de Açúcar', 'Carrefour Brasil', 'Extra', 'Assaí Atacadista'],
    retailTipEn: 'Available in major Brazilian supermarkets and beverage wholesale stores.',
    retailTipLocal: 'Disponível na adega do Pão de Açúcar, Carrefour ou atacadistas.',
  },
};

export const DEFAULT_COUNTRY: CountryCode = 'US';

export function formatCurrency(amount: number, country: CountryConfig): string {
  const converted = amount * country.priceMultiplier;
  
  if (country.code === 'BR') {
    return `${country.currencySymbol} ${converted.toFixed(2).replace('.', ',')}`;
  }
  if (country.code === 'US') {
    return `${country.currencySymbol}${converted.toFixed(2)}`;
  }
  if (country.code === 'GB') {
    return `${country.currencySymbol}${converted.toFixed(2)}`;
  }
  // EUR countries (IT, ES, FR, DE)
  return `${converted.toFixed(2)} ${country.currencySymbol}`;
}
