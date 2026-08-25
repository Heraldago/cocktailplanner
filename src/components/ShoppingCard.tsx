import React, { useState } from 'react';
import { ShoppingBag, Copy, Check, Snowflake, Coins, Users, PiggyBank, Receipt, Store } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Cocktail, PartyConfig, PartyCalculationResult } from '../types/cocktail';
import { generateShoppingListText } from '../utils/partyCalculator';
import { Language, TRANSLATIONS } from '../i18n/translations';
import { CountryConfig, formatCurrency } from '../utils/countryLocalization';

interface ShoppingCardProps {
  cocktail: Cocktail;
  config: PartyConfig;
  result: PartyCalculationResult;
  lang: Language;
  country: CountryConfig;
}

export const ShoppingCard: React.FC<ShoppingCardProps> = ({
  cocktail,
  config,
  result,
  lang,
  country,
}) => {
  const [copied, setCopied] = useState(false);
  const t = TRANSLATIONS[lang].shopping;

  const format = (amountEur: number) => formatCurrency(amountEur, country);

  const handleCopy = () => {
    const text = generateShoppingListText(cocktail, config, result, lang, country);
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
                {t.subtitle} ({country.flag} {country.nameLocal})
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className={`w-full sm:w-auto px-4 py-2 text-xs sm:text-sm font-black uppercase tracking-wider border-2 border-[#121212] flex items-center justify-center gap-2 transition-all duration-150 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer ${
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

        {/* Local Supermarket Recommendations Pill Banner */}
        <div className="my-3 p-2.5 bg-[#F0F0F0] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] flex items-center gap-2 flex-wrap text-xs">
          <span className="font-black uppercase text-[#121212] flex items-center gap-1">
            <Store className="w-3.5 h-3.5 text-[#1040C0]" /> {t.localSupermarketsLabel}
          </span>
          <div className="flex flex-wrap gap-1">
            {country.supermarkets.map((store) => (
              <span
                key={store}
                className="px-1.5 py-0.5 bg-white border border-[#121212] text-[10px] font-bold text-[#121212]"
              >
                {store}
              </span>
            ))}
          </div>
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
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#121212]/70 flex items-center gap-1 block">
                  <Receipt className="w-3.5 h-3.5 text-[#D02020]" /> {t.totalRegisterTitle}
                </span>
                <span className="text-2xl sm:text-3xl font-black text-[#121212] tracking-tight block mt-1">
                  ~{format(result.totalShoppingCost)}
                </span>
              </div>
              <p className="text-[10px] font-bold text-[#121212]/60 uppercase mt-2 pt-1 border-t border-[#121212]/10">
                {t.totalRegisterDesc}
              </p>
            </div>

            {/* 2. Quota per Persona */}
            <div className="bg-[#1040C0] text-white border-2 border-[#121212] p-3 sm:p-3.5 shadow-[3px_3px_0px_0px_#121212] flex flex-col justify-between">
              <div>
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-white/80 flex items-center gap-1 block">
                  <Users className="w-3.5 h-3.5 text-[#F0C020]" /> {t.costPerGuestTitle}
                </span>
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight block mt-1">
                  ~{format(result.costPerPerson)}
                  <span className="text-xs font-medium text-white/80 font-mono ml-1">{t.perGuestSuffix}</span>
                </span>
              </div>
              <p className="text-[10px] font-bold text-white/80 uppercase mt-2 pt-1 border-t border-white/20">
                {t.costPerGuestDesc(config.guestsCount)}
              </p>
            </div>

            {/* 3. Costo effettivo per drink e risparmio */}
            <div className="bg-white border-2 border-[#121212] p-3 sm:p-3.5 shadow-[3px_3px_0px_0px_#121212] flex flex-col justify-between">
              <div>
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#121212]/70 flex items-center gap-1 block">
                  <PiggyBank className="w-3.5 h-3.5 text-[#1040C0]" /> {t.effectiveCostTitle}
                </span>
                <span className="text-xl sm:text-2xl font-black text-[#121212] tracking-tight block mt-1">
                  ~{format(result.effectiveCostPerDrink)}
                  <span className="text-xs font-medium text-[#121212]/70 font-mono ml-1">{t.perDrinkSuffix}</span>
                </span>
              </div>
              <div className="mt-2 pt-1 border-t border-[#121212]/10 flex items-center">
                <span className="text-[10px] font-black uppercase tracking-tight text-[#D02020]">
                  {t.barSavingsBadge(format(result.barSavingsEstimate))}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick KPI Stats row */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 my-4 sm:my-6">
          <div className="bg-[#F0F0F0] border-2 border-[#121212] p-2.5 sm:p-3 text-center shadow-[2px_2px_0px_0px_#121212]">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#121212]/70 block truncate">
              {t.kpiBottles}
            </span>
            <span className="text-lg sm:text-2xl font-black text-[#121212] tracking-tight">
              {result.totalBottlesCount}{' '}
              <span className="text-xs font-normal">
                {t.kpiBottlesUnit(result.totalBottlesCount)}
              </span>
            </span>
          </div>

          <div className="bg-[#F0F0F0] border-2 border-[#121212] p-2.5 sm:p-3 text-center shadow-[2px_2px_0px_0px_#121212]">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#121212]/70 block truncate">
              {t.kpiIce}
            </span>
            <span className="text-lg sm:text-2xl font-black text-[#121212] tracking-tight">
              {result.iceBags2Kg}{' '}
              <span className="text-xs font-normal">
                {t.kpiIceUnit(result.iceBags2Kg)}
              </span>
            </span>
          </div>

          <div className="bg-[#F0F0F0] border-2 border-[#121212] p-2.5 sm:p-3 text-center shadow-[2px_2px_0px_0px_#121212]">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#121212]/70 block truncate">
              {t.kpiTier}
            </span>
            <span className="text-xs sm:text-base font-black text-[#121212] uppercase tracking-tight truncate block mt-1">
              {config.brandTier === 'premium' ? 'Enoteca' : 'Supermarket'}
            </span>
          </div>
        </div>

        {/* Detailed Item Breakdown */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b-2 border-[#121212] pb-1">
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#121212]">
              {t.ingredientsDetailTitle}
            </h4>
            <span className="text-[10px] font-bold text-[#121212]/60 uppercase">
              {t.priceDisclaimer}
            </span>
          </div>

          <div className="space-y-3">
            {result.ingredients.map((ing) => (
              <div
                key={ing.name}
                className="border-2 border-[#121212] bg-[#FFFFFF] p-3 sm:p-4 shadow-[4px_4px_0px_0px_#121212] space-y-2 hover:-translate-y-0.5 transition-transform"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#1040C0] inline-block border border-[#121212]" />
                    <h5 className="text-sm sm:text-base font-black uppercase tracking-tight text-[#121212]">
                      {ing.name}
                    </h5>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold text-[#121212] bg-[#F0C020] px-2 py-0.5 border border-[#121212]">
                      {ing.bottlesNeeded}{' '}
                      {ing.totalPieces > 0
                        ? ing.bottlesNeeded === 1 ? 'confezione' : 'confezioni'
                        : ing.bottlesNeeded === 1 ? 'bottiglia' : 'bottiglie'}
                    </span>
                    <span className="text-xs sm:text-sm font-black text-[#121212]">
                      ~{format(ing.totalCost)}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-[#121212]/80 grid grid-cols-1 sm:grid-cols-2 gap-1 font-mono">
                  <div>
                    {t.volumeNeeded}{' '}
                    <span className="font-bold text-[#121212]">
                      {ing.totalPieces > 0
                        ? `${ing.totalPieces} pz`
                        : `${ing.totalMl}ml (${(ing.totalMl / 10).toFixed(0)}cl)`}
                    </span>
                  </div>
                  <div>
                    {t.volumeBought}{' '}
                    <span className="font-bold text-[#121212]">
                      {ing.totalPieces > 0
                        ? `${ing.bottlesNeeded * (ing.bottleSizeMl || 1)} pz`
                        : `${ing.bottlesNeeded * ing.bottleSizeMl}ml (${((ing.bottlesNeeded * ing.bottleSizeMl) / 10).toFixed(0)}cl)`}
                    </span>
                  </div>
                </div>

                {ing.leftoverMl > 0 && (
                  <p className="text-[11px] font-bold text-[#1040C0] bg-[#E8EEFF] px-2 py-1 border border-[#121212]">
                    {t.leftoverInfo(ing.leftoverMl, ing.leftoverPercentage)}
                  </p>
                )}

                <div className="pt-2 border-t border-[#121212]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-black text-[#121212] uppercase tracking-wide">
                      {t.brandLabel}
                    </span>
                    <span className="bg-[#121212] text-white px-1.5 py-0.5 font-bold uppercase text-[11px]">
                      {ing.recommendedBrand}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-[#121212]/70">
                    {t.unitPriceEstimated(format(ing.unitPrice))}
                  </span>
                </div>
              </div>
            ))}

            {/* Ice Details Card */}
            <div className="border-2 border-[#121212] bg-[#FFF9C4] p-3 sm:p-4 shadow-[4px_4px_0px_0px_#121212] space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Snowflake className="w-4 h-4 text-[#1040C0]" />
                  <h5 className="text-sm sm:text-base font-black uppercase tracking-tight text-[#121212]">
                    {t.iceBoxTitle}
                  </h5>
                </div>
                <span className="text-xs sm:text-sm font-black text-[#121212]">
                  ~{format(result.iceTotalCost)}
                </span>
              </div>
              <p className="text-xs font-bold text-[#121212]">
                {t.iceBoxHeading(result.iceBags2Kg, result.totalIceKg)}
              </p>
              <p className="text-[11px] text-[#121212]/80">
                {t.iceBoxDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
