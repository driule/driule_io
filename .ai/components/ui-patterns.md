# UI Patterns

**Last Updated**: 2025-11-17
**Version**: 1.0.0

## Overview

Common UI patterns and design elements used throughout the driule.io website.

## Design System

### Color System

#### Background Colors
- **Space Dark** (`#0a0e27`): Deepest background
- **Space Deep** (`#1a1f3a`): Card backgrounds
- **Space Light** (`#2a2f4a`): Lighter cards

#### Accent Colors
- **Neon Cyan** (`#00f5ff`): Primary accent
- **Neon Purple** (`#b794f6`): Secondary accent
- **Neon Pink** (`#ff6b9d`): Tertiary accent

#### Soft Colors
- **Ghibli Green** (`#a8e6cf`): Soft highlights
- **Ghibli Yellow** (`#ffd93d`): Warm accents
- **Ghibli Blue** (`#a8d8ea`): Sky accents

## UI Patterns

### Card Pattern

**Usage**: Project cards, skill cards, contact cards

```tsx
<div className="bg-space-light/50 backdrop-blur-sm rounded-2xl p-6 
                glow-soft border border-neon-cyan/20 
                hover:border-neon-cyan/50 transition-all duration-300">
  {/* Content */}
</div>
```

**Characteristics**:
- Semi-transparent background
- Backdrop blur (glassmorphism)
- Rounded corners (2xl)
- Soft glow effect
- Border with hover state
- Smooth transitions

### Gradient Text Pattern

**Usage**: Headings, titles, emphasis

```tsx
<h1 className="text-gradient">Title</h1>
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

**Usage**: Social links, CTAs, navigation

```tsx
<a className="flex items-center gap-3 px-6 py-4 
              bg-space-light/50 backdrop-blur-sm rounded-xl 
              border border-neon-cyan/20 hover:border-neon-cyan/50 
              transition-all duration-300 text-neon-cyan hover:text-neon-pink">
  <Icon className="w-5 h-5" />
  <span>Label</span>
</a>
```

**Characteristics**:
- Card-like appearance
- Icon + text layout
- Color change on hover
- Border highlight on hover

### Badge/Tag Pattern

**Usage**: Project tags, skill badges

```tsx
<span className="px-3 py-1 bg-neon-cyan/10 text-neon-cyan 
                 text-xs rounded-full border border-neon-cyan/30">
  Tag
</span>
```

**Characteristics**:
- Small padding
- Rounded full (pill shape)
- Colored background with low opacity
- Matching border

### Section Pattern

**Usage**: All page sections

```tsx
<section className="min-h-screen flex items-center justify-center py-20 px-4 relative">
  <div className="max-w-6xl mx-auto w-full">
    {/* Content */}
  </div>
</section>
```

**Characteristics**:
- Full viewport height minimum
- Centered content
- Max width container (6xl)
- Consistent padding

## Animation Patterns

### Fade In Pattern

**Usage**: Text, content blocks

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

### Slide In Pattern

**Usage**: Cards, sections

```tsx
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
  transition={{ duration: 0.8 }}
>
```

### Scale Pattern

**Usage**: Icons, badges

```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>
```

### Stagger Pattern

**Usage**: Lists, grids

```tsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    {/* Item */}
  </motion.div>
))}
```

## Typography Patterns

### Heading Pattern

```tsx
<h2 className="text-5xl md:text-6xl font-futuristic font-bold mb-12 text-center">
  <span className="text-gradient">Title</span>
</h2>
```

**Characteristics**:
- Large size (5xl-6xl)
- Futuristic font
- Bold weight
- Gradient text
- Centered

### Body Text Pattern

```tsx
<p className="text-lg text-gray-300 leading-relaxed">
  Content text
</p>
```

**Characteristics**:
- Readable size (lg)
- Gray color (300)
- Relaxed line height

## Layout Patterns

### Grid Pattern

**Usage**: Projects, skills

```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Items */}
</div>
```

### Flex Pattern

**Usage**: Navigation, buttons

```tsx
<div className="flex flex-wrap justify-center gap-6">
  {/* Items */}
</div>
```

## Responsive Patterns

### Text Scaling

```tsx
className="text-xl md:text-2xl lg:text-3xl"
```

### Grid Columns

```tsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

### Spacing

```tsx
className="p-4 md:p-6 lg:p-8"
```

## 🔗 Related Documentation

- [Component Guidelines](./component-guidelines.md)
- [Styling Guide](../styling/styling-guide.md)
- [Component Architecture](../architecture/component-architecture.md)
