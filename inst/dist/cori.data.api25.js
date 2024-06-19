import u from "./cori.data.api24.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class c {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(t) {
      r = t;
    });
    const s = this;
    this.promise.then((n) => {
      if (!s._listeners)
        return;
      let t = s._listeners.length;
      for (; t-- > 0; )
        s._listeners[t](n);
      s._listeners = null;
    }), this.promise.then = (n) => {
      let t;
      const o = new Promise((i) => {
        s.subscribe(i), t = i;
      }).then(n);
      return o.cancel = function() {
        s.unsubscribe(t);
      }, o;
    }, e(function(t, o, i) {
      s.reason || (s.reason = new u(t, o, i), r(s.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(e);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new c(function(n) {
        e = n;
      }),
      cancel: e
    };
  }
}
export {
  c as default
};
//# sourceMappingURL=cori.data.api25.js.map
