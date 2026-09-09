import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Globe, Menu, X, ArrowRight, UserCheck } from 'lucide-react';
import { content } from '../translations/content';

export default function Navbar({ lang, setLang, onOpenMatchModal, onOpenTrialModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = content[lang].navbar;

  return (
    <nav className="sticky top-0 z-50 bg-[#090D16]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Location Badge */}
          <div className="flex items-center space-x-3">
            <a href="#" className="flex items-center space-x-2 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:scale-105 transition-transform duration-300">
                <ShieldCheck className="w-6 h-6 text-slate-950 font-bold" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-500 rounded-full animate-ping" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
                  NannyPro <span className="px-2 py-0.5 text-xs font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.3)]">{t.aiTag}</span>
                </span>
                <span className="text-[10px] tracking-wider text-slate-400 uppercase font-semibold">
                  Childcare Ecosystem
                </span>
              </div>
            </a>

            {/* Brisbane QLD Badge */}
            <div className="hidden md:flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium text-emerald-300">{t.badge}</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7">
            <a href="#services" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">{t.links.services}</a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">{t.links.howItWorks}</a>
            <a href="#orchestration" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              {t.links.orchestration}
            </a>
            <a href="#fundamentals" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">{t.links.fundamentals}</a>
            <a href="#difference" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">{t.links.difference}</a>
            <a href="#pricing" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">{t.links.pricing}</a>
            <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">{t.links.faq}</a>
          </div>

          {/* Action Controls & Language Selector */}
          <div className="hidden sm:flex items-center space-x-3">
            
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800/90 border border-white/10 text-xs font-semibold text-slate-200 hover:bg-slate-700 transition-colors"
              title="Cambiar idioma / Switch language"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'es' ? '🇪🇸 ES' : '🇦🇺 EN'}</span>
            </button>

            {/* Login Ghost Button */}
            <button
              onClick={onOpenTrialModal}
              className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white glass-button rounded-xl transition-all duration-200"
            >
              {t.login}
            </button>

            {/* Primary Emerald CTA Button */}
            <button
              onClick={onOpenTrialModal}
              className="relative group px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-[1.02] transition-all duration-200 flex items-center space-x-2"
            >
              <span>{t.trialCta}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 border border-white/10 text-xs font-bold text-emerald-400"
            >
              {lang === 'es' ? '🇪🇸' : '🇦🇺'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0D1322] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-5 duration-200">
          <div className="flex items-center justify-between py-2 border-b border-slate-800">
            <span className="text-xs text-slate-400">Location:</span>
            <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
              {t.badge}
            </span>
          </div>
          <div className="flex flex-col space-y-2.5 pt-2">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-300 py-1">{t.links.services}</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-300 py-1">{t.links.howItWorks}</a>
            <a href="#orchestration" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-300 py-1">{t.links.orchestration}</a>
            <a href="#fundamentals" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-300 py-1">{t.links.fundamentals}</a>
            <a href="#difference" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-300 py-1">{t.links.difference}</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-300 py-1">{t.links.pricing}</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-300 py-1">{t.links.faq}</a>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenMatchModal(); }}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-800 text-slate-200 font-semibold text-sm border border-white/10 flex items-center justify-center gap-2"
            >
              <UserCheck className="w-4 h-4 text-emerald-400" />
              <span>{t.matchCta}</span>
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenTrialModal(); }}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 text-center"
            >
              {t.trialCta}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
