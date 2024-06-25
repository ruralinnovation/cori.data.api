import { Type as y } from "./cori.data.api258.js";
import { makeData as A, Data as k } from "./cori.data.api264.js";
import { Vector as w } from "./cori.data.api200.js";
import { Schema as m, Field as R } from "./cori.data.api259.js";
import { Null as _, Struct as B } from "./cori.data.api201.js";
import { compareSchemas as V } from "./cori.data.api272.js";
import { distributeVectorsIntoRecordBatches as C } from "./cori.data.api326.js";
import { computeChunkOffsets as T, computeChunkNullCounts as M, sliceChunks as N, wrapChunkedCall1 as S, wrapChunkedCall2 as O, wrapChunkedIndexOf as F, isChunkedValid as I } from "./cori.data.api312.js";
import { instance as $ } from "./cori.data.api313.js";
import { instance as E } from "./cori.data.api314.js";
import { instance as j } from "./cori.data.api315.js";
import { instance as D } from "./cori.data.api316.js";
import { clampRange as U } from "./cori.data.api311.js";
import { RecordBatch as u } from "./cori.data.api275.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var v;
class o {
  constructor(...t) {
    var e, s;
    if (t.length === 0)
      return this.batches = [], this.schema = new m([]), this._offsets = [0], this;
    let i, r;
    t[0] instanceof m && (i = t.shift()), t.at(-1) instanceof Uint32Array && (r = t.pop());
    const l = (n) => {
      if (n) {
        if (n instanceof u)
          return [n];
        if (n instanceof o)
          return n.batches;
        if (n instanceof k) {
          if (n.type instanceof B)
            return [new u(new m(n.type.children), n)];
        } else {
          if (Array.isArray(n))
            return n.flatMap((c) => l(c));
          if (typeof n[Symbol.iterator] == "function")
            return [...n].flatMap((c) => l(c));
          if (typeof n == "object") {
            const c = Object.keys(n), f = c.map((p) => new w([n[p]])), g = i ?? new m(c.map((p, b) => new R(String(p), f[b].type, f[b].nullable))), [, d] = C(g, f);
            return d.length === 0 ? [new u(n)] : d;
          }
        }
      }
      return [];
    }, a = t.flatMap((n) => l(n));
    if (i = (s = i ?? ((e = a[0]) === null || e === void 0 ? void 0 : e.schema)) !== null && s !== void 0 ? s : new m([]), !(i instanceof m))
      throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
    for (const n of a) {
      if (!(n instanceof u))
        throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
      if (!V(i, n.schema))
        throw new TypeError("Table and inner RecordBatch schemas must be equivalent.");
    }
    this.schema = i, this.batches = a, this._offsets = r ?? T(this.data);
  }
  /**
   * The contiguous {@link RecordBatch `RecordBatch`} chunks of the Table rows.
   */
  get data() {
    return this.batches.map(({ data: t }) => t);
  }
  /**
   * The number of columns in this Table.
   */
  get numCols() {
    return this.schema.fields.length;
  }
  /**
   * The number of rows in this Table.
   */
  get numRows() {
    return this.data.reduce((t, e) => t + e.length, 0);
  }
  /**
   * The number of null rows in this Table.
   */
  get nullCount() {
    return this._nullCount === -1 && (this._nullCount = M(this.data)), this._nullCount;
  }
  /**
   * Check whether an element is null.
   *
   * @param index The index at which to read the validity bitmap.
   */
  // @ts-ignore
  isValid(t) {
    return !1;
  }
  /**
   * Get an element value by position.
   *
   * @param index The index of the element to read.
   */
  // @ts-ignore
  get(t) {
    return null;
  }
  /**
   * Set an element value by position.
   *
   * @param index The index of the element to write.
   * @param value The value to set.
   */
  // @ts-ignore
  set(t, e) {
  }
  /**
   * Retrieve the index of the first occurrence of a value in an Vector.
   *
   * @param element The value to locate in the Vector.
   * @param offset The index at which to begin the search. If offset is omitted, the search starts at index 0.
   */
  // @ts-ignore
  indexOf(t, e) {
    return -1;
  }
  /**
   * Iterator for rows in this Table.
   */
  [Symbol.iterator]() {
    return this.batches.length > 0 ? D.visit(new w(this.data)) : new Array(0)[Symbol.iterator]();
  }
  /**
   * Return a JavaScript Array of the Table rows.
   *
   * @returns An Array of Table rows.
   */
  toArray() {
    return [...this];
  }
  /**
   * Returns a string representation of the Table rows.
   *
   * @returns A string representation of the Table rows.
   */
  toString() {
    return `[
  ${this.toArray().join(`,
  `)}
]`;
  }
  /**
   * Combines two or more Tables of the same schema.
   *
   * @param others Additional Tables to add to the end of this Tables.
   */
  concat(...t) {
    const e = this.schema, s = this.data.concat(t.flatMap(({ data: i }) => i));
    return new o(e, s.map((i) => new u(e, i)));
  }
  /**
   * Return a zero-copy sub-section of this Table.
   *
   * @param begin The beginning of the specified portion of the Table.
   * @param end The end of the specified portion of the Table. This is exclusive of the element at the index 'end'.
   */
  slice(t, e) {
    const s = this.schema;
    [t, e] = U({ length: this.numRows }, t, e);
    const i = N(this.data, this._offsets, t, e);
    return new o(s, i.map((r) => new u(s, r)));
  }
  /**
   * Returns a child Vector by name, or null if this Vector has no child with the given name.
   *
   * @param name The name of the child to retrieve.
   */
  getChild(t) {
    return this.getChildAt(this.schema.fields.findIndex((e) => e.name === t));
  }
  /**
   * Returns a child Vector by index, or null if this Vector has no child at the supplied index.
   *
   * @param index The index of the child to retrieve.
   */
  getChildAt(t) {
    if (t > -1 && t < this.schema.fields.length) {
      const e = this.data.map((s) => s.children[t]);
      if (e.length === 0) {
        const { type: s } = this.schema.fields[t], i = A({ type: s, length: 0, nullCount: 0 });
        e.push(i._changeLengthAndBackfillNullBitmap(this.numRows));
      }
      return new w(e);
    }
    return null;
  }
  /**
   * Sets a child Vector by name.
   *
   * @param name The name of the child to overwrite.
   * @returns A new Table with the supplied child for the specified name.
   */
  setChild(t, e) {
    var s;
    return this.setChildAt((s = this.schema.fields) === null || s === void 0 ? void 0 : s.findIndex((i) => i.name === t), e);
  }
  setChildAt(t, e) {
    let s = this.schema, i = [...this.batches];
    if (t > -1 && t < this.numCols) {
      e || (e = new w([A({ type: new _(), length: this.numRows })]));
      const r = s.fields.slice(), l = r[t].clone({ type: e.type }), a = this.schema.fields.map((n, c) => this.getChildAt(c));
      [r[t], a[t]] = [l, e], [s, i] = C(s, a);
    }
    return new o(s, i);
  }
  /**
   * Construct a new Table containing only specified columns.
   *
   * @param columnNames Names of columns to keep.
   * @returns A new Table of columns matching the specified names.
   */
  select(t) {
    const e = this.schema.fields.reduce((s, i, r) => s.set(i.name, r), /* @__PURE__ */ new Map());
    return this.selectAt(t.map((s) => e.get(s)).filter((s) => s > -1));
  }
  /**
   * Construct a new Table containing only columns at the specified indices.
   *
   * @param columnIndices Indices of columns to keep.
   * @returns A new Table of columns at the specified indices.
   */
  selectAt(t) {
    const e = this.schema.selectAt(t), s = this.batches.map((i) => i.selectAt(t));
    return new o(e, s);
  }
  assign(t) {
    const e = this.schema.fields, [s, i] = t.schema.fields.reduce((a, n, c) => {
      const [f, g] = a, d = e.findIndex((p) => p.name === n.name);
      return ~d ? g[d] = c : f.push(c), a;
    }, [[], []]), r = this.schema.assign(t.schema), l = [
      ...e.map((a, n) => [n, i[n]]).map(([a, n]) => n === void 0 ? this.getChildAt(a) : t.getChildAt(n)),
      ...s.map((a) => t.getChildAt(a))
    ].filter(Boolean);
    return new o(...C(r, l));
  }
}
v = Symbol.toStringTag;
o[v] = ((h) => (h.schema = null, h.batches = [], h._offsets = new Uint32Array([0]), h._nullCount = -1, h[Symbol.isConcatSpreadable] = !0, h.isValid = S(I), h.get = S($.getVisitFn(y.Struct)), h.set = O(E.getVisitFn(y.Struct)), h.indexOf = F(j.getVisitFn(y.Struct)), "Table"))(o.prototype);
export {
  o as Table
};
//# sourceMappingURL=cori.data.api193.js.map
