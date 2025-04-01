import puppeteer from 'puppeteer';
import config from './config.js';
import { ensureOutputDirs, saveJson, waitForAnimations } from './utils.js';

async function scrapeStyles() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  try {
    // Ensure output directories exist
    await ensureOutputDirs();

    // Navigate to the site
    await page.goto(config.targetUrl, { waitUntil: 'networkidle0' });

    // Wait for animations to complete
    await waitForAnimations(page);

    // Extract all stylesheets
    const stylesheets = await page.evaluate(() => {
      const sheets = [];
      for (const sheet of document.styleSheets) {
        try {
          const rules = Array.from(sheet.cssRules).map(rule => ({
            selector: rule.selectorText,
            styles: rule.style.cssText
          }));
          sheets.push({
            href: sheet.href,
            rules
          });
        } catch (error) {
          // Skip cross-origin stylesheets
          console.warn('Skipped cross-origin stylesheet:', sheet.href);
        }
      }
      return sheets;
    });

    // Extract computed styles for all elements
    const computedStyles = await page.evaluate(() => {
      const styles = {};
      const elements = document.querySelectorAll('*');

      elements.forEach((el) => {
        const computed = window.getComputedStyle(el);
        styles[el.tagName.toLowerCase() + (el.id ? `#${el.id}` : '') + (el.className ? `.${el.className.split(' ').join('.')}` : '')] = {
          color: computed.color,
          backgroundColor: computed.backgroundColor,
          fontSize: computed.fontSize,
          fontFamily: computed.fontFamily,
          margin: computed.margin,
          padding: computed.padding,
          display: computed.display,
          position: computed.position,
          transform: computed.transform,
          transition: computed.transition
        };
      });

      return styles;
    });

    // Save the scraped styles
    await saveJson('styles.json', {
      stylesheets,
      computedStyles
    });

    console.log('Styles scraping completed successfully!');

  } catch (error) {
    console.error('Error during styles scraping:', error);
  } finally {
    await browser.close();
  }
}

// Run the scraper
scrapeStyles();
