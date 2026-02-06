# Mobile Folder Structure (Expo + React Native)

## Goal

Use Expo Router for navigation, keep UI in `app/`, and place shared logic
and providers outside the route tree.

## Layout (modern target + current)

```
apps/mobile/
  app/
    _layout.tsx
    index.tsx
    global.css
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
      text.tsx
  features/
    auth/
      components/
    users/
      components/
  hooks/
    useDebounce.ts
    useAppState.ts
  lib/
    trpc.ts
    api.ts
    env.ts
    storage.ts
    theme.ts
    utils.ts
  constants/
  theme/
  types/
  utils/
  app.json
  babel.config.js
  components.json
  eslint.config.js
  metro.config.js
  nativewind-env.d.ts
  package.json
  tailwind.config.js
  tsconfig.json
```

## Notes

- `app/` is for Expo Router screens only (no business logic).
- Put shared providers in `components/layout/providers.tsx` and wrap them in
  `app/_layout.tsx`.
- Client setup (tRPC, API clients) belongs in `lib/`.
- Shared types live in `types/` or a shared package.
