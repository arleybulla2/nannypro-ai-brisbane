import React, { useState, useEffect } from 'react';
import { ShieldCheck, Users, DollarSign, Calendar, TrendingUp, CheckCircle, Clock, AlertCircle, Download, Plus, MessageSquare, FileText, Phone, MapPin, X } from 'lucide-react';

export default function AdminCRM({ isOpen, onClose }) {
  const [leads, setLeads] = useState([
    { id: 1, name: 'Sofía Rodríguez', email: 'sofia.r@gmail.com', phone: '+61 412 345 678', suburb: 'New Farm', stage: 'Entrevista Agendada', value: 276, date: '2026-09-09', notes: 'Busca niñera bilingüe 3 días/semana para niño de 2 años.' },
    { id: 2, name: 'Mark & Sarah Jenkins', email: 'mjenkins@ozemail.com.au', phone: '+61 401 987 654', suburb: 'Paddington', stage: 'Prueba Gratis 7 Días', value: 276, date: '2026-09-08', notes: 'Interesados en estimulación EYLF en español.' },
    { id: 3, name: 'Camila & Mateo Silva', email: 'csilva@outlook.com', phone: '+61 450 112 233', suburb: 'West End', stage: 'Cliente Recurrente Activo', value: 516, date: '2026-09-05', notes: 'Membresía Smart Family AI ($69/mes) + Cuidado diario.' },
    { id: 4, name: 'Dra. Sofía Rivas', email: 'srivas@brisbanehealth.qld.gov.au', phone: '+61 433 445 566', suburb: 'South Brisbane', stage: 'Nuevo Lead', value: 276, date: '2026-09-09', notes: 'Turnos de hospital, necesita emergencias nocturnas.' }
  ]);

  const [newLeadModal, setNewLeadModal] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', email: '', phone: '', suburb: 'New Farm', stage: 'Nuevo Lead', value: 276, notes: '' });

  if (!isOpen) return null;

  const totalMRR = leads.filter(l => l.stage === 'Cliente Recurrente Activo').reduce((sum, l) => sum + l.value, 0);
  const pipelineValue = leads.reduce((sum, l) => sum + l.value, 0);

  const handleStageChange = (id, newStage) => {
    setLeads(leads.map(l => l.id === id ? { ...l, stage: newStage } : l));
  };

  const handleAddLead = (e) => {
    e.preventDefault();
    if (leadForm.name) {
      setLeads([...leads, { ...leadForm, id: Date.now(), date: new Date().toISOString().split('T')[0] }]);
      setLeadForm({ name: '', email: '', phone: '', suburb: 'New Farm', stage: 'Nuevo Lead', value: 276, notes: '' });
      setNewLeadModal(false);
    }
  };

  const exportCSV = () => {
    const headers = ['ID', 'Nombre', 'Email', 'Telefono', 'Suburbio', 'Etapa', 'Valor AUD/mes', 'Fecha', 'Notas'];
    const rows = leads.map(l => [l.id, l.name, l.email, l.phone, l.suburb, l.stage, l.value, l.date, `"${l.notes}"`]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `NannyPro_AI_Leads_Brisbane_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stages = ['Nuevo Lead', 'Entrevista Agendada', 'Prueba Gratis 7 Días', 'Cliente Recurrente Activo'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-6xl rounded-3xl bg-[#0D1322] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6 my-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
              <ShieldCheck className="w-6 h-6 text-slate-950 font-bold" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
                NannyPro AI • Business Operations & CRM Hub
                <span className="text-xs font-black bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">Brisbane 🇦🇺</span>
              </h2>
              <p className="text-xs text-slate-400">Control total del pipeline de ventas, estado de familias y métricas financieras en AUD.</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={exportCSV}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-slate-200 flex items-center space-x-1.5 transition-all"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Exportar Excel</span>
            </button>

            <button
              onClick={() => setNewLeadModal(true)}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-extrabold text-xs shadow-lg shadow-emerald-500/20 flex items-center space-x-1.5 hover:scale-105 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Nuevo Cliente</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>MRR Activo (Mensual)</span>
              <DollarSign className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-black text-emerald-400">${totalMRR} AUD</div>
            <span className="text-[10px] text-slate-500 font-medium">100% Margen Bruto de Fundadores</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Valor Total Pipeline</span>
              <TrendingUp className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-2xl font-black text-indigo-400">${pipelineValue} AUD</div>
            <span className="text-[10px] text-slate-500 font-medium">Proyección a 30 Días</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Total de Leads Activos</span>
              <Users className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl font-black text-white">{leads.length} Familias</div>
            <span className="text-[10px] text-slate-500 font-medium">Brisbane Inner City</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Tasa de Conversión</span>
              <CheckCircle className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-black text-emerald-400">75%</div>
            <span className="text-[10px] text-slate-500 font-medium">Entrevista &rarr; Contrato</span>
          </div>
        </div>

        {/* CRM Pipeline Kanban Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
          {stages.map((stg) => {
            const stageLeads = leads.filter(l => l.stage === stg);
            return (
              <div key={stg} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-start space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-xs font-extrabold text-slate-200 uppercase tracking-wider">{stg}</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-slate-800 text-emerald-400">
                    {stageLeads.length}
                  </span>
                </div>

                <div className="space-y-3 min-h-[220px]">
                  {stageLeads.map((lead) => (
                    <div key={lead.id} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2 hover:border-slate-700 transition-all">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">{lead.name}</span>
                        <span className="text-[10px] text-emerald-400 font-mono font-bold">${lead.value} AUD</span>
                      </div>
                      <p className="text-[11px] text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" /> {lead.suburb}
                      </p>
                      <p className="text-[10px] text-slate-500 leading-tight italic">
                        "{lead.notes}"
                      </p>

                      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                        <a
                          href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=Hola%20${encodeURIComponent(lead.name)},%20te%20escribo%20de%20NannyPro%20AI%20Brisbane.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-bold text-emerald-400 hover:underline flex items-center gap-1"
                        >
                          <MessageSquare className="w-3 h-3" /> WhatsApp
                        </a>

                        {/* Move Stage Selector */}
                        <select
                          value={lead.stage}
                          onChange={(e) => handleStageChange(lead.id, e.target.value)}
                          className="bg-slate-800 border border-slate-700 text-[10px] text-slate-300 rounded px-1.5 py-0.5 focus:outline-none"
                        >
                          {stages.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                  ))}

                  {stageLeads.length === 0 && (
                    <div className="p-4 text-center text-xs text-slate-600 border border-dashed border-slate-800 rounded-xl">
                      Sin registros
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Add Lead Modal Overlay */}
        {newLeadModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div className="w-full max-w-md p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white">Registrar Nuevo Lead en Brisbane</h3>
                <button onClick={() => setNewLeadModal(false)} className="text-slate-400 hover:text-white">✕</button>
              </div>

              <form onSubmit={handleAddLead} className="space-y-3">
                <input
                  type="text"
                  placeholder="Nombre de la Familia / Padres"
                  required
                  value={leadForm.name}
                  onChange={e => setLeadForm({ ...leadForm, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={leadForm.email}
                  onChange={e => setLeadForm({ ...leadForm, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white"
                />
                <input
                  type="tel"
                  placeholder="Teléfono (+61 ...)"
                  value={leadForm.phone}
                  onChange={e => setLeadForm({ ...leadForm, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white"
                />
                <input
                  type="text"
                  placeholder="Suburbio en Brisbane (Ej. New Farm)"
                  value={leadForm.suburb}
                  onChange={e => setLeadForm({ ...leadForm, suburb: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white"
                />
                <textarea
                  placeholder="Notas especiales (edades de los niños, horarios, etc.)"
                  value={leadForm.notes}
                  onChange={e => setLeadForm({ ...leadForm, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white h-20"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs"
                >
                  Guardar Cliente en CRM
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
