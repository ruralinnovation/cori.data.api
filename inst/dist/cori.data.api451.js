import d from "./cori.data.api280.js";
import i from "./cori.data.api427.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function g(o, n) {
  const t = o.numRows(), s = t + n.reduce((c, r) => c + r.numRows(), 0);
  if (t === s)
    return o;
  const e = [o, ...n], u = d();
  return o.columnNames().forEach((c) => {
    const r = Array(s);
    let f = 0;
    e.forEach((m) => {
      const a = m.column(c) || { get: () => i };
      m.scan((w) => r[f++] = a.get(w));
    }), u.add(c, r);
  }), o.create(u.new());
}
export {
  g as default
};
//# sourceMappingURL=cori.data.api451.js.map
