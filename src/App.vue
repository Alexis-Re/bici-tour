<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'

import Hero from './sections/Hero.vue'
import Experiences from './sections/Experiences.vue'
import Tours from './sections/Tours.vue'
import Gallery from './sections/Gallery.vue'
import Benefits from './sections/Benefits.vue'
import Testimonials from './sections/Testimonials.vue'
import Contact from './sections/Contact.vue'
import Footer from './sections/Footer.vue'

const mostrarTestimonios = ref(false)
</script>

<template>
  <NavBar />
  <Hero />
  <Tours />
  <Experiences />
  <Gallery />
  <Benefits />
  <Testimonials v-if="mostrarTestimonios" />
  <Contact />
  <Footer />
</template>