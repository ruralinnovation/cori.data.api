import r from "./cori.data.api631.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function c(e, s) {
  const f = e.totalRows(), o = e.mask(), i = e.data(), n = new r(f);
  if (o)
    for (let t = o.next(0); t >= 0; t = o.next(t + 1))
      s(t, i) && n.set(t);
  else
    for (let t = 0; t < f; ++t)
      s(t, i) && n.set(t);
  return e.create({ filter: n });
}
export {
  c as default
};
//# sourceMappingURL=cori.data.api522.js.map
