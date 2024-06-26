import h from "./cori.data.api77.js";
import c from "./cori.data.api328.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const f = c.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const o = /(msie|trident)/i.test(navigator.userAgent), t = document.createElement("a");
    let e;
    function n(a) {
      let r = a;
      return o && (t.setAttribute("href", r), r = t.href), t.setAttribute("href", r), {
        href: t.href,
        protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
        host: t.host,
        search: t.search ? t.search.replace(/^\?/, "") : "",
        hash: t.hash ? t.hash.replace(/^#/, "") : "",
        hostname: t.hostname,
        port: t.port,
        pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname
      };
    }
    return e = n(window.location.href), function(r) {
      const s = h.isString(r) ? n(r) : r;
      return s.protocol === e.protocol && s.host === e.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
export {
  f as default
};
//# sourceMappingURL=cori.data.api550.js.map
