import RomanNumber from './RomanNumber';

const { errorTypes } = RomanNumber;

describe('Roman Numerals', () => {

  // tests that are in the app's requirements
  describe('required tests', () => {
    it('should throw for null or empty', () => {
      expect(() => new RomanNumber(null)).toThrow(errorTypes.VALUE_REQUIRED);
      expect(() => new RomanNumber('')).toThrow(errorTypes.VALUE_REQUIRED);
    });
    it('should return roman numerals for (base 10) arabic', () => {
      expect(new RomanNumber(1).toString()).toEqual('I');
      expect(new RomanNumber(3).toString()).toEqual('III');
      expect(new RomanNumber(4).toString()).toEqual('IV');
      expect(new RomanNumber(5).toString()).toEqual('V');

      expect(new RomanNumber(1968).toString()).toEqual('MCMLXVIII');
      expect(new RomanNumber(1473).toString()).toEqual('MCDLXXIII');
      expect(new RomanNumber(2999).toString()).toEqual('MMCMXCIX'); // or IMMM ?
      expect(new RomanNumber(3000).toString()).toEqual('MMM');
    });
  });

  // my own additional tests :)
  describe('additional tests', () => {
    it('should return roman numerals for roman input', () => {
      expect(new RomanNumber('III').toString()).toEqual('III');
    });
  });
});