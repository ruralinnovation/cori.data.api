import { SIZE_PREFIX_LENGTH as n } from "./cori.data.api653.js";
import "./cori.data.api579.js";
import "./cori.data.api580.js";
import { Precision as s } from "./cori.data.api573.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class o {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, i) {
    return this.bb_pos = t, this.bb = i, this;
  }
  static getRootAsFloatingPoint(t, i) {
    return (i || new o()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFloatingPoint(t, i) {
    return t.setPosition(t.position() + n), (i || new o()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  precision() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : s.HALF;
  }
  static startFloatingPoint(t) {
    t.startObject(1);
  }
  static addPrecision(t, i) {
    t.addFieldInt16(0, i, s.HALF);
  }
  static endFloatingPoint(t) {
    return t.endObject();
  }
  static createFloatingPoint(t, i) {
    return o.startFloatingPoint(t), o.addPrecision(t, i), o.endFloatingPoint(t);
  }
}
export {
  o as FloatingPoint
};
//# sourceMappingURL=cori.data.api594.js.map
