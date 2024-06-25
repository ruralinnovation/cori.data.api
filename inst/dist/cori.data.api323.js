import s from "./cori.data.api285.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function o(t, r) {
  return t && t.expr ? new n({ ...t, ...r }) : new n(r, t);
}
class n {
  constructor(r, i) {
    this.expr = i, Object.assign(this, r);
  }
  toString() {
    return String(this.expr);
  }
  toObject() {
    return {
      ...this,
      expr: this.toString(),
      ...s(this.expr) ? { func: !0 } : {}
    };
  }
}
export {
  o as default
};
//# sourceMappingURL=cori.data.api323.js.map
