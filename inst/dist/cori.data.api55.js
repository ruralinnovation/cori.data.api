import { stringify as w } from "./cori.data.api241.js";
import { ok as p } from "./cori.data.api49.js";
import { svg as f, html as C } from "./cori.data.api242.js";
import { stringify as N } from "./cori.data.api243.js";
import S from "./cori.data.api244.js";
import { whitespace as j } from "./cori.data.api245.js";
import { find as A } from "./cori.data.api246.js";
import { hastToReact as T } from "./cori.data.api247.js";
import { VFileMessage as x } from "./cori.data.api248.js";
import { name as h } from "./cori.data.api249.js";
import { pointStart as F } from "./cori.data.api250.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const m = {}.hasOwnProperty, P = /* @__PURE__ */ new Map(), J = /[A-Z]/g, I = /-([a-z])/g, L = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), M = /* @__PURE__ */ new Set(["td", "th"]), g = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function le(t, e) {
  if (!e || e.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const r = e.filePath || void 0;
  let n;
  if (e.development) {
    if (typeof e.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    n = R(r, e.jsxDEV);
  } else {
    if (typeof e.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof e.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    n = B(r, e.jsx, e.jsxs);
  }
  const i = {
    Fragment: e.Fragment,
    ancestors: [],
    components: e.components || {},
    create: n,
    elementAttributeNameCase: e.elementAttributeNameCase || "react",
    evaluater: e.createEvaluater ? e.createEvaluater() : void 0,
    filePath: r,
    ignoreInvalidStyle: e.ignoreInvalidStyle || !1,
    passKeys: e.passKeys !== !1,
    passNode: e.passNode || !1,
    schema: e.space === "svg" ? f : C,
    stylePropertyNameCase: e.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: e.tableCellAlignToStyle !== !1
  }, s = E(i, t, void 0);
  return s && typeof s != "string" ? s : i.create(
    t,
    i.Fragment,
    { children: s || void 0 },
    void 0
  );
}
function E(t, e, r) {
  if (e.type === "element")
    return D(t, e, r);
  if (e.type === "mdxFlowExpression" || e.type === "mdxTextExpression")
    return O(t, e);
  if (e.type === "mdxJsxFlowElement" || e.type === "mdxJsxTextElement")
    return K(t, e, r);
  if (e.type === "mdxjsEsm")
    return V(t, e);
  if (e.type === "root")
    return _(t, e, r);
  if (e.type === "text")
    return z(t, e);
}
function D(t, e, r) {
  const n = t.schema;
  let i = n;
  e.tagName.toLowerCase() === "svg" && n.space === "html" && (i = f, t.schema = i), t.ancestors.push(e);
  const s = b(t, e.tagName, !1), a = k(t, e);
  let o = d(t, e);
  return L.has(e.tagName) && (o = o.filter(function(l) {
    return typeof l == "string" ? !j(l) : !0;
  })), v(t, a, s, e), y(a, o), t.ancestors.pop(), t.schema = n, t.create(e, s, a, r);
}
function O(t, e) {
  if (e.data && e.data.estree && t.evaluater) {
    const n = e.data.estree.body[0];
    return p(n.type === "ExpressionStatement"), /** @type {Child | undefined} */
    t.evaluater.evaluateExpression(n.expression);
  }
  u(t, e.position);
}
function V(t, e) {
  if (e.data && e.data.estree && t.evaluater)
    return (
      /** @type {Child | undefined} */
      t.evaluater.evaluateProgram(e.data.estree)
    );
  u(t, e.position);
}
function K(t, e, r) {
  const n = t.schema;
  let i = n;
  e.name === "svg" && n.space === "html" && (i = f, t.schema = i), t.ancestors.push(e);
  const s = e.name === null ? t.Fragment : b(t, e.name, !0), a = U(t, e), o = d(t, e);
  return v(t, a, s, e), y(a, o), t.ancestors.pop(), t.schema = n, t.create(e, s, a, r);
}
function _(t, e, r) {
  const n = {};
  return y(n, d(t, e)), t.create(e, t.Fragment, n, r);
}
function z(t, e) {
  return e.value;
}
function v(t, e, r, n) {
  typeof r != "string" && r !== t.Fragment && t.passNode && (e.node = n);
}
function y(t, e) {
  if (e.length > 0) {
    const r = e.length > 1 ? e : e[0];
    r && (t.children = r);
  }
}
function B(t, e, r) {
  return n;
  function n(i, s, a, o) {
    const c = Array.isArray(a.children) ? r : e;
    return o ? c(s, a, o) : c(s, a);
  }
}
function R(t, e) {
  return r;
  function r(n, i, s, a) {
    const o = Array.isArray(s.children), l = F(n);
    return e(
      i,
      s,
      a,
      o,
      {
        columnNumber: l ? l.column - 1 : void 0,
        fileName: t,
        lineNumber: l ? l.line : void 0
      },
      void 0
    );
  }
}
function k(t, e) {
  const r = {};
  let n, i;
  for (i in e.properties)
    if (i !== "children" && m.call(e.properties, i)) {
      const s = X(t, i, e.properties[i]);
      if (s) {
        const [a, o] = s;
        t.tableCellAlignToStyle && a === "align" && typeof o == "string" && M.has(e.tagName) ? n = o : r[a] = o;
      }
    }
  if (n) {
    const s = (
      /** @type {Style} */
      r.style || (r.style = {})
    );
    s[t.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = n;
  }
  return r;
}
function U(t, e) {
  const r = {};
  for (const n of e.attributes)
    if (n.type === "mdxJsxExpressionAttribute")
      if (n.data && n.data.estree && t.evaluater) {
        const s = n.data.estree.body[0];
        p(s.type === "ExpressionStatement");
        const a = s.expression;
        p(a.type === "ObjectExpression");
        const o = a.properties[0];
        p(o.type === "SpreadElement"), Object.assign(
          r,
          t.evaluater.evaluateExpression(o.argument)
        );
      } else
        u(t, e.position);
    else {
      const i = n.name;
      let s;
      if (n.value && typeof n.value == "object")
        if (n.value.data && n.value.data.estree && t.evaluater) {
          const o = n.value.data.estree.body[0];
          p(o.type === "ExpressionStatement"), s = t.evaluater.evaluateExpression(o.expression);
        } else
          u(t, e.position);
      else
        s = n.value === null ? !0 : n.value;
      r[i] = /** @type {Props[keyof Props]} */
      s;
    }
  return r;
}
function d(t, e) {
  const r = [];
  let n = -1;
  const i = t.passKeys ? /* @__PURE__ */ new Map() : P;
  for (; ++n < e.children.length; ) {
    const s = e.children[n];
    let a;
    if (t.passKeys) {
      const l = s.type === "element" ? s.tagName : s.type === "mdxJsxFlowElement" || s.type === "mdxJsxTextElement" ? s.name : void 0;
      if (l) {
        const c = i.get(l) || 0;
        a = l + "-" + c, i.set(l, c + 1);
      }
    }
    const o = E(t, s, a);
    o !== void 0 && r.push(o);
  }
  return r;
}
function X(t, e, r) {
  const n = A(t.schema, e);
  if (!(r == null || typeof r == "number" && Number.isNaN(r))) {
    if (Array.isArray(r) && (r = n.commaSeparated ? w(r) : N(r)), n.property === "style") {
      let i = typeof r == "object" ? r : Z(t, String(r));
      return t.stylePropertyNameCase === "css" && (i = q(i)), ["style", i];
    }
    return [
      t.elementAttributeNameCase === "react" && n.space ? T[n.property] || n.property : n.attribute,
      r
    ];
  }
}
function Z(t, e) {
  const r = {};
  try {
    S(e, n);
  } catch (i) {
    if (!t.ignoreInvalidStyle) {
      const s = (
        /** @type {Error} */
        i
      ), a = new x("Cannot parse `style` attribute", {
        ancestors: t.ancestors,
        cause: s,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime"
      });
      throw a.file = t.filePath || void 0, a.url = g + "#cannot-parse-style-attribute", a;
    }
  }
  return r;
  function n(i, s) {
    let a = i;
    a.slice(0, 2) !== "--" && (a.slice(0, 4) === "-ms-" && (a = "ms-" + a.slice(4)), a = a.replace(I, H)), r[a] = s;
  }
}
function b(t, e, r) {
  let n;
  if (!r)
    n = { type: "Literal", value: e };
  else if (e.includes(".")) {
    const i = e.split(".");
    let s = -1, a;
    for (; ++s < i.length; ) {
      const o = h(i[s]) ? { type: "Identifier", name: i[s] } : { type: "Literal", value: i[s] };
      a = a ? {
        type: "MemberExpression",
        object: a,
        property: o,
        computed: !!(s && o.type === "Literal"),
        optional: !1
      } : o;
    }
    n = a;
  } else
    n = h(e) && !/^[a-z]/.test(e) ? { type: "Identifier", name: e } : { type: "Literal", value: e };
  if (n.type === "Literal") {
    const i = (
      /** @type {keyof JSX.IntrinsicElements} */
      n.value
    );
    return m.call(t.components, i) ? t.components[i] : i;
  }
  if (t.evaluater)
    return t.evaluater.evaluateExpression(n);
  u(t);
}
function u(t, e) {
  const r = new x(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: t.ancestors,
      place: e,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw r.file = t.filePath || void 0, r.url = g + "#cannot-handle-mdx-estrees-without-createevaluater", r;
}
function q(t) {
  const e = {};
  let r;
  for (r in t)
    m.call(t, r) && (e[G(r)] = t[r]);
  return e;
}
function G(t) {
  let e = t.replace(J, Q);
  return e.slice(0, 3) === "ms-" && (e = "-" + e), e;
}
function H(t, e) {
  return e.toUpperCase();
}
function Q(t) {
  return "-" + t.toLowerCase();
}
export {
  le as toJsxRuntime
};
//# sourceMappingURL=cori.data.api55.js.map
