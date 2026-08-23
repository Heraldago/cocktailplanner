import React, { useState, useMemo } from 'react';
import { COCKTAILS_DATABASE } from './data/cocktails';
import { Cocktail, CocktailCategory, PartyConfig, BrandTier, PartyIntensity } from './types/cocktail';
import { calculatePartyRequirements } from './utils/partyCalculator';
import { Header } from './components/Header';
import { HeroSearch } from './components/HeroSearch';
import { CocktailGrid } from './components/CocktailGrid';
import { PartyConfigurator } from './components/PartyConfigurator';
import { ShoppingCard } from './components/ShoppingCard';
import { EquipmentCard } from './components/EquipmentCard';
import { PreparationCard } from './components/PreparationCard';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  // State
  const [selectedCocktailId, setSelectedCocktailId] = useState<string>('negroni');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<CocktailCategory>('Tutti');
  const [partyConfig, setPartyConfig] = useState<PartyConfig>({
    cocktailId: 'negroni',
    guestsCount: 8,
    intensity: 'standard',
    brandTier: 'standard',
  });

  // Selected cocktail reference
  const selectedCocktail = useMemo(() => {
    return (
      COCKTAILS_DATABASE.find((c) => c.id === selectedCocktailId) ||
      COCKTAILS_DATABASE[0]
    );
  }, [selectedCocktailId]);

  // Filtered cocktails list
  const filteredCocktails = useMemo(() => {
    return COCKTAILS_DATABASE.filter((cocktail) => {
      // Category match
      if (selectedCategory !== 'Tutti' && cocktail.category !== selectedCategory) {
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
  }, [searchQuery, selectedCategory]);

  // Popular cocktails for quick suggestion pills
  const popularCocktails = useMemo(() => {
    return [
      { id: 'negroni', name: 'Negroni', category: 'The Unforgettables', colorAccent: 'red' },
      { id: 'aperol-spritz', name: 'Aperol Spritz', category: 'Aperitivi Italiani', colorAccent: 'yellow' },
      { id: 'espresso-martini', name: 'Espresso Martini', category: 'Contemporary', colorAccent: 'yellow' },
      { id: 'margarita', name: 'Margarita', category: 'Contemporary', colorAccent: 'yellow' },
      { id: 'mojito', name: 'Mojito', category: 'Contemporary', colorAccent: 'blue' },
      { id: 'gin-tonic', name: 'Gin Tonic', category: 'Contemporary', colorAccent: 'blue' },
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
    // Scroll smoothly to configurator/results
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

  const handleChangeIntensity = (intensity: PartyIntensity) => {
    setPartyConfig((prev) => ({ ...prev, intensity }));
  };

  const handleResetSearch = () => {
    setSearchQuery('');
    setSelectedCategory('Tutti');
  };

  return (
    <div className="min-h-screen bg-[#F0F0F0] flex flex-col justify-between">
      {/* Top Header */}
      <Header
        brandTier={partyConfig.brandTier}
        onToggleBrandTier={handleToggleBrandTier}
        totalCocktailsCount={COCKTAILS_DATABASE.length}
      />

      {/* Hero & Search Banner */}
      <HeroSearch
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onQuickSelect={(id) => {
          const found = COCKTAILS_DATABASE.find((c) => c.id === id);
          if (found) handleSelectCocktail(found);
        }}
        popularCocktails={popularCocktails}
      />

      {/* Main App Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-10 w-full flex-grow">
        {/* Step 1: Cocktail Selector Grid */}
        <section aria-labelledby="cocktail-selection">
          <CocktailGrid
            cocktails={filteredCocktails}
            selectedCocktailId={selectedCocktailId}
            onSelectCocktail={handleSelectCocktail}
            onResetSearch={handleResetSearch}
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
            cocktailName={selectedCocktail.name}
          />
        </section>

        {/* Step 3: Streamlined Operational Results (Shopping, DIY Tools, Preparation) */}
        <section aria-labelledby="planner-results" className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b-2 border-[#121212]">
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#121212] flex items-center gap-2">
              <span className="w-3 h-3 bg-[#1040C0] inline-block border-2 border-[#121212]" />
              3. Piano Operativo & Budget: {selectedCocktail.name}
            </h3>
            <span className="text-xs font-black uppercase bg-[#F0C020] px-3 py-1 border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212]">
              {partyResult.servingsSummary} • ~€{partyResult.costPerPerson.toFixed(2)}/persona
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column (7 cols): Shopping Card & Bottles Calculation */}
            <div className="lg:col-span-7 space-y-8">
              <ShoppingCard
                cocktail={selectedCocktail}
                config={partyConfig}
                result={partyResult}
              />
            </div>

            {/* Right Column (5 cols): DIY Equipment & Preparation Steps */}
            <div className="lg:col-span-5 space-y-8">
              <PreparationCard
                cocktailName={selectedCocktail.name}
                instructions={selectedCocktail.instructions}
                totalGuests={partyConfig.guestsCount}
                totalDrinks={partyResult.totalDrinks}
              />

              <EquipmentCard
                equipment={selectedCocktail.equipment}
                technique={selectedCocktail.technique}
                glass={selectedCocktail.glass}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
