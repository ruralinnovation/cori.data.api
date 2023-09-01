import bbox from '@turf/bbox';
import centroid from '@turf/centroid';
// import debounce from 'lodash/debounce';
// import { polygon } from '@turf/helpers';
import { multiPolygon } from "@turf/helpers";

export function convertStrToNum (num) {
    console.log(num.toString().substring(1));

    // if (num.toString().match(/^+/) !== null || num.toString().match(/^-/) !== null) {
    //     return +num.toString().substring(1);
    // } else {
    return +num;
    // }
}

/**
 *
 * @param longitude
 * @param latitude
 *
 * From https://stackoverflow.com/questions/14329691/convert-latitude-longitude-point-to-a-pixels-x-y-on-mercator-projection
 *
 * > The Mercator map projection is a special limiting case of the Lambert Conic Conformal map projection
 * >   with the equator as the single standard parallel. All other parallels of latitude are straight lines
 * >   and the meridians are also straight lines at right angles to the equator, equally spaced. It is the
 * >   basis for the transverse and oblique forms of the projection. It is little used for land mapping purposes
 * >   but is in almost universal use for navigation charts. As well as being conformal, it has the particular
 * >   property that straight lines drawn on it are lines of constant bearing. Thus navigators may derive their
 * >   course from the angle the straight course line makes with the meridians.
 *
 * Mercator projection
 *
 * The formulas to derive projected Easting and Northing coordinates from spherical latitude φ and longitude λ are:
 *
 * E = FE + R (λ – λₒ)
 * N = FN + R ln[tan(π/4 + φ/2)]
 *
 * where λO is the longitude of natural origin and FE and FN are false easting and false northing. In spherical Mercator those values are actually not used, so you can simplify the formula to
 *
 * derivation of the mercator projection (wikipedia)
 *
 * Sources:
 *
 * 1) [OGP Geomatics Committee, Guidance Note Number 7, part 2: Coordinate Conversions and Transformation](https://ge0mlib.com/papers/Guide/IOGP/373-07-2_2015.pdf)
 * 2) [Derivation of the Mercator projection](http://en.wikipedia.org/wiki/Mercator_projection#Derivation_of_the_Mercator_projection)
 * 3) [National Atlas: Map Projections](http://www.nationalatlas.gov/articles/mapping/a_projections.html)
 * 4) [Mercator Map projection](https://stackoverflow.com/questions/1019997/convert-lat-longs-to-x-y-co-ordinates)
 *
 */
export function convertLonLatToMercatorXY (longitude, latitude) {
    const mapWidth = 200;
    const mapHeight = 100;
    const PI = Math.PI;
    const ln = Math.log;
    const tan = Math.tan;

    // get x value
    const x = 1000 * (longitude + 180) * (mapWidth / 360)

    // convert from degrees to radians
    const latRad = latitude * PI / 180;

    // get y value
    const mercN = ln(tan((PI / 4) + (latRad / 2)));
    const y = 1000 * (mapHeight / 2) - (mapWidth * mercN / (2 * PI));

    console.log("converted spherical coords (" + longitude + ", " + latitude + ") to mercator ("
        + x + ", " + y +") in meters"
    )

    return [ x, y ];
}

/**
 *
 * @param minLonLat
 * @param maxLonLat
 *
 * From https://gis.stackexchange.com/questions/19632/how-to-calculate-the-optimal-zoom-level-to-display-two-or-more-points-on-a-map
 *
 * To get the zoom level, you'll need to know the pixel dimensions of your map.
 *   You'll also need to do your math in spherical mercator coordinates.
 *
 * 1) Convert latitude, longitude to spherical mercator x, y.
 * 2) Get distance between your two points in spherical mercator.
 * 3) The equator is about 40m meters long projected and tiles are 256 pixels wide,
 *   so the pixel length of that map at a given zoom level is about 256 * distance/40000000 * 2^zoom.
 *   Try zoom=0, zoom=1, zoom=2 until the distance is too long for the pixel dimensions of your map.
 *
 */
export function getZoomExtentFromPoints (minLonLat, maxLonLat) {
    const [ min_x, min_y ] = convertLonLatToMercatorXY(minLonLat[0], minLonLat[1]);
    const [ max_x, max_y ] = convertLonLatToMercatorXY(maxLonLat[0], maxLonLat[1]);
    const distance_x = max_x - min_x;
    const distance_y = max_y - min_y;

    // 420px = 256 * distance_x / 40000000 * 2 ^ zoom
    // 420 / (256 * distance_x / 40000000) = 2 ^ zoom
    // 420 / (256 * distance_x / 40000000) = Math.pow(2, zoom)
    const zoom = Math.log(420 / (256 * distance_x / 40000000)) / Math.log(2)

    console.log("calculated zoom: ", zoom);

    return zoom;
}

