import e from "./cori.data.api264.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function n(o, r) {
  const i = Array(o);
  if (e(r))
    for (let t = 0; t < o; ++t)
      i[t] = r(t);
  else
    i.fill(r);
  return i;
}
export {
  n as default
};
//# sourceMappingURL=cori.data.api262.js.map
