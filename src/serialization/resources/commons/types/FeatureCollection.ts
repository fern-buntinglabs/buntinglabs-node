/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { BuntinglabsApi } from "@fern-api/buntinglabs";
import * as core from "../../../../core";

export const FeatureCollection: core.serialization.ObjectSchema<
    serializers.FeatureCollection.Raw,
    BuntinglabsApi.FeatureCollection
> = core.serialization.object({
    type: core.serialization.string(),
    features: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Feature)),
});

export declare namespace FeatureCollection {
    interface Raw {
        type: string;
        features: serializers.Feature.Raw[];
    }
}