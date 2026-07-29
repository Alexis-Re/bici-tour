import virgenImage from '@/assets/Tours/cerro-virgen/fondo-virgen-vgb.webp'
import montaña from '@/assets/Tours/cerro-virgen/montaña.webp'
import montañaPaisaje from '@/assets/Tours/cerro-virgen/montaña-paisaje-cielo.webp'
import entremontañas from '@/assets/Tours/cerro-virgen/entremontañas.webp'
import vista from '@/assets/Tours/cerro-virgen/vistaa.webp'

export const tours = [
  {
    id: 1,

    nombre: 'Cerro de la Virgen',

    categoria: 'Trekking de montaña',

    descripcion: 'Ascendé por senderos serranos hasta uno de los mejores miradores del valle.',

    descripcionLarga:
      'Un recorrido pensado para todos los niveles que te lleva por senderos naturales rodeados de sierras hasta la cima del Cerro de la Virgen. Desde arriba, la vista panorámica del Valle de Calamuchita te deja sin palabras. El camino está señalizado y contás con guía local durante todo el trayecto.',

    imagen: virgenImage,

    imagenes: [virgenImage, montaña, montañaPaisaje, entremontañas, vista],

    destacado: true,

    precio: '$35.000',

    duracion: '3 horas',

    dificultad: 'Fácil',

    capacidad: '10 personas',

    incluye: [
      { icono: '✔', label: 'Guía local especializado' },
      { icono: '✔', label: 'Paradas panorámicas' },
      { icono: '✔', label: 'Asistencia durante todo el recorrido' },
    ],

    informacion: [
      { icono: '⛰', label: 'Desnivel: 180 m' },
      { icono: '👥', label: 'Máximo 10 personas' },
      { icono: '🚶', label: 'Apto para principiantes' },
    ],
  },
]
