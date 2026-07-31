import puebloEscondido from '@/assets/Tours/pueblo-escondido/fondo-virgen-vgb.webp'
import montana from '@/assets/Tours/pueblo-escondido/montana.webp'
import montanaPaisaje from '@/assets/Tours/pueblo-escondido/montana-paisaje-cielo.webp'
import entremontanas from '@/assets/Tours/pueblo-escondido/entremontanas.webp'
import vista from '@/assets/Tours/pueblo-escondido/vistaa.webp'

export const tours = [
  {
    id: 1,

    nombre: 'Pueblo Escondido',

    categoria: 'Trekking y naturaleza',

    descripcion: 'Trekking al Salto del Tigre, cumbre al Cerro Áspero y visita a Pueblo Escondido.',

    descripcionLarga:
      'Una experiencia completa para desconectarse de la rutina. Recorreremos senderos naturales, llegaremos a la cumbre del Cerro Áspero, visitaremos las antiguas minas de tungsteno y descubriremos el histórico Pueblo Escondido. Todo con guía local, almuerzo y traslado incluido.',

    imagen: puebloEscondido,

    imagenes: [puebloEscondido, montana, montanaPaisaje, entremontanas, vista],

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
