# **Architecture**

The project will be structured as a modern static React application using Vite for lightning-fast builds and TailwindCSS for styling. The site will be deployed via GitHub Actions to A2 Hosting via SFTP.

---

## **Frontend**

- **Framework:** React (via Vite)
- **Build Tool:** Vite (`npm create vite@latest`)
- **Styling:** TailwindCSS with custom theme config to match Gamma
- **Routing:** Single-page scroll (no React Router needed)
- **Animations:** Scroll-based fade-ins and transitions using Tailwind plugins and intersection observers

## **Backend**

- **None.** All content is static.
- Optional future enhancement: contact form using Formspree or A2’s PHP mail script.

## **State Management**

- **Minimal React state** for interactive elements (e.g., mobile menu toggles)
- No global state or third-party state libraries required

## **Deployment**

- **GitHub Repository:** `jaypaul.me-site`
- **CI/CD Pipeline:** GitHub Actions
  - Auto-build and deploy `dist/` folder to A2 Hosting's `public_html/` via SFTP
  - Deploys **only on push to `main`**
  - Requires secrets: `A2_HOST`, `A2_USERNAME`, `A2_PASSWORD`

---

**Next: Section 3: Key Features**
