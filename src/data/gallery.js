import senderoVista from '@/assets/gallery/sendero-vista.webp'
import grupoBicis from '@/assets/gallery/entrada-virgen.webp'
import miradorValle from '@/assets/gallery/mirador-valle.jpg'
import bicicletaDetalle from '@/assets/gallery/descubri.png'
import atardecerCerro from '@/assets/gallery/atardecer-cerro.png'
import guiaSendero from '@/assets/gallery/guia-sendero.webp'
import rioCalamuchita from '@/assets/gallery/montaña-sendero-virgen.webp'
import grupoDescanso from '@/assets/gallery/grupo-descanso.webp'

export const galleryCategories = ['Todos', 'Senderos', 'Bicicletas', 'Paisajes', 'Grupos']

export const galleryItems = [
  {
    id: 1,
    imagen: senderoVista,
    alt: 'Sendero con vista al valle',
    categoria: 'Senderos',
  },
  {
    id: 2,
    imagen: grupoBicis,
    alt: 'Grupo de ciclistas en el recorrido',
    categoria: 'Grupos',
  },
  {
    id: 3,
    imagen: miradorValle,
    alt: 'Mirador del Valle de Calamuchita',
    categoria: 'Paisajes',
  },
  {
    id: 4,
    imagen: bicicletaDetalle,
    alt: 'Detalle de bicicleta preparada para el recorrido',
    categoria: 'Bicicletas',
  },
  {
    id: 5,
    imagen: atardecerCerro,
    alt: 'Atardecer desde el Cerro de la Virgen',
    categoria: 'Paisajes',
  },
  {
    id: 6,
    imagen: guiaSendero,
    alt: 'Guía local en el sendero',
    categoria: 'Senderos',
  },
  {
    id: 7,
    imagen: rioCalamuchita,
    alt: 'Río Calamuchita durante el recorrido',
    categoria: 'Paisajes',
  },
  {
    id: 8,
    imagen: grupoDescanso,
    alt: 'Grupo tomando una pausa panorámica',
    categoria: 'Grupos',
  },
]
