import o from "./cori.data.api322.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function a(r, t, n) {
  return r = `"use strict"; return ${r};`, Function("fn", "$", r)(t, n);
}
const p = {
  escape: (r, t, n) => a(r, t, n),
  expr: (r, t) => a(`(row,data,op)=>${r}`, o, t),
  expr2: (r, t) => a(`(row0,data0,row,data)=>${r}`, o, t),
  join: (r, t) => a(`(row1,data1,row2,data2)=>${r}`, o, t),
  param: (r, t) => a(r, o, t)
};
export {
  p as default
};
//# sourceMappingURL=cori.data.api301.js.map
