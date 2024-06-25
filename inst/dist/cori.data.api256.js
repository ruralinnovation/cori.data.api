import t from "./cori.data.api303.js";
import a from "./cori.data.api304.js";
import d from "./cori.data.api305.js";
import u from "./cori.data.api306.js";
import m from "./cori.data.api307.js";
import n from "./cori.data.api308.js";
import c from "./cori.data.api309.js";
import { Type as e } from "./cori.data.api258.js";
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
//# sourceMappingURL=cori.data.api256.js.map
