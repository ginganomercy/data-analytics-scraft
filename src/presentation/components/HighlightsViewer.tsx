import React from 'react';
import { Sparkles, ExternalLink, MapPin, Tag, HeartHandshake, Briefcase, Flower2 } from 'lucide-react';
import highlightsData from '../../data/highlights/highlights.json';
import type { HighlightCategoryTag, InstagramHighlightItem } from '../../domain/types';

interface HighlightsViewerProps {
  readonly onSelectHighlight?: (highlight: InstagramHighlightItem) => void;
}

const CATEGORY_ICON_MAP: Record<HighlightCategoryTag, React.ReactElement> = {
  Promo: <Tag className="w-3 h-3 text-amber-600" />,
  Location: <MapPin className="w-3 h-3 text-blue-600" />,
  Catalog: <Flower2 className="w-3 h-3 text-rose-600" />,
  Testimonial: <HeartHandshake className="w-3 h-3 text-emerald-600" />,
  Career: <Briefcase className="w-3 h-3 text-purple-600" />,
  General: <Sparkles className="w-3 h-3 text-slate-600" />,
};

const CATEGORY_BADGE_STYLE: Record<HighlightCategoryTag, string> = {
  Promo: 'bg-amber-50 text-amber-700 border-amber-200',
  Location: 'bg-blue-50 text-blue-700 border-blue-200',
  Catalog: 'bg-rose-50 text-rose-700 border-rose-200',
  Testimonial: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Career: 'bg-purple-50 text-purple-700 border-purple-200',
  General: 'bg-slate-50 text-slate-700 border-slate-200',
};

export const HighlightsViewer: React.FC<HighlightsViewerProps> = () => {
  const highlights = (highlightsData?.highlights as readonly InstagramHighlightItem[]) || [];

  if (highlights.length === 0) {
    return null;
  }

  return (
    <section id="highlights-section" className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-xs scroll-mt-24 print-avoid-break">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-xs">
            <Sparkles className="w-4 h-4" strokeWidth={2.5} />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                Sorotan Cerita Profil (Instagram Story Highlights)
              </h2>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                {highlights.length} Sorotan Terverifikasi
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Struktur sorotan resmi profil @pearl.storeflowers yang mengonfirmasi bukti kepuasan pelanggan dan lokasi fisik workshop.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
            Status Audit: <strong className="text-emerald-700">PASS (+7 Poin)</strong>
          </span>
        </div>
      </div>

      {/* Highlights Stories Tray */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 pt-1">
        {highlights.map((highlight) => {
          const categoryIcon = CATEGORY_ICON_MAP[highlight.categoryTag] || CATEGORY_ICON_MAP.General;
          const badgeStyle = CATEGORY_BADGE_STYLE[highlight.categoryTag] || CATEGORY_BADGE_STYLE.General;

          return (
            <a
              key={highlight.id}
              href={highlight.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-3 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200"
            >
              {/* Story Gradient Ring */}
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 shadow-xs group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                <div className="p-0.5 bg-white rounded-full">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-slate-100 relative">
                    <img
                      src={highlight.coverUrl}
                      alt={`Sorotan ${highlight.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <ExternalLink className="w-4 h-4 drop-shadow" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Category */}
              <div className="mt-3 space-y-1 w-full flex flex-col items-center">
                <span className="font-sans text-xs font-bold text-slate-800 group-hover:text-emerald-800 transition-colors truncate max-w-full block">
                  {highlight.title}
                </span>

                <span className={`inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full border ${badgeStyle}`}>
                  {categoryIcon}
                  <span>{highlight.categoryTag}</span>
                </span>
              </div>
            </a>
          );
        })}
      </div>

      {/* Social Proof Audit Assessment Footnote */}
      <div className="mt-6 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
          <span>
            Sorotan <strong>"Kata Mereka"</strong> dan <strong>"Place"</strong> telah aktif, memvalidasi bukti kepuasan nyata dan alamat fisik Ruko Kirana Lestari D5 Slawi.
          </span>
        </div>
        <a
          href="https://www.instagram.com/pearl.storeflowers/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-800 hover:text-emerald-950 transition-colors shrink-0"
        >
          <span>Buka di Instagram</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};
