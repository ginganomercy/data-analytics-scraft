# Shelwa Craft — Instagram Channel Audit & Growth Analytics Dashboard

Dashboard analitik dan audit mendalam untuk kanal Instagram resmi **@shelwa_craft** (`59259338741`), dirancang khusus untuk memetakan bottleneck konversi, matriks strategis SWOT, customer journey funnel, dan rencana aksi roadmap pertumbuhan 4 fase dengan kapabilitas ekspor laporan A4 PDF instan tanpa terpotong (*page-break-aware*).

---

## 📊 Ikhtisar Metrik Kanal

- **Akun Target**: `@shelwa_craft` (User ID `59259338741`)
- **Followers**: 58 pengikut (Rasio 1.45:1 organik sehat)
- **Following**: 40 akun
- **Total Postingan**: 38 portofolio aktif
- **Skor Kesehatan Kanal**: **58 / 100** (Kondisi Kritis pada ketiadaan tautan pemesanan bio)
- **Tingkat Kebocoran Funnel**: **83.5% Drop-off** akibat calon pembeli harus mengetik DM manual tanpa nomor WhatsApp langsung.

---

## 🛠️ Tech Stack & Arsitektur

- **Runtime & Package Manager**: [Bun 1.1](https://bun.sh/)
- **Bahasa**: TypeScript (Strict Mode, 0 `any`)
- **Frontend**: React 18 + Vite 5 + Tailwind CSS
- **Visualisasi Grafik**: Recharts
- **Ikonografi**: Lucide React (`Flower2`, bebas emoji `💐` dan bebas animasi pulsing)
- **Ekspor Dokumen**: Cetak A4 PDF Terstandarisasi (`@media print` dengan isolasi `break-inside: avoid`)
- **Zero Database & Zero Python Runtime**: Berbasis snapshot data flat JSON deterministik di `src/data/profile.json`

---

## 🚀 Panduan Menjalankan

### 1. Pasang Dependensi
```bash
bun install
```

### 2. Jalankan Server Pengembangan
```bash
bun run dev
```
Buka `http://localhost:3000` di peramban.

### 3. Jalankan Pengujian Unit
```bash
bun test
```

### 4. Bangun Versi Produksi
```bash
bun run build
```

---

## 📁 Struktur Direktori

```text
analytics-shelwa-craft/
├── src/
│   ├── application/      # Hook analitik & formatting domain
│   ├── data/             # profile.json (snapshot metadata @shelwa_craft)
│   ├── domain/           # Interface TypeScript ketat
│   ├── infrastructure/   # Repositori data & loader
│   ├── presentation/     # Komponen UI dashboard, SWOT, funnel, dan roadmap
│   ├── index.css         # Styling Tailwind & print stylesheet A4
│   └── main.tsx
├── tests/                # Pengujian otomatis Bun Test
├── ANALISIS_AKUN_SHELWA_CRAFT.md # Dokumen laporan audit eksekutif lengkap
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## ⚖️ Lisensi & Hak Cipta

© 2026 Shelwa Craft. Dikembangkan oleh **Rafly Ashraffi Rachmat**. Seluruh hak cipta dilindungi undang-undang.
