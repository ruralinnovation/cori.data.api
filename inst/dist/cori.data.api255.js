/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const a = { basename: c, dirname: u, extname: g, join: h, sep: "/" };
function c(n, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  s(n);
  let e = 0, l = -1, i = n.length, f;
  if (t === void 0 || t.length === 0 || t.length > n.length) {
    for (; i--; )
      if (n.codePointAt(i) === 47) {
        if (f) {
          e = i + 1;
          break;
        }
      } else
        l < 0 && (f = !0, l = i + 1);
    return l < 0 ? "" : n.slice(e, l);
  }
  if (t === n)
    return "";
  let o = -1, r = t.length - 1;
  for (; i--; )
    if (n.codePointAt(i) === 47) {
      if (f) {
        e = i + 1;
        break;
      }
    } else
      o < 0 && (f = !0, o = i + 1), r > -1 && (n.codePointAt(i) === t.codePointAt(r--) ? r < 0 && (l = i) : (r = -1, l = o));
  return e === l ? l = o : l < 0 && (l = n.length), n.slice(e, l);
}
function u(n) {
  if (s(n), n.length === 0)
    return ".";
  let t = -1, e = n.length, l;
  for (; --e; )
    if (n.codePointAt(e) === 47) {
      if (l) {
        t = e;
        break;
      }
    } else
      l || (l = !0);
  return t < 0 ? n.codePointAt(0) === 47 ? "/" : "." : t === 1 && n.codePointAt(0) === 47 ? "//" : n.slice(0, t);
}
function g(n) {
  s(n);
  let t = n.length, e = -1, l = 0, i = -1, f = 0, o;
  for (; t--; ) {
    const r = n.codePointAt(t);
    if (r === 47) {
      if (o) {
        l = t + 1;
        break;
      }
      continue;
    }
    e < 0 && (o = !0, e = t + 1), r === 46 ? i < 0 ? i = t : f !== 1 && (f = 1) : i > -1 && (f = -1);
  }
  return i < 0 || e < 0 || // We saw a non-dot character immediately before the dot.
  f === 0 || // The (right-most) trimmed path component is exactly `..`.
  f === 1 && i === e - 1 && i === l + 1 ? "" : n.slice(i, e);
}
function h(...n) {
  let t = -1, e;
  for (; ++t < n.length; )
    s(n[t]), n[t] && (e = e === void 0 ? n[t] : e + "/" + n[t]);
  return e === void 0 ? "." : P(e);
}
function P(n) {
  s(n);
  const t = n.codePointAt(0) === 47;
  let e = A(n, !t);
  return e.length === 0 && !t && (e = "."), e.length > 0 && n.codePointAt(n.length - 1) === 47 && (e += "/"), t ? "/" + e : e;
}
function A(n, t) {
  let e = "", l = 0, i = -1, f = 0, o = -1, r, d;
  for (; ++o <= n.length; ) {
    if (o < n.length)
      r = n.codePointAt(o);
    else {
      if (r === 47)
        break;
      r = 47;
    }
    if (r === 47) {
      if (!(i === o - 1 || f === 1))
        if (i !== o - 1 && f === 2) {
          if (e.length < 2 || l !== 2 || e.codePointAt(e.length - 1) !== 46 || e.codePointAt(e.length - 2) !== 46) {
            if (e.length > 2) {
              if (d = e.lastIndexOf("/"), d !== e.length - 1) {
                d < 0 ? (e = "", l = 0) : (e = e.slice(0, d), l = e.length - 1 - e.lastIndexOf("/")), i = o, f = 0;
                continue;
              }
            } else if (e.length > 0) {
              e = "", l = 0, i = o, f = 0;
              continue;
            }
          }
          t && (e = e.length > 0 ? e + "/.." : "..", l = 2);
        } else
          e.length > 0 ? e += "/" + n.slice(i + 1, o) : e = n.slice(i + 1, o), l = o - i - 1;
      i = o, f = 0;
    } else
      r === 46 && f > -1 ? f++ : f = -1;
  }
  return e;
}
function s(n) {
  if (typeof n != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(n)
    );
}
export {
  a as path
};
//# sourceMappingURL=cori.data.api255.js.map
