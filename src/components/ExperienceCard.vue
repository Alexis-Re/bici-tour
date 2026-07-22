<script setup>
defineProps({
  experience: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="grid lg:grid-cols-2 gap-16 items-center">
    <!-- Imagen -->
    <div :class="experience.invertido ? 'lg:order-2' : ''">
      <img
        :src="experience.imagen"
        :alt="experience.titulo"
        class="w-full h-[500px] object-cover rounded-3xl"
      />
    </div>

    <!-- Texto -->
    <div :class="experience.invertido ? 'lg:order-1' : ''">
      <p class="uppercase tracking-[0.25em] text-orange-500 text-sm font-semibold mb-4">
        EXPERIENCIA
      </p>

      <h3 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        {{ experience.titulo }}
      </h3>

      <p class="mt-8 text-lg text-gray-600 leading-8">
        {{ experience.descripcion }}
      </p>
    </div>
  </article>
</template>
