<script setup>
import { onUnmounted } from 'vue'
import ImageCarousel from './ImageCarousel.vue'

defineProps({
  tour: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['close'])

document.body.style.overflow = 'hidden'

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in"
      @click.self="emit('close')"
    >
      <div class="absolute inset-0 bg-black/60 backdrop-blur-md" @click="emit('close')"></div>

      <div
        class="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10"
      >
        <button
          type="button"
          aria-label="Cerrar modal"
          class="absolute top-4 right-4 z-20 w-10 h-10 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-sm"
          @click="emit('close')"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <ImageCarousel :images="tour.imagenes" />

        <div class="p-8 md:p-10">
          <span class="text-orange-500 font-semibold uppercase tracking-wider text-sm">
            {{ tour.categoria }}
          </span>

          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            {{ tour.nombre }}
          </h2>

          <p class="mt-6 text-gray-600 text-lg leading-8">
            {{ tour.descripcionLarga }}
          </p>

          <div class="mt-8 grid grid-cols-3 gap-4">
            <div class="text-center p-4 bg-orange-50 rounded-xl">
              <p class="text-sm text-gray-500 uppercase">Duración</p>
              <p class="font-semibold text-gray-900 mt-1">{{ tour.duracion }}</p>
            </div>
            <div class="text-center p-4 bg-orange-50 rounded-xl">
              <p class="text-sm text-gray-500 uppercase">Dificultad</p>
              <p class="font-semibold text-gray-900 mt-1">{{ tour.dificultad }}</p>
            </div>
            <div class="text-center p-4 bg-orange-50 rounded-xl">
              <p class="text-sm text-gray-500 uppercase">Precio</p>
              <p class="font-bold text-orange-500 mt-1">{{ tour.precio }}</p>
            </div>
          </div>

          <div class="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <h4 class="text-lg font-semibold text-gray-900 mb-4">Incluye</h4>
              <ul class="space-y-3 text-gray-600">
                <li
                  v-for="item in tour.incluye"
                  :key="item.label"
                  class="flex items-center gap-2"
                >
                  <span>{{ item.icono }}</span>
                  <span>{{ item.label }}</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-gray-900 mb-4">Información</h4>
              <ul class="space-y-3 text-gray-600">
                <li
                  v-for="item in tour.informacion"
                  :key="item.label"
                  class="flex items-center gap-2"
                >
                  <span>{{ item.icono }}</span>
                  <span>{{ item.label }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              class="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl text-center transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-orange-500/20"
              @click="emit('close')"
            >
              Reservar este recorrido
            </a>
            <button
              type="button"
              class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-4 rounded-xl transition-all duration-300"
              @click="emit('close')"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
