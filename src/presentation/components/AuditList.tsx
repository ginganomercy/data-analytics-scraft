import React from 'react';
import { AuditChecklistItem, AuditStatus } from '../../domain/types';
import { CATEGORY_FILTERS, CategoryFilterType } from '../../domain/constants';
import { CheckCircle2, AlertCircle, XCircle, ClipboardCheck } from 'lucide-react';

interface AuditListProps {
  readonly checklist: readonly AuditChecklistItem[];
  readonly selectedCategory: CategoryFilterType;
  readonly onSelectCategory: (category: CategoryFilterType) => void;
  readonly stats: {
    readonly total: number;
    readonly passed: number;
    readonly warning: number;
    readonly failed: number;
  };
}

export const AuditList: React.FC<AuditListProps> = ({
  checklist,
  selectedCategory,
  onSelectCategory,
  stats,
}) => {
  const getStatusBadge = (status: AuditStatus) => {
    switch (status) {
      case 'pass':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 print:text-[9px] print:px-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 print:w-3 print:h-3" />
            Lulus
          </span>
        );
      case 'warning':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 print:text-[9px] print:px-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600 print:w-3 print:h-3" />
            Perlu Perbaikan
          </span>
        );
      case 'fail':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-rose-50 text-rose-800 border border-rose-200 print:text-[9px] print:px-1.5">
            <XCircle className="w-3.5 h-3.5 text-rose-600 print:w-3 print:h-3" />
            Kritis
          </span>
        );
    }
  };

  const getPriorityStyle = (priority: 'Tinggi' | 'Sedang' | 'Rendah') => {
    switch (priority) {
      case 'Tinggi':
        return 'text-rose-800 bg-rose-50 border-rose-200';
      case 'Sedang':
        return 'text-amber-800 bg-amber-50 border-amber-200';
      case 'Rendah':
        return 'text-slate-600 bg-slate-100 border-slate-200';
    }
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-xs print-avoid-break print:p-3.5 print:border-slate-300 print:shadow-none">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 pb-3 border-b border-slate-100 print:mb-2 print:pb-1.5">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-md bg-slate-100 text-slate-700 print:p-1">
            <ClipboardCheck className="w-4 h-4 print:w-3.5 print:h-3.5" strokeWidth={1.75} />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 tracking-tight print:text-sm">
              Log Temuan Audit Kanal
            </h2>
            <p className="text-xs text-slate-500 print:text-[10px]">
              {stats.total} Parameter Evaluasi • {stats.passed} Lulus • {stats.warning} Perhatian • {stats.failed} Kritis
            </p>
          </div>
        </div>

        {/* Filter categories */}
        <div className="flex items-center gap-1.5 flex-wrap no-print">
          {CATEGORY_FILTERS.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-3xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2.5 print:space-y-1.5">
        {checklist.map((item) => (
          <div
            key={item.id}
            className="p-3.5 rounded-xl bg-slate-50/50 border border-slate-200 print:p-2"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-mono print:text-[9px]">[{item.category}]</span>
                <h3 className="text-sm font-semibold text-slate-900 print:text-xs">{item.title}</h3>
              </div>

              <div className="flex items-center gap-2">
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded border print:text-[9px] print:px-1 ${getPriorityStyle(item.priority)}`}>
                  Prioritas {item.priority}
                </span>
                {getStatusBadge(item.status)}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs mt-2 pt-2 border-t border-slate-200/80 print:text-[10px] print:mt-1 print:pt-1">
              <div>
                <span className="text-slate-400 block mb-0.5 font-medium">Observasi Lapangan:</span>
                <span className="text-slate-700">{item.currentCondition}</span>
              </div>
              <div>
                <span className="text-slate-900 font-semibold block mb-0.5">Tindakan Rekomendasi:</span>
                <span className="text-slate-800">{item.recommendation}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
