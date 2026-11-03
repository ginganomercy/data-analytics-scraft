import {
  InstagramProfileSummary,
  FunnelStageMetric,
  TimelineDataPoint,
  ContentPillarDistribution,
  SWOTMatrixData,
  AuditChecklistItem,
  RoadmapPhase,
} from '../domain/types';
import profileData from '../data/profile.json';

export const PEARL_STORE_PROFILE_DATA: InstagramProfileSummary = {
  userId: profileData.userId,
  username: profileData.username,
  displayName: profileData.displayName,
  profileType: 'Atelier Florist & Kerajinan Rangkaian Bunga',
  profileUrl: profileData.profileUrl,
  avatarUrl: profileData.avatarUrl,
  stats: {
    followers: profileData.stats.followers,
    following: profileData.stats.following,
    posts: profileData.stats.posts,
    followerToFollowingRatio: profileData.stats.followerToFollowingRatio,
    estimatedMonthlyProfileViews: profileData.stats.estimatedMonthlyProfileViews,
    engagementRatePercent: 2.1,
    auditHealthScore: profileData.stats.auditHealthScore,
  },
  bio: {
    rawText: profileData.bio.rawText,
    hasExternalLink: profileData.bio.hasExternalLink,
    hasLocation: profileData.bio.hasLocation,
    identifiedServices: profileData.bio.identifiedServices,
    identifiedTypos: profileData.bio.identifiedTypos,
    recommendedText: profileData.bio.recommendedText,
  },
};

export const SHELWA_PROFILE_DATA = PEARL_STORE_PROFILE_DATA;

export const FUNNEL_STAGES_DATA: readonly FunnelStageMetric[] = [
  {
    id: 'stage-visits',
    stage: 'Kunjungan Profil Publik & Toko',
    description: 'Pengunjung yang membuka profil Instagram @pearl.storeflowers per bulan',
    count: 410,
    conversionRate: 100,
    dropOffPercentage: 0,
    status: 'normal',
  },
  {
    id: 'stage-engagement',
    stage: 'Eksplorasi Konten (Feed & Reels)',
    description: 'Audiens yang menyukai, menyimpan, atau melihat detail postingan buket',
    count: 115,
    conversionRate: 28.0,
    dropOffPercentage: 72.0,
    status: 'normal',
    bottleneckReason: 'Konten feed mulai beragam namun perlu pancingan call-to-action interaktif.',
  },
  {
    id: 'stage-inquiry',
    stage: 'Inisiasi Kontak (WhatsApp / Walk-in)',
    description: 'Calon pembeli yang memutuskan menghubungi florist atau datang ke ruko',
    count: 19,
    conversionRate: 4.6,
    dropOffPercentage: 83.5,
    status: 'critical',
    bottleneckReason: 'Ketiadaan tautan WhatsApp di bio; calon pembeli malas mengirim pesan manual via DM.',
  },
  {
    id: 'stage-closed',
    stage: 'Konfirmasi Transaksi (Deal Closed)',
    description: 'Pesanan buket bunga atau dekorasi seremonial yang terbayar lunas',
    count: 5,
    conversionRate: 1.22,
    dropOffPercentage: 73.7,
    status: 'leakage',
    bottleneckReason: 'Ketiadaan katalog web harga tetap membuat konsultasi chat bertele-tele.',
  },
];

export const TIMELINE_PROJECTION_DATA: readonly TimelineDataPoint[] = [
  { month: 'Bulan 0 (Kini)', statusQuoFollowers: 58, projectedFollowers: 58, estimatedMonthlyInquiries: 14 },
  { month: 'Bulan 1', statusQuoFollowers: 65, projectedFollowers: 120, estimatedMonthlyInquiries: 32 },
  { month: 'Bulan 2', statusQuoFollowers: 72, projectedFollowers: 210, estimatedMonthlyInquiries: 58 },
  { month: 'Bulan 3', statusQuoFollowers: 80, projectedFollowers: 320, estimatedMonthlyInquiries: 85 },
  { month: 'Bulan 4', statusQuoFollowers: 88, projectedFollowers: 450, estimatedMonthlyInquiries: 110 },
  { month: 'Bulan 5', statusQuoFollowers: 95, projectedFollowers: 600, estimatedMonthlyInquiries: 145 },
];

