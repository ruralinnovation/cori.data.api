import { encodeUtf8 as r } from "./cori.data.api552.js";
import { BufferBuilder as s } from "./cori.data.api506.js";
import { VariableWidthBuilder as n } from "./cori.data.api502.js";
import { LargeBinaryBuilder as i } from "./cori.data.api618.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class h extends n {
  constructor(e) {
    super(e), this._values = new s(Uint8Array);
  }
  get byteLength() {
    let e = this._pendingLength + this.length * 4;
    return this._offsets && (e += this._offsets.byteLength), this._values && (e += this._values.byteLength), this._nulls && (e += this._nulls.byteLength), e;
  }
  setValue(e, t) {
    return super.setValue(e, r(t));
  }
  // @ts-ignore
  _flushPending(e, t) {
  }
}
h.prototype._flushPending = i.prototype._flushPending;
export {
  h as LargeUtf8Builder
};
//# sourceMappingURL=cori.data.api617.js.map
