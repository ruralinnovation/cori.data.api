import { SIZE_PREFIX_LENGTH as e } from "./cori.data.api392.js";
import "./cori.data.api327.js";
import "./cori.data.api328.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class s {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, i) {
    return this.bb_pos = t, this.bb = i, this;
  }
  static getRootAsFixedSizeList(t, i) {
    return (i || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeList(t, i) {
    return t.setPosition(t.position() + e), (i || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Number of list items per value
   */
  listSize() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  static startFixedSizeList(t) {
    t.startObject(1);
  }
  static addListSize(t, i) {
    t.addFieldInt32(0, i, 0);
  }
  static endFixedSizeList(t) {
    return t.endObject();
  }
  static createFixedSizeList(t, i) {
    return s.startFixedSizeList(t), s.addListSize(t, i), s.endFixedSizeList(t);
  }
}
export {
  s as FixedSizeList
};
//# sourceMappingURL=cori.data.api350.js.map
