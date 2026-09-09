import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, ArrowRight, UserCheck, Star, Sparkles } from 'lucide-react';
import { content } from '../translations/content';

export default function NannyMatchModal({ isOpen, onClose, lang }) {
  const t = content[lang].modalMatch;
  const [step, setStep] = useState(1);
  const [suburb, setSuburb] = useState('New Farm / Teneriffe');
  const [prefLang, setPrefLang] = useState('Bilingüe (Español e Inglés)');
  const [children, setChildren] = useState('1 Niño/a');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setStep(1);
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-[#111827] border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6 space-y-1">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Asistente de Match por IA</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {t.title}
              </h3>
              <p className="text-xs text-slate-400">
                {t.subtitle}
              </p>
            </div>

            {/* Step Progress Bar */}
            <div className="flex items-center space-x-2 mb-6">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 flex-1 rounded-full transition-all ${
                    s <= step ? 'bg-emerald-500' : 'bg-slate-800'
                  }`}
                />
              ))}
            </div>

            {/* Step 1: Suburb */}
            {step === 1 && (
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-white">{t.step1Title}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {t.suburbOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSuburb(opt)}
                      className={`p-3 rounded-xl text-xs font-bold text-left transition-all border ${
                        suburb === opt
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      📍 {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Preferred Language */}
            {step === 2 && (
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-white">{t.step2Title}</h4>
                <div className="space-y-2.5">
                  {t.langOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setPrefLang(opt)}
                      className={`w-full p-3.5 rounded-xl text-xs font-bold text-left transition-all border ${
                        prefLang === opt
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      🗣️ {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Children Count */}
            {step === 3 && (
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-white">{t.step3Title}</h4>
                <div className="grid grid-cols-3 gap-3">
                  {t.childrenOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setChildren(opt)}
                      className={`p-4 rounded-xl text-xs font-bold text-center transition-all border ${
                        children === opt
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      👶 {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-white"
                >
                  Atrás
                </button>
              ) : (
                <div />
              )}

              <button
                onClick={handleNext}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all flex items-center space-x-2"
              >
                <span>{step === 3 ? t.btnSubmit : t.btnNext}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Match Result Screen */
          <div className="text-center space-y-5 py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400 shadow-xl shadow-emerald-500/20">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-extrabold text-white">
              {t.matchResultTitle}
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
              {t.matchResultDesc}
            </p>

            {/* Nanny Preview Avatars List */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-left space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400">Niñera Fundadora Asignada #1</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono font-bold">100% DISPONIBLE EN BRISBANE</span>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80"
                  alt="Niñera Fundadora"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-500"
                />
                <div>
                  <h5 className="text-sm font-bold text-white">Niñera Fundadora Bilingüe (Brisbane)</h5>
                  <p className="text-xs text-slate-400">Especialista en EYLF • QLD Blue Card & First Aid</p>
                  <div className="flex items-center space-x-1 mt-0.5">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-[11px] font-bold text-white">5.0 ★ Top Rated Care</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <a
                href="https://wa.me/?text=Hola!%20Me%20interesa%20agendar%20una%20reuni%C3%B3n%20para%20cuidado%20infantil%20en%20Brisbane%20con%20NannyPro%20AI"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 flex items-center justify-center space-x-2 hover:scale-[1.02] transition-all"
              >
                <span>💬 AGENDAR ENTREVISTA GRATUITA POR WHATSAPP</span>
              </a>
              <button
                onClick={handleReset}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
