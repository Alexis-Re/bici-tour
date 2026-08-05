<script setup>
defineProps({
  benefit: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div
    class="bg-white rounded-2xl p-8 shadow-lg shadow-orange-500/5 hover:-translate-y-1 transition-transform duration-300"
  >
    <div class="text-center">
      <span class="text-4xl" aria-hidden="true">{{ benefit.icono }}</span>
    </div>

    <h3 class="text-xl font-bold text-gray-900 mt-4 text-center">
      {{ benefit.titulo }}
    </h3>

    <p class="mt-3 text-gray-600 leading-7">
      {{ benefit.descripcion }}
    </p>
  </div>
</template>
