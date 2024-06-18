import c from "./cori.data.api62.js";
import m from "./cori.data.api63.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const b = (a, l, u = 3) => {
  let d = 0;
  const p = c(50, 250);
  return m((o) => {
    const t = o.loaded, e = o.lengthComputable ? o.total : void 0, s = t - d, n = p(s), i = t <= e;
    d = t;
    const r = {
      loaded: t,
      total: e,
      progress: e ? t / e : void 0,
      bytes: s,
      rate: n || void 0,
      estimated: n && e && i ? (e - t) / n : void 0,
      event: o,
      lengthComputable: e != null
    };
    r[l ? "download" : "upload"] = !0, a(r);
  }, u);
};
export {
  b as default
};