export const CONTENT_PILLARS_DATA: readonly ContentPillarDistribution[] = [
  {
    name: 'Proses Merangkai & Teknik Wrapping (BTS)',
    currentSharePercent: 15,
    recommendedSharePercent: 40,
    color: '#0f172a',
    description: 'Video vertikal teknik lipat kertas buket, perpaduan warna bunga, dan finishing pita.',
  },
  {
    name: 'Dokumentasi Pesanan & Bukti Pengemasan',
    currentSharePercent: 10,
    recommendedSharePercent: 30,
    color: '#be123c',
    description: 'Kerapian proteksi kardus, visual serah terima kurir, dan ekspresi penerima hadiah.',
  },
  {
    name: 'Panduan Ukuran & Rekomendasi Hadiah',
    currentSharePercent: 5,
    recommendedSharePercent: 20,
    color: '#047857',
    description: 'Panduan ukuran Small/Medium/Large sesuai anggaran dan kecocokan warna kebaya/toga.',
  },
  {
    name: 'Katalog Statis Produk Jadi (Foto Saja)',
    currentSharePercent: 70,
    recommendedSharePercent: 10,
    color: '#94a3b8',
    description: 'Foto tunggal produk di latar polos (harus dikurangi porsinya demi algoritma Reels).',
  },
];

export const SWOT_DATA: SWOTMatrixData = {
  strengths: [
    'Niche terfokus pada kerajinan bunga kustom untuk seremonial pernikahan, lamaran, dan wisuda.',
    'Portofolio awal berisi 38 postingan yang membuktikan keahlian perangkaian produk nyata.',
    'Rasio pengikut-following sehat (58:40), murni tanpa rekayasa bot atau spam.',
    'Fleksibilitas kustomisasi bentuk, warna, dan budget sesuai permintaan pelanggan.',
  ],
  weaknesses: [
    'Ketiadaan tautan WhatsApp di profil menjadi hambatan konversi terbesar (kebocoran ~83.5%).',
    'Wilayah operasional pengiriman (domisili kota) tidak dicantumkan di bio.',
    'Ambivalensi nama layanan: mencampur Wedding Organizer dengan studio buket mikro.',
    'Belum tersedianya sorotan testimoni dan panduan harga terstandarisasi.',
  ],
  opportunities: [
    'Tingginya distribusi algoritma Reels untuk konten perangkaian bunga estetik (crafting timelapse).',
    'Momentum musiman berulang: kalender wisuda kampus lokal, musim pernikahan, dan Hari Ibu.',
    'Peluang distribusi nasional produk bunga kering/pita satin via marketplace (Shopee/Tokopedia).',
    'Kemitraan silang dengan MUA pengantin dan studio foto wisuda lokal.',
  ],
  threats: [
    'Persaingan harga yang ketat dengan perangkai buket bunga rumahan di area sekitar.',
    'Keterbatasan daya tahan bunga segar jika pengiriman tertunda di jalan.',
    'Ekspektasi calon pembeli yang menuntut respon cepat dan katalog instan.',
  ],
};

