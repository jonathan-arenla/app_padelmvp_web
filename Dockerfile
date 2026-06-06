# syntax=docker/dockerfile:1.7

# ---------- Stage 1: build ----------
FROM node:22-alpine AS builder
WORKDIR /app

# Install deps with cache
COPY package.json package-lock.json* ./
RUN --mount=type=cache,target=/root/.npm \
    npm install --no-audit --no-fund

# Copy sources & build static site
COPY . .
# Patch Astro's vite logger to fix Node 22 compatibility issue
RUN node -e "\
const fs = require('fs');\
const p = 'node_modules/astro/dist/core/logger/vite.js';\
let c = fs.readFileSync(p, 'utf-8');\
c = c.replace(\
  'if (msg.includes(\"Error when evaluating SSR module\") || msg.includes(\"Pre-transform error:\"))',\
  'if (typeof msg === \"string\" && (msg.includes(\"Error when evaluating SSR module\") || msg.includes(\"Pre-transform error:\")))',\
);\
fs.writeFileSync(p, c);\
console.log('Patched vite logger for Node 22 compatibility');\
"
RUN npm run build

# ---------- Stage 2: runtime (nginx) ----------
FROM nginx:1.27-alpine AS runtime

# Custom nginx config (gzip, caching, SPA-friendly fallback)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static build output
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1

CMD ["nginx", "-g", "daemon off;"]
