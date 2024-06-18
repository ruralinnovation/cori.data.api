import i from "./cori.data.api18.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function o(r) {
  return i.isObject(r) && r.isAxiosError === !0;
}
export {
  o as default
};
