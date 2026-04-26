import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1200, height: 630 });
await page.goto('https://lr-group.vercel.app', { waitUntil: 'networkidle' });
await page.waitForTimeout(8000);
await page.evaluate(() => {
  const cursor = document.querySelector('.cursor');
  if (cursor) cursor.style.display = 'none';
  document.body.style.zoom = '0.72';
  window.scrollTo(0, 0);
});
await page.waitForTimeout(1000);
await page.screenshot({ path: 'og-image.png', type: 'png' });
await browser.close();
