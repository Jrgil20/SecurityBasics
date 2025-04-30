import { redirect } from "next/navigation"

export default function DocumentationPage() {
  redirect("https://github.com/yourusername/security-basics/tree/main/docs")
  return null
}
