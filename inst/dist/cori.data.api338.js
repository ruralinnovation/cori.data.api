import { blockquote as r } from "./cori.data.api339.js";
import { hardBreak as m } from "./cori.data.api340.js";
import { code as t } from "./cori.data.api341.js";
import { strikethrough as e } from "./cori.data.api342.js";
import { emphasis as i } from "./cori.data.api343.js";
import { footnoteReference as f } from "./cori.data.api344.js";
import { heading as p } from "./cori.data.api345.js";
import { html as n } from "./cori.data.api346.js";
import { imageReference as a } from "./cori.data.api347.js";
import { image as l } from "./cori.data.api348.js";
import { inlineCode as d } from "./cori.data.api349.js";
import { linkReference as h } from "./cori.data.api350.js";
import { link as c } from "./cori.data.api351.js";
import { listItem as s } from "./cori.data.api352.js";
import { list as g } from "./cori.data.api353.js";
import { paragraph as k } from "./cori.data.api354.js";
import { root as b } from "./cori.data.api355.js";
import { strong as u } from "./cori.data.api356.js";
import { table as R } from "./cori.data.api357.js";
import { tableRow as x } from "./cori.data.api358.js";
import { tableCell as B } from "./cori.data.api359.js";
import { text as C } from "./cori.data.api360.js";
import { thematicBreak as q } from "./cori.data.api361.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const V = {
  blockquote: r,
  break: m,
  code: t,
  delete: e,
  emphasis: i,
  footnoteReference: f,
  heading: p,
  html: n,
  imageReference: a,
  image: l,
  inlineCode: d,
  linkReference: h,
  link: c,
  listItem: s,
  list: g,
  paragraph: k,
  // @ts-expect-error: root is different, but hard to type.
  root: b,
  strong: u,
  table: R,
  tableCell: B,
  tableRow: x,
  text: C,
  thematicBreak: q,
  toml: o,
  yaml: o,
  definition: o,
  footnoteDefinition: o
};
function o() {
}
export {
  V as handlers
};
//# sourceMappingURL=cori.data.api338.js.map
