<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
})

const currentIndex = ref(0)
let interval = null

function next() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

function goTo(index) {
  currentIndex.value = index
  stopAutoplay()
  startAutoplay()
}

function startAutoplay() {
  interval = setInterval(next, 4000)
}

function stopAutoplay() {
  clearInterval(interval)
}

onUnmounted(() => {
  clearInterval(interval)
})

onMounted(() => {
  startAutoplay()
})
</script>

<template>
  <div
    class="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-t-3xl bg-gray-900"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <img
      v-for="(img, index) in images"
      :key="index"
      :src="img"
      :alt="`Imagen ${index + 1} del tour`"
      class="absolute inset-0 w-full h-full object-contain transition-opacity duration-700"
      :class="index === currentIndex ? 'opacity-100' : 'opacity-0'"
    />

    <button
      type="button"
      aria-label="Imagen anterior"
      class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-sm"
      @click="prev"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button
      type="button"
      aria-label="Imagen siguiente"
      class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-sm"
      @click="next"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      <button
        v-for="(_, index) in images"
        :key="index"
        type="button"
        :aria-label="`Ir a imagen ${index + 1}`"
        class="w-2 h-2 rounded-full transition-all duration-300"
        :class="index === currentIndex ? 'bg-white w-6' : 'bg-white/50'"
        @click="goTo(index)"
      ></button>
    </div>
  </div>
</template>
