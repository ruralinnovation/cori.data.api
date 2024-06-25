import { makeData as h, Data as g } from "./cori.data.api501.js";
import { Table as C } from "./cori.data.api411.js";
import { Vector as f } from "./cori.data.api418.js";
import { Field as b, Schema as p } from "./cori.data.api496.js";
import { Struct as u, Null as S, DataType as A } from "./cori.data.api419.js";
import { instance as D } from "./cori.data.api550.js";
import { instance as B } from "./cori.data.api551.js";
import { instance as _ } from "./cori.data.api552.js";
import { instance as R } from "./cori.data.api553.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var y;
class d {
  constructor(...t) {
    switch (t.length) {
      case 2: {
        if ([this.schema] = t, !(this.schema instanceof p))
          throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        if ([
          ,
          this.data = h({
            nullCount: 0,
            type: new u(this.schema.fields),
            children: this.schema.fields.map((e) => h({ type: e.type, nullCount: 0 }))
          })
        ] = t, !(this.data instanceof g))
          throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        [this.schema, this.data] = w(this.schema, this.data.children);
        break;
      }
      case 1: {
        const [e] = t, { fields: n, children: i, length: a } = Object.keys(e).reduce((s, r, m) => (s.children[m] = e[r], s.length = Math.max(s.length, e[r].length), s.fields[m] = b.new({ name: r, type: e[r].type, nullable: !0 }), s), {
          length: 0,
          fields: new Array(),
          children: new Array()
        }), c = new p(n), o = h({ type: new u(n), length: a, children: i, nullCount: 0 });
        [this.schema, this.data] = w(c, o.children, a);
        break;
      }
      default:
        throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.");
    }
  }
  get dictionaries() {
    return this._dictionaries || (this._dictionaries = v(this.schema.fields, this.data.children));
  }
  /**
   * The number of columns in this RecordBatch.
   */
  get numCols() {
    return this.schema.fields.length;
  }
  /**
   * The number of rows in this RecordBatch.
   */
  get numRows() {
    return this.data.length;
  }
  /**
   * The number of null rows in this RecordBatch.
   */
  get nullCount() {
    return this.data.nullCount;
  }
  /**
   * Check whether an element is null.
   * @param index The index at which to read the validity bitmap.
   */
  isValid(t) {
    return this.data.getValid(t);
  }
  /**
   * Get a row by position.
   * @param index The index of the element to read.
   */
  get(t) {
    return D.visit(this.data, t);
  }
  /**
   * Set a row by position.
   * @param index The index of the element to write.
   * @param value The value to set.
   */
  set(t, e) {
    return B.visit(this.data, t, e);
  }
  /**
   * Retrieve the index of the first occurrence of a row in an RecordBatch.
   * @param element The row to locate in the RecordBatch.
   * @param offset The index at which to begin the search. If offset is omitted, the search starts at index 0.
   */
  indexOf(t, e) {
    return _.visit(this.data, t, e);
  }
  /**
   * Iterator for rows in this RecordBatch.
   */
  [Symbol.iterator]() {
    return R.visit(new f([this.data]));
  }
  /**
   * Return a JavaScript Array of the RecordBatch rows.
   * @returns An Array of RecordBatch rows.
   */
  toArray() {
    return [...this];
  }
  /**
   * Combines two or more RecordBatch of the same schema.
   * @param others Additional RecordBatch to add to the end of this RecordBatch.
   */
  concat(...t) {
    return new C(this.schema, [this, ...t]);
  }
  /**
   * Return a zero-copy sub-section of this RecordBatch.
   * @param start The beginning of the specified portion of the RecordBatch.
   * @param end The end of the specified portion of the RecordBatch. This is exclusive of the element at the index 'end'.
   */
  slice(t, e) {
    const [n] = new f([this.data]).slice(t, e).data;
    return new d(this.schema, n);
  }
  /**
   * Returns a child Vector by name, or null if this Vector has no child with the given name.
   * @param name The name of the child to retrieve.
   */
  getChild(t) {
    var e;
    return this.getChildAt((e = this.schema.fields) === null || e === void 0 ? void 0 : e.findIndex((n) => n.name === t));
  }
  /**
   * Returns a child Vector by index, or null if this Vector has no child at the supplied index.
   * @param index The index of the child to retrieve.
   */
  getChildAt(t) {
    return t > -1 && t < this.schema.fields.length ? new f([this.data.children[t]]) : null;
  }
  /**
   * Sets a child Vector by name.
   * @param name The name of the child to overwrite.
   * @returns A new RecordBatch with the new child for the specified name.
   */
  setChild(t, e) {
    var n;
    return this.setChildAt((n = this.schema.fields) === null || n === void 0 ? void 0 : n.findIndex((i) => i.name === t), e);
  }
  setChildAt(t, e) {
    let n = this.schema, i = this.data;
    if (t > -1 && t < this.numCols) {
      e || (e = new f([h({ type: new S(), length: this.numRows })]));
      const a = n.fields.slice(), c = i.children.slice(), o = a[t].clone({ type: e.type });
      [a[t], c[t]] = [o, e.data[0]], n = new p(a, new Map(this.schema.metadata)), i = h({ type: new u(a), children: c });
    }
    return new d(n, i);
  }
  /**
   * Construct a new RecordBatch containing only specified columns.
   *
   * @param columnNames Names of columns to keep.
   * @returns A new RecordBatch of columns matching the specified names.
   */
  select(t) {
    const e = this.schema.select(t), n = new u(e.fields), i = [];
    for (const a of t) {
      const c = this.schema.fields.findIndex((o) => o.name === a);
      ~c && (i[c] = this.data.children[c]);
    }
    return new d(e, h({ type: n, length: this.numRows, children: i }));
  }
  /**
   * Construct a new RecordBatch containing only columns at the specified indices.
   *
   * @param columnIndices Indices of columns to keep.
   * @returns A new RecordBatch of columns matching at the specified indices.
   */
  selectAt(t) {
    const e = this.schema.selectAt(t), n = t.map((a) => this.data.children[a]).filter(Boolean), i = h({ type: new u(e.fields), length: this.numRows, children: n });
    return new d(e, i);
  }
}
y = Symbol.toStringTag;
d[y] = ((l) => (l._nullCount = -1, l[Symbol.isConcatSpreadable] = !0, "RecordBatch"))(d.prototype);
function w(l, t, e = t.reduce((n, i) => Math.max(n, i.length), 0)) {
  var n;
  const i = [...l.fields], a = [...t], c = (e + 63 & -64) >> 3;
  for (const [o, s] of l.fields.entries()) {
    const r = t[o];
    (!r || r.length !== e) && (i[o] = s.clone({ nullable: !0 }), a[o] = (n = r == null ? void 0 : r._changeLengthAndBackfillNullBitmap(e)) !== null && n !== void 0 ? n : h({
      type: s.type,
      length: e,
      nullCount: e,
      nullBitmap: new Uint8Array(c)
    }));
  }
  return [
    l.assign(i),
    h({ type: new u(i), length: e, children: a })
  ];
}
function v(l, t, e = /* @__PURE__ */ new Map()) {
  var n, i;
  if (((n = l == null ? void 0 : l.length) !== null && n !== void 0 ? n : 0) > 0 && (l == null ? void 0 : l.length) === (t == null ? void 0 : t.length))
    for (let a = -1, c = l.length; ++a < c; ) {
      const { type: o } = l[a], s = t[a];
      for (const r of [s, ...((i = s == null ? void 0 : s.dictionary) === null || i === void 0 ? void 0 : i.data) || []])
        v(o.children, r == null ? void 0 : r.children, e);
      if (A.isDictionary(o)) {
        const { id: r } = o;
        if (!e.has(r))
          s != null && s.dictionary && e.set(r, s.dictionary);
        else if (e.get(r) !== s.dictionary)
          throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
      }
    }
  return e;
}
class $ extends d {
  constructor(t) {
    const e = t.fields.map((i) => h({ type: i.type })), n = h({ type: new u(t.fields), nullCount: 0, children: e });
    super(t, n);
  }
}
export {
  d as RecordBatch,
  $ as _InternalEmptyPlaceholderRecordBatch
};
//# sourceMappingURL=cori.data.api512.js.map
