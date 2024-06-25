import f from "./cori.data.api529.js";
import { inferKeys as e, keyPredicate as t } from "./cori.data.api528.js";
import s from "./cori.data.api356.js";
import c from "./cori.data.api373.js";
import n from "./cori.data.api353.js";
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
//# sourceMappingURL=cori.data.api471.js.map
