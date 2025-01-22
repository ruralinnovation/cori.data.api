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
export declare function mapboxGeocode(api_key: string, text: string): Promise<any>;
//# sourceMappingURL=index.d.ts.map