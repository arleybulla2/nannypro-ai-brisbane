import React, { useState } from 'react';
import { Calculator, MapPin, Calendar, Clock, DollarSign, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { content } from '../translations/content';

export default function RateCalculator({ lang }) {
  const t = content[lang].calculator;
  const [suburb, setSuburb] = useState(t.suburbOptions[0]);
  const [days, setDays] = useState(3);
  const [hours, setHours] = useState(4);

  // Hourly base rate in AUD for private founder care
  const baseRate = 35;
  const weeklyTotal = days * hours * baseRate;

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hola! Me interesa cotizar el servicio privado de cuidado bilingüe en Brisbane 🇦🇺.\n\n` +
      `📍 Suburbio: ${suburb}\n` +
      `📅 Días a la semana: ${days} días\n` +
      `⏰ Horas al día: ${hours} horas/día\n` +
      `💰 Est. Semanal: $${weeklyTotal} AUD ($${baseRate}/hr)\n\n` +
      `Quisiera agendar la entrevista previa gratuita con la educadora fundadora.`
    );
    window.open(`https://wa.me/61425342469?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-24 bg-[#090D16] relative border-t border-b border-white/5">
      {/* Background Accent Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#111827] border border-white/10 p-6 sm:p-10 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Inputs Controls */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Suburb Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-400" />
                {t.suburbLabel}
              </label>
              <select
                value={suburb}
                onChange={(e) => setSuburb(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500 font-semibold"
              >
                {t.suburbOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* Days per week selection */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-indigo-400" />
                  {t.daysLabel}
                </span>
                <span className="text-emerald-400 font-black text-sm">{days} Días / semana</span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((d) => (
                  <button
                    key={d}
                    onClick={() => setDays(d)}
                    className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                      days === d
                        ? 'bg-emerald-500 text-slate-950 shadow-md scale-105'
                        : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {d} {d === 1 ? 'día' : 'días'}
                  </button>
                ))}
              </div>
            </div>

            {/* Hours per day selection */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  {t.hoursLabel}
                </span>
                <span className="text-indigo-400 font-black text-sm">{hours} Horas / día</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[3, 4, 6, 8].map((h) => (
                  <button
                    key={h}
                    onClick={() => setHours(h)}
                    className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                      hours === h
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-md scale-105'
                        : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {h} hrs
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Summary Box */}
          <div className="md:col-span-5 p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-[#0F172A] border border-emerald-500/30 text-center space-y-5 shadow-xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cotización Bilingüe en Vivo</span>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-400 block font-medium">{t.estimatedTitle}</span>
              <div className="text-4xl sm:text-5xl font-black text-white">
                ${weeklyTotal} <span className="text-base text-emerald-400 font-bold">AUD</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono block">Tarifa plana de ${baseRate} AUD / hora</span>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed italic">
              {t.estimatedNote}
            </p>

            <button
              onClick={handleWhatsAppBooking}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-extrabold text-xs shadow-lg shadow-emerald-500/20 hover:scale-[1.02] transition-all flex items-center justify-center space-x-2"
            >
              <span>💬 RESERVAR POR WHATSAPP</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center space-x-1.5 text-[10px] text-slate-500 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Garantía de reunión previa sin compromiso</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
