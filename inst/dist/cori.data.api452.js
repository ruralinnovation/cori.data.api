/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const u = /[\0\t\n\r]/g;
function x() {
  let s = 1, c = "", f = !0, r;
  return p;
  function p(e, l, a) {
    const t = [];
    let d, o, n, i, h;
    for (e = c + (typeof e == "string" ? e.toString() : new TextDecoder(l || void 0).decode(e)), n = 0, c = "", f && (e.charCodeAt(0) === 65279 && n++, f = void 0); n < e.length; ) {
      if (u.lastIndex = n, d = u.exec(e), i = d && d.index !== void 0 ? d.index : e.length, h = e.charCodeAt(i), !d) {
        c = e.slice(n);
        break;
      }
      if (h === 10 && n === i && r)
        t.push(-3), r = void 0;
      else
        switch (r && (t.push(-5), r = void 0), n < i && (t.push(e.slice(n, i)), s += i - n), h) {
          case 0: {
            t.push(65533), s++;
            break;
          }
          case 9: {
            for (o = Math.ceil(s / 4) * 4, t.push(-2); s++ < o; )
              t.push(-1);
            break;
          }
          case 10: {
            t.push(-4), s = 1;
            break;
          }
          default:
            r = !0, s = 1;
        }
      n = i + 1;
    }
    return a && (r && t.push(-5), c && t.push(c), t.push(null)), t;
  }
}
export {
  x as preprocess
};
//# sourceMappingURL=cori.data.api452.js.map
