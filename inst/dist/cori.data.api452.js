import { reduceGroups as A, reduceFlat as E } from "./cori.data.api537.js";
import _ from "./cori.data.api303.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function z(o, s) {
  const n = _(), r = o.groups(), { get: i, names: e = [], rows: d, size: l = 1 } = r || {}, c = new Uint32Array(l + 1);
  e.forEach((t) => n.add(t, null));
  const m = r ? A(o, s, r) : [E(o, s)];
  s.outputs().map((t) => n.add(t, []));
  const p = c.length - 1;
  let u = 0;
  for (let t = 0; t < p; ++t)
    u += c[t + 1] = s.write(m[t], n.data, c[t]);
  if (r) {
    const t = o.data();
    e.forEach((g, w) => {
      const h = n.data[g] = Array(u), y = i[w];
      for (let a = 0, f = 0; a < l; ++a)
        h.fill(y(d[a], t), f, f += c[a + 1]);
    });
  }
  return o.create(n.new());
}
export {
  z as default
};
//# sourceMappingURL=cori.data.api452.js.map
