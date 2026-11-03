/**
 * Instagram Profile Picture (Avatar) Scraper & Downloader
 * Targets @pearl.storeflowers high-resolution profile picture
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { chromium } = require('playwright');

const TARGET_USERNAME = 'pearl.storeflowers';
const TARGET_URL = `https://www.instagram.com/${TARGET_USERNAME}/`;

const ANALYTICS_DIR = path.resolve(__dirname, '..');
const STORE_DIR = path.resolve(__dirname, '../../pearl-store-web');

const ANALYTICS_AVATAR_DIR = path.join(ANALYTICS_DIR, 'src/data/avatar');
const ANALYTICS_AVATAR_FILE = path.join(ANALYTICS_AVATAR_DIR, 'profile_avatar.jpg');
const STORE_AVATAR_DIR = path.join(STORE_DIR, 'public/images');
const STORE_AVATAR_FILE = path.join(STORE_AVATAR_DIR, 'pearl_profile_avatar.jpg');

function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res) => {
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(destPath);
        return reject(new Error(`Failed to download: HTTP ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(destPath));
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
      reject(err);
    });
  });
}

async function scrapeProfileAvatar() {
  console.log(`[Avatar Scraper] Memulai ekstraksi foto profil @${TARGET_USERNAME}...`);

  if (!fs.existsSync(ANALYTICS_AVATAR_DIR)) {
    fs.mkdirSync(ANALYTICS_AVATAR_DIR, { recursive: true });
  }
  if (fs.existsSync(STORE_DIR) && !fs.existsSync(STORE_AVATAR_DIR)) {
    fs.mkdirSync(STORE_AVATAR_DIR, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 900 }
  });

  const page = await context.newPage();
  const candidateUrls = new Set();

  page.on('response', (res) => {
    const url = res.url();
    if (url.includes('t51.2885-19') || (url.includes('profile_pic') && !url.includes('.js'))) {
      candidateUrls.add(url);
    }
  });

  try {
    await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 35000 });

    const domAvatarUrls = await page.evaluate(() => {
      const results = [];
      const headerImgs = document.querySelectorAll('header img, img[alt*="profile picture"], img[alt*="pearl.storeflowers"]');
      headerImgs.forEach((img) => {
        if (img.src) results.push(img.src);
      });
      return results;
    });

    domAvatarUrls.forEach((u) => candidateUrls.add(u));

    console.log(`[Avatar Scraper] Ditemukan ${candidateUrls.size} kandidat URL foto profil.`);

    let chosenUrl = null;
    for (const url of candidateUrls) {
      if (url.includes('t51.2885-19')) {
        chosenUrl = url;
        break;
      }
    }

    if (!chosenUrl && candidateUrls.size > 0) {
      chosenUrl = Array.from(candidateUrls)[0];
    }

    if (!chosenUrl) {
      throw new Error('Tidak dapat menemukan URL foto profil di DOM maupun respon jaringan.');
    }

    console.log(`[Avatar Scraper] Mengunduh foto profil dari: ${chosenUrl.slice(0, 80)}...`);

    // Download ke analytics-pearl-store
    await downloadImage(chosenUrl, ANALYTICS_AVATAR_FILE);
    const statsAnalytics = fs.statSync(ANALYTICS_AVATAR_FILE);
    console.log(`[Avatar Scraper] Sukses tersimpan di analytics: ${ANALYTICS_AVATAR_FILE} (${(statsAnalytics.size / 1024).toFixed(2)} KB)`);

    // Download / copy ke pearl-store-web jika ada
    if (fs.existsSync(STORE_DIR)) {
      fs.copyFileSync(ANALYTICS_AVATAR_FILE, STORE_AVATAR_FILE);
      console.log(`[Avatar Scraper] Sukses disalin ke etalase web: ${STORE_AVATAR_FILE}`);
    }

    // Update profile.json
    const profileJsonPath = path.join(ANALYTICS_DIR, 'src/data/profile.json');
    if (fs.existsSync(profileJsonPath)) {
      const profile = JSON.parse(fs.readFileSync(profileJsonPath, 'utf8'));
      profile.avatarUrl = chosenUrl;
      profile.localAvatarPath = 'avatar/profile_avatar.jpg';
      profile.lastAvatarScrapedAt = new Date().toISOString();
      fs.writeFileSync(profileJsonPath, JSON.stringify(profile, null, 2), 'utf8');
      console.log(`[Avatar Scraper] src/data/profile.json berhasil diperbarui dengan foto profil lokal.`);
    }

    return {
      success: true,
      url: chosenUrl,
      localAnalyticsPath: ANALYTICS_AVATAR_FILE,
      localStorePath: STORE_AVATAR_FILE,
      fileSizeBytes: statsAnalytics.size
    };
  } finally {
    await browser.close();
  }
}

scrapeProfileAvatar()
  .then((res) => {
    console.log('[Avatar Scraper] Operasi selesai dengan sukses:', res);
    process.exit(0);
  })
  .catch((err) => {
    console.error('[Avatar Scraper] Gagal:', err);
    process.exit(1);
  });
