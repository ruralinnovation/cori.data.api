import k, { extend as I } from "./cori.data.api87.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function u() {
}
var b = 0.7, y = 1 / b, o = "\\s*([+-]?\\d+)\\s*", g = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", n = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", j = /^#([0-9a-f]{3,8})$/, O = new RegExp(`^rgb\\(${o},${o},${o}\\)$`), z = new RegExp(`^rgb\\(${n},${n},${n}\\)$`), L = new RegExp(`^rgba\\(${o},${o},${o},${g}\\)$`), A = new RegExp(`^rgba\\(${n},${n},${n},${g}\\)$`), B = new RegExp(`^hsl\\(${g},${n},${n}\\)$`), D = new RegExp(`^hsla\\(${g},${n},${n},${g}\\)$`), v = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
k(u, H, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: R,
  // Deprecated! Use color.formatHex.
  formatHex: R,
  formatHex8: F,
  formatHsl: G,
  formatRgb: M,
  toString: M
});
function R() {
  return this.rgb().formatHex();
}
function F() {
  return this.rgb().formatHex8();
}
function G() {
  return S(this).formatHsl();
}
function M() {
  return this.rgb().formatRgb();
}
function H(e) {
  var r, t;
  return e = (e + "").trim().toLowerCase(), (r = j.exec(e)) ? (t = r[1].length, r = parseInt(r[1], 16), t === 6 ? q(r) : t === 3 ? new a(r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, (r & 15) << 4 | r & 15, 1) : t === 8 ? m(r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, (r & 255) / 255) : t === 4 ? m(r >> 12 & 15 | r >> 8 & 240, r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, ((r & 15) << 4 | r & 15) / 255) : null) : (r = O.exec(e)) ? new a(r[1], r[2], r[3], 1) : (r = z.exec(e)) ? new a(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, 1) : (r = L.exec(e)) ? m(r[1], r[2], r[3], r[4]) : (r = A.exec(e)) ? m(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, r[4]) : (r = B.exec(e)) ? P(r[1], r[2] / 100, r[3] / 100, 1) : (r = D.exec(e)) ? P(r[1], r[2] / 100, r[3] / 100, r[4]) : v.hasOwnProperty(e) ? q(v[e]) : e === "transparent" ? new a(NaN, NaN, NaN, 0) : null;
}
function q(e) {
  return new a(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function m(e, r, t, f) {
  return f <= 0 && (e = r = t = NaN), new a(e, r, t, f);
}
function J(e) {
  return e instanceof u || (e = H(e)), e ? (e = e.rgb(), new a(e.r, e.g, e.b, e.opacity)) : new a();
}
function K(e, r, t, f) {
  return arguments.length === 1 ? J(e) : new a(e, r, t, f ?? 1);
}
function a(e, r, t, f) {
  this.r = +e, this.g = +r, this.b = +t, this.opacity = +f;
}
k(a, K, I(u, {
  brighter(e) {
    return e = e == null ? y : Math.pow(y, e), new a(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? b : Math.pow(b, e), new a(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new a(h(this.r), h(this.g), h(this.b), $(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: E,
  // Deprecated! Use color.formatHex.
  formatHex: E,
  formatHex8: Q,
  formatRgb: _,
  toString: _
}));
function E() {
  return `#${l(this.r)}${l(this.g)}${l(this.b)}`;
}
function Q() {
  return `#${l(this.r)}${l(this.g)}${l(this.b)}${l((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function _() {
  const e = $(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${h(this.r)}, ${h(this.g)}, ${h(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function $(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function h(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function l(e) {
  return e = h(e), (e < 16 ? "0" : "") + e.toString(16);
}
function P(e, r, t, f) {
  return f <= 0 ? e = r = t = NaN : t <= 0 || t >= 1 ? e = r = NaN : r <= 0 && (e = NaN), new i(e, r, t, f);
}
function S(e) {
  if (e instanceof i)
    return new i(e.h, e.s, e.l, e.opacity);
  if (e instanceof u || (e = H(e)), !e)
    return new i();
  if (e instanceof i)
    return e;
  e = e.rgb();
  var r = e.r / 255, t = e.g / 255, f = e.b / 255, x = Math.min(r, t, f), d = Math.max(r, t, f), c = NaN, s = d - x, p = (d + x) / 2;
  return s ? (r === d ? c = (t - f) / s + (t < f) * 6 : t === d ? c = (f - r) / s + 2 : c = (r - t) / s + 4, s /= p < 0.5 ? d + x : 2 - d - x, c *= 60) : s = p > 0 && p < 1 ? 0 : c, new i(c, s, p, e.opacity);
}
function T(e, r, t, f) {
  return arguments.length === 1 ? S(e) : new i(e, r, t, f ?? 1);
}
function i(e, r, t, f) {
  this.h = +e, this.s = +r, this.l = +t, this.opacity = +f;
}
k(i, T, I(u, {
  brighter(e) {
    return e = e == null ? y : Math.pow(y, e), new i(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? b : Math.pow(b, e), new i(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, r = isNaN(e) || isNaN(this.s) ? 0 : this.s, t = this.l, f = t + (t < 0.5 ? t : 1 - t) * r, x = 2 * t - f;
    return new a(
      N(e >= 240 ? e - 240 : e + 120, x, f),
      N(e, x, f),
      N(e < 120 ? e + 240 : e - 120, x, f),
      this.opacity
    );
  },
  clamp() {
    return new i(C(this.h), w(this.s), w(this.l), $(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = $(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${C(this.h)}, ${w(this.s) * 100}%, ${w(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function C(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function w(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function N(e, r, t) {
  return (e < 60 ? r + (t - r) * e / 60 : e < 180 ? t : e < 240 ? r + (t - r) * (240 - e) / 60 : r) * 255;
}
export {
  u as Color,
  a as Rgb,
  y as brighter,
  b as darker,
  H as default,
  T as hsl,
  S as hslConvert,
  K as rgb,
  J as rgbConvert
};
//# sourceMappingURL=cori.data.api86.js.map
