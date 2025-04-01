# **Directory Structure**

A React + Vite codebase with a clear modular structure to support component reuse, asset organization, and CI deployment.

```
jaypaul.me-site/
│
├── public/                     # Static assets (favicon, images, etc.)
│   ├── favicon.ico
│   ├── images/
│   └── robots.txt
│
├── src/
│   ├── assets/                 # Optimized media (images, icons, video placeholders)
│   │   └── profile.jpg
│   │   └── logos/
│
│   ├── components/             # Reusable UI blocks
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── SectionIntro.jsx
│   │   ├── Timeline.jsx
│   │   └── ScrollFadeWrapper.jsx
│
│   ├── sections/               # Page content as modular sections
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── HiddenVideoIntro.jsx
│
│   ├── hooks/                  # Custom React hooks
│   │   └── useScrollFadeIn.js
│
│   ├── lib/                    # Utility functions/helpers
│   │   └── scrollToAnchor.js
│
│   ├── styles/                 # Tailwind & custom styles
│   │   ├── index.css           # Tailwind base + custom imports
│   │   └── tailwind.config.js
│
│   ├── App.jsx                 # App entry with section imports
│   └── main.jsx                # ReactDOM render root
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD script
│
├── .env                       # (gitignored) baseURL or config values
├── .gitignore
├── index.html
├── vite.config.js
└── package.json
```

---

### Additional (Local Only)

```
/scraper/                      # Scraping scripts (Puppeteer/Playwright)
│   └── scrape-gamma.js
.gitignore                     # Add `/scraper/` to prevent Git tracking
```

---

**Next: Section 6: CI/CD Deployment Setup**
