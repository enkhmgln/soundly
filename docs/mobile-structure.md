# Mobile Folder Structure (Expo + React Native)

## Goal

Use Expo Router for navigation, keep UI in `app/`, and place shared logic
and providers outside the route tree.

## Suggested layout

```
apps/mobile/
  app/
    _layout.tsx
    index.tsx
    (tabs)/
      _layout.tsx
      home.tsx
      explore.tsx
    auth/
      login.tsx
      register.tsx
    settings/
      index.tsx
  assets/
    images/
    fonts/
  components/
    layout/
      providers.tsx
    ui/
      button.tsx
      card.tsx
  features/
    auth/
      components/
      hooks/
      services/
    users/
      components/
      hooks/
      services/
  hooks/
    useDebounce.ts
    useAppState.ts
  lib/
    trpc.ts
    api.ts
    env.ts
    storage.ts
  constants/
  theme/
  types/
  utils/
```

## Notes

- `app/` is for Expo Router screens only (no business logic).
- Put shared providers in `components/layout/Providers.tsx` and wrap them in
  `app/_layout.tsx`.
- Client setup (tRPC, API clients) belongs in `lib/`.
- Shared types live in `types/` or a shared package.
