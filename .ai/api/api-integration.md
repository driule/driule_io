# API Integration

**Last Updated**: 2025-11-17
**Version**: 1.0.0

## Overview

The current application is a static site with no API integration. All data is static and embedded in components. This document outlines potential API integration patterns for future enhancements.

## Current State

### Static Data

All data is currently static:

- **Projects**: Hardcoded array in `components/Projects.tsx`
- **Skills**: Hardcoded array in `components/Skills.tsx`
- **Contact Links**: Hardcoded array in `components/Contact.tsx`
- **About Content**: Hardcoded text in `components/About.tsx`

### No API Calls

- No fetch requests
- No external APIs
- No data fetching hooks
- No server-side data fetching

## Future API Integration

### Potential Use Cases

1. **Dynamic Projects**: Fetch projects from CMS or API
2. **Blog Posts**: Fetch blog content
3. **Analytics**: Track page views
4. **Contact Form**: Submit contact form data
5. **Social Media**: Fetch latest tweets/posts

### Integration Patterns

#### Next.js API Routes

For server-side API:

```tsx
// app/api/projects/route.ts
export async function GET() {
  const projects = await fetchProjects();
  return Response.json(projects);
}
```

#### Client-Side Fetching

For external APIs:

```tsx
"use client";

useEffect(() => {
  fetch('/api/projects')
    .then(res => res.json())
    .then(data => setProjects(data));
}, []);
```

#### Server Components

For SSG/SSR:

```tsx
// app/projects/page.tsx
async function getProjects() {
  const res = await fetch('/api/projects');
  return res.json();
}

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectsList projects={projects} />;
}
```

## Data Fetching Libraries

### Potential Options

1. **Native Fetch**: Built-in, simple
2. **SWR**: React hooks for data fetching
3. **React Query**: Powerful data fetching
4. **Axios**: HTTP client

### Recommended: SWR

For client-side data fetching:

```tsx
import useSWR from 'swr';

function Projects() {
  const { data, error } = useSWR('/api/projects', fetcher);
  
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  
  return <ProjectsList projects={data} />;
}
```

## API Structure

### Projects API

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
}
```

### Skills API

```typescript
interface SkillCategory {
  category: string;
  skills: string[];
  color: string;
}
```

## Error Handling

### Error Patterns

```tsx
try {
  const data = await fetchData();
} catch (error) {
  console.error('Failed to fetch:', error);
  // Fallback to static data
}
```

### Loading States

```tsx
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [data, setData] = useState(null);
```

## Best Practices

1. **Fallback Data**: Always have static fallback
2. **Error Handling**: Graceful error handling
3. **Loading States**: Show loading indicators
4. **Caching**: Cache API responses
5. **Type Safety**: Type API responses

## 🔗 Related Documentation

- [System Overview](../architecture/system-overview.md)
- [State Management](../state-management/state-overview.md)
