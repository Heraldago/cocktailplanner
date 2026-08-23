import React, { useState } from 'react';
import { ChefHat, Sparkles, Droplets, ThermometerSnowflake } from 'lucide-react';
import { Instructions } from '../types/cocktail';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface PreparationCardProps {
  cocktailName: string;
  instructions: Instructions;
  totalGuests: number;
  totalDrinks: number;
  lang: Language;
}

export const PreparationCard: React.FC<PreparationCardProps> = ({
  cocktailName,
  instructions,
  totalGuests,
  totalDrinks,
  lang,
}) => {
  const [activeTab, setActiveTab] = useState<'single' | 'batch'>('single');
  const t = TRANSLATIONS[lang].preparation;

  return (
    <div className="w-full bg-[#FFFFFF] border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-4 sm:p-7 relative flex flex-col justify-between">
      {/* Decorative corner */}
      <div className="absolute -top-3 -right-3 w-6 h-6 sm:w-7 sm:h-7 bg-[#F0C020] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212]" />

      <div>
        {/* Header with Mode Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 border-b-4 border-[#121212]">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 bg-[#D02020] text-white border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212]">
              <ChefHat className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tight text-[#121212]">
                {t.title}
              </h3>
              <p className="text-[11px] sm:text-sm font-medium text-[#121212]/80">
                {cocktailName}
              </p>
            </div>
          </div>

          {/* Mode Switch Tabs */}
          <div className="flex items-center bg-[#F0F0F0] p-1 border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] self-start sm:self-auto w-full sm:w-auto justify-between sm:justify-start">
            <button
              type="button"
              onClick={() => setActiveTab('single')}
              className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-all duration-150 flex-1 sm:flex-none ${
                activeTab === 'single'
                  ? 'bg-[#121212] text-white border-2 border-[#121212] shadow-[2px_2px_0px_0px_#D02020]'
                  : 'bg-transparent text-[#121212] hover:bg-[#E0E0E0]'
              }`}
            >
              {t.singleTab}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('batch')}
              className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-all duration-150 flex-1 sm:flex-none ${
                activeTab === 'batch'
                  ? 'bg-[#D02020] text-white border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212]'
                  : 'bg-transparent text-[#121212] hover:bg-[#E0E0E0]'
              }`}
            >
              🎉 {t.batchTab}
            </button>
          </div>
        </div>

        {/* Tab Content: Single Drink */}
        {activeTab === 'single' && (
          <div className="space-y-3 sm:space-y-4 my-4">
            <div className="bg-[#F0F0F0] p-2.5 sm:p-3 border-2 border-[#121212] flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-[#121212]">
                {t.singleDesc}
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase bg-white px-2 py-0.5 border border-[#121212]">
                1 {lang === 'it' ? 'Porzione' : 'Serving'}
              </span>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              {instructions.single.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5 sm:gap-3 bg-white p-3 border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212]"
                >
                  {/* Rotated Bauhaus step badge */}
                  <div className="shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-[#1040C0] text-white font-black text-xs flex items-center justify-center border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] rotate-3">
                    <span className="-rotate-3">{index + 1}</span>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-[#121212] leading-relaxed pt-0.5">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: Batch / Pitcher */}
        {activeTab === 'batch' && (
          <div className="space-y-3 sm:space-y-4 my-4">
            {/* Batch Info banner */}
            <div className="bg-[#FFF9C4] border-2 border-[#121212] p-3 shadow-[3px_3px_0px_0px_#121212] space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#D02020]">
                <Sparkles className="w-4 h-4" />
                {t.batchTitle(cocktailName, totalDrinks)} ({totalGuests} {lang === 'it' ? 'Ospiti' : 'Guests'}):
              </div>
              <p className="text-xs font-bold text-[#121212]">
                {instructions.batch.ratioExplanation}
              </p>
            </div>

            {/* Batch Steps */}
            <div className="space-y-2.5 sm:space-y-3">
              {instructions.batch.steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5 sm:gap-3 bg-white p-3 border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212]"
                >
                  <div className="shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-[#D02020] text-white font-black text-xs flex items-center justify-center border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] -rotate-3">
                    <span className="rotate-3">{index + 1}</span>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-[#121212] leading-relaxed pt-0.5">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            {/* Crucial Tips for Batch: Dilution & Temperature */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2">
              <div className="p-2.5 sm:p-3 bg-[#F0F0F0] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#1040C0]">
                  <Droplets className="w-4 h-4" /> {t.dilutionTipTitle}
                </div>
                <p className="text-[11px] sm:text-xs text-[#121212]/90 leading-normal">
                  {instructions.batch.dilutionTip}
                </p>
              </div>

              <div className="p-2.5 sm:p-3 bg-[#F0F0F0] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#D02020]">
                  <ThermometerSnowflake className="w-4 h-4" /> {t.coolingTipTitle}
                </div>
                <p className="text-[11px] sm:text-xs text-[#121212]/90 leading-normal">
                  {instructions.batch.coolingTip}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
