import React from 'react';
import { Users, Minus, Plus, Coins, GlassWater } from 'lucide-react';
import { PartyConfig, PartyIntensity } from '../types/cocktail';
import { INTENSITY_DRINKS_MAP } from '../utils/partyCalculator';

interface PartyConfiguratorProps {
  config: PartyConfig;
  onChangeGuests: (count: number) => void;
  onChangeIntensity: (intensity: PartyIntensity, drinks?: number) => void;
  totalDrinks: number;
  totalShoppingCost?: number;
  costPerPerson?: number;
  cocktailName: string;
}

export const PartyConfigurator: React.FC<PartyConfiguratorProps> = ({
  config,
  onChangeGuests,
  onChangeIntensity,
  totalDrinks,
  totalShoppingCost,
  costPerPerson,
  cocktailName,
}) => {
  const intensityLevels: Array<{ key: PartyIntensity; drinks: number; label: string; icon: string; sub: string }> = [
    {
      key: 'aperitivo',
      drinks: 1,
      label: 'Aperitivo',
      icon: '🍸',
      sub: '1 drink',
    },
    {
      key: 'standard',
      drinks: 2,
      label: 'Standard',
      icon: '🥂',
      sub: '2 drink',
    },
    {
      key: 'festa',
      drinks: 3,
      label: 'Festa',
      icon: '🎉',
      sub: '3 drink',
    },
    {
      key: 'maratona',
      drinks: 4,
      label: 'Maratona',
      icon: '⚡',
      sub: '4 drink',
    },
    {
      key: 'openbar',
      drinks: 5,
      label: 'Open Bar',
      icon: '🔥',
      sub: '5 drink',
    },
  ];

  const currentDrinksPerPerson = config.drinksPerPerson !== undefined
    ? config.drinksPerPerson
    : (INTENSITY_DRINKS_MAP[config.intensity]?.drinks || 2);

  const handleSelectDrinks = (drinks: number) => {
    const matched = intensityLevels.find((l) => l.drinks === drinks) || intensityLevels[1];
    onChangeIntensity(matched.key, drinks);
  };

  return (
    <div className="w-full bg-[#FFFFFF] border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-5 sm:p-7 relative">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b-4 border-[#121212]">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-[#D02020] border-2 border-[#121212] text-white shadow-[3px_3px_0px_0px_#121212]">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#121212]">
              2. Configura il Party
            </h3>
            <p className="text-xs sm:text-sm font-medium text-[#121212]/80">
              Parametri per il calcolo delle porzioni di <strong className="text-[#121212] underline">{cocktailName}</strong>
            </p>
          </div>
        </div>

        {/* Big Reactive Drinks & Budget Badges */}
        <div className="flex items-center gap-2 flex-wrap self-start sm:self-auto">
          {totalShoppingCost !== undefined && costPerPerson !== undefined && (
            <div className="bg-white border-2 border-[#121212] px-3 py-1.5 shadow-[3px_3px_0px_0px_#121212] text-right">
              <span className="text-[9px] font-black uppercase tracking-wider text-[#121212]/70 block flex items-center gap-1 justify-end">
                <Coins className="w-3 h-3 text-[#D02020]" />
                Spesa Stimata
              </span>
              <span className="text-base sm:text-lg font-black text-[#121212]">
                ~€ {totalShoppingCost.toFixed(0)} <span className="text-xs text-[#1040C0]">({costPerPerson.toFixed(2)}€/p)</span>
              </span>
            </div>
          )}

          <div className="bg-[#F0C020] border-4 border-[#121212] px-4 py-1.5 shadow-[4px_4px_0px_0px_#121212] text-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#121212] block">
              Fabbisogno Totale
            </span>
            <span className="text-xl sm:text-2xl font-black text-[#121212] uppercase tracking-tighter">
              {totalDrinks} DRINK
            </span>
          </div>
        </div>
      </div>

      {/* Main Form controls grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
        {/* Left Column: Number of Guests Slider & Presets (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <label htmlFor="guests-slider" className="text-sm font-black uppercase tracking-wider text-[#121212] flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#1040C0] inline-block border border-[#121212]" />
              Numero di Invitati:
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onChangeGuests(Math.max(1, config.guestsCount - 1))}
                className="w-8 h-8 flex items-center justify-center bg-[#F0F0F0] hover:bg-[#E0E0E0] text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none font-bold"
                aria-label="Diminuisci invitati"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-14 text-center text-xl font-black bg-[#F0F0F0] border-2 border-[#121212] py-0.5 shadow-[2px_2px_0px_0px_#121212]">
                {config.guestsCount}
              </span>
              <button
                type="button"
                onClick={() => onChangeGuests(Math.min(30, config.guestsCount + 1))}
                className="w-8 h-8 flex items-center justify-center bg-[#F0F0F0] hover:bg-[#E0E0E0] text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none font-bold"
                aria-label="Aumenta invitati"
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
              <span>1 persona</span>
              <span>10 persone</span>
              <span>20 persone</span>
              <span>30 (Max)</span>
            </div>
          </div>

          {/* Quick preset buttons */}
          <div className="flex items-center gap-2 pt-1 flex-wrap">
            <span className="text-xs font-bold uppercase text-[#121212]/70">Preset:</span>
            {[2, 4, 6, 8, 12, 16, 20, 25].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => onChangeGuests(preset)}
                className={`px-2.5 py-0.5 text-xs font-bold uppercase border-2 border-[#121212] transition-all duration-100 ${
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
            <label className="text-sm font-black uppercase tracking-wider text-[#121212] flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#F0C020] inline-block border border-[#121212]" />
              Drink a Testa (1 - 5):
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleSelectDrinks(Math.max(1, currentDrinksPerPerson - 1))}
                className="w-8 h-8 flex items-center justify-center bg-[#F0F0F0] hover:bg-[#E0E0E0] text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none font-bold"
                aria-label="Diminuisci drink a testa"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-2.5 py-0.5 text-center text-sm font-black bg-[#F0C020] text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] flex items-center gap-1">
                <GlassWater className="w-3.5 h-3.5" />
                {currentDrinksPerPerson} {currentDrinksPerPerson === 1 ? 'drink' : 'drink'}
              </span>
              <button
                type="button"
                onClick={() => handleSelectDrinks(Math.min(5, currentDrinksPerPerson + 1))}
                className="w-8 h-8 flex items-center justify-center bg-[#F0F0F0] hover:bg-[#E0E0E0] text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none font-bold"
                aria-label="Aumenta drink a testa"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 5-Levels Grid Selector (1, 2, 3, 4, 5) */}
          <div className="grid grid-cols-5 gap-1.5">
            {intensityLevels.map((opt) => {
              const isSelected = currentDrinksPerPerson === opt.drinks;
              return (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => handleSelectDrinks(opt.drinks)}
                  className={`p-2 text-center border-2 border-[#121212] flex flex-col items-center justify-between transition-all duration-150 ${
                    isSelected
                      ? 'bg-[#1040C0] text-white shadow-[3px_3px_0px_0px_#121212] -translate-y-0.5'
                      : 'bg-[#F0F0F0] text-[#121212] shadow-[2px_2px_0px_0px_#121212] hover:bg-white'
                  }`}
                >
                  <span className="text-base sm:text-lg mb-0.5">{opt.icon}</span>
                  <div>
                    <span className="text-xs sm:text-sm font-black uppercase block leading-tight">
                      {opt.drinks}
                    </span>
                    <span className={`text-[9px] font-bold block truncate mt-0.5 ${isSelected ? 'text-white/90' : 'text-[#121212]/70'}`}>
                      {opt.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <p className="text-[11px] font-medium text-[#121212]/80 bg-[#F0F0F0] p-2 border border-[#121212]">
            💡 {INTENSITY_DRINKS_MAP[config.intensity]?.description || `${currentDrinksPerPerson} drink per ogni ospite.`}
          </p>
        </div>
      </div>
    </div>
  );
};
