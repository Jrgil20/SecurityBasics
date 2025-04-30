# User Flows

This document illustrates the typical user journeys through the Security Basics application.

## Main Navigation Flow

\`\`\`mermaid
graph TD
    A["User Lands on Homepage"] --> B{"User Action?"}
    B -->|"Explore Security Topics"| C["Security Sections"]
    B -->|"Read Blog"| D["Blog Page"]
    B -->|"View Documentation"| E["Documentation Page"]
    B -->|"Change Language"| F["Language Toggle"]
    B -->|"Change Theme"| G["Theme Toggle"]
    C --> H["Topic Details"]
    D --> I["Blog Post List"]
    I --> J["Individual Blog Post"]
    E --> K["Documentation Categories"]
    K --> L["Specific Documentation"]
\`\`\`

## Blog Reading Flow

\`\`\`mermaid
graph TD
    A["User Navigates to Blog"] --> B["Blog Post List"]
    B --> C{"User Action?"}
    C -->|"Select Post"| D["Blog Post Page"]
    D --> E{"User Action?"}
    E -->|"Read Content"| F["Consume Article"]
    E -->|"Return to List"| B
    E -->|"Navigate to Related"| G["Related Post"]
    G --> F
\`\`\`

## Documentation Navigation Flow

\`\`\`mermaid
graph TD
    A["User Navigates to Documentation"] --> B["Documentation Overview"]
    B --> C{"User Selection?"}
    C -->|"Architecture"| D["Architecture Docs"]
    C -->|"Features"| E["Features Docs"]
    C -->|"Development"| F["Development Docs"]
    C -->|"Components"| G["Components Docs"]
    C -->|"Diagrams"| H["Diagrams"]
    D --> I["Return to Overview"]
    E --> I
    F --> I
    G --> I
    H --> I
\`\`\`

## Theme Toggle Flow

\`\`\`mermaid
graph TD
    A["User Views Site"] --> B{"Current Theme?"}
    B -->|"Light"| C["Light Theme Display"]
    B -->|"Dark"| D["Dark Theme Display"]
    C --> E["User Toggles Theme"]
    D --> E
    E --> F{"New Theme?"}
    F -->|"Light"| C
    F -->|"Dark"| D
\`\`\`

## Language Selection Flow

\`\`\`mermaid
graph TD
    A["User Views Site"] --> B{"Current Language?"}
    B -->|"English"| C["English Content"]
    B -->|"Spanish"| D["Spanish Content"]
    C --> E["User Changes Language"]
    D --> E
    E --> F{"New Language?"}
    F -->|"English"| C
    F -->|"Spanish"| D
