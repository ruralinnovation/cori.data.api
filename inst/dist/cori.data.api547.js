import l from "./cori.data.api638.js";
import { array as f, arrowVector as y } from "./cori.data.api34.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function p(t, r) {
  const e = [], n = f(t.indices.ArrayType, r), a = /* @__PURE__ */ Object.create(null);
  let d = -1, c = 0;
  return {
    set(s, u) {
      const i = String(s);
      let o = a[i];
      o === void 0 && (c += i.length, a[i] = o = ++d, e.push(i)), n[u] = o;
    },
    data: () => ({
      type: t,
      length: r,
      buffers: [null, n],
      dict: m(t.dictionary, e, c)
    })
  };
}
function m(t, r, e) {
  const n = l(t, r.length, e);
  return r.forEach(n.set), y(n.data());
}
export {
  p as default
};
//# sourceMappingURL=cori.data.api547.js.map
