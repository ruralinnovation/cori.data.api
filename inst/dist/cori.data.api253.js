import { color as A } from "./cori.data.api490.js";
import { convert as I } from "./cori.data.api491.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const g = [], j = !0, a = !1, k = "skip";
function w(t, o, u, s) {
  let p;
  typeof o == "function" && typeof u != "function" ? (s = u, u = o) : p = o;
  const b = I(p), y = s ? -1 : 1;
  m(t, void 0, [])();
  function m(n, N, l) {
    const i = (
      /** @type {Record<string, unknown>} */
      n && typeof n == "object" ? n : {}
    );
    if (typeof i.type == "string") {
      const e = (
        // `hast`
        typeof i.tagName == "string" ? i.tagName : (
          // `xast`
          typeof i.name == "string" ? i.name : void 0
        )
      );
      Object.defineProperty(h, "name", {
        value: "node (" + A(n.type + (e ? "<" + e + ">" : "")) + ")"
      });
    }
    return h;
    function h() {
      let e = g, f, r, d;
      if ((!o || b(n, N, l[l.length - 1] || void 0)) && (e = E(u(n, l)), e[0] === a))
        return e;
      if ("children" in n && n.children) {
        const c = (
          /** @type {UnistParent} */
          n
        );
        if (c.children && e[0] !== k)
          for (r = (s ? c.children.length : -1) + y, d = l.concat(c); r > -1 && r < c.children.length; ) {
            const P = c.children[r];
            if (f = m(P, r, d)(), f[0] === a)
              return f;
            r = typeof f[1] == "number" ? f[1] : r + y;
          }
      }
      return e;
    }
  }
}
function E(t) {
  return Array.isArray(t) ? t : typeof t == "number" ? [j, t] : t == null ? g : [t];
}
export {
  j as CONTINUE,
  a as EXIT,
  k as SKIP,
  w as visitParents
};
//# sourceMappingURL=cori.data.api253.js.map
