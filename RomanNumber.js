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
const romanLetters = romanGroups.filter(
  group => group.roman.length === 1
).reduce(
  (accu, { roman, arabic }) => ({ ...accu, [roman]: arabic }),
  {}
); // { M: 1000, D: 500 ... }


export default class RomanNumber {

  static errorTypes = {
    VALUE_REQUIRED: 'VALUE_REQUIRED',
    NUMBER_NOT_INTEGER: 'NUMBER_NOT_INTEGER',
    OUTSIDE_RANGE: 'OUTSIDE_RANGE',
    INVALID_NUMERAL: 'INVALID_NUMERAL',
  };

  static validateArabicNumber(value) {
    if (!Number.isInteger(value)) {
      throw new Error(RomanNumber.errorTypes.NUMBER_NOT_INTEGER);
    }
    if (value < 1 || value > 3999) {
      throw new Error(RomanNumber.errorTypes.OUTSIDE_RANGE);
    }
  }

  static validateRomanString(value) {
    if (!value.match(/^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/)) {
      throw new Error(RomanNumber.errorTypes.INVALID_NUMERAL);
    }
  }

  valueKey = Symbol();

  constructor(value) {
    this.value = value;
  }

  set value(value) {
    if (typeof value === 'undefined' || value === null || value === '') {
      this[this.valueKey] = null;
      throw new Error(RomanNumber.errorTypes.VALUE_REQUIRED);
    }

    if (typeof value === 'number') {
      RomanNumber.validateArabicNumber(value);
      this[this.valueKey] = value;
      return;
    }

    if (typeof value === 'string') {
      RomanNumber.validateRomanString(value);
      this[this.valueKey] = value;
    }
  }

  get value() {
    return this[this.valueKey];
  }

  toString() {
    const value = this[this.valueKey];
    if (typeof value === 'string') {
      return value;
    }
    const accumulatedRoman = romanGroups.reduce((accu, crt) => {
      const { arabic, roman } = crt;
      const { aa, ar } = accu;
      return {
        aa: aa % arabic,
        // eg: if arabic is 2000, it creates an array of 2 elements, fills it with 'M' and
        // joins elements into a string 'MM', which is concatenated to the accumulator string
        ar: ar + (Array(Math.floor(aa / arabic)).fill(roman)).join(''),
      }
    }, {
      aa: value, // aa = accumulator arabic
      ar: '', // ar = accumulator roman
    });
    return accumulatedRoman.ar;
  }

  toInt() {
    const value = this[this.valueKey];
    if (typeof value === 'number') {
      return value;
    }
    // go through the string in reverse and if the crt letter is bigger then the previous,
    // add it (as in 'V' after 'I' means add 5); otherwise subtract it (as in 'I' after 'V' means
    // add -1, to the previously added 5
    return value
      .split('')
      .reverse()
      .reduce(({ number,lastCharAsInt }, crtChar) => {
        const charAsInt = romanLetters[crtChar];
        return {
          number: charAsInt >= lastCharAsInt ? number + charAsInt : number - charAsInt,
          lastCharAsInt: charAsInt,
        }
      }, {
        number: 0,
        lastCharAsInt: 0,
      })
      .number;
  }
}