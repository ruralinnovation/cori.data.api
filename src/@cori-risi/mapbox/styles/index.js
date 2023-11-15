// import MAP_STYLE from './ruralinno/cl010e7b7001p15pe3l0306hv/style.json';
import MAP_STYLE from './ruralinno/clhgnms6802i701qn0c9y0pow/style.json';
import CONTOUR_STYLE from './contour.json';
import colors from "../colors";

// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/

// Make a copy of the main basemap style
export const mapboxStyle = {
    ...MAP_STYLE,
    // sources: {
    //   ...MAP_STYLE.sources,
    //   "mapbox": {
    //     "url": "mapbox://styles/mergingfutures/ckyn2t9jv0una14prs29fkgy2",
    //     "type": "vector"
    //   }
    // }
};

// Examples of layer styles...

// export const fillLayer = {
//     id: 'county_broadband_farm_bill_eligibility_fill_layer',
//     source: 'test',
//     type: 'fill',
//     paint: {
//         'fill-color': '#0080ff', // blue color fill
//         'fill-opacity': 0.5,
//     },
// };

// export const lineLayer = {
//     id: 'county_broadband_farm_bill_eligibility_line_layer',
//     source: 'test',
//     type: 'line',
//     paint: {
//         'line-color': 'black',
//     },
// };

// bb_map_co_2022decareav3d
export const bb_co_100_20 = {
    "sources": [{
        "id": "bb_co_100_20",
        "type": "vector",
        "url": "mapbox://ruralinno.bb_map_co_2022decareav3e",
        "generateId": true
    }],
    "layers": [
        {
            "id": "bb_co_100_20.style",
            "source": "bb_co_100_20",
            "source-layer": "sch_broadbandbb_map_co_2022decareav3e",
            "type": "fill",
            "paint": {
                // "fill-color": "#0080ff", // blue color fill
                "fill-color": [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    'rgba(255, 255, 255, 0.5)',
                    [
                        "match", ["get", "co_category_area" ],
                        ...((obj) => {
                            const array = [];
                            for (let k in obj) {
                                if (obj.hasOwnProperty(k)) {
                                    let category = "Not Reported";
                                    if (k === "served_area") {
                                        category = ("Served");
                                    } else if (k === "underserved_area") {
                                        category = ("Underserved");
                                    } else if (k === "unserved_area") {
                                        category = ("Unserved");
                                    } else if (k === "not_reported") {
                                        category = ("Not Reported");
                                    } else break;
                                    array.push(category);
                                    array.push(obj[k]);
                                    console.log(`${category}:  ${obj[k]}`);
                                }
                            }
                            return array;
                        })(colors["legend_colors"]["bb_bead_categories"]),
                        colors["legend_colors"]["bb_bead_categories"]["default"]
                    ]
                ],
                // "fill-opacity": 0.25,
                "fill-opacity": [
                    "interpolate", [ "linear" ],
                    ["zoom"],
                    0, 0,
                    3, 0.01,
                    4, 0.75,
                    7, 1.0,
                    8, 1.0,
                    9, 0.75,
                    10, 0.05,
                    11, 0.0
                ]
            },
        }
    ]
};

// bb_map_tr_100_20_2022june (bb_tr_100_20)
export const bb_tr_100_20 = {
    "sources": [{
        "id": "bb_tr_100_20",
        "type": "vector",
        "url": "mapbox://ruralinno.bb_map_tr_2022decareav3", // "mapbox://ruralinno.tr_100_20_2022_z11z9", // styles/ruralinno/cli4w1xuu0a0v2bpkmkeb60a0"
        "generateId": true
    }],
    "layers": [
        {
            "id": "bb_tr_100_20.style",
            "source": "bb_tr_100_20",
            "source-layer": "sch_broadbandbb_map_tr_category_2022decareav3e", // "sch_broadbandbb_map_tr_100_20_2022decareav2",
            "type": "fill",
            "paint": {
                // "fill-color": "#0080ff", // blue color fill
                "fill-color": [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    'rgba(255, 255, 255, 0.5)',
                    [
                        "match", ["get", "category" ], // "bl_100_20_area"],
                        ...((obj) => {
                            const array = [];
                            for (let k in obj) {
                                if (obj.hasOwnProperty(k)) {
                                    let category = "Not Reported";
                                    if (k === "served_area") {
                                        category = ("Served");
                                    } else if (k === "underserved_area") {
                                        category = ("Underserved");
                                    } else if (k === "unserved_area") {
                                        category = ("Unserved");
                                    } else if (k === "not_reported") {
                                        category = ("Not Reported");
                                    } else break;
                                    array.push(category);
                                    array.push(obj[k]);
                                    console.log(`${category}:  ${obj[k]}`);
                                }
                            }
                            return array;
                        })(colors["legend_colors"]["bb_bead_categories"]),
                        colors["legend_colors"]["bb_bead_categories"]["default"]
                    ]
                ],
                // "fill-opacity": 0.25,
                "fill-opacity": [
                    "interpolate", [ "linear" ],
                    ["zoom"],
                    0, 0,
                    9, 0.01,
                    10, 1.0,
                    11, 1.0,
                    15, 1.0,
                    18, 0.05
                ]
            },
        }
    ]
};

export const contourStyle = {
    ...CONTOUR_STYLE
};

export const block_bb_map_style = {
    id: 'block_bb_map_style',
    source: 'county_geojson_test',
    type: 'fill',
    "paint": {
        // "fill-color": "#0080ff", // blue color fill
        "fill-color": [
            "match", ["get", "category"],
            "Served", colors["legend_colors"]["bb_bead_categories"]["served_area"],
            "Underserved", colors["legend_colors"]["bb_bead_categories"]["underserved_area"],
            "Unserved", colors["legend_colors"]["bb_bead_categories"]["unserved_area"],
            "Not Reported", colors["legend_colors"]["bb_bead_categories"]["not_reported"],
            "rgb(255, 255, 255)" // <- undefined ?
        ],
        'fill-opacity': .7
    }
};

export const slippy_map_style = {
    id: 'slippy_map_style',
    source: 'county_geojson_test',
    type: 'fill',
    paint: {
        // 'fill-color': [
        //     "interpolate",
        //     ["linear"], ["get", "overall_loss_score"],
        //     0, "#FECEB8",
        //     100, "#B11A00"
        // ],
        "fill-color": [
            "match", ["get", "overall_loss_rating"],
            1, "#2F2CBA",
            2, "#58B4ED",
            3, "#f0cf48",
            4, "#FA804A",
            5, "#B11A00",
            "dimgray"
        ],
        'fill-opacity': .7
    }
};
