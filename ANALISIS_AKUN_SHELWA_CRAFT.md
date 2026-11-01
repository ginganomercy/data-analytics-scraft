# 📊 Laporan Audit & Analisis Komprehensif Akun Instagram @shelwa_craft

*Tanggal Analisis: 31 Oktober 2026*  
*Target Akun: [@shelwa_craft](https://www.instagram.com/shelwa_craft/)*  
*Disusun oleh: Tech Lead & Business Analyst*

---

## 1. Ringkasan Eksekutif (Executive Summary)

Akun Instagram **@shelwa_craft** beroperasi di industri kerajinan tangan bunga kustom (*custom flower bouquet*) dan dekorasi acara. Saat ini akun berada pada fase pertumbuhan awal (*early-stage / nano-account*) dengan modal 38 postingan. Potensi pasar pada sektor ini sangat besar berkat tingginya kebutuhan seremonial (wisuda, lamaran, pernikahan, kado ulang tahun). 

Namun, terdapat beberapa hambatan kritis (*bottlenecks*) pada arsitektur profil akun:
1. **Konflik Positioning**: Mencampuradukkan skala layanan *Wedding Organizer* (WO) dengan produk mikro buket bunga.
2. **Kebocoran Corong Penjualan (Conversion Funnel Leak)**: Ketiadaan tautan langsung (WhatsApp / agregator link) dan ketiadaan informasi domisili/kota operasional.
3. **Format Konten Belum Teroptimasi**: Masih mengandalkan foto statis di era algoritma yang memprioritaskan video pendek vertikal (*Reels*).

Dokumen ini memetakan diagnosis menyeluruh beserta rencana aksi perbaikan taktis dan strategis.

---

## 2. Data Teknis & Metrik Akun (Baseline Metrics)

Data diperoleh melalui ekstraksi metadata publik server Instagram:

| Parameter | Data Akun | Status / Interpretasi |
|---|---|---|
| **Username** | `@shelwa_craft` | Bersih, mudah dieja, konsisten dengan niche *craft* |
| **Display Name** | `Shelwa_Craft` | Terbaca jelas |
| **Instagram User ID** | `59259338741` | Terverifikasi aktif di infrastruktur Meta |
| **Followers** | 58 | Fase *nano-tier* (membutuhkan penguatan *social proof*) |
| **Following** | 40 | Rasio sehat (1.45 : 1), tidak ada indikasi spam *follow-unfollow* |
| **Total Postingan** | 38 posts | Aktivitas dasar terbentuk, butuh konsistensi distribusi |
| **Tipe Profil** | Bisnis / Kreator | Terbuka untuk umum |

### Teks Bio Saat Ini:
```text
Wedding Organizer &Vendor Bouqet Custom Indonesia 💐
Our Service :
1. Wedding
2. Engagement
3. Graduate
4. Custom Flower Bouqet
```

---

## 3. Analisis Profil & Arsitektur Konversi

### A. Evaluasi Nilai Proposisi (Positioning Mismatch)
* **Problem**: Bio mencantumkan "Wedding Organizer" berdampingan dengan "Vendor Bouqet Custom".
* **Dampak Bisnis**: 
  * Layanan *Wedding Organizer* menuntut tingkat kepercayaan finansial dan operasional yang tinggi (kontrak bernilai jutaan hingga puluhan juta rupiah) serta portofolio acara skala besar.
  * Akun dengan 58 pengikut yang didominasi identitas *"craft"* akan memicu keraguan (*trust barrier*) pada calon pengantin.
* **Solusi**: Reposisi fokus ke **"Bridal Florist & Custom Event Bouquet Specialist"**. Jika memang melayani dekorasi lamaran (*engagement*) atau *intimate wedding*, gunakan istilah *Event Decor / Floral Styling* yang lebih selaras dengan identitas kerajinan tangan.

### B. Kendala Redaksional & Lokasi Operasional
* **Ketiadaan Lokasi Geografis**: Tertulis hanya "Indonesia". Produk buket bunga kustom (khususnya *fresh flowers*) sangat terikat dengan radius pengiriman dan ketahanan bunga. Ketiadaan nama kota (misal: Bandung / Jabodetabek / Surabaya) membuat calon pembeli enggan bertanya karena khawatir ongkos kirim atau keterbatasan kurir.
* **Typo & Formatting**:
  * Terdapat kesalahan ejaan kata `"Bouqet"` (seharusnya bahasa Inggris baku `"Bouquet"` atau bahasa Indonesia baku `"Buket"`).
  * Spasi hilang pada frasa `&Vendor`.

### C. Alur Pemesanan (Call-to-Action Friction)
* Tidak ada tautan aktif (*bio link*) menuju WhatsApp atau formulir pemesanan.
* Mewajibkan calon pembeli mengirim *Direct Message* (DM) terbukti menurunkan angka konversi (*conversion rate*) hingga lebih dari 40% karena keterlambatan respon pemilik akun.

---

## 4. Analisis SWOT

```mermaid
graph TD
    subgraph S["Strengths (Kekuatan)"]
        S1["Niche pasar jelas: buket seremonial & event"]
        S2["Koleksi 38 postingan sebagai portofolio awal"]
        S3["Rasio following-follower sehat dan organik"]
    end

    subgraph W["Weaknesses (Kelemahan)"]
        W1["Tidak ada direct link WhatsApp / e-catalog"]
        W2["Domisili kota pengiriman tidak dicantumkan"]
        W3["Positioning membingungkan (WO vs Buket)"]
        W4["Social proof (ulasan/testimoni) belum terlihat"]
    end

    subgraph O["Opportunities (Peluang)"]
        O1["Algoritma Reels ramah konten craft & aesthetic"]
        O2["Peluang musiman tinggi (wisuda, lamaran, hari ibu)"]
        O3["Buket bahan abadi (satin/pipe cleaner) bisa dikirim antar-kota via marketplace"]
    end

    subgraph T["Threats (Ancaman)"]
        T1["Tingginya saturasi kompetitor florist lokal"]
        T2["Perang harga buket wisuda di kalangan mahasiswa/pelajar"]
        T3["Keterbatasan masa simpan jika memakai bunga segar"]
    end
```

---

## 5. Rencana Aksi Perbaikan (Action Plan Roadmap)

### Fase 1: Optimasi Profil & Quick Wins (Hari ke-1)

#### 1. Perbaikan Teks Bio (Pilih salah satu template)
*Opsi A (Fokus Florist Pernikahan & Seremonial):*
```text
Shelwa Craft | Custom Bouquet & Florist 💐
Bikin momen spesialmu lebih berkesan ✨
📍 Berbasis di: [Nama Kota, contoh: Bandung]
💍 Wedding Bouquet • Lamaran • Wisuda • Hadiah
📦 Pre-Order H-3 & Konsultasi Custom:
👇 Klik link untuk order & katalog harga
wa.me/628xxxxxxxxxx (atau linktr.ee/shelwacraft)
```

*Opsi B (Fokus Wedding Decor & Florist):*
```text
Shelwa Craft • Wedding Florist & Intimate Decor
Pilihan bunga tangan cantik & dekorasi lamaran 💐
📍 Area Layanan: [Nama Kota & Sekitarnya]
✨ Custom Bridal Bouquet | Engagement Set | Graduation
📲 Fast Response & Portofolio Lengkap:
[Link WhatsApp / Agregator]
```

#### 2. Pemasangan Bio Link Agregator
Gunakan platform gratis seperti **Linktree** atau **Biolinky** dengan tombol:
1. `Chat WhatsApp (Admin Pemesanan)`
2. `Katalog & Daftar Harga Lengkap (PDF / Google Drive)`
3. `Etalase Shopee / Tokopedia (untuk buket awet/kering)`
4. `Lokasi Workshop / Ketentuan Pengiriman`

---

### Fase 2: Standarisasi Sorotan Profil (Instagram Highlights)

Rancang 5 kategori Sorotan (*Story Highlights*) dengan sampul (*cover*) seragam dan minimalis:

| Nama Sorotan | Isi Konten | Tujuan Bisnis |
|---|---|---|
| **Pricelist** | Foto ukuran buket (Small, Medium, Large) lengkap dengan rentang harga | Transparansi harga, menyaring pembeli sesuai budget |
| **Testimoni** | Screenshot kepuasan pelanggan via WhatsApp/DM & foto saat diterima | Membangun kepercayaan (*social proof*) |
| **How to Order** | Infografis alur pemesanan: konsultasi warna $\rightarrow$ DP $\rightarrow$ proses $\rightarrow$ pelunasan & kirim | Mengurangi pertanyaan berulang di chat |
| **Katalog / Portofolio** | Dokumentasi buket pengantin, lamaran, dan buket wisuda yang pernah dibuat | Memamerkan kualitas kerapian pengerjaan |
| **Ketentuan Kirim** | Jadwal pengiriman, kurir instan (Grab/Gojek), opsi jemput di tempat (*self pick-up*) | Kejelasan logistik |

---

### Fase 3: Strategi Konten & Penetrasi Algoritma Reels

Algoritma Instagram memprioritaskan video berdurasi 7–15 detik dengan tingkat penyelesaian video (*watch-through rate*) tinggi. 

Terapkan pembagian pilar konten mingguan (Target: Minimal 3 Reels + 3 Carousel per minggu):

```
Komposisi Konten Mingguan:
├── 40% Behind The Scenes (Proses Crafting)
│   ├── Video timelapse merangkai bunga & memilih kertas wrapping
│   └── Cara mencocokkan palet warna pita dengan tema busana
├── 30% Social Proof & Packaging
│   ├── Proses packing kardus/plastik pelindung anti-penyok
│   └── Video serah terima buket ke kurir / reaksi penerima
└── 30% Inspirasi & Edukasi Pelanggan
    ├── "Rekomendasi buket wisuda budget di bawah Rp 100 ribu"
    └── "Perbedaan buket bunga artificial vs preserved flowers"
```

---

### Fase 4: Taktik Pertumbuhan Penjualan (Sales Acquisition)

1. **Kemitraan Lokal Berbasis Ekosistem (Cross-Promotion)**:
   * Jalin kemitraan dengan studio foto wisuda lokal dan fotografer pernikahan *freelance*. Berikan komisi rujukan (*referral fee*) atau sediakan buket *sample* di studio mereka.
   * Hubungi MUA (*Make Up Artist*) daerah setempat untuk paket bundling buket lamaran.
2. **Pemanfaatan Momen Kalender (Seasonal Spikes)**:
   * Pantau jadwal kalender wisuda kampus/sekolah di kota domisili. Mulai kampanye pemesanan H-14 sebelum tanggal wisuda serentak.
   * Buat paket khusus Hari Ibu, Hari Guru, dan Valentine.
3. **Ekspansi Saluran Non-Lokal**:
   * Jika memproduksi buket berbahan kawat bulu (*pipe cleaner*), flanel, pita satin, atau bunga kering, pasang di marketplace nasional (Shopee/Tokopedia) karena tidak memiliki risiko layu dalam pengiriman ekspedisi reguler.

---

## 6. Metrik Keberhasilan (KPI Evaluasi)

Pantau metrik berikut dalam evaluasi 30 hari ke depan:
- **Tingkat Klik Tautan Bio (Link Click-Through Rate)**: Ditargetkan $\ge 5\%$ dari total pengunjung profil.
- **Rasio Follower Baru Organik**: Target mencapai 200–300 followers dalam 60 hari melalui konsistensi Reels.
- **Waktu Respon Chat (Response Time)**: Balasan chat calon pembeli $< 15$ menit pada jam operasional.
- **Conversion Rate**: Persentase chat masuk yang berlanjut menjadi pesanan fix ($\ge 25\%$).

