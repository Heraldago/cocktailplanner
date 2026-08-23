import React, { useState } from 'react';
import { ShoppingBag, Copy, Check, Snowflake, Sparkles, Coins, Users, PiggyBank, Receipt } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Cocktail, PartyConfig, PartyCalculationResult } from '../types/cocktail';
import { generateShoppingListText } from '../utils/partyCalculator';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface ShoppingCardProps {
  cocktail: Cocktail;
  config: PartyConfig;
  result: PartyCalculationResult;
  lang: Language;
}

export const ShoppingCard: React.FC<ShoppingCardProps> = ({
  cocktail,
  config,
  result,
  lang,
}) => {
  const [copied, setCopied] = useState(false);
  const t = TRANSLATIONS[lang].shopping;

  const handleCopy = () => {
    const text = generateShoppingListText(cocktail, config, result, lang);
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      confetti({
        particleCount: 70,
        spread: 65,
        origin: { y: 0.7 },
        colors: ['#D02020', '#1040C0', '#F0C020', '#121212'],
      });
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="w-full bg-[#FFFFFF] border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-4 sm:p-7 relative flex flex-col justify-between">
      {/* Bauhaus Decorative Accent */}
      <div className="absolute -top-3 -right-3 w-6 h-6 sm:w-7 sm:h-7 bg-[#D02020] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212]" />

      <div>
        {/* Card Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b-4 border-[#121212]">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="p-2 sm:p-2.5 bg-[#F0C020] border-2 border-[#121212] text-[#121212] shadow-[3px_3px_0px_0px_#121212]">
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
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

          <button
            type="button"
            onClick={handleCopy}
            className={`w-full sm:w-auto px-4 py-2 text-xs sm:text-sm font-black uppercase tracking-wider border-2 border-[#121212] flex items-center justify-center gap-2 transition-all duration-150 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none ${
              copied
                ? 'bg-[#1040C0] text-white shadow-[2px_2px_0px_0px_#121212]'
                : 'bg-[#F0C020] text-[#121212] hover:bg-[#F0C020]/90 shadow-[4px_4px_0px_0px_#121212]'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                {t.copiedToast}
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                {t.copyBtn}
              </>
            )}
          </button>
        </div>

        {/* Bauhaus Budget & Cost Calculator Widget */}
        <div className="my-4 sm:my-5 border-4 border-[#121212] bg-[#F0C020] p-3.5 sm:p-5 shadow-[6px_6px_0px_0px_#121212] space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between border-b-2 border-[#121212] pb-2 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Coins className="w-4 h-4 sm:w-5 sm:h-5 text-[#121212]" />
              <h4 className="text-xs sm:text-base font-black uppercase tracking-wider text-[#121212]">
                {t.budgetWidgetTitle}
              </h4>
            </div>
            <span className="text-[10px] sm:text-[11px] font-black uppercase px-2 py-0.5 bg-white border border-[#121212] text-[#121212]">
              {t.activeTierBadge(config.brandTier === 'premium')}
            </span>
          </div>

          {/* Key Numbers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* 1. Spesa Totale alla cassa */}
            <div className="bg-white border-2 border-[#121212] p-3 sm:p-3.5 shadow-[3px_3px_0px_0px_#121212] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#121212]/70 flex items-center gap-1">
                  <Receipt className="w-3.5 h-3.5 text-[#D02020]" />
                  {t.totalRegisterTitle}
                </span>
                <div className="text-2xl sm:text-3xl font-black text-[#121212] mt-1">
                  ~€ {result.totalShoppingCost.toFixed(2)}
                </div>
              </div>
              <p className="text-[10px] text-[#121212]/70 font-medium mt-1">
                {t.totalRegisterDesc}
              </p>
            </div>

            {/* 2. Quota a Persona */}
            <div className="bg-[#1040C0] text-white border-2 border-[#121212] p-3 sm:p-3.5 shadow-[3px_3px_0px_0px_#121212] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#F0C020] flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#F0C020]" />
                  {t.costPerGuestTitle}
                </span>
                <div className="text-2xl sm:text-3xl font-black text-white mt-1">
                  ~€ {result.costPerPerson.toFixed(2)}
                  <span className="text-xs font-bold text-white/80"> {t.perGuestSuffix}</span>
                </div>
              </div>
              <p className="text-[10px] text-white/80 font-medium mt-1">
                {t.costPerGuestDesc(config.guestsCount)}
              </p>
            </div>

            {/* 3. Costo reale del consumato vs Bar */}
            <div className="bg-[#D02020] text-white border-2 border-[#121212] p-3 sm:p-3.5 shadow-[3px_3px_0px_0px_#121212] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-white/90 flex items-center gap-1">
                  <PiggyBank className="w-3.5 h-3.5 text-white" />
                  {t.effectiveCostTitle}
                </span>
                <div className="text-xl sm:text-2xl font-black text-white mt-1">
                  ~€ {result.effectiveCostPerDrink.toFixed(2)}
                  <span className="text-xs font-bold text-white/80"> {t.perDrinkSuffix}</span>
                </div>
              </div>
              <div className="text-[10px] bg-white text-[#D02020] px-1.5 py-0.5 font-black uppercase border border-[#121212] mt-1 inline-block">
                {t.barSavingsBadge(result.barSavingsEstimate)}
              </div>
            </div>
          </div>
        </div>

        {/* Quick KPI stats strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 my-4">
          <div className="bg-[#F0F0F0] border-2 border-[#121212] p-2.5 sm:p-3 shadow-[2px_2px_0px_0px_#121212]">
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#121212]/70 block">
              {t.kpiBottles}
            </span>
            <span className="text-xl sm:text-2xl font-black text-[#121212] leading-tight">
              {result.totalBottlesCount} {t.kpiBottlesUnit(result.totalBottlesCount)}
            </span>
          </div>

          <div className="bg-[#F0F0F0] border-2 border-[#121212] p-2.5 sm:p-3 shadow-[2px_2px_0px_0px_#121212]">
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#121212]/70 block">
              {t.kpiIce}
            </span>
            <span className="text-xl sm:text-2xl font-black text-[#1040C0] leading-tight">
              {result.iceBags2Kg} {t.kpiIceUnit(result.iceBags2Kg)}
            </span>
          </div>

          <div className="col-span-2 sm:col-span-1 bg-[#F0F0F0] border-2 border-[#121212] p-2.5 sm:p-3 shadow-[2px_2px_0px_0px_#121212]">
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#121212]/70 block">
              {t.kpiTier}
            </span>
            <span className="text-xs sm:text-sm font-black text-[#D02020] uppercase leading-tight flex items-center gap-1 mt-1">
              <Sparkles className="w-3.5 h-3.5" />
              {config.brandTier === 'premium' ? 'Enoteca / Premium' : 'Supermercato / Standard'}
            </span>
          </div>
        </div>

        {/* Ingredients detailed item cards */}
        <div className="space-y-3 mt-4">
          <div className="flex items-center justify-between flex-wrap gap-1">
            <span className="text-xs font-black uppercase tracking-wider text-[#121212] block">
              {t.ingredientsDetailTitle}
            </span>
            <span className="text-[10px] font-bold text-[#121212]/70 italic">
              {t.priceDisclaimer}
            </span>
          </div>

          <div className="space-y-2.5 sm:space-y-3">
            {result.ingredients.map((item, idx) => {
              return (
                <div
                  key={item.name}
                  className="bg-white border-2 border-[#121212] p-3 sm:p-3.5 shadow-[3px_3px_0px_0px_#121212] space-y-2"
                >
                  {/* Top line: Name & Bottle count badge + Price tag */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 flex items-center justify-center bg-[#121212] text-white text-xs font-black shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-sm sm:text-base font-black uppercase text-[#121212]">
                        {item.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
                      <span className="px-2 py-0.5 text-xs font-black uppercase bg-[#D02020] text-white border-2 border-[#121212]">
                        {item.totalPieces > 0
                          ? `${item.bottlesNeeded} conf. (${item.totalPieces} pz)`
                          : item.totalMl > 0
                          ? `${item.bottlesNeeded}x da ${item.bottleSizeMl}ml`
                          : '1 confezione'}
                      </span>
                      <span className="px-2 py-0.5 text-xs font-black bg-[#F0C020] text-[#121212] border-2 border-[#121212]">
                        ~€ {item.totalCost.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Volume breakdown & leftovers */}
                  {item.totalMl > 0 && (
                    <div className="bg-[#F0F0F0] p-2 border border-[#121212] text-xs font-medium text-[#121212] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <span>{t.volumeNeeded} </span>
                        <strong className="font-black text-[#121212]">
                          {item.totalMl}ml ({(item.totalMl / 10).toFixed(0)}cl)
                        </strong>
                        <span className="text-[#121212]/70"> / {t.volumeBought} {item.bottlesNeeded * item.bottleSizeMl}ml</span>
                      </div>

                      {item.leftoverMl > 0 && (
                        <div className="text-[11px] font-bold text-[#1040C0]">
                          {t.leftoverInfo(item.leftoverMl, item.leftoverPercentage)}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Brand recommendations & Unit price */}
                  <div className="pt-1 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="flex items-start gap-1.5 flex-wrap">
                      <span className="font-bold uppercase text-[#121212]">
                        {t.brandLabel}
                      </span>
                      <span className="font-black text-[#121212] bg-[#F0C020]/40 px-1 border border-[#121212]">
                        {item.recommendedBrand}
                      </span>
                    </div>

                    <span className="text-[10px] sm:text-[11px] font-bold text-[#121212]/70">
                      {t.unitPriceEstimated(item.unitPrice.toFixed(2))}
                    </span>
                  </div>

                  {item.brandNotes && (
                    <p className="text-[11px] text-[#121212]/70 mt-1 italic">
                      {item.brandNotes}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Ice Bag Detailed Block with Price */}
          <div className="bg-[#1040C0] text-white border-2 border-[#121212] p-3.5 sm:p-4 shadow-[4px_4px_0px_0px_#121212] mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white text-[#1040C0] border-2 border-[#121212]">
                <Snowflake className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#F0C020] block">
                  {t.iceBoxTitle}
                </span>
                <h4 className="text-base sm:text-lg font-black uppercase leading-tight">
                  {t.iceBoxHeading(result.iceBags2Kg, result.totalIceKg)}
                </h4>
                <p className="text-[11px] sm:text-xs text-white/90 mt-0.5">
                  {t.iceBoxDesc}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
              <span className="text-xs font-bold uppercase bg-white text-[#121212] px-2.5 py-1 border-2 border-[#121212]">
                {t.iceRateBadge}
              </span>
              <span className="text-xs font-black bg-[#F0C020] text-[#121212] px-2.5 py-1 border-2 border-[#121212]">
                ~€ {result.iceTotalCost.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
