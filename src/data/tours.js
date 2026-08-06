import cascadaLago from '@/assets/Tours/pueblo-escondido/cascada-lago.webp'
import ruinasDecote from '@/assets/Tours/pueblo-escondido/ruinas-decote-pescondido.webp'
import puenteCosteleta from '@/assets/Tours/pueblo-escondido/puente-costeleta-pescondido.webp'
import ruedaPueblo from '@/assets/Tours/pueblo-escondido/rueda-pueblo-pescondido.webp'
import construccion from '@/assets/Tours/pueblo-escondido/construccion-pescondido.webp'

import aguilaChampa from '@/assets/Tours/champaqui/aguila-champa.webp'
import cuevasChampa from '@/assets/Tours/champaqui/cuevas-champa.webp'
import parejaPiedras from '@/assets/Tours/champaqui/pareja-piedras-champa.webp'
import piedraAgua from '@/assets/Tours/champaqui/piedra-agua-reflejo-champa.webp'

export const tours = [
  {
    id: 1,

    nombre: 'Pueblo Escondido',

    categoria: 'Trekking y naturaleza',

    descripcion: 'Trekking al Salto del Tigre, cumbre al Cerro Áspero y visita a Pueblo Escondido.',

    descripcionLarga:
      'Una experiencia completa para desconectarse de la rutina. Recorreremos senderos naturales, llegaremos a la cumbre del Cerro Áspero, visitaremos las antiguas minas de tungsteno y descubriremos el histórico Pueblo Escondido. Todo con guía local, almuerzo y traslado incluido.',

    imagen: cascadaLago,

    imagenes: [cascadaLago, ruinasDecote, puenteCosteleta, ruedaPueblo, construccion],

    destacado: true,

    precio: '$150.000',

    duracion: 'Día completo',

    dificultad: 'Moderada',

    capacidad: 'Mínimo 2 personas',

    incluye: [
      { icono: '✔', label: 'Traslado en camioneta desde VGB' },
      { icono: '✔', label: 'Te buscamos por tu alojamiento' },
      { icono: '✔', label: 'Snacks y almuerzo' },
      { icono: '✔', label: 'Recorrido guiado' },
      { icono: '✔', label: 'Seguro' },
      { icono: '✔', label: 'Botiquín y handy' },
    ],

    informacion: [
      { icono: '⛰', label: 'Trekking + minas + pueblo' },
      { icono: '👥', label: 'Mínimo 2 personas' },
      { icono: '💰', label: 'Señá con 30% y pagá el saldo anterior a la salida' },
    ],
  },
  {
    id: 2,

    nombre: 'Champaquí',

    categoria: 'Trekking y montaña',

    descripcion: 'Ascenso al Cerro Champaquí, el techo de Córdoba, con vistas panorámicas increíbles.',

    descripcionLarga:
      'Una aventura inolvidable para los amantes de la montaña. Ascenderemos al Cerro Champaquí, el pico más alto de la provincia de Córdoba, disfrutando de paisajes espectaculares y flora nativa. Todo con guía local, almuerzo y traslado incluido.',

    imagen: cuevasChampa,

    imagenes: [aguilaChampa, cuevasChampa, parejaPiedras, piedraAgua],

    destacado: false,

    precio: '$150.000',

    duracion: 'Día completo',

    dificultad: 'Alta',

    capacidad: 'Mínimo 2 personas',

    incluye: [
      { icono: '✔', label: 'Traslado en camioneta desde VGB' },
      { icono: '✔', label: 'Te buscamos por tu alojamiento' },
      { icono: '✔', label: 'Snacks y almuerzo' },
      { icono: '✔', label: 'Recorrido guiado' },
      { icono: '✔', label: 'Seguro' },
      { icono: '✔', label: 'Botiquín y handy' },
    ],

    informacion: [
      { icono: '⛰', label: 'Trekking + montaña + Champaquí' },
      { icono: '👥', label: 'Mínimo 2 personas' },
      { icono: '💰', label: 'Señá con 30% y pagá el saldo anterior a la salida' },
    ],
  },
]
