import { Schema as T, Field as c } from "./cori.data.api497.js";
import { Int32 as p, Dictionary as w, Int as g, Struct as d, List as I, Bool as D, LargeUtf8 as J, Utf8 as B, LargeBinary as U, Binary as L, Null as y, Map_ as x, FixedSizeList as z, FixedSizeBinary as A, Union as E, Duration as M, Interval as W, Timestamp as Y, Time as v, Date_ as C, Decimal as P, Float as V } from "./cori.data.api413.js";
import { RecordBatch as k, DictionaryBatch as R, FieldNode as j, BufferRegion as u } from "./cori.data.api508.js";
import { UnionMode as $ } from "./cori.data.api558.js";
import { TimeUnit as l } from "./cori.data.api563.js";
import { IntervalUnit as q } from "./cori.data.api564.js";
import { DateUnit as G } from "./cori.data.api562.js";
import { Precision as H } from "./cori.data.api561.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function oe(e, n = /* @__PURE__ */ new Map()) {
  return new T(Q(e, n), m(e.metadata), n);
}
function K(e) {
  return new k(e.count, N(e.columns), O(e.columns));
}
function ae(e) {
  return new R(K(e.data), e.id, e.isDelta);
}
function Q(e, n) {
  return (e.fields || []).filter(Boolean).map((r) => c.fromJSON(r, n));
}
function h(e, n) {
  return (e.children || []).filter(Boolean).map((r) => c.fromJSON(r, n));
}
function N(e) {
  return (e || []).reduce((n, r) => [
    ...n,
    new j(r.count, X(r.VALIDITY)),
    ...N(r.children)
  ], []);
}
function O(e, n = []) {
  for (let r = -1, t = (e || []).length; ++r < t; ) {
    const o = e[r];
    o.VALIDITY && n.push(new u(n.length, o.VALIDITY.length)), o.TYPE_ID && n.push(new u(n.length, o.TYPE_ID.length)), o.OFFSET && n.push(new u(n.length, o.OFFSET.length)), o.DATA && n.push(new u(n.length, o.DATA.length)), n = O(o.children, n);
  }
  return n;
}
function X(e) {
  return (e || []).reduce((n, r) => n + +(r === 0), 0);
}
function ie(e, n) {
  let r, t, o, a, i, s;
  return !n || !(a = e.dictionary) ? (i = F(e, h(e, n)), o = new c(e.name, i, e.nullable, m(e.metadata))) : n.has(r = a.id) ? (t = (t = a.indexType) ? S(t) : new p(), s = new w(n.get(r), t, r, a.isOrdered), o = new c(e.name, s, e.nullable, m(e.metadata))) : (t = (t = a.indexType) ? S(t) : new p(), n.set(r, i = F(e, h(e, n))), s = new w(i, t, r, a.isOrdered), o = new c(e.name, s, e.nullable, m(e.metadata))), o || null;
}
function m(e = []) {
  return new Map(e.map(({ key: n, value: r }) => [n, r]));
}
function S(e) {
  return new g(e.isSigned, e.bitWidth);
}
function F(e, n) {
  const r = e.type.name;
  switch (r) {
    case "NONE":
      return new y();
    case "null":
      return new y();
    case "binary":
      return new L();
    case "largebinary":
      return new U();
    case "utf8":
      return new B();
    case "largeutf8":
      return new J();
    case "bool":
      return new D();
    case "list":
      return new I((n || [])[0]);
    case "struct":
      return new d(n || []);
    case "struct_":
      return new d(n || []);
  }
  switch (r) {
    case "int": {
      const t = e.type;
      return new g(t.isSigned, t.bitWidth);
    }
    case "floatingpoint": {
      const t = e.type;
      return new V(H[t.precision]);
    }
    case "decimal": {
      const t = e.type;
      return new P(t.scale, t.precision, t.bitWidth);
    }
    case "date": {
      const t = e.type;
      return new C(G[t.unit]);
    }
    case "time": {
      const t = e.type;
      return new v(l[t.unit], t.bitWidth);
    }
    case "timestamp": {
      const t = e.type;
      return new Y(l[t.unit], t.timezone);
    }
    case "interval": {
      const t = e.type;
      return new W(q[t.unit]);
    }
    case "duration": {
      const t = e.type;
      return new M(l[t.unit]);
    }
    case "union": {
      const t = e.type, [o, ...a] = (t.mode + "").toLowerCase(), i = o.toUpperCase() + a.join("");
      return new E($[i], t.typeIds || [], n || []);
    }
    case "fixedsizebinary": {
      const t = e.type;
      return new A(t.byteWidth);
    }
    case "fixedsizelist": {
      const t = e.type;
      return new z(t.listSize, (n || [])[0]);
    }
    case "map": {
      const t = e.type;
      return new x((n || [])[0], t.keysSorted);
    }
  }
  throw new Error(`Unrecognized type: "${r}"`);
}
export {
  ae as dictionaryBatchFromJSON,
  ie as fieldFromJSON,
  K as recordBatchFromJSON,
  oe as schemaFromJSON
};
//# sourceMappingURL=cori.data.api597.js.map
