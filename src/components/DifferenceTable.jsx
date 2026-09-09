import React from 'react';
import { Check, X, ShieldCheck, Zap } from 'lucide-react';
import { content } from '../translations/content';

export default function DifferenceTable({ lang, onOpenMatchModal }) {
  const t = content[lang].difference;

  return (
    <section id="difference" className="py-24 bg-[#090D16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
            {t.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="rounded-3xl bg-[#111827] border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              
              {/* Header Row */}
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/90">
                  <th className="py-5 px-6 text-sm font-bold text-slate-300 w-1/3">
                    {t.headers[0]}
                  </th>
                  <th className="py-5 px-6 text-sm font-bold text-slate-400 w-1/3 text-center">
                    {t.headers[1]}
                  </th>
                  <th className="py-5 px-6 text-sm font-extrabold text-emerald-400 w-1/3 text-center bg-emerald-500/10 border-l border-r border-emerald-500/20">
                    <div className="flex items-center justify-center space-x-1.5">
                      <Zap className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                      <span>{t.headers[2]}</span>
                    </div>
                  </th>
                </tr>
              </thead>

              {/* Rows */}
              <tbody className="divide-y divide-slate-800/80">
                {t.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                    
                    {/* Feature Name */}
                    <td className="py-4 px-6 text-sm font-bold text-white">
                      {row.feature}
                    </td>

                    {/* Traditional Agency */}
                    <td className="py-4 px-6 text-xs text-slate-400 text-center font-medium">
                      <div className="flex items-center justify-center space-x-1 text-slate-400">
                        <X className="w-4 h-4 text-rose-400 shrink-0" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>

                    {/* NannyPro AI */}
                    <td className="py-4 px-6 text-xs text-emerald-300 font-bold text-center bg-emerald-500/5 border-l border-r border-emerald-500/20">
                      <div className="flex items-center justify-center space-x-1.5">
                        <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
                        <span>{row.nannypro}</span>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenMatchModal}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all"
          >
            {lang === 'es' ? 'Experimentar la Diferencia en Brisbane →' : 'Experience the Difference in Brisbane →'}
          </button>
        </div>

      </div>
    </section>
  );
}
