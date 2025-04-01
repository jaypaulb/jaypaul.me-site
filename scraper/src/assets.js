import puppeteer from 'puppeteer';
import config from './config.js';
import { ensureOutputDirs, saveJson, saveAsset, waitForAnimations } from './utils.js';

async function scrapeAssets() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  try {
    // Ensure output directories exist
    await ensureOutputDirs();

    // Navigate to the site
    await page.goto(config.targetUrl, { waitUntil: 'networkidle0' });

    // Wait for animations to complete
    await waitForAnimations(page);

    // Extract all assets
    const assets = await page.evaluate(() => {
      const images = Array.from(document.images).map(img => ({
        src: img.src,
        alt: img.alt,
        width: img.width,
        height: img.height
      }));

      const icons = Array.from(document.querySelectorAll('link[rel="icon"]')).map(icon => ({
        href: icon.href,
        type: icon.type,
        sizes: icon.sizes.value
      }));

      const fonts = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
        .filter(link => link.href.includes('fonts.googleapis.com'))
        .map(font => ({
          href: font.href,
          type: font.type
        }));

      return {
        images,
        icons,
        fonts
      };
    });

    // Download all assets
    const downloadedAssets = {
      images: [],
      icons: [],
      fonts: []
    };

    // Download images
    for (const image of assets.images) {
      const path = await saveAsset(image.src, 'images');
      if (path) {
        downloadedAssets.images.push({
          ...image,
          localPath: path
        });
      }
    }

    // Download icons
    for (const icon of assets.icons) {
      const path = await saveAsset(icon.href, 'icons');
      if (path) {
        downloadedAssets.icons.push({
          ...icon,
          localPath: path
        });
      }
    }

    // Save the asset metadata
    await saveJson('assets.json', downloadedAssets);

    console.log('Assets scraping completed successfully!');

  } catch (error) {
    console.error('Error during assets scraping:', error);
  } finally {
    await browser.close();
  }
}

// Run the scraper
scrapeAssets();
