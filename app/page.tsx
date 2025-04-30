import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SecuritySections } from "@/components/security-sections"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SecuritySections />
      <Footer />
    </main>
  )
}
