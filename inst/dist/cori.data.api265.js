import r from "./cori.data.api384.js";
import p from "./cori.data.api70.js";
import o from "./cori.data.api66.js";
import l from "./cori.data.api68.js";
import a from "./cori.data.api76.js";
import m from "./cori.data.api77.js";
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
//# sourceMappingURL=cori.data.api265.js.map
