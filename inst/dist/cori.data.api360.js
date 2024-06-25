import { blockquote as r } from "./cori.data.api361.js";
import { hardBreak as m } from "./cori.data.api362.js";
import { code as t } from "./cori.data.api363.js";
import { strikethrough as e } from "./cori.data.api364.js";
import { emphasis as i } from "./cori.data.api365.js";
import { footnoteReference as f } from "./cori.data.api366.js";
import { heading as p } from "./cori.data.api367.js";
import { html as n } from "./cori.data.api368.js";
import { imageReference as a } from "./cori.data.api369.js";
import { image as l } from "./cori.data.api370.js";
import { inlineCode as d } from "./cori.data.api371.js";
import { linkReference as h } from "./cori.data.api372.js";
import { link as c } from "./cori.data.api373.js";
import { listItem as s } from "./cori.data.api374.js";
import { list as g } from "./cori.data.api375.js";
import { paragraph as k } from "./cori.data.api376.js";
import { root as b } from "./cori.data.api377.js";
import { strong as u } from "./cori.data.api378.js";
import { table as R } from "./cori.data.api379.js";
import { tableRow as x } from "./cori.data.api380.js";
import { tableCell as B } from "./cori.data.api381.js";
import { text as C } from "./cori.data.api382.js";
import { thematicBreak as q } from "./cori.data.api383.js";
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
//# sourceMappingURL=cori.data.api360.js.map
