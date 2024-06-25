import f from "./cori.data.api519.js";
import { inferKeys as e, keyPredicate as t } from "./cori.data.api518.js";
import s from "./cori.data.api338.js";
import c from "./cori.data.api355.js";
import n from "./cori.data.api335.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function a(i, o, r, m) {
  r = e(i, o, r);
  const p = c(r) ? t(i, o, ...r.map(n)) : s({ on: r }, { join: [i, o] }).exprs[0];
  return f(i, o, p, m);
}
export {
  a as default
};
//# sourceMappingURL=cori.data.api456.js.map
