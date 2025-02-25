import { validateIsMuseum } from './validate-is-museum';
import { InstitutionType } from '../../enum/institutions.enum';

describe('ValidateIsMuseum', () => {
  it('should be defined', () => {
    expect(validateIsMuseum('str')).toBeDefined();
  });

  it('should be false in case is not a string param', () => {
    expect(validateIsMuseum(null)).toEqual(false);
  });

  it('should be museum', () => {
    expect(validateIsMuseum(InstitutionType.MUSEUM)).toEqual(true);
    expect(validateIsMuseum(InstitutionType.MUSEUM_ROOMS)).toEqual(true);
    expect(validateIsMuseum(InstitutionType.EXT_MUSEUM)).toEqual(true);
    expect(validateIsMuseum(InstitutionType.COMPLEX_MUSEUM)).toEqual(true);
  });

  it('should be invalid museum', () => {
    expect(validateIsMuseum(InstitutionType.LIBRARY)).toEqual(false);
  });
});
