import r from "./cori.data.api102.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function u(o, e) {
  var n = {}, f = {}, t;
  (o === null || typeof o != "object") && (o = {}), (e === null || typeof e != "object") && (e = {});
  for (t in e)
    t in o ? n[t] = r(o[t], e[t]) : f[t] = e[t];
  return function(i) {
    for (t in n)
      f[t] = n[t](i);
    return f;
  };
}
export {
  u as default
};
//# sourceMappingURL=cori.data.api107.js.map
