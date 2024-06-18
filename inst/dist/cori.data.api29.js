import n from "./cori.data.api18.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function s(t, r, i, o, E) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", r && (this.code = r), i && (this.config = i), o && (this.request = o), E && (this.response = E);
}
n.inherits(s, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: n.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const R = s.prototype, u = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  u[t] = { value: t };
});
Object.defineProperties(s, u);
Object.defineProperty(R, "isAxiosError", { value: !0 });
s.from = (t, r, i, o, E, a) => {
  const e = Object.create(R);
  return n.toFlatObject(t, e, function(h) {
    return h !== Error.prototype;
  }, (c) => c !== "isAxiosError"), s.call(e, t.message, r, i, o, E), e.cause = t, e.name = t.name, a && Object.assign(e, a), e;
};
export {
  s as default
};
