import React from 'react';
import { SWOTMatrixData } from '../../domain/types';
import { Compass } from 'lucide-react';

interface SwotMatrixProps {
  readonly swot: SWOTMatrixData;
}

export const SwotMatrix: React.FC<SwotMatrixProps> = ({ swot }) => {
  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-xs print-avoid-break print:p-3.5 print:border-slate-300 print:shadow-none">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2 pb-3 border-b border-slate-100 print:mb-2 print:pb-1.5">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-md bg-slate-100 text-slate-700 print:p-1">
            <Compass className="w-4 h-4 print:w-3.5 print:h-3.5" strokeWidth={1.75} />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 tracking-tight print:text-sm">
              Matriks Strategis & Posisi Pasar (@pearl.storeflowers)
            </h2>
            <p className="text-xs text-slate-500 print:text-[10px]">
              Pemetaan faktor internal studio dan dinamika pasar eksternal
            </p>
          </div>
        </div>
        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 print:text-[10px] print:px-1.5 print:py-0.5">
          Strategic Positioning
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 print:grid-cols-2 print:gap-2.5">
        {/* Kolom 1: Faktor Internal */}
        <div className="space-y-3 print:space-y-2">
          <div className="border-b border-slate-200 pb-1">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider print:text-[10px]">
              Faktor Internal Studio
            </h3>
          </div>

          {/* Strengths */}
          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 print:p-2.5">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5 print:text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Kekuatan Inti (Strengths)
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600 leading-relaxed print:text-[10px] print:space-y-1">
              {swot.strengths.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="font-mono text-slate-400 font-bold shrink-0">0{idx + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Weaknesses */}
          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 print:p-2.5">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5 print:text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
              Hambatan Operasional (Weaknesses)
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600 leading-relaxed print:text-[10px] print:space-y-1">
              {swot.weaknesses.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="font-mono text-slate-400 font-bold shrink-0">0{idx + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Kolom 2: Faktor Eksternal */}
        <div className="space-y-3 print:space-y-2">
          <div className="border-b border-slate-200 pb-1">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider print:text-[10px]">
              Faktor Pasar Eksternal
            </h3>
          </div>

          {/* Opportunities */}
          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 print:p-2.5">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5 print:text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
              Peluang Pertumbuhan (Opportunities)
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600 leading-relaxed print:text-[10px] print:space-y-1">
              {swot.opportunities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="font-mono text-slate-400 font-bold shrink-0">0{idx + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Threats */}
          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 print:p-2.5">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5 print:text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
              Tantangan Lingkungan (Threats)
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600 leading-relaxed print:text-[10px] print:space-y-1">
              {swot.threats.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="font-mono text-slate-400 font-bold shrink-0">0{idx + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
