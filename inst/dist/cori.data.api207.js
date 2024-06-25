import s from "./cori.data.api208.js";
import m from "./cori.data.api209.js";
import a from "./cori.data.api210.js";
import l from "./cori.data.api211.js";
import p from "./cori.data.api212.js";
import f from "./cori.data.api213.js";
import _ from "./cori.data.api214.js";
import c from "./cori.data.api215.js";
import d from "./cori.data.api216.js";
import y from "./cori.data.api217.js";
import h from "./cori.data.api218.js";
import w from "./cori.data.api219.js";
import u from "./cori.data.api220.js";
import T from "./cori.data.api221.js";
import g from "./cori.data.api222.js";
import x from "./cori.data.api223.js";
import v from "./cori.data.api224.js";
import C from "./cori.data.api225.js";
import b from "./cori.data.api226.js";
import z from "./cori.data.api227.js";
import A from "./cori.data.api165.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var S = 0;
function r(o, i, e, n) {
  this._groups = o, this._parents = i, this._name = e, this._id = n;
}
function W() {
  return ++S;
}
var t = A.prototype;
r.prototype = {
  constructor: r,
  select: h,
  selectAll: w,
  selectChild: t.selectChild,
  selectChildren: t.selectChildren,
  filter: _,
  merge: c,
  selection: u,
  transition: C,
  call: t.call,
  nodes: t.nodes,
  node: t.node,
  size: t.size,
  empty: t.empty,
  each: t.each,
  on: d,
  attr: s,
  attrTween: m,
  style: T,
  styleTween: g,
  text: x,
  textTween: v,
  remove: y,
  tween: b,
  delay: a,
  duration: l,
  ease: p,
  easeVarying: f,
  end: z,
  [Symbol.iterator]: t[Symbol.iterator]
};
export {
  r as Transition,
  W as newId
};
//# sourceMappingURL=cori.data.api207.js.map
