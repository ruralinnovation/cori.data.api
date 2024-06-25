import { Dictionary as c } from "./cori.data.api419.js";
import { Builder as d } from "./cori.data.api500.js";
import { makeBuilder as r } from "./cori.data.api564.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class a extends d {
  constructor({ type: i, nullValues: e, dictionaryHashFunction: t }) {
    super({ type: new c(i.dictionary, i.indices, i.id, i.isOrdered) }), this._nulls = null, this._dictionaryOffset = 0, this._keysToIndices = /* @__PURE__ */ Object.create(null), this.indices = r({ type: this.type.indices, nullValues: e }), this.dictionary = r({ type: this.type.dictionary, nullValues: null }), typeof t == "function" && (this.valueToKey = t);
  }
  get values() {
    return this.indices.values;
  }
  get nullCount() {
    return this.indices.nullCount;
  }
  get nullBitmap() {
    return this.indices.nullBitmap;
  }
  get byteLength() {
    return this.indices.byteLength + this.dictionary.byteLength;
  }
  get reservedLength() {
    return this.indices.reservedLength + this.dictionary.reservedLength;
  }
  get reservedByteLength() {
    return this.indices.reservedByteLength + this.dictionary.reservedByteLength;
  }
  isValid(i) {
    return this.indices.isValid(i);
  }
  setValid(i, e) {
    const t = this.indices;
    return e = t.setValid(i, e), this.length = t.length, e;
  }
  setValue(i, e) {
    const t = this._keysToIndices, s = this.valueToKey(e);
    let n = t[s];
    return n === void 0 && (t[s] = n = this._dictionaryOffset + this.dictionary.append(e).length - 1), this.indices.setValue(i, n);
  }
  flush() {
    const i = this.type, e = this._dictionary, t = this.dictionary.toVector(), s = this.indices.flush().clone(i);
    return s.dictionary = e ? e.concat(t) : t, this.finished || (this._dictionaryOffset += t.length), this._dictionary = s.dictionary, this.clear(), s;
  }
  finish() {
    return this.indices.finish(), this.dictionary.finish(), this._dictionaryOffset = 0, this._keysToIndices = /* @__PURE__ */ Object.create(null), super.finish();
  }
  clear() {
    return this.indices.clear(), this.dictionary.clear(), super.clear();
  }
  valueToKey(i) {
    return typeof i == "string" ? i : `${i}`;
  }
}
export {
  a as DictionaryBuilder
};
//# sourceMappingURL=cori.data.api602.js.map
