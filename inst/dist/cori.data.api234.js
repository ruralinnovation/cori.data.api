import r from "./cori.data.api283.js";
import p from "./cori.data.api67.js";
import o from "./cori.data.api63.js";
import l from "./cori.data.api65.js";
import a from "./cori.data.api73.js";
import m from "./cori.data.api74.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function d(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new l(null, e);
}
function q(e) {
  return d(e), e.headers = a.from(e.headers), e.data = r.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), m.getAdapter(e.adapter || o.adapter)(e).then(function(t) {
    return d(e), t.data = r.call(
      e,
      e.transformResponse,
      t
    ), t.headers = a.from(t.headers), t;
  }, function(t) {
    return p(t) || (d(e), t && t.response && (t.response.data = r.call(
      e,
      e.transformResponse,
      t.response
    ), t.response.headers = a.from(t.response.headers))), Promise.reject(t);
  });
}
export {
  q as default
};
//# sourceMappingURL=cori.data.api234.js.map
