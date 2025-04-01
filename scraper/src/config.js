const config = {
  // Target site URL
  targetUrl: 'https://jaypaul-barrow-9cpc180.gamma.site',

  // Output directories
  output: {
    base: './output',
    content: './output/content',
    styles: './output/styles',
    assets: './output/assets',
    data: './output/data'
  },

  // Selectors for different content types
  selectors: {
    // Main sections
    sections: {
      header: 'header',
      about: '#about',
      experience: '#experience',
      projects: '#projects',
      contact: '#contact',
      footer: 'footer'
    },

    // Style-related selectors
    styles: {
      fonts: 'link[rel="stylesheet"]',
      colors: '*[style*="color"]',
      spacing: '*[style*="margin"], *[style*="padding"]'
    },

    // Asset selectors
    assets: {
      images: 'img',
      icons: 'link[rel="icon"]',
      fonts: 'link[rel="stylesheet"]'
    }
  },

  // Animation detection
  animations: {
    selectors: '*[class*="animate"], *[class*="transition"]',
    timing: {
      duration: 1000, // ms to wait for animations
      interval: 100   // ms between checks
    }
  }
};

export default config;
