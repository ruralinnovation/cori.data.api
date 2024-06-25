import e from "./cori.data.api430.js";
import f from "./cori.data.api431.js";
import u from "./cori.data.api432.js";
import n from "./cori.data.api433.js";
import c from "./cori.data.api434.js";
import l from "./cori.data.api435.js";
import s from "./cori.data.api436.js";
import _ from "./cori.data.api437.js";
import t from "./cori.data.api438.js";
import a from "./cori.data.api439.js";
import d from "./cori.data.api440.js";
import b from "./cori.data.api441.js";
import g from "./cori.data.api442.js";
import i from "./cori.data.api443.js";
import j from "./cori.data.api444.js";
import v from "./cori.data.api445.js";
import x from "./cori.data.api446.js";
import y from "./cori.data.api447.js";
import h from "./cori.data.api448.js";
import k from "./cori.data.api449.js";
import q from "./cori.data.api450.js";
import w from "./cori.data.api451.js";
import z from "./cori.data.api452.js";
import A from "./cori.data.api453.js";
import B from "./cori.data.api454.js";
import { count as C } from "./cori.data.api38.js";
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
//# sourceMappingURL=cori.data.api347.js.map
