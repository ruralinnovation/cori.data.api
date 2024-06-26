/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function p(e, r, t) {
  e.prototype = r.prototype = t, t.constructor = e;
}
function n(e, r) {
  var t = Object.create(e.prototype);
  for (var o in r)
    t[o] = r[o];
  return t;
}
export {
  p as default,
  n as extend
};
//# sourceMappingURL=cori.data.api95.js.map
