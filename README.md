# VIBE 2026

[![Licence: GPL-3.0](https://img.shields.io/badge/Licence-GPL--3.0-blue.svg)](LICENSE.md)

Website for the 2026 annual conference of the Virtual Institute of Bioinformatics and Evolution (VIBE), hosted by [ELIXIR Ireland](https://www.elixir-ireland.ie/).

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

## Serving under elixir-ireland.ie

The site is designed to sit at `elixir-ireland.ie/vibe-2026/` via a reverse proxy on the main server. Add this block to the `elixir-ireland.ie` nginx config:

```nginx
location /vibe-2026/ {
    proxy_pass https://elixir-ie.github.io/vibe-2026/;
    proxy_set_header Host elixir-ie.github.io;
    proxy_ssl_server_name on;
    proxy_set_header Accept-Encoding "";
}
```

This is fully isolated from the main site — a single location block, no other changes required.

---

## Licence

This project is licensed under the **GNU General Public License v3.0 (GPL-3.0)**.

It is a derivative of [vibe-2025](https://github.com/McLysaght-Evolutionary-Genetics/vibe-2025), which is released under the GPL-3.0. That licence carries forward: VIBE 2026 is distributed under the GPL-3.0, and so must anything derived from it. You are free to use, study, share and modify this code, provided derivative works are released under the same licence and keep the copyright notices intact.

| File                     | Purpose                                                                                                  |
| ------------------------ | -------------------------------------------------------------------------------------------------------- |
| [LICENSE.md](LICENSE.md) | Licensing for this repository — the terms, attribution, what the grant covers, and the full licence text |
| [LICENSE](LICENSE)       | Plain-text GPL-3.0, byte-identical to the copy in vibe-2025                                              |

The GPL-3.0 grant covers the **source code** of this site. Logos (VIBE, ELIXIR, sponsors), speaker and venue photographs, and conference content in `static/` remain the property of their respective owners and are **not** licensed for reuse under the GPL-3.0 — see [LICENSE.md](LICENSE.md#what-this-covers) for the full breakdown. If you reuse this code for another event, replace that branding and content with your own.
