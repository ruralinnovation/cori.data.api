import { SIZE_PREFIX_LENGTH as e } from "./cori.data.api639.js";
import "./cori.data.api567.js";
import "./cori.data.api568.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class i {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, s) {
    return this.bb_pos = t, this.bb = s, this;
  }
  static getRootAsMap(t, s) {
    return (s || new i()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMap(t, s) {
    return t.setPosition(t.position() + e), (s || new i()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Set to true if the keys within each value are sorted
   */
  keysSorted() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
  }
  static startMap(t) {
    t.startObject(1);
  }
  static addKeysSorted(t, s) {
    t.addFieldInt8(0, +s, 0);
  }
  static endMap(t) {
    return t.endObject();
  }
  static createMap(t, s) {
    return i.startMap(t), i.addKeysSorted(t, s), i.endMap(t);
  }
}
export {
  i as Map
};
//# sourceMappingURL=cori.data.api594.js.map