export function getLonLatFromFeature (feature) {

    let [ ctr_lon, ctr_lat, zoom_ext ] = [ null, null, null ];

    if (feature) try {
        console.log("Use bounding box as boundary...");
        const [min_lon, min_lat, max_lon, max_lat] = bbox(feature);
        console.log("[min_lon, min_lat, max_lon, max_lat]: ",
            [min_lon, min_lat, max_lon, max_lat]); // [ -81.843916, 35.543057, -81.826445, 35.559111 ]

        // const boundary = multiPolygon(
        //     [
        //         [
        //             [min_lon, min_lat],
        //             [max_lon, min_lat],
        //             [max_lon, max_lat],
        //             [min_lon, max_lat],
        //             [min_lon, min_lat]
        //         ]
        //     ]);
        // console.log(boundary);

        ctr_lon = (min_lon + max_lon) / 2;
        ctr_lat = (min_lat + max_lat) / 2;

        if (
            ("geometry" in feature
                && "coordinates" in feature.geometry)
        ) {

            try {
                // // TODO:
                //  Fix ERROR: Uncaught Error: Each LinearRing of a Polygon must have 4 or more Positions.
                const boundary = multiPolygon(feature.geometry.coordinates);
                console.log(boundary);

                const [lon, lat] = centroid(boundary);
                ctr_lon = lon;
                ctr_lat = lat;
            } catch (e) {
                console.log("turf error:", e);
                if (("properties" in feature
                    && "lon" in feature.properties
                    && "lat" in feature.properties)
                ) {
                    ctr_lon = convertStrToNum(feature.properties.lon);
                    ctr_lat = convertStrToNum(feature.properties.lat);
                }
            }
        }

        zoom_ext = getZoomExtentFromPoints([ min_lon, min_lat ], [ max_lon, max_lat ]);

    } catch (e) {
        console.log(e);
    }

    return [ ctr_lon, ctr_lat, zoom_ext ];
}

export function jumpMapToFeature (map, feature, zoom) {
    // console.log(feature);

    let [ ctr_lon, ctr_lat, zoom_ext ] = getLonLatFromFeature(feature);

    console.log("calculated zoom_ext: ", zoom_ext);

    if (
        ctr_lon !== null && ctr_lon === ctr_lon
        && ctr_lat !== null && ctr_lat === ctr_lat
    ) {

        if (map) {
            console.log("centroid: ", ctr_lon, ctr_lat);
            // map.flyTo({ // flyTo is a shortcut for zoomTo + panTo
            //     center: [
            //         ctr_lon,
            //         ctr_lon
            //     ],
            //     zoom: 9
            // });
            setTimeout(() => {
                map.getMap().flyTo({ // flyTo is a shortcut for zoomTo + panTo
                    center: [
                        ctr_lon,
                        ctr_lat
                    ],
                    zoom: (zoom_ext) ? Math.floor(zoom_ext - 9) : zoom
                });
            }, 533);
        }
    }
}

