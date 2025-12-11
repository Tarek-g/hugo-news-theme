# Repository Guidelines

## Project Structure & Module Organization
- `client/` (Vite + React + Tailwind v4): entry `main.tsx`, app shell in `App.tsx`, UI primitives under `components/ui`, hooks/lib/pages are colocated.
- `server/` (Express): `app.ts` wires middleware + logging, `index-dev.ts` runs Vite middleware for SSR-like dev, `index-prod.ts` serves the built client, routes are registered via `routes.ts`, storage abstraction lives in `storage.ts`.
- `shared/` holds Drizzle schema (`schema.ts`) shared across server/client via path aliases `@/*` and `@shared/*`.
- `dist/` is the production output (`dist/public` for client assets, `dist/index.js` for the bundled server). `hugo-news-theme/` contains the exported static theme assets.

## Build, Test, and Development Commands
- `npm run dev` — full-stack dev: Express + Vite middleware on `PORT` (default 5000). Auto-refreshes `client/index.html` per request.
- `npm run dev:client` — client-only Vite dev server on port 5000 (use if you need a standalone frontend session).
- `npm run check` — TypeScript type-check across client/server/shared.
- `npm run build` — Vite client build to `dist/public` + esbuild bundle of `server/index-prod.ts` to `dist/index.js`.
- `npm start` — runs the bundled server in production mode (serves `dist/public`).
- `npm run db:push` — syncs the Drizzle schema to the configured Postgres (`DATABASE_URL` must be set).

## Coding Style & Naming Conventions
- TypeScript strict, ESM modules, prefer named exports; keep components PascalCase (`Button.tsx`), hooks camelCase (`useX.ts`), and shared types in `shared/`.
- Follow existing formatting: 2-space indent, semicolons, and path aliases (`@/…`, `@shared/…`). Tailwind utilities live in `client/src/index.css`; keep theme tokens in CSS vars.
- Co-locate new UI pieces under `components/ui` and new domain logic in `lib` or `server` as appropriate; keep storage interactions behind `storage.ts`.

## Testing Guidelines
- No test runner is configured yet. When adding tests, prefer Vitest/Jest co-located as `*.test.ts(x)` near the code under `client/src` or `server/`, and keep them excluded from builds.
- Cover route handlers, storage behaviors, and critical UI flows; document any manual test steps for auth/session flows alongside your PR.

## Commit & Pull Request Guidelines
- Commits in history use concise, sentence-style summaries (e.g., “Update website colors to blue and slate with dark mode support”). Follow the same pattern and keep scope focused.
- For PRs: include a short summary, linked issue/task, setup notes (env vars like `DATABASE_URL`, `PORT`), and screenshots/GIFs for UI changes. Mention any schema or migration impacts.

## Security & Configuration Tips
- Required env: `DATABASE_URL` (Postgres for Drizzle), optional `PORT` (defaults to 5000). Keep secrets out of git; use `.env` locally and deployment-specific secrets in your platform.
- Ensure `dist/public` exists before `npm start`; if missing, run `npm run build`. Use the in-memory storage only for dev—swap in a real persistence implementation before production.
