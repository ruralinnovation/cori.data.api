import { Field as o } from "./cori.data.api498.js";
import { Map_ as f } from "./cori.data.api411.js";
import { VariableWidthBuilder as l } from "./cori.data.api502.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class m extends l {
  set(t, e) {
    return super.set(t, e);
  }
  setValue(t, e) {
    const s = e instanceof Map ? e : new Map(Object.entries(e)), n = this._pending || (this._pending = /* @__PURE__ */ new Map()), i = n.get(t);
    i && (this._pendingLength -= i.size), this._pendingLength += s.size, n.set(t, s);
  }
  addChild(t, e = `${this.numChildren}`) {
    if (this.numChildren > 0)
      throw new Error("ListBuilder can only have one child.");
    return this.children[this.numChildren] = t, this.type = new f(new o(e, t.type, !0), this.type.keysSorted), this.numChildren - 1;
  }
  _flushPending(t) {
    const e = this._offsets, [s] = this.children;
    for (const [n, i] of t)
      if (i === void 0)
        e.set(n, 0);
      else {
        let { [n]: r, [n + 1]: d } = e.set(n, i.size).buffer;
        for (const h of i.entries())
          if (s.set(r, h), ++r >= d)
            break;
      }
  }
}
export {
  m as MapBuilder
};
//# sourceMappingURL=cori.data.api621.js.map
