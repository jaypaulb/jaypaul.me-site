import puppeteer from 'puppeteer';
import config from './config.js';
import { ensureOutputDirs, saveJson, getComputedStyles, waitForAnimations } from './utils.js';

async function scrapeContent() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  try {
    // Ensure output directories exist
    await ensureOutputDirs();

    // Navigate to the site
    await page.goto(config.targetUrl, { waitUntil: 'networkidle0' });

    // Wait for animations to complete
    await waitForAnimations(page);

    // Scrape each section
    const content = {};
    for (const [section, selector] of Object.entries(config.selectors.sections)) {
      console.log(`Scraping ${section} section...`);

      const sectionContent = await page.evaluate((sel) => {
        const element = document.querySelector(sel);
        if (!element) return null;

        return {
          text: element.innerText,
          html: element.innerHTML,
          classes: element.className,
          id: element.id
        };
      }, selector);

      if (sectionContent) {
        content[section] = sectionContent;

        // Get computed styles for the section
        const styles = await getComputedStyles(page, selector);
        if (styles) {
          content[section].styles = styles;
        }
      }
    }

    // Save the scraped content
    await saveJson('content.json', content);
    console.log('Content scraping completed successfully!');

  } catch (error) {
    console.error('Error during content scraping:', error);
  } finally {
    await browser.close();
  }
}

// Run the scraper
scrapeContent();
