/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class i extends Map {
  constructor(t, s = f) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: s } }), t != null)
      for (const [r, o] of t)
        this.set(r, o);
  }
  get(t) {
    return super.get(n(this, t));
  }
  has(t) {
    return super.has(n(this, t));
  }
  set(t, s) {
    return super.set(u(this, t), s);
  }
  delete(t) {
    return super.delete(c(this, t));
  }
}
function n({ _intern: e, _key: t }, s) {
  const r = t(s);
  return e.has(r) ? e.get(r) : s;
}
function u({ _intern: e, _key: t }, s) {
  const r = t(s);
  return e.has(r) ? e.get(r) : (e.set(r, s), s);
}
function c({ _intern: e, _key: t }, s) {
  const r = t(s);
  return e.has(r) && (s = e.get(r), e.delete(r)), s;
}
function f(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
export {
  i as InternMap
};
//# sourceMappingURL=cori.data.api81.js.map
