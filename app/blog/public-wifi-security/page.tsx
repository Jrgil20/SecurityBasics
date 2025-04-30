import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PublicWifiSecurityArticle } from "@/components/blog/articles/public-wifi-security"

export default function PublicWifiSecurityPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PublicWifiSecurityArticle />
      <Footer />
    </main>
  )
}