export function popUp (map, feature, lon, lat, setPopupInfo) {
    console.log(lon, lat, feature);

    const [ ctr_lon, ctr_lat ] = (
        lon !== null && lon === lon
        && lat !== null && lat === lat &&
        "properties" in feature
    ) ?
        [ lon, lat ] :
        getLonLatFromFeature(feature);

    if (
        ctr_lon !== null && ctr_lon === ctr_lon
        && ctr_lat !== null && ctr_lat === ctr_lat &&
        "properties" in feature
    ) {

        console.log(ctr_lon, ctr_lat);
        console.log(feature['properties']);

        const longitude = ctr_lon;
        const latitude = ctr_lat;
        const label =
            (feature['properties']['block_type']
                && feature['properties']['block_type']  === "auction_904_authorized"
                && feature['properties']['geoid_bl']
                && feature['properties']['applicant']
                && feature['properties']['frn']
                && feature['properties']['sac']
                && feature['properties']['latency']
                && feature['properties']['tier']
                && feature['properties']['geoid_co']
                && feature['properties']['county']
                && feature['properties']['state']
            ) ?
                '<h3>Auction 904 Block<br /> Authorized</h3>'
                + '<hr />'
                + '<table class="popup authorized-block"> '
                + '<tr><td>Geoid</td><td>' + feature['properties']['geoid_bl'] + '</td></tr>'
                + '<tr><td>Applicant</td><td>' + feature['properties']['applicant'] + '</td></tr>'
                + '<tr><td>FRN</td><td>' + feature['properties']['frn'] + '</td></tr>'
                + '<tr><td>SAC</td><td>' + feature['properties']['sac'] + '</td></tr>'
                + '<tr><td>Latency</td><td>' + feature['properties']['latency'] + '</td></tr>'
                + '<tr><td>Tier</td><td>' + feature['properties']['tier'] + '</td></tr>'
                + `<tr><td>County</td><td>${feature['properties']['county']} (${feature['properties']['geoid_co']})` + '</td></tr>'
                + '<tr><td>State</td><td>' + feature['properties']['state'] + '</td></tr>'
                + '</table>' :
                (feature['properties']['block_type']
                    && feature['properties']['block_type']  === "auction_904_ready"
                    && feature['properties']['geoid_bl']
                    && feature['properties']['applicant']
                    && feature['properties']['geoid_co']
                    && feature['properties']['county']
                    && feature['properties']['state']
                ) ?
                    '<h3>Auction 904 Block<br /> Ready To Authorize</h3>'
                    + '<hr />'
                    + '<table class="popup authorized-block"> '
                    + '<tr><td>Geoid</td><td>' + feature['properties']['geoid_bl'] + '</td></tr>'
                    + '<tr><td>Applicant</td><td>' + feature['properties']['applicant'] + '</td></tr>'
                    + `<tr><td>County</td><td>${feature['properties']['county']} (${feature['properties']['geoid_co']})` + '</td></tr>'
                    + '<tr><td>State</td><td>' + feature['properties']['state'] + '</td></tr>'
                    + '</table>' :
                    (feature['properties']['block_type']
                        && feature['properties']['block_type']  === "auction_904_defaults"
                        && feature['properties']['geoid_bl']
                        && feature['properties']['applicant']
                        && feature['properties']['geoid_co']
                        && feature['properties']['county']
                        && feature['properties']['state']
                    ) ?
                        '<h3>Auction 904 Block<br /> Defaults</h3>'
                        + '<hr />'
                        + '<table class="popup authorized-block"> '
                        + '<tr><td>Geoid</td><td>' + feature['properties']['geoid_bl'] + '</td></tr>'
                        + '<tr><td>Applicant</td><td>' + feature['properties']['applicant'] + '</td></tr>'
                        + `<tr><td>County</td><td>${feature['properties']['county']} (${feature['properties']['geoid_co']})` + '</td></tr>'
                        + '<tr><td>State</td><td>' + feature['properties']['state'] + '</td></tr>'
                        + '</table>' :
                        (feature['properties']
                            && feature['properties']['state']
                        ) ?
                            "Feature in " + feature['properties']['state']:
                            (feature['properties']
                                && feature['properties']['geoid_co']
                                && feature['properties']['name_co']
                                && feature['properties']['state_abbr']
                            ) ?
                                ` ${feature['properties']['name_co']} (${feature['properties']['geoid_co']}), ${feature['properties']['state_abbr']}`:
                                "Feature";

        // {
        //     "frn": "0010669430",
        //     "sac": "239039",
        //     "tier": "Gigabit",
        //     "state": "North Carolina",
        //     "county": "Rutherford",
        //     "latency": "Low",
        //     "geoid_bl": "371619601001000",
        //     "geoid_co": "37161",
        //     "applicant": "Time Warner Cable Information Services (North Caro",
        //     "da_numbers": "DA 22-280, DA 22-402",
        //     "winning_bidder": "CCO Holdings, LLC",
        //     "winning_bid_total_in_state": 141530106.4,
        //     "number_of_locations_in_state": 128040
        // }

        console.log("feature popup:", {
            ...feature.properties,
            longitude,
            latitude,
            label
        });

        setPopupInfo({
            ...feature.properties,
            longitude,
            latitude,
            label
        });

        // calculate the bounding box of the feature
        // const [minLng, minLat, maxLng, maxLat] = bbox(feature);
        // if (typeof map === 'object' && map !== null) {
        //
        //     map.fitBounds(
        //         [
        //             [minLng, minLat],
        //             [maxLng, maxLat],
        //         ],
        //         { padding: 40, duration: 1000 },
        //     );
        // }
    }
}

