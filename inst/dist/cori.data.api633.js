import { splice as a } from "./cori.data.api657.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const s = {}.hasOwnProperty;
function d(t) {
  const e = {};
  let n = -1;
  for (; ++n < t.length; )
    l(e, t[n]);
  return e;
}
function l(t, e) {
  let n;
  for (n in e) {
    const i = (s.call(t, n) ? t[n] : void 0) || (t[n] = {}), f = e[n];
    let o;
    if (f)
      for (o in f) {
        s.call(i, o) || (i[o] = []);
        const r = f[o];
        h(
          // @ts-expect-error Looks like a list.
          i[o],
          Array.isArray(r) ? r : r ? [r] : []
        );
      }
  }
}
function h(t, e) {
  let n = -1;
  const c = [];
  for (; ++n < e.length; )
    (e[n].add === "after" ? t : c).push(e[n]);
  a(t, 0, 0, c);
}
export {
  d as combineExtensions
};
//# sourceMappingURL=cori.data.api633.js.map
