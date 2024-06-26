import { random as u } from "./cori.data.api318.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function h(t, n = 0, i = t.length) {
  let e = i - (n = +n);
  for (; e; ) {
    const f = u() * e-- | 0, s = t[e + n];
    t[e + n] = t[f + n], t[f + n] = s;
  }
  return t;
}
export {
  h as default
};
//# sourceMappingURL=cori.data.api642.js.map
