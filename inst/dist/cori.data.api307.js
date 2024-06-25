import { makeBuilder as n } from "./cori.data.api357.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function d(u) {
  const e = n({
    type: u,
    nullValues: [null, void 0]
  });
  return {
    set(l, t) {
      e.set(t, l);
    },
    data: () => e.finish().flush()
  };
}
export {
  d as default
};
//# sourceMappingURL=cori.data.api307.js.map
