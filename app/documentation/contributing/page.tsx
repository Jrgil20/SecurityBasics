import { redirect } from "next/navigation"

export default function ContributingPage() {
  redirect("https://github.com/yourusername/security-basics/tree/main/docs/contributing.md")
  return null
}
