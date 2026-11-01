import React from 'react';
import { ContentPillarDistribution } from '../../domain/types';
import { Sliders, Video } from 'lucide-react';

interface ContentPillarsChartProps {
  readonly pillars: readonly ContentPillarDistribution[];
}

export const ContentPillarsChart: React.FC<ContentPillarsChartProps> = ({ pillars }) => {
  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-xs print-avoid-break print:p-3.5 print:border-slate-300 print:shadow-none">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2 pb-3 border-b border-slate-100 print:mb-2 print:pb-1.5">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-md bg-slate-100 text-slate-700 print:p-1">
            <Sliders className="w-4 h-4 print:w-3.5 print:h-3.5" strokeWidth={1.75} />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 tracking-tight print:text-sm">
              Penataan Pilar & Format Distribusi Konten
            </h2>
            <p className="text-xs text-slate-500 print:text-[10px]">
              Optimalisasi rasio feed foto menuju dominasi video pendek vertikal
            </p>
          </div>
        </div>
        <span className="text-xs font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 flex items-center gap-1.5 print:text-[10px] print:px-1.5 print:py-0.5">
          <Video className="w-3.5 h-3.5 text-slate-500" />
          Target: 70% Video Reels
        </span>
      </div>

      <div className="space-y-2.5 mt-3 print:space-y-1.5">
        {pillars.map((item, idx) => (
          <div key={idx} className="bg-slate-50/60 border border-slate-200/80 rounded-xl p-3.5 print:p-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
              <h4 className="text-sm font-semibold text-slate-900 print:text-xs">{item.name}</h4>
              <div className="flex items-center gap-2 text-xs print:text-[10px]">
                <span className="text-slate-500 font-mono">
                  Saat ini: <strong className="text-slate-800">{item.currentSharePercent}%</strong>
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-900 font-semibold font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200 shadow-3xs">
                  Target: {item.recommendedSharePercent}%
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-500 mb-2 leading-relaxed print:text-[10px] print:mb-1">{item.description}</p>

            <div className="grid grid-cols-2 gap-3 text-[11px] print:text-[9px]">
              <div>
                <div className="text-slate-400 font-medium mb-0.5">Porsi Saat Ini:</div>
                <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="h-full bg-slate-400 rounded-full"
                    style={{ width: `${item.currentSharePercent}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="text-slate-600 font-medium mb-0.5">Target Penataan:</div>
                <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="h-full bg-slate-900 rounded-full transition-all"
                    style={{ width: `${item.recommendedSharePercent}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
