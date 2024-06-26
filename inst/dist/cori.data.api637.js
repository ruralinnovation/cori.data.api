/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class h {
  /**
   * Instantiate a new BitSet instance.
   * @param {number} size The number of bits.
   */
  constructor(t) {
    this._size = t, this._bits = new Uint32Array(Math.ceil(t / 32));
  }
  /**
   * The number of bits.
   * @return {number}
   */
  get length() {
    return this._size;
  }
  /**
   * The number of bits set to one.
   * https://graphics.stanford.edu/~seander/bithacks.html#CountBitsSetKernighan
   * @return {number}
   */
  count() {
    const t = this._bits.length;
    let s = 0;
    for (let e = 0; e < t; ++e)
      for (let n = this._bits[e]; n; ++s)
        n &= n - 1;
    return s;
  }
  /**
   * Get the bit at a given index.
   * @param {number} i The bit index.
   */
  get(t) {
    return this._bits[t >> 5] & 2147483648 >>> t;
  }
  /**
   * Set the bit at a given index to one.
   * @param {number} i The bit index.
   */
  set(t) {
    this._bits[t >> 5] |= 2147483648 >>> t;
  }
  /**
   * Clear the bit at a given index to zero.
   * @param {number} i The bit index.
   */
  clear(t) {
    this._bits[t >> 5] &= ~(2147483648 >>> t);
  }
  /**
   * Scan the bits, invoking a callback function with the index of
   * each non-zero bit.
   * @param {(i: number) => void} fn A callback function.
   */
  scan(t) {
    for (let s = this.next(0); s >= 0; s = this.next(s + 1))
      t(s);
  }
  /**
   * Get the next non-zero bit starting from a given index.
   * @param {number} i The bit index.
   */
  next(t) {
    const s = this._bits, e = s.length;
    let n = t >> 5, i = s[n] & 4294967295 >>> t;
    for (; n < e; i = s[++n])
      if (i !== 0)
        return (n << 5) + Math.clz32(i);
    return -1;
  }
  /**
   * Return the index of the nth non-zero bit.
   * @param {number} n The number of non-zero bits to advance.
   * @return {number} The index of the nth non-zero bit.
   */
  nth(t) {
    let s = this.next(0);
    for (; t-- && s >= 0; )
      s = this.next(s + 1);
    return s;
  }
  /**
   * Negate all bits in this bitset.
   * Modifies this BitSet in place.
   * @return {this}
   */
  not() {
    const t = this._bits, s = t.length;
    for (let n = 0; n < s; ++n)
      t[n] = ~t[n];
    const e = this._size % 32;
    return e && (t[s - 1] &= 2147483648 >> e - 1), this;
  }
  /**
   * Compute the logical AND of this BitSet and another.
   * @param {BitSet} bitset The BitSet to combine with.
   * @return {BitSet} This BitSet updated with the logical AND.
   */
  and(t) {
    if (t) {
      const s = this._bits, e = t._bits, n = s.length;
      for (let i = 0; i < n; ++i)
        s[i] &= e[i];
    }
    return this;
  }
  /**
   * Compute the logical OR of this BitSet and another.
   * @param {BitSet} bitset The BitSet to combine with.
   * @return {BitSet} This BitSet updated with the logical OR.
   */
  or(t) {
    if (t) {
      const s = this._bits, e = t._bits, n = s.length;
      for (let i = 0; i < n; ++i)
        s[i] |= e[i];
    }
    return this;
  }
}
export {
  h as default
};
//# sourceMappingURL=cori.data.api637.js.map
