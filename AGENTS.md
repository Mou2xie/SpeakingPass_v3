# AGENTS.md

## Commands
- `npm run dev` — dev server (Turbopack)
- `npm run build` — production build (runs `next-sitemap` as postbuild)
- `npm run start` — production server
- `npm run lint` — ESLint
- No `test` or `typecheck` scripts

## Tech stack
Next.js 15 App Router, React 19, TypeScript strict, Tailwind CSS v4, DaisyUI v5 (light-only theme), Supabase, Remix Icon, Zustand (listed but unused).

## Architecture

### Component boundary
- Server components by default. Only 4 files use `'use client'`: `NavBar.tsx` (scroll), `MobileNavMenu.tsx` (menu toggle), `PartOneSection.tsx` + `PartTwoSection.tsx` (use `use()` hook for promise consumption).
- `src/libs/supabase.ts` uses `import 'server-only'` — server context only.
- `@/*` path alias → `./src/*` (defined in `tsconfig.json`).

### Data fetching
- Server actions in `src/libs/actions.ts` (`'use server'`). Tables: `v3_part1_category`, `v3_part1_topic`, `v3_part2_topic`.

### Content model
- Topic `type`: `'CURRENT'`, `'MUST'`, or `null` (past).
- Season (`"Jan - Apr"`, `"May - Aug"`, `"Sep - Dec"`) computed at build time via `src/libs/dateUtils.ts` → `src/models/currentMonth.ts` (`CURRENT_MONTH`).
- Part 2 fixed categories: `Person`, `Object`, `Activity`, `Place`.

### URL encoding
- `src/libs/functions.ts`: `encodeURLSegment` / `decodeURLSegment` — spaces ↔ hyphens. **Never `encodeURIComponent` for route segments.**

### Styling
- Custom `@theme` colors in `globals.css`: `blue-primary`, `text-strong`, `text-main`, `text-light`, `grey`.
- Custom fonts via `next/font/google`: PT Serif (`--font-ptSerif`), Bree Serif (`--font-breeSerif`), Oswald (`--font-oswald`). Use `font-(family-name:--font-*)` syntax.

### Sitemap
- `next-sitemap.config.js` is **CommonJS** (`require`); rest of codebase is ESM.
- Excludes `/part1/*` and `/part2/question/*`, then dynamically adds them from Supabase at build time.

## Environment
- `.env` is gitignored (`.env*` in `.gitignore`). Provide `.env.local` to override.
- Required: `SUPABASE_URL`, `SUPABASE_KEY`.
