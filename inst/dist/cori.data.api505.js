import { __awaiter as L, __asyncValues as F } from "./cori.data.api498.js";
import { Table as _ } from "./cori.data.api411.js";
import { MAGIC as R } from "./cori.data.api506.js";
import { Vector as O } from "./cori.data.api418.js";
import { Message as f, RecordBatch as y, DictionaryBatch as v } from "./cori.data.api507.js";
import { Footer as g, FileBlock as b } from "./cori.data.api508.js";
import { compareSchemas as B } from "./cori.data.api509.js";
import { AsyncByteQueue as l } from "./cori.data.api510.js";
import { VectorAssembler as A } from "./cori.data.api511.js";
import { toUint8Array as P } from "./cori.data.api499.js";
import { RecordBatch as D, _InternalEmptyPlaceholderRecordBatch as x } from "./cori.data.api512.js";
import { ReadableInterop as N } from "./cori.data.api513.js";
import { isPromise as w, isAsyncIterable as d, isWritableDOMStream as V, isWritableNodeStream as z, isIterable as E, isObject as T } from "./cori.data.api514.js";
import { MetadataVersion as U } from "./cori.data.api515.js";
import { MessageHeader as S } from "./cori.data.api516.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class M extends N {
  /** @nocollapse */
  // @ts-ignore
  static throughNode(t) {
    throw new Error('"throughNode" not available in this environment');
  }
  /** @nocollapse */
  static throughDOM(t, e) {
    throw new Error('"throughDOM" not available in this environment');
  }
  constructor(t) {
    super(), this._position = 0, this._started = !1, this._sink = new l(), this._schema = null, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), T(t) || (t = { autoDestroy: !0, writeLegacyIpcFormat: !1 }), this._autoDestroy = typeof t.autoDestroy == "boolean" ? t.autoDestroy : !0, this._writeLegacyIpcFormat = typeof t.writeLegacyIpcFormat == "boolean" ? t.writeLegacyIpcFormat : !1;
  }
  toString(t = !1) {
    return this._sink.toString(t);
  }
  toUint8Array(t = !1) {
    return this._sink.toUint8Array(t);
  }
  writeAll(t) {
    return w(t) ? t.then((e) => this.writeAll(e)) : d(t) ? m(this, t) : u(this, t);
  }
  get closed() {
    return this._sink.closed;
  }
  [Symbol.asyncIterator]() {
    return this._sink[Symbol.asyncIterator]();
  }
  toDOMStream(t) {
    return this._sink.toDOMStream(t);
  }
  toNodeStream(t) {
    return this._sink.toNodeStream(t);
  }
  close() {
    return this.reset()._sink.close();
  }
  abort(t) {
    return this.reset()._sink.abort(t);
  }
  finish() {
    return this._autoDestroy ? this.close() : this.reset(this._sink, this._schema), this;
  }
  reset(t = this._sink, e = null) {
    return t === this._sink || t instanceof l ? this._sink = t : (this._sink = new l(), t && V(t) ? this.toDOMStream({ type: "bytes" }).pipeTo(t) : t && z(t) && this.toNodeStream({ objectMode: !1 }).pipe(t)), this._started && this._schema && this._writeFooter(this._schema), this._started = !1, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), (!e || !B(e, this._schema)) && (e == null ? (this._position = 0, this._schema = null) : (this._started = !0, this._schema = e, this._writeSchema(e))), this;
  }
  write(t) {
    let e = null;
    if (this._sink) {
      if (t == null)
        return this.finish() && void 0;
      if (t instanceof _ && !(e = t.schema))
        return this.finish() && void 0;
      if (t instanceof D && !(e = t.schema))
        return this.finish() && void 0;
    } else
      throw new Error("RecordBatchWriter is closed");
    if (e && !B(e, this._schema)) {
      if (this._started && this._autoDestroy)
        return this.close();
      this.reset(this._sink, e);
    }
    t instanceof D ? t instanceof x || this._writeRecordBatch(t) : t instanceof _ ? this.writeAll(t.batches) : E(t) && this.writeAll(t);
  }
  _writeMessage(t, e = 8) {
    const r = e - 1, i = f.encode(t), s = i.byteLength, o = this._writeLegacyIpcFormat ? 4 : 8, n = s + o + r & ~r, a = n - s - o;
    return t.headerType === S.RecordBatch ? this._recordBatchBlocks.push(new b(n, t.bodyLength, this._position)) : t.headerType === S.DictionaryBatch && this._dictionaryBlocks.push(new b(n, t.bodyLength, this._position)), this._writeLegacyIpcFormat || this._write(Int32Array.of(-1)), this._write(Int32Array.of(n - o)), s > 0 && this._write(i), this._writePadding(a);
  }
  _write(t) {
    if (this._started) {
      const e = P(t);
      e && e.byteLength > 0 && (this._sink.write(e), this._position += e.byteLength);
    }
    return this;
  }
  _writeSchema(t) {
    return this._writeMessage(f.from(t));
  }
  // @ts-ignore
  _writeFooter(t) {
    return this._writeLegacyIpcFormat ? this._write(Int32Array.of(0)) : this._write(Int32Array.of(-1, 0));
  }
  _writeMagic() {
    return this._write(R);
  }
  _writePadding(t) {
    return t > 0 ? this._write(new Uint8Array(t)) : this;
  }
  _writeRecordBatch(t) {
    const { byteLength: e, nodes: r, bufferRegions: i, buffers: s } = A.assemble(t), o = new y(t.numRows, r, i), n = f.from(o, e);
    return this._writeDictionaries(t)._writeMessage(n)._writeBodyBuffers(s);
  }
  _writeDictionaryBatch(t, e, r = !1) {
    this._dictionaryDeltaOffsets.set(e, t.length + (this._dictionaryDeltaOffsets.get(e) || 0));
    const { byteLength: i, nodes: s, bufferRegions: o, buffers: n } = A.assemble(new O([t])), a = new y(t.length, s, o), c = new v(a, e, r), I = f.from(c, i);
    return this._writeMessage(I)._writeBodyBuffers(n);
  }
  _writeBodyBuffers(t) {
    let e, r, i;
    for (let s = -1, o = t.length; ++s < o; )
      (e = t[s]) && (r = e.byteLength) > 0 && (this._write(e), (i = (r + 7 & -8) - r) > 0 && this._writePadding(i));
    return this;
  }
  _writeDictionaries(t) {
    for (let [e, r] of t.dictionaries) {
      let i = this._dictionaryDeltaOffsets.get(e) || 0;
      if (i === 0 || (r = r == null ? void 0 : r.slice(i)).length > 0)
        for (const s of r.data)
          this._writeDictionaryBatch(s, e, i > 0), i += s.length;
    }
    return this;
  }
}
class k extends M {
  /** @nocollapse */
  static writeAll(t, e) {
    const r = new k(e);
    return w(t) ? t.then((i) => r.writeAll(i)) : d(t) ? m(r, t) : u(r, t);
  }
}
class p extends M {
  /** @nocollapse */
  static writeAll(t) {
    const e = new p();
    return w(t) ? t.then((r) => e.writeAll(r)) : d(t) ? m(e, t) : u(e, t);
  }
  constructor() {
    super(), this._autoDestroy = !0;
  }
  // @ts-ignore
  _writeSchema(t) {
    return this._writeMagic()._writePadding(2);
  }
  _writeFooter(t) {
    const e = g.encode(new g(t, U.V5, this._recordBatchBlocks, this._dictionaryBlocks));
    return super._writeFooter(t)._write(e)._write(Int32Array.of(e.byteLength))._writeMagic();
  }
}
function u(h, t) {
  let e = t;
  t instanceof _ && (e = t.batches, h.reset(void 0, t.schema));
  for (const r of e)
    h.write(r);
  return h.finish();
}
function m(h, t) {
  var e, r, i, s, o, n, a;
  return L(this, void 0, void 0, function* () {
    try {
      for (e = !0, r = F(t); i = yield r.next(), s = i.done, !s; e = !0) {
        a = i.value, e = !1;
        const c = a;
        h.write(c);
      }
    } catch (c) {
      o = { error: c };
    } finally {
      try {
        !e && !s && (n = r.return) && (yield n.call(r));
      } finally {
        if (o)
          throw o.error;
      }
    }
    return h.finish();
  });
}
export {
  p as RecordBatchFileWriter,
  k as RecordBatchStreamWriter,
  M as RecordBatchWriter
};
//# sourceMappingURL=cori.data.api505.js.map
