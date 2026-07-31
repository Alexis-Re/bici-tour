<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import heroImage from '@/assets/fondo-hero-xplora.webp'
import Button from '@/components/Button.vue'

const offset = ref(0)

let animationId = null
let targetOffset = 0
const MAX_OFFSET = 200

function getFactor() {
  return window.innerWidth < 768 ? 0.15 : 0.4
}

function handleScroll() {
  targetOffset = Math.min(window.scrollY * getFactor(), MAX_OFFSET)

  if (!animationId) {
    animate()
  }
}

function animate() {
  const diff = targetOffset - offset.value

  offset.value += diff * 0.15

  if (Math.abs(diff) > 0.1) {
    animationId = requestAnimationFrame(animate)
  } else {
    offset.value = targetOffset
    animationId = null
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (animationId) cancelAnimationFrame(animationId)
})
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Fondo -->
    <div
      class="absolute inset-0 bg-cover bg-top will-change-transform"
      :style="{ backgroundImage: `url(${heroImage})`, transform: `translateY(${offset}px)` }"
      role="img"
      aria-label="Paisaje de montañas en el Valle de Calamuchita"
    ></div>

    <!-- Oscurecedor -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Contenido -->
    <div class="relative z-10 text-center px-6 max-w-4xl pt-20">
      <p class="uppercase tracking-[0.25em] text-white font-black text-l mb-4 drop-shadow-md">
        Xplora VGB
      </p>

      <h1 class="text-white text-5xl md:text-7xl font-bold leading-tight">
        Tu próxima aventura en el Valle de Calamuchita
      </h1>

      <p class="text-white/90 mt-8 text-lg md:text-xl">
        Senderos, paisajes y experiencias únicas en el corazón del Valle
      </p>

      <div class="flex flex-col md:flex-row justify-center gap-4 mt-10">
        <Button section-id="contacto">Reservar Experiencia</Button>
        <Button variant="secondary" section-id="recorridos">Ver Recorridos</Button>
      </div>
    </div>
  </section>
</template>
