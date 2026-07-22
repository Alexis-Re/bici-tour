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
- **Pinia** for state (configured but minimally used)
- **Vue Router 5** (configured but not actively used - single-page layout)
- **ESLint flat config** + **oxlint** + **Prettier**

## Key Conventions
- **Path alias**: `@` → `./src`
- **Component naming**: Single-word names allowed (`vue/multi-word-component-names: off`)
- **Styling**: Tailwind utility classes only (no custom CSS files except `src/assets/main.css`)
- **Images**: Stored in `src/assets/` with `.webp`/`.png`/`.jpg`, imported via `@/assets/...`
- **Data**: Static content in `src/data/*.js` (tours, benefits, experiences, gallery)

## Project Structure
```
src/
├── components/     # Reusable UI components (Button, Card, Lightbox, NavBar, etc.)
├── sections/       # Page sections (Hero, Tours, Gallery, Contact, etc.)
├── data/           # Static content arrays
├── composables/    # Vue composables (useSmoothScroll)
├── assets/         # Images, main.css
├── App.vue         # Root layout (single-page sections)
└── main.js         # App entry (Vue + Pinia + Router)
```

## Linting Rules
- **oxlint**: Primary linter (fast, runs first), configured via `.oxlintrc.json`
- **eslint**: Runs after oxlint, uses flat config (`eslint.config.js`)
  - Vue essential rules + `vue/multi-word-component-names: off`
  - Prettier rules disabled via `eslint-config-prettier`
- **Prettier**: `semi: false`, `singleQuote: true`, `printWidth: 100`

## Known Gaps / Incomplete Sections
- `src/sections/Contact.vue` - placeholder only ("Contact")
- `src/sections/Testimonials.vue` - placeholder only ("Testimonials")
- `src/sections/Footer.vue` - placeholder only ("Footer")
- Only 1 tour defined (`Cerro de la Virgen`) in `src/data/tours.js`
- No actual contact form submission logic
- No testimonials data file

## Environment
- Node: `^20.19.0 || >=22.12.0`
- Package manager: npm (lockfile: `package-lock.json`)

## VS Code Setup (recommended)
- Extensions: Vue (Official), Tailwind CSS IntelliSense
- Settings in `.vscode/settings.json` enable format-on-save with Prettier