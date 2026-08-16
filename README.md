# museo-api

REST API for cataloguing and managing cultural heritage collections, built with **NestJS 11**,
**TypeScript** and **MongoDB**.

It implements the full record of a heritage object — description, provenance, conservation state,
access and reproduction conditions, associated documentation and cultural notes — for a network of
institutions spread across the provinces and municipalities of Cuba, where each user must only ever
see the part of the catalogue their role and territory entitle them to.

**519** TypeScript source files · **34** test suites · 15 feature modules.

---

## Why this is not a CRUD

### Territorial data scoping

Access is not a boolean. A user's role decides *how much of the country* they can query, and the
scope is applied at the query layer rather than filtered after the fact:

| Role | Scope |
|---|---|
| `super Administrador` | The whole catalogue |
| `Administrador` | Their province |
| `Especialista` | Their province and municipality |
| `Técnico` | Their province, municipality **and** institution |

`applyTerritorialFilters()` composes these constraints onto a typed query builder from the JWT
payload, so every read inherits the caller's territory without each controller re-implementing it.

### A deep, normalised heritage domain

The `cultural-heritage-property` module models a record as a set of related sub-documents — access
and use conditions, associated documentation, cultural notes, producer/author, entry form,
conservation status, value grade — each with its own DTOs, schemas and entities. Reference data
(categories, heritage types, description instruments, fund titles, sections, reproduction
conditions) lives in a `nomenclator` module instead of being hardcoded.

### Authentication with a real lifecycle

JWT with separate access and refresh guards, a local strategy for login, an activation guard for
accounts that are not yet enabled, a `@Roles()` decorator with its guard, and a constraint decorator
to forbid specific roles per route.

### AI-assisted description

The `ai` module calls the **Hugging Face Inference API** (`HuggingFaceH4/zephyr-7b-beta`) behind an
HTTP adapter interface, with specialised prompt builders, to help draft descriptive text for a
record. The adapter is an interface, so the provider can be swapped without touching the callers.

```
POST /ai/chat
{ "prompt": "Tell me about cultural heritage preservation" }
```

---

## Stack

| Area | Technology |
|---|---|
| Framework | NestJS 11, TypeScript |
| Database | MongoDB, Mongoose |
| Auth | Passport (local + JWT), bcrypt, role guards |
| Validation | class-validator, class-transformer, Joi (env schema) |
| Caching | `@nestjs/cache-manager` |
| Events | `@nestjs/event-emitter` |
| Logging | Pino (`nestjs-pino`, `pino-http`) + logging interceptor |
| Files | Multer, Sharp (image processing) |
| Mail | Nodemailer + Handlebars templates |
| API docs | Swagger (`@nestjs/swagger`), Compodoc |
| CLI | `nest-commander` |
| Testing | Jest, Supertest |
| Quality | ESLint, Prettier, Husky, SonarQube |

## Architecture

```
src/
  auth/                        JWT + refresh + activation, roles, guards
  users/                       Users and the role enum
  cultural-heritage-property/  The heritage record and its sub-documents
  nomenclator/                 Reference data (categories, types, grades...)
  address/                     Country, province, municipality, institutions, contact info
  file-storage/                Uploads and image processing
  ai/                          Hugging Face inference behind an HTTP adapter
  cache/  logger/  config/     Cross-cutting concerns
  commands/                    nest-commander: seeding and administration
  common/                      Filters, interceptors, pipes, decorators, typed query builder
```

Cross-cutting behaviour is centralised — a global exception filter, an error interceptor and a
logging interceptor — so controllers stay thin.

## Getting started

```bash
pnpm install
cp sample.env .env        # then fill in the values
pnpm run start:dev
```

Configuration is validated at boot with a Joi schema, so a missing or malformed variable fails fast
instead of at first use. Swagger UI is served once the app is running.

## Seeding

The database needs its nomenclators and a super admin before the app is usable. One command does
all of it:

```bash
pnpm run create:all-defaults
```

Or individually, through `nest-commander`:

```bash
pnpm run command create:default-user            # super admin
pnpm run command create:default-categories
pnpm run command create:default-heritage-types
pnpm run command create:default-value-grades
pnpm run command create:default-conservation-statuses
pnpm run command create:test-users              # users and institutions across provinces
pnpm run command create:cultural-heritage-property
```

## Testing

```bash
pnpm run test         # unit
pnpm run test:e2e     # end to end
pnpm run test:cov     # coverage report
```

## Documentation

```bash
pnpm run serve-doc    # Compodoc, served locally
```

Design notes live in `docs/`. Deployment is covered in `DEPLOYMENT_GUIDE.md`.
