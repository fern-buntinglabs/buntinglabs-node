/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { BuntinglabsApi } from "@fern-api/buntinglabs";
import * as core from "../../../../core";

export const IncomeResponse: core.serialization.ObjectSchema<
    serializers.IncomeResponse.Raw,
    BuntinglabsApi.IncomeResponse
> = core.serialization.object({
    medianIncome: core.serialization.property("median_income", core.serialization.number().optional()),
    source: core.serialization.string().optional(),
});

export declare namespace IncomeResponse {
    interface Raw {
        median_income?: number | null;
        source?: string | null;
    }
}
