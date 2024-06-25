import { tickStep as s } from "./cori.data.api123.js";
import c from "./cori.data.api133.js";
import e from "./cori.data.api138.js";
import p from "./cori.data.api140.js";
import l from "./cori.data.api139.js";
import { formatPrefix as u, format as h } from "./cori.data.api46.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function d(r, t, i, a) {
  var n = s(r, t, i), o;
  switch (a = c(a ?? ",f"), a.type) {
    case "s": {
      var m = Math.max(Math.abs(r), Math.abs(t));
      return a.precision == null && !isNaN(o = l(n, m)) && (a.precision = o), u(a, m);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(o = p(n, Math.max(Math.abs(r), Math.abs(t)))) && (a.precision = o - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(o = e(n)) && (a.precision = o - (a.type === "%") * 2);
      break;
    }
  }
  return h(a);
}
export {
  d as default
};
//# sourceMappingURL=cori.data.api199.js.map
