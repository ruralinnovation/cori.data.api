import { Schema as c } from "./cori.data.api471.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function p(e, o) {
  const t = {}, n = {};
  let r = -1;
  for (; ++r < e.length; )
    Object.assign(t, e[r].property), Object.assign(n, e[r].normal);
  return new c(t, n, o);
}
export {
  p as merge
};
//# sourceMappingURL=cori.data.api369.js.map
