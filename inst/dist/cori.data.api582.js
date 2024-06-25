/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class n {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, s) {
    return this.bb_pos = t, this.bb = s, this;
  }
  /**
   * The relative offset into the shared memory page where the bytes for this
   * buffer starts
   */
  offset() {
    return this.bb.readInt64(this.bb_pos);
  }
  /**
   * The absolute length (in bytes) of the memory buffer. The memory is found
   * from offset (inclusive) to offset + length (non-inclusive). When building
   * messages using the encapsulated IPC message, padding bytes may be written
   * after a buffer, but such padding bytes do not need to be accounted for in
   * the size here.
   */
  length() {
    return this.bb.readInt64(this.bb_pos + 8);
  }
  static sizeOf() {
    return 16;
  }
  static createBuffer(t, s, r) {
    return t.prep(8, 16), t.writeInt64(BigInt(r ?? 0)), t.writeInt64(BigInt(s ?? 0)), t.offset();
  }
}
export {
  n as Buffer
};
//# sourceMappingURL=cori.data.api582.js.map
