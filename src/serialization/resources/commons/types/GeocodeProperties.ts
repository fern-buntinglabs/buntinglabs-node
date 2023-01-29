/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { BuntinglabsApi } from "@fern-api/buntinglabs";
import * as core from "../../../../core";

export const GeocodeProperties: core.serialization.ObjectSchema<
    serializers.GeocodeProperties.Raw,
    BuntinglabsApi.GeocodeProperties
> = core.serialization.object({
    description: core.serialization.string(),
    acreage: core.serialization.number(),
});

export declare namespace GeocodeProperties {
    interface Raw {
        description: string;
        acreage: number;
    }
}
