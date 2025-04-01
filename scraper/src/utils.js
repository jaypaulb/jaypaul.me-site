import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';
import config from './config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure output directories exist
const ensureOutputDirs = async () => {
  const dirs = Object.values(config.output);
  for (const dir of dirs) {
    await fs.ensureDir(dir);
  }
};

// Save JSON data
const saveJson = async (filename, data) => {
  const filepath = path.join(config.output.data, filename);
  await fs.writeJson(filepath, data, { spaces: 2 });
};

// Download and save asset
const saveAsset = async (url, type) => {
  const filename = path.basename(url);
  const filepath = path.join(config.output.assets, type, filename);

  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    await fs.writeFile(filepath, Buffer.from(buffer));
    return filepath;
  } catch (error) {
    console.error(`Failed to download asset: ${url}`, error);
    return null;
  }
};

// Extract computed styles
const getComputedStyles = async (page, selector) => {
  return await page.evaluate((sel) => {
    const element = document.querySelector(sel);
    if (!element) return null;

    const styles = window.getComputedStyle(element);
    return {
      color: styles.color,
      backgroundColor: styles.backgroundColor,
      fontSize: styles.fontSize,
      fontFamily: styles.fontFamily,
      margin: styles.margin,
      padding: styles.padding,
      display: styles.display,
      position: styles.position
    };
  }, selector);
};

// Wait for animations to complete
const waitForAnimations = async (page) => {
  await page.waitForTimeout(config.animations.timing.duration);
};

export {
  ensureOutputDirs,
  saveJson,
  saveAsset,
  getComputedStyles,
  waitForAnimations
};
