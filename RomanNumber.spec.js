import RomanNumber from './RomanNumber';

const { errorTypes } = RomanNumber;

describe('Roman Numerals', () => {

  // tests that are in the app's requirements
  describe('required tests', () => {
    it('should throw for null or empty', () => {
      expect(() => new RomanNumber(null)).toThrow(errorTypes.VALUE_REQUIRED);
      expect(() => new RomanNumber('')).toThrow(errorTypes.VALUE_REQUIRED);
    });
    it('should throw if arabic numerals are out of range', () => {
      expect(() => new RomanNumber(0)).toThrow(errorTypes.OUTSIDE_RANGE);
      expect(() => new RomanNumber(10000)).toThrow(errorTypes.OUTSIDE_RANGE);
    });
    it('should return roman numerals for (base 10) arabic', () => {
      expect(new RomanNumber(1).toString()).toEqual('I');
      expect(new RomanNumber(3).toString()).toEqual('III');
      expect(new RomanNumber(5).toString()).toEqual('V');
      expect(new RomanNumber(4).toString()).toEqual('IV');
      expect(new RomanNumber(1968).toString()).toEqual('MCMLXVIII');
      expect(new RomanNumber(1473).toString()).toEqual('MCDLXXIII');
      expect(new RomanNumber(2999).toString()).toEqual('MMCMXCIX');
      expect(new RomanNumber(3000).toString()).toEqual('MMM');
    });
    it('should throw if arabic numerals are out of range', () => {
      expect(() => new RomanNumber('IIII')).toThrow(errorTypes.LETTER_OVERUSED);
      expect(() => new RomanNumber('MMMMDMXCIX')).toThrow(errorTypes.LETTER_OVERUSED);
    });
    it('should return arabic numbers for roman ones', () => {
      expect(new RomanNumber('I').toInt()).toEqual(1);
      expect(new RomanNumber('III').toInt()).toEqual(3);
      expect(new RomanNumber('IV').toInt()).toEqual(4);
      expect(new RomanNumber('CDXXIX').toInt()).toEqual();
      expect(new RomanNumber('MCDLXXXII').toInt()).toEqual(1);
      expect(new RomanNumber('MCMLXXX').toInt()).toEqual(1);
      expect(new RomanNumber('MMMMCMXCIX').toInt()).toEqual(1);
    });
  });

  // my own additional tests :)
  describe('additional tests', () => {
    it('should throw if arabic numerals are not integer', () => {
      expect(() => new RomanNumber(0.6)).toThrow(errorTypes.NUMBER_NOT_INTEGER);
    });
    it('should return roman numerals for roman input', () => {
      return;
      expect(new RomanNumber('III').toString()).toEqual('III');
    });
  });
});
