<script setup>
import { useSmoothScroll } from '@/composables/useSmoothScroll'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
  sectionId: {
    type: String,
    default: null,
  },
  showArrow: {
    type: Boolean,
    default: true,
  },
})

const { scrollToSection } = useSmoothScroll()

function handleClick() {
  if (props.sectionId) {
    scrollToSection(props.sectionId)
  }
}
</script>

<template>
  <button
    type="button"
    :class="[
      'inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 w-full md:w-fit',
      variant === 'primary'
        ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40'
        : 'bg-gray-200 hover:bg-gray-300 text-black shadow-lg',
    ]"
    @click="handleClick"
  >
    <slot />

    <svg
      v-if="showArrow"
      xmlns="http://www.w3.org/2000/svg"
      class="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>
</template>
