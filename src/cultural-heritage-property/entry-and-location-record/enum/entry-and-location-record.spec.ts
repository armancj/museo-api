import { HeritageType } from './entry-and-location-record.enum';

describe('EntryAndLocationRecord ', () => {
  describe('HeritageType Enum', () => {
    it('should have correct values', () => {
      expect(HeritageType.MOVABLE_HERITAGE).toBe('Patrimonio Mueble');
      expect(HeritageType.IMMOVABLE_HERITAGE).toBe('Patrimonio Inmueble');
      expect(HeritageType.INTANGIBLE_HERITAGE).toBe('Patrimonio Inmaterial');
      expect(HeritageType.NON_HERITAGE_OBJECT).toBe('Objeto no Patrimonial');
    });

    it('should contain specific keys', () => {
      const keys = Object.keys(HeritageType);
      expect(keys).toContain('MOVABLE_HERITAGE');
      expect(keys).toContain('IMMOVABLE_HERITAGE');
      expect(keys).toContain('INTANGIBLE_HERITAGE');
      expect(keys).toContain('NON_HERITAGE_OBJECT');
    });

    it('should contain specific values', () => {
      const values = Object.values(HeritageType);
      expect(values).toContain('Patrimonio Mueble');
      expect(values).toContain('Patrimonio Inmueble');
      expect(values).toContain('Patrimonio Inmaterial');
      expect(values).toContain('Objeto no Patrimonial');
    });
  });
});
