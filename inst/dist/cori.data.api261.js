import { blockquote as r } from "./cori.data.api262.js";
import { hardBreak as m } from "./cori.data.api263.js";
import { code as t } from "./cori.data.api264.js";
import { strikethrough as e } from "./cori.data.api265.js";
import { emphasis as i } from "./cori.data.api266.js";
import { footnoteReference as f } from "./cori.data.api267.js";
import { heading as p } from "./cori.data.api268.js";
import { html as n } from "./cori.data.api269.js";
import { imageReference as a } from "./cori.data.api270.js";
import { image as l } from "./cori.data.api271.js";
import { inlineCode as d } from "./cori.data.api272.js";
import { linkReference as h } from "./cori.data.api273.js";
import { link as c } from "./cori.data.api274.js";
import { listItem as s } from "./cori.data.api275.js";
import { list as g } from "./cori.data.api276.js";
import { paragraph as k } from "./cori.data.api277.js";
import { root as b } from "./cori.data.api278.js";
import { strong as u } from "./cori.data.api279.js";
import { table as R } from "./cori.data.api280.js";
import { tableRow as x } from "./cori.data.api281.js";
import { tableCell as B } from "./cori.data.api282.js";
import { text as C } from "./cori.data.api283.js";
import { thematicBreak as q } from "./cori.data.api284.js";
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
//# sourceMappingURL=cori.data.api261.js.map
