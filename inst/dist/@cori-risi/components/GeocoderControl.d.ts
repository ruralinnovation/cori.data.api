import { MarkerProps, ControlPosition } from 'react-map-gl';
/**
 * This is a Geocoder search component that can be added to any `react-map-gl` Map component.
 *
 * ```ts
 * import mapboxgl from 'mapbox-gl';
 * import Map, { Source, Layer } from 'react-map-gl';
 *
 * import { GeocoderControl } from "@cori-risi/cori.data.api";
 *
 * import "mapbox-gl/dist/mapbox-gl.css";
 *
 * mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
 *
 * // ...
 *
 * <Map mapboxAccessToken={MAPBOX_TOKEN}
 *      {...} >
 *    <Source {...} >
 *        <Layer {...} /> :
 *    </Source>
 *    <GeocoderControl mapboxAccessToken={MAPBOX_TOKEN} position="top-left" />
 * </Map>
 * ```
 *
 *  @param props.mapboxAccessToken - Mapbox API token
 *  @param props.marker - `true` or `false` to place marker on result once selected (default: `false`)
 *  @param props.position - CSS class to position control in "top-left", "top-right", "bottom-left" or "bottom-right" of the map pane
 */
export default function GeocoderControl(props: {
    mapboxAccessToken: string;
    marker?: boolean | Omit<MarkerProps, 'longitude' | 'latitude'>;
    position: ControlPosition;
}): null;
//# sourceMappingURL=GeocoderControl.d.ts.map