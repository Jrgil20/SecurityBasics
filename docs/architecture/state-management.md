# State Management

This document explains the state management approach used in the Security Basics project.

## Overview

Security Basics uses a combination of React's built-in state management features and custom context providers to manage application state. The project follows a hierarchical state management approach, where state is managed at the appropriate level of the component tree.

## State Management Approaches

### Local Component State

For component-specific state that doesn't need to be shared, we use React's `useState` and `useReducer` hooks:

\`\`\`tsx
const [isOpen, setIsOpen] = useState(false)
\`\`\`

### Context API

For state that needs to be shared across multiple components, we use React's Context API with custom providers:

- `LanguageProvider`: Manages the current language and provides translation functions
- `ThemeProvider`: Manages the current theme (light/dark)

### Server Components

For data that can be fetched on the server, we use React Server Components to fetch and render data without client-side JavaScript:

\`\`\`tsx
// This is a Server Component
async function BlogPosts() {
  const posts = await getBlogPosts()
  return (
    <div>
      {posts.map(post => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
\`\`\`

## Context Providers

### Language Provider

The `LanguageProvider` manages the current language and provides translation functions:

\`\`\`tsx
// components/language-provider.tsx
'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { translations } from '@/lib/translations'

type Language = 'en' | 'es'
type TranslationKey = keyof typeof translations.en

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: TranslationKey) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
\`\`\`

### Theme Provider

The `ThemeProvider` from `next-themes` manages the current theme:

\`\`\`tsx
// app/layout.tsx
import { ThemeProvider } from '@/components/theme-provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
\`\`\`

## State Flow

1. **User Interaction**: User interacts with the UI (e.g., clicks a button)
2. **Event Handler**: Event handler updates local state or calls a context function
3. **State Update**: State is updated in the component or context
4. **Re-render**: Components that depend on the updated state re-render

## Best Practices

1. **Minimize Context Usage**: Only use context for state that truly needs to be global
2. **Colocate State**: Keep state as close as possible to where it's used
3. **Use Server Components**: Fetch data on the server when possible
4. **Avoid Prop Drilling**: Use context or composition to avoid passing props through many layers

## Next Steps

- [Component Organization](./component-organization.md)
- [Project Structure](./project-structure.md)
- [Routing System](./routing.md)
\`\`\`

Let's create the component organization documentation:
