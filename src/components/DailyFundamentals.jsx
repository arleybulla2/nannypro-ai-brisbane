import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Info } from 'lucide-react';
import { content } from '../translations/content';

export default function DailyFundamentals({ lang }) {
  const t = content[lang].fundamentals;
  const [selectedIdx, setSelectedIdx] = useState(null);

  return (
    <section id="fundamentals" className="py-24 bg-[#0D1322] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* 12 Grid Pills/Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {t.items.map((item, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => setSelectedIdx(isSelected ? null : idx)}
                className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-800 border-emerald-500 shadow-[0_0_25px_rgba(16,185,129,0.25)] scale-105'
                    : 'bg-[#111827] border-white/10 hover:border-emerald-500/40 hover:bg-[#161F32]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl p-2 rounded-xl bg-slate-900 border border-slate-800">
                      {item.icon}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5">
                    {item.name}
                  </h3>
                  
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span>Monitoreado en vivo</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Note */}
        <div className="mt-12 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 max-w-2xl mx-auto flex items-center space-x-3 text-xs text-slate-300">
          <Info className="w-5 h-5 text-indigo-400 shrink-0" />
          <span>
            {lang === 'es' 
              ? 'Todos los datos de fundamentales se sincronizan automáticamente entre la niñera y los padres al finalizar cada bloque del día.'
              : 'All daily fundamental logs synchronize automatically between nanny and parents after each activity block.'}
          </span>
        </div>

      </div>
    </section>
  );
}
