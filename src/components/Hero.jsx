import React from 'react';
import { ShieldCheck, Star, Sparkles, Activity, CheckCircle2, ArrowRight, Play, Heart, Bell } from 'lucide-react';
import { content } from '../translations/content';

export default function Hero({ lang, onOpenMatchModal, onOpenTrialModal }) {
  const t = content[lang].hero;

  return (
    <section className="relative pt-12 pb-24 lg:pt-16 lg:pb-32 overflow-hidden bg-hero-glow">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-bold text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-emerald-400">🇦🇺 BRISBANE, QLD</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-200">{t.badgeLatino}</span>
            </div>

            {/* Headline H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              {t.titleStart} <br className="hidden sm:inline" />
              <span className="gradient-text-emerald block mt-1">
                {t.titleAccent}
              </span>
              <span className="text-white">{t.titleEnd}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              {t.subtitle}
            </p>

            {/* Primary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenMatchModal}
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 text-slate-950 font-black text-base shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <span>{t.findNannyBtn}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#pricing"
                className="px-6 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 text-white font-semibold text-base transition-all duration-200 text-center flex items-center justify-center space-x-2"
              >
                <span>{t.viewPlansBtn}</span>
              </a>
            </div>

            {/* Social Proof Bar */}
            <div className="pt-6 flex flex-wrap items-center gap-4 border-t border-slate-800/80 w-full">
              {/* Parent Avatars */}
              <div className="flex -space-x-2">
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Parent Brisbane" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Parent Brisbane" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" alt="Parent Brisbane" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" alt="Parent Brisbane" />
              </div>

              {/* Stars & Text */}
              <div className="flex flex-col">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-white ml-1">{t.rating}</span>
                </div>
                <span className="text-xs text-slate-400 mt-0.5">
                  {t.socialProof}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Dashboard Mockup */}
          <div className="lg:col-span-5 relative">
            
            {/* Glowing Backdrop Frame */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-indigo-500 opacity-30 blur-lg animate-pulse-slow" />
            
            <div className="relative rounded-2xl bg-[#0F172A] border border-white/10 p-5 sm:p-6 shadow-2xl space-y-5">
              
              {/* Header Status Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase">
                    {t.mockup.liveBadge}
                  </span>
                </div>
                <div className="flex items-center space-x-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.mockup.verifiedCard}</span>
                </div>
              </div>

              {/* Verified Nanny Card Highlight */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center space-x-4">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
                    alt="Valentina M. Nanny Brisbane"
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-emerald-500"
                  />
                  <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-900 flex items-center justify-center text-[8px] text-black font-black">✓</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white truncate">{t.mockup.nannyName}</h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      Bilingüe
                    </span>
                  </div>
                  <p className="text-xs text-emerald-400 font-medium">{t.mockup.nannyRole}</p>
                  <p className="text-[11px] text-slate-400 truncate mt-0.5">{t.mockup.wwccNumber}</p>
                </div>
              </div>

              {/* Health Readiness Score Widget */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium text-slate-400">Health Score</span>
                    <Heart className="w-4 h-4 text-rose-400 fill-rose-400/20" />
                  </div>
                  <div className="mt-1 text-2xl font-extrabold text-emerald-400">
                    {t.mockup.readinessScore}
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">Pediatric First Aid Certified</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium text-slate-400">EYLF Learning</span>
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="mt-1 text-2xl font-extrabold text-indigo-400">
                    Level 4
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">Early Dual Language AU</span>
                </div>
              </div>

              {/* Live Feed Feed Activities */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center justify-between text-xs text-slate-400 font-medium px-1">
                  <span className="flex items-center gap-1.5 text-slate-200 font-semibold">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    {t.mockup.activityTitle}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono">LIVE UPDATE</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-1.5">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{t.mockup.activity1}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{t.mockup.activity2}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                    <span className="text-slate-400">{t.mockup.activity3}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Trigger Banner */}
              <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-950/60 to-indigo-950/60 border border-emerald-500/20 flex items-center justify-between text-xs text-slate-200">
                <span className="font-semibold text-emerald-300 flex items-center gap-1.5">
                  <Bell className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
                  Alerta AI: Clima soleado en New Farm
                </span>
                <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                  Parque Sugerido
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
