import { __module as e } from "./cori.data.api4.js";
import { __require as r } from "./cori.data.api5.js";
import { __require as o } from "./cori.data.api6.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
process.env.NODE_ENV === "production" ? e.exports = r() : e.exports = o();
var m = e.exports;
export {
  m as j
};
