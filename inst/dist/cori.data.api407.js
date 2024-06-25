import u from "./cori.data.api495.js";
import { ceil64Bytes as i, arrowData as s } from "./cori.data.api32.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function m(t, r) {
  const e = t.length, o = i(e, t.BYTES_PER_ELEMENT);
  let n = t;
  return e !== o && (n = new t.constructor(o), n.set(t)), s({ type: r, length: e, buffers: [null, n] });
}
function a(t, r, e, o, n = !0) {
  const c = u(o, t, n);
  return r(e, c.set), s(c.data());
}
export {
  m as dataFromArray,
  a as dataFromScan
};
//# sourceMappingURL=cori.data.api407.js.map
