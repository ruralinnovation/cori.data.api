/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function p(e, r, ...n) {
  const t = ["_", "$"], o = t.slice(0, n.length);
  return o.push(
    '"use strict"; const ' + n.map(($, u) => $.map((a, c) => `${t[u]}${c} = ${t[u]}[${c}]`).join(", ")).join(", ") + `; return (${e}) => ${r};`
  ), Function(...o)(...n);
}
export {
  p as default
};
//# sourceMappingURL=cori.data.api255.js.map
