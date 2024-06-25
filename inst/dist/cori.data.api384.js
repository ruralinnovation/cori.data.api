import e from "./cori.data.api463.js";
import f from "./cori.data.api464.js";
import u from "./cori.data.api465.js";
import n from "./cori.data.api466.js";
import c from "./cori.data.api467.js";
import l from "./cori.data.api468.js";
import s from "./cori.data.api469.js";
import _ from "./cori.data.api470.js";
import t from "./cori.data.api471.js";
import a from "./cori.data.api472.js";
import d from "./cori.data.api473.js";
import b from "./cori.data.api474.js";
import g from "./cori.data.api475.js";
import i from "./cori.data.api476.js";
import j from "./cori.data.api477.js";
import v from "./cori.data.api478.js";
import x from "./cori.data.api479.js";
import y from "./cori.data.api480.js";
import h from "./cori.data.api481.js";
import k from "./cori.data.api482.js";
import q from "./cori.data.api483.js";
import w from "./cori.data.api484.js";
import z from "./cori.data.api485.js";
import A from "./cori.data.api486.js";
import B from "./cori.data.api487.js";
import { count as C } from "./cori.data.api36.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const mr = {
  __antijoin: (r, o, m) => t(r, o, m, { anti: !0 }),
  __count: (r, o = {}) => i(r, { [o.as || "count"]: C() }),
  __cross: (r, o, m, p) => _(r, o, () => !0, m, {
    ...p,
    left: !0,
    right: !0
  }),
  __concat: w,
  __dedupe: e,
  __derive: f,
  __except: u,
  __filter: n,
  __fold: c,
  __impute: l,
  __intersect: s,
  __join: _,
  __lookup: a,
  __pivot: d,
  __relocate: b,
  __rename: g,
  __rollup: i,
  __sample: j,
  __select: v,
  __semijoin: t,
  __spread: x,
  __union: y,
  __unroll: h,
  __groupby: k,
  __orderby: q,
  __ungroup: A,
  __unorder: B,
  __reduce: z
};
export {
  mr as default
};
//# sourceMappingURL=cori.data.api384.js.map
