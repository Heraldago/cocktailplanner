import React from 'react';
import { Cocktail } from '../types/cocktail';
import { Wine, Check } from 'lucide-react';
import { BauhausCornerBadge } from './BauhausDecorations';

interface CocktailGridProps {
  cocktails: Cocktail[];
  selectedCocktailId: string;
  onSelectCocktail: (cocktail: Cocktail) => void;
  onResetSearch: () => void;
}

export const CocktailGrid: React.FC<CocktailGridProps> = ({
  cocktails,
  selectedCocktailId,
  onSelectCocktail,
  onResetSearch,
}) => {
  if (cocktails.length === 0) {
    return (
      <div className="w-full bg-white border-4 border-[#121212] p-8 text-center shadow-[6px_6px_0px_0px_#121212] my-6">
        <div className="inline-block p-4 bg-[#F0C020] border-2 border-[#121212] mb-3">
          <Wine className="w-8 h-8 text-[#121212]" />
        </div>
        <h3 className="text-2xl font-black uppercase tracking-tight text-[#121212]">
          Nessun cocktail trovato
        </h3>
        <p className="text-sm font-medium text-[#121212]/80 mt-1 max-w-md mx-auto">
          Prova a cercare con un altro nome, un distillato (Gin, Tequila, Rum, Bourbon) o reimposta i filtri.
        </p>
        <button
          type="button"
          onClick={onResetSearch}
          className="mt-4 px-6 py-2.5 bg-[#D02020] text-white font-bold uppercase tracking-wider border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
        >
          Mostra tutti i cocktail
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#121212] flex items-center gap-2">
          <span className="w-3 h-3 bg-[#D02020] rounded-full border-2 border-[#121212]" />
          1. Seleziona il Cocktail ({cocktails.length} disponibili)
        </h3>
        <span className="text-xs font-bold text-[#121212]/70 uppercase">
          Clicca per pianificare
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cocktails.map((cocktail, index) => {
          const isSelected = cocktail.id === selectedCocktailId;
          const cornerShape = index % 3 === 0 ? 'circle' : index % 3 === 1 ? 'square' : 'triangle';
          const cornerColor = cocktail.colorAccent;

          return (
            <div
              key={cocktail.id}
              onClick={() => onSelectCocktail(cocktail)}
              className={`cursor-pointer transition-all duration-150 p-4 border-4 border-[#121212] flex flex-col justify-between relative text-left ${
                isSelected
                  ? 'bg-[#F0C020] shadow-[6px_6px_0px_0px_#121212] -translate-y-1'
                  : 'bg-white shadow-[4px_4px_0px_0px_#121212] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#121212]'
              }`}
            >
              {/* Corner Badge */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5">
                {isSelected ? (
                  <span className="flex items-center gap-1 px-2 py-0.5 bg-[#D02020] text-white text-[10px] font-black uppercase border-2 border-[#121212]">
                    <Check className="w-3 h-3" /> SELEZIONATO
                  </span>
                ) : (
                  <BauhausCornerBadge variant={cornerShape} color={cornerColor} />
                )}
              </div>

              <div>
                {/* Category tag */}
                <div className="mb-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 bg-[#F0F0F0] border-2 border-[#121212] text-[#121212] inline-block">
                    {cocktail.category}
                  </span>
                </div>

                {/* Cocktail Name */}
                <h4 className="text-xl font-black uppercase tracking-tight text-[#121212] leading-tight">
                  {cocktail.name}
                </h4>

                <p className="text-xs font-medium text-[#121212]/80 mt-1 line-clamp-2 leading-snug">
                  {cocktail.tagline}
                </p>

                {/* Ingredients list preview */}
                <div className="mt-3 pt-2 border-t-2 border-[#121212]/20">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#121212]/70 block mb-1">
                    Ingredienti:
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
                <span className="text-[11px] uppercase text-[#121212]/80">
                  {cocktail.glass.split(' (')[0]}
                </span>
                <span className="px-1.5 py-0.5 bg-[#121212] text-white text-[10px] uppercase">
                  ~{cocktail.abv}% ABV
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
