import d from "./cori.data.api370.js";
import { handlers as A } from "./cori.data.api344.js";
import { visit as C } from "./cori.data.api52.js";
import { position as k } from "./cori.data.api234.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const y = {}.hasOwnProperty, N = {};
function I(e, n) {
  const t = n || N, r = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), f = { ...A, ...t.handlers }, l = {
    all: v,
    applyData: O,
    definitionById: r,
    footnoteById: p,
    footnoteCounts: u,
    footnoteOrder: [],
    handlers: f,
    one: g,
    options: t,
    patch: M,
    wrap: S
  };
  return C(e, function(i) {
    if (i.type === "definition" || i.type === "footnoteDefinition") {
      const a = i.type === "definition" ? r : p, o = String(i.identifier).toUpperCase();
      a.has(o) || a.set(o, i);
    }
  }), l;
  function g(i, a) {
    const o = i.type, c = l.handlers[o];
    if (y.call(l.handlers, o) && c)
      return c(l, i, a);
    if (l.options.passThrough && l.options.passThrough.includes(o)) {
      if ("children" in i) {
        const { children: h, ...x } = i, m = d(x);
        return m.children = l.all(i), m;
      }
      return d(i);
    }
    return (l.options.unknownHandler || P)(l, i, a);
  }
  function v(i) {
    const a = [];
    if ("children" in i) {
      const o = i.children;
      let c = -1;
      for (; ++c < o.length; ) {
        const s = l.one(o[c], i);
        if (s) {
          if (c && o[c - 1].type === "break" && (!Array.isArray(s) && s.type === "text" && (s.value = w(s.value)), !Array.isArray(s) && s.type === "element")) {
            const h = s.children[0];
            h && h.type === "text" && (h.value = w(h.value));
          }
          Array.isArray(s) ? a.push(...s) : a.push(s);
        }
      }
    }
    return a;
  }
}
function M(e, n) {
  e.position && (n.position = k(e));
}
function O(e, n) {
  let t = n;
  if (e && e.data) {
    const r = e.data.hName, p = e.data.hChildren, u = e.data.hProperties;
    if (typeof r == "string")
      if (t.type === "element")
        t.tagName = r;
      else {
        const f = "children" in t ? t.children : [t];
        t = { type: "element", tagName: r, properties: {}, children: f };
      }
    t.type === "element" && u && Object.assign(t.properties, d(u)), "children" in t && t.children && p !== null && p !== void 0 && (t.children = p);
  }
  return t;
}
function P(e, n) {
  const t = n.data || {}, r = "value" in n && !(y.call(t, "hProperties") || y.call(t, "hChildren")) ? { type: "text", value: n.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, r), e.applyData(n, r);
}
function S(e, n) {
  const t = [];
  let r = -1;
  for (n && t.push({ type: "text", value: `
` }); ++r < e.length; )
    r && t.push({ type: "text", value: `
` }), t.push(e[r]);
  return n && e.length > 0 && t.push({ type: "text", value: `
` }), t;
}
function w(e) {
  let n = 0, t = e.charCodeAt(n);
  for (; t === 9 || t === 32; )
    n++, t = e.charCodeAt(n);
  return e.slice(n);
}
export {
  I as createState,
  S as wrap
};
//# sourceMappingURL=cori.data.api369.js.map
