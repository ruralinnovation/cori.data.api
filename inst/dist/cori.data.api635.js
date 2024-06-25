import p from "./cori.data.api677.js";
import i from "./cori.data.api678.js";
import { random as e } from "./cori.data.api368.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function U(r, l, o, c) {
  return (l ? c ? f : u : c ? h : g)(r.length, r, o, c);
}
function u(r, l, o) {
  const c = o.length;
  for (let t = 0; t < r; ++t)
    l[t] = o[c * e() | 0];
  return l;
}
function f(r, l, o, c) {
  const t = o.length, a = new Float64Array(t);
  let m = 0;
  for (let s = 0; s < t; ++s)
    a[s] = m += c(o[s]);
  const n = i(p).right;
  for (let s = 0; s < r; ++s)
    l[s] = o[n(a, m * e())];
  return l;
}
function g(r, l, o) {
  const c = o.length;
  if (r >= c)
    return o;
  for (let t = 0; t < r; ++t)
    l[t] = o[t];
  for (let t = r; t < c; ++t) {
    const a = t * e();
    a < r && (l[a | 0] = o[t]);
  }
  return l;
}
function h(r, l, o, c) {
  const t = o.length;
  if (r >= t)
    return o;
  const a = new Float32Array(t), m = new Uint32Array(t);
  for (let n = 0; n < t; ++n)
    m[n] = n, a[n] = -Math.log(e()) / c(o[n]);
  m.sort((n, s) => a[n] - a[s]);
  for (let n = 0; n < r; ++n)
    l[n] = o[m[n]];
  return l;
}
export {
  U as default
};
//# sourceMappingURL=cori.data.api635.js.map
