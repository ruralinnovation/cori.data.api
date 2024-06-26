import r from "./cori.data.api260.js";
import { Table as t } from "./cori.data.api400.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const o = () => r(
  "Apache Arrow not imported, see https://github.com/uwdata/arquero#usage"
);
function i() {
  try {
    return t;
  } catch {
    o();
  }
}
export {
  i as table
};
//# sourceMappingURL=cori.data.api299.js.map
