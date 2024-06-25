import m from "./cori.data.api290.js";
import s from "./cori.data.api113.js";
import f from "./cori.data.api387.js";
import a from "./cori.data.api153.js";
import c from "./cori.data.api160.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function h(i, t, e) {
  if (e)
    c(e) ? e = [e, e] : a(e) && e.length === 1 && (e = [e[0], e[0]]);
  else {
    const r = f(i.columnNames(), t.columnNames());
    r.length || s("Natural join requires shared column names."), e = [r, r];
  }
  return e;
}
function g(i, t, e, r) {
  return e.length !== r.length && s("Mismatched number of join keys"), [
    m("join", i, e),
    m("join", t, r)
  ];
}
export {
  h as inferKeys,
  g as keyPredicate
};
//# sourceMappingURL=cori.data.api287.js.map
