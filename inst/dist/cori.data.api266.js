import s from "./cori.data.api260.js";
import m from "./cori.data.api300.js";
import g from "./cori.data.api383.js";
import h from "./cori.data.api264.js";
import u from "./cori.data.api289.js";
import b from "./cori.data.api384.js";
import d from "./cori.data.api307.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function I(t, o) {
  const r = (c) => s(`Illegal argument type: ${c || typeof t}`);
  return t instanceof Map ? l(t.entries(), o) : g(t) ? r("Date") : b(t) ? r("RegExp") : d(t) ? r() : m(t) ? k(t, o) : h(t[Symbol.iterator]) ? j(t, o) : u(t) ? l(Object.entries(t), o) : r();
}
function l(t, o = ["key", "value"]) {
  const r = [], c = [];
  for (const [f, e] of t)
    r.push(f), c.push(e);
  const i = {};
  return o[0] && (i[o[0]] = r), o[1] && (i[o[1]] = c), i;
}
function k(t, o) {
  const r = t.length, c = {}, i = (f) => c[f] = Array(r);
  if (r) {
    o = o || Object.keys(t[0]);
    const f = o.map(i), e = f.length;
    for (let n = 0; n < r; ++n) {
      const y = t[n];
      for (let p = 0; p < e; ++p)
        f[p][n] = y[o[p]];
    }
  } else
    o && o.forEach(i);
  return c;
}
function j(t, o) {
  const r = {}, c = (e) => r[e] = [];
  let i, f;
  for (const e of t) {
    i || (o = o || Object.keys(e), i = o.map(c), f = i.length);
    for (let n = 0; n < f; ++n)
      i[n].push(e[o[n]]);
  }
  return !i && o && o.forEach(c), r;
}
export {
  I as default
};
//# sourceMappingURL=cori.data.api266.js.map
