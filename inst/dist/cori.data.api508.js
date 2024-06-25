import "./cori.data.api567.js";
import "./cori.data.api568.js";
import { Builder as A } from "./cori.data.api569.js";
import { ByteBuffer as K } from "./cori.data.api570.js";
import { Schema as m } from "./cori.data.api574.js";
import { Int as k } from "./cori.data.api575.js";
import { RecordBatch as p } from "./cori.data.api576.js";
import { DictionaryBatch as D } from "./cori.data.api577.js";
import { Buffer as W } from "./cori.data.api578.js";
import { Field as c } from "./cori.data.api579.js";
import { FieldNode as j } from "./cori.data.api580.js";
import { Type as d } from "./cori.data.api581.js";
import { KeyValue as w } from "./cori.data.api582.js";
import { Endianness as M } from "./cori.data.api583.js";
import { FloatingPoint as P } from "./cori.data.api584.js";
import { Decimal as q } from "./cori.data.api585.js";
import { Date as G } from "./cori.data.api586.js";
import { Time as Q } from "./cori.data.api587.js";
import { Timestamp as X } from "./cori.data.api588.js";
import { Interval as Y } from "./cori.data.api589.js";
import { Duration as Z } from "./cori.data.api590.js";
import { Union as b } from "./cori.data.api591.js";
import { FixedSizeBinary as ee } from "./cori.data.api592.js";
import { FixedSizeList as te } from "./cori.data.api593.js";
import { Map as ne } from "./cori.data.api594.js";
import { Message as y } from "./cori.data.api595.js";
import { Schema as g, Field as f } from "./cori.data.api497.js";
import { toUint8Array as re } from "./cori.data.api500.js";
import { bigIntToNumber as B } from "./cori.data.api560.js";
import { instance as _ } from "./cori.data.api596.js";
import { fieldFromJSON as oe, schemaFromJSON as ie, recordBatchFromJSON as ae, dictionaryBatchFromJSON as de } from "./cori.data.api597.js";
import { Int32 as $, Dictionary as v, Int as x, Struct as se, List as ce, Bool as ue, LargeUtf8 as fe, Utf8 as le, LargeBinary as me, Binary as he, Null as R, Map_ as ye, FixedSizeList as pe, FixedSizeBinary as we, Union as ge, Duration as Be, Interval as Se, Timestamp as De, Time as Fe, Date_ as Ve, Decimal as Te, Float as Ne, DataType as Oe } from "./cori.data.api413.js";
import { MetadataVersion as h } from "./cori.data.api516.js";
import { MessageHeader as s } from "./cori.data.api517.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var Ie = A, _e = K;
class F {
  /** @nocollapse */
  static fromJSON(t, r) {
    const n = new F(0, h.V5, r);
    return n._createHeader = Le(t, r), n;
  }
  /** @nocollapse */
  static decode(t) {
    t = new _e(re(t));
    const r = y.getRootAsMessage(t), n = r.bodyLength(), i = r.version(), o = r.headerType(), a = new F(n, i, o);
    return a._createHeader = Me(r, o), a;
  }
  /** @nocollapse */
  static encode(t) {
    const r = new Ie();
    let n = -1;
    return t.isSchema() ? n = g.encode(r, t.header()) : t.isRecordBatch() ? n = l.encode(r, t.header()) : t.isDictionaryBatch() && (n = S.encode(r, t.header())), y.startMessage(r), y.addVersion(r, h.V5), y.addHeader(r, n), y.addHeaderType(r, t.headerType), y.addBodyLength(r, BigInt(t.bodyLength)), y.finishMessageBuffer(r, y.endMessage(r)), r.asUint8Array();
  }
  /** @nocollapse */
  static from(t, r = 0) {
    if (t instanceof g)
      return new F(0, h.V5, s.Schema, t);
    if (t instanceof l)
      return new F(r, h.V5, s.RecordBatch, t);
    if (t instanceof S)
      return new F(r, h.V5, s.DictionaryBatch, t);
    throw new Error(`Unrecognized Message header: ${t}`);
  }
  get type() {
    return this.headerType;
  }
  get version() {
    return this._version;
  }
  get headerType() {
    return this._headerType;
  }
  get bodyLength() {
    return this._bodyLength;
  }
  header() {
    return this._createHeader();
  }
  isSchema() {
    return this.headerType === s.Schema;
  }
  isRecordBatch() {
    return this.headerType === s.RecordBatch;
  }
  isDictionaryBatch() {
    return this.headerType === s.DictionaryBatch;
  }
  constructor(t, r, n, i) {
    this._version = r, this._headerType = n, this.body = new Uint8Array(0), i && (this._createHeader = () => i), this._bodyLength = B(t);
  }
}
class l {
  get nodes() {
    return this._nodes;
  }
  get length() {
    return this._length;
  }
  get buffers() {
    return this._buffers;
  }
  constructor(t, r, n) {
    this._nodes = r, this._buffers = n, this._length = B(t);
  }
}
class S {
  get id() {
    return this._id;
  }
  get data() {
    return this._data;
  }
  get isDelta() {
    return this._isDelta;
  }
  get length() {
    return this.data.length;
  }
  get nodes() {
    return this.data.nodes;
  }
  get buffers() {
    return this.data.buffers;
  }
  constructor(t, r, n = !1) {
    this._data = t, this._isDelta = n, this._id = B(r);
  }
}
class V {
  constructor(t, r) {
    this.offset = B(t), this.length = B(r);
  }
}
class T {
  constructor(t, r) {
    this.length = B(t), this.nullCount = B(r);
  }
}
function Le(e, t) {
  return () => {
    switch (t) {
      case s.Schema:
        return g.fromJSON(e);
      case s.RecordBatch:
        return l.fromJSON(e);
      case s.DictionaryBatch:
        return S.fromJSON(e);
    }
    throw new Error(`Unrecognized Message type: { name: ${s[t]}, type: ${t} }`);
  };
}
function Me(e, t) {
  return () => {
    switch (t) {
      case s.Schema:
        return g.decode(e.header(new m()), /* @__PURE__ */ new Map(), e.version());
      case s.RecordBatch:
        return l.decode(e.header(new p()), e.version());
      case s.DictionaryBatch:
        return S.decode(e.header(new D()), e.version());
    }
    throw new Error(`Unrecognized Message type: { name: ${s[t]}, type: ${t} }`);
  };
}
f.encode = Ae;
f.decode = Ee;
f.fromJSON = oe;
g.encode = He;
g.decode = $e;
g.fromJSON = ie;
l.encode = Ke;
l.decode = ve;
l.fromJSON = ae;
S.encode = ke;
S.decode = Re;
S.fromJSON = de;
T.encode = We;
T.decode = Ue;
V.encode = je;
V.decode = ze;
function $e(e, t = /* @__PURE__ */ new Map(), r = h.V5) {
  const n = Ce(e, t);
  return new g(n, N(e), t, r);
}
function ve(e, t = h.V5) {
  if (e.compression() !== null)
    throw new Error("Record batch compression not implemented");
  return new l(e.length(), Je(e), xe(e, t));
}
function Re(e, t = h.V5) {
  return new S(l.decode(e.data(), t), e.id(), e.isDelta());
}
function ze(e) {
  return new V(e.offset(), e.length());
}
function Ue(e) {
  return new T(e.length(), e.nullCount());
}
function Je(e) {
  const t = [];
  for (let r, n = -1, i = -1, o = e.nodesLength(); ++n < o; )
    (r = e.nodes(n)) && (t[++i] = T.decode(r));
  return t;
}
function xe(e, t) {
  const r = [];
  for (let n, i = -1, o = -1, a = e.buffersLength(); ++i < a; )
    (n = e.buffers(i)) && (t < h.V4 && (n.bb_pos += 8 * (i + 1)), r[++o] = V.decode(n));
  return r;
}
function Ce(e, t) {
  const r = [];
  for (let n, i = -1, o = -1, a = e.fieldsLength(); ++i < a; )
    (n = e.fields(i)) && (r[++o] = f.decode(n, t));
  return r;
}
function z(e, t) {
  const r = [];
  for (let n, i = -1, o = -1, a = e.childrenLength(); ++i < a; )
    (n = e.children(i)) && (r[++o] = f.decode(n, t));
  return r;
}
function Ee(e, t) {
  let r, n, i, o, a, u;
  return !t || !(u = e.dictionary()) ? (i = J(e, z(e, t)), n = new f(e.name(), i, e.nullable(), N(e))) : t.has(r = B(u.id())) ? (o = (o = u.indexType()) ? U(o) : new $(), a = new v(t.get(r), o, r, u.isOrdered()), n = new f(e.name(), a, e.nullable(), N(e))) : (o = (o = u.indexType()) ? U(o) : new $(), t.set(r, i = J(e, z(e, t))), a = new v(i, o, r, u.isOrdered()), n = new f(e.name(), a, e.nullable(), N(e))), n || null;
}
function N(e) {
  const t = /* @__PURE__ */ new Map();
  if (e)
    for (let r, n, i = -1, o = Math.trunc(e.customMetadataLength()); ++i < o; )
      (r = e.customMetadata(i)) && (n = r.key()) != null && t.set(n, r.value());
  return t;
}
function U(e) {
  return new x(e.isSigned(), e.bitWidth());
}
function J(e, t) {
  const r = e.typeType();
  switch (r) {
    case d.NONE:
      return new R();
    case d.Null:
      return new R();
    case d.Binary:
      return new he();
    case d.LargeBinary:
      return new me();
    case d.Utf8:
      return new le();
    case d.LargeUtf8:
      return new fe();
    case d.Bool:
      return new ue();
    case d.List:
      return new ce((t || [])[0]);
    case d.Struct_:
      return new se(t || []);
  }
  switch (r) {
    case d.Int: {
      const n = e.type(new k());
      return new x(n.isSigned(), n.bitWidth());
    }
    case d.FloatingPoint: {
      const n = e.type(new P());
      return new Ne(n.precision());
    }
    case d.Decimal: {
      const n = e.type(new q());
      return new Te(n.scale(), n.precision(), n.bitWidth());
    }
    case d.Date: {
      const n = e.type(new G());
      return new Ve(n.unit());
    }
    case d.Time: {
      const n = e.type(new Q());
      return new Fe(n.unit(), n.bitWidth());
    }
    case d.Timestamp: {
      const n = e.type(new X());
      return new De(n.unit(), n.timezone());
    }
    case d.Interval: {
      const n = e.type(new Y());
      return new Se(n.unit());
    }
    case d.Duration: {
      const n = e.type(new Z());
      return new Be(n.unit());
    }
    case d.Union: {
      const n = e.type(new b());
      return new ge(n.mode(), n.typeIdsArray() || [], t || []);
    }
    case d.FixedSizeBinary: {
      const n = e.type(new ee());
      return new we(n.byteWidth());
    }
    case d.FixedSizeList: {
      const n = e.type(new te());
      return new pe(n.listSize(), (t || [])[0]);
    }
    case d.Map: {
      const n = e.type(new ne());
      return new ye((t || [])[0], n.keysSorted());
    }
  }
  throw new Error(`Unrecognized type: "${d[r]}" (${r})`);
}
function He(e, t) {
  const r = t.fields.map((o) => f.encode(e, o));
  m.startFieldsVector(e, r.length);
  const n = m.createFieldsVector(e, r), i = t.metadata && t.metadata.size > 0 ? m.createCustomMetadataVector(e, [...t.metadata].map(([o, a]) => {
    const u = e.createString(`${o}`), O = e.createString(`${a}`);
    return w.startKeyValue(e), w.addKey(e, u), w.addValue(e, O), w.endKeyValue(e);
  })) : -1;
  return m.startSchema(e), m.addFields(e, n), m.addEndianness(e, Pe ? M.Little : M.Big), i !== -1 && m.addCustomMetadata(e, i), m.endSchema(e);
}
function Ae(e, t) {
  let r = -1, n = -1, i = -1;
  const o = t.type;
  let a = t.typeId;
  Oe.isDictionary(o) ? (a = o.dictionary.typeId, i = _.visit(o, e), n = _.visit(o.dictionary, e)) : n = _.visit(o, e);
  const u = (o.children || []).map((I) => f.encode(e, I)), O = c.createChildrenVector(e, u), L = t.metadata && t.metadata.size > 0 ? c.createCustomMetadataVector(e, [...t.metadata].map(([I, C]) => {
    const E = e.createString(`${I}`), H = e.createString(`${C}`);
    return w.startKeyValue(e), w.addKey(e, E), w.addValue(e, H), w.endKeyValue(e);
  })) : -1;
  return t.name && (r = e.createString(t.name)), c.startField(e), c.addType(e, n), c.addTypeType(e, a), c.addChildren(e, O), c.addNullable(e, !!t.nullable), r !== -1 && c.addName(e, r), i !== -1 && c.addDictionary(e, i), L !== -1 && c.addCustomMetadata(e, L), c.endField(e);
}
function Ke(e, t) {
  const r = t.nodes || [], n = t.buffers || [];
  p.startNodesVector(e, r.length);
  for (const a of r.slice().reverse())
    T.encode(e, a);
  const i = e.endVector();
  p.startBuffersVector(e, n.length);
  for (const a of n.slice().reverse())
    V.encode(e, a);
  const o = e.endVector();
  return p.startRecordBatch(e), p.addLength(e, BigInt(t.length)), p.addNodes(e, i), p.addBuffers(e, o), p.endRecordBatch(e);
}
function ke(e, t) {
  const r = l.encode(e, t.data);
  return D.startDictionaryBatch(e), D.addId(e, BigInt(t.id)), D.addIsDelta(e, t.isDelta), D.addData(e, r), D.endDictionaryBatch(e);
}
function We(e, t) {
  return j.createFieldNode(e, BigInt(t.length), BigInt(t.nullCount));
}
function je(e, t) {
  return W.createBuffer(e, BigInt(t.offset), BigInt(t.length));
}
const Pe = (() => {
  const e = new ArrayBuffer(2);
  return new DataView(e).setInt16(
    0,
    256,
    !0
    /* littleEndian */
  ), new Int16Array(e)[0] === 256;
})();
export {
  V as BufferRegion,
  S as DictionaryBatch,
  T as FieldNode,
  F as Message,
  l as RecordBatch
};
//# sourceMappingURL=cori.data.api508.js.map
