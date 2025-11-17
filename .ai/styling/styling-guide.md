# Styling Guide

**Last Updated**: 2025-11-17
**Version**: 1.0.0

## Overview

The project uses Tailwind CSS for utility-first styling with a custom design system combining sci-fi high-tech aesthetics with Ghibli-inspired softness.

## Styling Solution

### Tailwind CSS

- **Framework**: Tailwind CSS v3.4.7
- **Approach**: Utility-first CSS
- **Configuration**: `tailwind.config.ts`
- **PostCSS**: Used for processing Tailwind

### Global Styles

Global styles are defined in `app/globals.css`:
- CSS reset and base styles
- Custom CSS animations (starfield background)
- Scrollbar styling
- Utility classes (glow effects, gradients)

## Color Palette

### Space Colors (Dark Backgrounds)

```ts
space: {
  dark: "#0a0e27",   // Deepest space blue
  deep: "#1a1f3a",   // Deep space blue
  light: "#2a2f4a",  // Lighter space blue
}
```

**Usage**: Backgrounds, cards, containers

### Neon Colors (High-Tech Accents)

```ts
neon: {
  cyan: "#00f5ff",    // Bright cyan
  purple: "#b794f6",  // Soft purple
  pink: "#ff6b9d",    // Warm pink
}
```

**Usage**: Text accents, borders, hover effects, highlights

### Ghibli Colors (Soft Pastels)

```ts
ghibli: {
  green: "#a8e6cf",   // Soft mint green
  yellow: "#ffd93d",  // Warm yellow
  blue: "#a8d8ea",    // Soft sky blue
}
```

**Usage**: Subtle accents, soft highlights, organic elements

## Typography

### Font Families

```ts
fontFamily: {
  futuristic: ["Orbitron", "sans-serif"],  // Headings
  body: ["Inter", "sans-serif"],           // Body text
}
```

**Usage**:
- `font-futuristic`: Headings, titles, emphasis
- `font-body`: Body text, paragraphs

### Font Loading

Fonts are loaded via Next.js `next/font/google`:
- Inter (body)
- Orbitron (headings)

## Animations

### Custom Animations

Defined in `tailwind.config.ts`:

#### Float Animation
```ts
float: "float 6s ease-in-out infinite"
```
- Smooth up/down floating motion
- Used for gentle element movement

#### Glow Animation
```ts
glow: "glow 2s ease-in-out infinite alternate"
```
- Pulsing glow effect
- Used for neon accents

#### FadeIn Animation
```ts
fadeIn: "fadeIn 0.6s ease-in"
```
- Fade in with slight upward movement
- Used for initial element appearance

### CSS Animations

Global CSS animations in `globals.css`:

#### Starfield Background
- Animated starfield using radial gradients
- Continuous slow movement
- Multiple colored stars (cyan, purple, pink, green)

## Styling Patterns

### Card Pattern

```tsx
className="bg-space-light/50 backdrop-blur-sm rounded-2xl p-8 
           glow-soft border border-neon-cyan/20 
           hover:border-neon-cyan/50 transition-all duration-300"
```

**Elements**:
- Semi-transparent background
- Backdrop blur for glassmorphism
- Rounded corners
- Soft glow effect
- Border with hover state
- Smooth transitions

### Gradient Text

```tsx
className="text-gradient"
```

**CSS**:
```css
.text-gradient {
  background: linear-gradient(135deg, #00f5ff 0%, #b794f6 50%, #ff6b9d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Button/Link Pattern

```tsx
className="px-6 py-4 bg-space-light/50 backdrop-blur-sm rounded-xl 
           border border-neon-cyan/20 hover:border-neon-cyan/50 
           transition-all duration-300 text-neon-cyan hover:text-neon-pink"
```

## Responsive Design

### Breakpoints

Tailwind default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Mobile-First Approach

- Base styles for mobile
- Progressive enhancement for larger screens
- Example: `text-xl md:text-2xl`

## Utility Classes

### Custom Utilities

Defined in `globals.css`:

#### Glow Effects
```css
.glow-soft          /* Soft cyan glow */
.glow-soft-purple   /* Soft purple glow */
```

#### Gradient Text
```css
.text-gradient      /* Multi-color gradient text */
```

#### Background Gradients
```css
.bg-gradient-ghibli /* Soft Ghibli gradient */
```

## Design Tokens

### Spacing
- Consistent spacing scale (Tailwind default)
- Common: `p-4`, `p-6`, `p-8` for padding
- Common: `gap-3`, `gap-6`, `gap-8` for gaps

### Border Radius
- `rounded-xl`: 12px (cards, buttons)
- `rounded-2xl`: 16px (large cards)
- `rounded-full`: Pills, badges

### Opacity
- `/50`: 50% opacity (backgrounds)
- `/20`: 20% opacity (borders)
- `/30`: 30% opacity (borders)

## Best Practices

1. **Use Custom Colors**: Always use custom color palette
2. **Consistent Spacing**: Use Tailwind spacing scale
3. **Animation Consistency**: Use defined animations
4. **Mobile-First**: Start with mobile, enhance for desktop
5. **Semantic Classes**: Use meaningful class names
6. **Performance**: Avoid excessive custom CSS

## 🔗 Related Documentation

- [UI Patterns](../components/ui-patterns.md)
- [Component Guidelines](../components/component-guidelines.md)
- [System Overview](../architecture/system-overview.md)
