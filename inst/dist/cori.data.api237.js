/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function e(t, h) {
  const { style: l } = t;
  h.backgroundColor && (l.backgroundColor = h.backgroundColor), h.width && (l.width = `${h.width}px`), h.height && (l.height = `${h.height}px`);
  const r = h.style;
  return r != null && Object.keys(r).forEach((c) => {
    l[c] = r[c];
  }), t;
}
export {
  e as applyStyle
};
//# sourceMappingURL=cori.data.api237.js.map
