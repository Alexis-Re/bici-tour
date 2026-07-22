<script setup>
import { ref, computed } from 'vue'
import SectionTitle from '@/components/SectionTitle.vue'
import GalleryItem from '@/components/GalleryItem.vue'
import Lightbox from '@/components/Lightbox.vue'
import { galleryItems, galleryCategories } from '@/data/gallery'

const activeCategory = ref('Todos')
const lightboxIndex = ref(null)

const filteredItems = computed(() => {
  if (activeCategory.value === 'Todos') return galleryItems
  return galleryItems.filter((item) => item.categoria === activeCategory.value)
})

function setCategory(categoria) {
  activeCategory.value = categoria
  lightboxIndex.value = null
}

function openLightbox(index) {
  lightboxIndex.value = index
}

function closeLightbox() {
  lightboxIndex.value = null
}

function showNext() {
  if (lightboxIndex.value === null) return
  lightboxIndex.value = (lightboxIndex.value + 1) % filteredItems.value.length
}

function showPrev() {
  if (lightboxIndex.value === null) return
  lightboxIndex.value =
    (lightboxIndex.value - 1 + filteredItems.value.length) % filteredItems.value.length
}
</script>

<template>
  <section id="galeria" class="bg-white px-6 py-24">
    <div class="mx-auto max-w-7xl">
      <SectionTitle
        subtitle="XPLORA GALLERY"
        title="Momentos del Valle"
        description="Un vistazo a los recorridos, los paisajes y la gente que los vive."
      />

      <div class="mb-12 flex flex-wrap justify-center gap-3">
        <button
          v-for="categoria in galleryCategories"
          :key="categoria"
          type="button"
          class="rounded-full px-5 py-2 text-sm font-semibold tracking-wider uppercase transition-colors duration-300"
          :class="
            activeCategory === categoria
              ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
              : 'bg-orange-50 text-gray-600 hover:bg-orange-100'
          "
          @click="setCategory(categoria)"
        >
          {{ categoria }}
        </button>
      </div>

      <div class="columns-2 gap-4 md:columns-3">
        <GalleryItem
          v-for="(item, index) in filteredItems"
          :key="item.id"
          :item="item"
          @select="openLightbox(index)"
        />
      </div>
    </div>

    <Lightbox
      v-if="lightboxIndex !== null"
      :items="filteredItems"
      :current-index="lightboxIndex"
      @close="closeLightbox"
      @next="showNext"
      @prev="showPrev"
    />
  </section>
</template>
