import pzoverde from '@/assets/Experiences/pzoverde.webp'
import xpliragrone from '@/assets/Experiences/xpliragrone.webp'
import logardi from '@/assets/Experiences/logardi.webp'
import logolo from '@/assets/Experiences/logolo.webp'

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
