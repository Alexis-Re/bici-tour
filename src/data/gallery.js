import senderoVista from '@/assets/Gallery/sendero-vista.webp'
import grupoBicis from '@/assets/Gallery/entrada-virgen.webp'
import miradorValle from '@/assets/Gallery/mirador-valle.webp'
import bicicletaDetalle from '@/assets/Gallery/descubri.webp'
import atardecerCerro from '@/assets/Gallery/atardecer-cerro.webp'
import guiaSendero from '@/assets/Gallery/guia-sendero.webp'
import rioSendero from '@/assets/Gallery/rioSendero.webp'
import montañaSendero from '@/assets/Gallery/montaña-sendero-virgen.webp'
import grupoDescanso from '@/assets/Gallery/grupo-descanso.webp'

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
    imagen: rioSendero,
    alt: 'Río durante el recorrido',
    categoria: 'Paisajes',
  },
  {
    id: 8,
    imagen: grupoDescanso,
    alt: 'Grupo tomando una pausa panorámica',
    categoria: 'Grupos',
  },
  {
    id: 9,
    imagen: montañaSendero,
    alt: 'Montaña y sendero del Cerro de la Virgen',
    categoria: 'Senderos',
  },
]
