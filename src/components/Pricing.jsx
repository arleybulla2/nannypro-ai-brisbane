import React, { useState } from 'react';
import { Check, Sparkles, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { content } from '../translations/content';

export default function Pricing({ lang, onOpenTrialModal }) {
  const t = content[lang].pricing;
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-[#090D16] relative">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Monthly / Annual Toggle Switch */}
        <div className="flex items-center justify-center mb-16">
          <div className="p-1.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center space-x-2">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                !isAnnual
                  ? 'bg-slate-800 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.monthly}
            </button>
            
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 ${
                isAnnual
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>{t.annual}</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-slate-950 text-emerald-400">
                {t.discountBadge}
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {t.plans.map((plan, idx) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            return (
              <div
                key={idx}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#162238] to-[#0F172A] border-2 border-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.25)] scale-105 z-20'
                    : 'bg-[#111827] border border-white/10 hover:border-slate-700'
                }`}
              >
                {/* Popular Pill Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                    <span>MÁS POPULAR EN BRISBANE</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Desc */}
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {plan.desc}
                  </p>

                  {/* Price Display */}
                  <div className="flex items-baseline space-x-1 mb-8 pb-6 border-b border-slate-800">
                    <span className="text-4xl sm:text-5xl font-black text-white">${price}</span>
                    <span className="text-sm font-bold text-emerald-400">AUD</span>
                    <span className="text-xs text-slate-400 font-medium ml-1">/ mes</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300 font-medium">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={onOpenTrialModal}
                  className={`w-full py-4 rounded-xl font-extrabold text-sm transition-all duration-200 flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:scale-[1.02]'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-white/10'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            );
          })}
        </div>

        {/* Guarantee Footer */}
        <div className="mt-12 text-center text-xs text-slate-400 font-medium">
          🔒 Pago 100% seguro en AUD • Garantía de cancelación en 1 clic en cualquier momento sin compromisos.
        </div>

      </div>
    </section>
  );
}
