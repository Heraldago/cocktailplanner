import React, { useState } from 'react';
import { Cocktail } from '../types/cocktail';
import { Wine, Check, ChevronDown, ChevronUp, Layers } from 'lucide-react';
import { getCocktailSemiotics } from '../utils/semiotics';
import { Language, TRANSLATIONS } from '../i18n/translations';
import { BauhausShape } from './BauhausShape';

interface CocktailGridProps {
  cocktails: Cocktail[];
  selectedCocktailId: string;
  onSelectCocktail: (cocktail: Cocktail) => void;
  onResetSearch: () => void;
  lang: Language;
}

const INITIAL_VISIBLE_COUNT = 6;

export const CocktailGrid: React.FC<CocktailGridProps> = ({
  cocktails,
  selectedCocktailId,
  onSelectCocktail,
  onResetSearch,
  lang,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const t = TRANSLATIONS[lang].cocktailGrid;

  if (cocktails.length === 0) {
    return (
      <div className="w-full bg-white border-4 border-[#121212] p-8 text-center shadow-[6px_6px_0px_0px_#121212] my-6">
        <div className="inline-block p-4 bg-[#F0C020] border-2 border-[#121212] mb-3">
          <Wine className="w-8 h-8 text-[#121212]" />
        </div>
        <h3 className="text-2xl font-black uppercase tracking-tight text-[#121212]">
          {t.notFoundTitle}
        </h3>
        <p className="text-sm font-medium text-[#121212]/80 mt-1 max-w-md mx-auto">
          {t.notFoundDesc}
        </p>
        <button
          type="button"
          onClick={onResetSearch}
          className="mt-4 px-6 py-2.5 bg-[#D02020] text-white font-bold uppercase tracking-wider border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
        >
          {t.showAllBtn}
        </button>
      </div>
    );
  }

  // Slice to 6 if not expanded
  const displayedCocktails = isExpanded ? cocktails : cocktails.slice(0, INITIAL_VISIBLE_COUNT);
  const hasMoreCocktails = cocktails.length > INITIAL_VISIBLE_COUNT;

  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
    // If collapsing, smooth scroll back to top of the grid
    if (isExpanded) {
      const element = document.getElementById('cocktail-selection');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="space-y-4" id="cocktail-selection">
      {/* Grid Header & Counter */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h3 className="text-base sm:text-xl font-black uppercase tracking-tight text-[#121212] flex items-center gap-2">
          <span className="w-3 h-3 bg-[#D02020] rounded-full border-2 border-[#121212]" />
          {t.stepTitle(cocktails.length)}
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-[11px] sm:text-xs font-bold text-[#121212]/70 uppercase">
            {t.showingLabel(displayedCocktails.length, cocktails.length)}
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 bg-[#F0F0F0] border border-[#121212] text-[10px] font-black uppercase">
            {t.clickToPlan}
          </span>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {displayedCocktails.map((cocktail) => {
          const isSelected = cocktail.id === selectedCocktailId;
          const semiotics = getCocktailSemiotics(cocktail);
          const tasteLabel = lang === 'it' ? semiotics.tasteLabelIt : semiotics.tasteLabelEn;
          const strengthLabel = lang === 'it' ? semiotics.strengthLabelIt : semiotics.strengthLabelEn;

          return (
            <div
              key={cocktail.id}
              onClick={() => onSelectCocktail(cocktail)}
              className={`cursor-pointer transition-all duration-150 p-4 sm:p-5 border-4 border-[#121212] flex flex-col justify-between relative text-left select-none active:scale-[0.99] ${
                isSelected
                  ? 'bg-[#F0C020] shadow-[6px_6px_0px_0px_#121212] -translate-y-0.5'
                  : 'bg-white shadow-[4px_4px_0px_0px_#121212] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#121212]'
              }`}
            >
              {/* Corner Badge: Pure Bauhaus Geometric Shape + Color */}
              <div className="absolute top-3 right-3 flex items-center gap-2">
                {isSelected && (
                  <span className="flex items-center gap-1 px-1.5 py-0.5 bg-[#D02020] text-white text-[9px] font-black uppercase border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212]">
                    <Check className="w-3 h-3" /> {t.selectedBadge}
                  </span>
                )}
                {/* Pure Bauhaus Shape (Square=Bitter, Triangle=Dolce/Sour, Circle=Dry; Yellow=Light, Blue=Medium, Red=Strong) */}
                <BauhausShape
                  shape={semiotics.shape}
                  color={semiotics.color}
                  size={24}
                  title={`${tasteLabel} (${semiotics.shape === 'square' ? 'Quadrato' : semiotics.shape === 'triangle' ? 'Triangolo' : 'Cerchio'}) • ${strengthLabel}`}
                />
              </div>

              <div>
                {/* Taste & Category tag */}
                <div className="mb-2 flex items-center gap-1.5 flex-wrap pr-16">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 bg-[#F0F0F0] border border-[#121212] text-[#121212] inline-block">
                    {tasteLabel}
                  </span>
                </div>

                {/* Cocktail Name */}
                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#121212] leading-tight">
                  {cocktail.name}
                </h4>

                <p className="text-xs sm:text-sm font-medium text-[#121212]/80 mt-1 line-clamp-2 leading-snug">
                  {cocktail.tagline}
                </p>

                {/* Ingredients preview pills */}
                <div className="mt-3.5 pt-2.5 border-t-2 border-[#121212]/20">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#121212]/70 block mb-1.5">
                    {t.ingredientsLabel}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {cocktail.ingredients.map((ing) => (
                      <span
                        key={ing.name}
                        className="text-[10px] font-medium bg-[#F0F0F0] text-[#121212] px-1.5 py-0.5 border border-[#121212]"
                      >
                        {ing.name.split(' (')[0]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Meta bar */}
              <div className="mt-4 pt-2.5 border-t-2 border-[#121212] flex items-center justify-between text-xs font-bold">
                <span className="text-[11px] uppercase text-[#121212]/80 truncate max-w-[150px]">
                  {cocktail.glass.split(' (')[0]}
                </span>
                <span className="px-2 py-0.5 text-[10px] uppercase font-black bg-[#121212] text-white border border-[#121212]">
                  ~{cocktail.abv}% ABV
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* ⭐ BIG BAUHAUS "VEDI TUTTI I COCKTAIL" / "MOSTRA MENO" BUTTON */}
      {/* ========================================================================= */}
      {hasMoreCocktails && (
        <div className="pt-4 pb-2 flex flex-col items-center justify-center space-y-2">
          <button
            type="button"
            onClick={handleToggleExpand}
            className="w-full sm:w-auto min-w-[300px] sm:min-w-[360px] px-6 py-3.5 sm:py-4 bg-[#1040C0] hover:bg-[#1040C0]/90 text-white font-black uppercase tracking-wider text-sm sm:text-base border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] hover:shadow-[8px_8px_0px_0px_#D02020] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_0px_#121212] transition-all flex items-center justify-center gap-3 cursor-pointer select-none"
          >
            <Layers className="w-5 h-5 text-[#F0C020]" />
            <span>
              {isExpanded ? t.showLessBtn : t.viewAllBtn(cocktails.length)}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-[#F0C020]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#F0C020] animate-bounce" />
            )}
          </button>

          <p className="text-[11px] font-bold text-[#121212]/60 uppercase tracking-wider">
            {isExpanded
              ? lang === 'it'
                ? `Mostrando l'intera collezione di ${cocktails.length} ricette ufficiali`
                : `Showing the entire collection of ${cocktails.length} official recipes`
              : lang === 'it'
              ? `Clicca per scoprire tutti gli altri ${cocktails.length - INITIAL_VISIBLE_COUNT} cocktail`
              : `Click to reveal all other ${cocktails.length - INITIAL_VISIBLE_COUNT} cocktails`}
          </p>
        </div>
      )}
    </div>
  );
};
