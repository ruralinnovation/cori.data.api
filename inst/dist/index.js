/*
 * Frontend UI component library for the CORI Data API 
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
export { Button, Input, Label } from './index2.js';
export { AmplifyContext, default as AmplifyContextProvider } from './index3.js';
export { ApiContext, default as ApiContextProvider } from './index4.js';
export { default as CategoricalLegend } from './index5.js';
export { default as GeocoderControl } from './index6.js';
export { default as HoverInfo } from './index7.js';
import MAP_STYLE from './index8.js';
export { default as PM } from './index9.js';

// Testy stuff
function helloAnything(thing) {
    return `Hello ${thing}!`;
}
/**
 * This is the primary Mapbox basemap style used in CORI/RISI frontend mapping applications
 *
 * <link href="https://api.mapbox.com/mapbox-gl-js/v3.5.1/mapbox-gl.css" rel="stylesheet">
 * <script src="https://api.mapbox.com/mapbox-gl-js/v3.5.1/mapbox-gl.js"></script>
 * <div id="map" style="position: relative; top: 0; bottom: 0; width: 720px; height: 480px"></div>
 * <script>
 * mapboxgl.accessToken = 'pk.eyJ1IjoicnVyYWxpbm5vIiwiYSI6ImNqeHl0cW0xODBlMm0zY2x0dXltYzRuazUifQ.zZBovoCHzLIW0wCZveEKzA';
 * const map = new mapboxgl.Map({
 *     container: 'map', // container ID
 *     // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
 *     style: 'mapbox://styles/ruralinno/cl010e7b7001p15pe3l0306hv', // style URL
 *     center: [-80, 40], // starting position [lng, lat]
 *     zoom: 3.5 // starting zoom
 * });
 * </script>
 *
 * ```ts
 * import { coriLightMapStyle } from "@cori-risi/cori.data.api";
 *
 * // ...
 *
 * <Map mapboxAccessToken={MAPBOX_TOKEN}
 *      mapStyle={{...coriLightMapStyle}} >
 *
 * ```
 * */
const coriLightMapStyle = (Object.assign({}, MAP_STYLE));

export { coriLightMapStyle, helloAnything };
//# sourceMappingURL=index.js.map
