import c from "./cori.data.api260.js";
import p from "./cori.data.api399.js";
import i from "./cori.data.api412.js";
import l from "./cori.data.api413.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const v = {
  create() {
    let e;
    return {
      init: () => e = 1,
      value: (r) => {
        const a = r.index;
        return a && !r.peer(a) ? e = a + 1 : e;
      }
    };
  },
  param: []
}, o = {
  create() {
    let e;
    return {
      init: () => e = 0,
      value: (r) => {
        const { index: a, peer: t, size: n } = r;
        let u = a;
        if (e < u) {
          for (; u + 1 < n && t(u + 1); )
            ++u;
          e = u;
        }
        return (1 + e) / n;
      }
    };
  },
  param: []
}, f = {
  /** @type {WindowDef} */
  row_number: {
    create() {
      return {
        init: i,
        value: (e) => e.index + 1
      };
    },
    param: []
  },
  /** @type {WindowDef} */
  rank: v,
  /** @type {WindowDef} */
  avg_rank: {
    create() {
      let e, r;
      return {
        init: () => (e = -1, r = 1),
        value: (a) => {
          const t = a.index;
          if (t >= e) {
            for (r = e = t + 1; a.peer(e); r += ++e)
              ;
            r /= e - t;
          }
          return r;
        }
      };
    },
    param: []
  },
  /** @type {WindowDef} */
  dense_rank: {
    create() {
      let e;
      return {
        init: () => e = 1,
        value: (r) => {
          const a = r.index;
          return a && !r.peer(a) ? ++e : e;
        }
      };
    },
    param: []
  },
  /** @type {WindowDef} */
  percent_rank: {
    create() {
      const { init: e, value: r } = v.create();
      return {
        init: e,
        value: (a) => (r(a) - 1) / (a.size - 1)
      };
    },
    param: []
  },
  /** @type {WindowDef} */
  cume_dist: o,
  /** @type {WindowDef} */
  ntile: {
    create(e) {
      e = +e, e > 0 || c("ntile num must be greater than zero.");
      const { init: r, value: a } = o.create();
      return {
        init: r,
        value: (t) => Math.ceil(e * a(t))
      };
    },
    param: [0, 1]
  },
  /** @type {WindowDef} */
  lag: {
    create(e, r = l) {
      return e = +e || 1, {
        init: i,
        value: (a, t) => {
          const n = a.index - e;
          return n >= 0 ? a.value(n, t) : r;
        }
      };
    },
    param: [1, 2]
  },
  /** @type {WindowDef} */
  lead: {
    create(e, r = l) {
      return e = +e || 1, {
        init: i,
        value: (a, t) => {
          const n = a.index + e;
          return n < a.size ? a.value(n, t) : r;
        }
      };
    },
    param: [1, 2]
  },
  /** @type {WindowDef} */
  first_value: {
    create() {
      return {
        init: i,
        value: (e, r) => e.value(e.i0, r)
      };
    },
    param: [1]
  },
  /** @type {WindowDef} */
  last_value: {
    create() {
      return {
        init: i,
        value: (e, r) => e.value(e.i1 - 1, r)
      };
    },
    param: [1]
  },
  /** @type {WindowDef} */
  nth_value: {
    create(e) {
      return e = +e, e > 0 || c("nth_value nth must be greater than zero."), {
        init: i,
        value: (r, a) => {
          const t = r.i0 + (e - 1);
          return t < r.i1 ? r.value(t, a) : l;
        }
      };
    },
    param: [1, 1]
  },
  /** @type {WindowDef} */
  fill_down: {
    create(e = l) {
      let r;
      return {
        init: () => r = e,
        value: (a, t) => {
          const n = a.value(a.index, t);
          return p(n) ? r = n : r;
        }
      };
    },
    param: [1, 1]
  },
  /** @type {WindowDef} */
  fill_up: {
    create(e = l) {
      let r, a;
      return {
        init: () => (r = e, a = -1),
        value: (t, n) => t.index <= a ? r : (a = m(t, n, t.index)) >= 0 ? r = t.value(a, n) : (a = t.size, r = e)
      };
    },
    param: [1, 1]
  }
};
function m(e, r, a) {
  for (const t = e.size; a < t; ++a)
    if (p(e.value(a, r)))
      return a;
  return -1;
}
export {
  f as default
};
//# sourceMappingURL=cori.data.api415.js.map
