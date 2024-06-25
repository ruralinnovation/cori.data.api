import { SIZE_PREFIX_LENGTH as e } from "./cori.data.api665.js";
import "./cori.data.api574.js";
import "./cori.data.api575.js";
import { BodyCompression as r } from "./cori.data.api666.js";
import { Buffer as n } from "./cori.data.api582.js";
import { FieldNode as b } from "./cori.data.api584.js";
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
  static getRootAsRecordBatch(t, s) {
    return (s || new i()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsRecordBatch(t, s) {
    return t.setPosition(t.position() + e), (s || new i()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * number of records / rows. The arrays in the batch should all have this
   * length
   */
  length() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  /**
   * Nodes correspond to the pre-ordered flattened logical schema
   */
  nodes(t, s) {
    const o = this.bb.__offset(this.bb_pos, 6);
    return o ? (s || new b()).__init(this.bb.__vector(this.bb_pos + o) + t * 16, this.bb) : null;
  }
  nodesLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * Buffers correspond to the pre-ordered flattened buffer tree
   *
   * The number of buffers appended to this list depends on the schema. For
   * example, most primitive arrays will have 2 buffers, 1 for the validity
   * bitmap and 1 for the values. For struct arrays, there will only be a
   * single buffer for the validity (nulls) bitmap
   */
  buffers(t, s) {
    const o = this.bb.__offset(this.bb_pos, 8);
    return o ? (s || new n()).__init(this.bb.__vector(this.bb_pos + o) + t * 16, this.bb) : null;
  }
  buffersLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * Optional compression of the message body
   */
  compression(t) {
    const s = this.bb.__offset(this.bb_pos, 10);
    return s ? (t || new r()).__init(this.bb.__indirect(this.bb_pos + s), this.bb) : null;
  }
  static startRecordBatch(t) {
    t.startObject(4);
  }
  static addLength(t, s) {
    t.addFieldInt64(0, s, BigInt("0"));
  }
  static addNodes(t, s) {
    t.addFieldOffset(1, s, 0);
  }
  static startNodesVector(t, s) {
    t.startVector(16, s, 8);
  }
  static addBuffers(t, s) {
    t.addFieldOffset(2, s, 0);
  }
  static startBuffersVector(t, s) {
    t.startVector(16, s, 8);
  }
  static addCompression(t, s) {
    t.addFieldOffset(3, s, 0);
  }
  static endRecordBatch(t) {
    return t.endObject();
  }
}
export {
  i as RecordBatch
};
//# sourceMappingURL=cori.data.api580.js.map
