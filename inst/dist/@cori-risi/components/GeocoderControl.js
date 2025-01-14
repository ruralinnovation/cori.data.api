/*
 * Frontend UI component library for the CORI Data API 
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
import * as React from 'react';
import { useState } from 'react';
import { useControl, Marker } from 'react-map-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

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
function GeocoderControl(props) {
    // } & GeocoderControlProps) {
    const [marker, setMarker] = useState(null);
    const geocoder_props = Object.assign({}, props);
    const geocoder = useControl(() => {
        const ctrl = new MapboxGeocoder(Object.assign(Object.assign({}, geocoder_props), { marker: marker || false, accessToken: geocoder_props.mapboxAccessToken }));
        if (!!geocoder_props.onLoading)
            ctrl.on('loading', geocoder_props.onLoading);
        if (!!geocoder_props.onResults)
            ctrl.on('results', geocoder_props.onResults);
        if (!!geocoder_props.onResult)
            ctrl.on('result', evt => {
                var _a;
                if (geocoder_props.onResult !== undefined)
                    geocoder_props.onResult(evt);
                const { result } = evt;
                const location = result &&
                    (result.center || (((_a = result.geometry) === null || _a === undefined ? undefined : _a.type) === 'Point' && result.geometry.coordinates));
                if (location && geocoder_props.marker) {
                    const markerProps = typeof geocoder_props.marker === 'object' ? geocoder_props.marker : {};
                    // noinspection TypeScriptValidateTypes
                    setMarker(React.createElement(Marker, Object.assign({}, markerProps, { longitude: location[0], latitude: location[1] })));
                }
                else {
                    setMarker(null);
                }
            });
        if (!!geocoder_props.onError)
            ctrl.on('error', geocoder_props.onError);
        return ctrl;
    }, {
        position: geocoder_props.position
    });
    // @ts-ignore (TS2339) private member
    if (geocoder.hasOwnProperty("_map") && geocoder["_map"]) {
        if (geocoder.getProximity() !== geocoder_props.proximity && geocoder_props.proximity !== undefined) {
            geocoder.setProximity(geocoder_props.proximity);
        }
        if (geocoder.getRenderFunction() !== geocoder_props.render && geocoder_props.render !== undefined) {
            geocoder.setRenderFunction(geocoder_props.render);
        }
        if (geocoder.getLanguage() !== geocoder_props.language && geocoder_props.language !== undefined) {
            geocoder.setLanguage(geocoder_props.language);
        }
        if (geocoder.getZoom() !== geocoder_props.zoom && geocoder_props.zoom !== undefined) {
            geocoder.setZoom(geocoder_props.zoom);
        }
        if (geocoder.getFlyTo() !== geocoder_props.flyTo && geocoder_props.flyTo !== undefined) {
            geocoder.setFlyTo(geocoder_props.flyTo);
        }
        if (geocoder.getPlaceholder() !== geocoder_props.placeholder && geocoder_props.placeholder !== undefined) {
            geocoder.setPlaceholder(geocoder_props.placeholder);
        }
        if (geocoder.getCountries() !== geocoder_props.countries && geocoder_props.countries !== undefined) {
            geocoder.setCountries(geocoder_props.countries);
        }
        if (geocoder.getTypes() !== geocoder_props.types && geocoder_props.types !== undefined) {
            geocoder.setTypes(geocoder_props.types);
        }
        if (geocoder.getMinLength() !== geocoder_props.minLength && geocoder_props.minLength !== undefined) {
            geocoder.setMinLength(geocoder_props.minLength);
        }
        if (geocoder.getLimit() !== geocoder_props.limit && geocoder_props.limit !== undefined) {
            geocoder.setLimit(geocoder_props.limit);
        }
        if (geocoder.getFilter() !== geocoder_props.filter && geocoder_props.filter !== undefined) {
            geocoder.setFilter(geocoder_props.filter);
        }
        if (geocoder.getOrigin() !== geocoder_props.origin && geocoder_props.origin !== undefined) {
            geocoder.setOrigin(geocoder_props.origin);
        }
        if (geocoder.getAutocomplete() !== geocoder_props.autocomplete && geocoder_props.autocomplete !== undefined) {
            geocoder.setAutocomplete(geocoder_props.autocomplete);
        }
        if (geocoder.getFuzzyMatch() !== geocoder_props.fuzzyMatch && geocoder_props.fuzzyMatch !== undefined) {
            geocoder.setFuzzyMatch(geocoder_props.fuzzyMatch);
        }
        if (geocoder.getRouting() !== geocoder_props.routing && geocoder_props.routing !== undefined) {
            geocoder.setRouting(geocoder_props.routing);
        }
        if (geocoder.getWorldview() !== geocoder_props.worldview && geocoder_props.worldview !== undefined) {
            geocoder.setWorldview(geocoder_props.worldview);
        }
    }
    return marker;
}

export { GeocoderControl as default };
//# sourceMappingURL=GeocoderControl.js.map
