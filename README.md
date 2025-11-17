# driule.io - Personal Brand Website

A stunning, animated landing page showcasing driule's expertise in game development, blockchain, web dev, and innovative projects. Combining sci-fi high-tech aesthetics with soft Ghibli-inspired animations.

## 🚀 Tech Stack

- **Next.js 14** (App Router) - React framework with SSR/SSG
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

## 🎨 Design Features

- **Sci-Fi High-Tech**: Neon accents, dark backgrounds, futuristic UI
- **Ghibli Softness**: Pastel gradients, organic shapes, gentle animations
- **Fully Responsive**: Mobile-first design
- **Smooth Animations**: Scroll-triggered animations and micro-interactions
- **Performance Optimized**: Fast loading, optimized images, code splitting

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main landing page
│   └── globals.css     # Global styles and animations
├── components/
│   ├── Hero.tsx        # Hero section with animated particles
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills section
│   └── Contact.tsx     # Contact section
└── PLAN.md            # Detailed plan and design concepts
```

## 🎯 Customization

### Update Content

1. **Hero Section** (`components/Hero.tsx`): Update tagline and description
2. **About Section** (`components/About.tsx`): Update bio and skills
3. **Projects** (`components/Projects.tsx`): Add your real projects with links
4. **Skills** (`components/Skills.tsx`): Update skill categories and items
5. **Contact** (`components/Contact.tsx`): Update social links and contact info

### Update Colors

Edit `tailwind.config.ts` to customize the color palette:
- `space.*` - Dark background colors
- `neon.*` - Neon accent colors
- `ghibli.*` - Soft Ghibli-inspired colors

### Update Metadata

Edit `app/layout.tsx` to update SEO metadata, title, and description.

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to [Vercel](https://vercel.com) for automatic deployments.

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Self-hosted Node.js server

## 📝 Notes

- All content is in English as requested
- The design combines sci-fi and Ghibli aesthetics
- Fully responsive and optimized for performance
- Uses Next.js App Router for modern React patterns
- SSR/SSG enabled for better SEO and performance

## 🔮 Future Enhancements

- Blog section
- Project detail pages
- Interactive 3D elements (Three.js)
- Dark/light mode toggle
- Multi-language support

---

Built with ❤️ by driule
