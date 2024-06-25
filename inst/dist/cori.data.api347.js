import "./cori.data.api36.js";
import "./cori.data.api37.js";
import { columns as s, formats as i, scan as u } from "./cori.data.api427.js";
import p from "./cori.data.api428.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function x(t, n = {}) {
  const r = s(t, n.columns), { align: c, format: e } = i(t, r, n), l = (o) => o === "c" ? ":-:" : o === "r" ? "-:" : ":-", a = (o) => o.replace(/\|/g, "\\|");
  let m = "|" + r.map(a).join("|") + `|
|` + r.map((o) => l(c[o])).join("|") + "|";
  return u(t, r, n.limit, n.offset, {
    row() {
      m += `
|`;
    },
    cell(o, f) {
      m += a(p(o, e[f])) + "|";
    }
  }), m + `
`;
}
export {
  x as default
};
//# sourceMappingURL=cori.data.api347.js.map
