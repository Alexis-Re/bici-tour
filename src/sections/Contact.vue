<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import SectionTitle from '@/components/SectionTitle.vue'
import { tours } from '@/data/tours'

const nombre = ref('')
const email = ref('')
const telefono = ref('')
const tourSeleccionado = ref('')
const mensaje = ref('')
const enviado = ref(false)
const error = ref(false)

function enviarFormulario() {
  error.value = false
  enviado.value = false

  emailjs
    .send(
      'service_dihy7pk',
      'template_qvvykzb',
      {
        nombre: nombre.value,
        email: email.value,
        telefono: telefono.value,
        tour: tourSeleccionado.value,
        mensaje: mensaje.value,
      },
      'mAOUk3yOWFd69Jyw4'
    )
    .then(() => {
      enviado.value = true
      nombre.value = ''
      email.value = ''
      telefono.value = ''
      tourSeleccionado.value = ''
      mensaje.value = ''
    })
    .catch(() => {
      error.value = true
    })
}
</script>

<template>
  <section id="contacto" class="py-24 px-6 bg-orange-50">
    <div class="max-w-7xl mx-auto">
      <SectionTitle
        subtitle="XPLORA CONTACT"
        title="Reservá tu experiencia"
        description="Contactanos para reservar tu lugar o para resolver cualquier consulta sobre nuestros recorridos."
      />

      <div class="grid lg:grid-cols-2 gap-16">
        <form class="space-y-6" @submit.prevent="enviarFormulario">
          <div>
            <label for="nombre" class="block text-sm font-semibold text-gray-900 mb-2">
              Nombre completo
            </label>
            <input
              id="nombre"
              v-model="nombre"
              type="text"
              required
              placeholder="Tu nombre"
              class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-300 bg-white"
            />
          </div>

          <div class="grid sm:grid-cols-2 gap-6">
            <div>
              <label for="email" class="block text-sm font-semibold text-gray-900 mb-2">
                Email
              </label>
              <input
                id="email"
                v-model="email"
                type="email"
                required
                placeholder="tu@email.com"
                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-300 bg-white"
              />
            </div>

            <div>
              <label for="telefono" class="block text-sm font-semibold text-gray-900 mb-2">
                Teléfono
              </label>
              <input
                id="telefono"
                v-model="telefono"
                type="tel"
                placeholder="351 123 4567"
                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-300 bg-white"
              />
            </div>
          </div>

          <div>
            <label for="tour" class="block text-sm font-semibold text-gray-900 mb-2">
              Recorrido de interés
            </label>
            <select
              id="tour"
              v-model="tourSeleccionado"
              required
              class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-300 bg-white"
            >
              <option value="" disabled>Elegí un recorrido</option>
              <option v-for="tour in tours" :key="tour.id" :value="tour.nombre">
                {{ tour.nombre }} — {{ tour.precio }}
              </option>
            </select>
          </div>

          <div>
            <label for="mensaje" class="block text-sm font-semibold text-gray-900 mb-2">
              Mensaje (opcional)
            </label>
            <textarea
              id="mensaje"
              v-model="mensaje"
              rows="4"
              placeholder="Contanos si tenés alguna consulta, preferencia de fecha, cantidad de personas..."
              class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-300 resize-none bg-white"
            ></textarea>
          </div>

          <button
            v-if="!enviado && !error"
            type="submit"
            class="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            Enviar reserva
          </button>

          <div
            v-else-if="enviado && !error"
            class="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
          >
            <p class="text-green-700 font-semibold text-lg">
              ¡Gracias! Recibimos tu consulta.
            </p>
            <p class="text-green-600 mt-2">
              Te vamos a contactar pronto para confirmar tu reserva.
            </p>
          </div>

          <div
            v-else-if="error"
            class="bg-red-50 border border-red-200 rounded-xl p-6 text-center"
          >
            <p class="text-red-700 font-semibold text-lg">
              Hubo un error al enviar.
            </p>
            <p class="text-red-600 mt-2">
              Intentá de nuevo o escribinos por WhatsApp.
            </p>
          </div>
        </form>

        <div class="flex flex-col justify-center gap-8">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">¿Preferís escribirnos directo?</h3>
            <p class="text-gray-600 leading-7">
              Respondemos por WhatsApp en menos de 1 hora. También podés escribirnos por Instagram o email.
            </p>
          </div>

          <div class="space-y-4">
            <a
              href="https://wa.me/5493546546755?text=Hola!%20Quiero%20reservar%20una%20experiencia%20con%20Xplora"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-green-500/20"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
              <span class="font-semibold">WhatsApp</span>
            </a>

            <a
              href="mailto:hola@xploravgb.com?subject=Consulta%20Xplora%20VGB"
              class="flex items-center gap-4 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="font-semibold">hola@xploravgb.com</span>
            </a>

            <a
              href="https://instagram.com/xploravgb"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-purple-500/20"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span class="font-semibold">@xploravgb</span>
            </a>
          </div>

          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <p class="text-sm text-gray-600 leading-7">
              <strong class="text-gray-900">Ubicación:</strong> Villa General Belgrano, Córdoba, Argentina.
              Nos encontramos en el Valle de Calamuchita, rodeados de sierras y ríos.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
