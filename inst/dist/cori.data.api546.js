import { array as u } from "./cori.data.api36.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function l(r, a) {
  const o = u(r.ArrayType, a / 8);
  return {
    set(f, t) {
      f && (o[t >> 3] |= 1 << t % 8);
    },
    data: () => ({ type: r, length: a, buffers: [null, o] })
  };
}
export {
  l as default
};
//# sourceMappingURL=cori.data.api546.js.map
