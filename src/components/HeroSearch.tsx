import React, { useState } from 'react';
import { Search, X, Flame, GlassWater, HelpCircle, ChevronDown, ChevronUp, Sparkles, Store } from 'lucide-react';
import { Language, TRANSLATIONS } from '../i18n/translations';
import { TasteCategory, StrengthCategory, BauhausShape as ShapeType } from '../utils/semiotics';
import { BrandTier } from '../types/cocktail';
import { BauhausShape } from './BauhausShape';

interface HeroSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedTaste: TasteCategory;
  onTasteChange: (taste: TasteCategory) => void;
  selectedStrength: StrengthCategory;
  onStrengthChange: (strength: StrengthCategory) => void;
  brandTier: BrandTier;
  onBrandTierChange: (tier: BrandTier) => void;
  onQuickSelect: (cocktailId: string) => void;
  popularCocktails: Array<{ id: string; name: string; category: string; colorAccent: string }>;
  lang: Language;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({
  searchQuery,
  onSearchChange,
  selectedTaste,
  onTasteChange,
  selectedStrength,
  onStrengthChange,
  brandTier,
  onBrandTierChange,
  onQuickSelect,
  popularCocktails,
  lang,
}) => {
  const [showLegend, setShowLegend] = useState(false);
  const t = TRANSLATIONS[lang];

  const tasteOptions: Array<{ key: TasteCategory; label: string; shape?: ShapeType; color?: 'yellow' | 'blue' | 'red' }> = [
    { key: 'all', label: t.filter.all },
    { key: 'bitter', label: t.filter.bitter, shape: 'square', color: 'yellow' },
    { key: 'sweet-sour', label: t.filter.sweetSour, shape: 'triangle', color: 'blue' },
    { key: 'dry', label: t.filter.dry, shape: 'circle', color: 'red' },
  ];

  const strengthOptions: Array<{ key: StrengthCategory; label: string; swatchBg?: string; textClass?: string }> = [
    { key: 'all', label: t.filter.allStrength },
    { key: 'light', label: t.filter.light, swatchBg: 'bg-[#F0C020]' },
    { key: 'medium', label: t.filter.medium, swatchBg: 'bg-[#1040C0]' },
    { key: 'strong', label: t.filter.strong, swatchBg: 'bg-[#D02020]' },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] border-b-4 border-[#121212] relative overflow-hidden">
      {/* Bauhaus Dot background overlay */}
      <div className="absolute inset-0 bauhaus-dots-light pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Left Column: Headlines, Search & Bauhaus Filters */}
          <div className="lg:col-span-8 space-y-5">
            {/* Top Tag & Semiotics Guide Toggle */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#F0C020] border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212]">
                <Flame className="w-4 h-4 text-[#121212]" />
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#121212]">
                  {t.hero.badge}
                </span>
              </div>

              {/* Bauhaus Guide Button */}
              <button
                type="button"
                onClick={() => setShowLegend(!showLegend)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-black uppercase bg-[#F0F0F0] hover:bg-white text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 transition-all"
              >
                <HelpCircle className="w-3.5 h-3.5 text-[#1040C0]" />
                <span>{t.legend.title}</span>
                {showLegend ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>
            </div>

            {/* Collapsible Semiotic Legend Box */}
            {showLegend && (
              <div className="p-3.5 sm:p-4 bg-[#F0F0F0] border-4 border-[#121212] shadow-[4px_4px_0px_0px_#121212] space-y-3 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {/* Shapes / Taste */}
                  <div className="bg-white p-3 border-2 border-[#121212] space-y-2">
                    <span className="font-black uppercase tracking-wider text-[#121212] block border-b border-[#121212]/20 pb-1">
                      {t.legend.tasteProfiles}
                    </span>
                    <div className="space-y-2 text-[11px] font-medium text-[#121212]">
                      <div className="flex items-center gap-2">
                        <BauhausShape shape="square" color="yellow" size={18} />
                        <span>{t.legend.squareBitter}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BauhausShape shape="triangle" color="blue" size={18} />
                        <span>{t.legend.triangleSweetSour}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BauhausShape shape="circle" color="red" size={18} />
                        <span>{t.legend.circleDry}</span>
                      </div>
                    </div>
                  </div>

                  {/* Colors / Strength */}
                  <div className="bg-white p-3 border-2 border-[#121212] space-y-2">
                    <span className="font-black uppercase tracking-wider text-[#121212] block border-b border-[#121212]/20 pb-1">
                      {t.legend.strengths}
                    </span>
                    <div className="space-y-2 text-[11px] font-medium text-[#121212]">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 bg-[#F0C020] border-2 border-[#121212] inline-block shadow-[1px_1px_0px_0px_#121212]" />
                        <span>{t.legend.light}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 bg-[#1040C0] border-2 border-[#121212] inline-block shadow-[1px_1px_0px_0px_#121212]" />
                        <span>{t.legend.medium}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 bg-[#D02020] border-2 border-[#121212] inline-block shadow-[1px_1px_0px_0px_#121212]" />
                        <span>{t.legend.strong}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-[#121212] leading-[0.95]">
              {t.hero.titleMain}{' '}
              <span className="bg-[#D02020] text-white px-2 py-0.5 inline-block -rotate-1 border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212]">
                {t.hero.titleHighlight}
              </span>{' '}
              {t.hero.titleEnd}
            </h2>

            <p className="text-xs sm:text-base font-medium text-[#121212]/90 max-w-2xl leading-relaxed">
              {t.hero.description}
            </p>

            {/* Central Search Bar */}
            <div className="relative max-w-2xl">
              <div className="flex items-center bg-[#F0F0F0] border-4 border-[#121212] shadow-[5px_5px_0px_0px_#121212] focus-within:shadow-[7px_7px_0px_0px_#D02020] transition-all">
                <div className="p-3 sm:p-3.5 bg-[#F0C020] border-r-4 border-[#121212] flex items-center justify-center">
                  <Search className="w-5 h-5 sm:w-6 sm:h-6 text-[#121212]" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder={t.hero.searchPlaceholder}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 bg-transparent text-sm sm:text-base font-bold uppercase tracking-wide placeholder:normal-case placeholder:font-medium placeholder:text-[#121212]/50 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => onSearchChange('')}
                    className="p-3 text-[#121212] hover:bg-[#E0E0E0] border-l-2 border-[#121212]"
                    title="Clear search"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Filters Section (3 Rows: Taste Profile, Alcohol Strength, Brand/Price Tier) */}
            <div className="space-y-3 pt-1">
              {/* 1. Filter by Taste Profile (Shapes) */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#121212]/80 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-[#D02020] inline-block border border-[#121212]" />
                  {t.hero.filterTasteLabel}
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {tasteOptions.map((opt) => {
                    const isActive = selectedTaste === opt.key;
                    return (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => onTasteChange(opt.key)}
                        className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider border-2 border-[#121212] flex items-center gap-2 transition-all duration-100 cursor-pointer ${
                          isActive
                            ? 'bg-[#1040C0] text-white shadow-[3px_3px_0px_0px_#121212] -translate-y-0.5'
                            : 'bg-[#FFFFFF] text-[#121212] shadow-[2px_2px_0px_0px_#121212] hover:bg-[#F0F0F0]'
                        }`}
                      >
                        {opt.shape && opt.color ? (
                          <BauhausShape shape={opt.shape} color={opt.color} size={16} />
                        ) : (
                          <div className="flex items-center gap-0.5">
                            <span className="w-2 h-2 rounded-full bg-[#D02020] border border-[#121212]" />
                            <span className="w-2 h-2 bg-[#1040C0] border border-[#121212]" />
                            <span className="w-2 h-2 bg-[#F0C020] clip-triangle" />
                          </div>
                        )}
                        <span>{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Filter by Alcohol Strength (Colors) */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#121212]/80 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-[#F0C020] inline-block border border-[#121212]" />
                  {t.hero.filterStrengthLabel}
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {strengthOptions.map((opt) => {
                    const isActive = selectedStrength === opt.key;
                    return (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => onStrengthChange(opt.key)}
                        className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider border-2 border-[#121212] flex items-center gap-2 transition-all duration-100 cursor-pointer ${
                          isActive
                            ? 'bg-[#121212] text-white shadow-[3px_3px_0px_0px_#D02020] -translate-y-0.5'
                            : 'bg-[#FFFFFF] text-[#121212] shadow-[2px_2px_0px_0px_#121212] hover:bg-[#F0F0F0]'
                        }`}
                      >
                        {opt.swatchBg ? (
                          <span className={`w-3.5 h-3.5 ${opt.swatchBg} border-2 border-[#121212] inline-block shadow-[1px_1px_0px_0px_#121212]`} />
                        ) : (
                          <span className="w-2.5 h-2.5 bg-[#121212] inline-block" />
                        )}
                        <span>{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Selection: Brand & Budget Tier (Supermercato vs Enoteca) */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#121212]/80 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-[#121212] inline-block border border-[#121212]" />
                  {t.header.brandTierLabel}
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <button
                    type="button"
                    onClick={() => onBrandTierChange('standard')}
                    className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider border-2 border-[#121212] flex items-center gap-2 transition-all duration-100 cursor-pointer ${
                      brandTier === 'standard'
                        ? 'bg-[#1040C0] text-white shadow-[3px_3px_0px_0px_#121212] -translate-y-0.5'
                        : 'bg-[#FFFFFF] text-[#121212] shadow-[2px_2px_0px_0px_#121212] hover:bg-[#F0F0F0]'
                    }`}
                  >
                    <Store className="w-3.5 h-3.5" />
                    <span>{t.header.standardTier}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onBrandTierChange('premium')}
                    className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider border-2 border-[#121212] flex items-center gap-2 transition-all duration-100 cursor-pointer ${
                      brandTier === 'premium'
                        ? 'bg-[#D02020] text-white shadow-[3px_3px_0px_0px_#121212] -translate-y-0.5'
                        : 'bg-[#FFFFFF] text-[#121212] shadow-[2px_2px_0px_0px_#121212] hover:bg-[#F0F0F0]'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#F0C020]" />
                    <span>{t.header.premiumTier}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Popular Suggestion Chips */}
            <div className="pt-1 flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#121212]">
                {t.hero.suggestedLabel}
              </span>
              {popularCocktails.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => onQuickSelect(c.id)}
                  className="px-2 py-0.5 text-xs font-bold uppercase bg-[#F0F0F0] hover:bg-[#F0C020] text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] transition-all duration-100 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer"
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Bauhaus Geometric Graphic Poster (Desktop only) */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="w-full h-80 bg-[#1040C0] border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] relative overflow-hidden flex flex-col justify-between p-6">
              {/* Overlay Dots */}
              <div className="absolute inset-0 bauhaus-dots-white pointer-events-none" />

              {/* Bauhaus Graphic Elements */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="w-14 h-14 rounded-full bg-[#D02020] border-4 border-[#121212] shadow-[4px_4px_0px_0px_#121212] flex items-center justify-center text-white font-black text-xs" title="Dry Circle">
                  DRY
                </div>
                <div className="w-12 h-12 bg-[#F0C020] border-4 border-[#121212] rotate-45 shadow-[4px_4px_0px_0px_#121212] flex items-center justify-center text-[#121212] font-black text-xs" title="Bitter Square">
                  <span className="-rotate-45 font-black text-[10px]">BITTER</span>
                </div>
              </div>

              <div className="relative z-10 my-auto text-center">
                <div className="inline-block p-3 bg-white border-4 border-[#121212] shadow-[4px_4px_0px_0px_#121212]">
                  <GlassWater className="w-10 h-10 text-[#121212]" />
                </div>
                <div className="mt-3">
                  <span className="text-2xl font-black text-white uppercase tracking-tight block">
                    {t.hero.mathBadgeTitle}
                  </span>
                  <span className="text-xs font-bold text-[#F0C020] uppercase tracking-widest">
                    {t.hero.mathBadgeSub}
                  </span>
                </div>
              </div>

              <div className="relative z-10 flex justify-between items-end border-t-2 border-white/30 pt-3">
                <span className="text-xs font-bold text-white uppercase">Vite + React 19</span>
                <span className="text-xs font-bold text-[#F0C020] uppercase">Bauhaus Semiotics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
