import f from "./cori.data.api66.js";
import s from "./cori.data.api71.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const l = (t, c) => {
  let u = new AbortController(), i;
  const n = function(e) {
    if (!i) {
      i = !0, a();
      const o = e instanceof Error ? e : this.reason;
      u.abort(o instanceof s ? o : new f(o instanceof Error ? o.message : o));
    }
  };
  let r = c && setTimeout(() => {
    n(new s(`timeout ${c} of ms exceeded`, s.ETIMEDOUT));
  }, c);
  const a = () => {
    t && (r && clearTimeout(r), r = null, t.forEach((e) => {
      e && (e.removeEventListener ? e.removeEventListener("abort", n) : e.unsubscribe(n));
    }), t = null);
  };
  t.forEach((e) => e && e.addEventListener && e.addEventListener("abort", n));
  const { signal: b } = u;
  return b.unsubscribe = a, [b, () => {
    r && clearTimeout(r), r = null;
  }];
};
export {
  l as default
};
//# sourceMappingURL=cori.data.api387.js.map
