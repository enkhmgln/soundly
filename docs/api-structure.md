# API Folder Structure (Bun + Hono)

## Goal

Keep routing, middleware, and business logic separated, while staying small.

## Suggested layout

```
apps/api/
  src/
    index.ts
    routes/
      health.ts
      auth.ts
    middleware/
      logger.ts
    services/
      spotify.ts
    schemas/
      auth.ts
  package.json
  tsconfig.json
  .env
```

## Notes

- Use `app.route()` in `index.ts` to mount feature routes.
- Keep handlers close to route files for better type inference.
- Add `schemas/` early to align with future tRPC inputs.
