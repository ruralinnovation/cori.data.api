import { instance as u } from "./cori.data.api358.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function a(e) {
  const n = e.type, s = new (u.getVisitFn(n)())(e);
  if (n.children && n.children.length > 0) {
    const r = e.children || [], c = { nullValues: e.nullValues }, l = Array.isArray(r) ? (t, i) => r[i] || c : ({ name: t }) => r[t] || c;
    for (const [t, i] of n.children.entries()) {
      const { type: d } = i, o = l(i, t);
      s.children.push(a(Object.assign(Object.assign({}, o), { type: d })));
    }
  }
  return s;
}
export {
  a as makeBuilder
};
//# sourceMappingURL=cori.data.api357.js.map
