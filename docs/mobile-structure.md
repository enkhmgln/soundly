# Mobile Folder Structure (Expo + React Native)

## Goal

Use Expo Router for navigation, keep UI in `app/`, and place shared logic
and providers outside the route tree.

## Layout (current)

```
apps/mobile/
  app/
    _layout.tsx
    global.css
    (auth)/
      splash.tsx
    (main)/
      index.tsx
    +not-found.tsx
  assets/
    images/
    fonts/
  components/
    layout/
      providers.tsx
      screen.tsx
    screens/
      splash/
        view.tsx
      system/
        not-found.tsx
    ui/
      button.tsx
      card.tsx
      text.tsx
  hooks/
    useDebounce.ts
    useAppState.ts
  lib/
    trpc.ts
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
