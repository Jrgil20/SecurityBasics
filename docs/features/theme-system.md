# Theme System

This document explains the theme system used in the Security Basics project.

## Overview

Security Basics supports both light and dark themes, with automatic detection of the user's system preference. The theme system is built using the `next-themes` library, which provides a simple API for theme management.

## Implementation

### Theme Provider

The theme system is implemented using the `ThemeProvider` component from `next-themes`:

\`\`\`tsx
// components/theme-provider.tsx
'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
\`\`\`

The `ThemeProvider` is included in the root layout:

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

### Theme Toggle

The application includes a theme toggle button that allows users to switch between light and dark themes:

\`\`\`tsx
// components/theme-toggle.tsx
'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Sun className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        // Explicitly set to light or dark, ignoring system preference
        const newTheme =
          theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
            ? "light"
            : "dark"
        setTheme(newTheme)
      }}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
\`\`\`

### CSS Variables

The theme system uses CSS variables to define colors for light and dark themes:

\`\`\`css
/* app/globals.css */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... other light theme variables ... */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... other dark theme variables ... */
}
\`\`\`

### Using Themes in Components

Components can adapt to the current theme using Tailwind's dark mode classes:

\`\`\`tsx
<div className="bg-background text-foreground">
  This content adapts to the current theme
</div>
\`\`\`

Components can also programmatically access and modify the current theme:

\`\`\`tsx
'use client'

import { useTheme } from 'next-themes'

export function MyComponent() {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Toggle theme
      </button>
    </div>
  )
}
\`\`\`

## Theme Features

The theme system offers several features:

1. **Light and Dark Modes**: Full support for light and dark color schemes
2. **System Preference Detection**: Automatically detects and uses the system preference
3. **Manual Override**: Allows users to manually override the system preference
4. **Persistence**: Remembers the user's theme preference across sessions
5. **Smooth Transitions**: Provides smooth transitions between themes
6. **Hydration Handling**: Prevents hydration mismatches with server-rendered content

## Accessibility Considerations

The theme system includes several accessibility enhancements:

1. **Proper aria-label**: The theme toggle button includes appropriate aria labels
2. **High Contrast Colors**: Theme colors are chosen to maintain sufficient contrast ratios
3. **suppressHydrationWarning**: Prevents hydration mismatch warnings during initial load
4. **Visual Indicators**: The theme toggle button visually indicates the current theme

## Next Steps

- [Blog System](./blog-system.md)
- [Security Tools](./security-tools.md)
- [Internationalization](./internationalization.md)
\`\`\`

Let's create the blog system documentation:
