# Blog System

This document explains the blog system used in the Security Basics project.

## Overview

Security Basics includes a comprehensive blog system that provides educational articles on various security topics. The blog system supports multiple languages and is integrated with the theme system.

## Implementation

### Blog Structure

The blog system is structured as follows:

\`\`\`
app/
├── blog/
│   ├── page.tsx                    # Blog listing page
│   ├── social-engineering/
│   │   └── page.tsx                # Social engineering article page
│   ├── phishing/
│   │   └── page.tsx                # Phishing article page
│   ├── password-security/
│   │   └── page.tsx                # Password security article page
│   ├── two-factor-authentication/
│   │   └── page.tsx                # Two-factor authentication article page
│   ├── public-wifi-security/
│   │   └── page.tsx                # Public Wi-Fi security article page
│   ├── data-encryption/
│   │   └── page.tsx                # Data encryption article page
│   └── ransomware-protection/
│       └── page.tsx                # Ransomware protection article page
components/
├── blog/
│   ├── articles/
│   │   ├── social-engineering.tsx  # Social engineering article component
│   │   ├── phishing.tsx            # Phishing article component
│   │   ├── password-security.tsx   # Password security article component
│   │   ├── two-factor-authentication.tsx # Two-factor authentication article component
│   │   ├── public-wifi-security.tsx # Public Wi-Fi security article component
│   │   ├── data-encryption.tsx     # Data encryption article component
│   │   └── ransomware-protection.tsx # Ransomware protection article component
│   ├── blog-header.tsx             # Blog header component
│   ├── blog-posts.tsx              # Blog posts listing component
│   └── blog-post-layout.tsx        # Blog post layout component
\`\`\`

### Blog Pages

#### Blog Listing Page

The blog listing page (`app/blog/page.tsx`) displays a list of all blog posts:

\`\`\`tsx
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHeader } from "@/components/blog/blog-header"
import { BlogPosts } from "@/components/blog/blog-posts"

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <BlogHeader />
        <BlogPosts />
      </main>
      <Footer />
    </div>
  )
}
\`\`\`

#### Blog Post Pages

Each blog post has its own page (`app/blog/[slug]/page.tsx`) that renders the corresponding article component:

\`\`\`tsx
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SocialEngineering } from "@/components/blog/articles/social-engineering"

export default function SocialEngineeringPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <SocialEngineering />
      </main>
      <Footer />
    </div>
  )
}
\`\`\`

### Blog Components

#### Blog Post Layout

The `BlogPostLayout` component provides a consistent layout for all blog posts:

\`\`\`tsx
"use client"

import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { es } from "date-fns/locale"

interface BlogPostLayoutProps {
  title: string
  createdAt: Date
  updatedAt?: Date
  children: React.ReactNode
}

export function BlogPostLayout({ title, createdAt, updatedAt, children }: BlogPostLayoutProps) {
  const { language } = useLanguage()

  const formatDate = (date: Date) => {
    return format(date, "MMMM d, yyyy", {
      locale: language === "es" ? es : undefined,
    })
  }

  return (
    <div className="container py-10">
      <div className="mb-6">
        <Button variant="outline" size="sm" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === "en" ? "Back to Blog" : "Volver al Blog"}
          </Link>
        </Button>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h1>{title}</h1>
        <div className="text-sm text-muted-foreground mb-8">
          <p>
            {language === "en" ? "Published on" : "Publicado el"} {formatDate(createdAt)}
            {updatedAt && (
              <>
                {" "}
                • {language === "en" ? "Updated on" : "Actualizado el"} {formatDate(updatedAt)}
              </>
            )}
          </p>
        </div>
        {children}
      </div>
    </div>
  )
}
\`\`\`

#### Blog Posts Listing

The `BlogPosts` component displays a grid of blog post cards:

\`\`\`tsx
"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BlogPosts() {
  const { t } = useLanguage()

  const posts = [
    {
      slug: "social-engineering",
      title: t("socialEngineeringTitle"),
      description: t("socialEngineeringDesc"),
    },
    {
      slug: "phishing",
      title: t("phishingTitle"),
      description: t("phishingDesc"),
    },
    {
      slug: "password-security",
      title: t("passwordSecurityTitle"),
      description: t("passwordSecurityDesc"),
    },
    {
      slug: "two-factor-authentication",
      title: t("twoFactorTitle"),
      description: t("twoFactorDesc"),
    },
    {
      slug: "public-wifi-security",
      title: t("publicWifiTitle"),
      description: t("publicWifiDesc"),
    },
    {
      slug: "data-encryption",
      title: t("encryptionTitle"),
      description: t("encryptionDesc"),
    },
    {
      slug: "ransomware-protection",
      title: t("ransomwareTitle"),
      description: t("ransomwareDesc"),
    },
  ]

  return (
    <div className="container py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.slug}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link href={`/blog/${post.slug}`}>{t("readMore")}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
\`\`\`

### Article Components

Each article is implemented as a separate component that uses the `BlogPostLayout` component:

\`\`\`tsx
"use client"

import { useLanguage } from "@/components/language-provider"
import { BlogPostLayout } from "@/components/blog/blog-post-layout"

export function SocialEngineering() {
  const { language } = useLanguage()

  const createdAt = new Date("2023-04-15")
  const updatedAt = new Date("2023-06-20")

  return (
    <BlogPostLayout
      title={language === "en" ? "Social Engineering" : "Ingeniería Social"}
      createdAt={createdAt}
      updatedAt={updatedAt}
    >
      {language === "en" ? (
        <>
          <h2>What is Social Engineering?</h2>
          <p>
            Social engineering is the art of manipulating people into performing actions or divulging confidential
            information. It's a technique that relies on human interaction and often involves tricking people into
            breaking normal security procedures.
          </p>
          {/* More English content... */}
        </>
      ) : (
        <>
          <h2>¿Qué es la Ingeniería Social?</h2>
          <p>
            La ingeniería social es el arte de manipular a las personas para que realicen acciones o divulguen
            información confidencial. Es una técnica que se basa en la interacción humana y a menudo implica engañar a
            las personas para que rompan los procedimientos normales de seguridad.
          </p>
          {/* More Spanish content... */}
        </>
      )}
    </BlogPostLayout>
  )
}
\`\`\`

## Multilingual Support

All blog content is available in both English and Spanish, with the appropriate content displayed based on the user's language preference.

## Theme Support

Blog content adapts to the current theme, with appropriate styling for both light and dark modes.

## Next Steps

- [Security Tools](./security-tools.md)
- [Internationalization](./internationalization.md)
- [Theme System](./theme-system.md)
\`\`\`

Let's create the security tools documentation:
