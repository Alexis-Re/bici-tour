import cascadaLago from '@/assets/Tours/pueblo-escondido/cascada-lago.webp'
import ruinasDecote from '@/assets/Tours/pueblo-escondido/ruinas-decote-pescondido.webp'
import puenteCosteleta from '@/assets/Tours/pueblo-escondido/puente-costeleta-pescondido.webp'
import ruedaPueblo from '@/assets/Tours/pueblo-escondido/rueda-pueblo-pescondido.webp'
import construccion from '@/assets/Tours/pueblo-escondido/construccion-pescondido.webp'

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

    precioDescuento: '$120.000',

    precioDescuentoInfo: '3 o 4 personas',

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
]
