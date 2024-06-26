import m from "./cori.data.api300.js";
import e from "./cori.data.api383.js";
import y from "./cori.data.api384.js";
import $ from "./cori.data.api393.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function s(t) {
  const r = typeof t;
  return r === "string" ? `"${t}"` : r !== "object" || !t ? t : e(t) ? +t : m(t) || $(t) ? `[${t.map(s)}]` : y(t) ? t + "" : k(t);
}
function k(t) {
  let r = "{", o = -1;
  for (const n in t)
    ++o > 0 && (r += ","), r += `"${n}":${s(t[n])}`;
  return r += "}", r;
}
function A(t, r) {
  const o = t.length;
  return o === 1 ? (n, c) => s(t[0](n, c)) : (n, c) => {
    let p = "";
    for (let i = 0; i < o; ++i) {
      i > 0 && (p += "|");
      const f = t[i](n, c);
      if (r && (f == null || f !== f))
        return null;
      p += s(f);
    }
    return p;
  };
}
export {
  A as default,
  s as key
};
//# sourceMappingURL=cori.data.api520.js.map
