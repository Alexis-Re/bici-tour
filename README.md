# Xplora VGB — Bici Tour

Landing page para **Xplora VGB**, empresa de turismo de aventura en Villa General Belgrano y el Valle de Calamuchita, Córdoba, Argentina.

Recorridos guiados de trekking y cicloturismo con guías locales, equipamiento premium y experiencias inolvidables en la naturaleza.

## Demo

🌐 [https://xploravgb.com](https://xploravgb.com)

## Stack

- **Vue 3** — Composition API, `<script setup>`
- **Vite 8** — Build rápido con hot reload
- **Tailwind CSS v4** — Estilos utility-first
- **ESLint + Oxlint + Prettier** — Calidad de código

## Instalación

```sh
git clone https://github.com/Alexis-Re/bici-tour.git
cd bici-tour
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build para producción |
| `npm run preview` | Preview del build |
| `npm run lint` | Oxlint + ESLint |
| `npm run format` | Formatear con Prettier |

## Estructura

```
src/
├── components/       # UI reutilizable
│   ├── Button.vue
│   ├── NavBar.vue
│   ├── ToursCard.vue
│   ├── TourModal.vue
│   ├── ImageCarousel.vue
│   ├── SectionTitle.vue
│   ├── BenefitCard.vue
│   ├── ExperienceCard.vue
│   ├── GalleryItem.vue
│   └── Lightbox.vue
├── sections/         # Secciones de la página
│   ├── Hero.vue
│   ├── Tours.vue
│   ├── Experiences.vue
│   ├── Gallery.vue
│   ├── Benefits.vue
│   ├── Testimonials.vue
│   ├── Contact.vue
│   └── Footer.vue
├── data/             # Contenido estático
│   ├── tours.js
│   ├── experiences.js
│   ├── benefits.js
│   ├── gallery.js
│   └── testimonials.js
├── composables/      # Lógica reutilizable
│   └── useSmoothScroll.js
├── assets/           # Imágenes
├── App.vue
└── main.js
```

## Autor

**Alexis Re** — [GitHub](https://github.com/Alexis-Re)
