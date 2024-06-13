import { __module as e } from "./cori.data.api10.js";
import { __require as o } from "./cori.data.api11.js";
import { __require as t } from "./cori.data.api12.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var r;
function s() {
  return r ? e.exports : (r = 1, process.env.NODE_ENV === "production" ? e.exports = o() : e.exports = t(), e.exports);
}
export {
  s as __require
};
