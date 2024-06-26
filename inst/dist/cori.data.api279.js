import h from "./cori.data.api296.js";
import y from "./cori.data.api297.js";
import { scanArray as b, scanTable as w } from "./cori.data.api298.js";
import { table as F } from "./cori.data.api299.js";
import l from "./cori.data.api260.js";
import f from "./cori.data.api300.js";
import u from "./cori.data.api264.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function E(n, m = {}) {
  const { types: o = {} } = m, { dataFrom: r, names: t, nrows: s, scan: a } = T(n, m), i = {};
  t.forEach((e) => {
    const c = r(n, e, s, a, o[e]);
    c.length !== s && l("Column length mismatch"), i[e] = c;
  });
  const p = F();
  return new p(i);
}
function T(n, m) {
  const { columns: o, limit: r = 1 / 0, offset: t = 0 } = m, s = u(o) ? o(n) : f(o) ? o : null;
  if (f(n))
    return {
      dataFrom: h,
      names: s || Object.keys(n[0]),
      nrows: Math.min(r, n.length - t),
      scan: b(n, r, t)
    };
  if (g(n))
    return {
      dataFrom: y,
      names: s || n.columnNames(),
      nrows: Math.min(r, n.numRows() - t),
      scan: w(n, r, t)
    };
  l("Unsupported input data type");
}
function g(n) {
  return n && u(n.reify);
}
export {
  E as default
};
//# sourceMappingURL=cori.data.api279.js.map
