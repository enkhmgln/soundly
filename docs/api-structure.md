# API Folder Structure (Bun + Hono)

This document describes the intended future structure for the API as it grows. The goal is to keep routing, business logic, and data access cleanly separated while remaining easy to navigate in a monorepo.

## How the API fits into the monorepo

- `apps/` contains runnable apps (API, mobile).
- `packages/` contains shared packages (tRPC types, ESLint, TypeScript configs).
- `apps/api` is the Bun runtime backend. `bun run src/server.ts` is the entry.
- The API exposes REST endpoints and a tRPC router for type-safe clients.

## Target API layout

```
apps/api/
  src/
    server.ts                  # Hono server entry point
    trpc.ts                    # tRPC router + adapters
    config/
      env.ts                   # Env parsing + defaults
      constants.ts             # Shared enums and constants
    routes/                    # REST routes grouped by feature
      health.ts
      auth.ts
      users.ts
    routers/                   # tRPC routers grouped by feature
      auth.ts
      users.ts
      matches.ts
      chats.ts
      index.ts                 # AppRouter composition
    middleware/
      auth.ts
      logger.ts
      rate-limit.ts
    services/                  # External services (Spotify, QPay, Stripe)
      spotify.ts
      payments.ts
    domain/                    # Core business logic (pure functions)
      matching/
        score.ts
        filters.ts
    db/
      index.ts                 # DB client setup
      base.ts                  # Shared columns (id, created_at, etc.)
      repositories/            # Data access layer
        users.ts
        matches.ts
      schema/
        index.ts               # Barrel exports for Drizzle
        users.ts
        matches.ts
        chats.ts
        common.ts              # Lookup tables (e.g. looking_for, banners)
    utils/
      errors.ts
      logger.ts
  package.json
  tsconfig.json
  .env
```

## How it works (future flow)

- `server.ts` boots Hono and mounts:
  - REST routes from `routes/*`
  - tRPC handler from `routers/index.ts`
- `routers/*` define tRPC procedures and call into `domain/` or `repositories/`.
- `services/*` wrap external APIs and providers.
- `domain/*` is pure business logic (matching, rules, scoring).
- `repositories/*` are the only place that talks directly to Drizzle tables.
- `db/schema/*` defines tables and enums. `schema/index.ts` is the schema entry point for migrations.

## Conventions

- Keep one feature per file in `routes/` and `routers/`.
- Keep data access in `repositories/` to avoid DB logic in handlers.
- Place shared lookups in `common.ts` (e.g. `common_looking_for`, `common_banners`).
- If a feature grows, move it into its own folder under `domain/`, `services/`, or `repositories/`.
