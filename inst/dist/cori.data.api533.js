import i from "./cori.data.api280.js";
import f from "./cori.data.api273.js";
import s from "./cori.data.api320.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function a(t, e) {
  const n = i();
  return e.forEach((r, o) => {
    const c = s(r) ? r : o;
    if (c) {
      const m = t.column(o) || f(`Unrecognized column: ${o}`);
      n.add(c, m);
    }
  }), t.create(n);
}
export {
  a as default
};
//# sourceMappingURL=cori.data.api533.js.map
