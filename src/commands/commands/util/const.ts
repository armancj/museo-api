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
