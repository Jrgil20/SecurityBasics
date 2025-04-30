import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SecuritySections } from "@/components/security-sections"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BookOpen, GithubIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <GitHubDocumentationBanner />
        <SecuritySections />
      </main>
      <Footer />
    </div>
  )
}

function GitHubDocumentationBanner() {
  return (
    <div className="bg-muted py-6">
      <div className="container flex flex-col items-center justify-center text-center">
        <a
          href="https://github.com/Jrgil20/SecurityBasics/tree/main/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          <Button className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span>View Documentation on GitHub</span>
            <GithubIcon className="h-4 w-4 ml-1" />
          </Button>
        </a>
      </div>
    </div>
  )
}
