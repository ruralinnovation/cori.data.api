import { blockquote as r } from "./cori.data.api304.js";
import { hardBreak as m } from "./cori.data.api305.js";
import { code as t } from "./cori.data.api306.js";
import { strikethrough as e } from "./cori.data.api307.js";
import { emphasis as i } from "./cori.data.api308.js";
import { footnoteReference as f } from "./cori.data.api309.js";
import { heading as p } from "./cori.data.api310.js";
import { html as n } from "./cori.data.api311.js";
import { imageReference as a } from "./cori.data.api312.js";
import { image as l } from "./cori.data.api313.js";
import { inlineCode as d } from "./cori.data.api314.js";
import { linkReference as h } from "./cori.data.api315.js";
import { link as c } from "./cori.data.api316.js";
import { listItem as s } from "./cori.data.api317.js";
import { list as g } from "./cori.data.api318.js";
import { paragraph as k } from "./cori.data.api319.js";
import { root as b } from "./cori.data.api320.js";
import { strong as u } from "./cori.data.api321.js";
import { table as R } from "./cori.data.api322.js";
import { tableRow as x } from "./cori.data.api323.js";
import { tableCell as B } from "./cori.data.api324.js";
import { text as C } from "./cori.data.api325.js";
import { thematicBreak as q } from "./cori.data.api326.js";
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
//# sourceMappingURL=cori.data.api303.js.map
