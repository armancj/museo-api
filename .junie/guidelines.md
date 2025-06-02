# Development Guidelines – NestJS + TypeScript

## Table of Contents

1. [Code Style](#code-style)
2. [Project Architecture](#project-architecture)
3. [Modules & Separation of Concerns](#modules--separation-of-concerns)
4. [DTOs and Validation](#dtos-and-validation)
5. [Error Handling](#error-handling)
6. [Logging](#logging)
7. [Security Practices](#security-practices)
8. [Testing Standards](#testing-standards)
9. [Environment Configuration](#environment-configuration)
10. [API Documentation](#api-documentation)
11. [Commit Conventions](#commit-conventions)
12. [General Best Practices](#general-best-practices)

---

## 1. Code Style

- Use `camelCase` for variables and function names.
- Use `PascalCase` for class names and interfaces.
- Use `UPPER_SNAKE_CASE` for constants.
- Use `kebab-case` for file and folder names.
- All files must end in a newline and use 2 spaces for indentation.
- Run Prettier and ESLint before every commit:
  ```bash
  npm run lint
  npm run format
