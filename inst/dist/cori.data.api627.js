/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function r(e, u) {
  const s = /* @__PURE__ */ new Map();
  return e.scan((t, c) => {
    const n = u(t, c);
    n != null && n === n && s.set(n, t);
  }), s;
}
function p(e, u, s) {
  const t = /* @__PURE__ */ new Map(), c = e.length;
  for (let n = 0; n < c; ++n) {
    const l = e[n], o = s(l, u);
    o != null && o === o && (t.has(o) ? t.get(o).push(n) : t.set(o, [n]));
  }
  return t;
}
export {
  p as indexLookup,
  r as rowLookup
};
//# sourceMappingURL=cori.data.api627.js.map
