import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, ArrowRight, Lock, Phone } from 'lucide-react';

export default function FreeTrialModal({ isOpen, onClose, lang }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [suburb, setSuburb] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && (email || phone)) {
      // Build pre-filled WhatsApp message with lead details
      const textMessage = encodeURIComponent(
        `Hola! Quisiera activar mi Prueba Gratuita de 7 Días en NannyPro AI Brisbane 🇦🇺.\n\n` +
        `👤 Nombre: ${name}\n` +
        `📧 Email: ${email}\n` +
        `📍 Suburbio: ${suburb || 'Brisbane'}\n` +
        `📱 Teléfono: ${phone || 'No especificado'}\n\n` +
        `Quedo a la espera de coordinar la entrevista con la niñera fundadora.`
      );

      // Open WhatsApp chat directly to +61425342469
      window.open(`https://wa.me/61425342469?text=${textMessage}`, '_blank');
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setSuburb('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#111827] border border-white/10 p-6 sm:p-8 shadow-2xl">
        
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Prueba Gratuita de 7 Días
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
              {lang === 'es' ? 'Comienza tu experiencia NannyPro AI en Brisbane' : 'Start Your NannyPro AI Trial in Brisbane'}
            </h3>
            
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              {lang === 'es'
                ? 'Accede a nuestro servicio de niñera bilingüe verificada con QLD Blue Card en Brisbane. Sin cargos durante 7 días.'
                : 'Access our verified QLD Blue Card bilingual nanny service in Brisbane. $0 charge for 7 days.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Nombre Completo *</label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Sofía Rodríguez"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Correo Electrónico *</label>
                <input
                  type="email"
                  required
                  placeholder="sofia@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Suburbio en Brisbane</label>
                  <input
                    type="text"
                    placeholder="Ej. New Farm, West End"
                    value={suburb}
                    onChange={(e) => setSuburb(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="Ej. +61 400 000 000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-extrabold text-sm shadow-lg shadow-emerald-500/25 hover:scale-[1.02] transition-all flex items-center justify-center space-x-2"
                >
                  <span>{lang === 'es' ? 'ACTIVAR MI PRUEBA GRATIS VÍA WHATSAPP 🚀' : 'ACTIVATE MY 7-DAY FREE TRIAL VIA WHATSAPP 🚀'}</span>
                </button>
              </div>
            </form>

            <div className="mt-4 flex items-center justify-center space-x-2 text-[11px] text-slate-500">
              <Lock className="w-3.5 h-3.5" />
              <span>Garantía de privacidad • Atención directa en Brisbane</span>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-4 py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30 shadow-xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-extrabold text-white">
              ¡Solicitud Enviada por WhatsApp!
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed">
              Tus datos han sido estructurados y enviados al WhatsApp oficial <span className="text-emerald-400 font-bold">+61 425 342 469</span>. Te responderemos de inmediato.
            </p>

            <button
              onClick={handleClose}
              className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-white/10"
            >
              Entendido / Cerrar
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
