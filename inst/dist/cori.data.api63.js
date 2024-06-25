import i from "./cori.data.api60.js";
import h from "./cori.data.api74.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const c = (s) => s instanceof h ? { ...s } : s;
function C(s, o) {
  o = o || {};
  const f = {};
  function d(t, e, r) {
    return i.isPlainObject(t) && i.isPlainObject(e) ? i.merge.call({ caseless: r }, t, e) : i.isPlainObject(e) ? i.merge({}, e) : i.isArray(e) ? e.slice() : e;
  }
  function u(t, e, r) {
    if (i.isUndefined(e)) {
      if (!i.isUndefined(t))
        return d(void 0, t, r);
    } else
      return d(t, e, r);
  }
  function a(t, e) {
    if (!i.isUndefined(e))
      return d(void 0, e);
  }
  function n(t, e) {
    if (i.isUndefined(e)) {
      if (!i.isUndefined(t))
        return d(void 0, t);
    } else
      return d(void 0, e);
  }
  function l(t, e, r) {
    if (r in o)
      return d(t, e);
    if (r in s)
      return d(void 0, t);
  }
  const g = {
    url: a,
    method: a,
    data: a,
    baseURL: n,
    transformRequest: n,
    transformResponse: n,
    paramsSerializer: n,
    timeout: n,
    timeoutMessage: n,
    withCredentials: n,
    withXSRFToken: n,
    adapter: n,
    responseType: n,
    xsrfCookieName: n,
    xsrfHeaderName: n,
    onUploadProgress: n,
    onDownloadProgress: n,
    decompress: n,
    maxContentLength: n,
    maxBodyLength: n,
    beforeRedirect: n,
    transport: n,
    httpAgent: n,
    httpsAgent: n,
    cancelToken: n,
    socketPath: n,
    responseEncoding: n,
    validateStatus: l,
    headers: (t, e) => u(c(t), c(e), !0)
  };
  return i.forEach(Object.keys(Object.assign({}, s, o)), function(e) {
    const r = g[e] || u, m = r(s[e], o[e], e);
    i.isUndefined(m) && r !== l || (f[e] = m);
  }), f;
}
export {
  C as default
};
//# sourceMappingURL=cori.data.api63.js.map
