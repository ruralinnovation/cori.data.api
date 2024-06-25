import a from "./cori.data.api206.js";
import p from "./cori.data.api207.js";
import m from "./cori.data.api208.js";
import i from "./cori.data.api209.js";
import f from "./cori.data.api210.js";
import l from "./cori.data.api211.js";
import c from "./cori.data.api212.js";
import d from "./cori.data.api213.js";
import u from "./cori.data.api214.js";
import { VERSION as x } from "./cori.data.api215.js";
import C from "./cori.data.api216.js";
import A from "./cori.data.api217.js";
import E from "./cori.data.api218.js";
import O from "./cori.data.api219.js";
import S from "./cori.data.api220.js";
import H from "./cori.data.api221.js";
import T from "./cori.data.api222.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function n(o) {
  const t = new m(o), e = p(m.prototype.request, t);
  return a.extend(e, m.prototype, t, { allOwnKeys: !0 }), a.extend(e, t, null, { allOwnKeys: !0 }), e.create = function(s) {
    return n(i(o, s));
  }, e;
}
const r = n(f);
r.Axios = m;
r.CanceledError = c;
r.CancelToken = d;
r.isCancel = u;
r.VERSION = x;
r.toFormData = C;
r.AxiosError = A;
r.Cancel = r.CanceledError;
r.all = function(t) {
  return Promise.all(t);
};
r.spread = E;
r.isAxiosError = O;
r.mergeConfig = i;
r.AxiosHeaders = S;
r.formToJSON = (o) => l(a.isHTMLForm(o) ? new FormData(o) : o);
r.getAdapter = H.getAdapter;
r.HttpStatusCode = T;
r.default = r;
export {
  r as default
};
//# sourceMappingURL=cori.data.api25.js.map
