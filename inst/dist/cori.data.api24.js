import o from "./cori.data.api69.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var r, t;
e({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function e(a) {
  return r = o(a), t = r.format, r.formatPrefix, r;
}
export {
  e as default,
  t as format
};
//# sourceMappingURL=cori.data.api24.js.map
