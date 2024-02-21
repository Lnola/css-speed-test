import * as playwright from 'playwright';
import { performance } from 'perf_hooks';

async function main() {
  const url = {
    css: 'http://localhost:3000',
    sass: 'http://localhost:3001',
    emotion: 'http://localhost:3002',
  };
  const rendersPerFramework = 100;
  const attempts = 20;

  const type = playwright.chromium;
  const browser = await type.launch({ headless: true });

  const measureFramework = async (framework: 'css' | 'emotion' | 'sass') => {
    console.log('Testing:', framework);
    const start = performance.now();
    for (let index = 0; index < rendersPerFramework; index++) {
      const page = await browser.newPage();
      await page.goto(url[framework]);
      await page.waitForSelector('text=Loaded', { state: 'visible' });
      await page.close();
    }
    const end = performance.now();
    return end - start;
  };

  let totalCss = 0;
  let totalSass = 0;
  let totalEmotion = 0;

  for (let index = 0; index < attempts; index++) {
    console.log(`--- Attempt ${index + 1} ---`);
    totalCss += await measureFramework('css');
    totalSass += await measureFramework('sass');
    totalEmotion += await measureFramework('emotion');
  }

  console.log('-- RESULTS ---');
  console.log(
    'Average CSS:',
    totalCss / (rendersPerFramework * attempts),
    'ms'
  );
  console.log(
    'Average SASS:',
    totalSass / (rendersPerFramework * attempts),
    'ms'
  );
  console.log(
    'Average Emotion:',
    totalEmotion / (rendersPerFramework * attempts),
    'ms'
  );

  await browser.close();
}

main();
