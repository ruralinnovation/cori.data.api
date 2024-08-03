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
export { default as AmplifyContextProvider, AmplifyContext }  from "./@cori-risi/cotexts/AmplifyContextProvider";
export { default as ApiContextProvider, ApiContext, ApiContextType } from "./@cori-risi/cotexts/ApiContextProvider";
// export { default as BarChart } from "./@cori-risi/components/BarChart";
export { default as CategoricalLegend } from "./@cori-risi/components/CategoricalLegend";
// export { default as ControlPanel } from "./@cori-risi/components/ControlPanel"
// export { default as LineChart } from "./@cori-risi/components/LineChart";
export { default as GeocoderControl } from "./@cori-risi/components/GeocoderControl";

import MAP_STYLE from "./@cori-risi/mapbox/styles/ruralinno/cl010e7b7001p15pe3l0306hv/style.json";

// Make a copy of the main basemap style
export const coriLightMapStyle: MapStyle = ({
    ...MAP_STYLE
}) as MapStyle;
