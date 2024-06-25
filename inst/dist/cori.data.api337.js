import { create as n } from "./cori.data.api465.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const r = n({
  space: "xlink",
  transform(e, l) {
    return "xlink:" + l.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
});
export {
  r as xlink
};
//# sourceMappingURL=cori.data.api337.js.map
