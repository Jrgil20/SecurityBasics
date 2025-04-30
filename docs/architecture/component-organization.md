# Component Organization

This document explains how components are organized in the Security Basics project.

## Component Types

Components in the Security Basics project are organized into several categories:

1. **Page Components**: Components that represent entire pages
2. **Layout Components**: Components that define the layout of pages
3. **UI Components**: Reusable UI elements like buttons, cards, etc.
4. **Feature Components**: Components that implement specific features
5. **Provider Components**: Components that provide context to the application

## Component Directory Structure

\`\`\`
components/
├── blog/                 # Blog-related components
│   ├── articles/         # Blog article components
│   ├── blog-header.tsx   # Blog header component
│   ├── blog-posts.tsx    # Blog posts listing component
│   └── blog-post-layout.tsx # Blog post layout component
├── documentation/        # Documentation-related components
├── sections/             # Section components for the home page
├── ui/                   # UI components (shadcn/ui)
├── footer.tsx            # Footer component
├── header.tsx            # Header component
├── hero.tsx              # Hero component
├── language-provider.tsx # Language provider component
├── security-sections.tsx # Security sections component
├── security-tools.tsx    # Security tools component
└── theme-toggle.tsx      # Theme toggle component
\`\`\`

## Component Naming Conventions

- **PascalCase**: All component names use PascalCase (e.g., `BlogPostLayout`)
- **Descriptive Names**: Component names should be descriptive and indicate their purpose
- **Consistent Suffixes**: Use consistent suffixes for similar components (e.g., `-layout`, `-provider`)

## Server vs. Client Components

Next.js 13+ introduces the concept of Server and Client Components:

### Server Components

Server Components are rendered on the server and don't include any client-side JavaScript. They're the default in Next.js 13+ with the App Router.

\`\`\`tsx
// This is a Server Component (no 'use client' directive)
export default function BlogPosts() {
  return (
    <div>
      <h1>Blog Posts</h1>
      {/* ... */}
    </div>
  )
}
\`\`\`

### Client Components

Client Components are rendered on the client and can include interactive features like event handlers and hooks.

\`\`\`tsx
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
\`\`\`

## Component Composition

Components are composed using a hierarchical structure:

1. **Page Components**: Compose layout and feature components
2. **Layout Components**: Compose UI components and define the overall structure
3. **Feature Components**: Compose UI components to implement specific features
4. **UI Components**: Basic building blocks that can be composed into more complex components

## Component Props

Components use TypeScript interfaces to define their props:

\`\`\`tsx
interface BlogPostProps {
  title: string
  content: string
  date: string
  author: string
}

export function BlogPost({ title, content, date, author }: BlogPostProps) {
  // ...
}
\`\`\`

## Component Best Practices

1. **Single Responsibility**: Each component should have a single responsibility
2. **Reusability**: Components should be designed for reuse when appropriate
3. **Composition**: Prefer composition over inheritance
4. **Prop Drilling**: Avoid excessive prop drilling by using context or composition
5. **Server vs. Client**: Use Server Components when possible for better performance

## Next Steps

- [Project Structure](./project-structure.md)
- [Routing System](./routing.md)
- [State Management](./state-management.md)
\`\`\`

Now, let's create the features documentation:
