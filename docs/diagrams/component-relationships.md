# Component Relationships

This document provides visual representations of how components in the Security Basics project interact with each other.

## Core Component Relationships

\`\`\`mermaid
graph TD
    A["App Layout"] --> B["Header"]
    A --> C["Main Content"]
    A --> D["Footer"]
    B --> E["ThemeToggle"]
    B --> F["LanguageSelector"]
    C --> G["Hero"]
    C --> H["SecuritySections"]
    C --> I["SecurityTools"]
    H --> J["DeviceSecurity"]
    H --> K["NetworkSecurity"]
    H --> L["CyberPractices"]
    H --> M["PhysicalProtection"]
    H --> N["Education"]
    H --> O["DataProtection"]
\`\`\`

## Blog System Component Relationships

\`\`\`mermaid
graph TD
    A["Blog Page"] --> B["BlogHeader"]
    A --> C["BlogPosts"]
    D["Blog Post Page"] --> E["BlogPostLayout"]
    E --> F["Article Component"]
    F --> G["Article Content"]
    F --> H["Related Articles"]
\`\`\`

## Documentation System Component Relationships

\`\`\`mermaid
graph TD
    A["Documentation Page"] --> B["DocumentationContent"]
    B --> C["DocumentationViewer"]
    C --> D["API Route: /api/documentation"]
    D --> E["Markdown Files"]
    A --> F["Navigation Tabs"]
    F --> G["Architecture"]
    F --> H["Features"]
    F --> I["Development"]
    F --> J["Components"]
    F --> K["Diagrams"]
\`\`\`

## Theme System Component Flow

\`\`\`mermaid
graph TD
    A["ThemeProvider"] --> B["useTheme Hook"]
    B --> C["ThemeToggle"]
    C --> D["Theme State"]
    D --> E["CSS Variables"]
    E --> F["Component Styling"]
\`\`\`

## Internationalization Flow

\`\`\`mermaid
graph TD
    A["LanguageProvider"] --> B["useLanguage Hook"]
    B --> C["LanguageSelector"]
    C --> D["Language State"]
    D --> E["Translations Object"]
    E --> F["Component Text"]
