import React from 'react';
import { Sparkles, GlassWater } from 'lucide-react';
import { BrandTier } from '../types/cocktail';

interface HeaderProps {
  brandTier: BrandTier;
  onToggleBrandTier: (tier: BrandTier) => void;
  totalCocktailsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  brandTier,
  onToggleBrandTier,
  totalCocktailsCount,
}) => {
  return (
    <header className="w-full bg-[#FFFFFF] border-b-4 border-[#121212] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-4">
          {/* Bauhaus 3-Shape Logo */}
          <div className="flex items-center gap-1.5 p-2 bg-[#F0F0F0] border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212]">
            <span className="w-5 h-5 rounded-full bg-[#D02020] border-2 border-[#121212]" title="Circle - Bauhaus Red" />
            <span className="w-5 h-5 rounded-none bg-[#1040C0] border-2 border-[#121212]" title="Square - Bauhaus Blue" />
            <span 
              className="w-5 h-5 bg-[#F0C020] clip-triangle" 
              style={{ filter: 'drop-shadow(2px 2px 0px #121212)' }}
              title="Triangle - Bauhaus Yellow" 
            />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#121212] leading-none">
                Cocktail Party Planner
              </h1>
              <span className="hidden sm:inline-block px-2 py-0.5 text-xs font-black uppercase bg-[#F0C020] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212]">
                IBA + Italy Edition
              </span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-[#121212]/80 mt-0.5">
              Calcolatore spesa supermarket & guida fai-da-te per {totalCocktailsCount} cocktail
            </p>
          </div>
        </div>

        {/* Global Controls: Brand Tier Switcher */}
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-[#F0F0F0] p-1 border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212]">
            <span className="text-xs font-bold uppercase tracking-wider px-2 text-[#121212]">
              Fascia Brand:
            </span>
            <button
              type="button"
              onClick={() => onToggleBrandTier('standard')}
              className={`px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all duration-150 ${
                brandTier === 'standard'
                  ? 'bg-[#1040C0] text-white border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212]'
                  : 'bg-transparent text-[#121212] hover:bg-[#E0E0E0]'
              }`}
            >
              <span className="flex items-center gap-1">
                <GlassWater className="w-3.5 h-3.5" />
                Supermercato
              </span>
            </button>
            <button
              type="button"
              onClick={() => onToggleBrandTier('premium')}
              className={`px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all duration-150 ${
                brandTier === 'premium'
                  ? 'bg-[#D02020] text-white border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212]'
                  : 'bg-transparent text-[#121212] hover:bg-[#E0E0E0]'
              }`}
            >
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Premium / Enoteca
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
