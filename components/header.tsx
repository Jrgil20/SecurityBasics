"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Globe, GithubIcon, BookOpen } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  const { t, language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  // GitHub documentation URL
  const githubDocsUrl = "https://github.com/Jrgil20/SecurityBasics/tree/main/docs"

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">{t("securityBasics")}</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-foreground/80">
              {t("home")}
            </Link>
            <Link href="/blog" className="transition-colors hover:text-foreground/80">
              {t("blog")}
            </Link>
            <a
              href={githubDocsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 transition-colors hover:text-foreground/80"
            >
              <BookOpen className="h-4 w-4" />
              <span>{t("documentation")}</span>
              <GithubIcon className="h-3 w-3 ml-1" />
            </a>
          </nav>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav setIsOpen={setIsOpen} githubDocsUrl={githubDocsUrl} />
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-6 flex items-center space-x-2 md:hidden">
          <span className="font-bold">{t("securityBasics")}</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
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
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

function MobileNav({ setIsOpen, githubDocsUrl }: { setIsOpen: (open: boolean) => void; githubDocsUrl: string }) {
  const { t } = useLanguage()

  return (
    <div className="grid gap-2 py-6">
      <Link href="/" className="flex w-full items-center py-2 text-lg font-semibold" onClick={() => setIsOpen(false)}>
        {t("home")}
      </Link>
      <Link
        href="/blog"
        className="flex w-full items-center py-2 text-lg font-semibold"
        onClick={() => setIsOpen(false)}
      >
        {t("blog")}
      </Link>
      <a
        href={githubDocsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center py-2 text-lg font-semibold"
        onClick={() => setIsOpen(false)}
      >
        <BookOpen className="h-5 w-5 mr-2" />
        {t("documentation")}
        <GithubIcon className="h-4 w-4 ml-2" />
      </a>
    </div>
  )
}
