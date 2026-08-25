import React, { useState, useMemo, useEffect } from 'react';
import { COCKTAILS_DATABASE } from './data/cocktails';
import { Cocktail, BrandTier, PartyIntensity } from './types/cocktail';
import { calculatePartyRequirements } from './utils/partyCalculator';
import { getCocktailSemiotics, TasteCategory, StrengthCategory } from './utils/semiotics';
import { Language, TRANSLATIONS } from './i18n/translations';
import { CountryCode, COUNTRIES, DEFAULT_COUNTRY, formatCurrency } from './utils/countryLocalization';
import { getLocalizedCocktail } from './utils/cocktailI18n';
import { Header } from './components/Header';
import { HeroSearch } from './components/HeroSearch';
import { CocktailGrid } from './components/CocktailGrid';
import { PartyConfigurator } from './components/PartyConfigurator';
import { ShoppingCard } from './components/ShoppingCard';
import { EquipmentCard } from './components/EquipmentCard';
import { PreparationCard } from './components/PreparationCard';
import { Footer } from './components/Footer';
import { ArrowDown, ArrowUp, GlassWater } from 'lucide-react';

export const App: React.FC = () => {
  // State: Default English and US Country
  const [lang, setLang] = useState<Language>('en');
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(DEFAULT_COUNTRY);
  const [selectedCocktailId, setSelectedCocktailId] = useState<string>('negroni');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTaste, setSelectedTaste] = useState<TasteCategory>('all');
  const [selectedStrength, setSelectedStrength] = useState<StrengthCategory>('all');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [partyConfig, setPartyConfig] = useState({
    cocktailId: 'negroni',
    guestsCount: 8,
    intensity: 'standard' as PartyIntensity,
    drinksPerPerson: 2,
    brandTier: 'standard' as BrandTier,
  });

  const t = TRANSLATIONS[lang];
  const currentCountryConfig = COUNTRIES[selectedCountry] || COUNTRIES.US;

  // Scroll listener for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Selected cocktail reference
  const selectedCocktail = useMemo(() => {
    return (
      COCKTAILS_DATABASE.find((c) => c.id === selectedCocktailId) ||
      COCKTAILS_DATABASE[0]
    );
  }, [selectedCocktailId]);

  // Localized cocktail reference across 6 languages
  const localizedCocktail = useMemo(() => {
    return getLocalizedCocktail(selectedCocktail, lang);
  }, [selectedCocktail, lang]);

  // Filtered cocktails list with Bauhaus semiotics
  const filteredCocktails = useMemo(() => {
    return COCKTAILS_DATABASE.filter((cocktail) => {
      const semiotics = getCocktailSemiotics(cocktail);

      // Taste profile (Shape) match
      if (selectedTaste !== 'all' && semiotics.taste !== selectedTaste) {
        return false;
      }

      // Alcohol Strength (Color) match
      if (selectedStrength !== 'all' && semiotics.strength !== selectedStrength) {
        return false;
      }

      // Search query match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = cocktail.name.toLowerCase().includes(q);
        const matchesTagline = cocktail.tagline.toLowerCase().includes(q);
        const matchesCategory = cocktail.category.toLowerCase().includes(q);
        const matchesGlass = cocktail.glass.toLowerCase().includes(q);
        const matchesIngredient = cocktail.ingredients.some(
          (ing) =>
            ing.name.toLowerCase().includes(q) ||
            ing.brands.standard.toLowerCase().includes(q) ||
            ing.brands.premium.toLowerCase().includes(q)
        );
        const matchesFlavor = cocktail.flavorProfile.some((f) =>
          f.toLowerCase().includes(q)
        );
        return (
          matchesName ||
          matchesTagline ||
          matchesCategory ||
          matchesGlass ||
          matchesIngredient ||
          matchesFlavor
        );
      }
      return true;
    });
  }, [searchQuery, selectedTaste, selectedStrength]);

  // Popular cocktails for quick suggestion pills
  const popularCocktails = useMemo(() => {
    return [
      { id: 'negroni', name: 'Negroni', category: 'The Unforgettables', colorAccent: 'red' },
      { id: 'aperol-spritz', name: 'Aperol Spritz', category: 'Aperitivi Italiani', colorAccent: 'yellow' },
      { id: 'espresso-martini', name: 'Espresso Martini', category: 'Contemporary', colorAccent: 'yellow' },
      { id: 'margarita', name: 'Margarita', category: 'Contemporary', colorAccent: 'yellow' },
      { id: 'mojito', name: 'Mojito', category: 'Contemporary', colorAccent: 'blue' },
      { id: 'gin-tonic', name: 'Gin Tonic', category: 'Contemporary', colorAccent: 'blue' },
      { id: 'paloma', name: 'Paloma', category: 'Contemporary', colorAccent: 'yellow' },
    ];
  }, []);

  // Reactive Party Calculations
  const partyResult = useMemo(() => {
    return calculatePartyRequirements(selectedCocktail, partyConfig);
  }, [selectedCocktail, partyConfig]);

  // Handlers
  const handleSelectCocktail = (cocktail: Cocktail) => {
    setSelectedCocktailId(cocktail.id);
    setPartyConfig((prev) => ({ ...prev, cocktailId: cocktail.id }));
    const element = document.getElementById('planner-dashboard');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleBrandTier = (tier: BrandTier) => {
    setPartyConfig((prev) => ({ ...prev, brandTier: tier }));
  };

  const handleChangeGuests = (count: number) => {
    setPartyConfig((prev) => ({ ...prev, guestsCount: count }));
  };

  const handleChangeIntensity = (intensity: PartyIntensity, drinks?: number) => {
    setPartyConfig((prev) => ({
      ...prev,
      intensity,
      drinksPerPerson: drinks !== undefined ? drinks : 2,
    }));
  };

  const handleResetSearch = () => {
    setSearchQuery('');
    setSelectedTaste('all');
    setSelectedStrength('all');
  };

  const handleScrollToDashboard = () => {
    const element = document.getElementById('planner-dashboard');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F0F0F0] flex flex-col justify-between relative">
      {/* Top Header with Country Market & 6-Language Switcher */}
      <Header
        lang={lang}
        onToggleLang={setLang}
        selectedCountry={selectedCountry}
        onSelectCountry={setSelectedCountry}
      />

      {/* Hero & Search Banner with Bauhaus Semiotics and Brand Tier Selector */}
      <HeroSearch
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedTaste={selectedTaste}
        onTasteChange={setSelectedTaste}
        selectedStrength={selectedStrength}
        onStrengthChange={setSelectedStrength}
        brandTier={partyConfig.brandTier}
        onBrandTierChange={handleToggleBrandTier}
        onQuickSelect={(id) => {
          const found = COCKTAILS_DATABASE.find((c) => c.id === id);
          if (found) handleSelectCocktail(found);
        }}
        popularCocktails={popularCocktails}
        lang={lang}
      />

      {/* Main App Content */}
      <main className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 sm:space-y-10 w-full flex-grow">
        {/* Step 1: Cocktail Selector Grid */}
        <section aria-labelledby="cocktail-selection">
          <CocktailGrid
            cocktails={filteredCocktails}
            selectedCocktailId={selectedCocktailId}
            onSelectCocktail={handleSelectCocktail}
            onResetSearch={handleResetSearch}
            lang={lang}
          />
        </section>

        {/* Dashboard Anchor for Smooth Scroll */}
        <div id="planner-dashboard" className="pt-2" />

        {/* Step 2: Party Configurator */}
        <section aria-labelledby="party-configuration">
          <PartyConfigurator
            config={partyConfig}
            onChangeGuests={handleChangeGuests}
            onChangeIntensity={handleChangeIntensity}
            totalDrinks={partyResult.totalDrinks}
            totalShoppingCost={partyResult.totalShoppingCost}
            costPerPerson={partyResult.costPerPerson}
            cocktailName={localizedCocktail.name}
            lang={lang}
            country={currentCountryConfig}
          />
        </section>

        {/* Step 3: Streamlined Operational Results (Shopping, DIY Tools, Preparation) */}
        <section aria-labelledby="planner-results" className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b-2 border-[#121212] gap-2">
            <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tight text-[#121212] flex items-center gap-2">
              <span className="w-3 h-3 bg-[#1040C0] inline-block border-2 border-[#121212]" />
              {t.resultsHeader.stepTitle(selectedCocktail.name)}
            </h3>
            <span className="text-xs font-black uppercase bg-[#F0C020] px-3 py-1 border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] self-start sm:self-auto">
              {partyResult.totalDrinks} {t.configurator.drinksTotal} • ~{formatCurrency(partyResult.costPerPerson, currentCountryConfig)} {t.shopping.perGuestSuffix}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Left Column (7 cols): Shopping Card & Bottles Calculation */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <ShoppingCard
                cocktail={localizedCocktail}
                config={partyConfig}
                result={partyResult}
                lang={lang}
                country={currentCountryConfig}
              />
            </div>

            {/* Right Column (5 cols): DIY Equipment & Preparation Steps */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <PreparationCard
                cocktailName={localizedCocktail.name}
                instructions={localizedCocktail.instructions}
                totalGuests={partyConfig.guestsCount}
                totalDrinks={partyResult.totalDrinks}
                lang={lang}
              />

              <EquipmentCard
                equipment={localizedCocktail.equipment}
                technique={localizedCocktail.technique}
                glass={localizedCocktail.glass}
                lang={lang}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Floating Action Buttons Area */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2">
        {/* Mobile Fast Jump to Selected Cocktail Dashboard */}
        <div className="sm:hidden">
          <button
            type="button"
            onClick={handleScrollToDashboard}
            className="flex items-center gap-2 bg-[#D02020] text-white px-3.5 py-2.5 border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 font-black uppercase text-xs cursor-pointer select-none"
          >
            <GlassWater className="w-4 h-4 text-[#F0C020]" />
            <span>{selectedCocktail.name}</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </div>

        {/* Global Floating Back-to-Top Button (Appears on Scroll) */}
        {showScrollTop && (
          <button
            type="button"
            onClick={handleScrollToTop}
            className="p-2.5 sm:px-3 sm:py-2 bg-[#F0C020] hover:bg-[#F0C020]/90 text-[#121212] border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212] hover:shadow-[5px_5px_0px_0px_#D02020] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all flex items-center gap-1.5 font-black uppercase text-xs cursor-pointer select-none animate-fadeIn"
            title={t.footer.backToTop}
            aria-label={t.footer.backToTop}
          >
            <ArrowUp className="w-4 h-4 text-[#121212]" />
            <span className="hidden md:inline">{t.footer.backToTop}</span>
          </button>
        )}
      </div>

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
};

export default App;
