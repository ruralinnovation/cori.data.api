import p from "./cori.data.api291.js";
import { any as n } from "./cori.data.api17.js";
import t from "./cori.data.api283.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function u(o, r, f, i) {
  return p(
    o,
    t("fold", o, r),
    t("fold", o, f, { preparse: e, aggronly: !0 }),
    i
  );
}
function e(o) {
  o.forEach(
    (r, f) => r.field ? o.set(f, n(r + "")) : 0
  );
}
export {
  u as default
};
//# sourceMappingURL=cori.data.api213.js.map
