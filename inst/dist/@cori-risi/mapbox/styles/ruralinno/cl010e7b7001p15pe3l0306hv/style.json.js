/*
 * Frontend UI component library for the CORI Data API 
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var version = 8;
var name = "LIVE - CORI light basemap - county labels";
var metadata = {
	"mapbox:type": "default",
	"mapbox:origin": "light-v10",
	"mapbox:autocomposite": true,
	"mapbox:groups": {
		"1444855769305.6016": {
			name: "Tunnels",
			collapsed: true
		},
		"1444855786460.0557": {
			name: "Roads",
			collapsed: true
		},
		"1444855799204.86": {
			name: "Bridges",
			collapsed: true
		},
		"1444934295202.7542": {
			name: "Admin boundaries",
			collapsed: false
		}
	},
	"mapbox:sdk-support": {
		js: "0.54.0",
		android: "7.4.0",
		ios: "4.10.0"
	},
	"mapbox:uiParadigm": "layers",
	"mapbox:thumb": "data:image/webp;base64,UklGRmAJAABXRUJQVlA4TFQJAAAvO8AOAPX4drZtmWTXts7/wMzUqCCLGZOCMjCzbfx/1jFYYr9m+zeF5Gqx8bj3bozqqoouhWLj6dCYQqn+K1W6Vb1HB+Nn+HqXMatDQowkSVJTM/xwkv+mwu1OF8S2kRxJ7PyjfbMzs6a7+j8Be9jFwDSO7Za6ajtXwy/CHsEeYqSRsWzFQAbkSKlndkzfLGcN0zHLlJYZyNmbaOFmTdM0apq3d+t5Y906dr68rJ16zskdY1kaCWdraPJQE8CKlJazrjk+nrVM2/y0Q8ZpQtFux7BmD3bG8fxnncEJvUfnnPObbeMBsKIKWwJLA5PS8njL3DLP4CPmpnkG4+PxuFaBT22n9wiwUuTNx93WpXE+s4bmwJJyWCFwVAX3SJuMZ8fb5ic/uYKb5qc/HY+XqSvlgEmPIYI91BF5/X6fOW3Hpn0x7BGCGMgOIUVMAPdLSmn8xk/+ddM0zT/NUlqmDDhHT0NSj4pzfDEiNh53M7rOC/ElKUxkESgctcF75jilNBuP35gtU2kUjLo1fQicFbF5v7lCb488VM7WALsaKYd2zVFMDJBTSmn50/F4uY8oH9g2dlja+Pv3HebWDpZz2CAZV8BymTpIaTYb/3SZ9qXU6tvEuVU4hpI2Xye6NVcGNl5gQmAtIFJK47Qcj4/vYUcXT2V/e+hiR0dKjfeJAXNqGGNjZyGHYGhSSrPZcjkbH+83Acwe6dm7BBtfXc6umi7y9rHj4OwwIMkKSw5gmVJqm/FsNhvPlmlc+PcAb+MGLpNvvzvdHEb//8OovHFcQ+Yq/v9FAAPYcsiPFeA6pdTGbLkcz8YpXVyWKaW1nwkYRs7diBfOOr8KN/XMr5rQ0a5ZP9bB2pgIyCgcIBlYpJT6JqXl+HicUjv5Y0rp+jbBBm1ktlJfyo4HjVCu55uvNWTWNgGEcRjHAhvXJeOfjmep/JFd4HvbAxzyF3Odt55noJNjJLBCyEgTLJk6peO0PB7PlmVLsAG10hVYoHr+7tb9Xnc+Gq9LkmUp5EAAOaWOWc5mhcmkYAH+9Y69oGxQ5rm+/blu2ZcnO8ieP+xiF/UnHn5CsSdvpGRwWo4fz5bj8QTIKdUqxA4DhjDSXN3bt/Ha18gPbdnClr2jx9/+C/GJd2vFG1e2C6uWywDw0KQAUNdOEHYNtdW/9Ppr//pCNFKyMNiw+I5lm+I8GpNlnQuACwNyDES2sNDdYzNgTqQqy4CycbYlyn/fGMJR56jXN5Bxl/k8lnLsCjmL/zgc0lfHoSnKIiaEXOZssAXrI0t7EE3HQLYenf4V9p3x7Le+duJxX2Uu4IN6w2A8AvZRYLMfBfv7gOs6f/4Qh9THjV3bkxx+9L5vzc/c983rz+06z4+BKDFWCKySTMgGEOW5ydRzy6pCJj76rcn68b9LrtNns3fqsW0A+cjYLlkRkjH3+nFcfyKbqtCX7v4vzs98Z5ulUMGaHrGvbYdldC/acUDMI+ogY9183D4xWa0atXp1Br1lYw5HKnGOiHB2CO/nHtr6vCTlx0cmz3Gsv3eHObHhVctqJNe877Ab7FbtEc2e1A6XKBS5tkS5X360Y9aVjhVZn9gJGwSNx7N9/c6ZCgLgO3R6exWZUku4tlww9q0U0NLnbVRPI7tw57hOOqLMqjr1TIaJXRYSZIVsii+vgOg4skLzlWTD3c//qfA+yp242/sFnDDP4So+huswWBjmlsucf4/xnfEEj8BG783+2+m1R/Cwpne5evS5sQcLGVuteLpeZ7t/G9xbff0Z2zLAfWyKHbTUtLDN0QHWoN5OvctX2717l9Pva6cXffKx4bCViTpG+tVNnNTa5To8WwdB2UMAAw2Zon5/ALs1zbroWo0Y4X6velAf1fMDOyYxtTE8CTd9B3XbZaOa7TodvmY9vT4jvkIrjFmfqvz74xFhs1bO88CeoLNJpRweGiaO6s0RMyD5SJu+O73drb1VV6tOo9aXe3UGdR4CQ54G9w7T69Pt06SzDDx8Hqf1kXqv+rVsSi2rSZ6bubRsjXZYAOrTBwatmpl3mvaI2tXLv/+bbsw9QFv16qXf50bdXd7OZbV7/XOnV6/3p9ml79Y1ZDzSwgXLPLmji9aluLFNAQ9oAxZdfaknii934lsv8XK2bcAjuF9Pr6/O5W/1a0BhTB523M/AWetlA3tmaFOmXUO5w1i2AQLY0+L3n6c4MEOlxchsfJZ6hhtxcSoAnriA7AlgABsJMGZOcfFHk+sMho1j6TdNfOzUi6rwNkXLqsFl2GDLMjmA36dexbYL3nzu+M2J8ZIFfPpBwZZCtilmwEVh+P79qDeifhpzKNl4Pvdv2mupHWSAAUPx+47wnrFx4b4NBocBs4uqJf0XpTady3fw3Mhy/nZW2/5EGHBYVRgb3IEpWqZ0BlsZA7aFW5fuMyencAAHhvuQ8ye+/fD/fvUw4/vvtso8oiDLYLhPX08oOgYl4u6xhubkBMIc/hqo+UQYYmWxr3MIq5CJN2mq5wDKOdew+XfldefSRoX6NZKV69dHAMXLeD/AddTuqU85SNTfH1s4fAR07k8ekrXJlWXqeDtMNhXYR0F5VQKOHGHxcnyJ79kMC/ousDIHp7Zm2CMaCsbK1psuubIKWlaZrZyzye1oO4cmYwCZty45t7eYTIB/AiMHWlV+U9yrjE3k/E/yv9chv6lqOrXQ2oyrr1lzZ8DyAuNQR28WDBhTqMAR7/7MEACWb5ubKeJ7VUxdW8haAAK7otSADZji39Rd2pUKxPyjO8HTp+AHDmFccMG5BLBsF7xYrOIWzjJtvVtw/sKHF/sLgL9vCYxs4YKHZh8Zm1U1nZqa/PTXBuwdMiLP7OLgrULXSAaBsYRs38GW/rtgyWyMlV9EMSMdAKtGqu7Td3BzPBgxAOrjqKZ0wj16DETYvrZc31VRqj24OoBzp4u7vpT7zvk4OqBEuT4seAG4DFeWbLQ+9ZJclv13AxI8+yvIA/qFKR+AwSIfCVAFYJdAoG99F0uAASJ+7Xi5EzjuZk6s0hOYTLCZqwIsl4NhOjk0QLgQkevcYqaLo5VxjzyzJ/ltOJTB8wgDqICNVX3/cUwBt5OcFdkG/4OAbDbok6v49AOAgnrQJKaTmMi5qmKxcLBaev4vkeePDFjAp+cUg2cm51YN1WMoN56HKE4rgx0vnz19+Fc/ub79ZLILKw5pa4UxHOSSqQE="
};
var center = [
	-72.26808525539167,
	43.37747275058169
];
var zoom = 10.873762090608595;
var bearing = 0;
var pitch = 2;
var sources = {
	composite: {
		url: "mapbox://mapbox.mapbox-terrain-v2,mapbox.mapbox-streets-v8,ruralinno.2pv0vm2z,ruralinno.3v9y79ly,ruralinno.5639ssfg,ruralinno.c504wkuy,ruralinno.7stpbs93,ruralinno.cwz2k5qc,ruralinno.1joudpqe",
		type: "vector"
	}
};
var sprite = "mapbox://sprites/ruralinno/cl010e7b7001p15pe3l0306hv/68n9slz9mfbus83an19oqbf32";
var glyphs = "mapbox://fonts/ruralinno/{fontstack}/{range}.pbf";
var layers = [
	{
		id: "land",
		type: "background",
		layout: {
		},
		paint: {
			"background-color": "hsl(55, 0%, 100%)"
		}
	},
	{
		id: "landcover",
		type: "fill",
		source: "composite",
		"source-layer": "landcover",
		maxzoom: 7,
		layout: {
		},
		paint: {
			"fill-color": "hsl(0, 0%, 100%)",
			"fill-opacity": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				2,
				0.1,
				7,
				0
			],
			"fill-antialias": false
		}
	},
	{
		id: "national-park",
		type: "fill",
		source: "composite",
		"source-layer": "landuse_overlay",
		minzoom: 5,
		filter: [
			"==",
			[
				"get",
				"class"
			],
			"national_park"
		],
		layout: {
		},
		paint: {
			"fill-color": "hsla(150, 6%, 93%, 0.63)",
			"fill-opacity": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				5,
				0,
				6,
				0.5
			]
		}
	},
	{
		id: "landuse",
		type: "fill",
		source: "composite",
		"source-layer": "landuse",
		minzoom: 5,
		filter: [
			"match",
			[
				"get",
				"class"
			],
			[
				"park",
				"airport",
				"glacier",
				"pitch",
				"sand"
			],
			true,
			false
		],
		layout: {
		},
		paint: {
			"fill-opacity": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				5,
				0,
				6,
				[
					"match",
					[
						"get",
						"class"
					],
					"glacier",
					0.5,
					1
				]
			],
			"fill-color": "hsl(150, 0%, 100%)"
		}
	},
	{
		id: "water-shadow",
		type: "fill",
		source: "composite",
		"source-layer": "water",
		layout: {
		},
		paint: {
			"fill-translate-anchor": "viewport",
			"fill-translate": [
				"interpolate",
				[
					"exponential",
					1.2
				],
				[
					"zoom"
				],
				7,
				[
					"literal",
					[
						0,
						0
					]
				],
				16,
				[
					"literal",
					[
						-1,
						-1
					]
				]
			],
			"fill-color": "hsl(185, 7%, 73%)"
		}
	},
	{
		id: "waterway",
		type: "line",
		source: "composite",
		"source-layer": "waterway",
		minzoom: 8,
		layout: {
			"line-cap": [
				"step",
				[
					"zoom"
				],
				"butt",
				11,
				"round"
			],
			"line-join": "round"
		},
		paint: {
			"line-color": "hsl(187, 9%, 81%)",
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.3
				],
				[
					"zoom"
				],
				9,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"canal",
						"river"
					],
					0.1,
					0
				],
				20,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"canal",
						"river"
					],
					8,
					3
				]
			],
			"line-opacity": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				8,
				0,
				8.5,
				1
			]
		}
	},
	{
		id: "water",
		type: "fill",
		source: "composite",
		"source-layer": "water",
		layout: {
		},
		paint: {
			"fill-color": "#cad2d3",
			"fill-opacity": 0.5
		}
	},
	{
		id: "hillshade",
		type: "fill",
		source: "composite",
		"source-layer": "hillshade",
		minzoom: 6,
		layout: {
		},
		paint: {
			"fill-color": [
				"match",
				[
					"get",
					"class"
				],
				"shadow",
				"hsl(0, 0%, 35%)",
				"hsl(0, 0%, 100%)"
			],
			"fill-opacity": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				12,
				[
					"match",
					[
						"get",
						"level"
					],
					[
						67,
						56
					],
					0.02,
					[
						89,
						78
					],
					0.01,
					0.015
				],
				15,
				0
			]
		}
	},
	{
		id: "land-structure-polygon",
		type: "fill",
		source: "composite",
		"source-layer": "structure",
		minzoom: 21.1,
		filter: [
			"all",
			[
				"==",
				[
					"geometry-type"
				],
				"Polygon"
			],
			[
				"==",
				[
					"get",
					"class"
				],
				"land"
			]
		],
		layout: {
		},
		paint: {
			"fill-color": "hsl(156, 20%, 95%)"
		}
	},
	{
		id: "land-structure-line",
		type: "line",
		source: "composite",
		"source-layer": "structure",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			],
			[
				"==",
				[
					"get",
					"class"
				],
				"land"
			]
		],
		layout: {
			"line-cap": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.99
				],
				[
					"zoom"
				],
				14,
				0.75,
				20,
				40
			],
			"line-color": "hsl(156, 20%, 95%)"
		}
	},
	{
		id: "aeroway-polygon",
		type: "fill",
		source: "composite",
		"source-layer": "aeroway",
		minzoom: 11,
		filter: [
			"all",
			[
				"==",
				[
					"geometry-type"
				],
				"Polygon"
			],
			[
				"match",
				[
					"get",
					"type"
				],
				[
					"runway",
					"taxiway",
					"helipad"
				],
				true,
				false
			]
		],
		layout: {
		},
		paint: {
			"fill-opacity": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				11,
				0,
				11.5,
				1
			],
			"fill-color": "hsl(0, 0%, 97%)"
		}
	},
	{
		id: "aeroway-line",
		type: "line",
		source: "composite",
		"source-layer": "aeroway",
		minzoom: 9,
		filter: [
			"==",
			[
				"geometry-type"
			],
			"LineString"
		],
		layout: {
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				9,
				[
					"match",
					[
						"get",
						"type"
					],
					"runway",
					1,
					0.5
				],
				18,
				[
					"match",
					[
						"get",
						"type"
					],
					"runway",
					80,
					20
				]
			],
			"line-color": "hsl(0, 0%, 97%)"
		}
	},
	{
		id: "building-outline",
		type: "line",
		source: "composite",
		"source-layer": "building",
		minzoom: 15,
		filter: [
			"all",
			[
				"!=",
				[
					"get",
					"type"
				],
				"building:part"
			],
			[
				"==",
				[
					"get",
					"underground"
				],
				"false"
			]
		],
		layout: {
		},
		paint: {
			"line-color": "hsl(55, 3%, 87%)",
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				15,
				0.75,
				20,
				3
			],
			"line-opacity": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				15,
				0,
				16,
				1
			]
		}
	},
	{
		id: "building",
		type: "fill",
		source: "composite",
		"source-layer": "building",
		minzoom: 15,
		filter: [
			"all",
			[
				"!=",
				[
					"get",
					"type"
				],
				"building:part"
			],
			[
				"==",
				[
					"get",
					"underground"
				],
				"false"
			]
		],
		layout: {
		},
		paint: {
			"fill-outline-color": "hsl(55, 3%, 87%)",
			"fill-opacity": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				15,
				0,
				16,
				1
			],
			"fill-color": "hsl(55, 5%, 91%)"
		}
	},
	{
		id: "tunnel-street-minor-low",
		type: "line",
		metadata: {
			"mapbox:group": "1444855769305.6016"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"tunnel"
			],
			[
				"step",
				[
					"zoom"
				],
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"street",
						"street_limited",
						"track",
						"primary_link"
					],
					true,
					false
				],
				14,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"street",
						"street_limited",
						"track",
						"primary_link",
						"secondary_link",
						"tertiary_link",
						"service"
					],
					true,
					false
				]
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-cap": "round",
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				12,
				0.5,
				14,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"street",
						"street_limited",
						"primary_link"
					],
					2,
					"track",
					1,
					0.5
				],
				18,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"street",
						"street_limited",
						"primary_link"
					],
					18,
					12
				]
			],
			"line-color": "hsl(185, 7%, 88%)",
			"line-opacity": [
				"step",
				[
					"zoom"
				],
				1,
				14,
				0
			]
		}
	},
	{
		id: "tunnel-street-minor-case",
		type: "line",
		metadata: {
			"mapbox:group": "1444855769305.6016"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"tunnel"
			],
			[
				"step",
				[
					"zoom"
				],
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"street",
						"street_limited",
						"track",
						"primary_link"
					],
					true,
					false
				],
				14,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"street",
						"street_limited",
						"track",
						"primary_link",
						"secondary_link",
						"tertiary_link",
						"service"
					],
					true,
					false
				]
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-cap": "round",
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				12,
				0.75,
				20,
				2
			],
			"line-color": "hsl(185, 12%, 89%)",
			"line-gap-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				12,
				0.5,
				14,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"street",
						"street_limited",
						"primary_link"
					],
					2,
					"track",
					1,
					0.5
				],
				18,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"street",
						"street_limited",
						"primary_link"
					],
					18,
					12
				]
			],
			"line-opacity": [
				"step",
				[
					"zoom"
				],
				0,
				14,
				1
			],
			"line-dasharray": [
				3,
				3
			]
		}
	},
	{
		id: "tunnel-primary-secondary-tertiary-case",
		type: "line",
		metadata: {
			"mapbox:group": "1444855769305.6016"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"tunnel"
			],
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"primary",
					"secondary",
					"tertiary"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-cap": "round",
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				10,
				[
					"match",
					[
						"get",
						"class"
					],
					"primary",
					1,
					0.75
				],
				18,
				2
			],
			"line-color": "hsl(185, 12%, 89%)",
			"line-gap-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				5,
				[
					"match",
					[
						"get",
						"class"
					],
					"primary",
					0.75,
					0.1
				],
				18,
				[
					"match",
					[
						"get",
						"class"
					],
					"primary",
					32,
					26
				]
			],
			"line-dasharray": [
				3,
				3
			]
		}
	},
	{
		id: "tunnel-major-link-case",
		type: "line",
		metadata: {
			"mapbox:group": "1444855769305.6016"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"tunnel"
			],
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"motorway_link",
					"trunk_link"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-cap": "round",
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				12,
				0.75,
				20,
				2
			],
			"line-color": "hsl(185, 12%, 89%)",
			"line-gap-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				12,
				0.5,
				14,
				2,
				18,
				18
			],
			"line-dasharray": [
				3,
				3
			]
		}
	},
	{
		id: "tunnel-motorway-trunk-case",
		type: "line",
		metadata: {
			"mapbox:group": "1444855769305.6016"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"tunnel"
			],
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"motorway",
					"trunk"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-cap": "round",
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				10,
				1,
				18,
				2
			],
			"line-color": "hsl(185, 12%, 89%)",
			"line-gap-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				5,
				0.75,
				18,
				32
			],
			"line-dasharray": [
				3,
				3
			]
		}
	},
	{
		id: "tunnel-construction",
		type: "line",
		metadata: {
			"mapbox:group": "1444855769305.6016"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 14,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"tunnel"
			],
			[
				"==",
				[
					"get",
					"class"
				],
				"construction"
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				14,
				2,
				18,
				18
			],
			"line-color": "hsl(187, 7%, 88%)",
			"line-dasharray": [
				"step",
				[
					"zoom"
				],
				[
					"literal",
					[
						0.4,
						0.8
					]
				],
				15,
				[
					"literal",
					[
						0.3,
						0.6
					]
				],
				16,
				[
					"literal",
					[
						0.2,
						0.3
					]
				],
				17,
				[
					"literal",
					[
						0.2,
						0.25
					]
				],
				18,
				[
					"literal",
					[
						0.15,
						0.15
					]
				]
			]
		}
	},
	{
		id: "tunnel-path",
		type: "line",
		metadata: {
			"mapbox:group": "1444855769305.6016"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"tunnel"
			],
			[
				"==",
				[
					"get",
					"class"
				],
				"path"
			],
			[
				"!=",
				[
					"get",
					"type"
				],
				"steps"
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				15,
				1,
				18,
				4
			],
			"line-dasharray": [
				"step",
				[
					"zoom"
				],
				[
					"literal",
					[
						1,
						0
					]
				],
				15,
				[
					"literal",
					[
						1.75,
						1
					]
				],
				16,
				[
					"literal",
					[
						1,
						0.75
					]
				],
				17,
				[
					"literal",
					[
						1,
						0.5
					]
				]
			],
			"line-color": "hsl(0, 0%, 85%)"
		}
	},
	{
		id: "tunnel-steps",
		type: "line",
		metadata: {
			"mapbox:group": "1444855769305.6016"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 14,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"tunnel"
			],
			[
				"==",
				[
					"get",
					"class"
				],
				"steps"
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				15,
				1,
				16,
				1.6,
				18,
				6
			],
			"line-color": "hsl(0, 0%, 85%)",
			"line-dasharray": [
				"step",
				[
					"zoom"
				],
				[
					"literal",
					[
						1,
						0
					]
				],
				15,
				[
					"literal",
					[
						1.75,
						1
					]
				],
				16,
				[
					"literal",
					[
						1,
						0.75
					]
				],
				17,
				[
					"literal",
					[
						0.3,
						0.3
					]
				]
			]
		}
	},
	{
		id: "tunnel-major-link",
		type: "line",
		metadata: {
			"mapbox:group": "1444855769305.6016"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"tunnel"
			],
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"motorway_link",
					"trunk_link"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-cap": "round",
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				12,
				0.5,
				14,
				2,
				18,
				18
			],
			"line-color": "hsl(187, 7%, 88%)"
		}
	},
	{
		id: "tunnel-pedestrian",
		type: "line",
		metadata: {
			"mapbox:group": "1444855769305.6016"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"tunnel"
			],
			[
				"==",
				[
					"get",
					"class"
				],
				"pedestrian"
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				14,
				0.5,
				18,
				12
			],
			"line-color": "hsl(187, 7%, 88%)",
			"line-dasharray": [
				"step",
				[
					"zoom"
				],
				[
					"literal",
					[
						1,
						0
					]
				],
				15,
				[
					"literal",
					[
						1.5,
						0.4
					]
				],
				16,
				[
					"literal",
					[
						1,
						0.2
					]
				]
			]
		}
	},
	{
		id: "tunnel-street-minor",
		type: "line",
		metadata: {
			"mapbox:group": "1444855769305.6016"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"tunnel"
			],
			[
				"step",
				[
					"zoom"
				],
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"street",
						"street_limited",
						"track",
						"primary_link"
					],
					true,
					false
				],
				14,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"street",
						"street_limited",
						"track",
						"primary_link",
						"secondary_link",
						"tertiary_link",
						"service"
					],
					true,
					false
				]
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-cap": "round",
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				12,
				0.5,
				14,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"street",
						"street_limited",
						"primary_link"
					],
					2,
					"track",
					1,
					0.5
				],
				18,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"street",
						"street_limited",
						"primary_link"
					],
					18,
					12
				]
			],
			"line-color": "hsl(187, 7%, 88%)",
			"line-opacity": [
				"step",
				[
					"zoom"
				],
				0,
				14,
				1
			]
		}
	},
	{
		id: "tunnel-primary-secondary-tertiary",
		type: "line",
		metadata: {
			"mapbox:group": "1444855769305.6016"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"tunnel"
			],
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"primary",
					"secondary",
					"tertiary"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-cap": "round",
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				5,
				[
					"match",
					[
						"get",
						"class"
					],
					"primary",
					0.75,
					0.1
				],
				18,
				[
					"match",
					[
						"get",
						"class"
					],
					"primary",
					32,
					26
				]
			],
			"line-color": "hsl(187, 7%, 88%)"
		}
	},
	{
		id: "tunnel-motorway-trunk",
		type: "line",
		metadata: {
			"mapbox:group": "1444855769305.6016"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"tunnel"
			],
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"motorway",
					"trunk"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-cap": "round",
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				5,
				0.75,
				18,
				32
			],
			"line-color": "hsl(187, 7%, 88%)"
		}
	},
	{
		id: "road-pedestrian-case",
		type: "line",
		metadata: {
			"mapbox:group": "1444855786460.0557"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 12,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"class"
				],
				"pedestrian"
			],
			[
				"match",
				[
					"get",
					"structure"
				],
				[
					"none",
					"ford"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				14,
				2,
				18,
				14.5
			],
			"line-color": "hsl(156, 12%, 92%)",
			"line-opacity": [
				"step",
				[
					"zoom"
				],
				0,
				14,
				1
			]
		}
	},
	{
		id: "road-minor-low",
		type: "line",
		metadata: {
			"mapbox:group": "1444855786460.0557"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"step",
				[
					"zoom"
				],
				[
					"==",
					[
						"get",
						"class"
					],
					"track"
				],
				14,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"track",
						"secondary_link",
						"tertiary_link",
						"service"
					],
					true,
					false
				]
			],
			[
				"match",
				[
					"get",
					"structure"
				],
				[
					"none",
					"ford"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				14,
				[
					"match",
					[
						"get",
						"class"
					],
					"track",
					1,
					0.5
				],
				18,
				12
			],
			"line-color": "hsl(0, 0%, 100%)",
			"line-opacity": [
				"step",
				[
					"zoom"
				],
				1,
				14,
				0
			]
		}
	},
	{
		id: "road-street-low",
		type: "line",
		metadata: {
			"mapbox:group": "1444855786460.0557"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 11,
		filter: [
			"all",
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"street",
					"street_limited",
					"primary_link"
				],
				true,
				false
			],
			[
				"match",
				[
					"get",
					"structure"
				],
				[
					"none",
					"ford"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				12,
				0.5,
				14,
				2,
				18,
				18
			],
			"line-color": "hsl(0, 0%, 100%)",
			"line-opacity": [
				"step",
				[
					"zoom"
				],
				1,
				14,
				0
			]
		}
	},
	{
		id: "road-minor-case",
		type: "line",
		metadata: {
			"mapbox:group": "1444855786460.0557"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"step",
				[
					"zoom"
				],
				[
					"==",
					[
						"get",
						"class"
					],
					"track"
				],
				14,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"track",
						"secondary_link",
						"tertiary_link",
						"service"
					],
					true,
					false
				]
			],
			[
				"match",
				[
					"get",
					"structure"
				],
				[
					"none",
					"ford"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				12,
				0.75,
				20,
				2
			],
			"line-color": "hsl(156, 12%, 92%)",
			"line-gap-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				14,
				[
					"match",
					[
						"get",
						"class"
					],
					"track",
					1,
					0.5
				],
				18,
				12
			],
			"line-opacity": [
				"step",
				[
					"zoom"
				],
				0,
				14,
				1
			]
		}
	},
	{
		id: "road-street-case",
		type: "line",
		metadata: {
			"mapbox:group": "1444855786460.0557"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 11,
		filter: [
			"all",
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"street",
					"street_limited",
					"primary_link"
				],
				true,
				false
			],
			[
				"match",
				[
					"get",
					"structure"
				],
				[
					"none",
					"ford"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				12,
				0.75,
				20,
				2
			],
			"line-color": "hsl(156, 12%, 92%)",
			"line-gap-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				12,
				0.5,
				14,
				2,
				18,
				18
			],
			"line-opacity": [
				"step",
				[
					"zoom"
				],
				0,
				14,
				1
			]
		}
	},
	{
		id: "road-secondary-tertiary-case",
		type: "line",
		metadata: {
			"mapbox:group": "1444855786460.0557"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 9.3,
		filter: [
			"all",
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"secondary",
					"tertiary"
				],
				true,
				false
			],
			[
				"match",
				[
					"get",
					"structure"
				],
				[
					"none",
					"ford"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				10,
				0.75,
				18,
				2
			],
			"line-color": "hsl(156, 12%, 92%)",
			"line-gap-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				5,
				0.1,
				18,
				26
			]
		}
	},
	{
		id: "road-primary-case",
		type: "line",
		metadata: {
			"mapbox:group": "1444855786460.0557"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 9.9,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"class"
				],
				"primary"
			],
			[
				"match",
				[
					"get",
					"structure"
				],
				[
					"none",
					"ford"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				10,
				1,
				18,
				2
			],
			"line-color": "hsl(156, 12%, 92%)",
			"line-gap-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				5,
				0.75,
				18,
				32
			]
		}
	},
	{
		id: "road-major-link-case",
		type: "line",
		metadata: {
			"mapbox:group": "1444855786460.0557"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 10,
		filter: [
			"all",
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"motorway_link",
					"trunk_link"
				],
				true,
				false
			],
			[
				"match",
				[
					"get",
					"structure"
				],
				[
					"none",
					"ford"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				12,
				0.75,
				20,
				2
			],
			"line-color": "hsl(156, 12%, 92%)",
			"line-gap-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				12,
				0.5,
				14,
				2,
				18,
				18
			],
			"line-opacity": [
				"step",
				[
					"zoom"
				],
				0,
				11,
				1
			]
		}
	},
	{
		id: "road-motorway-trunk-case",
		type: "line",
		metadata: {
			"mapbox:group": "1444855786460.0557"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 8.5,
		filter: [
			"all",
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"motorway",
					"trunk"
				],
				true,
				false
			],
			[
				"match",
				[
					"get",
					"structure"
				],
				[
					"none",
					"ford"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				10,
				1,
				18,
				2
			],
			"line-color": "hsl(156, 12%, 92%)",
			"line-gap-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				5,
				0.75,
				18,
				32
			],
			"line-opacity": [
				"step",
				[
					"zoom"
				],
				[
					"match",
					[
						"get",
						"class"
					],
					"motorway",
					1,
					0
				],
				6,
				1
			]
		}
	},
	{
		id: "road-construction",
		type: "line",
		metadata: {
			"mapbox:group": "1444855786460.0557"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 14,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"class"
				],
				"construction"
			],
			[
				"match",
				[
					"get",
					"structure"
				],
				[
					"none",
					"ford"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				14,
				2,
				18,
				18
			],
			"line-color": "hsl(0, 0%, 100%)",
			"line-dasharray": [
				"step",
				[
					"zoom"
				],
				[
					"literal",
					[
						0.4,
						0.8
					]
				],
				15,
				[
					"literal",
					[
						0.3,
						0.6
					]
				],
				16,
				[
					"literal",
					[
						0.2,
						0.3
					]
				],
				17,
				[
					"literal",
					[
						0.2,
						0.25
					]
				],
				18,
				[
					"literal",
					[
						0.15,
						0.15
					]
				]
			]
		}
	},
	{
		id: "road-path",
		type: "line",
		metadata: {
			"mapbox:group": "1444855786460.0557"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 12,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"class"
				],
				"path"
			],
			[
				"step",
				[
					"zoom"
				],
				[
					"!",
					[
						"match",
						[
							"get",
							"type"
						],
						[
							"steps",
							"sidewalk",
							"crossing"
						],
						true,
						false
					]
				],
				16,
				[
					"!=",
					[
						"get",
						"type"
					],
					"steps"
				]
			],
			[
				"match",
				[
					"get",
					"structure"
				],
				[
					"none",
					"ford"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				13,
				0.5,
				14,
				1,
				15,
				1,
				18,
				4
			],
			"line-color": "hsl(0, 0%, 100%)",
			"line-dasharray": [
				"step",
				[
					"zoom"
				],
				[
					"literal",
					[
						1,
						0
					]
				],
				15,
				[
					"literal",
					[
						1.75,
						1
					]
				],
				16,
				[
					"literal",
					[
						1,
						0.75
					]
				],
				17,
				[
					"literal",
					[
						1,
						0.5
					]
				]
			]
		}
	},
	{
		id: "road-steps",
		type: "line",
		metadata: {
			"mapbox:group": "1444855786460.0557"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 14,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"type"
				],
				"steps"
			],
			[
				"match",
				[
					"get",
					"structure"
				],
				[
					"none",
					"ford"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				15,
				1,
				16,
				1.6,
				18,
				6
			],
			"line-color": "hsl(0, 0%, 100%)",
			"line-dasharray": [
				"step",
				[
					"zoom"
				],
				[
					"literal",
					[
						1,
						0
					]
				],
				15,
				[
					"literal",
					[
						1.75,
						1
					]
				],
				16,
				[
					"literal",
					[
						1,
						0.75
					]
				],
				17,
				[
					"literal",
					[
						0.3,
						0.3
					]
				]
			]
		}
	},
	{
		id: "road-major-link",
		type: "line",
		metadata: {
			"mapbox:group": "1444855786460.0557"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 10,
		filter: [
			"all",
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"motorway_link",
					"trunk_link"
				],
				true,
				false
			],
			[
				"match",
				[
					"get",
					"structure"
				],
				[
					"none",
					"ford"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				12,
				0.5,
				14,
				2,
				18,
				18
			],
			"line-color": "hsl(0, 0%, 100%)"
		}
	},
	{
		id: "road-pedestrian",
		type: "line",
		metadata: {
			"mapbox:group": "1444855786460.0557"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 12,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"class"
				],
				"pedestrian"
			],
			[
				"match",
				[
					"get",
					"structure"
				],
				[
					"none",
					"ford"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				14,
				0.5,
				18,
				12
			],
			"line-color": "hsl(0, 0%, 100%)",
			"line-dasharray": [
				"step",
				[
					"zoom"
				],
				[
					"literal",
					[
						1,
						0
					]
				],
				15,
				[
					"literal",
					[
						1.5,
						0.4
					]
				],
				16,
				[
					"literal",
					[
						1,
						0.2
					]
				]
			]
		}
	},
	{
		id: "road-minor",
		type: "line",
		metadata: {
			"mapbox:group": "1444855786460.0557"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"step",
				[
					"zoom"
				],
				[
					"==",
					[
						"get",
						"class"
					],
					"track"
				],
				14,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"track",
						"secondary_link",
						"tertiary_link",
						"service"
					],
					true,
					false
				]
			],
			[
				"match",
				[
					"get",
					"structure"
				],
				[
					"none",
					"ford"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				14,
				[
					"match",
					[
						"get",
						"class"
					],
					"track",
					1,
					0.5
				],
				18,
				12
			],
			"line-color": "hsl(0, 0%, 100%)",
			"line-opacity": [
				"step",
				[
					"zoom"
				],
				0,
				14,
				1
			]
		}
	},
	{
		id: "road-street",
		type: "line",
		metadata: {
			"mapbox:group": "1444855786460.0557"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 11,
		filter: [
			"all",
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"street",
					"street_limited",
					"primary_link"
				],
				true,
				false
			],
			[
				"match",
				[
					"get",
					"structure"
				],
				[
					"none",
					"ford"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				12,
				0.5,
				14,
				2,
				18,
				18
			],
			"line-color": "hsl(0, 0%, 100%)",
			"line-opacity": [
				"step",
				[
					"zoom"
				],
				0,
				14,
				1
			]
		}
	},
	{
		id: "road-secondary-tertiary",
		type: "line",
		metadata: {
			"mapbox:group": "1444855786460.0557"
		},
		source: "composite",
		"source-layer": "road",
		filter: [
			"all",
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"secondary",
					"tertiary"
				],
				true,
				false
			],
			[
				"match",
				[
					"get",
					"structure"
				],
				[
					"none",
					"ford"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				5,
				0.1,
				18,
				22
			],
			"line-color": "hsl(0, 0%, 100%)"
		}
	},
	{
		id: "road-primary",
		type: "line",
		metadata: {
			"mapbox:group": "1444855786460.0557"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 9,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"class"
				],
				"primary"
			],
			[
				"match",
				[
					"get",
					"structure"
				],
				[
					"none",
					"ford"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round",
			"line-cap": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				5,
				0.75,
				18,
				32
			],
			"line-color": "#f6eac1",
			"line-opacity": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				6,
				0,
				8,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"trunk"
					],
					0.2,
					0
				],
				16,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"trunk"
					],
					1,
					0.81
				]
			]
		}
	},
	{
		id: "road-motorway-trunk",
		type: "line",
		metadata: {
			"mapbox:group": "1444855786460.0557"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 8,
		filter: [
			"all",
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"motorway",
					"trunk"
				],
				true,
				false
			],
			[
				"match",
				[
					"get",
					"structure"
				],
				[
					"none",
					"ford"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				5,
				0.5,
				18,
				32
			],
			"line-color": [
				"match",
				[
					"get",
					"class"
				],
				[
					"motorway"
				],
				"hsl(26, 100%, 68%)",
				"#f2d163"
			],
			"line-opacity": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				6,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"trunk"
					],
					0.3,
					0
				],
				8,
				0.4,
				18,
				0.7
			]
		}
	},
	{
		id: "road-rail",
		type: "line",
		metadata: {
			"mapbox:group": "1444855786460.0557"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"major_rail",
					"minor_rail"
				],
				true,
				false
			],
			[
				"match",
				[
					"get",
					"structure"
				],
				[
					"none",
					"ford"
				],
				true,
				false
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				14,
				0.5,
				20,
				1
			],
			"line-color": "hsl(156, 12%, 92%)"
		}
	},
	{
		id: "bridge-pedestrian-case",
		type: "line",
		metadata: {
			"mapbox:group": "1444855799204.86"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"bridge"
			],
			[
				"==",
				[
					"get",
					"class"
				],
				"pedestrian"
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				14,
				2,
				18,
				14.5
			],
			"line-opacity": [
				"step",
				[
					"zoom"
				],
				0,
				14,
				1
			],
			"line-color": "hsl(156, 12%, 92%)"
		}
	},
	{
		id: "bridge-street-minor-low",
		type: "line",
		metadata: {
			"mapbox:group": "1444855799204.86"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"bridge"
			],
			[
				"step",
				[
					"zoom"
				],
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"street",
						"street_limited",
						"track",
						"primary_link"
					],
					true,
					false
				],
				14,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"street",
						"street_limited",
						"track",
						"primary_link",
						"secondary_link",
						"tertiary_link",
						"service"
					],
					true,
					false
				]
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-cap": "round",
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				12,
				0.5,
				14,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"street",
						"street_limited",
						"primary_link"
					],
					2,
					"track",
					1,
					0.5
				],
				18,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"street",
						"street_limited",
						"primary_link"
					],
					18,
					12
				]
			],
			"line-color": "hsl(0, 0%, 100%)",
			"line-opacity": [
				"step",
				[
					"zoom"
				],
				1,
				14,
				0
			]
		}
	},
	{
		id: "bridge-street-minor-case",
		type: "line",
		metadata: {
			"mapbox:group": "1444855799204.86"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"bridge"
			],
			[
				"step",
				[
					"zoom"
				],
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"street",
						"street_limited",
						"track",
						"primary_link"
					],
					true,
					false
				],
				14,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"street",
						"street_limited",
						"track",
						"primary_link",
						"secondary_link",
						"tertiary_link",
						"service"
					],
					true,
					false
				]
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				12,
				0.75,
				20,
				2
			],
			"line-opacity": [
				"step",
				[
					"zoom"
				],
				0,
				14,
				1
			],
			"line-gap-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				12,
				0.5,
				14,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"street",
						"street_limited",
						"primary_link"
					],
					2,
					"track",
					1,
					0.5
				],
				18,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"street",
						"street_limited",
						"primary_link"
					],
					18,
					12
				]
			],
			"line-color": "hsl(156, 12%, 92%)"
		}
	},
	{
		id: "bridge-primary-secondary-tertiary-case",
		type: "line",
		metadata: {
			"mapbox:group": "1444855799204.86"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"bridge"
			],
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"primary",
					"secondary",
					"tertiary"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				10,
				[
					"match",
					[
						"get",
						"class"
					],
					"primary",
					1,
					0.75
				],
				18,
				2
			],
			"line-opacity": [
				"step",
				[
					"zoom"
				],
				0,
				10,
				1
			],
			"line-gap-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				5,
				[
					"match",
					[
						"get",
						"class"
					],
					"primary",
					0.75,
					0.1
				],
				18,
				[
					"match",
					[
						"get",
						"class"
					],
					"primary",
					32,
					26
				]
			],
			"line-color": "hsl(156, 12%, 92%)"
		}
	},
	{
		id: "bridge-major-link-case",
		type: "line",
		metadata: {
			"mapbox:group": "1444855799204.86"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"bridge"
			],
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"motorway_link",
					"trunk_link"
				],
				true,
				false
			],
			[
				"<=",
				[
					"get",
					"layer"
				],
				1
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				12,
				0.75,
				20,
				2
			],
			"line-gap-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				12,
				0.5,
				14,
				2,
				18,
				18
			],
			"line-color": "hsl(156, 12%, 92%)"
		}
	},
	{
		id: "bridge-motorway-trunk-case",
		type: "line",
		metadata: {
			"mapbox:group": "1444855799204.86"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"bridge"
			],
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"motorway",
					"trunk"
				],
				true,
				false
			],
			[
				"<=",
				[
					"get",
					"layer"
				],
				1
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				10,
				1,
				18,
				2
			],
			"line-gap-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				5,
				0.75,
				18,
				32
			],
			"line-color": "hsl(156, 12%, 92%)"
		}
	},
	{
		id: "bridge-construction",
		type: "line",
		metadata: {
			"mapbox:group": "1444855799204.86"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 14,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"bridge"
			],
			[
				"==",
				[
					"get",
					"class"
				],
				"construction"
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				14,
				2,
				18,
				18
			],
			"line-dasharray": [
				"step",
				[
					"zoom"
				],
				[
					"literal",
					[
						0.4,
						0.8
					]
				],
				15,
				[
					"literal",
					[
						0.3,
						0.6
					]
				],
				16,
				[
					"literal",
					[
						0.2,
						0.3
					]
				],
				17,
				[
					"literal",
					[
						0.2,
						0.25
					]
				],
				18,
				[
					"literal",
					[
						0.15,
						0.15
					]
				]
			],
			"line-color": "hsl(156, 0%, 100%)"
		}
	},
	{
		id: "bridge-path",
		type: "line",
		metadata: {
			"mapbox:group": "1444855799204.86"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"bridge"
			],
			[
				"==",
				[
					"get",
					"class"
				],
				"path"
			],
			[
				"!=",
				[
					"get",
					"type"
				],
				"steps"
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				15,
				1,
				18,
				4
			],
			"line-color": "hsl(0, 0%, 100%)",
			"line-dasharray": [
				"step",
				[
					"zoom"
				],
				[
					"literal",
					[
						1,
						0
					]
				],
				15,
				[
					"literal",
					[
						1.75,
						1
					]
				],
				16,
				[
					"literal",
					[
						1,
						0.75
					]
				],
				17,
				[
					"literal",
					[
						1,
						0.5
					]
				]
			]
		}
	},
	{
		id: "bridge-steps",
		type: "line",
		metadata: {
			"mapbox:group": "1444855799204.86"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 14,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"type"
				],
				"steps"
			],
			[
				"==",
				[
					"get",
					"structure"
				],
				"bridge"
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				15,
				1,
				16,
				1.6,
				18,
				6
			],
			"line-color": "hsl(0, 0%, 100%)",
			"line-dasharray": [
				"step",
				[
					"zoom"
				],
				[
					"literal",
					[
						1,
						0
					]
				],
				15,
				[
					"literal",
					[
						1.75,
						1
					]
				],
				16,
				[
					"literal",
					[
						1,
						0.75
					]
				],
				17,
				[
					"literal",
					[
						0.3,
						0.3
					]
				]
			]
		}
	},
	{
		id: "bridge-major-link",
		type: "line",
		metadata: {
			"mapbox:group": "1444855799204.86"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"bridge"
			],
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"motorway_link",
					"trunk_link"
				],
				true,
				false
			],
			[
				"<=",
				[
					"get",
					"layer"
				],
				1
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-cap": "round",
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				12,
				0.5,
				14,
				2,
				18,
				18
			],
			"line-color": "hsl(0, 0%, 100%)"
		}
	},
	{
		id: "bridge-pedestrian",
		type: "line",
		metadata: {
			"mapbox:group": "1444855799204.86"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"bridge"
			],
			[
				"==",
				[
					"get",
					"class"
				],
				"pedestrian"
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				14,
				0.5,
				18,
				12
			],
			"line-color": "hsl(0, 0%, 100%)",
			"line-dasharray": [
				"step",
				[
					"zoom"
				],
				[
					"literal",
					[
						1,
						0
					]
				],
				15,
				[
					"literal",
					[
						1.5,
						0.4
					]
				],
				16,
				[
					"literal",
					[
						1,
						0.2
					]
				]
			]
		}
	},
	{
		id: "bridge-street-minor",
		type: "line",
		metadata: {
			"mapbox:group": "1444855799204.86"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"bridge"
			],
			[
				"step",
				[
					"zoom"
				],
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"street",
						"street_limited",
						"track",
						"primary_link"
					],
					true,
					false
				],
				14,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"street",
						"street_limited",
						"track",
						"primary_link",
						"secondary_link",
						"tertiary_link",
						"service"
					],
					true,
					false
				]
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-cap": "round",
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				12,
				0.5,
				14,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"street",
						"street_limited",
						"primary_link"
					],
					2,
					"track",
					1,
					0.5
				],
				18,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"street",
						"street_limited",
						"primary_link"
					],
					18,
					12
				]
			],
			"line-color": "hsl(0, 0%, 100%)",
			"line-opacity": [
				"step",
				[
					"zoom"
				],
				0,
				14,
				1
			]
		}
	},
	{
		id: "bridge-primary-secondary-tertiary",
		type: "line",
		metadata: {
			"mapbox:group": "1444855799204.86"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"bridge"
			],
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"primary",
					"secondary",
					"tertiary"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-cap": "round",
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				5,
				[
					"match",
					[
						"get",
						"class"
					],
					"primary",
					0.75,
					0.1
				],
				18,
				[
					"match",
					[
						"get",
						"class"
					],
					"primary",
					32,
					26
				]
			],
			"line-color": "hsl(0, 0%, 100%)"
		}
	},
	{
		id: "bridge-motorway-trunk",
		type: "line",
		metadata: {
			"mapbox:group": "1444855799204.86"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"bridge"
			],
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"motorway",
					"trunk"
				],
				true,
				false
			],
			[
				"<=",
				[
					"get",
					"layer"
				],
				1
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-cap": "round",
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				5,
				0.75,
				18,
				32
			],
			"line-color": "hsl(0, 0%, 100%)"
		}
	},
	{
		id: "bridge-rail",
		type: "line",
		metadata: {
			"mapbox:group": "1444855799204.86"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"bridge"
			],
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"major_rail",
					"minor_rail"
				],
				true,
				false
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				14,
				0.5,
				20,
				1
			],
			"line-color": "hsl(156, 12%, 92%)"
		}
	},
	{
		id: "bridge-major-link-2-case",
		type: "line",
		metadata: {
			"mapbox:group": "1444855799204.86"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"bridge"
			],
			[
				">=",
				[
					"get",
					"layer"
				],
				2
			],
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"motorway_link",
					"trunk_link"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				12,
				0.75,
				20,
				2
			],
			"line-color": "hsl(156, 12%, 92%)",
			"line-gap-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				12,
				0.5,
				14,
				2,
				18,
				18
			]
		}
	},
	{
		id: "bridge-motorway-trunk-2-case",
		type: "line",
		metadata: {
			"mapbox:group": "1444855799204.86"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"bridge"
			],
			[
				">=",
				[
					"get",
					"layer"
				],
				2
			],
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"motorway",
					"trunk"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				10,
				1,
				18,
				2
			],
			"line-color": "hsl(156, 12%, 92%)",
			"line-gap-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				5,
				0.75,
				18,
				32
			]
		}
	},
	{
		id: "bridge-major-link-2",
		type: "line",
		metadata: {
			"mapbox:group": "1444855799204.86"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"bridge"
			],
			[
				">=",
				[
					"get",
					"layer"
				],
				2
			],
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"motorway_link",
					"trunk_link"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-cap": "round",
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				12,
				0.5,
				14,
				2,
				18,
				18
			],
			"line-color": "hsl(0, 0%, 100%)"
		}
	},
	{
		id: "bridge-motorway-trunk-2",
		type: "line",
		metadata: {
			"mapbox:group": "1444855799204.86"
		},
		source: "composite",
		"source-layer": "road",
		minzoom: 13,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"structure"
				],
				"bridge"
			],
			[
				">=",
				[
					"get",
					"layer"
				],
				2
			],
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"motorway",
					"trunk"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"line-cap": "round",
			"line-join": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"exponential",
					1.5
				],
				[
					"zoom"
				],
				5,
				0.75,
				18,
				32
			],
			"line-color": "hsl(0, 0%, 100%)"
		}
	},
	{
		id: "admin-1-boundary-bg",
		type: "line",
		metadata: {
			"mapbox:group": "1444934295202.7542"
		},
		source: "composite",
		"source-layer": "admin",
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"admin_level"
				],
				1
			],
			[
				"==",
				[
					"get",
					"maritime"
				],
				"false"
			],
			[
				"match",
				[
					"get",
					"worldview"
				],
				[
					"all",
					"US"
				],
				true,
				false
			]
		],
		layout: {
			"line-join": "bevel"
		},
		paint: {
			"line-blur": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				3,
				0,
				8,
				3
			],
			"line-width": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				7,
				3.75,
				12,
				5.5
			],
			"line-opacity": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				7,
				0,
				8,
				0.75
			],
			"line-dasharray": [
				1,
				0
			],
			"line-translate": [
				0,
				0
			],
			"line-color": "hsl(0, 0%, 84%)"
		}
	},
	{
		id: "admin-0-boundary-bg",
		type: "line",
		metadata: {
			"mapbox:group": "1444934295202.7542"
		},
		source: "composite",
		"source-layer": "admin",
		minzoom: 1,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"admin_level"
				],
				0
			],
			[
				"==",
				[
					"get",
					"maritime"
				],
				"false"
			],
			[
				"match",
				[
					"get",
					"worldview"
				],
				[
					"all",
					"US"
				],
				true,
				false
			]
		],
		paint: {
			"line-width": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				3,
				3.5,
				10,
				8
			],
			"line-color": "hsl(0, 0%, 84%)",
			"line-opacity": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				3,
				0,
				4,
				0.5
			],
			"line-translate": [
				0,
				0
			],
			"line-blur": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				3,
				0,
				10,
				2
			]
		}
	},
	{
		id: "admin-1-boundary",
		type: "line",
		metadata: {
			"mapbox:group": "1444934295202.7542"
		},
		source: "composite",
		"source-layer": "admin",
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"admin_level"
				],
				1
			],
			[
				"==",
				[
					"get",
					"maritime"
				],
				"false"
			],
			[
				"match",
				[
					"get",
					"worldview"
				],
				[
					"all",
					"US"
				],
				true,
				false
			]
		],
		layout: {
			"line-join": "round",
			"line-cap": "round"
		},
		paint: {
			"line-width": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				7,
				0.75,
				12,
				1.5
			],
			"line-opacity": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				2,
				0,
				3,
				1
			],
			"line-color": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				3,
				"hsl(0, 0%, 80%)",
				7,
				"hsl(0, 0%, 70%)"
			]
		}
	},
	{
		id: "admin-0-boundary",
		type: "line",
		metadata: {
			"mapbox:group": "1444934295202.7542"
		},
		source: "composite",
		"source-layer": "admin",
		minzoom: 1,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"admin_level"
				],
				0
			],
			[
				"==",
				[
					"get",
					"disputed"
				],
				"false"
			],
			[
				"==",
				[
					"get",
					"maritime"
				],
				"false"
			],
			[
				"match",
				[
					"get",
					"worldview"
				],
				[
					"all",
					"US"
				],
				true,
				false
			]
		],
		layout: {
			"line-join": "round",
			"line-cap": "round"
		},
		paint: {
			"line-color": "hsl(0, 0%, 62%)",
			"line-width": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				3,
				0.5,
				10,
				2
			]
		}
	},
	{
		id: "admin-0-boundary-disputed",
		type: "line",
		metadata: {
			"mapbox:group": "1444934295202.7542"
		},
		source: "composite",
		"source-layer": "admin",
		minzoom: 1,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"disputed"
				],
				"true"
			],
			[
				"==",
				[
					"get",
					"admin_level"
				],
				0
			],
			[
				"==",
				[
					"get",
					"maritime"
				],
				"false"
			],
			[
				"match",
				[
					"get",
					"worldview"
				],
				[
					"all",
					"US"
				],
				true,
				false
			]
		],
		layout: {
			"line-join": "round"
		},
		paint: {
			"line-dasharray": [
				1.5,
				1.5
			],
			"line-color": "hsl(0, 0%, 62%)",
			"line-width": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				3,
				0.5,
				10,
				2
			]
		}
	},
	{
		id: "county_border",
		type: "line",
		metadata: {
			"mapbox:group": "1444934295202.7542"
		},
		source: "composite",
		"source-layer": "attr_county_labels_pg-155yvu",
		minzoom: 6,
		maxzoom: 12,
		paint: {
			"line-width": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				5,
				0.5,
				9,
				1.7,
				18,
				2
			],
			"line-color": "hsl(0, 0%, 59%)",
			"line-opacity": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				5,
				0.2,
				9,
				0.5,
				18,
				1
			]
		}
	},
	{
		id: "cousub_border",
		type: "line",
		source: "composite",
		"source-layer": "attr_cousub_labels_less_pl-9lemol",
		minzoom: 8,
		maxzoom: 14,
		layout: {
		},
		paint: {
			"line-color": "hsl(0, 3%, 38%)",
			"line-width": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				0,
				1,
				6,
				1,
				22,
				1
			],
			"line-opacity": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				7,
				0.1,
				18,
				0.2
			]
		}
	},
	{
		id: "place_border",
		type: "line",
		source: "composite",
		"source-layer": "attr_place_labels_less_pl-0n1bxr",
		minzoom: 8,
		maxzoom: 14,
		paint: {
			"line-color": "hsla(0, 0%, 58%, 0.62)",
			"line-dasharray": [
				3,
				2
			]
		}
	},
	{
		id: "road-label",
		type: "symbol",
		source: "composite",
		"source-layer": "road",
		minzoom: 10,
		filter: [
			"step",
			[
				"zoom"
			],
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"motorway",
					"trunk",
					"primary",
					"secondary",
					"tertiary"
				],
				true,
				false
			],
			12,
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"motorway",
					"trunk",
					"primary",
					"secondary",
					"tertiary",
					"pedestrian",
					"street",
					"street_limited"
				],
				true,
				false
			],
			15,
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"ferry",
					"golf",
					"path"
				],
				false,
				true
			]
		],
		layout: {
			"text-size": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				10,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"motorway",
						"trunk",
						"primary",
						"secondary",
						"tertiary"
					],
					10,
					[
						"motorway_link",
						"trunk_link",
						"primary_link",
						"secondary_link",
						"tertiary_link",
						"pedestrian",
						"street",
						"street_limited"
					],
					9,
					6.5
				],
				18,
				[
					"match",
					[
						"get",
						"class"
					],
					[
						"motorway",
						"trunk",
						"primary",
						"secondary",
						"tertiary"
					],
					16,
					[
						"motorway_link",
						"trunk_link",
						"primary_link",
						"secondary_link",
						"tertiary_link",
						"pedestrian",
						"street",
						"street_limited"
					],
					14,
					13
				]
			],
			"text-max-angle": 30,
			"text-font": [
				"DIN Offc Pro Regular",
				"Arial Unicode MS Regular"
			],
			"symbol-placement": "line",
			"text-padding": 1,
			"text-rotation-alignment": "map",
			"text-pitch-alignment": "viewport",
			"text-field": [
				"coalesce",
				[
					"get",
					"name_en"
				],
				[
					"get",
					"name"
				]
			],
			"text-letter-spacing": 0.01
		},
		paint: {
			"text-color": "hsl(0, 0%, 42%)",
			"text-halo-color": [
				"match",
				[
					"get",
					"class"
				],
				[
					"motorway",
					"trunk"
				],
				"hsla(0, 0%, 100%, 0.75)",
				"hsl(0, 0%, 100%)"
			],
			"text-halo-blur": 1,
			"text-halo-width": 0.1
		}
	},
	{
		id: "waterway-label",
		type: "symbol",
		source: "composite",
		"source-layer": "natural_label",
		minzoom: 13,
		filter: [
			"all",
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"canal",
					"river",
					"stream"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"text-font": [
				"DIN Offc Pro Italic",
				"Arial Unicode MS Regular"
			],
			"text-max-angle": 30,
			"symbol-spacing": [
				"interpolate",
				[
					"linear",
					1
				],
				[
					"zoom"
				],
				15,
				250,
				17,
				400
			],
			"text-size": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				13,
				12,
				18,
				16
			],
			"symbol-placement": "line",
			"text-pitch-alignment": "viewport",
			"text-field": [
				"coalesce",
				[
					"get",
					"name_en"
				],
				[
					"get",
					"name"
				]
			]
		},
		paint: {
			"text-color": "hsl(187, 7%, 51%)"
		}
	},
	{
		id: "natural-line-label",
		type: "symbol",
		source: "composite",
		"source-layer": "natural_label",
		minzoom: 4,
		filter: [
			"all",
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"glacier",
					"landform"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			],
			[
				"<=",
				[
					"get",
					"filterrank"
				],
				1
			]
		],
		layout: {
			"text-size": [
				"step",
				[
					"zoom"
				],
				[
					"step",
					[
						"get",
						"sizerank"
					],
					18,
					5,
					12
				],
				17,
				[
					"step",
					[
						"get",
						"sizerank"
					],
					18,
					13,
					12
				]
			],
			"text-max-angle": 30,
			"text-field": [
				"coalesce",
				[
					"get",
					"name_en"
				],
				[
					"get",
					"name"
				]
			],
			"text-font": [
				"DIN Offc Pro Medium",
				"Arial Unicode MS Regular"
			],
			"symbol-placement": "line-center",
			"text-pitch-alignment": "viewport"
		},
		paint: {
			"text-halo-width": 0.5,
			"text-halo-color": "hsl(0, 0%, 100%)",
			"text-halo-blur": 0.5,
			"text-color": "hsl(0, 0%, 42%)"
		}
	},
	{
		id: "natural-point-label",
		type: "symbol",
		source: "composite",
		"source-layer": "natural_label",
		minzoom: 4,
		filter: [
			"all",
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"dock",
					"glacier",
					"landform",
					"water_feature",
					"wetland"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"Point"
			],
			[
				"<=",
				[
					"get",
					"filterrank"
				],
				1
			]
		],
		layout: {
			"text-size": [
				"step",
				[
					"zoom"
				],
				[
					"step",
					[
						"get",
						"sizerank"
					],
					18,
					5,
					12
				],
				17,
				[
					"step",
					[
						"get",
						"sizerank"
					],
					18,
					13,
					12
				]
			],
			"text-field": [
				"coalesce",
				[
					"get",
					"name_en"
				],
				[
					"get",
					"name"
				]
			],
			"text-font": [
				"DIN Offc Pro Medium",
				"Arial Unicode MS Regular"
			],
			"text-offset": [
				"literal",
				[
					0,
					0
				]
			]
		},
		paint: {
			"text-color": "hsl(0, 0%, 42%)",
			"text-halo-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 0.5,
			"text-halo-blur": 0.5
		}
	},
	{
		id: "water-line-label",
		type: "symbol",
		source: "composite",
		"source-layer": "natural_label",
		filter: [
			"all",
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"bay",
					"ocean",
					"reservoir",
					"sea",
					"water"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"LineString"
			]
		],
		layout: {
			"text-size": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				7,
				[
					"step",
					[
						"get",
						"sizerank"
					],
					24,
					6,
					18,
					12,
					12
				],
				10,
				[
					"step",
					[
						"get",
						"sizerank"
					],
					18,
					9,
					12
				],
				18,
				[
					"step",
					[
						"get",
						"sizerank"
					],
					18,
					9,
					16
				]
			],
			"text-max-angle": 30,
			"text-letter-spacing": [
				"match",
				[
					"get",
					"class"
				],
				"ocean",
				0.25,
				[
					"sea",
					"bay"
				],
				0.15,
				0
			],
			"text-font": [
				"DIN Offc Pro Italic",
				"Arial Unicode MS Regular"
			],
			"symbol-placement": "line-center",
			"text-pitch-alignment": "viewport",
			"text-field": [
				"coalesce",
				[
					"get",
					"name_en"
				],
				[
					"get",
					"name"
				]
			]
		},
		paint: {
			"text-color": "hsl(187, 7%, 51%)"
		}
	},
	{
		id: "water-point-label",
		type: "symbol",
		source: "composite",
		"source-layer": "natural_label",
		filter: [
			"all",
			[
				"match",
				[
					"get",
					"class"
				],
				[
					"bay",
					"ocean",
					"reservoir",
					"sea",
					"water"
				],
				true,
				false
			],
			[
				"==",
				[
					"geometry-type"
				],
				"Point"
			]
		],
		layout: {
			"text-line-height": 1.3,
			"text-size": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				7,
				[
					"step",
					[
						"get",
						"sizerank"
					],
					24,
					6,
					18,
					12,
					12
				],
				10,
				[
					"step",
					[
						"get",
						"sizerank"
					],
					18,
					9,
					12
				]
			],
			"text-font": [
				"DIN Offc Pro Italic",
				"Arial Unicode MS Regular"
			],
			"text-field": [
				"coalesce",
				[
					"get",
					"name_en"
				],
				[
					"get",
					"name"
				]
			],
			"text-letter-spacing": [
				"match",
				[
					"get",
					"class"
				],
				"ocean",
				0.25,
				[
					"bay",
					"sea"
				],
				0.15,
				0.01
			],
			"text-max-width": [
				"match",
				[
					"get",
					"class"
				],
				"ocean",
				4,
				"sea",
				5,
				[
					"bay",
					"water"
				],
				7,
				10
			]
		},
		paint: {
			"text-color": "hsl(187, 7%, 51%)"
		}
	},
	{
		id: "poi-label",
		type: "symbol",
		source: "composite",
		"source-layer": "poi_label",
		minzoom: 6,
		filter: [
			"<=",
			[
				"get",
				"filterrank"
			],
			1
		],
		layout: {
			"text-size": [
				"step",
				[
					"zoom"
				],
				[
					"step",
					[
						"get",
						"sizerank"
					],
					18,
					5,
					12
				],
				17,
				[
					"step",
					[
						"get",
						"sizerank"
					],
					18,
					13,
					12
				]
			],
			"text-font": [
				"DIN Offc Pro Medium",
				"Arial Unicode MS Regular"
			],
			"text-field": [
				"coalesce",
				[
					"get",
					"name_en"
				],
				[
					"get",
					"name"
				]
			]
		},
		paint: {
			"text-halo-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 0.1,
			"text-halo-blur": 0.5,
			"text-color": [
				"step",
				[
					"zoom"
				],
				[
					"step",
					[
						"get",
						"sizerank"
					],
					"hsl(0, 0%, 66%)",
					5,
					"hsl(230, 0%, 56%)"
				],
				17,
				[
					"step",
					[
						"get",
						"sizerank"
					],
					"hsl(0, 0%, 66%)",
					13,
					"hsl(0, 0%, 56%)"
				]
			]
		}
	},
	{
		id: "airport-label",
		type: "symbol",
		source: "composite",
		"source-layer": "airport_label",
		minzoom: 8,
		layout: {
			"text-line-height": 1.1,
			"text-size": [
				"step",
				[
					"get",
					"sizerank"
				],
				18,
				9,
				12
			],
			"icon-image": [
				"step",
				[
					"get",
					"sizerank"
				],
				[
					"concat",
					[
						"get",
						"maki"
					],
					"-15"
				],
				9,
				[
					"concat",
					[
						"get",
						"maki"
					],
					"-11"
				]
			],
			"text-font": [
				"DIN Offc Pro Medium",
				"Arial Unicode MS Regular"
			],
			visibility: "none",
			"text-offset": [
				0,
				0.75
			],
			"text-rotation-alignment": "viewport",
			"text-anchor": "top",
			"text-field": [
				"step",
				[
					"get",
					"sizerank"
				],
				[
					"coalesce",
					[
						"get",
						"name_en"
					],
					[
						"get",
						"name"
					]
				],
				15,
				[
					"get",
					"ref"
				]
			],
			"text-letter-spacing": 0.01,
			"text-max-width": 9
		},
		paint: {
			"text-color": "hsla(0, 0%, 42%, 0)",
			"text-halo-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 1,
			"text-opacity": 0
		}
	},
	{
		id: "settlement-subdivision-label",
		type: "symbol",
		source: "composite",
		"source-layer": "place_label",
		minzoom: 10,
		maxzoom: 15,
		filter: [
			"all",
			[
				"==",
				[
					"get",
					"class"
				],
				"settlement_subdivision"
			],
			[
				"<=",
				[
					"get",
					"filterrank"
				],
				4
			]
		],
		layout: {
			"text-field": [
				"coalesce",
				[
					"get",
					"name_en"
				],
				[
					"get",
					"name"
				]
			],
			"text-transform": "uppercase",
			"text-font": [
				"DIN Offc Pro Regular",
				"Arial Unicode MS Regular"
			],
			"text-letter-spacing": [
				"match",
				[
					"get",
					"type"
				],
				"suburb",
				0.15,
				0.1
			],
			"text-max-width": 7,
			"text-padding": 3,
			"text-size": [
				"interpolate",
				[
					"cubic-bezier",
					0.5,
					0,
					1,
					1
				],
				[
					"zoom"
				],
				11,
				[
					"match",
					[
						"get",
						"type"
					],
					"suburb",
					11,
					10.5
				],
				15,
				[
					"match",
					[
						"get",
						"type"
					],
					"suburb",
					17,
					16
				]
			],
			visibility: "none"
		},
		paint: {
			"text-halo-color": "hsl(0, 0%, 100%)",
			"text-color": "hsl(0, 0%, 62%)",
			"text-halo-blur": 0.5,
			"text-halo-width": 0.1
		}
	},
	{
		id: "state-label",
		type: "symbol",
		source: "composite",
		"source-layer": "place_label",
		minzoom: 3,
		maxzoom: 9,
		filter: [
			"==",
			[
				"get",
				"class"
			],
			"state"
		],
		layout: {
			"text-size": [
				"interpolate",
				[
					"cubic-bezier",
					0.85,
					0.7,
					0.65,
					1
				],
				[
					"zoom"
				],
				4,
				[
					"step",
					[
						"get",
						"symbolrank"
					],
					10,
					6,
					9.5,
					7,
					9
				],
				9,
				[
					"step",
					[
						"get",
						"symbolrank"
					],
					24,
					6,
					18,
					7,
					14
				]
			],
			"text-transform": "uppercase",
			"text-font": [
				"DIN Offc Pro Bold",
				"Arial Unicode MS Bold"
			],
			"text-field": [
				"step",
				[
					"zoom"
				],
				[
					"step",
					[
						"get",
						"symbolrank"
					],
					[
						"coalesce",
						[
							"get",
							"name_en"
						],
						[
							"get",
							"name"
						]
					],
					5,
					[
						"coalesce",
						[
							"get",
							"abbr"
						],
						[
							"get",
							"name_en"
						],
						[
							"get",
							"name"
						]
					]
				],
				5,
				[
					"coalesce",
					[
						"get",
						"name_en"
					],
					[
						"get",
						"name"
					]
				]
			],
			"text-letter-spacing": 0.15,
			"text-max-width": 6
		},
		paint: {
			"text-halo-color": "hsl(0, 0%, 100%)",
			"text-color": "hsl(0, 0%, 66%)",
			"text-halo-width": 0.1
		}
	},
	{
		id: "county_label",
		type: "symbol",
		source: "composite",
		"source-layer": "attr_county_labels-5i5o0f",
		minzoom: 7.5,
		maxzoom: 14,
		layout: {
			"text-field": [
				"step",
				[
					"zoom"
				],
				[
					"upcase",
					[
						"to-string",
						[
							"get",
							"name"
						]
					]
				],
				6,
				[
					"upcase",
					[
						"to-string",
						[
							"get",
							"name"
						]
					]
				],
				10,
				[
					"upcase",
					[
						"to-string",
						[
							"get",
							"namelsad"
						]
					]
				],
				22,
				[
					"upcase",
					[
						"to-string",
						[
							"get",
							"namelsad"
						]
					]
				]
			],
			"text-font": [
				"step",
				[
					"zoom"
				],
				[
					"literal",
					[
						"Open Sans Regular",
						"Arial Unicode MS Regular"
					]
				],
				6,
				[
					"literal",
					[
						"Montserrat Medium",
						"Arial Unicode MS Regular"
					]
				],
				8,
				[
					"literal",
					[
						"Montserrat Medium",
						"Arial Unicode MS Regular"
					]
				],
				11,
				[
					"literal",
					[
						"Montserrat Medium",
						"Arial Unicode MS Regular"
					]
				],
				22,
				[
					"literal",
					[
						"Montserrat Medium",
						"Arial Unicode MS Regular"
					]
				]
			],
			"text-size": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				0,
				0,
				6,
				6,
				6.5,
				10,
				7.5,
				14,
				9,
				30,
				11,
				75,
				14,
				85
			],
			"text-allow-overlap": [
				"step",
				[
					"zoom"
				],
				false,
				5,
				false,
				10,
				false,
				11,
				true
			],
			"text-max-width": 5,
			"text-ignore-placement": [
				"step",
				[
					"zoom"
				],
				false,
				6,
				false,
				9,
				true,
				12,
				true,
				22,
				true
			]
		},
		paint: {
			"text-color": "hsl(0, 0%, 48%)",
			"text-opacity": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				6.49999,
				1,
				6.5,
				0.7,
				8,
				0.3,
				11,
				0.1,
				16,
				0.05
			]
		}
	},
	{
		id: "cousub_label",
		type: "symbol",
		source: "composite",
		"source-layer": "attr_cousub_labels_plus_pt-0kx5lj",
		minzoom: 9,
		layout: {
			"text-field": [
				"upcase",
				[
					"get",
					"display_name"
				]
			],
			"text-size": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				7.9,
				0,
				8,
				8,
				9,
				10,
				14,
				30
			],
			"text-max-width": 5,
			"text-line-height": 1.1,
			visibility: "none"
		},
		paint: {
			"text-color": "hsla(0, 0%, 31%, 0.76)",
			"text-halo-width": 10,
			"text-halo-color": "hsl(0, 0%, 100%)"
		}
	},
	{
		id: "place-label new",
		type: "symbol",
		source: "composite",
		"source-layer": "rural_places-4rf4i9",
		minzoom: 9,
		filter: [
			"match",
			[
				"get",
				"census_boundary_year"
			],
			[
				2020
			],
			true,
			false
		],
		layout: {
			"text-line-height": 1.1,
			"text-size": [
				"interpolate",
				[
					"cubic-bezier",
					0.2,
					0,
					0.9,
					1
				],
				[
					"zoom"
				],
				3,
				[
					"step",
					[
						"get",
						"symbolrank"
					],
					12,
					9,
					11,
					10,
					10.5,
					12,
					9.5,
					14,
					8.5,
					16,
					6.5,
					17,
					4
				],
				15,
				[
					"step",
					[
						"get",
						"symbolrank"
					],
					28,
					9,
					26,
					10,
					23,
					11,
					21,
					12,
					20,
					13,
					19,
					15,
					17
				]
			],
			"icon-image": [
				"case",
				[
					"==",
					[
						"get",
						"capital"
					],
					2
				],
				"border-dot-13",
				[
					"step",
					[
						"get",
						"symbolrank"
					],
					"dot-11",
					9,
					"dot-10",
					11,
					"dot-9"
				]
			],
			"text-font": [
				"Montserrat Medium",
				"Arial Unicode MS Regular"
			],
			"text-justify": [
				"step",
				[
					"zoom"
				],
				[
					"match",
					[
						"get",
						"text_anchor"
					],
					[
						"left",
						"bottom-left",
						"top-left"
					],
					"left",
					[
						"right",
						"bottom-right",
						"top-right"
					],
					"right",
					"center"
				],
				8,
				"center"
			],
			visibility: "none",
			"text-offset": [
				"step",
				[
					"zoom"
				],
				[
					"match",
					[
						"get",
						"capital"
					],
					2,
					[
						"match",
						[
							"get",
							"text_anchor"
						],
						"bottom",
						[
							"literal",
							[
								0,
								-0.3
							]
						],
						"bottom-left",
						[
							"literal",
							[
								0.3,
								-0.1
							]
						],
						"left",
						[
							"literal",
							[
								0.45,
								0.1
							]
						],
						"top-left",
						[
							"literal",
							[
								0.3,
								0.1
							]
						],
						"top",
						[
							"literal",
							[
								0,
								0.3
							]
						],
						"top-right",
						[
							"literal",
							[
								-0.3,
								0.1
							]
						],
						"right",
						[
							"literal",
							[
								-0.45,
								0
							]
						],
						"bottom-right",
						[
							"literal",
							[
								-0.3,
								-0.1
							]
						],
						[
							"literal",
							[
								0,
								-0.3
							]
						]
					],
					[
						"match",
						[
							"get",
							"text_anchor"
						],
						"bottom",
						[
							"literal",
							[
								0,
								-0.25
							]
						],
						"bottom-left",
						[
							"literal",
							[
								0.2,
								-0.05
							]
						],
						"left",
						[
							"literal",
							[
								0.4,
								0.05
							]
						],
						"top-left",
						[
							"literal",
							[
								0.2,
								0.05
							]
						],
						"top",
						[
							"literal",
							[
								0,
								0.25
							]
						],
						"top-right",
						[
							"literal",
							[
								-0.2,
								0.05
							]
						],
						"right",
						[
							"literal",
							[
								-0.4,
								0.05
							]
						],
						"bottom-right",
						[
							"literal",
							[
								-0.2,
								-0.05
							]
						],
						[
							"literal",
							[
								0,
								-0.25
							]
						]
					]
				],
				8,
				[
					"literal",
					[
						0,
						0
					]
				]
			],
			"text-anchor": [
				"step",
				[
					"zoom"
				],
				[
					"get",
					"text_anchor"
				],
				8,
				"center"
			],
			"text-field": [
				"coalesce",
				[
					"get",
					"NAME"
				]
			],
			"text-max-width": 7
		},
		paint: {
			"text-color": [
				"step",
				[
					"get",
					"symbolrank"
				],
				"hsl(0, 2%, 61%)",
				11,
				"hsl(0, 1%, 68%)",
				16,
				"hsl(0, 1%, 75%)"
			],
			"text-halo-color": "hsl(0, 0%, 100%)",
			"icon-opacity": [
				"step",
				[
					"zoom"
				],
				1,
				8,
				0
			],
			"text-halo-blur": 1,
			"text-halo-width": 0.1
		}
	},
	{
		id: "settlement-label",
		type: "symbol",
		source: "composite",
		"source-layer": "place_label",
		maxzoom: 10.76,
		filter: [
			"all",
			[
				"<=",
				[
					"get",
					"filterrank"
				],
				3
			],
			[
				"==",
				[
					"get",
					"class"
				],
				"settlement"
			],
			[
				"step",
				[
					"zoom"
				],
				true,
				12,
				[
					">=",
					[
						"get",
						"symbolrank"
					],
					11
				],
				13,
				[
					">=",
					[
						"get",
						"symbolrank"
					],
					12
				]
			]
		],
		layout: {
			"text-line-height": 1.1,
			"text-size": [
				"interpolate",
				[
					"cubic-bezier",
					0.2,
					0,
					0.9,
					1
				],
				[
					"zoom"
				],
				3,
				[
					"step",
					[
						"get",
						"symbolrank"
					],
					12,
					9,
					11,
					10,
					10.5,
					12,
					9.5,
					14,
					8.5,
					16,
					6.5,
					17,
					4
				],
				15,
				[
					"step",
					[
						"get",
						"symbolrank"
					],
					28,
					9,
					26,
					10,
					23,
					11,
					21,
					12,
					20,
					13,
					19,
					15,
					17
				]
			],
			"icon-image": [
				"case",
				[
					"==",
					[
						"get",
						"capital"
					],
					2
				],
				"border-dot-13",
				[
					"step",
					[
						"get",
						"symbolrank"
					],
					"dot-11",
					9,
					"dot-10",
					11,
					"dot-9"
				]
			],
			"text-font": [
				"step",
				[
					"zoom"
				],
				[
					"literal",
					[
						"DIN Offc Pro Regular",
						"Arial Unicode MS Regular"
					]
				],
				8,
				[
					"step",
					[
						"get",
						"symbolrank"
					],
					[
						"literal",
						[
							"DIN Offc Pro Medium",
							"Arial Unicode MS Regular"
						]
					],
					11,
					[
						"literal",
						[
							"DIN Offc Pro Regular",
							"Arial Unicode MS Regular"
						]
					]
				],
				10,
				[
					"step",
					[
						"get",
						"symbolrank"
					],
					[
						"literal",
						[
							"DIN Offc Pro Medium",
							"Arial Unicode MS Regular"
						]
					],
					12,
					[
						"literal",
						[
							"DIN Offc Pro Regular",
							"Arial Unicode MS Regular"
						]
					]
				],
				11,
				[
					"step",
					[
						"get",
						"symbolrank"
					],
					[
						"literal",
						[
							"DIN Offc Pro Medium",
							"Arial Unicode MS Regular"
						]
					],
					13,
					[
						"literal",
						[
							"DIN Offc Pro Regular",
							"Arial Unicode MS Regular"
						]
					]
				],
				12,
				[
					"step",
					[
						"get",
						"symbolrank"
					],
					[
						"literal",
						[
							"DIN Offc Pro Medium",
							"Arial Unicode MS Regular"
						]
					],
					15,
					[
						"literal",
						[
							"DIN Offc Pro Regular",
							"Arial Unicode MS Regular"
						]
					]
				],
				13,
				[
					"literal",
					[
						"DIN Offc Pro Medium",
						"Arial Unicode MS Regular"
					]
				]
			],
			"text-justify": [
				"step",
				[
					"zoom"
				],
				[
					"match",
					[
						"get",
						"text_anchor"
					],
					[
						"left",
						"bottom-left",
						"top-left"
					],
					"left",
					[
						"right",
						"bottom-right",
						"top-right"
					],
					"right",
					"center"
				],
				8,
				"center"
			],
			"text-offset": [
				"step",
				[
					"zoom"
				],
				[
					"match",
					[
						"get",
						"capital"
					],
					2,
					[
						"match",
						[
							"get",
							"text_anchor"
						],
						"bottom",
						[
							"literal",
							[
								0,
								-0.3
							]
						],
						"bottom-left",
						[
							"literal",
							[
								0.3,
								-0.1
							]
						],
						"left",
						[
							"literal",
							[
								0.45,
								0.1
							]
						],
						"top-left",
						[
							"literal",
							[
								0.3,
								0.1
							]
						],
						"top",
						[
							"literal",
							[
								0,
								0.3
							]
						],
						"top-right",
						[
							"literal",
							[
								-0.3,
								0.1
							]
						],
						"right",
						[
							"literal",
							[
								-0.45,
								0
							]
						],
						"bottom-right",
						[
							"literal",
							[
								-0.3,
								-0.1
							]
						],
						[
							"literal",
							[
								0,
								-0.3
							]
						]
					],
					[
						"match",
						[
							"get",
							"text_anchor"
						],
						"bottom",
						[
							"literal",
							[
								0,
								-0.25
							]
						],
						"bottom-left",
						[
							"literal",
							[
								0.2,
								-0.05
							]
						],
						"left",
						[
							"literal",
							[
								0.4,
								0.05
							]
						],
						"top-left",
						[
							"literal",
							[
								0.2,
								0.05
							]
						],
						"top",
						[
							"literal",
							[
								0,
								0.25
							]
						],
						"top-right",
						[
							"literal",
							[
								-0.2,
								0.05
							]
						],
						"right",
						[
							"literal",
							[
								-0.4,
								0.05
							]
						],
						"bottom-right",
						[
							"literal",
							[
								-0.2,
								-0.05
							]
						],
						[
							"literal",
							[
								0,
								-0.25
							]
						]
					]
				],
				8,
				[
					"literal",
					[
						0,
						0
					]
				]
			],
			"text-anchor": [
				"step",
				[
					"zoom"
				],
				[
					"get",
					"text_anchor"
				],
				8,
				"center"
			],
			"text-field": [
				"coalesce",
				[
					"get",
					"name_en"
				],
				[
					"get",
					"name"
				]
			],
			"text-max-width": 7
		},
		paint: {
			"text-color": [
				"step",
				[
					"get",
					"symbolrank"
				],
				"hsl(0, 0%, 42%)",
				11,
				"hsl(0, 0%, 55%)",
				16,
				"hsl(0, 0%, 62%)"
			],
			"text-halo-color": "hsl(0, 0%, 100%)",
			"icon-opacity": [
				"step",
				[
					"zoom"
				],
				1,
				8,
				0
			],
			"text-halo-blur": 1,
			"text-halo-width": 0.1
		}
	},
	{
		id: "wwb2s-places_lat_lon",
		type: "symbol",
		source: "composite",
		"source-layer": "places_lat_lon-awryh9",
		minzoom: 10.75,
		maxzoom: 20,
		filter: [
			"all",
			[
				">=",
				[
					"get",
					"pop"
				],
				101
			],
			[
				">",
				[
					"get",
					"pct_rural"
				],
				0
			],
			[
				"step",
				[
					"zoom"
				],
				true,
				13,
				[
					">=",
					[
						"get",
						"symbolrank"
					],
					11
				],
				14,
				[
					">=",
					[
						"get",
						"symbolrank"
					],
					13
				]
			]
		],
		layout: {
			"text-line-height": 1.1,
			"text-size": [
				"step",
				[
					"get",
					"symbolrank"
				],
				20,
				9,
				18,
				10,
				16,
				11,
				14,
				12,
				12
			],
			"icon-image": [
				"case",
				[
					"==",
					[
						"get",
						"capital"
					],
					2
				],
				"border-dot-13",
				[
					"step",
					[
						"get",
						"symbolrank"
					],
					"dot-11",
					9,
					"dot-10",
					11,
					"dot-9"
				]
			],
			"text-font": [
				"step",
				[
					"zoom"
				],
				[
					"literal",
					[
						"DIN Offc Pro Regular",
						"Arial Unicode MS Regular"
					]
				],
				8,
				[
					"step",
					[
						"get",
						"symbolrank"
					],
					[
						"literal",
						[
							"DIN Offc Pro Medium",
							"Arial Unicode MS Regular"
						]
					],
					11,
					[
						"literal",
						[
							"DIN Offc Pro Regular",
							"Arial Unicode MS Regular"
						]
					]
				],
				10,
				[
					"step",
					[
						"get",
						"symbolrank"
					],
					[
						"literal",
						[
							"DIN Offc Pro Medium",
							"Arial Unicode MS Regular"
						]
					],
					12,
					[
						"literal",
						[
							"DIN Offc Pro Regular",
							"Arial Unicode MS Regular"
						]
					]
				],
				11,
				[
					"step",
					[
						"get",
						"symbolrank"
					],
					[
						"literal",
						[
							"DIN Offc Pro Medium",
							"Arial Unicode MS Regular"
						]
					],
					13,
					[
						"literal",
						[
							"DIN Offc Pro Regular",
							"Arial Unicode MS Regular"
						]
					]
				],
				12,
				[
					"step",
					[
						"get",
						"symbolrank"
					],
					[
						"literal",
						[
							"DIN Offc Pro Medium",
							"Arial Unicode MS Regular"
						]
					],
					15,
					[
						"literal",
						[
							"DIN Offc Pro Regular",
							"Arial Unicode MS Regular"
						]
					]
				],
				13,
				[
					"literal",
					[
						"DIN Offc Pro Medium",
						"Arial Unicode MS Regular"
					]
				]
			],
			"text-justify": [
				"step",
				[
					"zoom"
				],
				[
					"match",
					[
						"get",
						"text_anchor"
					],
					[
						"left",
						"bottom-left",
						"top-left"
					],
					"left",
					[
						"right",
						"bottom-right",
						"top-right"
					],
					"right",
					"center"
				],
				8,
				"center"
			],
			"text-offset": [
				"step",
				[
					"zoom"
				],
				[
					"match",
					[
						"get",
						"capital"
					],
					2,
					[
						"match",
						[
							"get",
							"text_anchor"
						],
						"bottom",
						[
							"literal",
							[
								0,
								-0.3
							]
						],
						"bottom-left",
						[
							"literal",
							[
								0.3,
								-0.1
							]
						],
						"left",
						[
							"literal",
							[
								0.45,
								0.1
							]
						],
						"top-left",
						[
							"literal",
							[
								0.3,
								0.1
							]
						],
						"top",
						[
							"literal",
							[
								0,
								0.3
							]
						],
						"top-right",
						[
							"literal",
							[
								-0.3,
								0.1
							]
						],
						"right",
						[
							"literal",
							[
								-0.45,
								0
							]
						],
						"bottom-right",
						[
							"literal",
							[
								-0.3,
								-0.1
							]
						],
						[
							"literal",
							[
								0,
								-0.3
							]
						]
					],
					[
						"match",
						[
							"get",
							"text_anchor"
						],
						"bottom",
						[
							"literal",
							[
								0,
								-0.25
							]
						],
						"bottom-left",
						[
							"literal",
							[
								0.2,
								-0.05
							]
						],
						"left",
						[
							"literal",
							[
								0.4,
								0.05
							]
						],
						"top-left",
						[
							"literal",
							[
								0.2,
								0.05
							]
						],
						"top",
						[
							"literal",
							[
								0,
								0.25
							]
						],
						"top-right",
						[
							"literal",
							[
								-0.2,
								0.05
							]
						],
						"right",
						[
							"literal",
							[
								-0.4,
								0.05
							]
						],
						"bottom-right",
						[
							"literal",
							[
								-0.2,
								-0.05
							]
						],
						[
							"literal",
							[
								0,
								-0.25
							]
						]
					]
				],
				8,
				[
					"literal",
					[
						0,
						0
					]
				]
			],
			"text-anchor": [
				"step",
				[
					"zoom"
				],
				[
					"get",
					"text_anchor"
				],
				8,
				"center"
			],
			"text-field": [
				"coalesce",
				[
					"get",
					"NAME"
				],
				[
					"get",
					"name"
				]
			],
			"text-max-width": 7
		},
		paint: {
			"text-halo-color": "hsl(0, 0%, 100%)",
			"icon-opacity": [
				"step",
				[
					"zoom"
				],
				1,
				8,
				0
			],
			"text-halo-blur": 1,
			"text-halo-width": 0.1,
			"text-color": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				0,
				"hsl(0, 0%, 62%)",
				22,
				"#000000"
			],
			"text-opacity": [
				"interpolate",
				[
					"linear"
				],
				[
					"zoom"
				],
				7,
				0,
				9,
				0.97,
				22,
				1
			]
		}
	},
	{
		id: "custom-pattern",
		type: "fill",
		source: "composite",
		"source-layer": "attr_county_labels_pg-155yvu",
		minzoom: 6,
		layout: {
			visibility: "none"
		},
		paint: {
			"fill-color": "hsla(303, 73%, 74%, 0.66)",
			"fill-pattern": "stripe-4"
		}
	}
];
var created = "2022-02-24T13:16:14.872Z";
var modified = "2024-07-11T16:18:50.102Z";
var id = "cl010e7b7001p15pe3l0306hv";
var owner = "ruralinno";
var visibility = "private";
var draft = false;
var MAP_STYLE = {
	version: version,
	name: name,
	metadata: metadata,
	center: center,
	zoom: zoom,
	bearing: bearing,
	pitch: pitch,
	sources: sources,
	sprite: sprite,
	glyphs: glyphs,
	layers: layers,
	created: created,
	modified: modified,
	id: id,
	owner: owner,
	visibility: visibility,
	"protected": false,
	draft: draft
};

export { bearing, center, created, MAP_STYLE as default, draft, glyphs, id, layers, metadata, modified, name, owner, pitch, sources, sprite, version, visibility, zoom };
//# sourceMappingURL=style.json.js.map
