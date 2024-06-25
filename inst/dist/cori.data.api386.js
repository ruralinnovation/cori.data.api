import { BIGINT as I, ERROR as g, SET as l, MAP as w, REGEXP as E, DATE as R, OBJECT as T, ARRAY as m, VOID as B, PRIMITIVE as b } from "./cori.data.api473.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const f = typeof self == "object" ? self : globalThis, h = (o, p) => {
  const s = (e, a) => (o.set(a, e), e), c = (e) => {
    if (o.has(e))
      return o.get(e);
    const [a, r] = p[e];
    switch (a) {
      case b:
      case B:
        return s(r, e);
      case m: {
        const t = s([], e);
        for (const n of r)
          t.push(c(n));
        return t;
      }
      case T: {
        const t = s({}, e);
        for (const [n, u] of r)
          t[c(n)] = c(u);
        return t;
      }
      case R:
        return s(new Date(r), e);
      case E: {
        const { source: t, flags: n } = r;
        return s(new RegExp(t, n), e);
      }
      case w: {
        const t = s(/* @__PURE__ */ new Map(), e);
        for (const [n, u] of r)
          t.set(c(n), c(u));
        return t;
      }
      case l: {
        const t = s(/* @__PURE__ */ new Set(), e);
        for (const n of r)
          t.add(c(n));
        return t;
      }
      case g: {
        const { name: t, message: n } = r;
        return s(new f[t](n), e);
      }
      case I:
        return s(BigInt(r), e);
      case "BigInt":
        return s(Object(BigInt(r)), e);
    }
    return s(new f[a](r), e);
  };
  return c;
}, A = (o) => h(/* @__PURE__ */ new Map(), o)(0);
export {
  A as deserialize
};
//# sourceMappingURL=cori.data.api386.js.map
