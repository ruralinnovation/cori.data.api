import { array as d } from "./cori.data.api34.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function f(a, t) {
  const r = d(a.ArrayType, t << 1);
  return {
    set(i, s) {
      const o = s << 1;
      r[o] = i % 4294967296 | 0, r[o + 1] = i / 4294967296 | 0;
    },
    data: () => ({ type: a, length: t, buffers: [null, r] })
  };
}
export {
  f as default
};
//# sourceMappingURL=cori.data.api543.js.map
