import o from "./cori.data.api90.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var r, t, f;
e({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function e(a) {
  return r = o(a), t = r.format, f = r.formatPrefix, r;
}
export {
  e as default,
  t as format,
  f as formatPrefix
};
//# sourceMappingURL=cori.data.api39.js.map
