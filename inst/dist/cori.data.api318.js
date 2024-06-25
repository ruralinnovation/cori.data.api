import e from "./cori.data.api319.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class n {
  /**
   * Create a new column instance.
   * @param {Array} data The backing array (or array-like object)
   *  containing the column data.
   */
  constructor(r) {
    this.data = r;
  }
  /**
   * Get the length (number of rows) of the column.
   * @return {number} The length of the column array.
   */
  get length() {
    return this.data.length;
  }
  /**
   * Get the column value at the given row index.
   * @param {number} row The row index of the value to retrieve.
   * @return {import('./table').DataValue} The column value.
   */
  get(r) {
    return this.data[r];
  }
  /**
   * Returns an iterator over the column values.
   * @return {Iterator<object>} An iterator over column values.
   */
  [Symbol.iterator]() {
    return this.data[Symbol.iterator]();
  }
}
let u = function(t) {
  return t && e(t.get) ? t : new n(t);
};
export {
  n as default,
  u as defaultColumnFactory
};
//# sourceMappingURL=cori.data.api318.js.map
