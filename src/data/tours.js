import cascadaLago from '@/assets/Tours/pueblo-escondido/cascada-lago.webp'
import ruinasDecote from '@/assets/Tours/pueblo-escondido/ruinas-decote-pescondido.webp'
import puenteCosteleta from '@/assets/Tours/pueblo-escondido/puente-costeleta-pescondido.webp'
import ruedaPueblo from '@/assets/Tours/pueblo-escondido/rueda-pueblo-pescondido.webp'
import construccion from '@/assets/Tours/pueblo-escondido/construccion-pescondido.webp'

import aguilaChampa from '@/assets/Tours/champaqui/aguila-champa.webp'
import cuevasChampa from '@/assets/Tours/champaqui/cuevas-champa.webp'
import parejaPiedras from '@/assets/Tours/champaqui/pareja-piedras-champa.webp'
import piedraAgua from '@/assets/Tours/champaqui/piedra-agua-reflejo-champa.webp'
import champaCielo from '@/assets/Tours/champaqui/champa-cielo.webp'

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
      { icono: '✔', label: 'Traslado en camioneta desde VGB o Santa Rosa' },
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

    nombre: 'Champa en el día',

    categoria: 'Trekking y montaña',

    descripcion: 'Travesía en 4x4 y trekking al Cerro Champaquí.',

    descripcionLarga:
      'Travesía para hacer cumbre al Champaqui (2790 msnm) con baja dificultad. Salimos en 4x4 desde Villa General Belgrano o Santa Rosa de Calamuchita, recorremos 3 horas hasta el filo de la montaña y desde allí trekking de 1 hora hasta la cumbre, donde disfrutaremos de vistas panorámicas y comeremos un sándwich. Regreso a las 17 hs.',

    imagen: cuevasChampa,

    imagenes: [aguilaChampa, cuevasChampa, parejaPiedras, piedraAgua, champaCielo],

    destacado: false,

    precio: '$130.000',

    duracion: 'Medio día',

    dificultad: 'Baja-media',

    capacidad: 'Mínimo 2 personas',

    incluye: [
      { icono: '✔', label: 'Traslado en camioneta desde VGB o Santa Rosa' },
      { icono: '✔', label: 'Te buscamos por tu alojamiento' },
      { icono: '✔', label: 'Snacks y almuerzo' },
      { icono: '✔', label: 'Recorrido guiado' },
      { icono: '✔', label: 'Seguro' },
      { icono: '✔', label: 'Botiquín y handy' },
    ],

    informacion: [
      { icono: '⛰', label: 'Cumbre 2790 msnm · 4x4 + trekking' },
      { icono: '⏰', label: 'Salida 7:30/8 hs · Regreso 17 hs' },
      { icono: '💰', label: 'Señá con 30% y pagá el saldo anterior a la salida' },
    ],
  },
]
