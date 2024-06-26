import i from "./cori.data.api275.js";
import a from "./cori.data.api100.js";
import r from "./cori.data.api276.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const d = {
  "%": (o, t) => (o * 100).toFixed(t),
  b: (o) => Math.round(o).toString(2),
  c: (o) => o + "",
  d: i,
  e: (o, t) => o.toExponential(t),
  f: (o, t) => o.toFixed(t),
  g: (o, t) => o.toPrecision(t),
  o: (o) => Math.round(o).toString(8),
  p: (o, t) => r(o * 100, t),
  r,
  s: a,
  X: (o) => Math.round(o).toString(16).toUpperCase(),
  x: (o) => Math.round(o).toString(16)
};
export {
  d as default
};
//# sourceMappingURL=cori.data.api99.js.map
