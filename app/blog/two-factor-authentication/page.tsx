import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TwoFactorAuthenticationArticle } from "@/components/blog/articles/two-factor-authentication"

export default function TwoFactorAuthenticationPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <TwoFactorAuthenticationArticle />
      <Footer />
    </main>
  )
}
