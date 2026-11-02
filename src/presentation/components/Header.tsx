import React from 'react';
import { InstagramProfileSummary } from '../../domain/types';
import { AUDIT_DATE_DISPLAY } from '../../domain/constants';
import { Flower2, ExternalLink, ShieldCheck, Printer } from 'lucide-react';

interface HeaderProps {
  readonly profile: InstagramProfileSummary;
}

export const Header: React.FC<HeaderProps> = ({ profile }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="border-b border-slate-200/80 bg-white/95 backdrop-blur-sm sticky top-0 z-50 print:static print:border-b print:border-slate-300 print:bg-transparent print:py-2 print:px-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 print:px-0 print:py-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          {/* Brand & Account Info */}
          <div className="flex items-center space-x-3.5">
            {profile.avatarUrl ? (
              <img
                src={profile.avatarUrl}
                alt={profile.username}
                className="w-10 h-10 rounded-xl object-cover border border-slate-200 shadow-xs print:w-8 print:h-8"
              />
            ) : (
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-xs print:w-8 print:h-8">
                <Flower2 className="w-5 h-5 text-rose-200 print:w-4 print:h-4" strokeWidth={1.75} />
              </div>
            )}

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 print:text-base">
                  @{profile.username}
                </h1>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200 print:text-[10px] print:px-1.5 print:py-0">
                  Audit Kanal Resmi
                </span>
                <span className="text-[11px] font-mono text-slate-400 print:text-[10px]">
                  ID: {profile.userId}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5 print:text-[10px]">
                {profile.profileType} • Per {AUDIT_DATE_DISPLAY} • Disusun oleh <strong>Rafly Ashraffi Rachmat</strong>
              </p>
            </div>
          </div>

          {/* Actions & Health Score Pill */}
          <div className="flex items-center gap-2.5 no-print flex-wrap">
            <div className="flex items-center gap-1.5 bg-slate-100/80 px-3 py-1.5 rounded-lg border border-slate-200 text-xs">
              <ShieldCheck className="w-4 h-4 text-slate-600" />
              <span className="text-slate-500">Kesehatan Kanal:</span>
              <span className="font-bold text-slate-900">{profile.stats.auditHealthScore}/100</span>
            </div>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 transition shadow-xs"
              title="Cetak Laporan PDF"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>Cetak PDF</span>
            </button>

            <a
              href={profile.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white transition shadow-xs"
            >
              <span>Lihat Akun Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
