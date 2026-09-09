import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { content } from '../translations/content';

export default function FAQ({ lang }) {
  const t = content[lang].faq;
  const [openIdx, setOpenIdx] = useState(0);

  const toggleAcc = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#0D1322] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {t.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#111827] border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAcc(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between space-x-4 hover:bg-slate-800/50 transition-colors"
                >
                  <span className="text-base font-bold text-white">
                    {item.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-emerald-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-emerald-500/20' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-3">
          <h4 className="text-sm font-bold text-white">
            {lang === 'es' ? '¿Tienes alguna otra duda específica sobre tu suburbio en Brisbane?' : 'Have specific questions about your Brisbane suburb?'}
          </h4>
          <p className="text-xs text-slate-400">
            {lang === 'es' ? 'Nuestro equipo local en Queensland te atiende en español o inglés 24/7.' : 'Our local Queensland team supports you in Spanish or English 24/7.'}
          </p>
          <a
            href="mailto:support@nannypro.ai"
            className="inline-block text-xs font-bold text-emerald-400 hover:underline"
          >
            Contacto Soporte Brisbane: support@nannypro.ai
          </a>
        </div>

      </div>
    </section>
  );
}
