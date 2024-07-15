/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
export { Button, Input, Label } from './@cori-risi/components/basic.js';
export { AmplifyContext, default as AmplifyContextProvider } from './@cori-risi/cotexts/AmplifyContextProvider.js';
export { ApiContext, default as ApiContextProvider } from './@cori-risi/cotexts/ApiContextProvider.js';
export { default as CategoricalLegend } from './@cori-risi/components/CategoricalLegend.js';
export { default as LineChart } from './@cori-risi/components/LineChart.js';
import MAP_STYLE from './@cori-risi/mapbox/styles/ruralinno/cl010e7b7001p15pe3l0306hv/style.json.js';

// Testy stuff
function helloAnything(thing) {
    return `Hello ${thing}!`;
}
// Make a copy of the main basemap style
const coriLightMapStyle = (Object.assign({}, MAP_STYLE));

export { coriLightMapStyle, helloAnything };
//# sourceMappingURL=cori.data.api.js.map
