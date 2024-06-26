import { rowLookup as w } from "./cori.data.api638.js";
import j from "./cori.data.api637.js";
import l from "./cori.data.api323.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function h(o, i, n, r = {}) {
  const t = new j(o.totalRows());
  return (l(n) ? R : k)(t, o, i, n), r.anti && t.not().and(o.mask()), o.create({ filter: t });
}
function R(o, i, n, [r, t]) {
  const f = w(n, t);
  i.scan((e, a) => {
    f.get(r(e, a)) >= 0 && o.set(e);
  });
}
function k(o, i, n, r) {
  const t = i.numRows(), f = n.numRows(), e = i.data(), a = n.data();
  if (i.isFiltered() || n.isFiltered()) {
    const s = i.indices(!1), c = n.indices(!1);
    for (let m = 0; m < t; ++m) {
      const u = s[m];
      for (let d = 0; d < f; ++d)
        if (r(u, e, c[d], a)) {
          o.set(u);
          break;
        }
    }
  } else
    for (let s = 0; s < t; ++s)
      for (let c = 0; c < f; ++c)
        if (r(s, e, c, a)) {
          o.set(s);
          break;
        }
}
export {
  h as default
};
//# sourceMappingURL=cori.data.api539.js.map
