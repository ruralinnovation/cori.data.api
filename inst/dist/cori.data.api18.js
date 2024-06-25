import { Data as c } from "./cori.data.api264.js";
import { Vector as u } from "./cori.data.api200.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function i(n, t = 1) {
  return (n * t + 63 & -64 || 64) / t;
}
function E(n, t, e = n.BYTES_PER_ELEMENT) {
  return new n(i(t, e));
}
function f(n) {
  return n instanceof c ? n : new c(n.type, 0, n.length, n.nulls, n.buffers, null, n.dict);
}
function m(n) {
  return new u([f(n)]);
}
const r = new TextEncoder();
function a(n, t, e) {
  const o = r.encode(e);
  return n.set(o, t), o.length;
}
function s(n, t, e) {
  return r.encodeInto(e, n.subarray(t)).written;
}
const y = r.encodeInto ? s : a;
export {
  E as array,
  f as arrowData,
  m as arrowVector,
  i as ceil64Bytes,
  a as encode,
  s as encodeInto,
  r as encoder,
  y as writeUtf8
};
//# sourceMappingURL=cori.data.api18.js.map
