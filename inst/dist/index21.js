/*
 * Frontend UI component library for the CORI Data API 
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
import { __module as utils } from './index27.js';

(function (module) {

	module.exports.mixin = function mixin(target, source) {
	  const keys = Object.getOwnPropertyNames(source);
	  for (let i = 0; i < keys.length; ++i) {
	    Object.defineProperty(target, keys[i], Object.getOwnPropertyDescriptor(source, keys[i]));
	  }
	};

	module.exports.wrapperSymbol = Symbol("wrapper");
	module.exports.implSymbol = Symbol("impl");

	module.exports.wrapperForImpl = function (impl) {
	  return impl[module.exports.wrapperSymbol];
	};

	module.exports.implForWrapper = function (wrapper) {
	  return wrapper[module.exports.implSymbol];
	}; 
} (utils));

var utilsExports = utils.exports;

export { utilsExports as u };
//# sourceMappingURL=index21.js.map
