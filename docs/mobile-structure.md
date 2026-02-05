# Mobile Folder Structure (Expo + React Native)

## Goal
Keep screens in `app/` and feature logic in modules.

## Suggested layout
```
apps/mobile/
  app/
    _layout.tsx
    index.tsx
    auth/
      login.tsx
  assets/
  components/
  modules/
    auth/
      hooks/
      services/
      components/
  utils/
  types/
```

## Notes
- `app/` is for Expo Router screens only.
- Shared types live in `types/` or a shared package later.
