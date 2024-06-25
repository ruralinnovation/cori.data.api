import { random as t } from "./cori.data.api316.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const n = {
  random: t,
  is_nan: Number.isNaN,
  is_finite: Number.isFinite,
  abs: Math.abs,
  cbrt: Math.cbrt,
  ceil: Math.ceil,
  clz32: Math.clz32,
  exp: Math.exp,
  expm1: Math.expm1,
  floor: Math.floor,
  fround: Math.fround,
  greatest: Math.max,
  least: Math.min,
  log: Math.log,
  log10: Math.log10,
  log1p: Math.log1p,
  log2: Math.log2,
  pow: Math.pow,
  round: Math.round,
  sign: Math.sign,
  sqrt: Math.sqrt,
  trunc: Math.trunc,
  degrees: (a) => 180 * a / Math.PI,
  radians: (a) => Math.PI * a / 180,
  acos: Math.acos,
  acosh: Math.acosh,
  asin: Math.asin,
  asinh: Math.asinh,
  atan: Math.atan,
  atan2: Math.atan2,
  atanh: Math.atanh,
  cos: Math.cos,
  cosh: Math.cosh,
  sin: Math.sin,
  sinh: Math.sinh,
  tan: Math.tan,
  tanh: Math.tanh
};
export {
  n as default
};
//# sourceMappingURL=cori.data.api419.js.map
