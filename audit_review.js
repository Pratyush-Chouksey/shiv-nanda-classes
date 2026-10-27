import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const OUT_DIR = path.resolve('./audit_screenshots');
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function runAudit() {
  console.log('Starting visual review audit...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Test 360px overflow
  await page.setViewport({ width: 360, height: 800 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle2' });
  await page.evaluate(() => {
    sessionStorage.setItem('shiva_nanda_preloader_seen', 'true');
  });
  await page.reload({ waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 600));

  const overflowInfo = await page.evaluate(() => {
    const docWidth = document.documentElement.scrollWidth;
    const clientWidth = document.documentElement.clientWidth;
    const overflowingElements = [];
    document.querySelectorAll('*').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.right > clientWidth + 1) {
        overflowingElements.push({
          tag: el.tagName,
          id: el.id,
          class: el.className ? String(el.className).slice(0, 80) : '',
          right: rect.right,
          width: rect.width
        });
      }
    });
    return { docWidth, clientWidth, hasOverflow: docWidth > clientWidth, overflowingElements: overflowingElements.slice(0, 10) };
  });

  console.log('360px Overflow Check:', JSON.stringify(overflowInfo, null, 2));

  // Screenshot 390px sections
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.reload({ waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 600));

  const sections = ['home', 'about', 'courses', 'gallery', 'events', 'testimonials', 'faq', 'contact'];

  console.log('Capturing 390px mobile section screenshots...');
  for (const s of sections) {
    try {
      const el = await page.$(`#${s}`);
      if (el) {
        await page.evaluate((id) => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
        }, s);
        await new Promise(r => setTimeout(r, 400));
        await el.screenshot({ path: path.join(OUT_DIR, `mobile_${s}_390.png`) });
        console.log(`Captured mobile_${s}_390.png`);
      }
    } catch (err) {
      console.error(`Error capturing 390px ${s}:`, err.message);
    }
  }

  // Screenshot 1440px sections
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.reload({ waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 600));

  console.log('Capturing 1440px desktop section screenshots...');
  for (const s of sections) {
    try {
      const el = await page.$(`#${s}`);
      if (el) {
        await page.evaluate((id) => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
        }, s);
        await new Promise(r => setTimeout(r, 400));
        await el.screenshot({ path: path.join(OUT_DIR, `desktop_${s}_1440.png`) });
        console.log(`Captured desktop_${s}_1440.png`);
      }
    } catch (err) {
      console.error(`Error capturing 1440px ${s}:`, err.message);
    }
  }

  await browser.close();
  console.log('Audit capture completed.');
}

runAudit().catch(console.error);
