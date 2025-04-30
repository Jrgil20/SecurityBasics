# Documentation System

This document explains the documentation system used in the Security Basics project.

## Overview

The Security Basics documentation system is designed to provide comprehensive, accessible, and maintainable documentation for the project. The documentation covers all aspects of the project, from architecture to implementation details, and is available in both English and Spanish.

## Implementation

### Documentation Structure

The documentation is organized into a hierarchical structure:

\`\`\`
docs/
├── index.md                                # Main documentation index
├── file-listing.md                         # List of all documentation files
├── getting-started/                        # Getting started guides
├── architecture/                           # Architecture documentation
├── features/                               # Feature documentation
├── components/                             # Component documentation
├── development/                            # Development guides
├── api/                                    # API documentation
└── diagrams/                               # Diagrams and visual aids
\`\`\`

### Documentation Viewer

The documentation is displayed using the `DocumentationViewer` component:

\`\`\`tsx
// components/documentation/documentation-viewer.tsx
"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from 'lucide-react'
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

interface DocumentationViewerProps {
  path: string
  showBackButton?: boolean
  backUrl?: string
}

export function DocumentationViewer({ 
  path, 
  showBackButton = true, 
  backUrl = "/documentation" 
}: DocumentationViewerProps) {
  const { language } = useLanguage()
  const [content, setContent] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDocumentation = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/documentation?path=${encodeURIComponent(path)}`)

        if (!response.ok) {
          throw new Error(`Failed to fetch documentation: ${response.status}`)
        }

        const data = await response.json()
        setContent(data.content)
      } catch (err) {
        console.error("Error fetching documentation:", err)
        setError(language === "en" 
          ? "Failed to load documentation. Please try again later."
          : "No se pudo cargar la documentación. Por favor, inténtelo de nuevo más tarde.")
      } finally {
        setLoading(false)
      }
    }

    fetchDocumentation()
  }, [path, language])

  return (
    <div className="w-full">
      {showBackButton && (
        <div className="mb-6">
          <Button variant="outline" size="sm" asChild>
            <Link href={backUrl}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === "en" ? "Back to Documentation" : "Volver a la Documentación"}
            </Link>
          </Button>
        </div>
      )}
      
      <Card className="w-full">
        <CardContent className="p-6">
          {loading ? (
            <div className="space-y-4">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ) : error ? (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : (
            <div className="prose dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
\`\`\`

### Documentation API

The documentation is served through a dedicated API route:

\`\`\`tsx
// app/api/documentation/route.ts
import { type NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import { remark } from "remark"
import html from "remark-html"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const docPath = searchParams.get("path")

  if (!docPath) {
    return NextResponse.json({ error: "Documentation path is required" }, { status: 400 })
  }

  // Sanitize the path to prevent directory traversal attacks
  const sanitizedPath = docPath.replace(/\.\./g, "").replace(/\/+/g, "/")
  const fullPath = path.join(process.cwd(), "docs", sanitizedPath)

  try {
    // Check if the file exists
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json({ error: "Documentation not found" }, { status: 404 })
    }

    // Read the markdown file
    const fileContent = fs.readFileSync(fullPath, "utf8")

    // Process the markdown to HTML
    const processedContent = await remark()
      .use(html, { sanitize: true })
      .process(fileContent)

    const contentHtml = processedContent.toString()

    return NextResponse.json({ content: contentHtml })
  } catch (error) {
    console.error("Error processing documentation:", error)
    return NextResponse.json({ error: "Failed to process documentation" }, { status: 500 })
  }
}
\`\`\`

### Documentation Navigation

The documentation is navigated through a dedicated documentation page:

\`\`\`tsx
// app/documentation/page.tsx
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DocumentationContent } from "@/components/documentation/documentation-content"

export default function DocumentationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <DocumentationContent />
      </main>
      <Footer />
    </div>
  )
}
\`\`\`

And a documentation content component:

\`\`\`tsx
// components/documentation/documentation-content.tsx
"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'

export function DocumentationContent() {
  const { t, language } = useLanguage()
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6">
        {language === "en" ? "Documentation" : "Documentación"}
      </h1>
      
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid grid-cols-5">
          <TabsTrigger value="overview">
            {language === "en" ? "Overview" : "Visión General"}
          </TabsTrigger>
          <TabsTrigger value="architecture">
            {language === "en" ? "Architecture" : "Arquitectura"}
          </TabsTrigger>
          <TabsTrigger value="features">
            {language === "en" ? "Features" : "Características"}
          </TabsTrigger>
          <TabsTrigger value="development">
            {language === "en" ? "Development" : "Desarrollo"}
          </TabsTrigger>
          <TabsTrigger value="diagrams">
            {language === "en" ? "Diagrams" : "Diagramas"}
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>
                {language === "en" ? "Documentation Overview" : "Visión General de la Documentación"}
              </CardTitle>
              <CardDescription>
                {language === "en" 
                  ? "Comprehensive documentation for the Security Basics project"
                  : "Documentación completa para el proyecto Security Basics"}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Link href="/documentation/overview" passHref>
                <Button variant="outline" className="w-full justify-between">
                  {language === "en" ? "Documentation Overview" : "Visión General de la Documentación"}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Other tab content... */}
      </Tabs>
    </div>
  )
}
\`\`\`

### Documentation Pages

Each documentation section has its own page:

\`\`\`tsx
// app/documentation/overview/page.tsx
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DocumentationViewer } from "@/components/documentation/documentation-viewer"

export default function DocumentationOverviewPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-10">
        <DocumentationViewer path="index.md" />
      </main>
      <Footer />
    </div>
  )
}
\`\`\`

## Multilingual Support

The documentation system supports multiple languages:

1. **UI Elements**: All UI elements in the documentation system are translated
2. **Documentation Content**: Documentation content can be translated by creating language-specific versions of the markdown files

## Maintenance

The documentation is designed to be easily maintained:

1. **Markdown Format**: Documentation is written in Markdown, which is easy to read and write
2. **Modular Structure**: Documentation is organized into modular files, making it easy to update specific sections
3. **Automated Processing**: Documentation is automatically processed and served through the API

## Best Practices

1. **Keep Documentation Updated**: Update documentation whenever the code changes
2. **Use Clear Language**: Write documentation in clear, concise language
3. **Include Examples**: Provide examples to illustrate concepts
4. **Use Diagrams**: Use diagrams to visualize complex concepts
5. **Link Related Content**: Link to related documentation to help users navigate

## Next Steps

- [Internationalization](./internationalization.md)
- [Theme System](./theme-system.md)
- [Blog System](./blog-system.md)
- [Security Tools](./security-tools.md)
\`\`\`

Let's create a documentation maintenance guide:
