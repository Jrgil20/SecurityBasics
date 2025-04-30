import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const url = new URL(request.url)
  const path = url.searchParams.get("path")

  // Construct GitHub URL
  const githubBaseUrl = "https://github.com/yourusername/security-basics/tree/main/docs"
  const redirectUrl = path ? `${githubBaseUrl}/${path}.md` : githubBaseUrl

  return NextResponse.json({
    redirectUrl,
    message: "Documentation is now hosted on GitHub",
  })
}
