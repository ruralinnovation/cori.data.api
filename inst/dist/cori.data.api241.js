/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function e(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const o = Object.getPrototypeOf(t);
  return (o === null || o === Object.prototype || Object.getPrototypeOf(o) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}
export {
  e as default
};
//# sourceMappingURL=cori.data.api241.js.map
