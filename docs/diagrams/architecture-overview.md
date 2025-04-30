# Architecture Overview

This document provides a high-level overview of the Security Basics architecture.

## System Architecture

The following diagram illustrates the overall architecture of the Security Basics application:

\`\`\`mermaid
graph TD
    A["Client Browser"] --> B["Next.js App"]
    B --> C["App Router"]
    C --> D["Page Components"]
    D --> E["Feature Components"]
    E --> F["UI Components"]
    B --> G["API Routes"]
    G --> H["File System"]
    B --> I["Server Components"]
    I --> J["Data Sources"]
    B --> K["Client Components"]
    K --> L["Browser APIs"]
    B --> M["Context Providers"]
    M --> N["Global State"]
\`\`\`

## Component Architecture

The following diagram illustrates the component architecture of the Security Basics application:

\`\`\`mermaid
graph TD
    A["App Layout"] --> B["Header"]
    A --> C["Main Content"]
    A --> D["Footer"]
    B --> E["ThemeToggle"]
    B --> F["LanguageSelector"]
    B --> G["Navigation"]
    C --> H["Page Components"]
    H --> I["Home Page"]
    H --> J["Blog Page"]
    H --> K["Documentation Page"]
    I --> L["Hero"]
    I --> M["SecuritySections"]
    I --> N["SecurityTools"]
    J --> O["BlogHeader"]
    J --> P["BlogPosts"]
    K --> Q["DocumentationContent"]
    Q --> R["DocumentationViewer"]
\`\`\`

## Data Flow

The following diagram illustrates the data flow in the Security Basics application:

\`\`\`mermaid
graph TD
    A["User Interaction"] --> B["Client Component"]
    B --> C["Event Handler"]
    C --> D["Context Update"]
    D --> E["State Change"]
    E --> F["Component Re-render"]
    F --> G["UI Update"]
    B --> H["API Request"]
    H --> I["API Route"]
    I --> J["Data Processing"]
    J --> K["Response"]
    K --> L["State Update"]
    L --> M["Component Re-render"]
    M --> N["UI Update"]
\`\`\`

## Technology Stack

The following diagram illustrates the technology stack of the Security Basics application:

\`\`\`mermaid
graph TD
    A["Security Basics"] --> B["Frontend"]
    A --> C["Backend"]
    B --> D["Next.js"]
    B --> E["React"]
    B --> F["TypeScript"]
    B --> G["Tailwind CSS"]
    B --> H["shadcn/ui"]
    C --> I["Next.js API Routes"]
    C --> J["Node.js"]
    C --> K["File System"]
\`\`\`

## Deployment Architecture

The following diagram illustrates the deployment architecture of the Security Basics application:

\`\`\`mermaid
graph TD
    A["GitHub Repository"] --> B["Vercel CI/CD"]
    B --> C["Build Process"]
    C --> D["Static Generation"]
    C --> E["Server-Side Rendering"]
    C --> F["API Routes"]
    D --> G["CDN"]
    E --> H["Serverless Functions"]
    F --> I["Serverless Functions"]
    G --> J["Client Browser"]
    H --> J
    I --> J
\`\`\`

## Next Steps

- [Project Structure](../architecture/project-structure.md)
- [Routing System](../architecture/routing.md)
- [State Management](../architecture/state-management.md)
- [Component Organization](../architecture/component-organization.md)
- [Data Flow](../architecture/data-flow.md)
\`\`\`

Let's update the documentation viewer component to handle the new documentation structure:
