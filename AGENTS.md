# bici-tour — Agent Instructions

## Project Overview
Vue 3 + Vite + Tailwind CSS v4 landing page for a bike tour company (Xplora VGB) in Valle de Calamuchita, Argentina.

## Commands
| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (Vite) |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run oxlint + eslint (both with --fix) |
| `npm run format` | Format with Prettier |

**Required order**: `lint` → `build` (lint must pass before build)

## Tech Stack
- **Vue 3** (Composition API, `<script setup>`)
- **Vite 8** with `@vitejs/plugin-vue`
- **Tailwind CSS v4** (via `@tailwindcss/vite` plugin)
- **ESLint flat config** + **oxlint** + **Prettier**
- **Image optimization**: `vite-plugin-image-optimizer` (sharp-based, quality 80 for jpg/png/webp)

## Key Conventions
- **Path alias**: `@` → `./src`
- **Component naming**: Single-word names allowed (`vue/multi-word-component-names: off`)
- **Styling**: Tailwind utility classes only (no custom CSS files except `src/assets/main.css`)
- **Images**: Stored in `src/assets/` with `.webp`/`.png`/`.jpg`, imported via `@/assets/...`
- **Data**: Static content in `src/data/*.js` (tours, benefits, gallery, testimonials, contact)
- **No Pinia/Router**: State management and routing are NOT used despite being in package.json

## Project Structure
```
src/
├── components/     # Reusable UI components (Button, NavBar, ToursCard, TourModal, etc.)
├── sections/       # Page sections (Hero, Tours, Gallery, Contact, etc.)
├── data/           # Static content arrays (tours, benefits, gallery, testimonials, contact)
├── composables/    # Vue composables (useSmoothScroll)
├── assets/         # Images, main.css
├── App.vue         # Root layout (single-page sections)
└── main.js         # App entry (Vue only, no Pinia/Router)
```

## Linting Rules
- **oxlint**: Primary linter (fast, runs first), configured via `.oxlintrc.json`
  - Plugins: eslint, unicorn, oxc, vue
  - Environment: browser
  - Categories: correctness as error
- **eslint**: Runs after oxlint, uses flat config (`eslint.config.js`)
  - Vue essential rules + `vue/multi-word-component-names: off`
  - Prettier rules disabled via `eslint-config-prettier`
- **Prettier**: `semi: false`, `singleQuote: true`, `printWidth: 100`

## Known Gaps
- Only 1 tour defined (`Pueblo Escondido`) in `src/data/tours.js`
- `experiences.js` mentioned in README but doesn't exist (data is inline in `Experiences.vue`)

## Runtime Quirks
- `Testimonials` section is conditionally rendered via `v-if="mostrarTestimonios"` (defaults to `false` in `App.vue:14`)
- `.env` is gitignored; `.env.example` has placeholder values — EmailJS form won't work without real keys

## Environment
- Node: `^20.19.0 || >=22.12.0`
- Package manager: npm (lockfile: `package-lock.json`)

## Contact Form
- Uses EmailJS (`@emailjs/browser`); env vars `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` are in `.env` (committed with placeholder values)
- Has honeypot field for spam protection
- 30-second cooldown after successful submission

## VS Code Setup (recommended)
- Extensions: Vue (Official), Tailwind CSS IntelliSense
- Settings in `.vscode/settings.json` enable format-on-save with Prettier