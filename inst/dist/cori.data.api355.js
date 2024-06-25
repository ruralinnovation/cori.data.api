/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function f(l, e, s) {
  const n = l.all(e), a = s ? m(s) : o(e), r = {}, p = [];
  if (typeof e.checked == "boolean") {
    const t = n[0];
    let i;
    t && t.type === "element" && t.tagName === "p" ? i = t : (i = { type: "element", tagName: "p", properties: {}, children: [] }, n.unshift(i)), i.children.length > 0 && i.children.unshift({ type: "text", value: " " }), i.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: e.checked, disabled: !0 },
      children: []
    }), r.className = ["task-list-item"];
  }
  let c = -1;
  for (; ++c < n.length; ) {
    const t = n[c];
    (a || c !== 0 || t.type !== "element" || t.tagName !== "p") && p.push({ type: "text", value: `
` }), t.type === "element" && t.tagName === "p" && !a ? p.push(...t.children) : p.push(t);
  }
  const h = n[n.length - 1];
  h && (a || h.type !== "element" || h.tagName !== "p") && p.push({ type: "text", value: `
` });
  const u = { type: "element", tagName: "li", properties: r, children: p };
  return l.patch(e, u), l.applyData(e, u);
}
function m(l) {
  let e = !1;
  if (l.type === "list") {
    e = l.spread || !1;
    const s = l.children;
    let n = -1;
    for (; !e && ++n < s.length; )
      e = o(s[n]);
  }
  return e;
}
function o(l) {
  const e = l.spread;
  return e ?? l.children.length > 1;
}
export {
  f as listItem
};
//# sourceMappingURL=cori.data.api355.js.map
