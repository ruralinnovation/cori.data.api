import p from "./cori.data.api398.js";
import "./cori.data.api34.js";
import { formatUTCDate as d } from "./cori.data.api404.js";
import "./cori.data.api35.js";
import { columns as x, scan as g } from "./cori.data.api405.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function V(n, r = {}) {
  const e = x(n, r.columns), c = r.format || {}, o = r.delimiter || ",", a = new RegExp(`["${o}
\r]`), f = (t) => t == null ? "" : p(t) ? d(t, !0) : a.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t, m = e.map(f);
  let i = "";
  return g(n, e, r.limit || 1 / 0, r.offset, {
    row() {
      i += m.join(o) + `
`;
    },
    cell(t, s, l) {
      m[l] = f(c[s] ? c[s](t) : t);
    }
  }), i + m.join(o);
}
export {
  V as default
};
//# sourceMappingURL=cori.data.api294.js.map
