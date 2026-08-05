<script setup>
import SectionTitle from '@/components/SectionTitle.vue'

const pasos = [
  {
    numero: 1,
    titulo: 'Elegí tu recorrido',
    descripcion: 'Descubrí nuestros tours y elegí la experiencia que más te guste.',
  },
  {
    numero: 2,
    titulo: 'Reservá online',
    descripcion: 'Completá el formulario y te confirmamos la fecha al instante.',
  },
  {
    numero: 3,
    titulo: 'Viví la experiencia',
    descripcion: 'Solo preocupate por disfrutar. Nosotros nos encargamos de todo.',
  },
]

const stats = [
  { valor: '40', label: 'Recorridos realizados' },
  { valor: '15', label: 'Años de experiencia' },
  { valor: '✓', label: 'Seguro incluido' },
  { valor: '24hs', label: 'Respuesta garantizada' },
]
</script>

<template>
  <section id="experiencias" class="py-28 px-6 bg-orange-50">
    <div class="max-w-7xl mx-auto">
      <SectionTitle
        subtitle="CÓMO FUNCIONA"
        title="En 3 simples pasos"
        description="Reservar tu experiencia con Xplora es rápido y fácil."
      />

      <div class="relative mt-16">
        <div class="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-orange-200" />

        <div class="grid md:grid-cols-3 gap-12 md:gap-8">
          <div
            v-for="paso in pasos"
            :key="paso.numero"
            class="relative text-center"
          >
            <div
              class="mx-auto w-16 h-16 rounded-full bg-orange-500 text-white text-2xl font-bold flex items-center justify-center shadow-lg shadow-orange-500/30 relative z-10"
            >
              {{ paso.numero }}
            </div>
            <h3 class="mt-6 text-xl font-bold text-gray-900">{{ paso.titulo }}</h3>
            <p class="mt-3 text-gray-600 leading-7">{{ paso.descripcion }}</p>
          </div>
        </div>
      </div>

      <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="bg-white rounded-2xl p-6 text-center border border-orange-100 shadow-sm"
        >
          <p class="text-3xl md:text-4xl font-bold text-orange-500">{{ stat.valor }}</p>
          <p class="mt-2 text-sm text-gray-600">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
