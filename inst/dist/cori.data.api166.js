import s from "./cori.data.api167.js";
import m from "./cori.data.api168.js";
import a from "./cori.data.api169.js";
import l from "./cori.data.api170.js";
import p from "./cori.data.api171.js";
import f from "./cori.data.api172.js";
import _ from "./cori.data.api173.js";
import c from "./cori.data.api174.js";
import d from "./cori.data.api175.js";
import y from "./cori.data.api176.js";
import h from "./cori.data.api177.js";
import w from "./cori.data.api178.js";
import u from "./cori.data.api179.js";
import T from "./cori.data.api180.js";
import g from "./cori.data.api181.js";
import x from "./cori.data.api182.js";
import v from "./cori.data.api183.js";
import C from "./cori.data.api184.js";
import b from "./cori.data.api185.js";
import z from "./cori.data.api186.js";
import A from "./cori.data.api124.js";
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
//# sourceMappingURL=cori.data.api166.js.map
