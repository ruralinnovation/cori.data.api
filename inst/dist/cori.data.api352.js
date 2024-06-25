import { SIZE_PREFIX_LENGTH as f } from "./cori.data.api392.js";
import "./cori.data.api327.js";
import "./cori.data.api328.js";
import { KeyValue as h } from "./cori.data.api339.js";
import { MessageHeader as o } from "./cori.data.api279.js";
import { MetadataVersion as a } from "./cori.data.api278.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
let M = class e {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, s) {
    return this.bb_pos = t, this.bb = s, this;
  }
  static getRootAsMessage(t, s) {
    return (s || new e()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMessage(t, s) {
    return t.setPosition(t.position() + f), (s || new e()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  version() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : a.V1;
  }
  headerType() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readUint8(this.bb_pos + t) : o.NONE;
  }
  header(t) {
    const s = this.bb.__offset(this.bb_pos, 8);
    return s ? this.bb.__union(t, this.bb_pos + s) : null;
  }
  bodyLength() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  customMetadata(t, s) {
    const i = this.bb.__offset(this.bb_pos, 12);
    return i ? (s || new h()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + i) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 12);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startMessage(t) {
    t.startObject(5);
  }
  static addVersion(t, s) {
    t.addFieldInt16(0, s, a.V1);
  }
  static addHeaderType(t, s) {
    t.addFieldInt8(1, s, o.NONE);
  }
  static addHeader(t, s) {
    t.addFieldOffset(2, s, 0);
  }
  static addBodyLength(t, s) {
    t.addFieldInt64(3, s, BigInt("0"));
  }
  static addCustomMetadata(t, s) {
    t.addFieldOffset(4, s, 0);
  }
  static createCustomMetadataVector(t, s) {
    t.startVector(4, s.length, 4);
    for (let i = s.length - 1; i >= 0; i--)
      t.addOffset(s[i]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, s) {
    t.startVector(4, s, 4);
  }
  static endMessage(t) {
    return t.endObject();
  }
  static finishMessageBuffer(t, s) {
    t.finish(s);
  }
  static finishSizePrefixedMessageBuffer(t, s) {
    t.finish(s, void 0, !0);
  }
  static createMessage(t, s, i, n, r, d) {
    return e.startMessage(t), e.addVersion(t, s), e.addHeaderType(t, i), e.addHeader(t, n), e.addBodyLength(t, r), e.addCustomMetadata(t, d), e.endMessage(t);
  }
};
export {
  M as Message
};
//# sourceMappingURL=cori.data.api352.js.map
