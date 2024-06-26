import { r as _ } from "./cori.data.api97.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var r, t = _;
if (process.env.NODE_ENV === "production")
  r = t.createRoot, t.hydrateRoot;
else {
  var o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  r = function(e, n) {
    o.usingClientEntryPoint = !0;
    try {
      return t.createRoot(e, n);
    } finally {
      o.usingClientEntryPoint = !1;
    }
  };
}
export {
  r as createRoot
};
//# sourceMappingURL=cori.data.api59.js.map
