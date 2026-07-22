<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import BenefitCard from '@/components/BenefitCard.vue'

import { benefits } from '@/data/benefits'
</script>

<template>
  <section id="beneficios" class="py-24 px-6 bg-orange-50">
    <div class="max-w-7xl mx-auto">
      <SectionTitle
        subtitle="XPLORA BENEFITS"
        title="Lo que nos hace diferentes"
        description="Cada detalle está pensado para que tu experiencia sea segura, cómoda e inolvidable."
      />

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <BenefitCard v-for="benefit in benefits" :key="benefit.id" :benefit="benefit" />
      </div>
    </div>
  </section>
</template>
