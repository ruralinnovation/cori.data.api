import F from "./cori.data.api287.js";
import "./cori.data.api34.js";
import "./cori.data.api35.js";
import { columns as V, formats as j, scan as w } from "./cori.data.api405.js";
import H from "./cori.data.api406.js";
import L from "./cori.data.api301.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function C(c, r = {}) {
  const s = V(c, r.columns), { align: g, format: h } = j(c, s, r), m = M(r), a = r.null, y = (t) => t === "c" ? "center" : t === "r" ? "right" : "left", $ = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), f = (t, o) => $(H(t, o)), x = a ? (t, o) => t == null ? a(t) : f(t, o) : f;
  let l = -1, i = -1;
  const e = (t, o, b) => {
    const u = b ? y(g[o]) : "", p = m[t] && m[t](o, i, l) || "", d = (u ? `text-align: ${u};` + (p ? " " : "") : "") + p;
    return `<${t}${d ? ` style="${d}"` : ""}>`;
  };
  let n = e("table") + e("thead") + e("tr", l) + s.map((t) => `${e("th", t, 1)}${t}</th>`).join("") + "</tr></thead>" + e("tbody");
  return w(c, s, r.limit, r.offset, {
    row(t) {
      l = t, n += (++i ? "</tr>" : "") + e("tr");
    },
    cell(t, o) {
      n += e("td", o, 1) + x(t, h[o]) + "</td>";
    }
  }), n + "</tr></tbody></table>";
}
function M(c) {
  return L(
    c.style,
    (r) => F(r) ? r : () => r
  );
}
export {
  C as default
};
//# sourceMappingURL=cori.data.api295.js.map
