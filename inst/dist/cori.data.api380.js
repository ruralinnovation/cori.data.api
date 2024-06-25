/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function f(e, l, n) {
  const h = n ? n.children : void 0, p = (h ? h.indexOf(l) : 1) === 0 ? "th" : "td", c = n && n.type === "table" ? n.align : void 0, g = c ? c.length : l.children.length;
  let r = -1;
  const d = [];
  for (; ++r < g; ) {
    const i = l.children[r], s = {}, a = c ? c[r] : void 0;
    a && (s.align = a);
    let t = { type: "element", tagName: p, properties: s, children: [] };
    i && (t.children = e.all(i), e.patch(i, t), t = e.applyData(i, t)), d.push(t);
  }
  const o = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(d, !0)
  };
  return e.patch(l, o), e.applyData(l, o);
}
export {
  f as tableRow
};
//# sourceMappingURL=cori.data.api380.js.map
