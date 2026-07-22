<script setup>

defineProps({

  subtitle: String,
  title: String,
  description: String

})

</script>

<template>

<div class="text-center mb-16">

  <p
    class="uppercase tracking-[0.2em] text-orange-500 mb-4"
  >
    {{ subtitle }}
  </p>

  <h2
    class="text-4xl md:text-5xl font-bold text-gray-900"
  >
    {{ title }}
  </h2>

  <p
    class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
  >
    {{ description }}
  </p>

</div>

</template>