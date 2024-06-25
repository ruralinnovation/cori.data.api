import { normalize as s } from "./cori.data.api470.js";
import { DefinedInfo as p } from "./cori.data.api471.js";
import { Info as f } from "./cori.data.api472.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const l = /^data[-\w.:]+$/i, c = /-[a-z]/g, d = /[A-Z]/g;
function C(r, t) {
  const o = s(t);
  let i = t, a = f;
  if (o in r.normal)
    return r.property[r.normal[o]];
  if (o.length > 4 && o.slice(0, 4) === "data" && l.test(t)) {
    if (t.charAt(4) === "-") {
      const e = t.slice(5).replace(c, h);
      i = "data" + e.charAt(0).toUpperCase() + e.slice(1);
    } else {
      const e = t.slice(4);
      if (!c.test(e)) {
        let n = e.replace(d, m);
        n.charAt(0) !== "-" && (n = "-" + n), t = "data" + n;
      }
    }
    a = p;
  }
  return new a(i, t);
}
function m(r) {
  return "-" + r.toLowerCase();
}
function h(r) {
  return r.charAt(1).toUpperCase();
}
export {
  C as find
};
//# sourceMappingURL=cori.data.api261.js.map
