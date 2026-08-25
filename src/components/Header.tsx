import React from 'react';
import { Globe } from 'lucide-react';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface HeaderProps {
  lang: Language;
  onToggleLang: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
}) => {
  const t = TRANSLATIONS[lang].header;

  return (
    <header className="w-full bg-[#FFFFFF] border-b-4 border-[#121212] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-3">
        {/* Brand Logo, Title & Made by strictly on a single line */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          {/* Bauhaus 3-Shape Mini Logo */}
          <div className="flex items-center gap-0.5 sm:gap-1 p-1 sm:p-1.5 bg-[#F0F0F0] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] shrink-0">
            <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#D02020] border border-[#121212]" title="Circle - Red" />
            <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-none bg-[#1040C0] border border-[#121212]" title="Square - Blue" />
            <span className="w-3 h-3 sm:w-4 sm:h-4 bg-[#F0C020] clip-triangle border border-[#121212]" title="Triangle - Yellow" />
          </div>

          {/* Title + Made By + Logo in a single, strictly horizontal row */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 flex-nowrap min-w-0">
            <h1 className="text-sm xs:text-base sm:text-2xl font-black uppercase tracking-tight text-[#121212] leading-none whitespace-nowrap">
              {t.title}
            </h1>

            {/* Author: tiny "made by" + 40x40px logo strictly inline */}
            <div className="flex items-center gap-1 shrink-0">
              <span className="text-[9px] sm:text-[11px] font-bold text-[#121212]/70 lowercase tracking-tight">
                made by
              </span>
              <img
                src="/author-logo.png"
                alt="HN Logo"
                className="w-7 h-7 sm:w-10 sm:h-10 rounded-full object-cover shrink-0"
              />
            </div>
          </div>
        </div>

        {/* Language Switcher */}
        <div className="flex items-center bg-[#F0F0F0] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] sm:shadow-[3px_3px_0px_0px_#121212] p-0.5 sm:p-1 shrink-0">
          <Globe className="w-3.5 h-3.5 text-[#121212] mx-1 hidden sm:inline-block" />
          <button
            type="button"
            onClick={() => onToggleLang('it')}
            className={`px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-black uppercase transition-all ${
              lang === 'it' ? 'bg-[#121212] text-white' : 'text-[#121212] hover:bg-[#E0E0E0]'
            }`}
          >
            IT
          </button>
          <button
            type="button"
            onClick={() => onToggleLang('en')}
            className={`px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-black uppercase transition-all ${
              lang === 'en' ? 'bg-[#121212] text-white' : 'text-[#121212] hover:bg-[#E0E0E0]'
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
};
