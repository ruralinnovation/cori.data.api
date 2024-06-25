import i from "./cori.data.api322.js";
import n from "./cori.data.api323.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const c = (a) => n("any", a), o = () => n("count"), _ = (a) => n("array_agg", a), l = (a) => n("array_agg_distinct", a), s = (a, e) => n("map_agg", [a, e]), d = (a, e) => n("object_agg", [a, e]), g = (a, e) => n("entries_agg", [a, e]);
({
  ...i
});
export {
  c as any,
  _ as array_agg,
  l as array_agg_distinct,
  o as count,
  g as entries_agg,
  s as map_agg,
  d as object_agg
};
//# sourceMappingURL=cori.data.api31.js.map
