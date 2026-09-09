import React from 'react';
import { ShieldCheck, CheckCircle2, Award, FileCheck, ExternalLink } from 'lucide-react';
import { content } from '../translations/content';

export default function CredentialsShowcase({ lang }) {
  const t = content[lang].credentials;

  return (
    <section id="credentials" className="py-20 bg-[#0D1322] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Cards Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.cards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#111827] border border-white/10 p-6 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {card.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs font-mono text-emerald-400 font-semibold">
                  {card.number}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>Verificación en Línea QLD</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Government Disclaimer Note */}
        <div className="mt-10 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 max-w-3xl mx-auto flex items-center justify-between text-xs text-slate-300 gap-4">
          <div className="flex items-center space-x-2.5">
            <FileCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>
              {lang === 'es'
                ? 'Puedes solicitar la verificación directa del número de Blue Card ante Blue Card Services QLD durante la entrevista.'
                : 'Direct Blue Card number validation is provided during your introductory call with Queensland Blue Card Services.'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
