import { BlogHeader } from "@/components/blog/blog-header"
import { BlogPosts } from "@/components/blog/blog-posts"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <BlogHeader />
      <BlogPosts />
      <Footer />
    </main>
  )
}
