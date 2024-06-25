import { Info as h } from "./cori.data.api472.js";
import * as s from "./cori.data.api468.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const n = Object.keys(s);
class d extends h {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */
  constructor(t, e, r, p) {
    let o = -1;
    if (super(t, e), f(this, "space", p), typeof r == "number")
      for (; ++o < n.length; ) {
        const i = n[o];
        f(this, n[o], (r & s[i]) === s[i]);
      }
  }
}
d.prototype.defined = !0;
function f(c, t, e) {
  e && (c[t] = e);
}
export {
  d as DefinedInfo
};
//# sourceMappingURL=cori.data.api471.js.map
