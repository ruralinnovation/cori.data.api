import { normalizeUri as s } from "./cori.data.api386.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function d(e, r) {
  const i = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", t = String(r.identifier).toUpperCase(), f = s(t.toLowerCase()), l = e.footnoteOrder.indexOf(t);
  let n, o = e.footnoteCounts.get(t);
  o === void 0 ? (o = 0, e.footnoteOrder.push(t), n = e.footnoteOrder.length) : n = l + 1, o += 1, e.footnoteCounts.set(t, o);
  const p = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + i + "fn-" + f,
      id: i + "fnref-" + f + (o > 1 ? "-" + o : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(n) }]
  };
  e.patch(r, p);
  const c = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [p]
  };
  return e.patch(r, c), e.applyData(r, c);
}
export {
  d as footnoteReference
};
//# sourceMappingURL=cori.data.api365.js.map
