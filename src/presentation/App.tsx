import React from 'react';
import { useAnalytics } from '../application/use-analytics';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { StatCard } from './components/StatCard';
import { BioComparison } from './components/BioComparison';
import { FunnelChart } from './components/FunnelChart';
import { GrowthChart } from './components/GrowthChart';
import { ContentPillarsChart } from './components/ContentPillarsChart';
import { SwotMatrix } from './components/SwotMatrix';
import { AuditList } from './components/AuditList';
import { RoadmapView } from './components/RoadmapView';
import { PostGallery } from './components/PostGallery';
import { Users, UserCheck, Image, Activity, Flower2, BarChart2, ArrowUpRight } from 'lucide-react';

export const App: React.FC = () => {
  const {
    profile,
    funnelStages,
    timelineData,
    contentPillars,
    swot,
    checklist,
    auditStats,
    selectedCategory,
    setSelectedCategory,
    isCopiedBio,
    handleCopyBio,
  } = useAnalytics();

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 selection:bg-slate-900 selection:text-white print:bg-white print:min-h-0">
      {/* Main Header (Pusat Tunggal: Identitas Akun, Skor Kesehatan, Tombol Cetak & Kunjungi IG) */}
      <Header profile={profile} />

      {/* Main Layout Shell (2-Column Architecture: Sleek Navigation TOC + Main Content) */}
      <main className="flex-1 w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-7 print:px-0 print:py-0">
        <div className="flex flex-col lg:flex-row gap-7 items-start">
          {/* Kolom Kiri: Floating Table of Contents Ramping (Bebas Duplikasi Elemen Header) */}
          <Sidebar
            isCopiedBio={isCopiedBio}
            onCopyBio={handleCopyBio}
          />

          {/* Kolom Kanan: Area Analisis Utama */}
          <div className="flex-1 min-w-0 max-w-6xl space-y-7 print:space-y-4 w-full">
            {/* ==================================================================
                BAGIAN 1: Ringkasan Eksekutif, Metrik Kunci & Evaluasi Bio
                ================================================================== */}
            <div className="space-y-6 print:space-y-3.5 print-avoid-break">
              {/* Executive Summary Briefing Card (Bersih dari badge data duplikat) */}
              <section id="overview" className="bg-white border border-slate-200/90 rounded-xl p-5 shadow-xs print:p-3.5 print:border-slate-300 print:shadow-none scroll-mt-24">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-700 shrink-0 mt-0.5 print:p-1">
                    <Flower2 className="w-4 h-4 print:w-3.5 print:h-3.5" strokeWidth={1.75} />
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-sm font-bold text-slate-900 print:text-xs">
                      Ringkasan Eksekutif: Audit Kanal Instagram @{profile.username}
                    </h2>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-4xl print:text-[10px]">
                      Akun memiliki fondasi kerajinan yang aktif dengan 38 postingan portofolio. Titik friksi konversi utama berada pada ketiadaan rute tautan pemesanan instan di bio profil dan belum tercantumnya domisili pengiriman workshop. Penataan etalase dan adopsi konten video berpeluang melipatgandakan interaksi secara terukur.
                    </p>
                  </div>
                </div>
              </section>

              {/* KPI Stats Overview */}
              <section id="metrics" className="scroll-mt-24">
                <div className="flex items-center justify-between mb-3 print:mb-1.5">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 print:text-[10px]">
                    <BarChart2 className="w-3.5 h-3.5 text-slate-400" />
                    Metrik Kunci & Kapasitas Saluran
                  </h3>
                  <span className="text-xs text-slate-400 font-mono print:text-[10px]">
                    Status Berjalan
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 print:grid-cols-4 print:gap-2">
                  <StatCard
                    title="Total Pengikut"
                    value={profile.stats.followers}
                    subtitle="Target fase berikutnya: 300 pengikut"
                    badgeText="Target: +242"
                    badgeVariant="warning"
                    icon={Users}
                    trend="+0 (Stagnan)"
                  />
                  <StatCard
                    title="Mengikuti"
                    value={profile.stats.following}
                    subtitle="Rasio pengikut 1.45 : 1"
                    badgeText="Organik Sehat"
                    badgeVariant="success"
                    icon={UserCheck}
                  />
                  <StatCard
                    title="Total Postingan"
                    value={profile.stats.posts}
                    subtitle="Portofolio dasar produk aktif"
                    badgeText="Fokus ke Reels"
                    badgeVariant="warning"
                    icon={Image}
                  />
                  <StatCard
                    title="Kesiapan Konversi"
                    value="Kritis"
                    subtitle="Tautan & domisili belum terpasang"
                    badgeText="Perlu Tindakan"
                    badgeVariant="danger"
                    icon={Activity}
                  />
                </div>
              </section>

              {/* Bio Optimization (Spec Sheet) */}
              <section id="bio-audit" className="scroll-mt-24">
                <BioComparison
                  bio={profile.bio}
                  isCopied={isCopiedBio}
                  onCopy={handleCopyBio}
                />
              </section>
            </div>

            {/* ==================================================================
                BAGIAN 2: Alur Pelanggan, Proyeksi Pertumbuhan & Pilar Konten
                ================================================================== */}
            <div className="space-y-6 print:space-y-3.5 print-page-break print-avoid-break">
              {/* Customer Journey & Growth Projection */}
              <section id="funnel-section" className="grid grid-cols-1 lg:grid-cols-2 gap-6 print:grid-cols-2 print:gap-3 scroll-mt-24">
                <FunnelChart stages={funnelStages} />
                <GrowthChart data={timelineData} />
              </section>

              {/* Content Restructuring */}
              <section id="content-pillars" className="scroll-mt-24">
                <ContentPillarsChart pillars={contentPillars} />
              </section>

              {/* Scraped Instagram Post Gallery */}
              <PostGallery />
            </div>

            {/* ==================================================================
                BAGIAN 3: Matriks Strategis, Checklist Temuan, Roadmap & Rekomendasi
                ================================================================== */}
            <div className="space-y-6 print:space-y-3.5 print-page-break print-avoid-break">
              {/* SWOT Matrix */}
              <section id="swot-section" className="scroll-mt-24">
                <SwotMatrix swot={swot} />
              </section>

              {/* Audit Checklist */}
              <section id="audit-log" className="scroll-mt-24">
                <AuditList
                  checklist={checklist}
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                  stats={auditStats}
                />
              </section>

              {/* Execution Roadmap */}
              <section id="roadmap-section" className="scroll-mt-24">
                <RoadmapView />
              </section>

              {/* Consultant Action Card */}
              <section className="bg-white border border-slate-200/90 rounded-xl p-5 shadow-xs print:p-3.5 print:border-slate-300 print:shadow-none print-avoid-break">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="space-y-1 max-w-2xl">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block print:text-[10px]">
                      Langkah Prioritas Pertama
                    </span>
                    <h3 className="text-base font-bold text-slate-900 print:text-xs">
                      Pemasangan Tautan WhatsApp & Penataan Bio Profil @{profile.username}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed print:text-[10px]">
                      Tindakan dengan dampak tertinggi adalah menyalin draf rekomendasi bio di atas, memperbarui profil Instagram, dan menaruh link tautan pemesanan langsung. Langkah sederhana ini langsung mengeliminasi kebocoran pelanggan potensial yang berkunjung setiap minggunya.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 w-full md:w-auto no-print">
                    <a
                      href={profile.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg font-semibold text-xs bg-slate-900 hover:bg-slate-800 text-white transition shadow-xs w-full sm:w-auto"
                    >
                      <span>Buka Profil Instagram</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-75" />
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Hak Cipta Profesional */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500 mt-8 print:mt-4 print:py-3 print:border-slate-300 print-avoid-break">
        <p className="font-semibold text-slate-700 print:text-[10px]">
          © 2026 Rafly Ashraffi Rachmat. Seluruh hak cipta dilindungi undang-undang.
        </p>
        <p className="mt-0.5 text-slate-400 text-[11px] print:text-[9px]">
          Dokumen Laporan Audit & Analisis Strategis Kanal Media Sosial • @pearl.storeflowers
        </p>
      </footer>
    </div>
  );
};
