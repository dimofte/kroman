const romanGroups = [
  { roman: 'M',  arabic: 1000 },
  { roman: 'CM', arabic: 900 },
  { roman: 'D',  arabic: 500 },
  { roman: 'CD', arabic: 400 },
  { roman: 'C',  arabic: 100 },
  { roman: 'XC', arabic: 90 },
  { roman: 'L',  arabic: 50 },
  { roman: 'XL', arabic: 40 },
  { roman: 'X',  arabic: 10 },
  { roman: 'IX', arabic: 9 },
  { roman: 'V',  arabic: 5 },
  { roman: 'IV', arabic: 4 },
  { roman: 'I',  arabic: 1 },
];

export default class RomanNumber {

  static errorTypes = {
    VALUE_REQUIRED: 'VALUE_REQUIRED',
    NUMBER_NOT_INTEGER: 'NUMBER_NOT_INTEGER',
    OUTSIDE_RANGE: 'OUTSIDE_RANGE',
  };

  valueKey = Symbol();

  constructor(value) {
    this.value = value;
  }

  set value(value) {
    if (typeof value === 'undefined' || value === null || value === '') {
      this[this.valueKey] = null;
      throw new Error(RomanNumber.errorTypes.VALUE_REQUIRED);
    }

    if (typeof(value === 'number')) {
      RomanNumber.validateArabicNumber(value);
      this[this.valueKey] = value;
    }
  }

  static validateArabicNumber(value) {
    if (!Number.isInteger(value)) {
      throw new Error(RomanNumber.errorTypes.NUMBER_NOT_INTEGER);
    }
    if (value < 1 || value > 3999) {
      throw new Error(RomanNumber.errorTypes.OUTSIDE_RANGE);
    }
  }

  get value() {
    return this[this.valueKey];
  }

  toString() {
    const accumulatedRoman = romanGroups.reduce((accu, crt) => {
      const { arabic, roman } = crt;
      const { aa, ar } = accu;
      console.log({ ar, aa, arabic, roman });
      return {
        aa: aa % arabic,
        ar: ar + (Math.floor(aa / arabic) > 0 ? roman : ''),
      }
    }, {
      aa: this[this.valueKey], // aa = accumulator arabic
      ar: '', // ar = accumulator roman
    });
    console.log(accumulatedRoman);
    return accumulatedRoman.ar;
  }

  toInt() {

  }
}