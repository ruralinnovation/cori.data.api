import f from "./cori.data.api531.js";
import m from "./cori.data.api532.js";
import n from "./cori.data.api306.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function u(r, o) {
  const t = n({ p: o }, { table: r });
  let e = t.exprs[0];
  if (t.ops.length) {
    const { data: p } = f(r, t, { drop: !0 }).column("p");
    e = (i) => p[i];
  }
  return m(r, e);
}
export {
  u as default
};
//# sourceMappingURL=cori.data.api444.js.map
