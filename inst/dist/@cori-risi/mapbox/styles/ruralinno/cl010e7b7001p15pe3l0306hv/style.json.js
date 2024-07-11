/*
 * CORI Data API component library
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
	"mapbox:thumb": "data:image/webp;base64,UklGRuoHAABXRUJQVlA4TN4HAAAvO8AOABXhdfb/nVw3939lylli5skMG5jJDbO7ZPH/L69Ccs7+OttdHHcH2M4gMC4/ncDSaZzDwN0C4+zXOWcfqDrQAKqmWJevs7dzYOf0h139OkGV47g7AAHBbSNHkmo2h56A+/8/96arSg7bNnIkuv9iL+1+3Nnp/wQcYA+P8BCAABnZwj5QRzhz5j7ZRbYxYrXr60heNVfKnhI8fDkMYH8ObBUFyUggNVeXl0/32qr2orIf1sY8bi+3a2m7ewdLDhuGYRkIKvuyF8AYlVK9OtU9s2UVG2OGbbzSin17Rd98GHbtAbBLqfTqnCh1oE7ajm5ZG2X7+r/3+sh9XKpMDyBzUZ+yZ3/+JIclBIkqscMctaX2o9bKxjrgZf3Hhv0j97AZZNVRHtoA9u1BBFRS0LEKyvrhF6nN73yIF3GrKak7+JEbuIUHuA27gEKAlIhKSOxEruGyfRmX8L7b/z233wee74u4YK6WqKR8qAPpH775nbfDmzeBJmhIQBU0KGCSZdv8vG/fP7mlD5SX077U7IPCRI1wFz+yibd+5C8jya5AAshEJami3fm818dz8zUe4o4+ULmv2NlISXSsAErA19/6RpwKMZ35IaNLre3P+vrcXX679J++7XQhbWlu72cUPXlD7AUJhtaC/a2n/vr6ce2x96jrem9mozyVMT3KAdSGqJzHOVzE2/GNlUhLAioJktS1495l33d/sPLkgCj7Enqozjh0pCoJkFqFXj0QQG5/3ncf7y32B9JKzecL6amghj4BRcOyx8BKpK4d9zb77dPPCVDtEAqVVB7aAohqhJp0SCiEtvF6b1IXZzQED6SoJD0qLU+DKinJKokCGatk/f2+ar2WSILORZ+GFGAvn1/2A2RXVQSVMZhc26+16CcgQKbqSIJ1CFjQYwhLYi+s0Fw5jndlPmkVEk9EU2OwBxImCSoBloARYhPbq/t1LimpmKyMws2KhxKAimpQMlYgwISivTbuMxWlAmRqwMcEVcaqUJ0GoRIybVAXH59zZSWYJBNagiKdLqmRjSBjhZoQNEm2YNqZx+di5057BBWZpgsBMARNUk01c0VaghzX8Sk7SL36HVfUo6xIGqqd/sQ2KCSApFbU6QPplGrt5eN4qfUgDYygxP4Unqw8pU0NKElwuZyclG2bvbbfL2pbqPKkKfRBD4nKeDVWSeg1+H6cwdtwHu9lX3/Nrft6DZvZUfPkN/fsiN1tgV1oneQEOqYqSNTj3VifmF/ZH17QjSZCa8vE3nf/slKBpHDaEkWrgl0wTEZUbn4+W7c/Hyx0qkbk2Ck9d0qQ3um0xqiooIBS4AMKro7hDV3voF7FGq7r9BV9dFw9toyhqPGU5USlEwURU7hFef3z2ls2F5pdnibHMFLrTCMZ5/NRCwJqQwujpuJu1PqYf57LutsUmD61mjBVsxIIdptgb5WBgGnh6nFtXf+3dblyvahkPm8p1YzxlI5jVMbYj2k1QloLtqxv9wE9ivrJVyfVjCPYy2oyVQO0FMQahR75uJDIcX18x17fxnKX9RXrRVoLPi4KQhIT92FziYrHAihhuDnmX/71/1dmleN6HKpHqlBDU0l99mAZAC3qO/ZY4zMVmYOrHCfLYlnZDc1eqgpcJaeqLO/bVpIQlLq+3fusn1wrRnzsBHZCsvzr+nTVkz3QELUWw0ASEJBc+zt3qb+72vEkyGEk2F9oTpYNVYZhGCwADUmu78+v1IXObWPZBwoqdAJazEVtw7AYPBYEKfKf2WGdXNBvHYKHEvy7b/zGK3gJVVkZu4vFMAweJ9Egufv8bt1/1L/vx/7FS9NDPQKBHjQprR95fRPfSag35h1GdjcNQJRsrAOSPer7z3Xut89gP9k23w5RSULMaqqSRYdEsLuP9XWA8MNvXUqrB+0Q8RsESFSSmopATzXALrnxnaPLfgSTEfv7P5gZAI3mN8F0VStthT7OZxNIhMrmOsDin65qPQnpIiahh6oh9i17noRUUFIb+yB85/F9alP/rULiPwJFV0jV1J44GYbFIiFVUUhtfGdavZrutU+8aP5bIYVpq0mqEUi1ZbNLwtABQlBJ1r4z9eT8mff88k9nyq1q6ZpU1D0Ak/H088Zv9CQZhmGxWJQEgkqtvd68dfxa5vP2oj4482/0UaeaZJU210AfrWfbbqSSClj1N34I78C7dZZ+/b3TqUKACUqKoDDFEVGoNzs79pa9TIpUJVnW3/gNV9LTW13LD0xjTVKpU6EF1Apje48f0IvnR4vZPXvRUiWVVFr+d3Xp9GqGO9aZzgOJLVKtpBoaqtLo4WgYhmH2wH52RFIInVpbxwjv/bfZ+dQHa39fkqqY2rMJKSFW1dQumQ2LxbB49uxoUiFIUpW1bcw/2c65rpRVFQVyPAkWJkU+f6oKLIbubHY0+9o5lbHQ+fWpnzrX+0bJpGXKI5DGZFUh1GRcZY+T7+lZPD86+nRRyTihwvo6mu1yr5/YJWQ1H5MW4WRctYqU3VaTYdZZzJ7PnrdKLUPGmGxsY1GcsX5HQcYpQbJU5bTDMAw9i6PF0eyZlWqtUquQL6kaxb7Qfkhw5QE+X9GUiiw7486zYVjMjmbPZ8+oZaW1lnnVcv07aHux1nRlQqOgSqIkFZWhZ7GYDbPZ7PnRslW142UVZTbWmbZDrUW+7Q17o0UqUiRjdd7zfDFbdGYz"
};
var center = [
	-72.34670464597079,
	43.53064642794919
];
var zoom = 11.348411543149238;
var bearing = 0;
var pitch = 1.966080615071496;
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
		maxzoom: 11,
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
		minzoom: 9.99,
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
var modified = "2024-07-11T16:01:45.840Z";
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
