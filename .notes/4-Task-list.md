# **Task List**

---

## **High Priority**

- [x] **Project Foundation**
  - **Status:** Completed
  - **Assigned To:** Dev
  - **Notes:** Created GitHub repo, initialized with proper .gitignore, README.md, and branch protection rules.

- [x] **Initialize Vite + React Project**
  - **Status:** Completed
  - **Assigned To:** Dev
  - **Notes:** Project created with Vite, React, and TailwindCSS. Basic structure in place.

- [x] **Development Environment**
  - **Status:** Completed
  - **Assigned To:** Dev
  - **Notes:** Basic environment set up. ESLint and Prettier can be added later if needed.

- [ ] **Scrape Gamma Site**
  - **Status:** In Progress
  - **Assigned To:** Dev
  - **Notes:** Need to capture all content from https://jaypaul-barrow-9cpc180.gamma.site
  - **Subtasks:**
    - [ ] Set up Puppeteer/Playwright scraping infrastructure
    - [ ] Create data structure for scraped content
    - [ ] Scrape and organize:
      - [ ] Text content and copy
      - [ ] Images and assets
      - [ ] Font styles and sizes
      - [ ] Color schemes
      - [ ] Layout structure
      - [ ] Animation timings
      - [ ] Responsive breakpoints
    - [ ] Validate scraped content
    - [ ] Organize assets in `/scraper/` folder

- [ ] **Tailwind + Animation Setup**
  - **Status:** To Do
  - **Assigned To:** Dev
  - **Notes:** Will be informed by scraped data. Need to:
    - [ ] Configure custom Tailwind theme based on scraped styles
    - [ ] Set up animation system
    - [ ] Implement responsive design system

- [ ] **Rebuild Core Layout**
  - **Status:** To Do
  - **Assigned To:** Dev
  - **Notes:** Will be based on scraped structure. Need to:
    - [ ] Create React components for each section
    - [ ] Implement responsive layouts
    - [ ] Add animations and transitions
    - [ ] Optimize performance

- [ ] **Manual Test Deployment to A2 Hosting**
  - **Status:** To Do
  - **Assigned To:** Jaypaul
  - **Notes:** Validate the static `dist/` output uploads cleanly via FTP or File Manager to `public_html`.

---

## **Medium Priority**

- [ ] **Set Up GitHub Actions CI/CD**
  - **Status:** To Do
  - **Assigned To:** Dev
  - **Notes:** Auto-build and deploy to A2 Hosting via SFTP on `main` push. Use `.env` and GitHub Secrets for auth.

- [ ] **Create `.env` Handling**
  - **Status:** To Do
  - **Assigned To:** Dev
  - **Notes:** For BASE_URL, build paths, and any environment-specific settings.

- [ ] **Performance Optimization**
  - **Status:** To Do
  - **Assigned To:** Dev
  - **Notes:** Implement lazy loading, image optimization, and bundle size analysis.

---

## **Low Priority**

- [ ] **Hidden Video Intro Section**
  - **Status:** To Do
  - **Assigned To:** Dev
  - **Notes:** Scaffold as hidden Tailwind block, ready to be activated later.

- [ ] **Custom 404 Fallback**
  - **Status:** To Do
  - **Assigned To:** Dev
  - **Notes:** Display basic "Page Not Found" with return link.

---

## **Completed**

- [x] Domain `jaypaul.me` registered
- [x] A2 Hosting account live
- [x] Stack decisions confirmed: React + Vite + Tailwind + GitHub CI
- [x] Project initialized and synced to GitHub
- [x] Basic development environment set up

---

**Next: Begin scraping process to capture all content and styling from the Gamma site**
