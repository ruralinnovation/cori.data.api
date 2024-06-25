/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function r(t) {
  return function() {
    var n = this.parentNode;
    for (var i in this.__transition)
      if (+i !== t)
        return;
    n && n.removeChild(this);
  };
}
function e() {
  return this.on("end.remove", r(this._id));
}
export {
  e as default
};
//# sourceMappingURL=cori.data.api187.js.map
