/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function p(r, t) {
  const s = {}, a = r.all(t);
  let l = -1;
  for (typeof t.start == "number" && t.start !== 1 && (s.start = t.start); ++l < a.length; ) {
    const e = a[l];
    if (e.type === "element" && e.tagName === "li" && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
      s.className = ["contains-task-list"];
      break;
    }
  }
  const i = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: s,
    children: r.wrap(a, !0)
  };
  return r.patch(t, i), r.applyData(t, i);
}
export {
  p as list
};
//# sourceMappingURL=cori.data.api356.js.map
