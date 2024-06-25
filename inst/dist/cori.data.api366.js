import e from "./cori.data.api448.js";
import f from "./cori.data.api449.js";
import u from "./cori.data.api450.js";
import n from "./cori.data.api451.js";
import c from "./cori.data.api452.js";
import l from "./cori.data.api453.js";
import s from "./cori.data.api454.js";
import _ from "./cori.data.api455.js";
import t from "./cori.data.api456.js";
import a from "./cori.data.api457.js";
import d from "./cori.data.api458.js";
import b from "./cori.data.api459.js";
import g from "./cori.data.api460.js";
import i from "./cori.data.api461.js";
import j from "./cori.data.api462.js";
import v from "./cori.data.api463.js";
import x from "./cori.data.api464.js";
import y from "./cori.data.api465.js";
import h from "./cori.data.api466.js";
import k from "./cori.data.api467.js";
import q from "./cori.data.api468.js";
import w from "./cori.data.api469.js";
import z from "./cori.data.api470.js";
import A from "./cori.data.api471.js";
import B from "./cori.data.api472.js";
import { count as C } from "./cori.data.api33.js";
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
//# sourceMappingURL=cori.data.api366.js.map
