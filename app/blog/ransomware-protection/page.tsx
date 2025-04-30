import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RansomwareProtectionArticle } from "@/components/blog/articles/ransomware-protection"

export default function RansomwareProtectionPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <RansomwareProtectionArticle />
      <Footer />
    </main>
  )
}
