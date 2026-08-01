import senderoVista from '@/assets/Gallery/sendero-vista.webp'
import grupoBicis from '@/assets/Gallery/entrada-virgen.webp'
import miradorValle from '@/assets/Gallery/mirador-valle.webp'
import bicicletaDetalle from '@/assets/Gallery/descubri.webp'
import atardecerCerro from '@/assets/Gallery/atardecer-cerro.webp'
import guiaSendero from '@/assets/Gallery/guia-sendero.webp'
import rioSendero from '@/assets/Gallery/rio-sendero.webp'
import montanaSendero from '@/assets/Gallery/montana-sendero-virgen.webp'
import grupoDescanso from '@/assets/Gallery/grupo-descanso.webp'
import cascadaLago from '@/assets/Gallery/cascada-lago.webp'
import ruinasDecote from '@/assets/Gallery/ruinas-decote-pescondido.webp'
import puenteCosteleta from '@/assets/Gallery/puente-costeleta-pescondido.webp'
import ruedaPueblo from '@/assets/Gallery/rueda-pueblo-pescondido.webp'
import construccion from '@/assets/Gallery/construccion-pescondido.webp'

export const galleryCategories = ['Todos', 'Senderos', 'Paisajes', 'Cerro de la Virgen', 'Pueblo Escondido']

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
    categoria: 'Cerro de la Virgen',
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
    categoria: 'Cerro de la Virgen',
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
    imagen: montanaSendero,
    alt: 'Montaña y sendero del Cerro de la Virgen',
    categoria: 'Cerro de la Virgen',
  },
  {
    id: 10,
    imagen: cascadaLago,
    alt: 'Cascada y lago de esmeralda en Pueblo Escondido',
    categoria: 'Pueblo Escondido',
  },
  {
    id: 11,
    imagen: ruinasDecote,
    alt: 'Ruinas precolombinas en Pueblo Escondido',
    categoria: 'Pueblo Escondido',
  },
  {
    id: 12,
    imagen: puenteCosteleta,
    alt: 'Puente colgante en Pueblo Escondido',
    categoria: 'Pueblo Escondido',
  },
  {
    id: 13,
    imagen: ruedaPueblo,
    alt: 'Rueda hidráulica histórica de Pueblo Escondido',
    categoria: 'Pueblo Escondido',
  },
  {
    id: 14,
    imagen: construccion,
    alt: 'Arquitectura rústica de Pueblo Escondido',
    categoria: 'Pueblo Escondido',
  },
]
