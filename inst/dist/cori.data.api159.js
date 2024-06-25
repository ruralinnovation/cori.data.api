import r from "./cori.data.api160.js";
import i from "./cori.data.api161.js";
import m from "./cori.data.api162.js";
import l from "./cori.data.api163.js";
import n from "./cori.data.api164.js";
import s from "./cori.data.api165.js";
import c from "./cori.data.api166.js";
import p from "./cori.data.api167.js";
import f from "./cori.data.api168.js";
import _ from "./cori.data.api169.js";
import a from "./cori.data.api170.js";
import d from "./cori.data.api171.js";
import h from "./cori.data.api172.js";
import u from "./cori.data.api173.js";
import y from "./cori.data.api174.js";
import x from "./cori.data.api175.js";
import C from "./cori.data.api176.js";
import g from "./cori.data.api177.js";
import v from "./cori.data.api178.js";
import w from "./cori.data.api179.js";
import j from "./cori.data.api180.js";
import z from "./cori.data.api181.js";
import A from "./cori.data.api182.js";
import S from "./cori.data.api183.js";
import b from "./cori.data.api184.js";
import E from "./cori.data.api185.js";
import k from "./cori.data.api186.js";
import q from "./cori.data.api187.js";
import B from "./cori.data.api188.js";
import D from "./cori.data.api189.js";
import F from "./cori.data.api190.js";
import G from "./cori.data.api191.js";
import H from "./cori.data.api192.js";
import I from "./cori.data.api193.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var J = [null];
function e(o, t) {
  this._groups = o, this._parents = t;
}
function K() {
  return new e([[document.documentElement]], J);
}
function L() {
  return this;
}
e.prototype = K.prototype = {
  constructor: e,
  select: r,
  selectAll: i,
  selectChild: m,
  selectChildren: l,
  filter: n,
  data: s,
  enter: c,
  exit: p,
  join: f,
  merge: _,
  selection: L,
  order: a,
  sort: d,
  call: h,
  nodes: u,
  node: y,
  size: x,
  empty: C,
  each: g,
  attr: v,
  style: w,
  property: j,
  classed: z,
  text: A,
  html: S,
  raise: b,
  lower: E,
  append: k,
  insert: q,
  remove: B,
  clone: D,
  datum: F,
  on: G,
  dispatch: H,
  [Symbol.iterator]: I
};
export {
  e as Selection,
  K as default,
  J as root
};
//# sourceMappingURL=cori.data.api159.js.map