export const AUDIT_CHECKLIST_DATA: readonly AuditChecklistItem[] = [
  {
    id: 'chk-1',
    category: 'Bio & Profil',
    title: 'Handle & Identitas Rebranding',
    currentCondition: '@pearl.storeflowers relevan, mewah, dan mempertegas positioning sebagai florist profesional.',
    status: 'pass',
    recommendation: 'Pertahankan identitas visual dan monogram ini secara seragam di seluruh kanal digital.',
    priority: 'Rendah',
  },
  {
    id: 'chk-2',
    category: 'Bio & Profil',
    title: 'Wilayah Layanan & Lokasi Workshop',
    currentCondition: 'Sudah mencantumkan alamat fisik nyata: Ruko Kirana Lestari Blok D5, Slawi-Jatibarang.',
    status: 'pass',
    recommendation: 'Lengkapi radius jangkauan kurir lokal (Slawi, Tegal, Brebes) serta opsi ekspedisi kargo luar kota.',
    priority: 'Sedang',
  },
  {
    id: 'chk-3',
    category: 'Sales Funnel',
    title: 'Tautan Pemesanan Instan',
    currentCondition: 'Tidak ada link yang dapat diklik di bio profil.',
    status: 'fail',
    recommendation: 'Pasang tautan wa.me atau Linktree terpadu untuk konsultasi instan.',
    priority: 'Tinggi',
  },
  {
    id: 'chk-4',
    category: 'Bio & Profil',
    title: 'Kerapian Ejaan & Tipografi',
    currentCondition: 'Terdapat ejaan "Bouqet" dan spasi menempel pada "&Vendor".',
    status: 'warning',
    recommendation: 'Gunakan ejaan baku "Bouquet" atau "Buket" demi meningkatkan kredibilitas profesional.',
    priority: 'Sedang',
  },
  {
    id: 'chk-5',
    category: 'Social Proof',
    title: 'Struktur Sorotan (Story Highlights)',
    currentCondition: "Terverifikasi memiliki 5 sorotan aktif: 'Promo !', 'Place' (Lokasi Ruko), 'Flower' (Katalog), 'Kata Mereka' (Testimoni pembeli), dan 'Hiring'.",
    status: 'pass',
    recommendation: "Pertahankan kurasi ulasan pelanggan di sorotan 'Kata Mereka' dan pertimbangkan penambahan cover seragam minimalis berlogo.",
    priority: 'Sedang',
  },
  {
    id: 'chk-6',
    category: 'Strategi Konten',
    title: 'Proporsi Konten Video Reels',
    currentCondition: 'Hampir seluruh postingan berupa foto statis minim jangkauan algoritma.',
    status: 'warning',
    recommendation: 'Alihkan 70% frekuensi postingan ke video vertikal pendek (7-15 detik) proses perangkaian.',
    priority: 'Tinggi',
  },
  {
    id: 'chk-7',
    category: 'Sales Funnel',
    title: 'Transparansi Katalog & Ukuran',
    currentCondition: 'Belum ada panduan ukuran dan rentang harga yang jelas.',
    status: 'warning',
    recommendation: 'Sediakan panduan ukuran S/M/L dengan rentang harga transparan untuk memotong friksi tanya-jawab.',
    priority: 'Sedang',
  },
];

export const ROADMAP_PHASES_DATA: readonly RoadmapPhase[] = [
  {
    phaseNumber: 1,
    title: 'Perbaikan Fondasi Etalase Profil',
    timeframe: 'Hari 1 - 3',
    focusBadge: 'Immediate Fix',
    tasks: [
      'Perbarui copywriting bio dengan menyertakan kota domisili.',
      'Pasang tautan langsung ke WhatsApp / Linktree.',
      'Perbaiki ejaan "Bouquet" dan tata letak teks profil.',
    ],
    expectedImpact: 'Menaikkan konversi profil ke chat WhatsApp hingga +35% seketika.',
  },
  {
    phaseNumber: 2,
    title: 'Penataan Bukti Sosial (Highlights)',
    timeframe: 'Minggu 1 - 2',
    focusBadge: 'Trust Building',
    tasks: [
      'Desain 5 cover sorotan seragam bergaya minimalis elegan.',
      'Publikasikan sorotan: Katalog Harga, Testimoni, Alur Pemesanan, Portofolio, dan Pengiriman.',
      'Dokumentasikan ulasan chat pelanggan pertama sebagai bukti kepuasan nyata.',
    ],
    expectedImpact: 'Mengurangi waktu konsultasi tawar-menawar harga di chat hingga 50%.',
  },
  {
    phaseNumber: 3,
    title: 'Aktivasi Konten Reels Berkelanjutan',
    timeframe: 'Bulan 1',
    focusBadge: 'Audience Reach',
    tasks: [
      'Terapkan jadwal unggah 3x seminggu untuk video Reels pendek.',
      'Fokus pada video proses lipat wrapping dan pemilihan kombinasi warna.',
      'Gunakan audio latar yang sedang tren di kalangan audiens pernikahan/wisuda.',
    ],
    expectedImpact: 'Menjangkau audiens non-pengikut hingga 300% dan menambah 150+ followers organik.',
  },
  {
    phaseNumber: 4,
    title: 'Kemitraan Strategis & Saluran Marketplace',
    timeframe: 'Bulan 2 - 3',
    focusBadge: 'Sales Scaling',
    tasks: [
      'Jalin kolaborasi komisi rujukan dengan studio foto wisuda dan MUA lamaran terdekat.',
      'Buka toko Shopee/Tokopedia untuk varian buket bunga pita/kawat bulu/bunga kering.',
      'Buat paket bundling lamaran (buket tangan + boutonniere saku pria).',
    ],
    expectedImpact: 'Membuka aliran pesanan rutin yang stabil di luar lingkaran koneksi pribadi.',
  },
];
