import virgenImage from '@/assets/tours/fondo-virgen-vgb.webp'

export const tours = [
  {
    id: 1,

    nombre: 'Cerro de la Virgen',

    categoria: 'Trekking de montaña',

    descripcion: 'Ascendé por senderos serranos hasta uno de los mejores miradores del valle.',

    imagen: virgenImage,

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
