import { encodeUtf8 as s } from "./cori.data.api310.js";
import { BinaryBuilder as n } from "./cori.data.api374.js";
import { BufferBuilder as i } from "./cori.data.api267.js";
import { VariableWidthBuilder as r } from "./cori.data.api263.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class h extends r {
  constructor(e) {
    super(e), this._values = new i(Uint8Array);
  }
  get byteLength() {
    let e = this._pendingLength + this.length * 4;
    return this._offsets && (e += this._offsets.byteLength), this._values && (e += this._values.byteLength), this._nulls && (e += this._nulls.byteLength), e;
  }
  setValue(e, t) {
    return super.setValue(e, s(t));
  }
  // @ts-ignore
  _flushPending(e, t) {
  }
}
h.prototype._flushPending = n.prototype._flushPending;
export {
  h as Utf8Builder
};
//# sourceMappingURL=cori.data.api373.js.map
