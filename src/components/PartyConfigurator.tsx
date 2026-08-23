import React from 'react';
import { Users, Minus, Plus, Coins, GlassWater } from 'lucide-react';
import { PartyConfig, PartyIntensity } from '../types/cocktail';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface PartyConfiguratorProps {
  config: PartyConfig;
  onChangeGuests: (count: number) => void;
  onChangeIntensity: (intensity: PartyIntensity, drinks?: number) => void;
  totalDrinks: number;
  totalShoppingCost?: number;
  costPerPerson?: number;
  cocktailName: string;
  lang: Language;
}

export const PartyConfigurator: React.FC<PartyConfiguratorProps> = ({
  config,
  onChangeGuests,
  onChangeIntensity,
  totalDrinks,
  totalShoppingCost,
  costPerPerson,
  cocktailName,
  lang,
}) => {
  const t = TRANSLATIONS[lang].configurator;

  const intensityLevels: Array<{ key: PartyIntensity; drinks: number; label: string; icon: string; sub: string; desc: string }> = [
    {
      key: 'aperitivo',
      drinks: 1,
      label: t.intensityLevels.aperitivo.label,
      icon: '🍸',
      sub: t.intensityLevels.aperitivo.sub,
      desc: t.intensityLevels.aperitivo.desc,
    },
    {
      key: 'standard',
      drinks: 2,
      label: t.intensityLevels.standard.label,
      icon: '🥂',
      sub: t.intensityLevels.standard.sub,
      desc: t.intensityLevels.standard.desc,
    },
    {
      key: 'festa',
      drinks: 3,
      label: t.intensityLevels.festa.label,
      icon: '🎉',
      sub: t.intensityLevels.festa.sub,
      desc: t.intensityLevels.festa.desc,
    },
    {
      key: 'maratona',
      drinks: 4,
      label: t.intensityLevels.maratona.label,
      icon: '⚡',
      sub: t.intensityLevels.maratona.sub,
      desc: t.intensityLevels.maratona.desc,
    },
    {
      key: 'openbar',
      drinks: 5,
      label: t.intensityLevels.openbar.label,
      icon: '🔥',
      sub: t.intensityLevels.openbar.sub,
      desc: t.intensityLevels.openbar.desc,
    },
  ];

  const currentDrinksPerPerson = config.drinksPerPerson !== undefined
    ? config.drinksPerPerson
    : (intensityLevels.find((l) => l.key === config.intensity)?.drinks || 2);

  const handleSelectDrinks = (drinks: number) => {
    const matched = intensityLevels.find((l) => l.drinks === drinks) || intensityLevels[1];
    onChangeIntensity(matched.key, drinks);
  };

  const activeLevelInfo = intensityLevels.find((l) => l.drinks === currentDrinksPerPerson) || intensityLevels[1];

  return (
    <div className="w-full bg-[#FFFFFF] border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-4 sm:p-7 relative">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 sm:pb-5 border-b-4 border-[#121212]">
        <div className="flex items-center gap-3">
          <div className="p-2 sm:p-2.5 bg-[#D02020] border-2 border-[#121212] text-white shadow-[3px_3px_0px_0px_#121212]">
            <Users className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tight text-[#121212]">
              {t.stepTitle}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-[#121212]/80">
              {t.subtitle(cocktailName)}
            </p>
          </div>
        </div>

        {/* Big Reactive Drinks & Budget Badges */}
        <div className="flex items-center gap-2 flex-wrap self-start sm:self-auto w-full sm:w-auto justify-between sm:justify-end">
          {totalShoppingCost !== undefined && costPerPerson !== undefined && (
            <div className="bg-white border-2 border-[#121212] px-2.5 sm:px-3 py-1 sm:py-1.5 shadow-[3px_3px_0px_0px_#121212] text-right flex-1 sm:flex-none">
              <span className="text-[9px] font-black uppercase tracking-wider text-[#121212]/70 block flex items-center gap-1 justify-end">
                <Coins className="w-3 h-3 text-[#D02020]" />
                {t.estimatedBudgetBadge}
              </span>
              <span className="text-sm sm:text-lg font-black text-[#121212]">
                ~€ {totalShoppingCost.toFixed(0)} <span className="text-[11px] sm:text-xs text-[#1040C0]">({costPerPerson.toFixed(2)}€/p)</span>
              </span>
            </div>
          )}

          <div className="bg-[#F0C020] border-4 border-[#121212] px-3 sm:px-4 py-1 sm:py-1.5 shadow-[4px_4px_0px_0px_#121212] text-center flex-1 sm:flex-none">
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#121212] block">
              {t.totalNeedsBadge}
            </span>
            <span className="text-lg sm:text-2xl font-black text-[#121212] uppercase tracking-tighter">
              {totalDrinks} {t.drinksTotal}
            </span>
          </div>
        </div>
      </div>

      {/* Main Form controls grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 pt-5 sm:pt-6">
        {/* Left Column: Number of Guests Slider & Presets (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <label htmlFor="guests-slider" className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#121212] flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-[#1040C0] inline-block border border-[#121212]" />
              {t.guestsLabel}
            </label>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => onChangeGuests(Math.max(1, config.guestsCount - 1))}
                className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-[#F0F0F0] hover:bg-[#E0E0E0] text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none font-bold"
                aria-label="Decrease guests"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 sm:w-14 text-center text-lg sm:text-xl font-black bg-[#F0F0F0] border-2 border-[#121212] py-0.5 shadow-[2px_2px_0px_0px_#121212]">
                {config.guestsCount}
              </span>
              <button
                type="button"
                onClick={() => onChangeGuests(Math.min(30, config.guestsCount + 1))}
                className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-[#F0F0F0] hover:bg-[#E0E0E0] text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none font-bold"
                aria-label="Increase guests"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Slider input */}
          <div className="space-y-1">
            <input
              id="guests-slider"
              type="range"
              min="1"
              max="30"
              value={config.guestsCount}
              onChange={(e) => onChangeGuests(parseInt(e.target.value, 10))}
              className="w-full h-3 bg-[#E0E0E0] appearance-none border-2 border-[#121212] cursor-pointer accent-[#D02020]"
            />
            <div className="flex justify-between text-[10px] font-black uppercase text-[#121212]/60">
              <span>1 {t.personSingular}</span>
              <span>10 {t.personPlural}</span>
              <span>20 {t.personPlural}</span>
              <span>{t.maxGuests}</span>
            </div>
          </div>

          {/* Quick preset buttons */}
          <div className="flex items-center gap-1.5 pt-1 flex-wrap">
            <span className="text-xs font-bold uppercase text-[#121212]/70">{t.quickPresetsLabel}</span>
            {[2, 4, 6, 8, 12, 16, 20, 25].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => onChangeGuests(preset)}
                className={`px-2 py-0.5 text-xs font-bold uppercase border-2 border-[#121212] transition-all duration-100 ${
                  config.guestsCount === preset
                    ? 'bg-[#121212] text-white shadow-[2px_2px_0px_0px_#D02020]'
                    : 'bg-[#F0F0F0] text-[#121212] hover:bg-white shadow-[2px_2px_0px_0px_#121212]'
                }`}
              >
                {preset} p.
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Drink a Testa Selector (1 to 5 drinks) (6 cols) */}
        <div className="lg:col-span-6 space-y-3 lg:border-l-4 lg:border-[#121212] lg:pl-6">
          <div className="flex items-center justify-between">
            <label className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#121212] flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-[#F0C020] inline-block border border-[#121212]" />
              {t.drinksPerPersonLabel}
            </label>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => handleSelectDrinks(Math.max(1, currentDrinksPerPerson - 1))}
                className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-[#F0F0F0] hover:bg-[#E0E0E0] text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none font-bold"
                aria-label="Decrease drinks per person"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-2.5 py-0.5 text-center text-xs sm:text-sm font-black bg-[#F0C020] text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] flex items-center gap-1">
                <GlassWater className="w-3.5 h-3.5" />
                {currentDrinksPerPerson} {currentDrinksPerPerson === 1 ? t.drinksPerPersonSingular : t.drinksPerPersonPlural}
              </span>
              <button
                type="button"
                onClick={() => handleSelectDrinks(Math.min(5, currentDrinksPerPerson + 1))}
                className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-[#F0F0F0] hover:bg-[#E0E0E0] text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none font-bold"
                aria-label="Increase drinks per person"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 5-Levels Grid Selector (1, 2, 3, 4, 5) */}
          <div className="grid grid-cols-5 gap-1 sm:gap-1.5">
            {intensityLevels.map((opt) => {
              const isSelected = currentDrinksPerPerson === opt.drinks;
              return (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => handleSelectDrinks(opt.drinks)}
                  className={`p-1.5 sm:p-2 text-center border-2 border-[#121212] flex flex-col items-center justify-between transition-all duration-100 ${
                    isSelected
                      ? 'bg-[#1040C0] text-white shadow-[3px_3px_0px_0px_#121212] -translate-y-0.5'
                      : 'bg-[#F0F0F0] text-[#121212] shadow-[2px_2px_0px_0px_#121212] hover:bg-white'
                  }`}
                >
                  <span className="text-sm sm:text-lg mb-0.5">{opt.icon}</span>
                  <div>
                    <span className="text-xs sm:text-sm font-black uppercase block leading-tight">
                      {opt.drinks}
                    </span>
                    <span className={`text-[8px] sm:text-[9px] font-bold block truncate mt-0.5 ${isSelected ? 'text-white/90' : 'text-[#121212]/70'}`}>
                      {opt.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <p className="text-[11px] font-medium text-[#121212]/80 bg-[#F0F0F0] p-2 border border-[#121212]">
            💡 {activeLevelInfo.desc}
          </p>
        </div>
      </div>
    </div>
  );
};
