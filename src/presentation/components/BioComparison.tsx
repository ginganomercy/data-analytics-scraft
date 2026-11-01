import React from 'react';
import { InstagramBioDetail } from '../../domain/types';
import { Flower2, AlertCircle, CheckCircle2, Copy, Check, MapPin, Link2 } from 'lucide-react';

interface BioComparisonProps {
  readonly bio: InstagramBioDetail;
  readonly isCopied: boolean;
  readonly onCopy: () => void;
}

export const BioComparison: React.FC<BioComparisonProps> = ({
  bio,
  isCopied,
  onCopy,
}) => {
  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-xs print-avoid-break print:p-4 print:border-slate-300 print:shadow-none">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2 pb-3 border-b border-slate-100 print:mb-2 print:pb-2">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-md bg-slate-100 text-slate-700 print:p-1">
            <Flower2 className="w-4 h-4 print:w-3.5 print:h-3.5" strokeWidth={1.75} />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 tracking-tight print:text-sm">
              Evaluasi Bio & Penataan Etalase Profil
            </h2>
            <p className="text-xs text-slate-500 print:text-[10px]">
              Analisis impresi awal dan titik friksi konversi pelanggan
            </p>
          </div>
        </div>
        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 print:text-[10px] print:px-1.5 print:py-0.5">
          First Impression Audit
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 print:grid-cols-2 print:gap-3">
        {/* Current Bio Spec Sheet */}
        <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/60 flex flex-col justify-between print:p-3">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5 print:text-[10px]">
                <AlertCircle className="w-3.5 h-3.5 text-slate-500" />
                Kondisi Lapangan (Teks Asli)
              </span>
              <span className="text-[11px] font-mono text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200 print:text-[9px]">
                Status Quo
              </span>
            </div>

            <div className="font-mono text-xs text-slate-800 whitespace-pre-wrap bg-white p-3 rounded-lg border border-slate-200 leading-relaxed print:text-[10px] print:p-2">
              {bio.rawText}
            </div>

            <div className="mt-3 space-y-1.5 print:mt-2">
              <div className="text-xs font-bold text-slate-700 print:text-[10px]">Catatan Evaluasi:</div>
              <ul className="text-xs text-slate-600 space-y-1 print:text-[10px]">
                <li className="flex items-start gap-1.5">
                  <span className="text-slate-400 font-bold shrink-0">1.</span>
                  <span><strong>Ketiadaan Tautan Langsung:</strong> Pembeli harus mengetik DM manual.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-slate-400 font-bold shrink-0">2.</span>
                  <span><strong>Wilayah Belum Spesifik:</strong> Tertulis hanya &quot;Indonesia&quot;.</span>
                </li>
                {bio.identifiedTypos.map((typo, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-slate-400 font-bold shrink-0">{idx + 3}.</span>
                    <span><strong>Koreksi Tipografi:</strong> {typo}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Recommended Bio Spec Sheet */}
        <div className="border border-slate-200 rounded-xl p-4 bg-white flex flex-col justify-between print:p-3">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5 print:text-[10px]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Draf Rekomendasi (Siap Pasang)
              </span>
              <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 print:text-[9px]">
                Optimal
              </span>
            </div>

            <div className="font-mono text-xs text-slate-900 whitespace-pre-wrap bg-slate-50 p-3 rounded-lg border border-slate-200 leading-relaxed print:text-[10px] print:p-2">
              {bio.recommendedText}
            </div>

            <div className="mt-3 space-y-1.5 print:mt-2">
              <div className="text-xs font-bold text-slate-700 print:text-[10px]">Fokus Perbaikan:</div>
              <ul className="text-xs text-slate-600 space-y-1 print:text-[10px]">
                <li className="flex items-center gap-1.5 text-slate-700">
                  <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                  <span>Cantumkan kota domisili untuk kepastian kurir & ongkir.</span>
                </li>
                <li className="flex items-center gap-1.5 text-slate-700">
                  <Link2 className="w-3 h-3 text-slate-500 shrink-0" />
                  <span>Tautan langsung ke chat WhatsApp / agregator.</span>
                </li>
                <li className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-3 h-3 text-slate-500 shrink-0" />
                  <span>Pemisahan pilar layanan (Bridal, Lamaran, Wisuda) rapi.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 pt-2.5 border-t border-slate-100 flex justify-end no-print">
            <button
              onClick={onCopy}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white transition shadow-xs"
            >
              {isCopied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Draf Tersalin</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Draf Rekomendasi</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
