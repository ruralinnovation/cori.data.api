/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const t = /^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/;
function a(d) {
  return d.match(t) && !isNaN(Date.parse(d));
}
export {
  a as default
};
//# sourceMappingURL=cori.data.api408.js.map
