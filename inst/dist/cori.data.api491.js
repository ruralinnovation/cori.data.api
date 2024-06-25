import x from "./cori.data.api389.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function a(n) {
  return n.getUTCHours() === 0 && n.getUTCMinutes() === 0 && n.getUTCSeconds() === 0 && n.getUTCMilliseconds() === 0;
}
function C(n, d = {}) {
  let o = 0, f = 0, e = 0, r = 0, c = 0, i = 0;
  return n((t) => {
    if (++o, t == null) {
      ++f;
      return;
    }
    const l = typeof t;
    if (l === "object" && x(t))
      ++e, a(t) && ++r;
    else if (l === "number" && (++c, t === t && (t | 0) !== t)) {
      const s = t + "", g = s.indexOf(".");
      if (g >= 0) {
        const m = s.indexOf("e"), u = m > 0 ? m : s.length;
        i = Math.max(i, u - g - 1);
      }
    }
  }), {
    align: (f + c + e) / o > 0.5 ? "r" : "l",
    format: {
      utc: e === r,
      digits: Math.min(i, d.maxdigits || 6)
    }
  };
}
export {
  C as default
};
//# sourceMappingURL=cori.data.api491.js.map
