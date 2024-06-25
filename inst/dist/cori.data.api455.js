/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class t {
  /**
   * @constructor
   * @param {Properties} property
   * @param {Normal} normal
   * @param {string} [space]
   */
  constructor(p, r, o) {
    this.property = p, this.normal = r, o && (this.space = o);
  }
}
t.prototype.property = {};
t.prototype.normal = {};
t.prototype.space = null;
export {
  t as Schema
};
//# sourceMappingURL=cori.data.api455.js.map
