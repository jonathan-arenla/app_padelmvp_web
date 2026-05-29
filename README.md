# PadelMVP Web

Landing promocional de **PadelMVP**, construida con [Astro](https://astro.build) + Tailwind CSS.

## Estructura

- `src/pages/index.astro` — Página única con todas las secciones.
- `src/components/`
  - `Navbar.astro`, `Footer.astro`
  - `Hero.astro` — Hero con mockups de móvil en 3D y marquee.
  - `Features.astro` — Grid de funciones para jugadores.
  - `ThirdTime.astro` — Sección del 3er tiempo + MVP.
  - `Manager.astro` — PadelMVP Manager (pistas, reservas privadas, pagos).
  - `Dashboard.astro` — Mockup de dashboard con heatmap y reports.
  - `Pricing.astro` — 4 planes + comparativa vs Playtomic.
  - `Testimonials.astro`, `FAQ.astro`, `CTA.astro`.
  - `PhoneMockup.astro` — Mockups SVG de la app en 4 variantes (home, mvp, booking, wallet).
- `src/styles/global.css` — Tailwind + utilities 3D (`phone-tilt`, `card-3d`, `feature-card`, animaciones).
- `tailwind.config.mjs` — Colores `court`/`night`/`amber500`, fuentes display.

## Comandos (sin Docker)

```bash
npm install     # ya hecho
npm run dev     # servidor local en http://localhost:4321
npm run build   # genera /dist
npm run preview # previsualiza el build
```

## Docker

Dos modos: producción (nginx servando el build estático) y desarrollo (Astro dev server con hot-reload).

### Producción

```bash
docker compose up -d --build
# → http://localhost:8080
```

Imagen multi-stage: build con Node 22, runtime con `nginx:1.27-alpine` + gzip + cache headers + healthcheck (`/healthz`).

### Desarrollo (hot reload)

```bash
docker compose --profile dev up
# → http://localhost:4321
```

Monta el código del host como volumen para que los cambios en `src/` se reflejen en vivo.

### Otros comandos útiles

```bash
docker compose down              # parar
docker compose logs -f web       # logs
docker compose build --no-cache  # rebuild forzado
docker compose ps                # estado
```

### Cambiar el puerto

Edita `docker-compose.yml` → `ports: "8080:80"` por el puerto que quieras.

## Personalización rápida

- **Colores de marca**: `tailwind.config.mjs` → paleta `court` y acento `amber500`.
- **Mockups de móvil**: `src/components/PhoneMockup.astro` (4 variantes editables).
- **Planes y precios**: `src/components/Pricing.astro` → arrays `plans` y `comparison`.
- **Features**: `src/components/Features.astro` → array `features`.
- **Copy del Hero**: `src/components/Hero.astro`.

## Notas

- No tuve acceso al repo de la app (`/Users/jonathan/Repositorios/personal/PlayPadel/PlayPadel`) en este entorno, así que las descripciones están basadas en el brief que diste. Cuando me des acceso o me indiques features concretas del código, las afino.
- Imágenes 3D: actualmente son mockups SVG generados in-line (sin assets externos). Si quieres renders 3D reales (Blender/Spline/Figma), basta con sustituir los `<PhoneMockup>` por `<img>` en `Hero.astro`, `ThirdTime.astro` y `CTA.astro`.
- Los enlaces de App Store / Google Play son placeholders.
