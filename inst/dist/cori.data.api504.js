import { Vector as U } from "./cori.data.api428.js";
import { Visitor as I } from "./cori.data.api555.js";
import { RecordBatch as V } from "./cori.data.api505.js";
import { rebaseValueOffsets as _ } from "./cori.data.api492.js";
import { truncateBitmap as w, packBools as D } from "./cori.data.api554.js";
import { FieldNode as d, BufferRegion as R } from "./cori.data.api500.js";
import { DataType as m } from "./cori.data.api429.js";
import { bigIntToNumber as L } from "./cori.data.api558.js";
import { UnionMode as B } from "./cori.data.api556.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class i extends I {
  /** @nocollapse */
  static assemble(...t) {
    const s = (r) => r.flatMap((o) => Array.isArray(o) ? s(o) : o instanceof V ? o.data.children : o.data), n = new i();
    return n.visitMany(s(t)), n;
  }
  constructor() {
    super(), this._byteLength = 0, this._nodes = [], this._buffers = [], this._bufferRegions = [];
  }
  visit(t) {
    if (t instanceof U)
      return this.visitMany(t.data), this;
    const { type: s } = t;
    if (!m.isDictionary(s)) {
      const { length: n } = t;
      if (n > 2147483647)
        throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");
      if (m.isUnion(s))
        this.nodes.push(new d(n, 0));
      else {
        const { nullCount: r } = t;
        m.isNull(s) || l.call(this, r <= 0 ? new Uint8Array(0) : w(t.offset, n, t.nullBitmap)), this.nodes.push(new d(n, r));
      }
    }
    return super.visit(t);
  }
  visitNull(t) {
    return this;
  }
  visitDictionary(t) {
    return this.visit(t.clone(t.type.indices));
  }
  get nodes() {
    return this._nodes;
  }
  get buffers() {
    return this._buffers;
  }
  get byteLength() {
    return this._byteLength;
  }
  get bufferRegions() {
    return this._bufferRegions;
  }
}
function l(e) {
  const t = e.byteLength + 7 & -8;
  return this.buffers.push(e), this.bufferRegions.push(new R(this._byteLength, t)), this._byteLength += t, this;
}
function A(e) {
  var t;
  const { type: s, length: n, typeIds: r, valueOffsets: o } = e;
  if (l.call(this, r), s.mode === B.Sparse)
    return g.call(this, e);
  if (s.mode === B.Dense) {
    if (e.offset <= 0)
      return l.call(this, o), g.call(this, e);
    {
      const p = new Int32Array(n), a = /* @__PURE__ */ Object.create(null), v = /* @__PURE__ */ Object.create(null);
      for (let h, u, c = -1; ++c < n; )
        (h = r[c]) !== void 0 && ((u = a[h]) === void 0 && (u = a[h] = o[c]), p[c] = o[c] - u, v[h] = ((t = v[h]) !== null && t !== void 0 ? t : 0) + 1);
      l.call(this, p), this.visitMany(e.children.map((h, u) => {
        const c = s.typeIds[u], M = a[c], O = v[c];
        return h.slice(M, Math.min(n, O));
      }));
    }
  }
  return this;
}
function F(e) {
  let t;
  return e.nullCount >= e.length ? l.call(this, new Uint8Array(0)) : (t = e.values) instanceof Uint8Array ? l.call(this, w(e.offset, e.length, t)) : l.call(this, D(e.values));
}
function f(e) {
  return l.call(this, e.values.subarray(0, e.length * e.stride));
}
function y(e) {
  const { length: t, values: s, valueOffsets: n } = e, r = L(n[0]), o = L(n[t]), p = Math.min(o - r, s.byteLength - r);
  return l.call(this, _(-r, t + 1, n)), l.call(this, s.subarray(r, r + p)), this;
}
function b(e) {
  const { length: t, valueOffsets: s } = e;
  if (s) {
    const { [0]: n, [t]: r } = s;
    return l.call(this, _(-n, t + 1, s)), this.visit(e.children[0].slice(n, r - n));
  }
  return this.visit(e.children[0]);
}
function g(e) {
  return this.visitMany(e.type.children.map((t, s) => e.children[s]).filter(Boolean))[0];
}
i.prototype.visitBool = F;
i.prototype.visitInt = f;
i.prototype.visitFloat = f;
i.prototype.visitUtf8 = y;
i.prototype.visitLargeUtf8 = y;
i.prototype.visitBinary = y;
i.prototype.visitLargeBinary = y;
i.prototype.visitFixedSizeBinary = f;
i.prototype.visitDate = f;
i.prototype.visitTimestamp = f;
i.prototype.visitTime = f;
i.prototype.visitDecimal = f;
i.prototype.visitList = b;
i.prototype.visitStruct = g;
i.prototype.visitUnion = A;
i.prototype.visitInterval = f;
i.prototype.visitDuration = f;
i.prototype.visitFixedSizeList = b;
i.prototype.visitMap = b;
export {
  i as VectorAssembler
};
//# sourceMappingURL=cori.data.api504.js.map
