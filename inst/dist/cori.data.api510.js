import { Block as m } from "./cori.data.api568.js";
import { Footer as o } from "./cori.data.api569.js";
import "./cori.data.api570.js";
import "./cori.data.api571.js";
import { Builder as u } from "./cori.data.api572.js";
import { ByteBuffer as B } from "./cori.data.api573.js";
import { Schema as a } from "./cori.data.api498.js";
import { toUint8Array as g } from "./cori.data.api501.js";
import { bigIntToNumber as h } from "./cori.data.api563.js";
import { MetadataVersion as d } from "./cori.data.api517.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var l = u, y = B;
class p {
  /** @nocollapse */
  static decode(t) {
    t = new y(g(t));
    const e = o.getRootAsFooter(t), r = a.decode(e.schema(), /* @__PURE__ */ new Map(), e.version());
    return new D(r, e);
  }
  /** @nocollapse */
  static encode(t) {
    const e = new l(), r = a.encode(e, t.schema);
    o.startRecordBatchesVector(e, t.numRecordBatches);
    for (const n of [...t.recordBatches()].slice().reverse())
      s.encode(e, n);
    const c = e.endVector();
    o.startDictionariesVector(e, t.numDictionaries);
    for (const n of [...t.dictionaryBatches()].slice().reverse())
      s.encode(e, n);
    const i = e.endVector();
    return o.startFooter(e), o.addSchema(e, r), o.addVersion(e, d.V5), o.addRecordBatches(e, c), o.addDictionaries(e, i), o.finishFooterBuffer(e, o.endFooter(e)), e.asUint8Array();
  }
  get numRecordBatches() {
    return this._recordBatches.length;
  }
  get numDictionaries() {
    return this._dictionaryBatches.length;
  }
  constructor(t, e = d.V5, r, c) {
    this.schema = t, this.version = e, r && (this._recordBatches = r), c && (this._dictionaryBatches = c);
  }
  *recordBatches() {
    for (let t, e = -1, r = this.numRecordBatches; ++e < r; )
      (t = this.getRecordBatch(e)) && (yield t);
  }
  *dictionaryBatches() {
    for (let t, e = -1, r = this.numDictionaries; ++e < r; )
      (t = this.getDictionaryBatch(e)) && (yield t);
  }
  getRecordBatch(t) {
    return t >= 0 && t < this.numRecordBatches && this._recordBatches[t] || null;
  }
  getDictionaryBatch(t) {
    return t >= 0 && t < this.numDictionaries && this._dictionaryBatches[t] || null;
  }
}
class D extends p {
  get numRecordBatches() {
    return this._footer.recordBatchesLength();
  }
  get numDictionaries() {
    return this._footer.dictionariesLength();
  }
  constructor(t, e) {
    super(t, e.version()), this._footer = e;
  }
  getRecordBatch(t) {
    if (t >= 0 && t < this.numRecordBatches) {
      const e = this._footer.recordBatches(t);
      if (e)
        return s.decode(e);
    }
    return null;
  }
  getDictionaryBatch(t) {
    if (t >= 0 && t < this.numDictionaries) {
      const e = this._footer.dictionaries(t);
      if (e)
        return s.decode(e);
    }
    return null;
  }
}
class s {
  /** @nocollapse */
  static decode(t) {
    return new s(t.metaDataLength(), t.bodyLength(), t.offset());
  }
  /** @nocollapse */
  static encode(t, e) {
    const { metaDataLength: r } = e, c = BigInt(e.offset), i = BigInt(e.bodyLength);
    return m.createBlock(t, c, r, i);
  }
  constructor(t, e, r) {
    this.metaDataLength = t, this.offset = h(r), this.bodyLength = h(e);
  }
}
export {
  s as FileBlock,
  p as Footer
};
//# sourceMappingURL=cori.data.api510.js.map
