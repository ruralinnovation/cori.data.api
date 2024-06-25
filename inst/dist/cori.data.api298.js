import k from "./cori.data.api140.js";
import g from "./cori.data.api136.js";
import { aggregate as h } from "./cori.data.api299.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const y = (e, t, o, u) => `((u = ${e}) < (v = ${t}) || u == null) && v != null ? ${o}
    : (u > v || v == null) && u != null ? ${u}
    : ((v = v instanceof Date ? +v : v), (u = u instanceof Date ? +u : u)) !== u && v === v ? ${o}
    : v !== v && u === u ? ${u} : `;
function G(e, t) {
  const o = [], u = [], a = [];
  let v = null, f = "0", i = "0";
  e.isGrouped() && (v = e.groups().keys, f = "ka", i = "kb");
  const { ops: $ } = g(t, {
    table: e,
    value: (n, s) => {
      if (o.push(n), s.escape) {
        const p = (c) => `fn[${a.length}](${c}, data)`;
        u.push([p("a"), p("b")]), a.push(s.escape);
      } else
        u.push([
          k(s, { index: "a", op: f }),
          k(s, { index: "b", op: i })
        ]);
    },
    window: !1
  }), d = h(e, $), l = (n, s) => d[n][s], m = o.length;
  let r = "return (a, b) => {" + (l && e.isGrouped() ? "const ka = keys[a], kb = keys[b];" : "") + "let u, v; return ";
  for (let n = 0; n < m; ++n) {
    const s = t.get(o[n]).desc ? -1 : 1, [p, c] = u[n];
    r += y(p, c, -s, s);
  }
  return r += "0;};", Function("op", "keys", "fn", "data", r)(l, v, a, e.data());
}
export {
  G as default
};
//# sourceMappingURL=cori.data.api298.js.map
