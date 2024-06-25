import r from "./cori.data.api125.js";
import i from "./cori.data.api126.js";
import m from "./cori.data.api127.js";
import l from "./cori.data.api128.js";
import n from "./cori.data.api129.js";
import s from "./cori.data.api130.js";
import c from "./cori.data.api131.js";
import p from "./cori.data.api132.js";
import f from "./cori.data.api133.js";
import _ from "./cori.data.api134.js";
import a from "./cori.data.api135.js";
import d from "./cori.data.api136.js";
import h from "./cori.data.api137.js";
import u from "./cori.data.api138.js";
import y from "./cori.data.api139.js";
import x from "./cori.data.api140.js";
import C from "./cori.data.api141.js";
import g from "./cori.data.api142.js";
import v from "./cori.data.api143.js";
import w from "./cori.data.api144.js";
import j from "./cori.data.api145.js";
import z from "./cori.data.api146.js";
import A from "./cori.data.api147.js";
import S from "./cori.data.api148.js";
import b from "./cori.data.api149.js";
import E from "./cori.data.api150.js";
import k from "./cori.data.api151.js";
import q from "./cori.data.api152.js";
import B from "./cori.data.api153.js";
import D from "./cori.data.api154.js";
import F from "./cori.data.api155.js";
import G from "./cori.data.api156.js";
import H from "./cori.data.api157.js";
import I from "./cori.data.api158.js";
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
//# sourceMappingURL=cori.data.api124.js.map
