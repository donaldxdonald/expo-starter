# Agent Instructions

## Package Manager

- Use **pnpm** for all dependency operations; `pnpm-lock.yaml` is the source of truth.
- Install with `pnpm install`.

## Project Stack

- Expo SDK 56 app with React Native 0.85, React 19, and TypeScript strict mode.
- Routing uses Expo Router from `app/`; typed routes are enabled in `app.json`.
- Styling uses Uniwind + Tailwind CSS v4 via `global.css` and `metro.config.cjs`.
- Server/client cache state uses TanStack Query via `providers/AppProvider.tsx`.
- Local client state can use Zustand when shared app state is needed.
- Imports may use the `@/*` alias from `tsconfig.json`.

## Commands

| Task              | Command              |
| ----------------- | -------------------- |
| Start Expo        | `pnpm start`         |
| Android dev build | `pnpm android`       |
| iOS dev build     | `pnpm ios`           |
| Web dev server    | `pnpm web`           |
| Lint              | `pnpm lint`          |
| Reset starter app | `pnpm reset-project` |

## Key Paths

| Need                       | Path                        |
| -------------------------- | --------------------------- |
| Routes/screens             | `app/`                      |
| Root providers             | `providers/AppProvider.tsx` |
| Theme hook                 | `hooks/useColorScheme.ts`   |
| Class merging helper       | `lib/utils.ts`              |
| Tailwind/Uniwind CSS entry | `global.css`                |
| Metro + Uniwind config     | `metro.config.cjs`          |
| Expo app config            | `app.json`                  |

## Conventions

- Prefer `className` with Uniwind utilities for React Native UI; avoid inline `style` unless required by an API.
- Keep Tailwind v4 configuration in `global.css`; do not add `tailwind.config.js`.
- Do not use NativeWind APIs such as `cssInterop` or `remapProps`.
- Do not dynamically construct class names; use complete string literals, ternaries, or lookup maps.
- Use `cn()` from `lib/utils.ts` when combining conditional or overlapping classes.
- For non-style color props, use Uniwind `*ClassName` props with `accent-*` utilities.
- Keep `withUniwindConfig` as the outermost Metro wrapper.
- Do not wrap built-in React Native/Reanimated components with `withUniwind`; reserve it for third-party components.
- Preserve the root provider order unless intentionally changing app initialization behavior.
- Do not edit generated/native dependency folders such as `.expo/`, `ios/Pods/`, or `node_modules/`.
