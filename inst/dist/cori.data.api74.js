import a from "./cori.data.api59.js";
import h from "./cori.data.api264.js";
import m from "./cori.data.api265.js";
import u from "./cori.data.api266.js";
import d from "./cori.data.api70.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const s = {
  http: h,
  xhr: m,
  fetch: u
};
a.forEach(s, (e, n) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: n });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: n });
  }
});
const c = (e) => `- ${e}`, b = (e) => a.isFunction(e) || e === null || e === !1, y = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: n } = e;
    let o, r;
    const p = {};
    for (let t = 0; t < n; t++) {
      o = e[t];
      let i;
      if (r = o, !b(o) && (r = s[(i = String(o)).toLowerCase()], r === void 0))
        throw new d(`Unknown adapter '${i}'`);
      if (r)
        break;
      p[i || "#" + t] = r;
    }
    if (!r) {
      const t = Object.entries(p).map(
        ([f, l]) => `adapter ${f} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = n ? t.length > 1 ? `since :
` + t.map(c).join(`
`) : " " + c(t[0]) : "as no adapter specified";
      throw new d(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: s
};
export {
  y as default
};
//# sourceMappingURL=cori.data.api74.js.map
