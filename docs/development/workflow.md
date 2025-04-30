# Development Workflow

This document explains the development workflow for the Security Basics project.

## Overview

The development workflow follows these steps:

1. **Create a Feature Branch**: Create a new branch for your feature or bug fix
2. **Develop**: Make changes to the code
3. **Test**: Test your changes locally
4. **Commit**: Commit your changes with a descriptive message
5. **Push**: Push your changes to the remote repository
6. **Pull Request**: Create a pull request for code review
7. **Review**: Address feedback from code review
8. **Merge**: Merge the pull request into the main branch
9. **Deploy**: Deploy the changes to production

## Branching Strategy

The project uses a feature branching strategy:

- `main`: The main branch that contains production-ready code
- `feature/*`: Feature branches for new features
- `bugfix/*`: Bugfix branches for bug fixes
- `hotfix/*`: Hotfix branches for urgent fixes

## Commit Messages

Commit messages should follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

\`\`\`
<type>(<scope>): <description>

[optional body]

[optional footer]
\`\`\`

Types:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Changes that do not affect the meaning of the code (formatting, etc.)
- `refactor`: Code changes that neither fix a bug nor add a feature
- `perf`: Code changes that improve performance
- `test`: Adding or updating tests
- `chore`: Changes to the build process or auxiliary tools

Example:
\`\`\`
feat(blog): add social engineering article

Add a new article about social engineering techniques and how to protect against them.
\`\`\`

## Code Review

Code reviews are an important part of the development process. When reviewing code, consider the following:

- Does the code follow the project's coding standards?
- Is the code well-tested?
- Is the code well-documented?
- Does the code solve the problem it's intended to solve?
- Are there any potential security issues?
- Are there any performance issues?

## Testing

Before submitting a pull request, make sure your changes pass all tests:

\`\`\`bash
npm run test
\`\`\`

## Next Steps

- [Adding Features](./adding-features.md)
- [Best Practices](./best-practices.md)
- [Setup](./setup.md)
\`\`\`

Let's create the adding features documentation:
