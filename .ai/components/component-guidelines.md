# Component Guidelines

**Last Updated**: 2025-11-17
**Version**: 1.0.0

## Overview

Guidelines for creating, structuring, and maintaining React components in the driule.io project.

## Component Structure

### File Organization

```
components/
├── ComponentName.tsx
```

**Naming Convention**: PascalCase

### Component Template

```tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ComponentName() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-4 relative">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Content */}
        </motion.div>
      </div>
    </section>
  );
}
```

## Component Patterns

### Client Components

All interactive components use `"use client"`:

```tsx
"use client";
```

**When to use**: 
- Components using hooks (useState, useEffect, useRef)
- Components using Framer Motion
- Components with interactivity

### Scroll Animations

Standard pattern for scroll-triggered animations:

```tsx
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });

<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.8 }}
>
```

**Options**:
- `once: true` - Animate only once
- `margin: "-100px"` - Trigger before viewport

### Styling Pattern

Use Tailwind CSS with custom colors:

```tsx
className="bg-space-light/50 backdrop-blur-sm rounded-2xl p-8 
           glow-soft border border-neon-cyan/20 
           hover:border-neon-cyan/50 transition-all duration-300"
```

## Component Types

### Section Components

Full-page sections with:
- `min-h-screen` for full height
- Centered content with max-width
- Scroll animations
- Consistent padding

### Card Components

Reusable card pattern:
- Semi-transparent background
- Backdrop blur
- Rounded corners
- Border with hover state
- Glow effects

### Icon Components

Using Lucide React:
- Consistent sizing
- Color from custom palette
- Hover effects

## Props Patterns

### TypeScript Props

Always type props:

```tsx
interface ComponentProps {
  title: string;
  description?: string;
  items: Item[];
}

export default function Component({ title, description, items }: ComponentProps) {
  // ...
}
```

### Default Props

Use default parameters:

```tsx
function Component({ title = "Default", items = [] }: ComponentProps) {
  // ...
}
```

## Animation Guidelines

### Framer Motion

1. **Consistent Timing**: Use 0.8s for main animations
2. **Stagger Effects**: Use delay for sequential animations
3. **Easing**: Use default easing (ease-in-out)
4. **Performance**: Animate transform and opacity

### Animation Variants

For complex animations, use variants:

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
```

## Styling Guidelines

### Color Usage

Always use custom color palette:

```tsx
// Backgrounds
bg-space-dark
bg-space-deep
bg-space-light

// Text
text-neon-cyan
text-neon-purple
text-neon-pink

// Borders
border-neon-cyan/20
border-neon-purple/30
```

### Spacing

Use Tailwind spacing scale:
- `p-4`, `p-6`, `p-8` for padding
- `gap-3`, `gap-6`, `gap-8` for gaps
- `mb-4`, `mb-6`, `mb-8` for margins

### Responsive Design

Mobile-first approach:

```tsx
className="text-xl md:text-2xl lg:text-3xl"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

## Best Practices

1. **Single Responsibility**: One purpose per component
2. **Reusability**: Extract reusable patterns
3. **Type Safety**: Use TypeScript for all props
4. **Performance**: Optimize animations
5. **Accessibility**: Use semantic HTML
6. **Consistency**: Follow existing patterns

## Component Checklist

When creating a new component:

- [ ] Uses `"use client"` if needed
- [ ] TypeScript types defined
- [ ] Scroll animations implemented
- [ ] Uses custom color palette
- [ ] Responsive design
- [ ] Consistent spacing
- [ ] Hover effects (if interactive)
- [ ] Proper semantic HTML

## 🔗 Related Documentation

- [Component Architecture](../architecture/component-architecture.md)
- [UI Patterns](./ui-patterns.md)
- [Styling Guide](../styling/styling-guide.md)
