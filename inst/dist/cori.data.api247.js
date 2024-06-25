/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const f = e("end"), s = e("start");
function e(o) {
  return i;
  function i(t) {
    const n = t && t.position && t.position[o] || {};
    if (typeof n.line == "number" && n.line > 0 && typeof n.column == "number" && n.column > 0)
      return {
        line: n.line,
        column: n.column,
        offset: typeof n.offset == "number" && n.offset > -1 ? n.offset : void 0
      };
  }
}
function u(o) {
  const i = s(o), t = f(o);
  if (i && t)
    return { start: i, end: t };
}
export {
  f as pointEnd,
  s as pointStart,
  u as position
};
//# sourceMappingURL=cori.data.api247.js.map
