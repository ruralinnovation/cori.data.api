import r from "./cori.data.api68.js";
import i from "./cori.data.api57.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function l(o, t, e) {
  r.call(this, o ?? "canceled", r.ERR_CANCELED, t, e), this.name = "CanceledError";
}
i.inherits(l, r, {
  __CANCEL__: !0
});
export {
  l as default
};
//# sourceMappingURL=cori.data.api63.js.map
