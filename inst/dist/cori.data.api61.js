import d from "./cori.data.api59.js";
import R from "./cori.data.api232.js";
import b from "./cori.data.api233.js";
import S from "./cori.data.api234.js";
import m from "./cori.data.api62.js";
import C from "./cori.data.api235.js";
import q from "./cori.data.api236.js";
import I from "./cori.data.api73.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const u = q.validators;
class k {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new b(),
      response: new b()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, e) {
    try {
      return await this._request(t, e);
    } catch (s) {
      if (s instanceof Error) {
        let n;
        Error.captureStackTrace ? Error.captureStackTrace(n = {}) : n = new Error();
        const a = n.stack ? n.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack ? a && !String(s.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + a) : s.stack = a;
        } catch {
        }
      }
      throw s;
    }
  }
  _request(t, e) {
    typeof t == "string" ? (e = e || {}, e.url = t) : e = t || {}, e = m(this.defaults, e);
    const { transitional: s, paramsSerializer: n, headers: a } = e;
    s !== void 0 && q.assertOptions(s, {
      silentJSONParsing: u.transitional(u.boolean),
      forcedJSONParsing: u.transitional(u.boolean),
      clarifyTimeoutError: u.transitional(u.boolean)
    }, !1), n != null && (d.isFunction(n) ? e.paramsSerializer = {
      serialize: n
    } : q.assertOptions(n, {
      encode: u.function,
      serialize: u.function
    }, !0)), e.method = (e.method || this.defaults.method || "get").toLowerCase();
    let f = a && d.merge(
      a.common,
      a[e.method]
    );
    a && d.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (r) => {
        delete a[r];
      }
    ), e.headers = I.concat(f, a);
    const h = [];
    let y = !0;
    this.interceptors.request.forEach(function(i) {
      typeof i.runWhen == "function" && i.runWhen(e) === !1 || (y = y && i.synchronous, h.unshift(i.fulfilled, i.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function(i) {
      p.push(i.fulfilled, i.rejected);
    });
    let l, o = 0, c;
    if (!y) {
      const r = [S.bind(this), void 0];
      for (r.unshift.apply(r, h), r.push.apply(r, p), c = r.length, l = Promise.resolve(e); o < c; )
        l = l.then(r[o++], r[o++]);
      return l;
    }
    c = h.length;
    let E = e;
    for (o = 0; o < c; ) {
      const r = h[o++], i = h[o++];
      try {
        E = r(E);
      } catch (P) {
        i.call(this, P);
        break;
      }
    }
    try {
      l = S.call(this, E);
    } catch (r) {
      return Promise.reject(r);
    }
    for (o = 0, c = p.length; o < c; )
      l = l.then(p[o++], p[o++]);
    return l;
  }
  getUri(t) {
    t = m(this.defaults, t);
    const e = C(t.baseURL, t.url);
    return R(e, t.params, t.paramsSerializer);
  }
}
d.forEach(["delete", "get", "head", "options"], function(t) {
  k.prototype[t] = function(e, s) {
    return this.request(m(s || {}, {
      method: t,
      url: e,
      data: (s || {}).data
    }));
  };
});
d.forEach(["post", "put", "patch"], function(t) {
  function e(s) {
    return function(a, f, h) {
      return this.request(m(h || {}, {
        method: t,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: f
      }));
    };
  }
  k.prototype[t] = e(), k.prototype[t + "Form"] = e(!0);
});
export {
  k as default
};
//# sourceMappingURL=cori.data.api61.js.map
