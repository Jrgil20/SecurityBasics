import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Security Basics | Fundamentos de Seguridad",
  description:
    "Learn about security basics and best practices | Aprende sobre fundamentos y mejores prácticas de seguridad",
  author: "Jesus Rodolfo Gil Farias",
  license: "MIT License",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
