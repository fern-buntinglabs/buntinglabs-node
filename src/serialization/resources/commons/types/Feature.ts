/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { BuntinglabsApi } from "@fern-api/buntinglabs";
import * as core from "../../../../core";

export const Feature: core.serialization.ObjectSchema<serializers.Feature.Raw, BuntinglabsApi.Feature> =
    core.serialization.object({
        type: core.serialization.string(),
        geometry: core.serialization.lazyObject(async () => (await import("../../..")).FeatureGeometry),
        properties: core.serialization.lazy(async () => (await import("../../..")).FeatureProperties),
    });

export declare namespace Feature {
    interface Raw {
        type: string;
        geometry: serializers.FeatureGeometry.Raw;
        properties?: serializers.FeatureProperties.Raw;
    }
}