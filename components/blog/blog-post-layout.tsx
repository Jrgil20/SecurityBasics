"use client"

import type React from "react"

import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"
import Link from "next/link"
import { ArrowLeft, Calendar, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BlogPostLayoutProps {
  title: string
  createdAt: string
  updatedAt: string
  children: React.ReactNode
}

export function BlogPostLayout({ title, createdAt, updatedAt, children }: BlogPostLayoutProps) {
  const { language } = useLanguage()
  const t = translations[language]

  // Format dates
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat(language === "en" ? "en-US" : "es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4 hover:bg-transparent">
          <Link
            href="/blog"
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.backToBlog}
          </Link>
        </Button>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>

        <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground mb-8">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>
              {t.published}: {formatDate(createdAt)}
            </span>
          </div>

          <div className="flex items-center">
            <RefreshCw className="h-4 w-4 mr-2" />
            <span>
              {t.updated}: {formatDate(updatedAt)}
            </span>
          </div>
        </div>
      </div>

      <article className="prose dark:prose-invert max-w-none">{children}</article>
    </div>
  )
}
