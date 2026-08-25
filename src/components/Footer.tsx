import React from 'react';
import { ShieldAlert, ArrowUp } from 'lucide-react';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].footer;

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#121212] text-white border-t-4 border-[#121212] mt-16 py-10 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Bauhaus dot pattern overlay */}
      <div className="absolute inset-0 bauhaus-dots-white pointer-events-none opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        {/* Top interactive Back-to-Top Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 bg-[#1F1F1F] border-2 border-white/30 shadow-[4px_4px_0px_0px_#D02020]">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-2 bg-[#F0C020] text-[#121212] border border-white font-black">
              <ArrowUp className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-white block">
                {lang === 'it' ? 'Hai finito di pianificare?' : 'Finished planning?'}
              </span>
              <span className="text-[11px] sm:text-xs text-white/70">
                {lang === 'it' ? 'Torna all\'inizio per scegliere un altro cocktail o cambiare i filtri' : 'Go back to top to choose another cocktail or adjust filters'}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleScrollTop}
            className="w-full sm:w-auto px-5 py-2.5 sm:py-3 bg-[#F0C020] hover:bg-[#F0C020]/90 text-[#121212] font-black uppercase text-xs sm:text-sm border-2 border-[#121212] shadow-[3px_3px_0px_0px_#FFFFFF] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer select-none"
          >
            <ArrowUp className="w-4 h-4 text-[#121212]" />
            <span>{t.backToTop}</span>
          </button>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b-2 border-white/20">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="w-4 h-4 rounded-full bg-[#D02020] border border-white" />
              <span className="w-4 h-4 rounded-none bg-[#1040C0] border border-white" />
              <span className="w-4 h-4 bg-[#F0C020] clip-triangle" />
              <h4 className="text-xl font-black uppercase tracking-tight text-white ml-1">
                Cocktail Party Planner
              </h4>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/10 border border-white/30 text-[11px] uppercase font-black text-white ml-1">
                <span>{lang === 'it' ? 'fatto da' : 'made by'}</span>
                <img
                  src="/author-logo.png"
                  alt="HN Logo"
                  className="w-6 h-6 rounded-full border border-white inline-block object-cover"
                />
              </div>
            </div>
            <p className="text-xs font-medium text-white/80 max-w-sm leading-relaxed">
              {t.credit}
            </p>
          </div>

          {/* Quick Party Rules */}
          <div className="md:col-span-4 space-y-2">
            <h5 className="text-xs font-black uppercase tracking-widest text-[#F0C020]">
              {lang === 'it' ? 'Regole d\'Oro del Party' : 'Golden Rules for the Party'}
            </h5>
            <ul className="text-xs text-white/80 space-y-1.5 list-disc pl-4 font-medium">
              <li>
                <strong className="text-white">{lang === 'it' ? 'Ghiaccio:' : 'Ice:'}</strong> {lang === 'it' ? 'Mai lesinare, calcola sempre 1 sacco da 2kg ogni 10-12 drink.' : 'Never run low, calculate 1 bag of 2kg for every 10-12 drinks.'}
              </li>
              <li>
                <strong className="text-white">{lang === 'it' ? 'Batching:' : 'Batching:'}</strong> {lang === 'it' ? 'In caraffa senza ghiaccio, aggiungi il 15% di acqua fredda per la diluizione.' : 'For pitchers without ice, add 15% chilled water for thermal dilution.'}
              </li>
              <li>
                <strong className="text-white">{lang === 'it' ? 'Bicchieri freddi:' : 'Chilled glasses:'}</strong> {lang === 'it' ? 'Metti sempre i bicchieri in frigo prima del party.' : 'Chill your glasses in the freezer before the party.'}
              </li>
            </ul>
          </div>

          {/* Responsible drinking */}
          <div className="md:col-span-3 space-y-2">
            <h5 className="text-xs font-black uppercase tracking-widest text-[#D02020] flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4" /> {lang === 'it' ? 'Bevi Responsabilmente' : 'Drink Responsibly'}
            </h5>
            <p className="text-xs text-white/70 leading-relaxed font-medium">
              {t.disclaimer}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-bold text-white/60 uppercase">
          <div>
            Design System: <span className="text-[#F0C020]">Bauhaus Constructivism (1920s)</span>
          </div>
          <div>
            React 19 • TypeScript • Tailwind CSS • IBA Datasets
          </div>
        </div>
      </div>
    </footer>
  );
};
