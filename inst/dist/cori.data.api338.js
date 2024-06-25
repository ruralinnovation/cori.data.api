import { create as e } from "./cori.data.api465.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const o = e({
  space: "xml",
  transform(r, l) {
    return "xml:" + l.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
export {
  o as xml
};
//# sourceMappingURL=cori.data.api338.js.map
