import React from 'react';
import { Sparkles, GlassWater, Globe } from 'lucide-react';
import { BrandTier } from '../types/cocktail';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface HeaderProps {
  brandTier: BrandTier;
  onToggleBrandTier: (tier: BrandTier) => void;
  totalCocktailsCount: number;
  lang: Language;
  onToggleLang: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({
  brandTier,
  onToggleBrandTier,
  totalCocktailsCount,
  lang,
  onToggleLang,
}) => {
  const t = TRANSLATIONS[lang].header;

  return (
    <header className="w-full bg-[#FFFFFF] border-b-4 border-[#121212] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
          <div className="flex items-center gap-3">
            {/* Bauhaus 3-Shape Mini Logo */}
            <div className="flex items-center gap-1 p-1.5 bg-[#F0F0F0] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212]">
              <span className="w-4 h-4 rounded-full bg-[#D02020] border border-[#121212]" title="Circle - Red" />
              <span className="w-4 h-4 rounded-none bg-[#1040C0] border border-[#121212]" title="Square - Blue" />
              <span className="w-4 h-4 bg-[#F0C020] clip-triangle border border-[#121212]" title="Triangle - Yellow" />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-lg sm:text-2xl font-black uppercase tracking-tight text-[#121212] leading-none">
                  {t.title}
                </h1>
                <span className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-black uppercase bg-[#F0C020] border border-[#121212]">
                  {t.edition}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-medium text-[#121212]/80 mt-0.5 hidden xs:block">
                {t.subtitle(totalCocktailsCount)}
              </p>
            </div>
          </div>

          {/* Language Switcher on mobile right */}
          <div className="flex sm:hidden items-center bg-[#F0F0F0] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] p-0.5">
            <button
              type="button"
              onClick={() => onToggleLang('it')}
              className={`px-2 py-1 text-[10px] font-black uppercase transition-all ${
                lang === 'it' ? 'bg-[#121212] text-white' : 'text-[#121212]'
              }`}
            >
              IT
            </button>
            <button
              type="button"
              onClick={() => onToggleLang('en')}
              className={`px-2 py-1 text-[10px] font-black uppercase transition-all ${
                lang === 'en' ? 'bg-[#121212] text-white' : 'text-[#121212]'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Global Controls: Brand Tier Switcher + Language Switcher (Desktop) */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-between sm:justify-end">
          {/* Brand Tier Switcher */}
          <div className="flex items-center bg-[#F0F0F0] p-1 border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] flex-1 sm:flex-none justify-center">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-1.5 text-[#121212] hidden md:inline">
              {t.brandTierLabel}
            </span>
            <button
              type="button"
              onClick={() => onToggleBrandTier('standard')}
              className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-150 flex-1 sm:flex-none ${
                brandTier === 'standard'
                  ? 'bg-[#1040C0] text-white border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212]'
                  : 'bg-transparent text-[#121212] hover:bg-[#E0E0E0]'
              }`}
            >
              <span className="flex items-center justify-center gap-1">
                <GlassWater className="w-3 h-3" />
                {t.standardTier}
              </span>
            </button>
            <button
              type="button"
              onClick={() => onToggleBrandTier('premium')}
              className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-150 flex-1 sm:flex-none ${
                brandTier === 'premium'
                  ? 'bg-[#D02020] text-white border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212]'
                  : 'bg-transparent text-[#121212] hover:bg-[#E0E0E0]'
              }`}
            >
              <span className="flex items-center justify-center gap-1">
                <Sparkles className="w-3 h-3" />
                {t.premiumTier}
              </span>
            </button>
          </div>

          {/* Language Switcher (Desktop) */}
          <div className="hidden sm:flex items-center bg-[#F0F0F0] border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] p-1">
            <Globe className="w-3.5 h-3.5 text-[#121212] mx-1" />
            <button
              type="button"
              onClick={() => onToggleLang('it')}
              className={`px-2 py-0.5 text-xs font-black uppercase transition-all ${
                lang === 'it' ? 'bg-[#121212] text-white border border-[#121212]' : 'text-[#121212] hover:bg-[#E0E0E0]'
              }`}
            >
              IT
            </button>
            <button
              type="button"
              onClick={() => onToggleLang('en')}
              className={`px-2 py-0.5 text-xs font-black uppercase transition-all ${
                lang === 'en' ? 'bg-[#121212] text-white border border-[#121212]' : 'text-[#121212] hover:bg-[#E0E0E0]'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
