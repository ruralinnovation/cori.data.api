import { normalize as s } from "./cori.data.api476.js";
import { Schema as a } from "./cori.data.api471.js";
import { DefinedInfo as c } from "./cori.data.api477.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const u = {}.hasOwnProperty;
function w(e) {
  const p = {}, t = {};
  let r;
  for (r in e.properties)
    if (u.call(e.properties, r)) {
      const m = e.properties[r], o = new c(
        r,
        e.transform(e.attributes || {}, r),
        m,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), p[r] = o, t[s(r)] = r, t[s(o.attribute)] = r;
    }
  return new a(p, t, e.space);
}
export {
  w as create
};
//# sourceMappingURL=cori.data.api472.js.map
