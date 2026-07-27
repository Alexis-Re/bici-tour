<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import ExperienceCard from '@/components/ExperienceCard.vue'

import { experiences } from '@/data/experiences'
</script>

<template>
  <section id="experiencias" class="py-28 px-6 bg-orange-50">
    <div class="max-w-7xl mx-auto">
      <SectionTitle
        subtitle="XPLORA EXPERIENCE"
        title="¿Por qué elegir Xplora?"
        description="Cada recorrido está pensado para que disfrutes la naturaleza con seguridad, comodidad y experiencias inolvidables."
      />

      <div class="space-y-16">
        <ExperienceCard
          v-for="experience in experiences"
          :key="experience.id"
          :experience="experience"
        />
      </div>
    </div>
  </section>
</template>
