# Data Flow

This document illustrates how data flows through the Security Basics application.

## User Preference Data Flow

\`\`\`mermaid
graph LR
    A["User Interaction"] --> B["Client-side State"]
    B --> C["localStorage"]
    C --> D["Initial State on Load"]
    D --> E["Component Rendering"]
\`\`\`

## Theme Selection Flow

\`\`\`mermaid
graph TD
    A["User Clicks Theme Toggle"] --> B["ThemeToggle Component"]
    B --> C["setTheme Function"]
    C --> D["Theme Context"]
    D --> E["localStorage Update"]
    D --> F["HTML data-theme Attribute"]
    F --> G["CSS Variable Application"]
    G --> H["Visual Changes"]
\`\`\`

## Language Selection Flow

\`\`\`mermaid
graph TD
    A["User Selects Language"] --> B["LanguageSelector Component"]
    B --> C["setLanguage Function"]
    C --> D["Language Context"]
    D --> E["localStorage Update"]
    D --> F["Translation Lookup"]
    F --> G["UI Text Updates"]
\`\`\`

## Documentation Content Flow

\`\`\`mermaid
graph TD
    A["User Navigates to Doc Page"] --> B["Page Component"]
    B --> C["DocumentationViewer"]
    C --> D["API Request"]
    D --> E["/api/documentation Route"]
    E --> F["File System"]
    F --> G["Markdown Content"]
    G --> H["Remark Processing"]
    H --> I["HTML Content"]
    I --> J["Rendered Documentation"]
\`\`\`

## Blog Content Flow

\`\`\`mermaid
graph TD
    A["User Navigates to Blog"] --> B["Blog Page"]
    B --> C["BlogPosts Component"]
    C --> D["Post Preview Cards"]
    A --> E["User Clicks Post"]
    E --> F["Blog Post Page"]
    F --> G["BlogPostLayout"]
    G --> H["Article Component"]
    H --> I["Rendered Content"]
