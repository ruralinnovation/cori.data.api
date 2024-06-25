import { Vector as k } from "./cori.data.api418.js";
import { Visitor as G } from "./cori.data.api555.js";
import { bigIntToNumber as u } from "./cori.data.api558.js";
import { encodeUtf8 as H } from "./cori.data.api563.js";
import { float64ToUint16 as P } from "./cori.data.api605.js";
import { Precision as v } from "./cori.data.api559.js";
import { DateUnit as W } from "./cori.data.api560.js";
import { TimeUnit as y } from "./cori.data.api561.js";
import { UnionMode as q } from "./cori.data.api556.js";
import { IntervalUnit as J } from "./cori.data.api562.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class e extends G {
}
function i(t) {
  return (s, o, n) => {
    if (s.setValid(o, n != null))
      return t(s, o, n);
  };
}
const K = (t, s, o) => {
  t[s] = Math.trunc(o / 864e5);
}, f = (t, s, o) => {
  t[s] = Math.trunc(o % 4294967296), t[s + 1] = Math.trunc(o / 4294967296);
}, Q = (t, s, o) => {
  t[s] = Math.trunc(o * 1e3 % 4294967296), t[s + 1] = Math.trunc(o * 1e3 / 4294967296);
}, X = (t, s, o) => {
  t[s] = Math.trunc(o * 1e6 % 4294967296), t[s + 1] = Math.trunc(o * 1e6 / 4294967296);
}, S = (t, s, o, n) => {
  if (o + 1 < s.length) {
    const r = u(s[o]), c = u(s[o + 1]);
    t.set(n.subarray(0, c - r), r);
  }
}, Z = ({ offset: t, values: s }, o, n) => {
  const r = t + o;
  n ? s[r >> 3] |= 1 << r % 8 : s[r >> 3] &= ~(1 << r % 8);
}, l = ({ values: t }, s, o) => {
  t[s] = o;
}, M = ({ values: t }, s, o) => {
  t[s] = o;
}, h = ({ values: t }, s, o) => {
  t[s] = P(o);
}, $ = (t, s, o) => {
  switch (t.type.precision) {
    case v.HALF:
      return h(t, s, o);
    case v.SINGLE:
    case v.DOUBLE:
      return M(t, s, o);
  }
}, I = ({ values: t }, s, o) => {
  K(t, s, o.valueOf());
}, T = ({ values: t }, s, o) => {
  f(t, s * 2, o.valueOf());
}, x = ({ stride: t, values: s }, o, n) => {
  s.set(n.subarray(0, t), t * o);
}, N = ({ values: t, valueOffsets: s }, o, n) => S(t, s, o, n), O = ({ values: t, valueOffsets: s }, o, n) => S(t, s, o, H(n)), tt = (t, s, o) => {
  t.type.unit === W.DAY ? I(t, s, o) : T(t, s, o);
}, E = ({ values: t }, s, o) => f(t, s * 2, o / 1e3), U = ({ values: t }, s, o) => f(t, s * 2, o), L = ({ values: t }, s, o) => Q(t, s * 2, o), C = ({ values: t }, s, o) => X(t, s * 2, o), ot = (t, s, o) => {
  switch (t.type.unit) {
    case y.SECOND:
      return E(t, s, o);
    case y.MILLISECOND:
      return U(t, s, o);
    case y.MICROSECOND:
      return L(t, s, o);
    case y.NANOSECOND:
      return C(t, s, o);
  }
}, F = ({ values: t }, s, o) => {
  t[s] = o;
}, g = ({ values: t }, s, o) => {
  t[s] = o;
}, V = ({ values: t }, s, o) => {
  t[s] = o;
}, A = ({ values: t }, s, o) => {
  t[s] = o;
}, st = (t, s, o) => {
  switch (t.type.unit) {
    case y.SECOND:
      return F(t, s, o);
    case y.MILLISECOND:
      return g(t, s, o);
    case y.MICROSECOND:
      return V(t, s, o);
    case y.NANOSECOND:
      return A(t, s, o);
  }
}, et = ({ values: t, stride: s }, o, n) => {
  t.set(n.subarray(0, s), s * o);
}, it = (t, s, o) => {
  const n = t.children[0], r = t.valueOffsets, c = a.getVisitFn(n);
  if (Array.isArray(o))
    for (let p = -1, m = r[s], D = r[s + 1]; m < D; )
      c(n, m++, o[++p]);
  else
    for (let p = -1, m = r[s], D = r[s + 1]; m < D; )
      c(n, m++, o.get(++p));
}, nt = (t, s, o) => {
  const n = t.children[0], { valueOffsets: r } = t, c = a.getVisitFn(n);
  let { [s]: p, [s + 1]: m } = r;
  const D = o instanceof Map ? o.entries() : Object.entries(o);
  for (const j of D)
    if (c(n, p, j), ++p >= m)
      break;
}, rt = (t, s) => (o, n, r, c) => n && o(n, t, s[c]), ct = (t, s) => (o, n, r, c) => n && o(n, t, s.get(c)), pt = (t, s) => (o, n, r, c) => n && o(n, t, s.get(r.name)), yt = (t, s) => (o, n, r, c) => n && o(n, t, s[r.name]), mt = (t, s, o) => {
  const n = t.type.children.map((c) => a.getVisitFn(c.type)), r = o instanceof Map ? pt(s, o) : o instanceof k ? ct(s, o) : Array.isArray(o) ? rt(s, o) : yt(s, o);
  t.type.children.forEach((c, p) => r(n[p], t.children[p], c, p));
}, lt = (t, s, o) => {
  t.type.mode === q.Dense ? d(t, s, o) : b(t, s, o);
}, d = (t, s, o) => {
  const n = t.type.typeIdToChildIndex[t.typeIds[s]], r = t.children[n];
  a.visit(r, t.valueOffsets[s], o);
}, b = (t, s, o) => {
  const n = t.type.typeIdToChildIndex[t.typeIds[s]], r = t.children[n];
  a.visit(r, s, o);
}, at = (t, s, o) => {
  var n;
  (n = t.dictionary) === null || n === void 0 || n.set(t.values[s], o);
}, Dt = (t, s, o) => {
  t.type.unit === J.DAY_TIME ? B(t, s, o) : _(t, s, o);
}, B = ({ values: t }, s, o) => {
  t.set(o.subarray(0, 2), 2 * s);
}, _ = ({ values: t }, s, o) => {
  t[s] = o[0] * 12 + o[1] % 12;
}, w = ({ values: t }, s, o) => {
  t[s] = o;
}, z = ({ values: t }, s, o) => {
  t[s] = o;
}, Y = ({ values: t }, s, o) => {
  t[s] = o;
}, R = ({ values: t }, s, o) => {
  t[s] = o;
}, vt = (t, s, o) => {
  switch (t.type.unit) {
    case y.SECOND:
      return w(t, s, o);
    case y.MILLISECOND:
      return z(t, s, o);
    case y.MICROSECOND:
      return Y(t, s, o);
    case y.NANOSECOND:
      return R(t, s, o);
  }
}, ft = (t, s, o) => {
  const { stride: n } = t, r = t.children[0], c = a.getVisitFn(r);
  if (Array.isArray(o))
    for (let p = -1, m = s * n; ++p < n; )
      c(r, m + p, o[p]);
  else
    for (let p = -1, m = s * n; ++p < n; )
      c(r, m + p, o.get(p));
};
e.prototype.visitBool = i(Z);
e.prototype.visitInt = i(l);
e.prototype.visitInt8 = i(l);
e.prototype.visitInt16 = i(l);
e.prototype.visitInt32 = i(l);
e.prototype.visitInt64 = i(l);
e.prototype.visitUint8 = i(l);
e.prototype.visitUint16 = i(l);
e.prototype.visitUint32 = i(l);
e.prototype.visitUint64 = i(l);
e.prototype.visitFloat = i($);
e.prototype.visitFloat16 = i(h);
e.prototype.visitFloat32 = i(M);
e.prototype.visitFloat64 = i(M);
e.prototype.visitUtf8 = i(O);
e.prototype.visitLargeUtf8 = i(O);
e.prototype.visitBinary = i(N);
e.prototype.visitLargeBinary = i(N);
e.prototype.visitFixedSizeBinary = i(x);
e.prototype.visitDate = i(tt);
e.prototype.visitDateDay = i(I);
e.prototype.visitDateMillisecond = i(T);
e.prototype.visitTimestamp = i(ot);
e.prototype.visitTimestampSecond = i(E);
e.prototype.visitTimestampMillisecond = i(U);
e.prototype.visitTimestampMicrosecond = i(L);
e.prototype.visitTimestampNanosecond = i(C);
e.prototype.visitTime = i(st);
e.prototype.visitTimeSecond = i(F);
e.prototype.visitTimeMillisecond = i(g);
e.prototype.visitTimeMicrosecond = i(V);
e.prototype.visitTimeNanosecond = i(A);
e.prototype.visitDecimal = i(et);
e.prototype.visitList = i(it);
e.prototype.visitStruct = i(mt);
e.prototype.visitUnion = i(lt);
e.prototype.visitDenseUnion = i(d);
e.prototype.visitSparseUnion = i(b);
e.prototype.visitDictionary = i(at);
e.prototype.visitInterval = i(Dt);
e.prototype.visitIntervalDayTime = i(B);
e.prototype.visitIntervalYearMonth = i(_);
e.prototype.visitDuration = i(vt);
e.prototype.visitDurationSecond = i(w);
e.prototype.visitDurationMillisecond = i(z);
e.prototype.visitDurationMicrosecond = i(Y);
e.prototype.visitDurationNanosecond = i(R);
e.prototype.visitFixedSizeList = i(ft);
e.prototype.visitMap = i(nt);
const a = new e();
export {
  e as SetVisitor,
  a as instance,
  $ as setAnyFloat,
  tt as setDate,
  I as setDateDay,
  T as setDateMillisecond,
  et as setDecimal,
  vt as setDuration,
  Y as setDurationMicrosecond,
  z as setDurationMillisecond,
  R as setDurationNanosecond,
  w as setDurationSecond,
  K as setEpochMsToDays,
  Q as setEpochMsToMicrosecondsLong,
  f as setEpochMsToMillisecondsLong,
  X as setEpochMsToNanosecondsLong,
  x as setFixedSizeBinary,
  M as setFloat,
  h as setFloat16,
  l as setInt,
  B as setIntervalDayTime,
  Dt as setIntervalValue,
  _ as setIntervalYearMonth,
  st as setTime,
  V as setTimeMicrosecond,
  g as setTimeMillisecond,
  A as setTimeNanosecond,
  F as setTimeSecond,
  ot as setTimestamp,
  L as setTimestampMicrosecond,
  U as setTimestampMillisecond,
  C as setTimestampNanosecond,
  E as setTimestampSecond,
  S as setVariableWidthBytes
};
//# sourceMappingURL=cori.data.api551.js.map
