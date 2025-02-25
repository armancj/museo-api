import { ValueGrade, DescriptionLevel } from './cultural-record.enum';

describe('CulturalRecordEnum', () => {
  describe('ValueGrade', () => {
    it('should have correct values', () => {
      expect(ValueGrade.I).toBe('I');
      expect(ValueGrade.II).toBe('II');
      expect(ValueGrade.III).toBe('III');
    });
  });
  describe('DescriptionLevel', () => {
    it('should have correct values', () => {
      expect(DescriptionLevel.Level1).toBe(1);
      expect(DescriptionLevel.Level2).toBe(2);
      expect(DescriptionLevel.Level3).toBe(3);
    });
  });
});
