# VIBE 2026

[![Licence: GPL-3.0](https://img.shields.io/badge/Licence-GPL--3.0-blue.svg)](LICENSE)

Website for the 2026 annual conference of the Virtual Institute of Bioinformatics and Evolution (VIBE), hosted by Dublin City University (DCU) at its Glasnevin Campus, Dublin.

Based on [vibe-2025](https://github.com/McLysaght-Evolutionary-Genetics/vibe-2025) by [McLysaght Evolutionary Genetics](https://github.com/McLysaght-Evolutionary-Genetics), original site built by [Dragon1320](https://github.com/Dragon1320), and licensed under the **GPL-3.0** — the same licence as that source. See [Licence](#licence) below.

See [AGENTS.md](AGENTS.md) for coding conventions and guardrails to follow when making changes (for both humans and AI agents).

---

## Local development

Requires [Docker](https://docs.docker.com/get-docker/).

```bash
docker compose up --build
```

Starts a Vite dev server with hot module replacement. The site is available at:

**http://localhost:5173/vibe-2026/**

Changes to files under `src/` and `static/` are reflected in the browser instantly. Stop with `Ctrl+C`.

> On first run `--build` downloads the base image and installs dependencies (~1–2 min). Subsequent runs start in seconds from the cached layer.

---

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the static site and deploys to GitHub Pages automatically.

**Live site:** https://elixir-ie.github.io/vibe-2026/

To enable GitHub Pages on a new repo: **Settings → Pages → Source → GitHub Actions**.

---

## Production preview (without Docker)

```bash
pnpm install
pnpm build
pnpm preview
```

---

## Licence

This project is licensed under the **GNU General Public License v3.0 (GPL-3.0)**.

It is a derivative of [vibe-2025](https://github.com/McLysaght-Evolutionary-Genetics/vibe-2025), which is released under the GPL-3.0. That licence carries forward: VIBE 2026 is distributed under the GPL-3.0, and so must anything derived from it. You are free to use, study, share and modify this code, provided derivative works are released under the same licence and keep the copyright notices intact.

The full licence text is in [LICENSE](LICENSE) — a verbatim copy of the GPL-3.0, byte-identical to the one in vibe-2025.

The GPL-3.0 grant covers the **source code** of this site: the Svelte components, styles, configuration and build tooling. It does not transfer rights to third-party material the site merely includes or references — logos (VIBE, ELIXIR, sponsors), speaker and venue photographs and conference content in `static/` remain the property of their respective owners; the venue map is a Google Maps embed under Google's terms; and npm dependencies carry their own licences. If you reuse this code for another event, replace that branding and content with your own.
