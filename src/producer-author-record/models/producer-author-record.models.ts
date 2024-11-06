export interface ProducerAuthorRecord {
  producerAuthorNames: string;
  street: string;
  number: string;
  betweenStreet1: string; // Entre Calle 1
  betweenStreet2: string; // Entre Calle 2
  district: string; // Reparto
  locality: string; // Localidad
  municipality: string; // Municipio
  province: string; // Provincia
  institutionalHistory?: string; // Historia institucional/ Reseña biográfica del productor / autor del objeto (campo no obligatorio)
  objectEntryHistory?: string; // Historia relacionada con la forma de ingreso del objeto (campo no obligatorio)
}
