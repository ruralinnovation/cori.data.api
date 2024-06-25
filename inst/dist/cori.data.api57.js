import n from "./cori.data.api43.js";
import p from "./cori.data.api19.js";
import h from "./cori.data.api65.js";
import c from "./cori.data.api66.js";
import C from "./cori.data.api39.js";
import w from "./cori.data.api22.js";
import S from "./cori.data.api33.js";
import b from "./cori.data.api36.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const F = (s) => {
  const e = w({}, s);
  let { data: l, withXSRFToken: o, xsrfHeaderName: m, xsrfCookieName: f, headers: r, auth: t } = e;
  e.headers = r = S.from(r), e.url = b(C(e.baseURL, e.url), s.params, s.paramsSerializer), t && r.set(
    "Authorization",
    "Basic " + btoa((t.username || "") + ":" + (t.password ? unescape(encodeURIComponent(t.password)) : ""))
  );
  let i;
  if (p.isFormData(l)) {
    if (n.hasStandardBrowserEnv || n.hasStandardBrowserWebWorkerEnv)
      r.setContentType(void 0);
    else if ((i = r.getContentType()) !== !1) {
      const [a, ...d] = i ? i.split(";").map((u) => u.trim()).filter(Boolean) : [];
      r.setContentType([a || "multipart/form-data", ...d].join("; "));
    }
  }
  if (n.hasStandardBrowserEnv && (o && p.isFunction(o) && (o = o(e)), o || o !== !1 && h(e.url))) {
    const a = m && f && c.read(f);
    a && r.set(m, a);
  }
  return e;
};
export {
  F as default
};
//# sourceMappingURL=cori.data.api57.js.map
