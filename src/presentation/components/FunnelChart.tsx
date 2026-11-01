import React from 'react';
import { FunnelStageMetric } from '../../domain/types';
import { Layers, AlertCircle, ArrowDown } from 'lucide-react';

interface FunnelChartProps {
  readonly stages: readonly FunnelStageMetric[];
}

export const FunnelChart: React.FC<FunnelChartProps> = ({ stages }) => {
  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-xs print-avoid-break print:p-3.5 print:border-slate-300 print:shadow-none">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2 pb-3 border-b border-slate-100 print:mb-2 print:pb-1.5">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-md bg-slate-100 text-slate-700 print:p-1">
            <Layers className="w-4 h-4 print:w-3.5 print:h-3.5" strokeWidth={1.75} />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 tracking-tight print:text-sm">
              Alur Perjalanan Pelanggan (*Customer Journey Funnel*)
            </h2>
            <p className="text-xs text-slate-500 print:text-[10px]">
              Estimasi konversi dari kunjungan profil hingga transaksi
            </p>
          </div>
        </div>
        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 print:text-[10px] print:px-1.5 print:py-0.5">
          Friksi Terbesar: Tahap Kontak (83.5%)
        </span>
      </div>

      <div className="space-y-3 mt-3 print:space-y-2">
        {stages.map((stage, idx) => {
          const isCritical = stage.status === 'critical';

          return (
            <div key={stage.id} className="relative">
              <div
                className={`p-3.5 rounded-xl border transition print:p-2.5 ${
                  isCritical
                    ? 'bg-rose-50/40 border-rose-200'
                    : 'bg-slate-50/50 border-slate-200'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-white text-slate-600 text-xs font-bold flex items-center justify-center border border-slate-200 shadow-3xs print:w-4 print:h-4 print:text-[10px]">
                      {idx + 1}
                    </span>
                    <h3 className="text-sm font-semibold text-slate-900 print:text-xs">{stage.stage}</h3>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <span className="text-sm font-bold text-slate-900 tabular-nums print:text-xs">
                      {stage.count} <span className="text-xs font-normal text-slate-500 print:text-[10px]">audien/bln</span>
                    </span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded font-medium border print:text-[9px] print:px-1.5 ${
                        isCritical
                          ? 'bg-rose-100 text-rose-800 border-rose-200 font-semibold'
                          : 'bg-white text-slate-600 border-slate-200'
                      }`}
                    >
                      {stage.conversionRate.toFixed(1)}%
                    </span>
                  </div>
                </div>

                {/* Progress bar visualizer */}
                <div className="w-full bg-slate-200/70 rounded-full h-2 overflow-hidden print:h-1.5">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isCritical
                        ? 'bg-rose-600'
                        : 'bg-slate-700'
                    }`}
                    style={{ width: `${Math.max(5, stage.conversionRate)}%` }}
                  />
                </div>

                {stage.bottleneckReason && (
                  <div className="mt-2 pt-1.5 border-t border-slate-200/60 flex items-start gap-1.5 text-xs print:text-[10px] print:mt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-slate-500" />
                    <span className="text-slate-600">
                      <strong className="text-slate-800">Analisis:</strong> {stage.bottleneckReason}
                    </span>
                  </div>
                )}
              </div>

              {idx < stages.length - 1 && (
                <div className="flex items-center justify-center my-0.5">
                  <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400 bg-white px-1.5 py-0.5 rounded border border-slate-200 shadow-3xs">
                    <ArrowDown className="w-2.5 h-2.5 text-slate-400" />
                    <span>Drop-Off: {stages[idx + 1].dropOffPercentage.toFixed(1)}%</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
