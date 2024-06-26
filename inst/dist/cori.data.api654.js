import { SIZE_PREFIX_LENGTH as r } from "./cori.data.api653.js";
import "./cori.data.api579.js";
import "./cori.data.api580.js";
import { BodyCompressionMethod as i } from "./cori.data.api694.js";
import { CompressionType as e } from "./cori.data.api695.js";
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
  __init(t, o) {
    return this.bb_pos = t, this.bb = o, this;
  }
  static getRootAsBodyCompression(t, o) {
    return (o || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBodyCompression(t, o) {
    return t.setPosition(t.position() + r), (o || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Compressor library.
   * For LZ4_FRAME, each compressed buffer must consist of a single frame.
   */
  codec() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt8(this.bb_pos + t) : e.LZ4_FRAME;
  }
  /**
   * Indicates the way the record batch body was compressed
   */
  method() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt8(this.bb_pos + t) : i.BUFFER;
  }
  static startBodyCompression(t) {
    t.startObject(2);
  }
  static addCodec(t, o) {
    t.addFieldInt8(0, o, e.LZ4_FRAME);
  }
  static addMethod(t, o) {
    t.addFieldInt8(1, o, i.BUFFER);
  }
  static endBodyCompression(t) {
    return t.endObject();
  }
  static createBodyCompression(t, o, n) {
    return s.startBodyCompression(t), s.addCodec(t, o), s.addMethod(t, n), s.endBodyCompression(t);
  }
}
export {
  s as BodyCompression
};
//# sourceMappingURL=cori.data.api654.js.map
