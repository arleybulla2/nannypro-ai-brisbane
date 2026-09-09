import React from 'react';
import { UserCheck, BookOpenCheck, ShieldAlert, HeartHandshake, CheckCircle2, Sparkles } from 'lucide-react';
import { content } from '../translations/content';

export default function Services({ lang, onOpenMatchModal }) {
  const t = content[lang].services;

  const icons = [
    <UserCheck className="w-7 h-7 text-emerald-400" />,
    <BookOpenCheck className="w-7 h-7 text-indigo-400" />,
    <ShieldAlert className="w-7 h-7 text-emerald-400" />,
    <HeartHandshake className="w-7 h-7 text-indigo-400" />
  ];

  return (
    <section id="services" className="py-24 bg-[#090D16] relative">
      
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
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

        {/* 4 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.cards.map((card, idx) => (
            <div
              key={card.id}
              className="group relative rounded-2xl bg-[#111827] border border-white/10 p-8 glass-panel-hover flex flex-col justify-between"
            >
              {/* Top Accent Pill */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg group-hover:border-emerald-500/50 group-hover:scale-110 transition-all duration-300">
                  {icons[idx]}
                </div>
                <span className="text-3xl font-black text-slate-700 group-hover:text-emerald-400 transition-colors">
                  {card.id}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-2.5">
                {card.features.map((feat, i) => (
                  <div key={i} className="flex items-center space-x-2.5 text-xs font-medium text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenMatchModal}
            className="inline-flex items-center space-x-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 underline underline-offset-8 transition-all"
          >
            <span>{lang === 'es' ? 'Explorar todas las características de cuidado bilingüe en Brisbane' : 'Explore all bilingual care features in Brisbane'}</span>
            <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
