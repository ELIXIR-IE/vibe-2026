# AGENTS.md

Guidance for AI coding agents (and human contributors) working in this repository.

## Project overview

Static website for VIBE 2026, the annual conference of the Virtual Institute of
Bioinformatics and Evolution, hosted by ELIXIR Ireland. Built with SvelteKit
(Svelte 5) + TypeScript + Tailwind CSS v4 + shadcn-svelte, exported as a fully
static site via `@sveltejs/adapter-static` and deployed to GitHub Pages under
the `/vibe-2026` base path.

## Setup & commands

- Install: `pnpm install`
- Dev server: `pnpm dev` (or `docker compose up --build`, the documented local
  workflow — serves at `http://localhost:5173/vibe-2026/`)
- Build: `pnpm build`
- Preview a production build: `pnpm preview`
- Type-check: `pnpm check`
- Format: `pnpm format` (writes)
- Lint (check only, no autofix): `pnpm lint`

## Before finishing any change

There is no automated test suite and no CI check runs before deploy, so a
build failure or type error goes straight to production. Before considering a
change done, run:

1. `pnpm check` — type errors
2. `pnpm lint` — Prettier formatting (or run `pnpm format` to fix)
3. `pnpm build` — the static export; `adapter-static` runs in `strict: true`
   mode, so any route that isn't fully prerenderable fails the build

## Code style

Enforced by Prettier (`.prettierrc`): 2-space indentation, double quotes,
trailing commas, 120-column width, Tailwind classes auto-sorted via
`prettier-plugin-tailwindcss`. Don't hand-format against these rules — run
`pnpm format` instead.

- Use Svelte 5 runes (`$props()`, `$state`, `$derived`, etc.) to match
  existing components — not the legacy `export let` / reactive `$:` syntax.
- Import from `src/lib` via the `@/` (or `$lib`) alias, not long relative
  paths like `../../..`.
- Reuse the shadcn-svelte primitives in `src/lib/components/ui/` instead of
  hand-rolling equivalent UI or pulling in another component library.

## Project structure

- `src/routes/` — pages (about, committee, dates, program-conference,
  program-ecr, speakers, venue, home), one `+page.svelte` per route.
- `src/lib/components/` — shared, page-level components (`Map.svelte`,
  `ScheduleConference.svelte`, `ScheduleEcr.svelte`, `Speakers.svelte`, etc.).
- `src/lib/components/ui/` — shadcn-svelte primitives (button, card,
  accordion, navigation-menu, sheet, ...).
- `static/` — public assets (images, PDFs, logos). This is the source of
  truth for anything served as a static file.
- `build/` — generated output. Gitignored; never hand-edit, it's overwritten
  on every build/deploy.

## Things that must not change without a clear reason

- `kit.paths.base = "/vibe-2026"` in `svelte.config.js` — must stay in sync
  with the GitHub Pages repo path and the nginx reverse-proxy block in
  `README.md`. Changing it silently breaks every internal link and asset URL.
- The `build/.nojekyll` step in `.github/workflows/deploy.yml` — required so
  GitHub Pages serves the `_app/` directory (Jekyll ignores underscore-
  prefixed paths by default). Do not remove it.
- The `adapter-static` config (`fallback: null`, `strict: true`) in
  `svelte.config.js` — every route must remain statically prerenderable; no
  server-only or dynamic (SSR-only) features.
- The deploy workflow triggers on pushes to `master`, not `main`.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the
site and deploys it to GitHub Pages automatically at
`https://elixir-ie.github.io/vibe-2026/`. The site is also reverse-proxied at
`elixir-ireland.ie/vibe-2026/` (nginx config documented in `README.md`) — that
infra is already live and depends on the base path above staying correct.
