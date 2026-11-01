import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';
import { TimelineDataPoint } from '../../domain/types';
import { TrendingUp } from 'lucide-react';

interface GrowthChartProps {
  readonly data: readonly TimelineDataPoint[];
}

export const GrowthChart: React.FC<GrowthChartProps> = ({ data }) => {
  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-xs print-avoid-break print:p-3.5 print:border-slate-300 print:shadow-none">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2 pb-3 border-b border-slate-100 print:mb-2 print:pb-1.5">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-md bg-slate-100 text-slate-700 print:p-1">
            <TrendingUp className="w-4 h-4 print:w-3.5 print:h-3.5" strokeWidth={1.75} />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 tracking-tight print:text-sm">
              Proyeksi Akumulasi Pengikut & Interaksi
            </h2>
            <p className="text-xs text-slate-500 print:text-[10px]">
              Perbandingan tren organik pasif vs implementasi rekomendasi audit
            </p>
          </div>
        </div>
        <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 print:text-[10px] print:px-1.5 print:py-0.5">
          Target 6 Bulan: ~600 Pengikut
        </span>
      </div>

      <div className="h-72 w-full mt-3 print:h-44">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={[...data]} margin={{ top: 10, right: 15, left: -15, bottom: 0 }}>
            <CartesianGrid strokeDasharray="2 2" stroke="#f1f5f9" vertical={false} />
            <XAxis dataKey="month" stroke="#94a3b8" tick={{ fontSize: 10, fill: '#64748b' }} />
            <YAxis stroke="#94a3b8" tick={{ fontSize: 10, fill: '#64748b' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                borderColor: '#e2e8f0',
                borderRadius: '0.5rem',
                fontSize: '11px',
                color: '#0f172a',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)',
              }}
            />
            <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
            <Line
              type="monotone"
              dataKey="projectedFollowers"
              name="Target Pasca-Audit (Optimasi Reels & Link)"
              stroke="#0f172a"
              strokeWidth={2.5}
              dot={{ r: 2.5, fill: '#0f172a' }}
              activeDot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="statusQuoFollowers"
              name="Tren Berjalan (Status Quo)"
              stroke="#94a3b8"
              strokeWidth={1.5}
              strokeDasharray="4 4"
              dot={{ r: 2, fill: '#94a3b8' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
