import axios from "axios";

/**
 * This function is a simple wrapper around the [Mapbox Geocoding API](https://docs.mapbox.com/api/search/geocoding/)
 *
 * @param api_key - The Mapbox API (public) token (string)
 * @param text - The search terms (string) that will be passed at the query to the API request
 *
 * ```ts
 * import { mapboxGeocode } from "@cori-risi/cori.data.api";
 *
 * // ...
 *
 * const relevant_features = await mapboxGeocode(mapbox_access_token, text);
 *
 * ```
 * */
export async function mapboxGeocode (api_key: string, text: string) {

    const search_request = 'https://api.mapbox.com/search/geocode/v6/forward'

    console.log("MAPBOX API TOKEN: ", api_key);

    const res = await axios.get(search_request,
        {
            params: {
                access_token: api_key,
                q: text
            }
        }
    )

    console.log("MAPBOX API: ", res);

    const found_features = res.data.features
        .filter((f: any) => (f.hasOwnProperty("geometry") && f.geometry.type === "Point"));

    console.log("found_features: ", found_features);

    return found_features
        .filter((item: any) => {
            return item.hasOwnProperty("properties")
                && item["properties"].hasOwnProperty("full_address")
                && item["properties"].hasOwnProperty("context")
                && item["properties"]["context"].hasOwnProperty("country")
                && item["properties"]["context"]["country"].hasOwnProperty("country_code")
                && item["properties"]["context"]["country"]["country_code"]
                    .match(/(?:US|AS|GU|MP|PR|VI)/) !== null
                && "region" in item["properties"]["context"]
                && "postcode" in item["properties"]["context"];
        })
        .map((item: any) => {
            console.log(item);
            const properties = item["properties"];
            properties["label"] = item["properties"]["full_address"];
            properties['props'] = JSON.stringify(properties);

            return {
                ...item,
                properties
            };
        });
}
