<script setup>
import heroImage from '@/assets/fondo-hero-xplora.webp'
import Button from '@/components/Button.vue'
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Fondo -->
    <div
      class="absolute inset-0 bg-cover bg-top"
      :style="{ backgroundImage: `url(${heroImage})` }"
    ></div>

    <!-- Oscurecedor -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Contenido -->
    <div class="relative z-10 text-center px-6 max-w-4xl">
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
