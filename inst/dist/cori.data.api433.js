import n from "./cori.data.api521.js";
import t from "./cori.data.api281.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function a(e, m) {
  const o = /* @__PURE__ */ new Map();
  return e.columnNames((r) => (o.set(r, r), 0)), n(e, t(e, m, o));
}
export {
  a as default
};
//# sourceMappingURL=cori.data.api433.js.map
