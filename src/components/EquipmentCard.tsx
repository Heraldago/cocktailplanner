import React from 'react';
import { Wrench, Home } from 'lucide-react';
import { EquipmentItem } from '../types/cocktail';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface EquipmentCardProps {
  equipment: EquipmentItem[];
  technique: string;
  glass: string;
  lang: Language;
}

export const EquipmentCard: React.FC<EquipmentCardProps> = ({
  equipment,
  technique,
  glass,
  lang,
}) => {
  const t = TRANSLATIONS[lang].equipment;

  return (
    <div className="w-full bg-[#FFFFFF] border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-4 sm:p-7 relative flex flex-col justify-between">
      {/* Decorative corner */}
      <div className="absolute -top-3 -right-3 w-6 h-6 sm:w-7 sm:h-7 bg-[#1040C0] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212]" />

      <div>
        {/* Header */}
        <div className="flex items-center gap-3 pb-4 border-b-4 border-[#121212]">
          <div className="p-2 sm:p-2.5 bg-[#1040C0] text-white border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212]">
            <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tight text-[#121212]">
              {t.title}
            </h3>
            <p className="text-[11px] sm:text-sm font-medium text-[#121212]/80">
              {t.subtitle}
            </p>
          </div>
        </div>

        {/* Technique & Glass Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 my-4">
          <div className="bg-[#F0F0F0] border-2 border-[#121212] p-2.5 sm:p-3 shadow-[2px_2px_0px_0px_#121212]">
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#121212]/70 block">
              {t.techniqueLabel}
            </span>
            <span className="text-sm sm:text-base font-black text-[#121212] uppercase leading-tight mt-0.5 block">
              {technique}
            </span>
          </div>

          <div className="bg-[#F0F0F0] border-2 border-[#121212] p-2.5 sm:p-3 shadow-[2px_2px_0px_0px_#121212]">
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#121212]/70 block">
              {t.glassLabel}
            </span>
            <span className="text-sm sm:text-base font-black text-[#121212] uppercase leading-tight mt-0.5 block truncate">
              {glass}
            </span>
          </div>
        </div>

        {/* Equipment vs DIY Items */}
        <div className="space-y-3 mt-4">
          <span className="text-xs font-black uppercase tracking-wider text-[#121212] block">
            {t.toolsAndHacksTitle}
          </span>

          <div className="space-y-2.5 sm:space-y-3">
            {equipment.map((item, idx) => (
              <div
                key={item.tool}
                className="bg-white border-2 border-[#121212] p-3 sm:p-3.5 shadow-[3px_3px_0px_0px_#121212] space-y-2"
              >
                {/* Official Tool */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 flex items-center justify-center bg-[#1040C0] text-white text-xs font-black shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-sm font-black uppercase text-[#121212]">
                      🍸 {item.tool}
                    </span>
                  </div>
                </div>

                {/* Purpose */}
                <p className="text-xs font-medium text-[#121212]/80 italic pl-7">
                  {t.purposeLabel} {item.purpose}
                </p>

                {/* Kitchen DIY Alternative */}
                <div className="ml-0 sm:ml-7 p-2.5 bg-[#FFF9C4] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212]">
                  <div className="flex items-start gap-1.5">
                    <Home className="w-4 h-4 text-[#D02020] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-black uppercase text-[#D02020] block">
                        {t.diyHackLabel}
                      </span>
                      <p className="text-xs font-bold text-[#121212] mt-0.5">
                        {item.diyAlternative}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pro tip footer */}
      <div className="mt-5 p-2.5 sm:p-3 bg-[#F0F0F0] border-2 border-[#121212] text-[11px] sm:text-xs font-medium text-[#121212]">
        <strong>💡 {t.goldenRuleTitle}</strong> {t.goldenRuleText}
      </div>
    </div>
  );
};
