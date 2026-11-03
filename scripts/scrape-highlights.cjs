/**
 * Playwright + Node.js Instagram Story Highlights Scraper
 * Extracts the 5 story highlights, their titles, IDs, cover image URLs,
 * and downloads high-resolution cover photos locally.
 * Run with: bun run scrape:highlights (or node scripts/scrape-highlights.cjs)
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const TARGET_USERNAME = 'pearl.storeflowers';
const TARGET_URL = `https://www.instagram.com/${TARGET_USERNAME}/`;
const OUTPUT_DIR = path.resolve(__dirname, '../src/data/highlights');
const IMAGES_DIR = path.resolve(OUTPUT_DIR, 'images');
const HIGHLIGHTS_JSON = path.resolve(OUTPUT_DIR, 'highlights.json');

function mapCategoryTag(title) {
  const lower = title.toLowerCase().trim();
  if (lower.includes('promo')) return 'Promo';
  if (lower.includes('place') || lower.includes('lokasi') || lower.includes('toko')) return 'Location';
  if (lower.includes('flower') || lower.includes('bunga') || lower.includes('katalog')) return 'Catalog';
  if (lower.includes('kata mereka') || lower.includes('testi') || lower.includes('review')) return 'Testimonial';
  if (lower.includes('hiring') || lower.includes('karir') || lower.includes('loker')) return 'Career';
  return 'General';
}

function sanitizeFilename(text) {
  return text.replace(/[^a-zA-Z0-9_-]/g, '_').toLowerCase();
}

async function downloadImage(url, destPath) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
        'Referer': 'https://www.instagram.com/',
      },
    });
    if (!res.ok) {
      console.warn(`  [Warning] Gagal unduh cover: HTTP ${res.status}`);
      return false;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(destPath, buffer);
    return true;
  } catch (err) {
    console.warn(`  [Warning] Error saat unduh ${destPath}: ${err.message}`);
    return false;
  }
}

async function scrapeHighlights() {
  console.log(`[Highlights Scraper] Memulai ekstraksi Sorotan Profil (@${TARGET_USERNAME})...`);

  if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 900 },
    locale: 'id-ID',
  });
  const page = await context.newPage();

  const highlightsMap = new Map();

  try {
    console.log(`[Highlights Scraper] Membuka ${TARGET_URL} ...`);
    await page.goto(TARGET_URL, { waitUntil: 'domcontentloaded', timeout: 25000 });
    console.log(`[Highlights Scraper] Halaman termuat: "${await page.title()}"`);

    // Tunggu hidrasi React awal
    await new Promise((r) => setTimeout(r, 4000));

    // Ekstrak elemen tray sorotan di DOM
    const rawHighlights = await page.$$eval('a[href*="/stories/highlights/"]', (anchors) => {
      return anchors.map((a) => {
        const href = a.getAttribute('href') || '';
        const titleEl = a.querySelector('span, div[dir="auto"], div');
        const imgEl = a.querySelector('img');
        return {
          href,
          title: titleEl ? titleEl.innerText.trim() : '',
          coverUrl: imgEl ? imgEl.getAttribute('src') || '' : '',
        };
      });
    });

    console.log(`[Highlights Scraper] Terdeteksi ${rawHighlights.length} elemen anchor sorotan.`);

    for (const raw of rawHighlights) {
      const match = raw.href.match(/\/stories\/highlights\/(\d+)/);
      if (match && match[1]) {
        const id = match[1];
        if (!highlightsMap.has(id)) {
          const cleanTitle = raw.title || 'Sorotan';
          highlightsMap.set(id, {
            id,
            title: cleanTitle,
            url: `https://www.instagram.com/stories/highlights/${id}/`,
            coverUrl: raw.coverUrl,
            categoryTag: mapCategoryTag(cleanTitle),
            scrapedAt: new Date().toISOString(),
          });
        }
      }
    }
  } catch (err) {
    console.error('[Highlights Scraper] Kendala saat scraping:', err.message);
  } finally {
    await browser.close();
  }

  const highlightsList = Array.from(highlightsMap.values());
  console.log(`\n[Highlights Scraper] Ditemukan ${highlightsList.length} sorotan unik terverifikasi:`);
  highlightsList.forEach((h, idx) => {
    console.log(`  ${idx + 1}. [${h.categoryTag}] "${h.title}" (ID: ${h.id})`);
  });

  if (highlightsList.length === 0) {
    console.warn('[Highlights Scraper] Tidak ada sorotan yang ditemukan.');
    return;
  }

  // Unduh seluruh cover gambar ke src/data/highlights/images/{id}_{title}.jpg
  console.log(`\n[Highlights Scraper] Mengunduh cover gambar sorotan...`);
  let downloadedCount = 0;

  for (let i = 0; i < highlightsList.length; i++) {
    const item = highlightsList[i];
    const safeTitle = sanitizeFilename(item.title);
    const filename = `${item.id}_${safeTitle}.jpg`;
    const localImagePath = path.join(IMAGES_DIR, filename);

    item.localCoverRelativePath = `images/${filename}`;

    if (item.coverUrl) {
      const ok = await downloadImage(item.coverUrl, localImagePath);
      if (ok) {
        downloadedCount++;
        console.log(`  ✓ Berhasil simpan cover [${item.title}]: ${filename}`);
      }
    }
    await new Promise((r) => setTimeout(r, 200));
  }

  // Simpan payload JSON
  const finalPayload = {
    account: TARGET_USERNAME,
    totalHighlights: highlightsList.length,
    totalCoversDownloaded: downloadedCount,
    lastScrapedAt: new Date().toISOString(),
    highlights: highlightsList,
  };

  fs.writeFileSync(HIGHLIGHTS_JSON, JSON.stringify(finalPayload, null, 2), 'utf-8');
  console.log(`\n============================================================`);
  console.log(`[Highlights Scraper Sukses]`);
  console.log(`  ✓ Total Sorotan: ${highlightsList.length}`);
  console.log(`  ✓ Cover Berhasil Diunduh: ${downloadedCount}`);
  console.log(`  ✓ File JSON Tersimpan: ${HIGHLIGHTS_JSON}`);
  console.log(`  ✓ Folder Cover: ${IMAGES_DIR}`);
  console.log(`============================================================\n`);
}

scrapeHighlights().catch((err) => {
  console.error('[Highlights Scraper Fatal]', err);
  process.exit(1);
});

