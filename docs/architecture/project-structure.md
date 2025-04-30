# Project Structure

This document outlines the file and directory structure of the Security Basics project.

## Directory Structure

\`\`\`
security-basics/
├── app/                    # Next.js App Router directory
│   ├── [locale]/           # Locale-specific routes
│   ├── api/                # API routes
│   ├── blog/               # Blog routes
│   │   ├── [slug]/         # Individual blog post routes
│   ├── documentation/      # Documentation routes
│   ├── globals.css         # Global CSS
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable components
│   ├── blog/               # Blog-related components
│   │   ├── articles/       # Blog article components
│   │   ├── blog-header.tsx # Blog header component
│   │   ├── blog-posts.tsx  # Blog posts listing component
│   │   └── blog-post-layout.tsx # Blog post layout component
│   ├── documentation/      # Documentation-related components
│   ├── sections/           # Section components for the home page
│   ├── ui/                 # UI components (shadcn/ui)
│   ├── footer.tsx          # Footer component
│   ├── header.tsx          # Header component
│   ├── hero.tsx            # Hero component
│   ├── language-provider.tsx # Language provider component
│   ├── security-sections.tsx # Security sections component
│   ├── security-tools.tsx  # Security tools component
│   └── theme-toggle.tsx    # Theme toggle component
├── docs/                   # Documentation files
│   ├── architecture/       # Architecture documentation
│   ├── components/         # Component documentation
│   ├── development/        # Development documentation
│   ├── features/           # Feature documentation
│   ├── api/                # API documentation
│   └── diagrams/           # Diagrams
├── lib/                    # Utility functions and shared logic
│   ├── translations.ts     # Translation strings
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
│   ├── images/             # Image assets
│   └── favicon.ico         # Favicon
├── .gitignore              # Git ignore file
├── next.config.js          # Next.js configuration
├── package.json            # Package configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
\`\`\`

## Key Files and Directories

### App Directory

The `app` directory contains the main application routes and layouts, following the Next.js App Router convention:

- `layout.tsx`: The root layout that wraps all pages
- `page.tsx`: The home page component
- `blog/`: Blog-related routes
- `documentation/`: Documentation-related routes
- `api/`: API routes

### Components Directory

The `components` directory contains reusable UI components:

- `blog/`: Blog-related components
- `documentation/`: Documentation-related components
- `sections/`: Section components for the home page
- `ui/`: UI components (shadcn/ui)
- `footer.tsx`: Footer component
- `header.tsx`: Header component
- `hero.tsx`: Hero component
- `language-provider.tsx`: Language provider component
- `security-sections.tsx`: Security sections component
- `security-tools.tsx`: Security tools component
- `theme-toggle.tsx`: Theme toggle component

### Lib Directory

The `lib` directory contains utility functions and shared logic:

- `translations.ts`: Translation strings for English and Spanish
- `utils.ts`: Utility functions

### Public Directory

The `public` directory contains static assets:

- `images/`: Image assets
- `favicon.ico`: Favicon

### Docs Directory

The `docs` directory contains documentation files:

- `architecture/`: Architecture documentation
- `components/`: Component documentation
- `development/`: Development documentation
- `features/`: Feature documentation
- `api/`: API documentation
- `diagrams/`: Diagrams

## Next Steps

- [Routing System](./routing.md)
- [State Management](./state-management.md)
- [Component Organization](./component-organization.md)
\`\`\`

Finally, let's create a utility function to help with documentation path resolution:
