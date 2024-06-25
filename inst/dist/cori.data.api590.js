import { SIZE_PREFIX_LENGTH as r } from "./cori.data.api642.js";
import "./cori.data.api569.js";
import "./cori.data.api570.js";
import { UnionMode as i } from "./cori.data.api561.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class e {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, s) {
    return this.bb_pos = t, this.bb = s, this;
  }
  static getRootAsUnion(t, s) {
    return (s || new e()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUnion(t, s) {
    return t.setPosition(t.position() + r), (s || new e()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  mode() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : i.Sparse;
  }
  typeIds(t) {
    const s = this.bb.__offset(this.bb_pos, 6);
    return s ? this.bb.readInt32(this.bb.__vector(this.bb_pos + s) + t * 4) : 0;
  }
  typeIdsLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  typeIdsArray() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t), this.bb.__vector_len(this.bb_pos + t)) : null;
  }
  static startUnion(t) {
    t.startObject(2);
  }
  static addMode(t, s) {
    t.addFieldInt16(0, s, i.Sparse);
  }
  static addTypeIds(t, s) {
    t.addFieldOffset(1, s, 0);
  }
  static createTypeIdsVector(t, s) {
    t.startVector(4, s.length, 4);
    for (let o = s.length - 1; o >= 0; o--)
      t.addInt32(s[o]);
    return t.endVector();
  }
  static startTypeIdsVector(t, s) {
    t.startVector(4, s, 4);
  }
  static endUnion(t) {
    return t.endObject();
  }
  static createUnion(t, s, o) {
    return e.startUnion(t), e.addMode(t, s), e.addTypeIds(t, o), e.endUnion(t);
  }
}
export {
  e as Union
};
//# sourceMappingURL=cori.data.api590.js.map
