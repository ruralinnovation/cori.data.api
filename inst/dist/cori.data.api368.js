import x from "./cori.data.api370.js";
import { normalizeUri as N } from "./cori.data.api371.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function L(e, o) {
  const r = [{ type: "text", value: "↩" }];
  return o > 1 && r.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(o) }]
  }), r;
}
function k(e, o) {
  return "Back to reference " + (e + 1) + (o > 1 ? "-" + o : "");
}
function C(e) {
  const o = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = e.options.footnoteBackContent || L, s = e.options.footnoteBackLabel || k, y = e.options.footnoteLabel || "Footnotes", g = e.options.footnoteLabelTagName || "h2", b = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, f = [];
  let a = -1;
  for (; ++a < e.footnoteOrder.length; ) {
    const p = e.footnoteById.get(
      e.footnoteOrder[a]
    );
    if (!p)
      continue;
    const c = e.all(p), u = String(p.identifier).toUpperCase(), d = N(u.toLowerCase());
    let l = 0;
    const i = [], h = e.footnoteCounts.get(u);
    for (; h !== void 0 && ++l <= h; ) {
      i.length > 0 && i.push({ type: "text", value: " " });
      let t = typeof r == "string" ? r : r(a, l);
      typeof t == "string" && (t = { type: "text", value: t }), i.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + o + "fnref-" + d + (l > 1 ? "-" + l : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof s == "string" ? s : s(a, l),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(t) ? t : [t]
      });
    }
    const n = c[c.length - 1];
    if (n && n.type === "element" && n.tagName === "p") {
      const t = n.children[n.children.length - 1];
      t && t.type === "text" ? t.value += " " : n.children.push({ type: "text", value: " " }), n.children.push(...i);
    } else
      c.push(...i);
    const m = {
      type: "element",
      tagName: "li",
      properties: { id: o + "fn-" + d },
      children: e.wrap(c, !0)
    };
    e.patch(p, m), f.push(m);
  }
  if (f.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: g,
          properties: {
            ...x(b),
            id: "footnote-label"
          },
          children: [{ type: "text", value: y }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(f, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
export {
  L as defaultFootnoteBackContent,
  k as defaultFootnoteBackLabel,
  C as footer
};
//# sourceMappingURL=cori.data.api368.js.map
