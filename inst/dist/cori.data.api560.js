/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function o(t) {
  if (typeof t == "bigint" && (t < Number.MIN_SAFE_INTEGER || t > Number.MAX_SAFE_INTEGER))
    throw new TypeError(`${t} is not safe to convert to a number.`);
  return Number(t);
}
export {
  o as bigIntToNumber
};
//# sourceMappingURL=cori.data.api560.js.map
