import React, { useState } from 'react';
import { Cpu, Zap, ArrowRight, CheckCircle, RefreshCw, AlertTriangle, CloudRain, Smile } from 'lucide-react';
import { content } from '../translations/content';

export default function AIOrchestration({ lang }) {
  const t = content[lang].orchestration;
  const [activeScenarioId, setActiveScenarioId] = useState('teething');
  const [isProcessing, setIsProcessing] = useState(false);

  const activeScenario = t.scenarios.find(s => s.id === activeScenarioId) || t.scenarios[0];

  const handleScenarioChange = (id) => {
    setIsProcessing(true);
    setActiveScenarioId(id);
    setTimeout(() => {
      setIsProcessing(false);
    }, 400);
  };

  return (
    <section id="orchestration" className="py-24 bg-[#090D16] relative overflow-hidden">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Dynamic Interactive Widget Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#111827] border border-white/10 p-6 sm:p-8 shadow-2xl relative">
          
          {/* Scenario Tabs Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8 pb-6 border-b border-slate-800">
            {t.scenarios.map((scen) => (
              <button
                key={scen.id}
                onClick={() => handleScenarioChange(scen.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 ${
                  activeScenarioId === scen.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.4)] scale-105'
                    : 'bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 border border-white/5'
                }`}
              >
                <span>{scen.label}</span>
              </button>
            ))}
          </div>

          {/* Interactive Simulation Panel */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Condition Box (Input) */}
            <div className="md:col-span-5 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Dato de Entrada Detectado
                </span>
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              </div>
              <p className="text-sm font-semibold text-slate-200">
                {activeScenario.condition}
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                <span>Fuente: Ring Sleep / Tracker</span>
                <span className="text-emerald-400 font-bold">Sin intervención humana</span>
              </div>
            </div>

            {/* AI Core Processing Divider */}
            <div className="md:col-span-2 flex flex-col items-center justify-center py-2 md:py-0">
              <div className={`w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center shadow-lg text-indigo-400 ${isProcessing ? 'animate-spin' : ''}`}>
                <Zap className="w-6 h-6 fill-indigo-400" />
              </div>
              <span className="text-[10px] font-mono text-indigo-300 mt-2 font-bold uppercase tracking-wider">
                {isProcessing ? 'Procesando...' : 'AI Engine 4.0'}
              </span>
            </div>

            {/* Action Response Box (Output) */}
            <div className="md:col-span-5 p-5 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-slate-900 border border-emerald-500/30 space-y-3 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  {activeScenario.status}
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                  AUTÓNOMO
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                {activeScenario.aiAction}
              </p>
            </div>

          </div>

          {/* Bottom Live Indicator */}
          <div className="mt-8 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Conectado a la app de la niñera en Brisbane
            </span>
            <span className="font-mono text-emerald-400 font-bold">
              Latencia: 14ms • Servidor Sydney/Brisbane
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
