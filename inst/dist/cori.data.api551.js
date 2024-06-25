import { array as e } from "./cori.data.api36.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function u(l, n) {
  const s = e(Uint8Array, n / 8);
  let r = 0;
  return {
    set(t, a) {
      t == null ? ++r : (l.set(t, a), s[a >> 3] |= 1 << a % 8);
    },
    data: () => {
      const t = l.data();
      return r && (t.nulls = r, t.buffers[2] = s), t;
    }
  };
}
export {
  u as default
};
//# sourceMappingURL=cori.data.api551.js.map
