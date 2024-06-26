/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function r(t, e) {
  const p = e.value ? e.value + `
` : "", l = {};
  e.lang && (l.className = ["language-" + e.lang]);
  let a = {
    type: "element",
    tagName: "code",
    properties: l,
    children: [{ type: "text", value: p }]
  };
  return e.meta && (a.data = { meta: e.meta }), t.patch(e, a), a = t.applyData(e, a), a = { type: "element", tagName: "pre", properties: {}, children: [a] }, t.patch(e, a), a;
}
export {
  r as code
};
//# sourceMappingURL=cori.data.api358.js.map
