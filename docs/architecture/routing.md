# Routing System

This document explains the routing system used in the Security Basics project.

## Next.js App Router

Security Basics uses the Next.js App Router, which provides a file-based routing system. The App Router uses the file system to define routes, with special files like `page.tsx`, `layout.tsx`, and `loading.tsx` serving specific purposes.

## Route Structure

\`\`\`
app/
├── layout.tsx          # Root layout
├── page.tsx            # Home page
├── blog/
│   ├── page.tsx        # Blog listing page
│   ├── [slug]/
│   │   └── page.tsx    # Dynamic blog post page
├── documentation/
│   ├── page.tsx        # Documentation home page
│   ├── [section]/
│   │   └── page.tsx    # Dynamic documentation section page
\`\`\`

## Special Files

- `layout.tsx`: Defines a UI that is shared between multiple pages
- `page.tsx`: Defines a unique UI for a route and makes it publicly accessible
- `loading.tsx`: Creates loading UI for a specific route segment
- `error.tsx`: Creates error UI for a specific route segment
- `not-found.tsx`: Creates UI for 404 errors

## Route Types

### Static Routes

Static routes have a fixed path that doesn't change:

- `/`: Home page
- `/blog`: Blog listing page
- `/documentation`: Documentation home page

### Dynamic Routes

Dynamic routes have a path that depends on external data:

- `/blog/[slug]`: Individual blog post pages
- `/documentation/[section]`: Individual documentation section pages

## Route Navigation

Navigation between routes is handled using the Next.js `Link` component:

\`\`\`tsx
import Link from 'next/link'

<Link href="/blog">Blog</Link>
\`\`\`

For programmatic navigation, we use the `useRouter` hook:

\`\`\`tsx
'use client'

import { useRouter } from 'next/navigation'

const router = useRouter()
router.push('/blog')
\`\`\`

## Route Groups

Route groups are used to organize routes without affecting the URL structure:

\`\`\`
app/
├── (marketing)/
│   ├── about/
│   │   └── page.tsx    # /about
│   └── contact/
│       └── page.tsx    # /contact
├── (dashboard)/
│   └── dashboard/
│       └── page.tsx    # /dashboard
\`\`\`

## API Routes

API routes are defined in the `app/api` directory:

\`\`\`
app/
├── api/
│   ├── documentation/
│   │   └── route.ts    # /api/documentation
\`\`\`

## Next Steps

- [State Management](./state-management.md)
- [Component Organization](./component-organization.md)
- [Project Structure](./project-structure.md)
\`\`\`

Let's create the state management documentation:
