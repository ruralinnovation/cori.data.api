import { unreachable as N } from "./cori.data.api49.js";
import { j as d } from "./cori.data.api9.js";
import { unified as R } from "./cori.data.api50.js";
import H from "./cori.data.api51.js";
import S from "./cori.data.api52.js";
import { VFile as D } from "./cori.data.api53.js";
import { visit as I } from "./cori.data.api54.js";
import { toJsxRuntime as U } from "./cori.data.api55.js";
import { urlAttributes as f } from "./cori.data.api56.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const F = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", w = [], h = { allowDangerousHtml: !0 }, M = /^(https?|ircs?|mailto|xmpp)$/i, q = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function Q(e) {
  const s = e.allowedElements, m = e.allowElement, i = e.children || "", a = e.className, y = e.components, u = e.disallowedElements, k = e.rehypePlugins || w, b = e.remarkPlugins || w, O = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...h } : h, v = e.skipHtml, x = e.unwrapDisallowed, E = e.urlTransform || A, p = R().use(H).use(b).use(S, O).use(k), c = new D();
  typeof i == "string" && (c.value = i);
  for (const r of q)
    Object.hasOwn(e, r.from) && N(
      "Unexpected `" + r.from + "` prop, " + (r.to ? "use `" + r.to + "` instead" : "remove it") + " (see <" + F + "#" + r.id + "> for more info)"
    );
  const P = p.parse(c);
  let n = p.runSync(P, c);
  return a && (n = {
    type: "element",
    tagName: "div",
    properties: { className: a },
    // Assume no doctypes.
    children: (
      /** @type {Array<ElementContent>} */
      n.type === "root" ? n.children : [n]
    )
  }), I(n, j), U(n, {
    Fragment: d.Fragment,
    components: y,
    ignoreInvalidStyle: !0,
    jsx: d.jsx,
    jsxs: d.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function j(r, t, l) {
    if (r.type === "raw" && l && typeof t == "number")
      return v ? l.children.splice(t, 1) : l.children[t] = { type: "text", value: r.value }, t;
    if (r.type === "element") {
      let o;
      for (o in f)
        if (Object.hasOwn(f, o) && Object.hasOwn(r.properties, o)) {
          const T = r.properties[o], g = f[o];
          (g === null || g.includes(r.tagName)) && (r.properties[o] = E(String(T || ""), o, r));
        }
    }
    if (r.type === "element") {
      let o = s ? !s.includes(r.tagName) : u ? u.includes(r.tagName) : !1;
      if (!o && m && typeof t == "number" && (o = !m(r, t, l)), o && l && typeof t == "number")
        return x && r.children ? l.children.splice(t, 1, ...r.children) : l.children.splice(t, 1), t;
    }
  }
}
function A(e) {
  const s = e.indexOf(":"), m = e.indexOf("?"), i = e.indexOf("#"), a = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    s < 0 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    a > -1 && s > a || m > -1 && s > m || i > -1 && s > i || // It is a protocol, it should be allowed.
    M.test(e.slice(0, s)) ? e : ""
  );
}
export {
  Q as Markdown,
  A as defaultUrlTransform
};
//# sourceMappingURL=cori.data.api23.js.map
