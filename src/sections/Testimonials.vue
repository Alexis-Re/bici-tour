<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import { testimonials } from '@/data/testimonials'

function estrellas(cantidad) {
  return '★'.repeat(cantidad) + '☆'.repeat(5 - cantidad)
}
</script>

<template>
  <section id="testimonios" class="py-24 px-6 bg-white">
    <div class="max-w-7xl mx-auto">
      <SectionTitle
        subtitle="XPLORA REVIEWS"
        title="Lo que dicen nuestros viajeros"
        description="Opiniones reales de personas que vivieron una experiencia con nosotros en el Valle de Calamuchita."
      />

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="testimonio in testimonials"
          :key="testimonio.id"
          class="bg-orange-50 rounded-2xl p-8 border border-orange-100 hover:-translate-y-1 transition-transform duration-300 flex flex-col"
        >
          <div class="text-orange-600 text-lg tracking-widest mb-4">
            {{ estrellas(testimonio.calificacion) }}
          </div>

          <p class="text-gray-700 leading-7 flex-1">"{{ testimonio.comentario }}"</p>

          <div class="mt-6 pt-6 border-t border-gray-200">
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm"
              >
                {{ testimonio.nombre.charAt(0) }}
              </div>
              <div>
                <p class="font-semibold text-gray-900 text-sm">{{ testimonio.nombre }}</p>
                <p class="text-gray-500 text-xs">{{ testimonio.origen }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
