import React, { useState } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { Language, TRANSLATIONS } from '../i18n/translations';
import { CountryCode, COUNTRIES } from '../utils/countryLocalization';

interface HeaderProps {
  lang: Language;
  onToggleLang: (lang: Language) => void;
  selectedCountry: CountryCode;
  onSelectCountry: (country: CountryCode) => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  selectedCountry,
  onSelectCountry,
}) => {
  const [showPicker, setShowPicker] = useState(false);
  const t = TRANSLATIONS[lang].header;

  const currentCountry = COUNTRIES[selectedCountry] || COUNTRIES.US;

  const languagesList: Array<{ code: Language; label: string; flag: string }> = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  ];

  const handleCountryPick = (code: CountryCode) => {
    onSelectCountry(code);
    // Optionally switch language to the country default
    const country = COUNTRIES[code];
    if (country && country.defaultLang) {
      onToggleLang(country.defaultLang);
    }
    setShowPicker(false);
  };

  return (
    <header className="w-full bg-[#FFFFFF] border-b-4 border-[#121212] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-3 relative">
        {/* Left Brand Logo, Title & By Logo */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          {/* Bauhaus 3-Shape Mini Logo */}
          <div className="flex items-center gap-0.5 sm:gap-1 p-1 sm:p-1.5 bg-[#F0F0F0] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] shrink-0">
            <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#D02020] border border-[#121212]" title="Circle - Red" />
            <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-none bg-[#1040C0] border border-[#121212]" title="Square - Blue" />
            <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#F0C020] clip-triangle border border-[#121212]" title="Triangle - Yellow" />
          </div>

          {/* Title + By + Logo (strictly horizontal row) */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-nowrap min-w-0">
            <h1 className="text-sm xs:text-base sm:text-2xl font-black uppercase tracking-tight text-[#121212] leading-none whitespace-nowrap">
              {t.title}
            </h1>

            {/* Author: tiny "by" + 40x40px logo strictly inline */}
            <div className="flex items-center gap-1 shrink-0">
              <span className="text-[9px] sm:text-[11px] font-bold text-[#121212]/70 lowercase tracking-tight">
                by
              </span>
              <img
                src="/author-logo.png"
                alt="HN Logo"
                className="w-6 h-6 xs:w-7 xs:h-7 sm:w-9 sm:h-9 rounded-full object-cover shrink-0"
              />
            </div>
          </div>
        </div>

        {/* Right Country & Language Selector Button */}
        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => setShowPicker(!showPicker)}
            className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 bg-[#F0F0F0] hover:bg-white border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer select-none"
            title={`${t.countryLabel} ${currentCountry.nameLocal} (${lang.toUpperCase()})`}
          >
            <span className="text-sm sm:text-base leading-none">{currentCountry.flag}</span>
            <span className="text-[11px] sm:text-xs font-black uppercase text-[#121212]">
              {lang.toUpperCase()}
            </span>
            <ChevronDown className={`w-3 h-3 text-[#121212] transition-transform ${showPicker ? 'rotate-180' : ''}`} />
          </button>

          {/* Country & Language Bauhaus Modal / Popover */}
          {showPicker && (
            <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] p-3.5 z-50 animate-fadeIn space-y-3.5">
              {/* 1. Country / Supermarket Market Selector */}
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#121212]/80 block mb-1.5">
                  📍 {t.countryLabel}
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  {Object.values(COUNTRIES).map((c) => {
                    const isSelected = c.code === selectedCountry;
                    return (
                      <button
                        key={c.code}
                        type="button"
                        onClick={() => handleCountryPick(c.code)}
                        className={`p-1.5 text-left text-xs font-bold border-2 border-[#121212] flex items-center justify-between gap-1 transition-all ${
                          isSelected
                            ? 'bg-[#F0C020] shadow-[2px_2px_0px_0px_#121212]'
                            : 'bg-white hover:bg-[#F0F0F0]'
                        }`}
                      >
                        <span className="truncate">
                          {c.flag} {c.nameLocal}
                        </span>
                        {isSelected && <Check className="w-3 h-3 shrink-0 text-[#121212]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Direct Language Switcher */}
              <div className="pt-2 border-t-2 border-[#121212]/20">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#121212]/80 block mb-1.5 flex items-center gap-1">
                  <Globe className="w-3 h-3 text-[#1040C0]" /> {t.languageLabel}
                </span>
                <div className="grid grid-cols-3 gap-1">
                  {languagesList.map((l) => {
                    const isActive = l.code === lang;
                    return (
                      <button
                        key={l.code}
                        type="button"
                        onClick={() => {
                          onToggleLang(l.code);
                          setShowPicker(false);
                        }}
                        className={`py-1 px-1.5 text-xs font-black uppercase text-center border-2 border-[#121212] transition-all ${
                          isActive
                            ? 'bg-[#1040C0] text-white shadow-[2px_2px_0px_0px_#121212]'
                            : 'bg-white hover:bg-[#F0F0F0] text-[#121212]'
                        }`}
                      >
                        {l.code.toUpperCase()}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
