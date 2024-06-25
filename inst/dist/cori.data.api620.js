import { Field as u } from "./cori.data.api497.js";
import { DataBufferBuilder as r } from "./cori.data.api505.js";
import { Builder as p } from "./cori.data.api501.js";
import { Union as a } from "./cori.data.api413.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class l extends p {
  constructor(e) {
    super(e), this._typeIds = new r(Int8Array, 0, 1), typeof e.valueToChildTypeId == "function" && (this._valueToChildTypeId = e.valueToChildTypeId);
  }
  get typeIdToChildIndex() {
    return this.type.typeIdToChildIndex;
  }
  append(e, s) {
    return this.set(this.length, e, s);
  }
  set(e, s, t) {
    return t === void 0 && (t = this._valueToChildTypeId(this, s, e)), this.setValue(e, s, t), this;
  }
  setValue(e, s, t) {
    this._typeIds.set(e, t);
    const n = this.type.typeIdToChildIndex[t], i = this.children[n];
    i == null || i.set(e, s);
  }
  addChild(e, s = `${this.children.length}`) {
    const t = this.children.push(e), { type: { children: n, mode: i, typeIds: d } } = this, h = [...n, new u(s, e.type)];
    return this.type = new a(i, [...d, t], h), t;
  }
  /** @ignore */
  // @ts-ignore
  _valueToChildTypeId(e, s, t) {
    throw new Error("Cannot map UnionBuilder value to child typeId. Pass the `childTypeId` as the second argument to unionBuilder.append(), or supply a `valueToChildTypeId` function as part of the UnionBuilder constructor options.");
  }
}
class T extends l {
}
class C extends l {
  constructor(e) {
    super(e), this._offsets = new r(Int32Array);
  }
  /** @ignore */
  setValue(e, s, t) {
    const n = this._typeIds.set(e, t).buffer[e], i = this.getChildAt(this.type.typeIdToChildIndex[n]), d = this._offsets.set(e, i.length).buffer[e];
    i == null || i.set(d, s);
  }
}
export {
  C as DenseUnionBuilder,
  T as SparseUnionBuilder,
  l as UnionBuilder
};
//# sourceMappingURL=cori.data.api620.js.map
