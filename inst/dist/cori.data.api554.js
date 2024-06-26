import { BN as G } from "./cori.data.api624.js";
import { Vector as u } from "./cori.data.api410.js";
import { Visitor as H } from "./cori.data.api559.js";
import { MapRow as P } from "./cori.data.api505.js";
import { StructRow as W } from "./cori.data.api601.js";
import { bigIntToNumber as v } from "./cori.data.api562.js";
import { decodeUtf8 as j } from "./cori.data.api567.js";
import { uint16ToFloat64 as a } from "./cori.data.api609.js";
import { Precision as k } from "./cori.data.api563.js";
import { DateUnit as q } from "./cori.data.api564.js";
import { TimeUnit as r } from "./cori.data.api565.js";
import { UnionMode as J } from "./cori.data.api560.js";
import { IntervalUnit as K } from "./cori.data.api566.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class e extends H {
}
function i(t) {
  return (o, n) => o.getValid(n) ? t(o, n) : null;
}
const Q = (t, o) => 864e5 * t[o], m = (t, o) => 4294967296 * t[o + 1] + (t[o] >>> 0), X = (t, o) => 4294967296 * (t[o + 1] / 1e3) + (t[o] >>> 0) / 1e3, Z = (t, o) => 4294967296 * (t[o + 1] / 1e6) + (t[o] >>> 0) / 1e6, g = (t) => new Date(t), $ = (t, o) => g(Q(t, o)), x = (t, o) => g(m(t, o)), tt = (t, o) => null, D = (t, o, n) => {
  if (n + 1 >= o.length)
    return null;
  const s = v(o[n]), c = v(o[n + 1]);
  return t.subarray(s, c);
}, ot = ({ offset: t, values: o }, n) => {
  const s = t + n;
  return (o[s >> 3] & 1 << s % 8) !== 0;
}, M = ({ values: t }, o) => $(t, o), T = ({ values: t }, o) => x(t, o * 2), p = ({ stride: t, values: o }, n) => o[t * n], et = ({ stride: t, values: o }, n) => a(o[t * n]), I = ({ values: t }, o) => t[o], it = ({ stride: t, values: o }, n) => o.subarray(t * n, t * (n + 1)), h = ({ values: t, valueOffsets: o }, n) => D(t, o, n), N = ({ values: t, valueOffsets: o }, n) => {
  const s = D(t, o, n);
  return s !== null ? j(s) : null;
}, nt = ({ values: t }, o) => t[o], st = ({ type: t, values: o }, n) => t.precision !== k.HALF ? o[n] : a(o[n]), rt = (t, o) => t.type.unit === q.DAY ? M(t, o) : T(t, o), S = ({ values: t }, o) => 1e3 * m(t, o * 2), d = ({ values: t }, o) => m(t, o * 2), f = ({ values: t }, o) => X(t, o * 2), O = ({ values: t }, o) => Z(t, o * 2), ct = (t, o) => {
  switch (t.type.unit) {
    case r.SECOND:
      return S(t, o);
    case r.MILLISECOND:
      return d(t, o);
    case r.MICROSECOND:
      return f(t, o);
    case r.NANOSECOND:
      return O(t, o);
  }
}, U = ({ values: t }, o) => t[o], C = ({ values: t }, o) => t[o], L = ({ values: t }, o) => t[o], w = ({ values: t }, o) => t[o], pt = (t, o) => {
  switch (t.type.unit) {
    case r.SECOND:
      return U(t, o);
    case r.MILLISECOND:
      return C(t, o);
    case r.MICROSECOND:
      return L(t, o);
    case r.NANOSECOND:
      return w(t, o);
  }
}, yt = ({ values: t, stride: o }, n) => G.decimal(t.subarray(o * n, o * (n + 1))), lt = (t, o) => {
  const { valueOffsets: n, stride: s, children: c } = t, { [o * s]: y, [o * s + 1]: l } = n, _ = c[0].slice(y, l - y);
  return new u([_]);
}, mt = (t, o) => {
  const { valueOffsets: n, children: s } = t, { [o]: c, [o + 1]: y } = n, l = s[0];
  return new P(l.slice(c, y - c));
}, vt = (t, o) => new W(t, o), ut = (t, o) => t.type.mode === J.Dense ? E(t, o) : b(t, o), E = (t, o) => {
  const n = t.type.typeIdToChildIndex[t.typeIds[o]], s = t.children[n];
  return Y.visit(s, t.valueOffsets[o]);
}, b = (t, o) => {
  const n = t.type.typeIdToChildIndex[t.typeIds[o]], s = t.children[n];
  return Y.visit(s, o);
}, at = (t, o) => {
  var n;
  return (n = t.dictionary) === null || n === void 0 ? void 0 : n.get(t.values[o]);
}, gt = (t, o) => t.type.unit === K.DAY_TIME ? F(t, o) : B(t, o), F = ({ values: t }, o) => t.subarray(2 * o, 2 * (o + 1)), B = ({ values: t }, o) => {
  const n = t[o], s = new Int32Array(2);
  return s[0] = Math.trunc(n / 12), s[1] = Math.trunc(n % 12), s;
}, A = ({ values: t }, o) => t[o], R = ({ values: t }, o) => t[o], V = ({ values: t }, o) => t[o], z = ({ values: t }, o) => t[o], Dt = (t, o) => {
  switch (t.type.unit) {
    case r.SECOND:
      return A(t, o);
    case r.MILLISECOND:
      return R(t, o);
    case r.MICROSECOND:
      return V(t, o);
    case r.NANOSECOND:
      return z(t, o);
  }
}, Mt = (t, o) => {
  const { stride: n, children: s } = t, y = s[0].slice(o * n, n);
  return new u([y]);
};
e.prototype.visitNull = i(tt);
e.prototype.visitBool = i(ot);
e.prototype.visitInt = i(nt);
e.prototype.visitInt8 = i(p);
e.prototype.visitInt16 = i(p);
e.prototype.visitInt32 = i(p);
e.prototype.visitInt64 = i(I);
e.prototype.visitUint8 = i(p);
e.prototype.visitUint16 = i(p);
e.prototype.visitUint32 = i(p);
e.prototype.visitUint64 = i(I);
e.prototype.visitFloat = i(st);
e.prototype.visitFloat16 = i(et);
e.prototype.visitFloat32 = i(p);
e.prototype.visitFloat64 = i(p);
e.prototype.visitUtf8 = i(N);
e.prototype.visitLargeUtf8 = i(N);
e.prototype.visitBinary = i(h);
e.prototype.visitLargeBinary = i(h);
e.prototype.visitFixedSizeBinary = i(it);
e.prototype.visitDate = i(rt);
e.prototype.visitDateDay = i(M);
e.prototype.visitDateMillisecond = i(T);
e.prototype.visitTimestamp = i(ct);
e.prototype.visitTimestampSecond = i(S);
e.prototype.visitTimestampMillisecond = i(d);
e.prototype.visitTimestampMicrosecond = i(f);
e.prototype.visitTimestampNanosecond = i(O);
e.prototype.visitTime = i(pt);
e.prototype.visitTimeSecond = i(U);
e.prototype.visitTimeMillisecond = i(C);
e.prototype.visitTimeMicrosecond = i(L);
e.prototype.visitTimeNanosecond = i(w);
e.prototype.visitDecimal = i(yt);
e.prototype.visitList = i(lt);
e.prototype.visitStruct = i(vt);
e.prototype.visitUnion = i(ut);
e.prototype.visitDenseUnion = i(E);
e.prototype.visitSparseUnion = i(b);
e.prototype.visitDictionary = i(at);
e.prototype.visitInterval = i(gt);
e.prototype.visitIntervalDayTime = i(F);
e.prototype.visitIntervalYearMonth = i(B);
e.prototype.visitDuration = i(Dt);
e.prototype.visitDurationSecond = i(A);
e.prototype.visitDurationMillisecond = i(R);
e.prototype.visitDurationMicrosecond = i(V);
e.prototype.visitDurationNanosecond = i(z);
e.prototype.visitFixedSizeList = i(Mt);
e.prototype.visitMap = i(mt);
const Y = new e();
export {
  e as GetVisitor,
  Y as instance
};
//# sourceMappingURL=cori.data.api554.js.map
