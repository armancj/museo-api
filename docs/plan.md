
---

## 🧭 `docs/plan.md` (en inglés)

```markdown
# Improvement Plan for NestJS + TypeScript Project

## Overview

This plan outlines all the improvements needed to align the project with modern best practices in security, architecture, documentation, testing, and maintainability.

---

## Goals

- Improve code structure, readability, and scalability.
- Ensure full request validation and consistent error handling.
- Apply strong security defaults.
- Achieve 80%+ test coverage.
- Generate complete and accurate API documentation.

---

## Scope

| Area               | Objective                                                   |
|--------------------|-------------------------------------------------------------|
| Architecture        | Migrate to a modular, domain-driven structure               |
| Code Quality        | Enforce linting, formatting, naming conventions            |
| Validation          | Validate all user inputs using DTOs and pipes              |
| Error Handling      | Centralize and standardize API error responses             |
| Security            | Sanitize inputs, enforce secure headers, and env handling  |
| Testing             | Add unit + integration tests with 80%+ coverage            |
| Documentation       | Auto-generate Swagger API docs                             |
| Config Management   | Use `@nestjs/config` and `.env` schemas                    |
| DevOps Hygiene      | Add scripts for format, lint, build, and test              |

---

## Task Checklist

### ✅ Phase 1: Setup & Structure
- [ ] Migrate to domain-based modular folder structure
- [ ] Remove dead code, unused files and inline console logs
- [ ] Setup ESLint + Prettier + commit hooks

### ✅ Phase 2: DTOs & Validation
- [ ] Create DTOs for all controllers
- [ ] Apply validation decorators on all DTO fields
- [ ] Enable global `ValidationPipe` with `transform` and `whitelist`

### ✅ Phase 3: Error Handling & Logging
- [ ] Implement a global exception filter
- [ ] Replace all raw errors with NestJS exceptions
- [ ] Integrate `Logger` for services and controllers

### ✅ Phase 4: Security Hardening
- [ ] Use `helmet`, `rate-limit`, and enable `CORS`
- [ ] Sanitize all incoming requests
- [ ] Move all secrets to `.env`
- [ ] Add `.env.example` with placeholders

### ✅ Phase 5: Documentation
- [ ] Integrate `@nestjs/swagger`
- [ ] Document all endpoints and DTOs with `@ApiProperty`
- [ ] Group routes using `@ApiTags`

### ✅ Phase 6: Testing
- [ ] Add unit tests for services and controllers
- [ ] Add integration tests for public endpoints
- [ ] Achieve 80%+ code coverage

### ✅ Phase 7: Automation & Scripts
- [ ] Add NPM scripts:
  - `start:dev`
  - `test:cov`
  - `lint`
  - `format`
- [ ] Add Git hooks with `husky` and `lint-staged`

---

## Timeline

| Week | Milestones                     |
|------|-------------------------------|
| 1    | Structure, ESLint, Prettier    |
| 2    | Validation, DTOs, Pipes        |
| 3    | Error handling, Logging        |
| 4    | Security, Swagger, Testing     |

---

## Acceptance Criteria

- ✅ Lint and format pass without errors
- ✅ DTOs validate 100% of user input
- ✅ Global error handling returns consistent API responses
- ✅ Swagger UI reflects all public endpoints
- ✅ Test coverage is ≥ 80%
- ✅ No secrets are hardcoded or logged
- ✅ Public services and methods include JSDoc comments
