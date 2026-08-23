import React from 'react';
import { Search, X, Flame, GlassWater } from 'lucide-react';
import { CocktailCategory } from '../types/cocktail';

interface HeroSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: CocktailCategory;
  onCategoryChange: (category: CocktailCategory) => void;
  onQuickSelect: (cocktailId: string) => void;
  popularCocktails: Array<{ id: string; name: string; category: string; colorAccent: string }>;
}

const CATEGORIES: CocktailCategory[] = [
  'Tutti',
  'Aperitivi Italiani',
  'IBA The Unforgettables',
  'IBA Contemporary Classics',
];

export const HeroSearch: React.FC<HeroSearchProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  onQuickSelect,
  popularCocktails,
}) => {
  return (
    <section className="w-full bg-[#FFFFFF] border-b-4 border-[#121212] relative overflow-hidden">
      {/* Bauhaus Dot background overlay */}
      <div className="absolute inset-0 bauhaus-dots-light pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Headlines & Search */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0C020] border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212]">
              <Flame className="w-4 h-4 text-[#121212]" />
              <span className="text-xs font-black uppercase tracking-widest text-[#121212]">
                Form Follows Function • Bauhaus Cocktail Engine
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-[#121212] leading-[0.92]">
              PIANIFICA IL TUO <span className="bg-[#D02020] text-white px-2 py-0.5 inline-block -rotate-1 border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212]">COCKTAIL</span> PARTY
            </h2>

            <p className="text-base sm:text-lg font-medium text-[#121212]/90 max-w-2xl leading-relaxed">
              Scegli il drink, imposta gli invitati e ottieni la lista esatta della spesa in bottiglie reali dei supermercati italiani, gli strumenti DIY di casa e le istruzioni in caraffa.
            </p>

            {/* Central Search Bar */}
            <div className="relative max-w-2xl">
              <div className="flex items-center bg-[#F0F0F0] border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] focus-within:shadow-[8px_8px_0px_0px_#D02020] transition-all">
                <div className="p-3.5 bg-[#F0C020] border-r-4 border-[#121212] flex items-center justify-center">
                  <Search className="w-6 h-6 text-[#121212]" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Cerca per nome, distillato (Gin, Tequila, Campari...) o tipo..."
                  className="w-full px-4 py-3.5 bg-transparent text-base sm:text-lg font-bold uppercase tracking-wide placeholder:normal-case placeholder:font-medium placeholder:text-[#121212]/50 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => onSearchChange('')}
                    className="p-3 text-[#121212] hover:bg-[#E0E0E0] border-l-2 border-[#121212]"
                    title="Cancella ricerca"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#121212]/70 block">
                Filtra per Categoria:
              </span>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((category) => {
                  const isActive = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => onCategoryChange(category)}
                      className={`px-3.5 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-[#121212] transition-all duration-150 ${
                        isActive
                          ? 'bg-[#1040C0] text-white shadow-[4px_4px_0px_0px_#121212] -translate-y-0.5'
                          : 'bg-[#FFFFFF] text-[#121212] shadow-[2px_2px_0px_0px_#121212] hover:bg-[#F0F0F0]'
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Popular Suggestion Chips */}
            <div className="pt-1 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#121212]">
                ⚡ Suggeriti:
              </span>
              {popularCocktails.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => onQuickSelect(c.id)}
                  className="px-2.5 py-1 text-xs font-bold uppercase bg-[#F0F0F0] hover:bg-[#F0C020] text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] transition-all duration-150 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Bauhaus Geometric Poster Graphic */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="w-full h-80 bg-[#1040C0] border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] relative overflow-hidden flex flex-col justify-between p-6">
              {/* Overlay Dots */}
              <div className="absolute inset-0 bauhaus-dots-white pointer-events-none" />

              {/* Bauhaus Graphic Elements */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="w-16 h-16 rounded-full bg-[#D02020] border-4 border-[#121212] shadow-[4px_4px_0px_0px_#121212]" />
                <div className="w-12 h-12 bg-[#F0C020] border-4 border-[#121212] rotate-45 shadow-[4px_4px_0px_0px_#121212]" />
              </div>

              <div className="relative z-10 my-auto text-center">
                <div className="inline-block p-3 bg-white border-4 border-[#121212] shadow-[4px_4px_0px_0px_#121212]">
                  <GlassWater className="w-10 h-10 text-[#121212]" />
                </div>
                <div className="mt-3">
                  <span className="text-2xl font-black text-white uppercase tracking-tight block">
                    100% MATEMATICA
                  </span>
                  <span className="text-xs font-bold text-[#F0C020] uppercase tracking-widest">
                    Zero sprechi • Spesa esatta
                  </span>
                </div>
              </div>

              <div className="relative z-10 flex justify-between items-end border-t-2 border-white/30 pt-3">
                <span className="text-xs font-bold text-white uppercase">Vite + React + TS</span>
                <span className="text-xs font-bold text-[#F0C020] uppercase">IBA Standards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
