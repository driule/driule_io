# State Management

**Last Updated**: 2025-11-17
**Version**: 1.0.0

## Overview

The application uses minimal state management. Most components are presentational with animations controlled by Framer Motion and scroll-triggered visibility.

## State Management Approach

### No Global State

- **No Context API**: Not needed for current scope
- **No State Management Library**: Redux/Zustand not required
- **Component-Level State**: Only local component state

### State Patterns

#### Scroll Visibility State

Components use Framer Motion's `useInView` hook:

```tsx
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });
```

**Purpose**: Trigger animations when sections enter viewport

#### Animation State

Framer Motion handles animation state internally:

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
/>
```

## Component State

### Hero Component

- **No State**: Pure presentational
- **Animations**: Framer Motion controlled
- **Particles**: Random positions (computed, not state)

### About Component

- **Scroll State**: `useInView` for animations
- **No Data State**: Static content

### Projects Component

- **Scroll State**: `useInView` for animations
- **Data**: Static array (could be moved to props/API)

### Skills Component

- **Scroll State**: `useInView` for animations
- **Data**: Static array

### Contact Component

- **Scroll State**: `useInView` for animations
- **Links**: Static array

## Data Management

### Static Data

Currently, all data is static:

```tsx
const projects = [
  { title: "...", description: "...", ... }
];
```

### Future Considerations

If adding dynamic data:

1. **API Routes**: Next.js API routes
2. **External API**: Fetch from external service
3. **CMS**: Headless CMS integration
4. **State Management**: Consider Zustand or Context API

## Animation State

### Framer Motion State

Framer Motion manages animation state:
- Initial state
- Animate state
- Transition configuration
- Variants (if used)

### Scroll State

`useInView` hook provides:
- Boolean: `isInView`
- Ref: Element reference
- Options: `once`, `margin`, etc.

## Best Practices

1. **Minimal State**: Only add state when needed
2. **Animation State**: Let Framer Motion handle it
3. **Scroll State**: Use `useInView` for scroll animations
4. **Static Data**: Keep data static until dynamic needed

## 🔗 Related Documentation

- [System Overview](../architecture/system-overview.md)
- [Component Architecture](../architecture/component-architecture.md)
