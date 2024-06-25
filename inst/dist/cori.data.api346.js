import d from "./cori.data.api420.js";
import "./cori.data.api36.js";
import { formatUTCDate as g } from "./cori.data.api426.js";
import "./cori.data.api37.js";
import { columns as h } from "./cori.data.api427.js";
import p from "./cori.data.api429.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const J = (t) => d(t) ? g(t, !0) : t;
function T(t, r = {}) {
  const f = p(r.schema), e = r.format || {}, c = h(t, r.columns);
  let m = "{";
  return f && (m += '"schema":{"fields":' + JSON.stringify(c.map((o) => ({ name: o }))) + '},"data":{'), c.forEach((o, s) => {
    m += (s ? "," : "") + JSON.stringify(o) + ":[";
    const a = t.column(o), i = e[o] || J;
    let n = -1;
    t.scan((u) => {
      const l = a.get(u);
      m += (++n ? "," : "") + JSON.stringify(i(l));
    }, !0, r.limit, r.offset), m += "]";
  }), m + "}" + (f ? "}" : "");
}
export {
  T as default
};
//# sourceMappingURL=cori.data.api346.js.map
