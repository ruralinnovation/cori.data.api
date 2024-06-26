import { BufferBuilder as h } from "./cori.data.api507.js";
import { VariableWidthBuilder as o } from "./cori.data.api503.js";
import { toUint8Array as u } from "./cori.data.api502.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class c extends o {
  constructor(e) {
    super(e), this._values = new h(Uint8Array);
  }
  get byteLength() {
    let e = this._pendingLength + this.length * 4;
    return this._offsets && (e += this._offsets.byteLength), this._values && (e += this._values.byteLength), this._nulls && (e += this._nulls.byteLength), e;
  }
  setValue(e, t) {
    return super.setValue(e, u(t));
  }
  _flushPending(e, t) {
    const n = this._offsets, f = this._values.reserve(t).buffer;
    let r = 0;
    for (const [i, s] of e)
      if (s === void 0)
        n.set(i, 0);
      else {
        const l = s.length;
        f.set(s, r), n.set(i, l), r += l;
      }
  }
}
export {
  c as BinaryBuilder
};
//# sourceMappingURL=cori.data.api616.js.map
