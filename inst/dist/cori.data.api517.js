import { __awaiter as t } from "./cori.data.api502.js";
import i from "./cori.data.api501.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const s = Object.freeze({ done: !0, value: void 0 });
class n {
  tee() {
    return this._getDOMStream().tee();
  }
  pipe(e, r) {
    return this._getNodeStream().pipe(e, r);
  }
  pipeTo(e, r) {
    return this._getDOMStream().pipeTo(e, r);
  }
  pipeThrough(e, r) {
    return this._getDOMStream().pipeThrough(e, r);
  }
  _getDOMStream() {
    return this._DOMStream || (this._DOMStream = this.toDOMStream());
  }
  _getNodeStream() {
    return this._nodeStream || (this._nodeStream = this.toNodeStream());
  }
}
class d extends n {
  constructor() {
    super(), this._values = [], this.resolvers = [], this._closedPromise = new Promise((e) => this._closedPromiseResolve = e);
  }
  get closed() {
    return this._closedPromise;
  }
  cancel(e) {
    return t(this, void 0, void 0, function* () {
      yield this.return(e);
    });
  }
  write(e) {
    this._ensureOpen() && (this.resolvers.length <= 0 ? this._values.push(e) : this.resolvers.shift().resolve({ done: !1, value: e }));
  }
  abort(e) {
    this._closedPromiseResolve && (this.resolvers.length <= 0 ? this._error = { error: e } : this.resolvers.shift().reject({ done: !0, value: e }));
  }
  close() {
    if (this._closedPromiseResolve) {
      const { resolvers: e } = this;
      for (; e.length > 0; )
        e.shift().resolve(s);
      this._closedPromiseResolve(), this._closedPromiseResolve = void 0;
    }
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  toDOMStream(e) {
    return i.toDOMStream(this._closedPromiseResolve || this._error ? this : this._values, e);
  }
  toNodeStream(e) {
    return i.toNodeStream(this._closedPromiseResolve || this._error ? this : this._values, e);
  }
  throw(e) {
    return t(this, void 0, void 0, function* () {
      return yield this.abort(e), s;
    });
  }
  return(e) {
    return t(this, void 0, void 0, function* () {
      return yield this.close(), s;
    });
  }
  read(e) {
    return t(this, void 0, void 0, function* () {
      return (yield this.next(e, "read")).value;
    });
  }
  peek(e) {
    return t(this, void 0, void 0, function* () {
      return (yield this.next(e, "peek")).value;
    });
  }
  next(...e) {
    return this._values.length > 0 ? Promise.resolve({ done: !1, value: this._values.shift() }) : this._error ? Promise.reject({ done: !0, value: this._error.error }) : this._closedPromiseResolve ? new Promise((r, h) => {
      this.resolvers.push({ resolve: r, reject: h });
    }) : Promise.resolve(s);
  }
  _ensureOpen() {
    if (this._closedPromiseResolve)
      return !0;
    throw new Error("AsyncQueue is closed");
  }
}
export {
  d as AsyncQueue,
  s as ITERATOR_DONE,
  n as ReadableInterop
};
//# sourceMappingURL=cori.data.api517.js.map
