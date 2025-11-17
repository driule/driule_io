# GitHub Pages Setup - Quick Guide

## ✅ Kas jau padaryta:

1. ✅ `next.config.js` - sukonfigūruotas static export
2. ✅ `.github/workflows/deploy.yml` - automatinis deploy workflow
3. ✅ `public/CNAME` - custom domain failas (jei naudoji `driule.io`)

## 🚀 Ką daryti dabar:

### 1. GitHub Settings

1. Eik į GitHub repository: `https://github.com/driule/driule_io`
2. Settings → Pages
3. **Source**: Pasirink **"GitHub Actions"** (ne "Deploy from a branch")
4. Save

### 2. Push į GitHub

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push
```

### 3. Patikrink Deployment

1. Eik į repository → **Actions** tab
2. Matysi workflow vykstantį
3. Po ~2-3 minučių bus deployinta

### 4. Svetainės URL

**Jei naudoji custom domain (`driule.io`):**
- URL: `https://driule.io`
- Reikia sukonfigūruoti DNS (žr. žemiau)

**Jei naudoji GitHub Pages subdomain:**
- URL: `https://driule.github.io/driule_io`
- Jei taip, patikrink `next.config.js` - turi būti `basePath: '/driule_io'`

## 🔧 Custom Domain Setup (driule.io)

Jei turi `driule.io` domeną:

1. **DNS konfigūracija** (tavo DNS provider):
   - Sukurk **A** įrašą: `@` → `185.199.108.153`
   - Sukurk **A** įrašą: `@` → `185.199.109.153`
   - Sukurk **A** įrašą: `@` → `185.199.110.153`
   - Sukurk **A** įrašą: `@` → `185.199.111.153`
   - Arba **CNAME** įrašą: `@` → `driule.github.io`

2. **GitHub Settings:**
   - Settings → Pages → Custom domain
   - Įrašyk: `driule.io`
   - Pasirink "Enforce HTTPS"

3. **next.config.js:**
   - Pašalink `basePath` ir `assetPrefix` (palik tuščius string'us arba pašalink eilutes)

## 📝 Jei naudoji GitHub subdomain (driule.github.io/driule_io)

Jei **NENAUDOJI** custom domain, palik `next.config.js` kaip yra dabar (su `basePath: '/driule_io'`).

## 🔍 Troubleshooting

### Assets neveikia (CSS/JS neįsikrauna)
- Patikrink `basePath` ir `assetPrefix` `next.config.js`
- Jei custom domain, pašalink juos
- Jei subdomain, patikrink ar teisingas path

### Build klaidos GitHub Actions
- Patikrink Actions → workflow logs
- Patikrink ar visi dependencies įdiegti

### Custom domain neveikia
- Palauk 24-48 valandas DNS propagacijai
- Patikrink DNS įrašus
- Patikrink GitHub Settings → Pages → Custom domain

## ✅ Testavimas lokaliai

```bash
# Build statinį export
npm run build

# Patikrink out/ folderį
ls -la out/

# Jei turi serve, gali testuoti:
npx serve out
```

---

**Po deploy, svetainė bus prieinama per ~2-3 minutes!** 🚀

