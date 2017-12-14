import RomanNumber from './RomanNumber';

describe('Roman Numerals', () => {

  // tests that are in the app's requirements
  describe('required tests', () => {
    it('should throw for null or empty', () => {
      expect(() => new RomanNumber(null)).toThrow(errorTypes.VALUE_REQUIRED);
      expect(() => new RomanNumber('')).toThrow(errorTypes.VALUE_REQUIRED);
    });
    it('should return roman numerals for (base 10) arabic', () => {
      expect(new RomanNumber(3).toString()).toEqual('III');
    });
  });

  // my own additional tests :)
  describe('additional tests', () => {
    it('should return roman numerals for roman input', () => {
      expect(new RomanNumber('III').toString()).toEqual('III');
    });
  });
});
