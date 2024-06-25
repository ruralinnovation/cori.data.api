import m from "./cori.data.api531.js";
import s from "./cori.data.api333.js";
import f from "./cori.data.api634.js";
import a from "./cori.data.api373.js";
import c from "./cori.data.api380.js";
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
//# sourceMappingURL=cori.data.api528.js.map
