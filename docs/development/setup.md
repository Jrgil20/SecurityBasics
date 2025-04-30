# Setup Guide

This document explains how to set up the development environment for the Security Basics project.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher
- **Git**: Version 2.0.0 or higher

## Installation

1. Clone the repository:

\`\`\`bash
git clone https://github.com/Jrgil20/SecurityBasics.git
cd security-basics
\`\`\`

2. Install dependencies:

\`\`\`bash
npm install
\`\`\`

3. Start the development server:

\`\`\`bash
npm run dev
\`\`\`

4. Open your browser and navigate to `http://localhost:3000`

## Environment Variables

The project uses environment variables for configuration. Create a `.env.local` file in the root directory with the following variables:

\`\`\`
NEXT_PUBLIC_API_URL=http://localhost:3000/api
\`\`\`

## Project Structure

The project follows the Next.js App Router structure:

\`\`\`
security-basics/
├── app/                    # Next.js App Router directory
├── components/             # Reusable components
├── lib/                    # Utility functions and shared logic
├── public/                 # Static assets
├── docs/                   # Documentation files
\`\`\`

## Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run start`: Start the production server
- `npm run lint`: Run ESLint
- `npm run format`: Run Prettier

## Next Steps

- [Workflow](./workflow.md)
- [Adding Features](./adding-features.md)
- [Best Practices](./best-practices.md)
\`\`\`

Let's create the workflow documentation:
