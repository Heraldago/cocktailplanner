import React from 'react';
import { ShieldAlert } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#121212] text-white border-t-4 border-[#121212] mt-16 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Bauhaus dot pattern overlay */}
      <div className="absolute inset-0 bauhaus-dots-white pointer-events-none opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b-2 border-white/20">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#D02020] border border-white" />
              <span className="w-4 h-4 rounded-none bg-[#1040C0] border border-white" />
              <span className="w-4 h-4 bg-[#F0C020] clip-triangle" />
              <h4 className="text-xl font-black uppercase tracking-tight text-white ml-1">
                Cocktail Party Planner
              </h4>
            </div>
            <p className="text-xs font-medium text-white/80 max-w-sm leading-relaxed">
              Il calcolatore scientifico e costruttivista per organizzare serate perfette: dosaggi esatti, brand reali reperibili in Italia e alternative da cucina fai-da-te.
            </p>
          </div>

          {/* Quick Party Rules */}
          <div className="md:col-span-4 space-y-2">
            <h5 className="text-xs font-black uppercase tracking-widest text-[#F0C020]">
              Regole d'Oro del Party
            </h5>
            <ul className="text-xs text-white/80 space-y-1.5 list-disc pl-4 font-medium">
              <li><strong className="text-white">Ghiaccio:</strong> Mai lesinare, calcola sempre 1 sacco da 2kg ogni 10-12 drink.</li>
              <li><strong className="text-white">Batching:</strong> Se prepari in caraffa senza ghiaccio, aggiungi il 15% di acqua fredda per la diluizione.</li>
              <li><strong className="text-white">Bicchieri freddi:</strong> Metti sempre i calici o i tumbler in frigo 30 minuti prima.</li>
            </ul>
          </div>

          {/* Responsible drinking */}
          <div className="md:col-span-3 space-y-2">
            <h5 className="text-xs font-black uppercase tracking-widest text-[#D02020] flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4" /> Bevi Responsabilmente
            </h5>
            <p className="text-xs text-white/70 leading-relaxed font-medium">
              Accompagna sempre i cocktail con acqua minerale a volontà e stuzzichini sostanziosi. Non guidare mai dopo aver bevuto.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-bold text-white/60 uppercase">
          <div>
            Design System: <span className="text-[#F0C020]">Bauhaus Constructivism (1920s)</span>
          </div>
          <div>
            Built with React • TypeScript • Tailwind CSS • IBA Datasets
          </div>
        </div>
      </div>
    </footer>
  );
};
