/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function r(c) {
  const i = String(c), o = /\r?\n|\r/g;
  let e = o.exec(i), t = 0;
  const n = [];
  for (; e; )
    n.push(
      s(i.slice(t, e.index), t > 0, !0),
      e[0]
    ), t = e.index + e[0].length, e = o.exec(i);
  return n.push(s(i.slice(t), t > 0, !1)), n.join("");
}
function s(c, i, o) {
  let e = 0, t = c.length;
  if (i) {
    let n = c.codePointAt(e);
    for (; n === 9 || n === 32; )
      e++, n = c.codePointAt(e);
  }
  if (o) {
    let n = c.codePointAt(t - 1);
    for (; n === 9 || n === 32; )
      t--, n = c.codePointAt(t - 1);
  }
  return t > e ? c.slice(e, t) : "";
}
export {
  r as trimLines
};
//# sourceMappingURL=cori.data.api475.js.map
