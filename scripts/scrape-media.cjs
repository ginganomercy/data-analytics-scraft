/**
 * Playwright + Node.js Deep Instagram Media & Post Content Scraper
 * Tier 2: Launches headless Chromium, scrolls feed, extracts all posts, and downloads images.
 * Run with: bun run scrape:media (or node scripts/scrape-media.cjs)
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const TARGET_USERNAME = 'pearl.storeflowers';
const TARGET_URL = `https://www.instagram.com/${TARGET_USERNAME}/`;
const OUTPUT_DIR = path.resolve(__dirname, '../src/data/posts');
const IMAGES_DIR = path.resolve(OUTPUT_DIR, 'images');
const POSTS_JSON = path.resolve(OUTPUT_DIR, 'posts.json');

async function downloadImage(url, destPath) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
        'Referer': 'https://www.instagram.com/',
      },
    });
    if (!res.ok) {
      console.warn(`  [Warning] Gagal mengunduh gambar: HTTP ${res.status}`);
      return false;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(destPath, buffer);
    return true;
  } catch (err) {
    console.warn(`  [Warning] Error saat download ${destPath}: ${err.message}`);
    return false;
  }
}

async function deepScrapeMedia() {
  console.log(`[Tier-2 Media Scraper] Memulai ekstraksi feed mendalam untuk @${TARGET_USERNAME}...`);

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

  const collectedPostsMap = new Map();

  try {
    console.log(`[Tier-2 Media Scraper] Membuka ${TARGET_URL} ...`);
    await page.goto(TARGET_URL, { waitUntil: 'domcontentloaded', timeout: 25000 });
    console.log(`[Tier-2 Media Scraper] Halaman termuat: "${await page.title()}"`);

    // Tunggu hidrasi React awal
    await new Promise((r) => setTimeout(r, 3500));

    // Scroll bertahap untuk memuat postingan grid
    console.log('[Tier-2 Media Scraper] Menggulir feed untuk memuat portofolio...');
    for (let scrollStep = 1; scrollStep <= 5; scrollStep++) {
      // Ambil elemen postingan saat ini di DOM
      const domPosts = await page.$$eval('a[href*="/p/"]', (anchors) => {
        return anchors.map((a) => {
          const href = a.getAttribute('href') || '';
          const img = a.querySelector('img');
          return {
            href,
            src: img ? img.getAttribute('src') || '' : '',
            alt: img ? img.getAttribute('alt') || '' : '',
          };
        });
      });

      for (const p of domPosts) {
        const match = p.href.match(/\/p\/([A-Za-z0-9_-]+)/);
        if (match && match[1]) {
          const shortcode = match[1];
          if (!collectedPostsMap.has(shortcode) && p.src) {
            collectedPostsMap.set(shortcode, {
              shortcode,
              postUrl: `https://www.instagram.com/p/${shortcode}/`,
              imageUrl: p.src,
              caption: p.alt.replace(/^Photo by .*? on .*?\.\s*/i, '').trim(),
              rawAlt: p.alt,
              downloadedAt: new Date().toISOString(),
            });
          }
        }
      }

      console.log(`  Scroll #${scrollStep}: Terkumpul ${collectedPostsMap.size} postingan sejauh ini.`);
      await page.evaluate(() => window.scrollBy(0, 1200));
      await new Promise((r) => setTimeout(r, 2000));
    }
  } catch (err) {
    console.error('[Tier-2 Media Scraper] Kendala saat browsing feed:', err.message);
  } finally {
    await browser.close();
  }

  const postsArray = Array.from(collectedPostsMap.values());
  console.log(`\n[Tier-2 Media Scraper] Selesai scraping DOM! Total postingan terdeteksi: ${postsArray.length}`);

  if (postsArray.length === 0) {
    console.warn('[Tier-2 Media Scraper] Tidak ada postingan yang ditemukan. Memeriksa koneksi.');
    return;
  }

  // Unduh seluruh gambar ke src/data/posts/images/{shortcode}.jpg
  console.log(`[Tier-2 Media Scraper] Mengunduh ${postsArray.length} file gambar ke lokal...`);
  let downloadedCount = 0;

  for (let i = 0; i < postsArray.length; i++) {
    const post = postsArray[i];
    const filename = `${post.shortcode}.jpg`;
    const localImagePath = path.join(IMAGES_DIR, filename);

    // Update path lokal pada data
    post.localImageRelativePath = `images/${filename}`;

    const ok = await downloadImage(post.imageUrl, localImagePath);
    if (ok) {
      downloadedCount++;
      process.stdout.write(`  [${i + 1}/${postsArray.length}] Berhasil simpan: ${filename}\n`);
    }
    // Jeda sopan antar request CDN
    await new Promise((r) => setTimeout(r, 200));
  }

  // Tulis structured JSON ke src/data/posts/posts.json
  const finalPayload = {
    account: TARGET_USERNAME,
    totalPostsScraped: postsArray.length,
    totalImagesDownloaded: downloadedCount,
    scrapedAt: new Date().toISOString(),
    posts: postsArray,
  };

  fs.writeFileSync(POSTS_JSON, JSON.stringify(finalPayload, null, 2), 'utf-8');
  console.log(`\n============================================================`);
  console.log(`[Tier-2 Media Scraper Selesai]`);
  console.log(`  ✓ Total Postingan: ${postsArray.length}`);
  console.log(`  ✓ Gambar Berhasil Diunduh: ${downloadedCount}`);
  console.log(`  ✓ File JSON Tersimpan: ${POSTS_JSON}`);
  console.log(`  ✓ Folder Aset Gambar: ${IMAGES_DIR}`);
  console.log(`============================================================\n`);
}

deepScrapeMedia().catch((err) => {
  console.error('[Tier-2 Fatal]', err);
  process.exit(1);
});

