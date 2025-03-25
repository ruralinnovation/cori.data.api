import * as global_types from "./globals";
import { MapStyle } from "react-map-gl"

// Testy stuff
export function helloAnything(thing: string): string {
    return `Hello ${thing}!`
}

export {
    Button,
    Input,
    Label
} from "./@cori-risi/components/basic";

// Actual API
export { default as AmplifyContextProvider, AmplifyContext }  from "./@cori-risi/contexts/AmplifyContextProvider";
export { default as ApiContextProvider, ApiContext, ApiContextType } from "./@cori-risi/contexts/ApiContextProvider";
// export { default as BarChart } from "./@cori-risi/components/BarChart";
export { default as CategoricalLegend } from "./@cori-risi/components/CategoricalLegend";
// export { default as ControlPanel } from "./@cori-risi/components/ControlPanel"
// export { default as LineChart } from "./@cori-risi/components/LineChart";
export { default as FeedbackButton } from "./@cori-risi/components/FeedbackButton";
export { default as GeocoderControl } from "./@cori-risi/components/GeocoderControl";
export { default as HoverInfo, HoverObject } from "./@cori-risi/components/HoverInfo";
export { default as InfoTooltip } from "./@cori-risi/components/InfoTooltip";
export { default as CatLegend } from "./@cori-risi/components/CatLegend";

export { mapboxGeocode } from "./@cori-risi/mapbox";
import MAP_STYLE from "./@cori-risi/mapbox/styles/ruralinno/cl010e7b7001p15pe3l0306hv/style.json";

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
export const coriLightMapStyle: MapStyle = ({
    ...MAP_STYLE
}) as MapStyle;
