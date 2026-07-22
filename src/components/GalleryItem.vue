<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})

defineEmits(['select'])
</script>

<template>
  <button
    type="button"
    class="mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
    @click="$emit('select')"
  >
    <span class="group relative block">
      <img
        :src="item.imagen"
        :alt="item.alt"
        loading="lazy"
        class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span
        class="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20"
      ></span>
    </span>
  </button>
</template>
