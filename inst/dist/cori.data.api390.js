import u from "./cori.data.api491.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function o(t, i) {
  t = u(t) ? t : new Set(t);
  let e = i, r = 0;
  for (; t.has(e); )
    e = i + ++r;
  return e;
}
export {
  o as default
};
//# sourceMappingURL=cori.data.api390.js.map
