/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function s(i, e) {
  const f = e.referenceType;
  let l = "]";
  if (f === "collapsed" ? l += "[]" : f === "full" && (l += "[" + (e.label || e.identifier) + "]"), e.type === "imageReference")
    return [{ type: "text", value: "![" + e.alt + l }];
  const t = i.all(e), u = t[0];
  u && u.type === "text" ? u.value = "[" + u.value : t.unshift({ type: "text", value: "[" });
  const a = t[t.length - 1];
  return a && a.type === "text" ? a.value += l : t.push({ type: "text", value: l }), t;
}
export {
  s as revert
};
//# sourceMappingURL=cori.data.api457.js.map
