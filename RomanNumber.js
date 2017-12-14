export default class RomanNumber {

  static errorTypes = {
    VALUE_REQUIRED: 'VALUE_REQUIRED',
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
  }

  get value() {
    return this[this.valueKey];
  }

  toString() {

  }

  toInt() {

  }
}