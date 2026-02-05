# Monorepo Architecture (Turbo)

## Goal
Connect mobile + API with shared types and future tRPC.

## Suggested layout
```
apps/
  mobile/
  api/
packages/
  types/
  config/
```

## Notes
- Turbo runs tasks per app/package and caches outputs.
- Add `packages/types` for shared API types and tRPC inputs.
- Add `packages/config` for shared lint/tsconfig later.
