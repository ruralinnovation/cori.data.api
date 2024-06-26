import { key as o } from "./cori.data.api520.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function s() {
  const t = /* @__PURE__ */ new Map();
  return {
    count() {
      return t.size;
    },
    values() {
      return Array.from(t.values(), (e) => e.v);
    },
    increment(e) {
      const n = o(e), r = t.get(n);
      r ? ++r.n : t.set(n, { v: e, n: 1 });
    },
    decrement(e) {
      const n = o(e), r = t.get(n);
      r.n === 1 ? t.delete(n) : --r.n;
    },
    forEach(e) {
      t.forEach(({ v: n, n: r }) => e(n, r));
    }
  };
}
export {
  s as default
};
//# sourceMappingURL=cori.data.api411.js.map
