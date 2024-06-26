import { Field as h } from "./cori.data.api498.js";
import { List as l } from "./cori.data.api411.js";
import { OffsetsBufferBuilder as u } from "./cori.data.api507.js";
import { VariableWidthBuilder as c } from "./cori.data.api503.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class B extends c {
  constructor(e) {
    super(e), this._offsets = new u(e.type);
  }
  addChild(e, t = "0") {
    if (this.numChildren > 0)
      throw new Error("ListBuilder can only have one child.");
    return this.children[this.numChildren] = e, this.type = new l(new h(t, e.type, !0)), this.numChildren - 1;
  }
  _flushPending(e) {
    const t = this._offsets, [f] = this.children;
    for (const [i, r] of e)
      if (typeof r > "u")
        t.set(i, 0);
      else {
        const n = r, o = n.length, d = t.set(i, o).buffer[i];
        for (let s = -1; ++s < o; )
          f.set(d + s, n[s]);
      }
  }
}
export {
  B as ListBuilder
};
//# sourceMappingURL=cori.data.api619.js.map
