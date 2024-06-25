import C from "./cori.data.api207.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const { toString: E } = Object.prototype, { getPrototypeOf: F } = Object, d = /* @__PURE__ */ ((e) => (t) => {
  const r = E.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), l = (e) => (e = e.toLowerCase(), (t) => d(t) === e), m = (e) => (t) => typeof t === e, { isArray: a } = Array, u = m("undefined");
function R(e) {
  return e !== null && !u(e) && e.constructor !== null && !u(e.constructor) && c(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const b = l("ArrayBuffer");
function H(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && b(e.buffer), t;
}
const k = m("string"), c = m("function"), P = m("number"), w = (e) => e !== null && typeof e == "object", I = (e) => e === !0 || e === !1, y = (e) => {
  if (d(e) !== "object")
    return !1;
  const t = F(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, N = l("Date"), U = l("File"), M = l("Blob"), V = l("FileList"), _ = (e) => w(e) && c(e.pipe), q = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || c(e.append) && ((t = d(e)) === "formdata" || // detect form-data instance
  t === "object" && c(e.toString) && e.toString() === "[object FormData]"));
}, z = l("URLSearchParams"), [G, J, K, W] = ["ReadableStream", "Request", "Response", "Headers"].map(l), $ = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function p(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), a(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let f;
    for (n = 0; n < i; n++)
      f = o[n], t.call(null, e[f], f, e);
  }
}
function L(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const x = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, B = (e) => !u(e) && e !== x;
function A() {
  const { caseless: e } = B(this) && this || {}, t = {}, r = (n, s) => {
    const o = e && L(t, s) || s;
    y(t[o]) && y(n) ? t[o] = A(t[o], n) : y(n) ? t[o] = A({}, n) : a(n) ? t[o] = n.slice() : t[o] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && p(arguments[n], r);
  return t;
}
const Q = (e, t, r, { allOwnKeys: n } = {}) => (p(t, (s, o) => {
  r && c(s) ? e[o] = C(s, r) : e[o] = s;
}, { allOwnKeys: n }), e), X = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Y = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Z = (e, t, r, n) => {
  let s, o, i;
  const f = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!n || n(i, e, t)) && !f[i] && (t[i] = e[i], f[i] = !0);
    e = r !== !1 && F(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, j = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, v = (e) => {
  if (!e)
    return null;
  if (a(e))
    return e;
  let t = e.length;
  if (!P(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, ee = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && F(Uint8Array)), te = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, ne = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, re = l("HTMLFormElement"), se = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), h = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), oe = l("RegExp"), D = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  p(r, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (n[o] = i || s);
  }), Object.defineProperties(e, n);
}, ie = (e) => {
  D(e, (t, r) => {
    if (c(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (c(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, ce = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((o) => {
      r[o] = !0;
    });
  };
  return a(e) ? n(e) : n(String(e).split(t)), r;
}, le = () => {
}, fe = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, g = "abcdefghijklmnopqrstuvwxyz", S = "0123456789", T = {
  DIGIT: S,
  ALPHA: g,
  ALPHA_DIGIT: g + g.toUpperCase() + S
}, ae = (e = 16, t = T.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function ue(e) {
  return !!(e && c(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const pe = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (w(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[s] = n;
        const o = a(n) ? [] : {};
        return p(n, (i, f) => {
          const O = r(i, s + 1);
          !u(O) && (o[f] = O);
        }), t[s] = void 0, o;
      }
    }
    return n;
  };
  return r(e, 0);
}, ye = l("AsyncFunction"), de = (e) => e && (w(e) || c(e)) && c(e.then) && c(e.catch), we = {
  isArray: a,
  isArrayBuffer: b,
  isBuffer: R,
  isFormData: q,
  isArrayBufferView: H,
  isString: k,
  isNumber: P,
  isBoolean: I,
  isObject: w,
  isPlainObject: y,
  isReadableStream: G,
  isRequest: J,
  isResponse: K,
  isHeaders: W,
  isUndefined: u,
  isDate: N,
  isFile: U,
  isBlob: M,
  isRegExp: oe,
  isFunction: c,
  isStream: _,
  isURLSearchParams: z,
  isTypedArray: ee,
  isFileList: V,
  forEach: p,
  merge: A,
  extend: Q,
  trim: $,
  stripBOM: X,
  inherits: Y,
  toFlatObject: Z,
  kindOf: d,
  kindOfTest: l,
  endsWith: j,
  toArray: v,
  forEachEntry: te,
  matchAll: ne,
  isHTMLForm: re,
  hasOwnProperty: h,
  hasOwnProp: h,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: D,
  freezeMethods: ie,
  toObjectSet: ce,
  toCamelCase: se,
  noop: le,
  toFiniteNumber: fe,
  findKey: L,
  global: x,
  isContextDefined: B,
  ALPHABET: T,
  generateString: ae,
  isSpecCompliantForm: ue,
  toJSONObject: pe,
  isAsyncFn: ye,
  isThenable: de
};
export {
  we as default
};
//# sourceMappingURL=cori.data.api206.js.map