function compareFeaturePriorityToF(feature, f) {
    if (f.layer.source === "auction-904-defaults-blocks") {
        return f;
    } else if (feature.layer.source !== "auction-904-defaults-blocks"
        && f.layer.source === "auction-904-ready-blocks"
    ) {
        return f;
    } else if (feature.layer.source !== "auction-904-defaults-blocks"
        && feature.layer.source !== "auction-904-ready-blocks"
        && f.layer.source === "auction-904-authorized-blocks"
    ) {
        return f;
    } else if (feature.layer.source !== "auction-904-defaults-blocks"
        && feature.layer.source !== "auction-904-ready-blocks"
        && feature.layer.source !== "auction-904-authorized-blocks"
    ) {
        return f;
    }
    return feature;
}

export function selectTopFeature (features) {
    let feature = null;

    // debugger;
    
    // feature.layer
    // Object { id: "auction-904-ready-blocks-fill", type: "fill", source: "auction-904-ready-blocks", paint: {…}, layout: {} }
    // 
    // feature.layer.source
    // "auction-904-ready-blocks"

    const current_authorized_blocks_page = window.location.pathname;

    // Determine which feature in features should have the highest priority when multiple features are clicked on
    features.map(f => {
        if (feature !== null) {
            if ("layer" in feature && "source" in feature.layer) {
                if ("layer" in f && "source" in f.layer) {
                    if (!!current_authorized_blocks_page) {
                        if (current_authorized_blocks_page.match(/auction_904_authorized/) !== null) {
                            if (f.layer.source === "auction-904-authorized-blocks")  {
                                feature = f;
                            } else if (feature.layer.source !== "auction-904-authorized-blocks") {
                                feature = compareFeaturePriorityToF(feature, f);
                            }
                        } else if (current_authorized_blocks_page.match(/auction_904_ready/) !== null) {
                            if (f.layer.source === "auction-904-ready-blocks")  {
                                feature = f;
                            } else if (feature.layer.source !== "auction-904-ready-blocks") {
                                feature = compareFeaturePriorityToF(feature, f);
                            }
                        } else if (current_authorized_blocks_page.match(/auction_904_defaults/) !== null) {
                            if (f.layer.source === "auction-904-defaults-blocks")  {
                                feature = f;
                            } else if (feature.layer.source !== "auction-904-defaults-blocks") {
                                feature = compareFeaturePriorityToF(feature, f);
                            }
                        }
                    } else {
                        feature = compareFeaturePriorityToF(feature, f);
                    }
                } else {
                    feature = f;
                }
            } else {
                feature = f;
            }
        } else feature = f;
    });

    return feature;
}

export function updateSelectableDataLayerIds(current_selectable_layer_ids, selected_feature_data) {

    if ("selected_blocks" in selected_feature_data && selected_feature_data.selected_blocks.length > 0) {
        if (selected_feature_data.selected_blocks.filter(b => (b.block_type === "auction_904_authorized")).length > 0
            && "geometry" in selected_feature_data.selected_blocks.filter(b => (b.block_type === "auction_904_authorized"))[0]
            && "coordinates" in selected_feature_data.selected_blocks.filter(b => (b.block_type === "auction_904_authorized"))[0].geometry
        ) {
            current_selectable_layer_ids.unshift('auction-904-authorized-blocks-fill');
        }

        if (selected_feature_data.selected_blocks.filter(b => (b.block_type === "auction_904_ready")).length > 0
            && "geometry" in selected_feature_data.selected_blocks.filter(b => (b.block_type === "auction_904_ready"))[0]
            && "coordinates" in selected_feature_data.selected_blocks.filter(b => (b.block_type === "auction_904_ready"))[0].geometry
        ) {
            current_selectable_layer_ids.unshift('auction-904-ready-blocks-fill');
        }

        if (selected_feature_data.selected_blocks.filter(b => (b.block_type === "auction_904_defaults")).length > 0
            && "geometry" in selected_feature_data.selected_blocks.filter(b => (b.block_type === "auction_904_defaults"))[0]
            && "coordinates" in selected_feature_data.selected_blocks.filter(b => (b.block_type === "auction_904_defaults"))[0].geometry
        ) {
            current_selectable_layer_ids.unshift('auction-904-defaults-blocks-fill');
        }
    }
}
