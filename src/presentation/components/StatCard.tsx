import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  readonly title: string;
  readonly value: string | number;
  readonly subtitle: string;
  readonly badgeText?: string;
  readonly badgeVariant?: 'success' | 'warning' | 'danger' | 'info';
  readonly icon: LucideIcon;
  readonly trend?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  badgeText,
  badgeVariant = 'info',
  icon: Icon,
  trend,
}) => {
  const getBadgeStyle = () => {
    switch (badgeVariant) {
      case 'success':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'warning':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'danger':
        return 'bg-rose-50 text-rose-800 border-rose-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-5 shadow-xs transition hover:border-slate-300 print-avoid-break print:p-3 print:border-slate-300 print:shadow-none">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase block print:text-[10px]">
            {title}
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl font-extrabold text-slate-900 tracking-tight tabular-nums print:text-2xl">
              {value}
            </span>
            {trend && (
              <span className="text-xs font-semibold text-slate-400 print:text-[10px]">
                {trend}
              </span>
            )}
          </div>
        </div>

        <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 print:p-1.5">
          <Icon className="w-4 h-4 print:w-3.5 print:h-3.5" strokeWidth={1.75} />
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-1.5 text-xs print:mt-2 print:pt-1.5 print:text-[10px]">
        <span className="text-slate-500 font-medium">
          {subtitle}
        </span>
        {badgeText && (
          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border print:text-[9px] print:px-1.5 ${getBadgeStyle()}`}>
            {badgeText}
          </span>
        )}
      </div>
    </div>
  );
};
