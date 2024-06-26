import { array as d } from "./cori.data.api35.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function o(a, r) {
  const t = d(a.ArrayType, r);
  return {
    set(e, u) {
      t[u] = e / 864e5 | 0;
    },
    data: () => ({ type: a, length: r, buffers: [null, t] })
  };
}
export {
  o as default
};
//# sourceMappingURL=cori.data.api558.js.map
