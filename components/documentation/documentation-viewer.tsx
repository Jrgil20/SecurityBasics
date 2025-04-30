"use client"

import { Button } from "@/components/ui/button"
import { BookOpen, GithubIcon } from "lucide-react"

interface DocumentationViewerProps {
  path: string
  showBackButton?: boolean
  backUrl?: string
  githubUrl?: string
}

// This is a placeholder component that redirects to GitHub documentation
export function DocumentationViewer({ path }: DocumentationViewerProps) {
  const githubDocsUrl = "https://github.com/yourusername/security-basics/tree/main/docs"

  // Redirect to GitHub on mount
  if (typeof window !== "undefined") {
    window.location.href = githubDocsUrl
  }

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <p className="mb-4">Documentation is now hosted on GitHub.</p>
      <a href={githubDocsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
        <Button className="flex items-center gap-2">
          <BookOpen className="h-4 w-4" />
          <span>View Documentation on GitHub</span>
          <GithubIcon className="h-4 w-4 ml-1" />
        </Button>
      </a>
    </div>
  )
}
