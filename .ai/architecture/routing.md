# Routing

**Last Updated**: 2025-11-17
**Version**: 1.0.0

## Overview

The application uses Next.js 14 App Router with a single-page architecture. All content is displayed on the main landing page with smooth scroll navigation.

## Routing Structure

### App Router

Next.js 14 App Router structure:

```
app/
├── layout.tsx    # Root layout (metadata, fonts)
├── page.tsx      # Main landing page
└── globals.css   # Global styles
```

### Single Page Application

The site is a single-page application:
- **Main Route**: `/` - Landing page with all sections
- **No Additional Routes**: All content on one page
- **Navigation**: Smooth scroll between sections

## Page Structure

### Main Page (`app/page.tsx`)

The main page composes all sections:

```tsx
export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
```

### Section Navigation

Sections are navigated via:
- **Scroll**: Natural page scroll
- **Smooth Scroll**: CSS `scroll-behavior: smooth`
- **No Hash Links**: No anchor links needed

## Layout Structure

### Root Layout (`app/layout.tsx`)

Provides:
- HTML structure
- Metadata (SEO, OpenGraph, Twitter)
- Font loading (Inter, Orbitron)
- Global CSS import

### Metadata

SEO metadata includes:
- Title: "driule | Developer & Creator"
- Description: Project description
- Keywords: Relevant keywords
- OpenGraph tags
- Twitter card metadata

## Static Export

### Configuration

```js
// next.config.js
output: 'export'
```

### Deployment

- **GitHub Pages**: Static HTML export
- **No Server**: Fully static site
- **No API Routes**: Not used

## Future Routing Considerations

If adding routes in the future:

1. **Blog**: `/blog` or `/blog/[slug]`
2. **Projects**: `/projects/[id]`
3. **About**: `/about` (if separating from landing)

## 🔗 Related Documentation

- [System Overview](./system-overview.md)
- [Component Architecture](./component-architecture.md)
