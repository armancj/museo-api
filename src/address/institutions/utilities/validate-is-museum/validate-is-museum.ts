import { InstitutionType } from '../../enum/institutions.enum';

export function validateIsMuseum(data: unknown): boolean {
  if (!data || typeof data !== 'string') return false;
  const firstFourInstitutionTypes = Object.values(InstitutionType).slice(0, 4);
  return firstFourInstitutionTypes.includes(<InstitutionType>data);
}
