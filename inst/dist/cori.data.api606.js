/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const o = new Float64Array(1), e = new Uint32Array(o.buffer);
function r(t) {
  const n = (t & 31744) >> 10, F = (t & 1023) / 1024, x = Math.pow(-1, (t & 32768) >> 15);
  switch (n) {
    case 31:
      return x * (F ? Number.NaN : 1 / 0);
    case 0:
      return x * (F ? 6103515625e-14 * F : 0);
  }
  return x * Math.pow(2, n - 15) * (1 + F);
}
function s(t) {
  if (t !== t)
    return 32256;
  o[0] = t;
  const n = (e[1] & 2147483648) >> 16 & 65535;
  let F = e[1] & 2146435072, x = 0;
  return F >= 1089470464 ? e[0] > 0 ? F = 31744 : (F = (F & 2080374784) >> 16, x = (e[1] & 1048575) >> 10) : F <= 1056964608 ? (x = 1048576 + (e[1] & 1048575), x = 1048576 + (x << (F >> 20) - 998) >> 21, F = 0) : (F = F - 1056964608 >> 10, x = (e[1] & 1048575) + 512 >> 10), n | F | x & 65535;
}
export {
  s as float64ToUint16,
  r as uint16ToFloat64
};
//# sourceMappingURL=cori.data.api606.js.map
