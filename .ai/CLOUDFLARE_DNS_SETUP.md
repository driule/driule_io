# Cloudflare DNS Setup for driule.io

## 🎯 Tikslas
Sukonfigūruoti `driule.io` domeną, kad rodytų GitHub Pages svetainę.

## 📋 Cloudflare DNS Konfigūracija

### 1. Prisijunk prie Cloudflare

1. Eik į [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Pasirink `driule.io` domeną

### 2. DNS Records Setup

Eik į **DNS** → **Records** ir pridėk/suconfigūruok šiuos įrašus:

#### Variantas A: CNAME (Rekomenduojama - Lengviausia)

| Type | Name | Target | Proxy status |
|------|------|--------|--------------|
| **CNAME** | `@` | `driule.github.io` | ✅ Proxied (orange cloud) |
| **CNAME** | `www` | `driule.github.io` | ✅ Proxied (orange cloud) |

**Pastaba:** Jei `@` (root) neleidžia CNAME, naudok Variantą B.

#### Variantas B: A Records (Jei CNAME neveikia root)

| Type | Name | IPv4 address | Proxy status |
|------|------|--------------|--------------|
| **A** | `@` | `185.199.108.153` | ✅ Proxied |
| **A** | `@` | `185.199.109.153` | ✅ Proxied |
| **A** | `@` | `185.199.110.153` | ✅ Proxied |
| **A** | `@` | `185.199.111.153` | ✅ Proxied |
| **CNAME** | `www` | `driule.github.io` | ✅ Proxied |

**Svarbu:** 
- ✅ **Proxied** (orange cloud) - Cloudflare CDN ir SSL
- ❌ **DNS only** (gray cloud) - tik DNS, be SSL/CDN

### 3. SSL/TLS Settings

1. Eik į **SSL/TLS** → **Overview**
2. Pasirink **Full** arba **Full (strict)** mode
3. Cloudflare automatiškai sugeneruos SSL sertifikatą

### 4. GitHub Pages Settings

1. Eik į GitHub: `https://github.com/driule/driule_io`
2. **Settings** → **Pages**
3. **Custom domain**: Įrašyk `driule.io`
4. Pasirink **"Enforce HTTPS"** (po kelių minučių, kai SSL aktyvuosis)
5. Save

### 5. Patikrink

Po ~5-15 minučių:
- `https://driule.io` turėtų rodyti svetainę
- `https://www.driule.io` taip pat turėtų veikti

## 🔍 Troubleshooting

### Svetainė neveikia po 30 minučių

1. **Patikrink DNS propagaciją:**
   ```bash
   dig driule.io
   # arba
   nslookup driule.io
   ```
   Turėtų rodyti GitHub Pages IP adresus

2. **Patikrink Cloudflare DNS:**
   - Cloudflare Dashboard → DNS → Records
   - Patikrink ar įrašai teisingi

3. **Patikrink GitHub Pages:**
   - GitHub → Settings → Pages
   - Patikrink ar custom domain sukonfigūruotas
   - Patikrink ar deployment sėkmingas (Actions tab)

### SSL sertifikatas neveikia

1. Cloudflare → SSL/TLS → Overview
2. Palauk 15-30 minučių (Cloudflare generuoja sertifikatą)
3. Jei vis dar neveikia, pabandyk:
   - SSL/TLS → Edge Certificates → Always Use HTTPS: ON
   - SSL/TLS → Overview → Full (strict)

### www neveikia

- Patikrink ar pridėtas `www` CNAME įrašas Cloudflare DNS
- Patikrink ar GitHub Pages priima `www.driule.io`

## ✅ Kas turėtų veikti po setup:

- ✅ `https://driule.io` - pagrindinis domenas
- ✅ `https://www.driule.io` - www subdomain
- ✅ Automatinis SSL sertifikatas (Cloudflare)
- ✅ CDN greitis (Cloudflare)
- ✅ HTTPS enforcement

## 🚀 Po setup

1. Palauk 5-15 minučių DNS propagacijai
2. Patikrink `https://driule.io`
3. Jei veikia - viskas! 🎉

---

**Pastaba:** Cloudflare Proxy (orange cloud) suteikia:
- ✅ CDN greitį
- ✅ DDoS apsaugą
- ✅ Automatinį SSL
- ✅ Caching optimizaciją

