FROM node:20-alpine AS deps
RUN npm install -g pnpm
WORKDIR /app
COPY .npmrc package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM deps AS dev
COPY svelte.config.js vite.config.ts ./
CMD ["pnpm", "dev", "--host"]

FROM deps AS builder
COPY . .
RUN pnpm build

FROM nginx:alpine AS prod
COPY --from=builder /app/build /usr/share/nginx/html/vibe-2026
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
