import e from "./cori.data.api429.js";
import l from "./cori.data.api407.js";
import r from "./cori.data.api328.js";
import c from "./cori.data.api405.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const n = (i) => l(i) || r(i), a = {
  compact: (i) => l(i) ? i.filter((o) => c(o)) : i,
  concat: (...i) => [].concat(...i),
  includes: (i, o, t) => n(i) ? i.includes(o, t) : !1,
  indexof: (i, o) => n(i) ? i.indexOf(o) : -1,
  join: (i, o) => l(i) ? i.join(o) : e,
  lastindexof: (i, o) => n(i) ? i.lastIndexOf(o) : -1,
  length: (i) => n(i) ? i.length : 0,
  pluck: (i, o) => l(i) ? i.map((t) => c(t) ? t[o] : e) : e,
  reverse: (i) => l(i) ? i.slice().reverse() : r(i) ? i.split("").reverse().join("") : e,
  slice: (i, o, t) => n(i) ? i.slice(o, t) : e
};
export {
  a as default
};
//# sourceMappingURL=cori.data.api414.js.map
