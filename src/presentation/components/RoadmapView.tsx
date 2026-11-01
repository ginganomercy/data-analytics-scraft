import React from 'react';
import { ROADMAP_PHASES_DATA } from '../../infrastructure/seed-data';
import { Calendar, ArrowRight, CheckSquare } from 'lucide-react';

export const RoadmapView: React.FC = () => {
  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-xs print-avoid-break print:p-3.5 print:border-slate-300 print:shadow-none">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2 pb-3 border-b border-slate-100 print:mb-2 print:pb-1.5">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-md bg-slate-100 text-slate-700 print:p-1">
            <CheckSquare className="w-4 h-4 print:w-3.5 print:h-3.5" strokeWidth={1.75} />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 tracking-tight print:text-sm">
              Rencana Aksi Eksekusi Bertahap (4 Fase)
            </h2>
            <p className="text-xs text-slate-500 print:text-[10px]">
              Tahapan implementasi terstruktur untuk mengoptimalkan kanal penjualan
            </p>
          </div>
        </div>
        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 print:text-[10px] print:px-1.5 print:py-0.5">
          Action Plan Roadmap
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3 print:grid-cols-2 lg:print:grid-cols-4 print:gap-2">
        {ROADMAP_PHASES_DATA.map((phase) => (
          <div
            key={phase.phaseNumber}
            className="bg-slate-50/50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-slate-300 transition print-avoid-break print:p-2.5"
          >
            <div>
              <div className="flex items-center justify-between gap-1.5 mb-2 print:mb-1">
                <span className="font-mono text-xs font-bold text-slate-500 print:text-[10px]">
                  FASE 0{phase.phaseNumber}
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200 shadow-3xs print:text-[9px] print:px-1">
                  {phase.focusBadge}
                </span>
              </div>

              <h3 className="text-sm font-bold text-slate-900 mb-1 print:text-xs">{phase.title}</h3>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3 font-mono print:text-[10px] print:mb-2">
                <Calendar className="w-3.5 h-3.5 text-slate-400 print:w-3 print:h-3" />
                <span>{phase.timeframe}</span>
              </div>

              <div className="space-y-1.5 mb-3 print:space-y-1 print:mb-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block print:text-[9px]">
                  Tugas Utama:
                </span>
                <ul className="space-y-1 text-xs text-slate-600 print:text-[10px]">
                  {phase.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <ArrowRight className="w-3 h-3 text-slate-400 shrink-0 mt-0.5 print:w-2.5 print:h-2.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 mt-1">
              <div className="text-xs text-slate-700 bg-white p-2 rounded-lg border border-slate-200 shadow-3xs print:p-1.5 print:text-[10px]">
                <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider mb-0.5 print:text-[9px]">
                  Target Capaian:
                </span>
                <span className="font-medium text-slate-800">
                  {phase.expectedImpact}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
