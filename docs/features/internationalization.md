# Internationalization

This document explains the internationalization (i18n) system used in the Security Basics project.

## Overview

Security Basics supports multiple languages through a custom internationalization system built with React Context. Currently, the application supports English and Spanish, with the ability to easily add more languages in the future.

## Implementation

### Language Provider

The core of the i18n system is the `LanguageProvider` component, which manages the current language and provides translation functions:

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

### Translation Strings

Translation strings are stored in a central file:

\`\`\`tsx
// lib/translations.ts
export const translations = {
  en: {
    // English translations
    blog: "Blog",
    toggleTheme: "Toggle theme",
    // ...
  },
  es: {
    // Spanish translations
    blog: "Blog",
    toggleTheme: "Cambiar tema",
    // ...
  }
}
\`\`\`

### Using Translations

Components can access translations using the `useLanguage` hook:

\`\`\`tsx
'use client'

import { useLanguage } from '@/components/language-provider'

export function MyComponent() {
  const { t, language, setLanguage } = useLanguage()

  return (
    <div>
      <h1>{t('heroTitle')}</h1>
      <p>{t('heroSubtitle')}</p>
      <button onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}>
        {t('language')}
      </button>
    </div>
  )
}
\`\`\`

### Language Switcher

The application includes a language switcher in the header:

\`\`\`tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" size="icon">
      <Globe className="h-5 w-5" />
      <span className="sr-only">{t("language")}</span>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuItem onClick={() => setLanguage("en")}>
      {t("english")} {language === "en" && "✓"}
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => setLanguage("es")}>
      {t("spanish")} {language === "es" && "✓"}
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
\`\`\`

## Content Translation

All user-facing content in the application is translated, including:

- **UI Elements**: Buttons, labels, etc.
- **Blog Articles**: Full blog articles are available in both languages
- **Security Tools**: All interactive tools are fully translated
- **Documentation**: Documentation is available in both languages

## Adding a New Language

To add a new language:

1. Add the new language to the `Language` type in `language-provider.tsx`
2. Add translations for the new language in `translations.ts`
3. Add a new option in the language switcher

## Best Practices

1. **Use Translation Keys**: Always use translation keys instead of hardcoded strings
2. **Keep Keys Organized**: Organize translation keys by feature or section
3. **Use Descriptive Keys**: Use descriptive keys that indicate the purpose of the string
4. **Handle Missing Translations**: Provide fallbacks for missing translations
5. **Test All Languages**: Test the application in all supported languages

## Next Steps

- [Theme System](./theme-system.md)
- [Blog System](./blog-system.md)
- [Security Tools](./security-tools.md)
\`\`\`

Let's create the theme system documentation:
