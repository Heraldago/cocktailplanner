import React, { useState } from 'react';
import { ChefHat, Sparkles, Droplets, ThermometerSnowflake, Wine, Users } from 'lucide-react';
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
    <div className="w-full bg-[#FFFFFF] border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-4 sm:p-6 relative flex flex-col justify-between">
      {/* Decorative corner */}
      <div className="absolute -top-3 -right-3 w-6 h-6 sm:w-7 sm:h-7 bg-[#F0C020] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212]" />

      <div className="space-y-4">
        {/* Header: Title + Icon */}
        <div className="flex items-center gap-3 pb-3 border-b-2 border-[#121212]">
          <div className="p-2 sm:p-2.5 bg-[#D02020] text-white border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] shrink-0">
            <ChefHat className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#121212] leading-tight truncate">
              {t.title}
            </h3>
            <p className="text-xs font-bold text-[#121212]/70 uppercase tracking-wider mt-0.5 truncate">
              {cocktailName}
            </p>
          </div>
        </div>

        {/* Full-width Segmented Tab Control (Never overflows!) */}
        <div className="grid grid-cols-2 gap-1.5 p-1 bg-[#F0F0F0] border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212]">
          <button
            type="button"
            onClick={() => setActiveTab('single')}
            className={`py-2 px-2 text-xs font-black uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer select-none text-center ${
              activeTab === 'single'
                ? 'bg-[#1040C0] text-white border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212]'
                : 'bg-transparent text-[#121212] hover:bg-white/80'
            }`}
          >
            <Wine className="w-3.5 h-3.5" />
            <span className="truncate">{t.singleTab}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('batch')}
            className={`py-2 px-2 text-xs font-black uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer select-none text-center ${
              activeTab === 'batch'
                ? 'bg-[#D02020] text-white border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212]'
                : 'bg-transparent text-[#121212] hover:bg-white/80'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span className="truncate">{t.batchTab}</span>
          </button>
        </div>

        {/* Tab Content: Single Drink */}
        {activeTab === 'single' && (
          <div className="space-y-3 pt-1 animate-fadeIn">
            <div className="bg-[#F0F0F0] px-3 py-2 border-2 border-[#121212] flex items-center justify-between gap-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#121212] truncate">
                {t.singleDesc}
              </span>
              <span className="text-[10px] font-bold uppercase bg-white px-2 py-0.5 border border-[#121212] shrink-0">
                {t.singleGlassBadge}
              </span>
            </div>

            <div className="space-y-2.5">
              {instructions.single.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white p-3 border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212]"
                >
                  {/* Step counter */}
                  <div className="shrink-0 w-6 h-6 bg-[#1040C0] text-white font-black text-xs flex items-center justify-center border-2 border-[#121212] shadow-[1.5px_1.5px_0px_0px_#121212]">
                    <span>{index + 1}</span>
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
          <div className="space-y-3 pt-1 animate-fadeIn">
            {/* Batch Info banner */}
            <div className="bg-[#FFF9C4] border-2 border-[#121212] p-3 shadow-[3px_3px_0px_0px_#121212] space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#D02020]">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>
                  {t.batchTitle(cocktailName, totalDrinks)} ({totalGuests} {t.guestsSuffix})
                </span>
              </div>
              <p className="text-xs font-bold text-[#121212] leading-snug">
                {instructions.batch.ratioExplanation}
              </p>
            </div>

            {/* Batch Steps */}
            <div className="space-y-2.5">
              {instructions.batch.steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white p-3 border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212]"
                >
                  <div className="shrink-0 w-6 h-6 bg-[#D02020] text-white font-black text-xs flex items-center justify-center border-2 border-[#121212] shadow-[1.5px_1.5px_0px_0px_#121212]">
                    <span>{index + 1}</span>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-[#121212] leading-relaxed pt-0.5">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            {/* Crucial Tips for Batch: Dilution & Temperature */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="p-3 bg-[#F0F0F0] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] font-black uppercase text-[#1040C0]">
                  <Droplets className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{t.dilutionTipTitle}</span>
                </div>
                <p className="text-[11px] text-[#121212]/90 leading-snug">
                  {instructions.batch.dilutionTip}
                </p>
              </div>

              <div className="p-3 bg-[#F0F0F0] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] font-black uppercase text-[#D02020]">
                  <ThermometerSnowflake className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{t.coolingTipTitle}</span>
                </div>
                <p className="text-[11px] text-[#121212]/90 leading-snug">
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
