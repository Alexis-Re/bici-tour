<script setup>
import { ref } from 'vue'
import logo from '@/assets/logo.svg'
import { useSmoothScroll } from '@/composables/useSmoothScroll'

const links = [
  { id: 'recorridos', label: 'Recorridos' },
  { id: 'experiencias', label: 'Experiencias' },
  { id: 'galeria', label: 'Galería' },
  { id: 'beneficios', label: 'Beneficios' },
  { id: 'beneficios', label: 'Nosotros' },
  { id: 'contacto', label: 'Contacto' },
]

const isMenuOpen = ref(false)
const { scrollToSection } = useSmoothScroll()

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

function closeMenu() {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

function handleMobileLinkClick(sectionId) {
  closeMenu()
  setTimeout(() => scrollToSection(sectionId), 300)
}
</script>

<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-black/25 backdrop-blur-md border-b border-white/5">
    <div class="max-w-7xl mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
      <div class="flex-shrink-0">
        <img
          :src="logo"
          alt="Xplora VGB"
          class="h-10 md:h-12 w-auto transition-transform duration-300 hover:scale-105"
        />
      </div>

      <ul
        class="hidden md:flex items-center gap-8 lg:gap-10 text-xs uppercase font-semibold tracking-[0.15em] text-white/90"
      >
        <li
          v-for="link in links"
          :key="link.id"
          class="hover:text-[#f97316] transition-colors duration-300"
        >
          <a :href="`#${link.id}`">{{ link.label }}</a>
        </li>
      </ul>

      <button
        type="button"
        class="md:hidden relative z-[70] h-8 w-8 text-white"
        :aria-expanded="isMenuOpen"
        aria-label="Abrir menú de navegación"
        @click="toggleMenu"
      >
        <span
          class="absolute left-0 block h-0.5 w-8 bg-current transition-all duration-300"
          :class="isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-2'"
        ></span>
        <span
          class="absolute left-0 top-1/2 block h-0.5 w-8 -translate-y-1/2 bg-current transition-opacity duration-300"
          :class="isMenuOpen ? 'opacity-0' : 'opacity-100'"
        ></span>
        <span
          class="absolute left-0 block h-0.5 w-8 bg-current transition-all duration-300"
          :class="isMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'top-6'"
        ></span>
      </button>
    </div>
  </nav>

  <!-- Overlay mobile: teleportado a body para que "fixed" se calcule
       contra el viewport real y no contra el <nav> (que crea su propio
       containing block por el backdrop-blur-md) -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 bg-gray-900/98 backdrop-blur-md md:hidden"
        @click="closeMenu"
      >
        <button
          v-for="link in links"
          :key="link.id"
          type="button"
          class="text-xl font-semibold uppercase tracking-[0.15em] text-white hover:text-orange-500 transition-colors duration-300"
          @click.stop="handleMobileLinkClick(link.id)"
        >
          {{ link.label }}
        </button>
      </div>
    </Transition>
  </Teleport>
</template>
