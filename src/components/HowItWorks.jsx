import React from 'react';
import { Search, ShieldCheck, Activity, Cpu } from 'lucide-react';
import { content } from '../translations/content';

export default function HowItWorks({ lang, onOpenMatchModal }) {
  const t = content[lang].howItWorks;

  const icons = [
    <Search className="w-6 h-6 text-emerald-400" />,
    <ShieldCheck className="w-6 h-6 text-indigo-400" />,
    <Activity className="w-6 h-6 text-emerald-400" />,
    <Cpu className="w-6 h-6 text-indigo-400" />
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#0D1322] relative border-t border-b border-white/5">
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

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {t.steps.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-[#111827] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 group"
            >
              <div>
                {/* Step Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {icons[idx]}
                  </div>
                  <span className="text-xs font-black tracking-wider text-emerald-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Connecting line on desktop */}
              {idx < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-slate-800 z-10" />
              )}
            </div>
          ))}

        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenMatchModal}
            className="px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-emerald-500/30 text-emerald-400 font-bold text-sm shadow-lg shadow-emerald-500/10 transition-all hover:scale-105"
          >
            {lang === 'es' ? 'Comenzar Búsqueda de Niñera en Brisbane →' : 'Start Nanny Search in Brisbane →'}
          </button>
        </div>

      </div>
    </section>
  );
}
