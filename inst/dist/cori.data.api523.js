import m from "./cori.data.api536.js";
import { aggregateGet as s } from "./cori.data.api540.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function i(r, { names: o = [], exprs: e = [], ops: f = [] }, t = {}) {
  if (o.length === 0)
    return r;
  const [n = "key", u = "value"] = t.as || [], a = s(r, f, e);
  return m(
    r,
    {
      names: [n, u],
      exprs: [() => o, (l, p) => a.map((g) => g(l, p))]
    },
    { ...t, drop: o }
  );
}
export {
  i as default
};
//# sourceMappingURL=cori.data.api523.js.map
