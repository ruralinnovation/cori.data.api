/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const e = typeof window < "u" && typeof document < "u", n = ((o) => e && ["ReactNative", "NativeScript", "NS"].indexOf(o) < 0)(typeof navigator < "u" && navigator.product), t = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", r = e && window.location.href || "http://localhost";
export {
  e as hasBrowserEnv,
  n as hasStandardBrowserEnv,
  t as hasStandardBrowserWebWorkerEnv,
  r as origin
};
//# sourceMappingURL=cori.data.api283.js.map
