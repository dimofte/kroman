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

  }

  toInt() {

  }
}