import pzoverde from '@/assets/experiences/pzoverde.webp'
import xpliragrone from '@/assets/experiences/xpliragrone.jpg'
import logardi from '@/assets/experiences/logardi.webp'
import logolo from '@/assets/experiences/logolo.webp'

export const experiences = [
  {
    id: 1,

    titulo: 'Paisajes únicos',

    descripcion:
      'Recorridos diseñados para descubrir los mejores miradores del Valle de Calamuchita.',

    imagen: pzoverde,

    invertido: false,
  },

  {
    id: 2,

    titulo: 'Guías especializados',

    descripcion: 'Nuestros guías conocen cada sendero y acompañan el recorrido de principio a fin.',

    imagen: xpliragrone,

    invertido: true,
  },

  {
    id: 3,
    titulo: 'Bicicletas Premium',
    descripcion: 'Equipamiento revisado y preparado para brindar comodidad en cada salida.',

    imagen: logardi,

    invertido: false,
  },

  {
    id: 4,
    titulo: 'Paradas para descansar',
    descripcion: 'Nos tomamos el tiempo para disfrutar del paisaje y recuperar energías.',

    imagen: logolo,

    invertido: true,
  },
]
