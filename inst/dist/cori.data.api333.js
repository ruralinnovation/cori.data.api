import { dataFromArray as p, dataFromScan as A } from "./cori.data.api414.js";
import { profile as d } from "./cori.data.api415.js";
import l from "./cori.data.api416.js";
import F from "./cori.data.api404.js";
import { Vector as y } from "./cori.data.api417.js";
import { Float32 as I, Float64 as U, Int8 as T, Int16 as g, Int32 as w, Uint8 as B, Uint16 as V, Uint32 as v, Int64 as x, Uint64 as C } from "./cori.data.api418.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function E(r, n, i, f, t, e = !0) {
  t = l(t);
  const a = r.column(n), s = !(r.isFiltered() || r.isOrdered()), c = O(a);
  if (c && s && u(c.type, t))
    return c;
  const m = a.data;
  if (F(m)) {
    const o = S(m);
    if (s && o && u(o, t))
      return p(m, o);
    t = t || o, e = !1;
  }
  if (!t) {
    const o = d(f, a);
    e = o.nulls > 0, t = o.type();
  }
  return A(i, f, a, t, e);
}
function O(r) {
  return r instanceof y ? r : r.vector instanceof y ? r.vector : null;
}
function S(r) {
  const i = {
    Float32Array: I,
    Float64Array: U,
    Int8Array: T,
    Int16Array: g,
    Int32Array: w,
    Uint8Array: B,
    Uint16Array: V,
    Uint32Array: v,
    BigInt64Array: x,
    BigUint64Array: C
  }[r.constructor.name];
  return i ? new i() : null;
}
function u(r, n) {
  return !r || !n ? !0 : r.compareTo(n);
}
export {
  E as default
};
//# sourceMappingURL=cori.data.api333.js.map
