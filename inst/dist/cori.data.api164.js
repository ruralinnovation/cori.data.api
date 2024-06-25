import e from "./cori.data.api203.js";
import f from "./cori.data.api204.js";
import u from "./cori.data.api205.js";
import n from "./cori.data.api206.js";
import c from "./cori.data.api207.js";
import l from "./cori.data.api208.js";
import s from "./cori.data.api209.js";
import _ from "./cori.data.api210.js";
import t from "./cori.data.api211.js";
import a from "./cori.data.api212.js";
import d from "./cori.data.api213.js";
import b from "./cori.data.api214.js";
import g from "./cori.data.api215.js";
import i from "./cori.data.api216.js";
import j from "./cori.data.api217.js";
import v from "./cori.data.api218.js";
import x from "./cori.data.api219.js";
import y from "./cori.data.api220.js";
import h from "./cori.data.api221.js";
import k from "./cori.data.api222.js";
import q from "./cori.data.api223.js";
import w from "./cori.data.api224.js";
import z from "./cori.data.api225.js";
import A from "./cori.data.api226.js";
import B from "./cori.data.api227.js";
import { count as C } from "./cori.data.api17.js";
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
//# sourceMappingURL=cori.data.api164.js.map
