/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ExtractFeaturesRequest {
    /**
     * The center of the circle as a coordinate. Residents inside this circle will be counted in calculating the population count.
     * The center coordinate is formatted as longitude,latitude. One of center or address is required.
     *
     */
    center?: string;
    /**
     * The center of the circle as an address. Residents inside this circle will be counted in calculating the population count.
     * If the address is ambiguous, the best result will be chosen, which may or may not be the target address.
     * To get the best results, provide the full address, including: building number, street name, city name, state, zip code, and country.
     *
     */
    address?: string;
    /**
     * The radius around the center, in meters. Maximum radius is 16,093 meters (10 miles).
     */
    radius: number;
    /**
     * Your account's API key. You can create an API key by [registering for an account](https://buntinglabs.com/account/register) and copy and paste it from your [account dashboard](https://buntinglabs.com/dashboard).
     */
    apiKey: string;
}