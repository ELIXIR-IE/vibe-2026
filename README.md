# VIBE 2026

Website for the 2026 annual conference of the Virtual Institute of Bioinformatics and Evolution (VIBE), hosted by [ELIXIR Ireland](https://www.elixir-ireland.ie/).

Based on [vibe-2025](https://github.com/McLysaght-Evolutionary-Genetics/vibe-2025) by [McLysaght Evolutionary Genetics](https://github.com/McLysaght-Evolutionary-Genetics). Original site built by [Dragon1320](https://github.com/Dragon1320).

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

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static site and deploys to GitHub Pages automatically.

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
