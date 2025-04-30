import { redirect } from "next/navigation"

export default function OverviewPage() {
  redirect("https://github.com/yourusername/security-basics/tree/main/docs/README.md")
  return null
}
