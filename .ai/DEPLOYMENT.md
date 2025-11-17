# Deployment Guide

## 🎯 Rekomendacija: Vercel (Lengviausias variantas)

**Kodėl Vercel?**
- ✅ **Pilnai nemokamas** - puikus gratis planas
- ✅ **Automatinis deploy** - kiekvienas push į GitHub automatiškai deployina
- ✅ **Sukurtas Next.js kūrėjų** - puikiai optimizuotas Next.js projektams
- ✅ **SSR/SSG palaikymas** - pilnas Next.js funkcionalumas
- ✅ **CDN** - greitas visame pasaulyje
- ✅ **Custom domain** - galima pridėti `driule.io` nemokamai

**Kaip deployinti Vercel:**

1. Eik į [vercel.com](https://vercel.com)
2. Prisijunk su GitHub account
3. Pasirink `driule_io` repository
4. Vercel automatiškai aptiks Next.js projektą
5. Spausk "Deploy" - viskas! 🚀

**Arba per CLI:**
```bash
npm i -g vercel
vercel
```

**Custom domain setup:**
- Vercel dashboard → Settings → Domains
- Pridėk `driule.io` arba `www.driule.io`
- Vercel automatiškai sukonfigūruos DNS

---

## 📦 GitHub Pages (Jei tikrai nori GitHub)

**Svarbu:** GitHub Pages palaiko tik statinius HTML failus. Next.js App Router gali būti eksportuojamas kaip statinis, bet reikia konfigūracijos.

**Privalumai:**
- ✅ Nemokama
- ✅ Integruota su GitHub
- ✅ Custom domain palaikymas

**Trūkumai:**
- ❌ Nėra SSR (bet mūsų projektas nenaudoja SSR, tai OK)
- ❌ Reikia GitHub Actions workflow
- ❌ Reikia static export konfigūracijos

**Setup žingsniai:**

1. **Atnaujink `next.config.js`** (žr. žemiau)
2. **Pridėk GitHub Actions workflow** (failas `.github/workflows/deploy.yml`)
3. **Atnaujink `package.json`** su export scriptu
4. **Push į GitHub** - automatiškai deployins

**Custom domain:**
- Sukurk `public/CNAME` failą su domenu: `driule.io`
- GitHub → Settings → Pages → Custom domain

---

## 🚀 GitHub Pages Setup Instrukcijos

### 1. Atnaujink `next.config.js`

Pridėk static export konfigūraciją:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Reikia GitHub Pages
  },
  basePath: process.env.NODE_ENV === 'production' ? '/driule_io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/driule_io' : '',
}

module.exports = nextConfig
```

**Pastaba:** Jei naudoji custom domain (`driule.io`), pašalink `basePath` ir `assetPrefix`.

### 2. Sukurk GitHub Actions Workflow

Sukurk `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './out'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 3. Atnaujink `package.json`

Pridėk export scriptą:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "export": "next build"
}
```

### 4. GitHub Settings

1. Eik į GitHub repository → Settings → Pages
2. Source: Pasirink "GitHub Actions"
3. Save

### 5. Push ir Deploy

```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push
```

Po push, GitHub Actions automatiškai buildins ir deployins į GitHub Pages.

---

## 📊 Platformų Palyginimas

| Platforma | Sudėtingumas | SSR/SSG | Greitis | Custom Domain | Kaina |
|-----------|--------------|---------|---------|---------------|-------|
| **Vercel** | ⭐ Labai lengva | ✅ Taip | ⚡ Labai greitas | ✅ Taip | 🆓 Nemokama |
| **GitHub Pages** | ⭐⭐ Vidutinis | ❌ Ne | ⚡ Greitas | ✅ Taip | 🆓 Nemokama |
| **Netlify** | ⭐ Lengva | ✅ Taip | ⚡ Greitas | ✅ Taip | 🆓 Nemokama |
| **Cloudflare Pages** | ⭐ Lengva | ✅ Taip | ⚡ Labai greitas | ✅ Taip | 🆓 Nemokama |

---

## 🎯 Galutinė Rekomendacija

**Naudok Vercel** - tai lengviausias ir geriausias variantas Next.js projektams:
- Pilnai nemokamas
- Automatinis deploy kiekvienam push
- Puikiai optimizuotas Next.js projektams
- Greitas CDN visame pasaulyje
- Lengvas custom domain setup

Jei tikrai nori GitHub Pages (pvz., viskas vienoje vietoje), sek instrukcijas aukščiau.

---

## 🔧 Troubleshooting

### GitHub Pages - Assets neveikia
- Patikrink `basePath` ir `assetPrefix` `next.config.js`
- Jei naudoji custom domain, pašalink juos

### Vercel - Build klaidos
- Patikrink, ar visi dependencies įdiegti
- Patikrink `package.json` scripts

### Custom Domain neveikia
- Palauk 24-48 valandas DNS propagacijai
- Patikrink DNS įrašus
