<script setup>
import Button from './Button.vue'

defineProps({
  tour: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="bg-white rounded-3xl overflow-hidden shadow-xl grid lg:grid-cols-2">
    <!-- Imagen -->
    <div class="relative h-[350px] lg:h-auto">
      <img :src="tour.imagen" :alt="tour.nombre" class="w-full h-full object-cover" />

      <div
        v-if="tour.destacado"
        class="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow"
      >
        ⭐ Más elegido
      </div>
    </div>

    <!-- Contenido -->
    <div class="p-10 flex flex-col justify-center">
      <span class="text-orange-500 font-semibold uppercase tracking-wider">
        {{ tour.categoria }}
      </span>

      <h3 class="text-4xl font-bold mt-3 text-gray-900">
        {{ tour.nombre }}
      </h3>

      <p class="mt-6 text-gray-600 text-lg">
        {{ tour.descripcion }}
      </p>

      <div class="mt-8 grid grid-cols-3 gap-6">
        <div>
          <p class="text-sm text-gray-500 uppercase">Duración</p>

          <p class="font-semibold text-gray-900">
            {{ tour.duracion }}
          </p>
        </div>

        <div>
          <p class="text-sm text-gray-500 uppercase">Dificultad</p>

          <p class="font-semibold text-gray-900">
            {{ tour.dificultad }}
          </p>
        </div>

        <div>
          <p class="text-sm text-gray-500 uppercase">Precio</p>

          <p class="font-bold text-2xl text-orange-500">
            {{ tour.precio }}
          </p>
        </div>
      </div>

      <div class="border-t border-orange-100 my-8 pt-8">
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Incluye -->
          <div>
            <h4 class="text-lg font-semibold text-gray-900 mb-4">Incluye</h4>

            <ul class="space-y-3 text-gray-600">
              <li v-for="item in tour.incluye" :key="item.label" class="flex items-center gap-2">
                <span>{{ item.icono }}</span>
                <span>{{ item.label }}</span>
              </li>
            </ul>
          </div>

          <!-- Información -->
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
      </div>

      <Button>Conocer recorrido</Button>
    </div>
  </div>
</template>
