import { __exports as t } from "./cori.data.api44.js";
import { r as y } from "./cori.data.api10.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var p;
function O() {
  if (p)
    return t;
  p = 1;
  var s = y, m = Symbol.for("react.element"), c = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, a = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(o, r, u) {
    var e, n = {}, _ = null, f = null;
    u !== void 0 && (_ = "" + u), r.key !== void 0 && (_ = "" + r.key), r.ref !== void 0 && (f = r.ref);
    for (e in r)
      l.call(r, e) && !d.hasOwnProperty(e) && (n[e] = r[e]);
    if (o && o.defaultProps)
      for (e in r = o.defaultProps, r)
        n[e] === void 0 && (n[e] = r[e]);
    return { $$typeof: m, type: o, key: _, ref: f, props: n, _owner: a.current };
  }
  return t.Fragment = c, t.jsx = i, t.jsxs = i, t;
}
export {
  O as __require
};
//# sourceMappingURL=cori.data.api29.js.map
