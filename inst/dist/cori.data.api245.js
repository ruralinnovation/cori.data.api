import { stringifyPosition as c } from "./cori.data.api466.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class t extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(d, s, i) {
    super(), typeof s == "string" && (i = s, s = void 0);
    let f = "", e = {}, p = !1;
    if (s && ("line" in s && "column" in s ? e = { place: s } : "start" in s && "end" in s ? e = { place: s } : "type" in s ? e = {
      ancestors: [s],
      place: s.position
    } : e = { ...s }), typeof d == "string" ? f = d : !e.cause && d && (p = !0, f = d.message, e.cause = d), !e.ruleId && !e.source && typeof i == "string") {
      const n = i.indexOf(":");
      n === -1 ? e.ruleId = i : (e.source = i.slice(0, n), e.ruleId = i.slice(n + 1));
    }
    if (!e.place && e.ancestors && e.ancestors) {
      const n = e.ancestors[e.ancestors.length - 1];
      n && (e.place = n.position);
    }
    const u = e.place && "start" in e.place ? e.place.start : e.place;
    this.ancestors = e.ancestors || void 0, this.cause = e.cause || void 0, this.column = u ? u.column : void 0, this.fatal = void 0, this.file, this.message = f, this.line = u ? u.line : void 0, this.name = c(e.place) || "1:1", this.place = e.place || void 0, this.reason = this.message, this.ruleId = e.ruleId || void 0, this.source = e.source || void 0, this.stack = p && e.cause && typeof e.cause.stack == "string" ? e.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
t.prototype.file = "";
t.prototype.name = "";
t.prototype.reason = "";
t.prototype.message = "";
t.prototype.stack = "";
t.prototype.column = void 0;
t.prototype.line = void 0;
t.prototype.ancestors = void 0;
t.prototype.cause = void 0;
t.prototype.fatal = void 0;
t.prototype.place = void 0;
t.prototype.ruleId = void 0;
t.prototype.source = void 0;
export {
  t as VFileMessage
};
//# sourceMappingURL=cori.data.api245.js.map
