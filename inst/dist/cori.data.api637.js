import { array as s, writeUtf8 as i, ceil64Bytes as c } from "./cori.data.api39.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function l(o, n, u) {
  const f = s(Int32Array, n + 1), t = s(Uint8Array, 3 * u);
  let r = 0;
  return {
    set(e, a) {
      r += i(t, r, e), f[a + 1] = r;
    },
    data: () => {
      const e = c(r), a = t.length > e ? t.subarray(0, e) : t;
      return { type: o, length: n, buffers: [f, a] };
    }
  };
}
export {
  l as default
};
//# sourceMappingURL=cori.data.api637.js.map
