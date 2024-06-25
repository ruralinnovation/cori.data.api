import { bigIntToNumber as nt } from "./cori.data.api563.js";
import { Type as e } from "./cori.data.api497.js";
import { UnionMode as A } from "./cori.data.api561.js";
import { Precision as y } from "./cori.data.api564.js";
import { DateUnit as h } from "./cori.data.api565.js";
import { TimeUnit as l } from "./cori.data.api566.js";
import { IntervalUnit as T } from "./cori.data.api567.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var E, W, x, P, w, k, C, Y, H, G, R, q, J, K, Q, V, X, Z, tt, rt, et, it;
class i {
  /** @nocollapse */
  static isNull(t) {
    return (t == null ? void 0 : t.typeId) === e.Null;
  }
  /** @nocollapse */
  static isInt(t) {
    return (t == null ? void 0 : t.typeId) === e.Int;
  }
  /** @nocollapse */
  static isFloat(t) {
    return (t == null ? void 0 : t.typeId) === e.Float;
  }
  /** @nocollapse */
  static isBinary(t) {
    return (t == null ? void 0 : t.typeId) === e.Binary;
  }
  /** @nocollapse */
  static isLargeBinary(t) {
    return (t == null ? void 0 : t.typeId) === e.LargeBinary;
  }
  /** @nocollapse */
  static isUtf8(t) {
    return (t == null ? void 0 : t.typeId) === e.Utf8;
  }
  /** @nocollapse */
  static isLargeUtf8(t) {
    return (t == null ? void 0 : t.typeId) === e.LargeUtf8;
  }
  /** @nocollapse */
  static isBool(t) {
    return (t == null ? void 0 : t.typeId) === e.Bool;
  }
  /** @nocollapse */
  static isDecimal(t) {
    return (t == null ? void 0 : t.typeId) === e.Decimal;
  }
  /** @nocollapse */
  static isDate(t) {
    return (t == null ? void 0 : t.typeId) === e.Date;
  }
  /** @nocollapse */
  static isTime(t) {
    return (t == null ? void 0 : t.typeId) === e.Time;
  }
  /** @nocollapse */
  static isTimestamp(t) {
    return (t == null ? void 0 : t.typeId) === e.Timestamp;
  }
  /** @nocollapse */
  static isInterval(t) {
    return (t == null ? void 0 : t.typeId) === e.Interval;
  }
  /** @nocollapse */
  static isDuration(t) {
    return (t == null ? void 0 : t.typeId) === e.Duration;
  }
  /** @nocollapse */
  static isList(t) {
    return (t == null ? void 0 : t.typeId) === e.List;
  }
  /** @nocollapse */
  static isStruct(t) {
    return (t == null ? void 0 : t.typeId) === e.Struct;
  }
  /** @nocollapse */
  static isUnion(t) {
    return (t == null ? void 0 : t.typeId) === e.Union;
  }
  /** @nocollapse */
  static isFixedSizeBinary(t) {
    return (t == null ? void 0 : t.typeId) === e.FixedSizeBinary;
  }
  /** @nocollapse */
  static isFixedSizeList(t) {
    return (t == null ? void 0 : t.typeId) === e.FixedSizeList;
  }
  /** @nocollapse */
  static isMap(t) {
    return (t == null ? void 0 : t.typeId) === e.Map;
  }
  /** @nocollapse */
  static isDictionary(t) {
    return (t == null ? void 0 : t.typeId) === e.Dictionary;
  }
  /** @nocollapse */
  static isDenseUnion(t) {
    return i.isUnion(t) && t.mode === A.Dense;
  }
  /** @nocollapse */
  static isSparseUnion(t) {
    return i.isUnion(t) && t.mode === A.Sparse;
  }
  constructor(t) {
    this.typeId = t;
  }
}
E = Symbol.toStringTag;
i[E] = ((r) => (r.children = null, r.ArrayType = Array, r.OffsetArrayType = Int32Array, r[Symbol.toStringTag] = "DataType"))(i.prototype);
class v extends i {
  constructor() {
    super(e.Null);
  }
  toString() {
    return "Null";
  }
}
W = Symbol.toStringTag;
v[W] = ((r) => r[Symbol.toStringTag] = "Null")(v.prototype);
class a extends i {
  constructor(t, n) {
    super(e.Int), this.isSigned = t, this.bitWidth = n;
  }
  get ArrayType() {
    switch (this.bitWidth) {
      case 8:
        return this.isSigned ? Int8Array : Uint8Array;
      case 16:
        return this.isSigned ? Int16Array : Uint16Array;
      case 32:
        return this.isSigned ? Int32Array : Uint32Array;
      case 64:
        return this.isSigned ? BigInt64Array : BigUint64Array;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `${this.isSigned ? "I" : "Ui"}nt${this.bitWidth}`;
  }
}
x = Symbol.toStringTag;
a[x] = ((r) => (r.isSigned = null, r.bitWidth = null, r[Symbol.toStringTag] = "Int"))(a.prototype);
class st extends a {
  constructor() {
    super(!0, 8);
  }
  get ArrayType() {
    return Int8Array;
  }
}
class at extends a {
  constructor() {
    super(!0, 16);
  }
  get ArrayType() {
    return Int16Array;
  }
}
class ot extends a {
  constructor() {
    super(!0, 32);
  }
  get ArrayType() {
    return Int32Array;
  }
}
class lt extends a {
  constructor() {
    super(!0, 64);
  }
  get ArrayType() {
    return BigInt64Array;
  }
}
class yt extends a {
  constructor() {
    super(!1, 8);
  }
  get ArrayType() {
    return Uint8Array;
  }
}
class ut extends a {
  constructor() {
    super(!1, 16);
  }
  get ArrayType() {
    return Uint16Array;
  }
}
class ct extends a {
  constructor() {
    super(!1, 32);
  }
  get ArrayType() {
    return Uint32Array;
  }
}
class dt extends a {
  constructor() {
    super(!1, 64);
  }
  get ArrayType() {
    return BigUint64Array;
  }
}
Object.defineProperty(st.prototype, "ArrayType", { value: Int8Array });
Object.defineProperty(at.prototype, "ArrayType", { value: Int16Array });
Object.defineProperty(ot.prototype, "ArrayType", { value: Int32Array });
Object.defineProperty(lt.prototype, "ArrayType", { value: BigInt64Array });
Object.defineProperty(yt.prototype, "ArrayType", { value: Uint8Array });
Object.defineProperty(ut.prototype, "ArrayType", { value: Uint16Array });
Object.defineProperty(ct.prototype, "ArrayType", { value: Uint32Array });
Object.defineProperty(dt.prototype, "ArrayType", { value: BigUint64Array });
class d extends i {
  constructor(t) {
    super(e.Float), this.precision = t;
  }
  get ArrayType() {
    switch (this.precision) {
      case y.HALF:
        return Uint16Array;
      case y.SINGLE:
        return Float32Array;
      case y.DOUBLE:
        return Float64Array;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `Float${this.precision << 5 || 16}`;
  }
}
P = Symbol.toStringTag;
d[P] = ((r) => (r.precision = null, r[Symbol.toStringTag] = "Float"))(d.prototype);
class pt extends d {
  constructor() {
    super(y.HALF);
  }
}
class gt extends d {
  constructor() {
    super(y.SINGLE);
  }
}
class St extends d {
  constructor() {
    super(y.DOUBLE);
  }
}
Object.defineProperty(pt.prototype, "ArrayType", { value: Uint16Array });
Object.defineProperty(gt.prototype, "ArrayType", { value: Float32Array });
Object.defineProperty(St.prototype, "ArrayType", { value: Float64Array });
class I extends i {
  constructor() {
    super(e.Binary);
  }
  toString() {
    return "Binary";
  }
}
w = Symbol.toStringTag;
I[w] = ((r) => (r.ArrayType = Uint8Array, r[Symbol.toStringTag] = "Binary"))(I.prototype);
class b extends i {
  constructor() {
    super(e.LargeBinary);
  }
  toString() {
    return "LargeBinary";
  }
}
k = Symbol.toStringTag;
b[k] = ((r) => (r.ArrayType = Uint8Array, r.OffsetArrayType = BigInt64Array, r[Symbol.toStringTag] = "LargeBinary"))(b.prototype);
class U extends i {
  constructor() {
    super(e.Utf8);
  }
  toString() {
    return "Utf8";
  }
}
C = Symbol.toStringTag;
U[C] = ((r) => (r.ArrayType = Uint8Array, r[Symbol.toStringTag] = "Utf8"))(U.prototype);
class f extends i {
  constructor() {
    super(e.LargeUtf8);
  }
  toString() {
    return "LargeUtf8";
  }
}
Y = Symbol.toStringTag;
f[Y] = ((r) => (r.ArrayType = Uint8Array, r.OffsetArrayType = BigInt64Array, r[Symbol.toStringTag] = "LargeUtf8"))(f.prototype);
class D extends i {
  constructor() {
    super(e.Bool);
  }
  toString() {
    return "Bool";
  }
}
H = Symbol.toStringTag;
D[H] = ((r) => (r.ArrayType = Uint8Array, r[Symbol.toStringTag] = "Bool"))(D.prototype);
class B extends i {
  constructor(t, n, s = 128) {
    super(e.Decimal), this.scale = t, this.precision = n, this.bitWidth = s;
  }
  toString() {
    return `Decimal[${this.precision}e${this.scale > 0 ? "+" : ""}${this.scale}]`;
  }
}
G = Symbol.toStringTag;
B[G] = ((r) => (r.scale = null, r.precision = null, r.ArrayType = Uint32Array, r[Symbol.toStringTag] = "Decimal"))(B.prototype);
class g extends i {
  constructor(t) {
    super(e.Date), this.unit = t;
  }
  toString() {
    return `Date${(this.unit + 1) * 32}<${h[this.unit]}>`;
  }
}
R = Symbol.toStringTag;
g[R] = ((r) => (r.unit = null, r.ArrayType = Int32Array, r[Symbol.toStringTag] = "Date"))(g.prototype);
class ft extends g {
  constructor() {
    super(h.DAY);
  }
}
class Dt extends g {
  constructor() {
    super(h.MILLISECOND);
  }
}
class u extends i {
  constructor(t, n) {
    super(e.Time), this.unit = t, this.bitWidth = n;
  }
  toString() {
    return `Time${this.bitWidth}<${l[this.unit]}>`;
  }
  get ArrayType() {
    switch (this.bitWidth) {
      case 32:
        return Int32Array;
      case 64:
        return BigInt64Array;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
}
q = Symbol.toStringTag;
u[q] = ((r) => (r.unit = null, r.bitWidth = null, r[Symbol.toStringTag] = "Time"))(u.prototype);
class Bt extends u {
  constructor() {
    super(l.SECOND, 32);
  }
}
class Lt extends u {
  constructor() {
    super(l.MILLISECOND, 32);
  }
}
class _t extends u {
  constructor() {
    super(l.MICROSECOND, 64);
  }
}
class $t extends u {
  constructor() {
    super(l.NANOSECOND, 64);
  }
}
class L extends i {
  constructor(t, n) {
    super(e.Timestamp), this.unit = t, this.timezone = n;
  }
  toString() {
    return `Timestamp<${l[this.unit]}${this.timezone ? `, ${this.timezone}` : ""}>`;
  }
}
J = Symbol.toStringTag;
L[J] = ((r) => (r.unit = null, r.timezone = null, r.ArrayType = Int32Array, r[Symbol.toStringTag] = "Timestamp"))(L.prototype);
class S extends i {
  constructor(t) {
    super(e.Interval), this.unit = t;
  }
  toString() {
    return `Interval<${T[this.unit]}>`;
  }
}
K = Symbol.toStringTag;
S[K] = ((r) => (r.unit = null, r.ArrayType = Int32Array, r[Symbol.toStringTag] = "Interval"))(S.prototype);
class Ft extends S {
  constructor() {
    super(T.DAY_TIME);
  }
}
class Ot extends S {
  constructor() {
    super(T.YEAR_MONTH);
  }
}
class _ extends i {
  constructor(t) {
    super(e.Duration), this.unit = t;
  }
  toString() {
    return `Duration<${l[this.unit]}>`;
  }
}
Q = Symbol.toStringTag;
_[Q] = ((r) => (r.unit = null, r.ArrayType = BigInt64Array, r[Symbol.toStringTag] = "Duration"))(_.prototype);
class $ extends i {
  constructor(t) {
    super(e.List), this.children = [t];
  }
  toString() {
    return `List<${this.valueType}>`;
  }
  get valueType() {
    return this.children[0].type;
  }
  get valueField() {
    return this.children[0];
  }
  get ArrayType() {
    return this.valueType.ArrayType;
  }
}
V = Symbol.toStringTag;
$[V] = ((r) => (r.children = null, r[Symbol.toStringTag] = "List"))($.prototype);
class F extends i {
  constructor(t) {
    super(e.Struct), this.children = t;
  }
  toString() {
    return `Struct<{${this.children.map((t) => `${t.name}:${t.type}`).join(", ")}}>`;
  }
}
X = Symbol.toStringTag;
F[X] = ((r) => (r.children = null, r[Symbol.toStringTag] = "Struct"))(F.prototype);
class O extends i {
  constructor(t, n, s) {
    super(e.Union), this.mode = t, this.children = s, this.typeIds = n = Int32Array.from(n), this.typeIdToChildIndex = n.reduce((o, c, p) => (o[c] = p) && o || o, /* @__PURE__ */ Object.create(null));
  }
  toString() {
    return `${this[Symbol.toStringTag]}<${this.children.map((t) => `${t.type}`).join(" | ")}>`;
  }
}
Z = Symbol.toStringTag;
O[Z] = ((r) => (r.mode = null, r.typeIds = null, r.children = null, r.typeIdToChildIndex = null, r.ArrayType = Int8Array, r[Symbol.toStringTag] = "Union"))(O.prototype);
class z extends i {
  constructor(t) {
    super(e.FixedSizeBinary), this.byteWidth = t;
  }
  toString() {
    return `FixedSizeBinary[${this.byteWidth}]`;
  }
}
tt = Symbol.toStringTag;
z[tt] = ((r) => (r.byteWidth = null, r.ArrayType = Uint8Array, r[Symbol.toStringTag] = "FixedSizeBinary"))(z.prototype);
class N extends i {
  constructor(t, n) {
    super(e.FixedSizeList), this.listSize = t, this.children = [n];
  }
  get valueType() {
    return this.children[0].type;
  }
  get valueField() {
    return this.children[0];
  }
  get ArrayType() {
    return this.valueType.ArrayType;
  }
  toString() {
    return `FixedSizeList[${this.listSize}]<${this.valueType}>`;
  }
}
rt = Symbol.toStringTag;
N[rt] = ((r) => (r.children = null, r.listSize = null, r[Symbol.toStringTag] = "FixedSizeList"))(N.prototype);
class j extends i {
  constructor(t, n = !1) {
    var s, o, c;
    if (super(e.Map), this.children = [t], this.keysSorted = n, t && (t.name = "entries", !((s = t == null ? void 0 : t.type) === null || s === void 0) && s.children)) {
      const p = (o = t == null ? void 0 : t.type) === null || o === void 0 ? void 0 : o.children[0];
      p && (p.name = "key");
      const m = (c = t == null ? void 0 : t.type) === null || c === void 0 ? void 0 : c.children[1];
      m && (m.name = "value");
    }
  }
  get keyType() {
    return this.children[0].type.children[0].type;
  }
  get valueType() {
    return this.children[0].type.children[1].type;
  }
  get childType() {
    return this.children[0].type;
  }
  toString() {
    return `Map<{${this.children[0].type.children.map((t) => `${t.name}:${t.type}`).join(", ")}}>`;
  }
}
et = Symbol.toStringTag;
j[et] = ((r) => (r.children = null, r.keysSorted = null, r[Symbol.toStringTag] = "Map_"))(j.prototype);
const ht = /* @__PURE__ */ ((r) => () => ++r)(-1);
class M extends i {
  constructor(t, n, s, o) {
    super(e.Dictionary), this.indices = n, this.dictionary = t, this.isOrdered = o || !1, this.id = s == null ? ht() : nt(s);
  }
  get children() {
    return this.dictionary.children;
  }
  get valueType() {
    return this.dictionary;
  }
  get ArrayType() {
    return this.dictionary.ArrayType;
  }
  toString() {
    return `Dictionary<${this.indices}, ${this.dictionary}>`;
  }
}
it = Symbol.toStringTag;
M[it] = ((r) => (r.id = null, r.indices = null, r.isOrdered = null, r.dictionary = null, r[Symbol.toStringTag] = "Dictionary"))(M.prototype);
function zt(r) {
  const t = r;
  switch (r.typeId) {
    case e.Decimal:
      return r.bitWidth / 32;
    case e.Timestamp:
      return 2;
    case e.Date:
      return 1 + t.unit;
    case e.Interval:
      return 1 + t.unit;
    case e.FixedSizeList:
      return t.listSize;
    case e.FixedSizeBinary:
      return t.byteWidth;
    default:
      return 1;
  }
}
export {
  I as Binary,
  D as Bool,
  i as DataType,
  ft as DateDay,
  Dt as DateMillisecond,
  g as Date_,
  B as Decimal,
  M as Dictionary,
  _ as Duration,
  z as FixedSizeBinary,
  N as FixedSizeList,
  d as Float,
  pt as Float16,
  gt as Float32,
  St as Float64,
  a as Int,
  at as Int16,
  ot as Int32,
  lt as Int64,
  st as Int8,
  S as Interval,
  Ft as IntervalDayTime,
  Ot as IntervalYearMonth,
  b as LargeBinary,
  f as LargeUtf8,
  $ as List,
  j as Map_,
  v as Null,
  F as Struct,
  u as Time,
  _t as TimeMicrosecond,
  Lt as TimeMillisecond,
  $t as TimeNanosecond,
  Bt as TimeSecond,
  L as Timestamp,
  ut as Uint16,
  ct as Uint32,
  dt as Uint64,
  yt as Uint8,
  O as Union,
  U as Utf8,
  zt as strideForType
};
//# sourceMappingURL=cori.data.api411.js.map
