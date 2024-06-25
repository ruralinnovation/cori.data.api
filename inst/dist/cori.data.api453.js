import t from "./cori.data.api422.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function i(r, e, n) {
  if (e instanceof Map) {
    if (e.has(r))
      return e.get(r);
  } else if (t(e, r))
    return e[r];
  return n !== void 0 ? n : r;
}
export {
  i as default
};
//# sourceMappingURL=cori.data.api453.js.map
