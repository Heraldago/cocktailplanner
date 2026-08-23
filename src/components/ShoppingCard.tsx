import React, { useState } from 'react';
import { ShoppingBag, Copy, Check, Snowflake, Sparkles, Coins, Users, PiggyBank, Receipt } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Cocktail, PartyConfig, PartyCalculationResult } from '../types/cocktail';
import { generateShoppingListText } from '../utils/partyCalculator';

interface ShoppingCardProps {
  cocktail: Cocktail;
  config: PartyConfig;
  result: PartyCalculationResult;
}

export const ShoppingCard: React.FC<ShoppingCardProps> = ({
  cocktail,
  config,
  result,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = generateShoppingListText(cocktail, config, result);
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
    <div className="w-full bg-[#FFFFFF] border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-5 sm:p-7 relative flex flex-col justify-between">
      {/* Bauhaus Decorative Accent */}
      <div className="absolute -top-3 -right-3 w-7 h-7 bg-[#D02020] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212]" />

      <div>
        {/* Card Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b-4 border-[#121212]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#F0C020] border-2 border-[#121212] text-[#121212] shadow-[3px_3px_0px_0px_#121212]">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#121212]">
                Lista Spesa & Budget
              </h3>
              <p className="text-xs sm:text-sm font-medium text-[#121212]/80">
                Calcolo per eccesso (<code className="bg-[#E0E0E0] px-1 py-0.5 text-xs font-mono font-bold">Math.ceil</code>) con stima prezzi retail in Italia
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className={`px-4 py-2 text-xs sm:text-sm font-black uppercase tracking-wider border-2 border-[#121212] flex items-center justify-center gap-2 transition-all duration-150 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none ${
              copied
                ? 'bg-[#1040C0] text-white shadow-[2px_2px_0px_0px_#121212]'
                : 'bg-[#F0C020] text-[#121212] hover:bg-[#F0C020]/90 shadow-[4px_4px_0px_0px_#121212]'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Copiato negli Appunti!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copia Lista & Budget
              </>
            )}
          </button>
        </div>

        {/* ========================================================================= */}
        {/* ⭐ NEW: BAUHAUS BUDGET & COST CALCULATOR WIDGET (Totale & A Testa) */}
        {/* ========================================================================= */}
        <div className="my-5 border-4 border-[#121212] bg-[#F0C020] p-4 sm:p-5 shadow-[6px_6px_0px_0px_#121212] space-y-4">
          <div className="flex items-center justify-between border-b-2 border-[#121212] pb-2">
            <div className="flex items-center gap-2">
              <Coins className="w-5 h-5 text-[#121212]" />
              <h4 className="text-sm sm:text-base font-black uppercase tracking-wider text-[#121212]">
                Calcolatore Spesa & Quota per Ospite
              </h4>
            </div>
            <span className="text-[11px] font-black uppercase px-2 py-0.5 bg-white border border-[#121212] text-[#121212]">
              Fascia {config.brandTier === 'premium' ? 'Enoteca' : 'Supermercato'}
            </span>
          </div>

          {/* Key Numbers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* 1. Spesa Totale alla cassa */}
            <div className="bg-white border-2 border-[#121212] p-3.5 shadow-[3px_3px_0px_0px_#121212] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#121212]/70 flex items-center gap-1">
                  <Receipt className="w-3.5 h-3.5 text-[#D02020]" />
                  Totale Spesa alla Cassa
                </span>
                <div className="text-2xl sm:text-3xl font-black text-[#121212] mt-1">
                  ~€ {result.totalShoppingCost.toFixed(2)}
                </div>
              </div>
              <p className="text-[10px] text-[#121212]/70 font-medium mt-1">
                Acquisto di tutte le bottiglie intere, ghiaccio e ingredienti freschi.
              </p>
            </div>

            {/* 2. Quota a Persona */}
            <div className="bg-[#1040C0] text-white border-2 border-[#121212] p-3.5 shadow-[3px_3px_0px_0px_#121212] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#F0C020] flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#F0C020]" />
                  Quota a Persona
                </span>
                <div className="text-2xl sm:text-3xl font-black text-white mt-1">
                  ~€ {result.costPerPerson.toFixed(2)}
                  <span className="text-xs font-bold text-white/80"> / ospite</span>
                </div>
              </div>
              <p className="text-[10px] text-white/80 font-medium mt-1">
                Diviso tra i {config.guestsCount} {config.guestsCount === 1 ? 'invitato' : 'invitati'} presenti.
              </p>
            </div>

            {/* 3. Costo reale del consumato vs Bar */}
            <div className="bg-[#D02020] text-white border-2 border-[#121212] p-3.5 shadow-[3px_3px_0px_0px_#121212] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-white/90 flex items-center gap-1">
                  <PiggyBank className="w-3.5 h-3.5 text-white" />
                  Costo Drink & Risparmio
                </span>
                <div className="text-xl sm:text-2xl font-black text-white mt-1">
                  ~€ {result.effectiveCostPerDrink.toFixed(2)}
                  <span className="text-xs font-bold text-white/80"> / drink</span>
                </div>
              </div>
              <div className="text-[10px] bg-white text-[#D02020] px-1.5 py-0.5 font-black uppercase border border-[#121212] mt-1 inline-block">
                Risparmi ~€ {result.barSavingsEstimate.toFixed(0)} vs cocktail bar!
              </div>
            </div>
          </div>
        </div>

        {/* Quick KPI stats strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
          <div className="bg-[#F0F0F0] border-2 border-[#121212] p-3 shadow-[2px_2px_0px_0px_#121212]">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#121212]/70 block">
              Totale Bottiglie
            </span>
            <span className="text-2xl font-black text-[#121212] leading-tight">
              {result.totalBottlesCount} {result.totalBottlesCount === 1 ? 'Bottiglia' : 'Bottiglie'}
            </span>
          </div>

          <div className="bg-[#F0F0F0] border-2 border-[#121212] p-3 shadow-[2px_2px_0px_0px_#121212]">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#121212]/70 block">
              Ghiaccio Fabbisogno
            </span>
            <span className="text-2xl font-black text-[#1040C0] leading-tight">
              {result.iceBags2Kg} {result.iceBags2Kg === 1 ? 'Sacco 2kg' : 'Sacchi 2kg'}
            </span>
          </div>

          <div className="col-span-2 sm:col-span-1 bg-[#F0F0F0] border-2 border-[#121212] p-3 shadow-[2px_2px_0px_0px_#121212]">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#121212]/70 block">
              Fascia Prezzo Attiva
            </span>
            <span className="text-sm font-black text-[#D02020] uppercase leading-tight flex items-center gap-1 mt-1">
              <Sparkles className="w-4 h-4" />
              {config.brandTier === 'premium' ? 'Enoteca / Premium' : 'Supermercato / Standard'}
            </span>
          </div>
        </div>

        {/* Ingredients detailed item cards */}
        <div className="space-y-3 mt-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-[#121212] block">
              Dettaglio Articoli con Stima Prezzo:
            </span>
            <span className="text-[11px] font-bold text-[#121212]/70 italic">
              Prezzi medi stimati supermercati/enoteche IT
            </span>
          </div>

          <div className="space-y-3">
            {result.ingredients.map((item, idx) => {
              return (
                <div
                  key={item.name}
                  className="bg-white border-2 border-[#121212] p-3.5 shadow-[3px_3px_0px_0px_#121212] space-y-2"
                >
                  {/* Top line: Name & Bottle count badge + Price tag */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 flex items-center justify-center bg-[#121212] text-white text-xs font-black">
                        {idx + 1}
                      </span>
                      <span className="text-base font-black uppercase text-[#121212]">
                        {item.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      <span className="px-2.5 py-1 text-xs font-black uppercase bg-[#D02020] text-white border-2 border-[#121212]">
                        {item.totalPieces > 0
                          ? `${item.bottlesNeeded} conf. (${item.totalPieces} pz)`
                          : item.totalMl > 0
                          ? `${item.bottlesNeeded}x da ${item.bottleSizeMl}ml`
                          : '1 confezione'}
                      </span>
                      <span className="px-2 py-1 text-xs font-black bg-[#F0C020] text-[#121212] border-2 border-[#121212]">
                        ~€ {item.totalCost.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Volume breakdown & leftovers */}
                  {item.totalMl > 0 && (
                    <div className="bg-[#F0F0F0] p-2 border border-[#121212] text-xs font-medium text-[#121212] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <span>Volume necessario: </span>
                        <strong className="font-black text-[#121212]">
                          {item.totalMl}ml ({(item.totalMl / 10).toFixed(0)}cl)
                        </strong>
                        <span className="text-[#121212]/70"> / Volume acquistato: {item.bottlesNeeded * item.bottleSizeMl}ml</span>
                      </div>

                      {item.leftoverMl > 0 && (
                        <div className="text-[11px] font-bold text-[#1040C0]">
                          ℹ️ Avanzeranno ~{item.leftoverMl}ml ({item.leftoverPercentage}% della bottiglia)
                        </div>
                      )}
                    </div>
                  )}

                  {/* Brand recommendations & Unit price */}
                  <div className="pt-1 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="flex items-start gap-1.5">
                      <span className="font-bold uppercase text-[#121212] min-w-[70px]">
                        👉 Brand:
                      </span>
                      <span className="font-black text-[#121212] bg-[#F0C020]/40 px-1 border border-[#121212]">
                        {item.recommendedBrand}
                      </span>
                    </div>

                    <span className="text-[11px] font-bold text-[#121212]/70">
                      Prezzo unitario stimato: ~€ {item.unitPrice.toFixed(2)} / unità
                    </span>
                  </div>

                  {item.brandNotes && (
                    <p className="text-[11px] text-[#121212]/70 mt-1 pl-[76px] italic">
                      {item.brandNotes}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Ice Bag Detailed Block with Price */}
          <div className="bg-[#1040C0] text-white border-2 border-[#121212] p-4 shadow-[4px_4px_0px_0px_#121212] mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white text-[#1040C0] border-2 border-[#121212]">
                <Snowflake className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#F0C020] block">
                  Scorta Ghiaccio Essenziale
                </span>
                <h4 className="text-lg font-black uppercase leading-tight">
                  {result.iceBags2Kg} Sacchetti da 2kg (~{result.totalIceKg} kg)
                </h4>
                <p className="text-xs text-white/90 mt-0.5">
                  Disponibili nel banco surgelati dei supermercati o benzinai 24/7.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="text-xs font-bold uppercase bg-white text-[#121212] px-3 py-1 border-2 border-[#121212]">
                ~0.18 kg / drink
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
