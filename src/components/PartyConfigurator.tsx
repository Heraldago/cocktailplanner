import React from 'react';
import { Users, Minus, Plus, Coins } from 'lucide-react';
import { PartyConfig, PartyIntensity } from '../types/cocktail';
import { INTENSITY_DRINKS_MAP } from '../utils/partyCalculator';

interface PartyConfiguratorProps {
  config: PartyConfig;
  onChangeGuests: (count: number) => void;
  onChangeIntensity: (intensity: PartyIntensity) => void;
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
  const intensityOptions: Array<{ key: PartyIntensity; label: string; icon: string; sub: string }> = [
    {
      key: 'aperitivo',
      label: 'Aperitivo',
      icon: '🍸',
      sub: '1 drink a testa',
    },
    {
      key: 'standard',
      label: 'Standard',
      icon: '🥂',
      sub: '2 drink a testa',
    },
    {
      key: 'festa',
      label: 'Festa',
      icon: '🎉',
      sub: '3+ drink a testa',
    },
  ];

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
              Fabbisogno
            </span>
            <span className="text-xl sm:text-2xl font-black text-[#121212] uppercase tracking-tighter">
              {totalDrinks} DRINK
            </span>
          </div>
        </div>
      </div>

      {/* Main Form controls grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
        {/* Left Column: Number of Guests Slider & Presets (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
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
              <span>1 persona (Solo)</span>
              <span>10 persone</span>
              <span>20 persone</span>
              <span>30 persone (Max)</span>
            </div>
          </div>

          {/* Quick preset buttons */}
          <div className="flex items-center gap-2 pt-1 flex-wrap">
            <span className="text-xs font-bold uppercase text-[#121212]/70">Preset rapidi:</span>
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

        {/* Right Column: Intensity Selector (5 cols) */}
        <div className="lg:col-span-5 space-y-3 lg:border-l-4 lg:border-[#121212] lg:pl-6">
          <label className="text-sm font-black uppercase tracking-wider text-[#121212] flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#F0C020] inline-block border border-[#121212]" />
            Intensità di Consumo:
          </label>

          <div className="grid grid-cols-3 gap-2">
            {intensityOptions.map((opt) => {
              const isSelected = config.intensity === opt.key;
              return (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => onChangeIntensity(opt.key)}
                  className={`p-2.5 text-left border-2 border-[#121212] flex flex-col justify-between transition-all duration-150 ${
                    isSelected
                      ? 'bg-[#1040C0] text-white shadow-[4px_4px_0px_0px_#121212] -translate-y-0.5'
                      : 'bg-[#F0F0F0] text-[#121212] shadow-[2px_2px_0px_0px_#121212] hover:bg-white'
                  }`}
                >
                  <span className="text-lg mb-1">{opt.icon}</span>
                  <div>
                    <span className="text-xs font-black uppercase block leading-tight">
                      {opt.label}
                    </span>
                    <span className={`text-[10px] font-medium block mt-0.5 ${isSelected ? 'text-white/80' : 'text-[#121212]/70'}`}>
                      {opt.sub}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <p className="text-[11px] font-medium text-[#121212]/80 bg-[#F0F0F0] p-2 border border-[#121212]">
            💡 {INTENSITY_DRINKS_MAP[config.intensity].description}
          </p>
        </div>
      </div>
    </div>
  );
};
