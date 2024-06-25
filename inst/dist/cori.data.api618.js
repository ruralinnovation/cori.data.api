import { toUint8Array as h } from "./cori.data.api501.js";
import { BufferBuilder as o } from "./cori.data.api506.js";
import { VariableWidthBuilder as u } from "./cori.data.api502.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class c extends u {
  constructor(e) {
    super(e), this._values = new o(Uint8Array);
  }
  get byteLength() {
    let e = this._pendingLength + this.length * 4;
    return this._offsets && (e += this._offsets.byteLength), this._values && (e += this._values.byteLength), this._nulls && (e += this._nulls.byteLength), e;
  }
  setValue(e, t) {
    return super.setValue(e, h(t));
  }
  _flushPending(e, t) {
    const n = this._offsets, f = this._values.reserve(t).buffer;
    let i = 0;
    for (const [r, s] of e)
      if (s === void 0)
        n.set(r, BigInt(0));
      else {
        const l = s.length;
        f.set(s, i), n.set(r, BigInt(l)), i += l;
      }
  }
}
export {
  c as LargeBinaryBuilder
};
//# sourceMappingURL=cori.data.api618.js.map
