<script setup>
import { onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  currentIndex: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['close', 'next', 'prev'])

const currentItem = computed(() => props.items[props.currentIndex])

function handleKeydown(event) {
  if (event.key === 'Escape') emit('close')
  if (event.key === 'ArrowRight') emit('next')
  if (event.key === 'ArrowLeft') emit('prev')
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-100 flex items-center justify-center bg-black/90 px-4 backdrop-blur-sm"
      @click.self="$emit('close')"
    >
      <button
        type="button"
        class="absolute top-6 right-6 text-white/80 transition-colors hover:text-white"
        aria-label="Cerrar galería"
        @click="$emit('close')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <button
        type="button"
        class="absolute left-4 text-white/70 transition-colors hover:text-white md:left-8"
        aria-label="Imagen anterior"
        @click="$emit('prev')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <figure class="flex w-full max-w-4xl flex-col items-center">
        <img
          :src="currentItem.imagen"
          :alt="currentItem.alt"
          class="max-h-[75vh] w-auto rounded-2xl object-contain"
        />
        <figcaption v-if="currentItem.alt" class="mt-4 text-center text-sm text-white/70">
          {{ currentItem.alt }}
        </figcaption>
      </figure>

      <button
        type="button"
        class="absolute right-4 text-white/70 transition-colors hover:text-white md:right-8"
        aria-label="Imagen siguiente"
        @click="$emit('next')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </Teleport>
</template>
