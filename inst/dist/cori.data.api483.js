import t from "./cori.data.api531.js";
import a from "./cori.data.api532.js";
import d from "./cori.data.api533.js";
import u from "./cori.data.api534.js";
import m from "./cori.data.api535.js";
import n from "./cori.data.api536.js";
import c from "./cori.data.api537.js";
import { Type as e } from "./cori.data.api485.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function D(i, o, l = !0) {
  let r;
  switch (i.typeId) {
    case e.Int:
      r = i.bitWidth < 64 ? t : null;
      break;
    case e.Float:
      r = i.precision > 0 ? t : null;
      break;
    case e.Dictionary:
      r = i.dictionary.typeId === e.Utf8 && i.indices.typeId === e.Int && i.indices.bitWidth < 64 ? n : null;
      break;
    case e.Bool:
      r = a;
      break;
    case e.Date:
      r = i.unit ? u : d;
      break;
  }
  return r == null ? m(i) : l ? c(r(i, o), o) : r(i, o);
}
export {
  D as default
};
//# sourceMappingURL=cori.data.api483.js.map
