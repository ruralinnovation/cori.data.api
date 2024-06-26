import o from "./cori.data.api322.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function i(f, r, e = 0) {
  const t = e ? { field: !0, table: e } : { field: !0 };
  return o(
    f,
    r ? { expr: r, ...t } : t
  );
}
export {
  i as default
};
//# sourceMappingURL=cori.data.api323.js.map
