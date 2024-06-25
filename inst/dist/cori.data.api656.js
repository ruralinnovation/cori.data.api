import s from "./cori.data.api654.js";
import i from "./cori.data.api686.js";
import r from "./cori.data.api687.js";
import e from "./cori.data.api688.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class u {
  constructor(t) {
    this._values = t || [], this._sorted = null, this._start = 0;
  }
  values(t) {
    return this._start && (this._values = this._values.slice(this._start), this._start = 0), t ? this._values.slice() : this._values;
  }
  add(t) {
    this._values.push(t), this._sorted = null;
  }
  rem() {
    this._start += 1, this._sorted = null;
  }
  min() {
    return this._sorted && this._sorted.length ? this._sorted[0] : i(this._values, this._start);
  }
  max() {
    return this._sorted && this._sorted.length ? this._sorted[this._sorted.length - 1] : r(this._values, this._start);
  }
  quantile(t) {
    return this._sorted || (this._sorted = this.values(!0), this._sorted.sort(s)), e(this._sorted, t);
  }
}
export {
  u as default
};
//# sourceMappingURL=cori.data.api656.js.map
