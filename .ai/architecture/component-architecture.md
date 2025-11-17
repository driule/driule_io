# Component Architecture

**Last Updated**: 2025-11-17
**Version**: 1.0.0

## Overview

The application uses a component-based architecture with React components organized by page sections. Each component is self-contained with its own styling and animations.

## Component Structure

### Component Organization

All components are located in `/components` directory:

```
components/
├── Hero.tsx       # Hero section - landing area
├── About.tsx      # About section - bio and skills
├── Projects.tsx   # Projects showcase
├── Skills.tsx     # Skills display
└── Contact.tsx    # Contact section
```

### Component Pattern

All components follow this pattern:

1. **Client Component**: Uses `"use client"` directive for interactivity
2. **Framer Motion**: Uses `motion` components for animations
3. **Scroll Animations**: Uses `useInView` hook for scroll-triggered animations
4. **TypeScript**: Fully typed components
5. **Tailwind CSS**: Utility-first styling

## Component Details

### Hero Component

**Purpose**: Main landing section with animated background and introduction

**Features**:
- Animated particle background (20 floating particles)
- Large name display with gradient text
- Tagline and description
- Scroll indicator animation
- Sparkles icon animation

**Key Technologies**:
- Framer Motion for particle animations
- CSS for background starfield
- Lucide React icons

**Animation Strategy**:
- Particles: Random positions, floating animation
- Text: Fade-in with stagger effect
- Icon: Rotating animation

### About Component

**Purpose**: Display bio and skill categories

**Features**:
- Bio text with multiple paragraphs
- Skill icons grid (4 categories)
- Scroll-triggered animations
- Hover effects on skill cards

**Structure**:
- Two-column layout (bio + skills)
- Icon-based skill representation
- Color-coded skill categories

### Projects Component

**Purpose**: Showcase featured projects

**Features**:
- Project cards grid (3 columns)
- Hover effects with gradient overlays
- Tags for each project
- Links to GitHub and live demos
- Scroll-triggered card animations

**Data Structure**:
- Array of project objects
- Each project has: title, description, tags, links

### Skills Component

**Purpose**: Display technical skills by category

**Features**:
- 4 skill categories (Game Dev, Blockchain, Web Dev, Tools)
- Color-coded categories
- Animated skill badges
- Scroll-triggered animations

**Categories**:
- Game Development (neon-pink)
- Blockchain (neon-purple)
- Web Development (neon-cyan)
- Tools & Others (ghibli-yellow)

### Contact Component

**Purpose**: Contact information and social links

**Features**:
- Social media links (Twitter, GitHub, Email)
- Animated link cards
- Hover effects
- External link indicators

## Component Patterns

### Animation Pattern

All components use consistent animation patterns:

```tsx
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });

<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.8 }}
>
  {/* Content */}
</motion.div>
```

### Styling Pattern

Components use Tailwind CSS with custom color palette:

```tsx
className="bg-space-light/50 backdrop-blur-sm rounded-2xl p-8 
           glow-soft border border-neon-cyan/20"
```

### Scroll Animation Pattern

Consistent scroll-triggered animations:

1. Create ref with `useRef`
2. Use `useInView` hook
3. Animate based on `isInView` state
4. Use `once: true` for single animation

## Component Guidelines

### Creating New Components

1. **File Location**: Place in `/components` directory
2. **Naming**: Use PascalCase (e.g., `NewSection.tsx`)
3. **Client Component**: Add `"use client"` if using interactivity
4. **Animations**: Use Framer Motion for consistency
5. **Styling**: Use Tailwind CSS with custom colors
6. **TypeScript**: Fully type all props and state

### Component Best Practices

- Keep components focused and single-purpose
- Use TypeScript for type safety
- Follow existing animation patterns
- Use custom color palette from Tailwind config
- Implement scroll-triggered animations consistently
- Make components responsive (mobile-first)

## 🔗 Related Documentation

- [System Overview](./system-overview.md)
- [Component Guidelines](../components/component-guidelines.md)
- [UI Patterns](../components/ui-patterns.md)
- [Styling Guide](../styling/styling-guide.md)
