import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CredentialsShowcase from './components/CredentialsShowcase';
import Services from './components/Services';
import RateCalculator from './components/RateCalculator';
import AIOrchestration from './components/AIOrchestration';
import DailyFundamentals from './components/DailyFundamentals';
import DifferenceTable from './components/DifferenceTable';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import NannyMatchModal from './components/NannyMatchModal';
import FreeTrialModal from './components/FreeTrialModal';
import AdminCRM from './components/AdminCRM';
import { UserCheck, LayoutDashboard, Calculator } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('es'); // 'es' or 'en'
  const [isMatchModalOpen, setIsMatchModalOpen] = useState(false);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300 relative">
      
      {/* Sticky Top Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenMatchModal={() => setIsMatchModalOpen(true)}
        onOpenTrialModal={() => setIsTrialModalOpen(true)}
      />

      {/* Main Page Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          lang={lang}
          onOpenMatchModal={() => setIsMatchModalOpen(true)}
          onOpenTrialModal={() => setIsTrialModalOpen(true)}
        />

        {/* 2. Official Queensland Credentials Showcase */}
        <CredentialsShowcase
          lang={lang}
        />

        {/* 3. Elite Care Services */}
        <Services
          lang={lang}
          onOpenMatchModal={() => setIsMatchModalOpen(true)}
        />

        {/* 4. Interactive AUD Rate Calculator */}
        <RateCalculator
          lang={lang}
        />

        {/* 5. Interactive Feature Component: AI Family Orchestration */}
        <AIOrchestration
          lang={lang}
        />

        {/* 6. Daily Fundamentals Grid (12 Interactive Cards) */}
        <DailyFundamentals
          lang={lang}
        />

        {/* 7. Comparison Table / Difference Section */}
        <DifferenceTable
          lang={lang}
          onOpenMatchModal={() => setIsMatchModalOpen(true)}
        />

        {/* 8. Real Testimonials (Brisbane Latino & AU Families) */}
        <Testimonials
          lang={lang}
        />

        {/* 9. FAQ Section (Accordion Style) */}
        <FAQ
          lang={lang}
        />
      </main>

      {/* 10. Footer */}
      <Footer
        lang={lang}
        setLang={setLang}
      />

      {/* Floating Action Buttons: Admin Operations & Client Match */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-3">
        {/* Admin CRM Button */}
        <button
          onClick={() => setIsAdminOpen(true)}
          className="p-3.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 shadow-xl transition-all hover:scale-105 flex items-center space-x-2"
          title="Panel de Operaciones NannyPro AI"
        >
          <LayoutDashboard className="w-5 h-5" />
          <span className="hidden lg:inline text-xs font-bold">Admin Hub</span>
        </button>

        {/* Client Match FAB */}
        <button
          onClick={() => setIsMatchModalOpen(true)}
          className="group relative p-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-110 transition-all duration-300 flex items-center space-x-2"
          title="Buscar Niñera en Brisbane"
        >
          <UserCheck className="w-6 h-6" />
          <span className="hidden md:inline text-xs font-black uppercase tracking-wider pr-1">
            {lang === 'es' ? 'Reservar Cuidado Privado' : 'Book Private Care'}
          </span>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-indigo-500 rounded-full border-2 border-slate-950 animate-ping" />
        </button>
      </div>

      {/* Modals */}
      <NannyMatchModal
        isOpen={isMatchModalOpen}
        onClose={() => setIsMatchModalOpen(false)}
        lang={lang}
      />

      <FreeTrialModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
        lang={lang}
      />

      {/* Admin CRM & Business Control Panel */}
      <AdminCRM
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

    </div>
  );
}
