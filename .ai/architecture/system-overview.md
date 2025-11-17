# System Overview

**Last Updated**: 2025-11-17
**Version**: 1.0.0

## Overview

driule.io is a personal brand website built with Next.js 14, showcasing expertise in game development, blockchain, web development, and innovative projects. The site features a stunning animated landing page combining sci-fi high-tech aesthetics with soft Ghibli-inspired animations.

## Architecture

### Application Structure

The application follows Next.js 14 App Router architecture:

```
driule_io/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main landing page
│   └── globals.css        # Global styles and animations
├── components/             # React components
│   ├── Hero.tsx           # Hero section with animated particles
│   ├── About.tsx          # About section
│   ├── Projects.tsx       # Projects showcase
│   ├── Skills.tsx         # Skills section
│   └── Contact.tsx        # Contact section
├── public/                # Static assets
│   └── CNAME              # Custom domain configuration
└── .ai/                   # AI documentation
```

### Key Architectural Decisions

1. **Static Site Generation (SSG)**
   - Uses `output: 'export'` for static export
   - Optimized for GitHub Pages deployment
   - No server-side rendering needed for landing page

2. **Component-Based Architecture**
   - Each section is a separate component
   - Client components for interactivity (`"use client"`)
   - Reusable patterns with Framer Motion

3. **Animation Strategy**
   - Framer Motion for component animations
   - CSS animations for background effects
   - Scroll-triggered animations using `useInView`

4. **Styling Approach**
   - Tailwind CSS for utility-first styling
   - Custom color palette (space, neon, ghibli)
   - Custom animations and keyframes
   - Global CSS for background effects

## Technology Stack

### Core Framework
- **Next.js 14** (App Router) - React framework with SSG
- **TypeScript** - Type safety
- **React 18** - UI library

### Styling & Animation
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Deployment
- **GitHub Pages** - Static hosting
- **Cloudflare** - DNS and CDN
- **GitHub Actions** - CI/CD pipeline

## Key Components

### Page Structure

The main page (`app/page.tsx`) composes all sections:

```tsx
<main>
  <Hero />      // Hero section with animated particles
  <About />     // About section with bio and skills
  <Projects />  // Projects showcase grid
  <Skills />    // Skills categorized display
  <Contact />   // Contact section with social links
</main>
```

### Component Hierarchy

```
RootLayout (app/layout.tsx)
└── Home (app/page.tsx)
    ├── Hero
    ├── About
    ├── Projects
    ├── Skills
    └── Contact
```

## Design Philosophy

### Sci-Fi High-Tech
- Dark space backgrounds (#0a0e27, #1a1f3a)
- Neon accents (cyan, purple, pink)
- Futuristic typography (Orbitron)
- Animated particles and stars

### Ghibli Softness
- Pastel gradients (soft greens, yellows, blues)
- Organic shapes and animations
- Gentle floating effects
- Warm, approachable feel

## Performance Considerations

1. **Static Export**: Pre-rendered HTML for fast initial load
2. **Code Splitting**: Automatic via Next.js
3. **Image Optimization**: Unoptimized for static export (GitHub Pages)
4. **Animation Performance**: Framer Motion with optimized animations
5. **CSS Optimization**: Tailwind purges unused styles

## 🔗 Related Documentation

- [Component Architecture](./component-architecture.md)
- [Routing](./routing.md)
- [State Management](../state-management/state-overview.md)
- [Styling Guide](../styling/styling-guide.md)
- [Component Guidelines](../components/component-guidelines.md)
