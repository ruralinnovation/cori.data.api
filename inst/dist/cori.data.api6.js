import a from "./cori.data.api19.js";
import p from "./cori.data.api20.js";
import m from "./cori.data.api21.js";
import i from "./cori.data.api22.js";
import f from "./cori.data.api23.js";
import l from "./cori.data.api24.js";
import c from "./cori.data.api25.js";
import d from "./cori.data.api26.js";
import u from "./cori.data.api27.js";
import { VERSION as x } from "./cori.data.api28.js";
import C from "./cori.data.api29.js";
import A from "./cori.data.api30.js";
import E from "./cori.data.api31.js";
import O from "./cori.data.api32.js";
import S from "./cori.data.api33.js";
import H from "./cori.data.api34.js";
import T from "./cori.data.api35.js";
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
//# sourceMappingURL=cori.data.api6.js.map
