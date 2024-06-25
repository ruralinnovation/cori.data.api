import { SET as O, MAP as I, REGEXP as R, DATE as T, OBJECT as a, ARRAY as u, PRIMITIVE as b, BIGINT as w, ERROR as x, VOID as k } from "./cori.data.api490.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const g = "", { toString: A } = {}, { keys: M } = Object, h = (n) => {
  const f = typeof n;
  if (f !== "object" || !n)
    return [b, f];
  const s = A.call(n).slice(8, -1);
  switch (s) {
    case "Array":
      return [u, g];
    case "Object":
      return [a, g];
    case "Date":
      return [T, g];
    case "RegExp":
      return [R, g];
    case "Map":
      return [I, g];
    case "Set":
      return [O, g];
  }
  return s.includes("Array") ? [u, s] : s.includes("Error") ? [x, s] : [a, s];
}, S = ([n, f]) => n === b && (f === "function" || f === "symbol"), P = (n, f, s, E) => {
  const e = (r, c) => {
    const o = E.push(r) - 1;
    return s.set(c, o), o;
  }, y = (r) => {
    if (s.has(r))
      return s.get(r);
    let [c, o] = h(r);
    switch (c) {
      case b: {
        let t = r;
        switch (o) {
          case "bigint":
            c = w, t = r.toString();
            break;
          case "function":
          case "symbol":
            if (n)
              throw new TypeError("unable to serialize " + o);
            t = null;
            break;
          case "undefined":
            return e([k], r);
        }
        return e([c, t], r);
      }
      case u: {
        if (o)
          return e([o, [...r]], r);
        const t = [], p = e([c, t], r);
        for (const i of r)
          t.push(y(i));
        return p;
      }
      case a: {
        if (o)
          switch (o) {
            case "BigInt":
              return e([o, r.toString()], r);
            case "Boolean":
            case "Number":
            case "String":
              return e([o, r.valueOf()], r);
          }
        if (f && "toJSON" in r)
          return y(r.toJSON());
        const t = [], p = e([c, t], r);
        for (const i of M(r))
          (n || !S(h(r[i]))) && t.push([y(i), y(r[i])]);
        return p;
      }
      case T:
        return e([c, r.toISOString()], r);
      case R: {
        const { source: t, flags: p } = r;
        return e([c, { source: t, flags: p }], r);
      }
      case I: {
        const t = [], p = e([c, t], r);
        for (const [i, d] of r)
          (n || !(S(h(i)) || S(h(d)))) && t.push([y(i), y(d)]);
        return p;
      }
      case O: {
        const t = [], p = e([c, t], r);
        for (const i of r)
          (n || !S(h(i))) && t.push(y(i));
        return p;
      }
    }
    const { message: m } = r;
    return e([c, { name: o, message: m }], r);
  };
  return y;
}, N = (n, { json: f, lossy: s } = {}) => {
  const E = [];
  return P(!(f || s), !!f, /* @__PURE__ */ new Map(), E)(n), E;
};
export {
  N as serialize
};
//# sourceMappingURL=cori.data.api418.js.map
