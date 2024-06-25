import { booleanish as a, number as r, spaceSeparated as i } from "./cori.data.api399.js";
import { create as l } from "./cori.data.api397.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const u = l({
  transform(n, e) {
    return e === "role" ? e : "aria-" + e.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: a,
    ariaAutoComplete: null,
    ariaBusy: a,
    ariaChecked: a,
    ariaColCount: r,
    ariaColIndex: r,
    ariaColSpan: r,
    ariaControls: i,
    ariaCurrent: null,
    ariaDescribedBy: i,
    ariaDetails: null,
    ariaDisabled: a,
    ariaDropEffect: i,
    ariaErrorMessage: null,
    ariaExpanded: a,
    ariaFlowTo: i,
    ariaGrabbed: a,
    ariaHasPopup: null,
    ariaHidden: a,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: i,
    ariaLevel: r,
    ariaLive: null,
    ariaModal: a,
    ariaMultiLine: a,
    ariaMultiSelectable: a,
    ariaOrientation: null,
    ariaOwns: i,
    ariaPlaceholder: null,
    ariaPosInSet: r,
    ariaPressed: a,
    ariaReadOnly: a,
    ariaRelevant: null,
    ariaRequired: a,
    ariaRoleDescription: i,
    ariaRowCount: r,
    ariaRowIndex: r,
    ariaRowSpan: r,
    ariaSelected: a,
    ariaSetSize: r,
    ariaSort: null,
    ariaValueMax: r,
    ariaValueMin: r,
    ariaValueNow: r,
    ariaValueText: null,
    role: null
  }
});
export {
  u as aria
};
//# sourceMappingURL=cori.data.api299.js.map
