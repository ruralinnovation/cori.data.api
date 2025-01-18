/*
 * Frontend UI component library for the CORI Data API 
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
export { Button, Input, Label } from './@cori-risi/components/basic.js';
export { AmplifyContext, default as AmplifyContextProvider } from './@cori-risi/contexts/AmplifyContextProvider.js';
export { ApiContext, default as ApiContextProvider } from './@cori-risi/contexts/ApiContextProvider.js';
export { default as CategoricalLegend } from './@cori-risi/components/CategoricalLegend.js';
export { default as GeocoderControl } from './@cori-risi/components/GeocoderControl.js';
export { default as HoverInfo } from './@cori-risi/components/HoverInfo.js';
export { mapboxGeocode } from './@cori-risi/mapbox/index.js';
import MAP_STYLE from './@cori-risi/mapbox/styles/ruralinno/cl010e7b7001p15pe3l0306hv/style.json.js';

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
//# sourceMappingURL=cori.data.api.js.map
