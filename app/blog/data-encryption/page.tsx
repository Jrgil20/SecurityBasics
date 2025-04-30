import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DataEncryptionArticle } from "@/components/blog/articles/data-encryption"

export default function DataEncryptionPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <DataEncryptionArticle />
      <Footer />
    </main>
  )
}
