# AGENTS.md

Guidance for AI coding agents (and human contributors) working in this repository.

## Project overview

Static website for VIBE 2026, the annual conference of the Virtual Institute of
Bioinformatics and Evolution, hosted by Dublin City University (DCU). Built
with SvelteKit (Svelte 5) + TypeScript + Tailwind CSS v4 + shadcn-svelte,
exported as a fully static site via `@sveltejs/adapter-static` and deployed to
GitHub Pages at the custom domain `https://vibe-ireland.ie/`.

- **Domain**: `vibe-ireland.ie`, registered via Maxer, DNS hosted free on
  Cloudflare (DNS-only / grey cloud — apex `A` records to GitHub's
  `185.199.108-111.153`, `www` as a `CNAME` to `elixir-ie.github.io`). The
  same arrangement as the sister site `ienn.ie` (`ELIXIR-IE/esfri-ireland`).
  The domain is attached to GitHub Pages by `static/CNAME`, and GitHub issues
  the certificate for both the apex and `www`.
- The old project URL `https://elixir-ie.github.io/vibe-2026/` now **301-
  redirects** to `https://vibe-ireland.ie/`. GitHub does that automatically
  whenever a custom domain is set; it is not configured anywhere in this repo.

## Setup & commands

- Install: `pnpm install`
- Dev server: `pnpm dev` (or `docker compose up --build`, the documented local
  workflow — serves at `http://localhost:5173/`)
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

- `kit.paths.base = ""` in `svelte.config.js` — the site is served from the
  root of the custom domain `vibe-ireland.ie`, not from a `/vibe-2026/`
  sub-path. Do **not** "restore" it to `/vibe-2026`: that would break every
  internal link and asset URL on the live domain. It was correct only while
  the site was served from `elixir-ie.github.io/vibe-2026/`, before the domain
  was attached.
- `static/CNAME` (contents: `vibe-ireland.ie`) — `adapter-static` copies it to
  `build/CNAME`, which is what keeps the custom domain attached to GitHub
  Pages. Deleting it can drop the domain on the next deploy, and the site
  would fall back to the `github.io` URL with a broken base path.
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
`https://vibe-ireland.ie/`.

Cloudflare only hosts DNS; it does **not** proxy the traffic (grey cloud), so
requests go straight from the visitor to GitHub Pages and GitHub terminates
TLS with its own certificate. There is no reverse proxy or CDN in front of the
site. If the Cloudflare proxy is ever switched on (orange cloud), the SSL/TLS
mode must be **Full (strict)** — `Flexible` causes an infinite redirect loop
against GitHub Pages.
