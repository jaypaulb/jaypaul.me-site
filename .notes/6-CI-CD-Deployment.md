# **CI/CD Deployment Setup**

The project uses **GitHub Actions** to auto-deploy to **A2 Hosting** on every push to the `main` branch. This ensures reliable and hands-off updates once changes are committed.

---

## **Trigger**
```yaml
on:
  push:
    branches:
      - main
```

---

## **Secrets Configuration**

You must store the following in the GitHub repository under **Settings > Secrets and variables > Actions**:

| Secret Name     | Value (to be supplied)              |
|------------------|-------------------------------------|
| `A2_HOST`        | e.g., `ftp.yourdomain.com` or IP    |
| `A2_USERNAME`    | Your SFTP username                  |
| `A2_PASSWORD`    | Your SFTP password                  |
| `A2_REMOTE_PATH` | Optional. Defaults to `/public_html`|

---

## **Workflow File**  
`.github/workflows/deploy.yml`

```yaml
name: Deploy to A2 Hosting

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Install dependencies
      run: npm install

    - name: Build site
      run: npm run build

    - name: Deploy to A2 Hosting via SFTP
      uses: wlixcc/SFTP-Deploy-Action@v1.2.4
      with:
        username: ${{ secrets.A2_USERNAME }}
        server: ${{ secrets.A2_HOST }}
        password: ${{ secrets.A2_PASSWORD }}
        local_path: ./dist
        remote_path: ${{ secrets.A2_REMOTE_PATH || '/public_html' }}
```

---

## **Developer Notes**

- The `vite.config.js` must define `base: './'` to ensure relative paths in `dist/`.
- Tailwind build output goes into `dist/` — ensure it’s included and correctly built before deploy.
- This setup assumes the site is served from root (`jaypaul.me/`), not a subdirectory.

---

The pipeline **auto-deploys changes only when the `main` branch is updated**. Manual deployments can be done by pushing changes or via GitHub’s `workflow_dispatch` if needed later.

---

**All sections complete. The spec is now dev-ready.**  
Let me know when you're ready to initiate the scraping script setup.