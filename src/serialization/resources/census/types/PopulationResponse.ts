/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { BuntinglabsApi } from "@fern-api/buntinglabs";
import * as core from "../../../../core";

export const PopulationResponse: core.serialization.ObjectSchema<
    serializers.PopulationResponse.Raw,
    BuntinglabsApi.PopulationResponse
> = core.serialization.object({
    population: core.serialization.number().optional(),
    source: core.serialization.string().optional(),
});

export declare namespace PopulationResponse {
    interface Raw {
        population?: number | null;
        source?: string | null;
    }
}
