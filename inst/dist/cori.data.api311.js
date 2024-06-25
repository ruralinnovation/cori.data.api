/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function u(l, r) {
  if (l.options.allowDangerousHtml) {
    const t = { type: "raw", value: r.value };
    return l.patch(r, t), l.applyData(r, t);
  }
}
export {
  u as html
};
//# sourceMappingURL=cori.data.api311.js.map
