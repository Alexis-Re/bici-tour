<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import ToursCard from '@/components/ToursCard.vue'

import { tours } from '@/data/tours'
</script>

<template>
  <section id="recorridos" class="py-24 px-6 bg-white">
    <div class="max-w-7xl mx-auto">
      <SectionTitle
        subtitle="XPLORA TOURS"
        title="Recorridos disponibles"
        description="Elegí el recorrido que mejor se adapte a tu próxima aventura."
      />

      <div class="space-y-16">
        <ToursCard v-for="tour in tours" :key="tour.id" :tour="tour" />
      </div>
    </div>
  </section>
</template>
