/**
 * This script generates a file listing for the documentation.
 * Run it with: npx tsx scripts/generate-docs-listing.tsx
 */

import fs from "fs"
import path from "path"

const DOCS_DIR = path.join(process.cwd(), "docs")
const OUTPUT_FILE = path.join(DOCS_DIR, "file-listing.md")
const GITHUB_REPO = "https://github.com/yourusername/security-basics/blob/main/docs"

// Function to recursively get all markdown files
function getMarkdownFiles(dir: string, baseDir = ""): string[] {
  const files = fs.readdirSync(dir)

  return files.reduce((acc: string[], file) => {
    const filePath = path.join(dir, file)
    const relativePath = path.join(baseDir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      return [...acc, ...getMarkdownFiles(filePath, relativePath)]
    } else if (file.endsWith(".md")) {
      return [...acc, relativePath]
    }

    return acc
  }, [])
}

// Function to generate the file listing markdown
function generateFileListing(files: string[]): string {
  // Group files by directory
  const filesByDir: Record<string, string[]> = {}

  files.forEach((file) => {
    const dir = path.dirname(file)
    if (!filesByDir[dir]) {
      filesByDir[dir] = []
    }
    filesByDir[dir].push(file)
  })

  // Generate markdown
  let markdown = "# Documentation Files\n\n"
  markdown +=
    "This page provides a comprehensive listing of all documentation files in the project, along with links to view them directly on GitHub.\n\n"

  // Add links by directory
  Object.keys(filesByDir)
    .sort()
    .forEach((dir) => {
      if (dir === ".") {
        markdown += "## Root\n"
      } else {
        markdown += `## ${dir}\n`
      }

      filesByDir[dir].sort().forEach((file) => {
        const fileName = path.basename(file, ".md")
        const displayName = fileName
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")

        markdown += `- [${displayName}](${GITHUB_REPO}/${file})\n`
      })

      markdown += "\n"
    })

  // Add directory structure
  markdown += "## Directory Structure\n\n"
  markdown += "```\n"
  markdown += "docs/\n"

  // Generate directory tree
  function generateTree(dir: string, prefix = ""): string {
    const files = fs.readdirSync(path.join(DOCS_DIR, dir))
    let tree = ""

    files.sort().forEach((file, index) => {
      const isLast = index === files.length - 1
      const filePath = path.join(dir, file)
      const fullPath = path.join(DOCS_DIR, filePath)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        tree += `${prefix}${isLast ? "└── " : "├── "}${file}/\n`
        tree += generateTree(filePath, `${prefix}${isLast ? "    " : "│   "}`)
      } else if (file.endsWith(".md")) {
        tree += `${prefix}${isLast ? "└── " : "├── "}${file}\n`
      }
    })

    return tree
  }

  markdown += generateTree("")
  markdown += "```\n"

  return markdown
}

// Main function
function main() {
  try {
    const files = getMarkdownFiles(DOCS_DIR)
    const markdown = generateFileListing(files)

    fs.writeFileSync(OUTPUT_FILE, markdown)
    console.log(`File listing generated at ${OUTPUT_FILE}`)
  } catch (error) {
    console.error("Error generating file listing:", error)
    process.exit(1)
  }
}

main()
