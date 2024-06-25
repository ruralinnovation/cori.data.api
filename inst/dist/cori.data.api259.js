import R from "./cori.data.api57.js";
import x from "./cori.data.api372.js";
import b from "./cori.data.api254.js";
import n from "./cori.data.api68.js";
import y from "./cori.data.api63.js";
import H from "./cori.data.api373.js";
import q from "./cori.data.api256.js";
import T from "./cori.data.api71.js";
import g from "./cori.data.api374.js";
import A from "./cori.data.api375.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const C = typeof XMLHttpRequest < "u", X = C && function(l) {
  return new Promise(function(h, r) {
    const t = A(l);
    let p = t.data;
    const m = T.from(t.headers).normalize();
    let { responseType: i } = t, s;
    function c() {
      t.cancelToken && t.cancelToken.unsubscribe(s), t.signal && t.signal.removeEventListener("abort", s);
    }
    let e = new XMLHttpRequest();
    e.open(t.method.toUpperCase(), t.url, !0), e.timeout = t.timeout;
    function E() {
      if (!e)
        return;
      const o = T.from(
        "getAllResponseHeaders" in e && e.getAllResponseHeaders()
      ), u = {
        data: !i || i === "text" || i === "json" ? e.responseText : e.response,
        status: e.status,
        statusText: e.statusText,
        headers: o,
        config: l,
        request: e
      };
      x(function(f) {
        h(f), c();
      }, function(f) {
        r(f), c();
      }, u), e = null;
    }
    "onloadend" in e ? e.onloadend = E : e.onreadystatechange = function() {
      !e || e.readyState !== 4 || e.status === 0 && !(e.responseURL && e.responseURL.indexOf("file:") === 0) || setTimeout(E);
    }, e.onabort = function() {
      e && (r(new n("Request aborted", n.ECONNABORTED, t, e)), e = null);
    }, e.onerror = function() {
      r(new n("Network Error", n.ERR_NETWORK, t, e)), e = null;
    }, e.ontimeout = function() {
      let a = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
      const u = t.transitional || b;
      t.timeoutErrorMessage && (a = t.timeoutErrorMessage), r(new n(
        a,
        u.clarifyTimeoutError ? n.ETIMEDOUT : n.ECONNABORTED,
        t,
        e
      )), e = null;
    }, p === void 0 && m.setContentType(null), "setRequestHeader" in e && R.forEach(m.toJSON(), function(a, u) {
      e.setRequestHeader(u, a);
    }), R.isUndefined(t.withCredentials) || (e.withCredentials = !!t.withCredentials), i && i !== "json" && (e.responseType = t.responseType), typeof t.onDownloadProgress == "function" && e.addEventListener("progress", g(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && e.upload && e.upload.addEventListener("progress", g(t.onUploadProgress)), (t.cancelToken || t.signal) && (s = (o) => {
      e && (r(!o || o.type ? new y(null, l, e) : o), e.abort(), e = null);
    }, t.cancelToken && t.cancelToken.subscribe(s), t.signal && (t.signal.aborted ? s() : t.signal.addEventListener("abort", s)));
    const d = H(t.url);
    if (d && q.protocols.indexOf(d) === -1) {
      r(new n("Unsupported protocol " + d + ":", n.ERR_BAD_REQUEST, l));
      return;
    }
    e.send(p || null);
  });
};
export {
  X as default
};
//# sourceMappingURL=cori.data.api259.js.map
