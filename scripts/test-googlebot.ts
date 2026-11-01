async function inspectGooglebot() {
  try {
    const res = await fetch('https://www.instagram.com/shelwa_craft/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });
    console.log('Status:', res.status);
    const html = await res.text();
    console.log('HTML size:', html.length);

    // Save sample to disk for inspection
    await Bun.write('raw-data/googlebot-sample.html', html);
    console.log('Saved to raw-data/googlebot-sample.html');

    // Find any image URLs
    const imgMatches = html.match(/https:\/\/[^"'\s<>]*cdninstagram[^"'\s<>]*/g) || [];
    console.log('CDN Instagram URLs found:', imgMatches.length);
    if (imgMatches.length > 0) {
      console.log('First 3 images:', imgMatches.slice(0, 3));
    }
  } catch (e) {
    console.error('Error:', e);
  }
}

inspectGooglebot();

