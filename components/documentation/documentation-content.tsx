"use client"

import { Button } from "@/components/ui/button"
import { BookOpen, GithubIcon } from "lucide-react"

interface DocumentationContentProps {
  path: string
}

// This is a placeholder component that redirects to GitHub documentation
export function DocumentationContent({ path }: DocumentationContentProps) {
  const githubDocsUrl = "https://github.com/Jrgil20/SecurityBasics/tree/main/docs"

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
