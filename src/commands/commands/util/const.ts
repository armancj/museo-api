import {
  GenericClassification,
  HeritageType,
} from '../../../cultural-heritage-property/entry-and-location-record/enum/entry-and-location-record.enum';
import { ValueGrade } from '../../../cultural-heritage-property/cultural-record/enum/cultural-record.enum';

export const CUBA_DATA = {
  'La Habana': ['Plaza de la Revolución', 'Centro Habana', 'La Habana Vieja', 'Playa'],
  'Santiago de Cuba': ['Santiago de Cuba', 'Palma Soriano', 'Contramaestre'],
  'Villa Clara': ['Santa Clara', 'Remedios', 'Sagua la Grande', 'Placetas', 'Manicaragua'],
  'Pinar del Río': ['Pinar del Río', 'Viñales', 'San Luis', 'Sandino', 'Consolación del Sur'],
  'Las Tunas': [
    'Las Tunas',
    'Puerto Padre',
    'Jesús Menéndez',
    'Majibacoa',
    'Jobabo',
    'Colombia',
    'Amancio',
    'Manatí',
  ],
};

export type CubaProvinces = keyof typeof CUBA_DATA;

export const heritageItems = [
  {
    type: 'painting',
    objectTitle: 'Pintura Colonial',
    description:
      'Óleo sobre lienzo del período colonial cubano, representa escenas de la vida cotidiana de la época.',
    artists: ['José Nicolás de la Escalera', 'Vicente Escobar', 'Juan Jorge Peoli'],
    dimensions: { height: 60, width: 80, length: 3, weight: 2.5 },
    materials: ['Óleo', 'Lienzo', 'Marco de madera'],
    languages: ['Español'],
    classification: GenericClassification.HUMAN_MADE_OBJECT,
    heritageType: HeritageType.MOVABLE_HERITAGE,
    valueGrade: ValueGrade.II,
  },
  {
    type: 'sculpture',
    objectTitle: 'Escultura Contemporánea',
    description:
      'Escultura en bronce que representa la lucha del pueblo cubano por la independencia.',
    artists: ['Rita Longa', 'Teodoro Ramos Blanco', 'José Villa Soberón'],
    dimensions: { height: 150, width: 60, length: 40, weight: 45.0 },
    materials: ['Bronce', 'Piedra', 'Metal'],
    languages: ['Español'],
    classification: GenericClassification.HUMAN_MADE_OBJECT,
    heritageType: HeritageType.MOVABLE_HERITAGE,
    valueGrade: ValueGrade.I,
  },
  {
    type: 'photograph',
    objectTitle: 'Fotografía Histórica',
    description:
      'Fotografía en blanco y negro que documenta momentos históricos de Cuba en el siglo XX.',
    artists: ['Constantino Arias', 'Korda', 'Jesse Fernández'],
    dimensions: { height: 25, width: 35, length: 0.1, weight: 0.2 },
    materials: ['Papel fotográfico', 'Gelatina de plata', 'Marco'],
    languages: ['Español'],
    classification: GenericClassification.HUMAN_MADE_OBJECT,
    heritageType: HeritageType.MOVABLE_HERITAGE,
    valueGrade: ValueGrade.II,
  },
  {
    type: 'manuscript',
    objectTitle: 'Documento Manuscrito',
    description:
      'Manuscrito original con textos históricos y literarios de escritores cubanos importantes.',
    artists: ['José Martí', 'Nicolás Guillén', 'Alejo Carpentier'],
    dimensions: { height: 30, width: 21, length: 1, weight: 0.5 },
    materials: ['Papel', 'Tinta', 'Pergamino'],
    languages: ['Español', 'Francés'],
    classification: GenericClassification.HUMAN_MADE_OBJECT,
    heritageType: HeritageType.MOVABLE_HERITAGE,
    valueGrade: ValueGrade.I,
  },
  {
    type: 'instrument',
    objectTitle: 'Instrumento Musical',
    description:
      'Instrumento musical tradicional cubano utilizado en la música folclórica y popular.',
    artists: ['Fabricantes tradicionales cubanos', 'Artesanos de La Habana'],
    dimensions: { height: 40, width: 20, length: 60, weight: 3.0 },
    materials: ['Madera', 'Cuero', 'Metal', 'Cuerda'],
    languages: ['Español'],
    classification: GenericClassification.HUMAN_MADE_OBJECT,
    heritageType: HeritageType.MOVABLE_HERITAGE,
    valueGrade: ValueGrade.II,
  },
  {
    type: 'textile',
    objectTitle: 'Textil Tradicional',
    description: 'Textil tradicional cubano con bordados y técnicas ancestrales de confección.',
    artists: ['Artesanas tradicionales', 'Bordadoras de Matanzas'],
    dimensions: { height: 180, width: 120, length: 0.5, weight: 1.2 },
    materials: ['Algodón', 'Seda', 'Hilo bordado', 'Tinte natural'],
    languages: ['Español'],
    classification: GenericClassification.HUMAN_MADE_OBJECT,
    heritageType: HeritageType.MOVABLE_HERITAGE,
    valueGrade: ValueGrade.III,
  },
  {
    type: 'ceramic',
    objectTitle: 'Cerámica Tradicional',
    description:
      'Pieza de cerámica tradicional cubana con técnicas de alfarería heredadas de los pueblos originarios.',
    artists: ['Alfareros de Camagüey', 'Ceramistas tradicionales'],
    dimensions: { height: 25, width: 25, length: 25, weight: 2.8 },
    materials: ['Arcilla', 'Esmalte', 'Pigmentos naturales'],
    languages: ['Español'],
    classification: GenericClassification.HUMAN_MADE_OBJECT,
    heritageType: HeritageType.MOVABLE_HERITAGE,
    valueGrade: ValueGrade.III,
  },
  {
    type: 'ethnographic',
    objectTitle: 'Objeto Etnográfico',
    description:
      'Objeto etnográfico que representa las tradiciones culturales y religiosas afrocubanas.',
    artists: ['Artesanos religiosos', 'Santeros tradicionales'],
    dimensions: { height: 30, width: 15, length: 15, weight: 1.5 },
    materials: ['Madera', 'Caracolas', 'Piedras', 'Textil'],
    languages: ['Español', 'Yoruba'],
    classification: GenericClassification.HUMAN_MADE_OBJECT,
    heritageType: HeritageType.MOVABLE_HERITAGE,
    valueGrade: ValueGrade.II,
  },
];
