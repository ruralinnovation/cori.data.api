import u from "./cori.data.api435.js";
import o from "./cori.data.api436.js";
import c from "./cori.data.api423.js";
import v from "./cori.data.api437.js";
import i from "./cori.data.api438.js";
import p from "./cori.data.api439.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function r(a) {
  return a.init = a.init || v, a.add = a.add || v, a.rem = a.rem || v, a;
}
function l(a, e) {
  return a.product_v = !1, a.product = e;
}
const N = {
  /** @type {AggregateDef} */
  count: {
    create: () => r({
      value: (a) => a.count
    }),
    param: []
  },
  /** @type {AggregateDef} */
  array_agg: {
    create: () => r({
      init: (a) => a.values = !0,
      value: (a) => a.list.values(a.stream)
    }),
    param: [1]
  },
  /** @type {AggregateDef} */
  object_agg: {
    create: () => r({
      init: (a) => a.values = !0,
      value: (a) => Object.fromEntries(a.list.values())
    }),
    param: [2]
  },
  /** @type {AggregateDef} */
  map_agg: {
    create: () => r({
      init: (a) => a.values = !0,
      value: (a) => new Map(a.list.values())
    }),
    param: [2]
  },
  /** @type {AggregateDef} */
  entries_agg: {
    create: () => r({
      init: (a) => a.values = !0,
      value: (a) => a.list.values(a.stream)
    }),
    param: [2]
  },
  /** @type {AggregateDef} */
  any: {
    create: () => r({
      add: (a, e) => {
        a.any == null && (a.any = e);
      },
      value: (a) => a.valid ? a.any : i
    }),
    param: [1]
  },
  /** @type {AggregateDef} */
  valid: {
    create: () => r({
      value: (a) => a.valid
    }),
    param: [1]
  },
  /** @type {AggregateDef} */
  invalid: {
    create: () => r({
      value: (a) => a.count - a.valid
    }),
    param: [1]
  },
  /** @type {AggregateDef} */
  distinct: {
    create: () => ({
      init: (a) => a.distinct = o(),
      value: (a) => a.distinct.count() + (a.valid === a.count ? 0 : 1),
      add: (a, e) => a.distinct.increment(e),
      rem: (a, e) => a.distinct.decrement(e)
    }),
    param: [1]
  },
  /** @type {AggregateDef} */
  array_agg_distinct: {
    create: () => r({
      value: (a) => a.distinct.values()
    }),
    param: [1],
    req: ["distinct"]
  },
  /** @type {AggregateDef} */
  mode: {
    create: () => r({
      value: (a) => {
        let e = i, n = 0;
        return a.distinct.forEach((t, m) => {
          m > n && (n = m, e = t);
        }), e;
      }
    }),
    param: [1],
    req: ["distinct"]
  },
  /** @type {AggregateDef} */
  sum: {
    create: () => ({
      init: (a) => a.sum = 0,
      value: (a) => a.valid ? a.sum : i,
      add: (a, e) => c(e) ? a.sum === 0 ? a.sum = e : a.sum += e : a.sum += +e,
      rem: (a, e) => a.sum -= e
    }),
    param: [1]
  },
  /** @type {AggregateDef} */
  product: {
    create: () => ({
      init: (a) => l(a, 1),
      value: (a) => a.valid ? a.product_v ? l(a, p(a.list.values())) : a.product : void 0,
      add: (a, e) => c(e) && a.product === 1 ? a.product = e : a.product *= e,
      rem: (a, e) => e == 0 || e === 1 / 0 || e === -1 / 0 ? a.product_v = !0 : a.product /= e
    }),
    param: [1],
    stream: ["array_agg"]
  },
  /** @type {AggregateDef} */
  mean: {
    create: () => ({
      init: (a) => a.mean = 0,
      value: (a) => a.valid ? a.mean : i,
      add: (a, e) => {
        a.mean_d = e - a.mean, a.mean += a.mean_d / a.valid;
      },
      rem: (a, e) => {
        a.mean_d = e - a.mean, a.mean -= a.valid ? a.mean_d / a.valid : a.mean;
      }
    }),
    param: [1]
  },
  /** @type {AggregateDef} */
  average: {
    create: () => r({
      value: (a) => a.valid ? a.mean : i
    }),
    param: [1],
    req: ["mean"]
  },
  /** @type {AggregateDef} */
  variance: {
    create: () => ({
      init: (a) => a.dev = 0,
      value: (a) => a.valid > 1 ? a.dev / (a.valid - 1) : i,
      add: (a, e) => a.dev += a.mean_d * (e - a.mean),
      rem: (a, e) => a.dev -= a.mean_d * (e - a.mean)
    }),
    param: [1],
    req: ["mean"]
  },
  /** @type {AggregateDef} */
  variancep: {
    create: () => r({
      value: (a) => a.valid > 1 ? a.dev / a.valid : i
    }),
    param: [1],
    req: ["variance"]
  },
  /** @type {AggregateDef} */
  stdev: {
    create: () => r({
      value: (a) => a.valid > 1 ? Math.sqrt(a.dev / (a.valid - 1)) : i
    }),
    param: [1],
    req: ["variance"]
  },
  /** @type {AggregateDef} */
  stdevp: {
    create: () => r({
      value: (a) => a.valid > 1 ? Math.sqrt(a.dev / a.valid) : i
    }),
    param: [1],
    req: ["variance"]
  },
  /** @type {AggregateDef} */
  min: {
    create: () => ({
      init: (a) => a.min = i,
      value: (a) => a.min = Number.isNaN(a.min) ? a.list.min() : a.min,
      add: (a, e) => {
        (e < a.min || a.min === i) && (a.min = e);
      },
      rem: (a, e) => {
        e <= a.min && (a.min = NaN);
      }
    }),
    param: [1],
    stream: ["array_agg"]
  },
  /** @type {AggregateDef} */
  max: {
    create: () => ({
      init: (a) => a.max = i,
      value: (a) => a.max = Number.isNaN(a.max) ? a.list.max() : a.max,
      add: (a, e) => {
        (e > a.max || a.max === i) && (a.max = e);
      },
      rem: (a, e) => {
        e >= a.max && (a.max = NaN);
      }
    }),
    param: [1],
    stream: ["array_agg"]
  },
  /** @type {AggregateDef} */
  quantile: {
    create: (a) => r({
      value: (e) => e.list.quantile(a)
    }),
    param: [1, 1],
    req: ["array_agg"]
  },
  /** @type {AggregateDef} */
  median: {
    create: () => r({
      value: (a) => a.list.quantile(0.5)
    }),
    param: [1],
    req: ["array_agg"]
  },
  /** @type {AggregateDef} */
  covariance: {
    create: () => ({
      init: (a) => {
        a.cov = a.mean_x = a.mean_y = a.dev_x = a.dev_y = 0;
      },
      value: (a) => a.valid > 1 ? a.cov / (a.valid - 1) : i,
      add: (a, e, n) => {
        const t = e - a.mean_x, m = n - a.mean_y;
        a.mean_x += t / a.valid, a.mean_y += m / a.valid;
        const d = n - a.mean_y;
        a.dev_x += t * (e - a.mean_x), a.dev_y += m * d, a.cov += t * d;
      },
      rem: (a, e, n) => {
        const t = e - a.mean_x, m = n - a.mean_y;
        a.mean_x -= a.valid ? t / a.valid : a.mean_x, a.mean_y -= a.valid ? m / a.valid : a.mean_y;
        const d = n - a.mean_y;
        a.dev_x -= t * (e - a.mean_x), a.dev_y -= m * d, a.cov -= t * d;
      }
    }),
    param: [2]
  },
  /** @type {AggregateDef} */
  covariancep: {
    create: () => r({
      value: (a) => a.valid > 1 ? a.cov / a.valid : i
    }),
    param: [2],
    req: ["covariance"]
  },
  /** @type {AggregateDef} */
  corr: {
    create: () => r({
      value: (a) => a.valid > 1 ? a.cov / (Math.sqrt(a.dev_x) * Math.sqrt(a.dev_y)) : i
    }),
    param: [2],
    req: ["covariance"]
  },
  /** @type {AggregateDef} */
  bins: {
    create: (a, e, n, t) => r({
      value: (m) => u(m.min, m.max, a, e, n, t)
    }),
    param: [1, 4],
    req: ["min", "max"]
  }
};
export {
  N as default
};
//# sourceMappingURL=cori.data.api434.js.map
