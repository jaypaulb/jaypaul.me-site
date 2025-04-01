# Gamma Site Scraper

This scraper is designed to capture all content, styles, and assets from the Gamma site for rebuilding in React.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure the target URL in `src/config.js` if needed.

## Usage

The scraper is split into three main components:

1. Content Scraper:
```bash
npm run scrape:content
```
Captures all text content, HTML structure, and section-specific styles.

2. Styles Scraper:
```bash
npm run scrape:styles
```
Extracts all CSS styles, computed styles, and animation information.

3. Assets Scraper:
```bash
npm run scrape:assets
```
Downloads all images, icons, and fonts.

## Output Structure

All scraped content will be saved in the `output` directory:

```
output/
├── content/     # Text and HTML content
├── styles/      # CSS and computed styles
├── assets/      # Images, icons, and fonts
└── data/        # JSON files with metadata
```

## Notes

- The scraper uses Puppeteer to handle JavaScript-rendered content
- All animations are captured and their timings recorded
- Cross-origin stylesheets are skipped but logged
- Assets are downloaded and organized by type
- The output is structured for easy integration with the React rebuild
