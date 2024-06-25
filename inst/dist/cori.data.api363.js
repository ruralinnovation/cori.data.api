import { pointStart as a, pointEnd as h } from "./cori.data.api239.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function m(t, e) {
  const n = t.all(e), i = n.shift(), p = [];
  if (i) {
    const r = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: t.wrap([i], !0)
    };
    t.patch(e.children[0], r), p.push(r);
  }
  if (n.length > 0) {
    const r = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: t.wrap(n, !0)
    }, c = a(e.children[1]), o = h(e.children[e.children.length - 1]);
    c && o && (r.position = { start: c, end: o }), p.push(r);
  }
  const l = {
    type: "element",
    tagName: "table",
    properties: {},
    children: t.wrap(p, !0)
  };
  return t.patch(e, l), t.applyData(e, l);
}
export {
  m as table
};
//# sourceMappingURL=cori.data.api363.js.map
