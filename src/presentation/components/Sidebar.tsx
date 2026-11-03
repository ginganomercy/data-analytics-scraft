import React, { useState, useEffect } from 'react';
import {
  FileText,
  BarChart2,
  Flower2,
  Layers,
  Sliders,
  Sparkles,
  Camera,
  Compass,
  ClipboardCheck,
  CheckSquare,
  Copy,
  Check,
  ListOrdered,
} from 'lucide-react';

interface SidebarProps {
  readonly isCopiedBio: boolean;
  readonly onCopyBio: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isCopiedBio,
  onCopyBio,
}) => {
  const [activeSection, setActiveSection] = useState<string>('overview');

  const navItems = [
    { id: 'overview', index: '01', label: 'Ringkasan Eksekutif', icon: FileText },
    { id: 'metrics', index: '02', label: 'Metrik & Kapasitas', icon: BarChart2 },
    { id: 'bio-audit', index: '03', label: 'Evaluasi Etalase Bio', icon: Flower2 },
    { id: 'funnel-section', index: '04', label: 'Alur Funnel Pelanggan', icon: Layers },
    { id: 'content-pillars', index: '05', label: 'Pilar Konten Reels', icon: Sliders },
    { id: 'highlights-section', index: '06', label: 'Sorotan Profil (Stories)', icon: Sparkles },
    { id: 'gallery', index: '07', label: 'Galeri Postingan Live', icon: Camera },
    { id: 'swot-section', index: '08', label: 'Matriks Strategis SWOT', icon: Compass },
    { id: 'audit-log', index: '09', label: 'Log Parameter Audit', icon: ClipboardCheck },
    { id: 'roadmap-section', index: '10', label: 'Rencana Aksi 4 Fase', icon: CheckSquare },
  ];

  // Observasi scroll untuk menandai bab yang sedang aktif
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  return (
    <aside className="w-60 xl:w-64 shrink-0 hidden lg:flex flex-col sticky top-20 h-[calc(100vh-6rem)] no-print">
      <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-xs flex flex-col justify-between h-full">
        <div className="space-y-4">
          {/* Header Panel Navigasi */}
          <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <ListOrdered className="w-3.5 h-3.5 text-slate-500" strokeWidth={2} />
              Daftar Bab Audit
            </span>
            <span className="text-[10px] font-mono text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200">
              8 Bagian
            </span>
          </div>

          {/* Table of Contents Navigation */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs font-medium transition text-left group ${
                    isActive
                      ? 'bg-slate-900 text-white font-semibold shadow-3xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] shrink-0 ${
                      isActive ? 'text-slate-400' : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                  >
                    {item.index}
                  </span>
                  <Icon
                    className={`w-3.5 h-3.5 shrink-0 ${
                      isActive ? 'text-rose-200' : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                    strokeWidth={1.75}
                  />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Satu Tombol Utilitas Relevan (Bebas Duplikasi Tombol Header) */}
        <div className="pt-3 border-t border-slate-100 space-y-2 mt-4">
          <button
            onClick={onCopyBio}
            className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition"
            title="Salin draf rekomendasi bio yang sudah dioptimasi"
          >
            {isCopiedBio ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Draf Bio Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span>Salin Draf Bio Baru</span>
              </>
            )}
          </button>
          <span className="text-[10px] text-slate-400 text-center block font-mono">
            Klik bab untuk lompat seksi
          </span>
        </div>
      </div>
    </aside>
  );
};
