import { array as f } from "./cori.data.api34.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function d(r, a) {
  const t = f(r.ArrayType, a);
  return {
    set(u, e) {
      t[e] = u;
    },
    data: () => ({ type: r, length: a, buffers: [null, t] })
  };
}
export {
  d as default
};
//# sourceMappingURL=cori.data.api542.js.map
