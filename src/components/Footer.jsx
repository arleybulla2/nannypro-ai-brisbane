import React, { useState } from 'react';
import { ShieldCheck, Mail, ArrowRight, Globe } from 'lucide-react';
import { content } from '../translations/content';

export default function Footer({ lang, setLang }) {
  const t = content[lang].footer;
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#060910] text-slate-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <ShieldCheck className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-xl font-extrabold text-white">
                NannyPro <span className="text-emerald-400">AI</span>
              </span>
            </div>

            <p className="text-xs leading-relaxed max-w-sm text-slate-400">
              {t.brandDesc}
            </p>

            <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
              <span>📍 {t.location}</span>
            </div>

            <p className="text-[11px] text-slate-500 leading-tight">
              {t.compliance}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 grid grid-cols-2 gap-4 text-xs space-y-2">
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-3">{t.col1}</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">Servicios Brisbane</a></li>
                <li><a href="#how-it-works" className="hover:text-emerald-400 transition-colors">Verificación Blue Card</a></li>
                <li><a href="#orchestration" className="hover:text-emerald-400 transition-colors">Motor de IA 4.0</a></li>
                <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Planes en AUD</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-3">{t.col2}</h4>
              <ul className="space-y-2">
                <li><a href="#testimonials" className="hover:text-emerald-400 transition-colors">Familias Latinas</a></li>
                <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Preguntas Frecuentes</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Trabaja como Niñera</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog Cuidado AU</a></li>
              </ul>
            </div>
          </div>

          {/* Col 3: Newsletter Subscription */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {lang === 'es' ? 'Recibe consejos sobre Cuidado Infantil en Brisbane' : 'Get Childcare Insights in Brisbane'}
            </h4>
            <p className="text-xs text-slate-400">
              {lang === 'es' ? 'Únete a nuestra lista de correo para familias latinas y australianas en QLD.' : 'Join our newsletter for Latino and Australian families in QLD.'}
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                ✓ {lang === 'es' ? '¡Gracias por suscribirte!' : 'Thank you for subscribing!'}
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex space-x-2">
                <input
                  type="email"
                  required
                  placeholder="tu.email@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors shrink-0"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Language Switcher */}
            <div className="pt-2 flex items-center space-x-2">
              <button
                onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>{lang === 'es' ? 'Cambiar a English 🇦🇺' : 'Switch to Español 🇪🇸'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>{t.copyright}</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-slate-400">Términos de Servicio</a>
            <a href="#" className="hover:text-slate-400">Política de Privacidad AU</a>
            <a href="#" className="hover:text-slate-400">Seguridad Blue Card</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
