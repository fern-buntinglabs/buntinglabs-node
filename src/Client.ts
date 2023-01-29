/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Client as CensusClient } from "./api/resources/census/client/Client";
import { Client as OsmClient } from "./api/resources/osm/client/Client";
import { Client as PlssClient } from "./api/resources/plss/client/Client";
import { Client as PoiClient } from "./api/resources/poi/client/Client";

export declare namespace BuntinglabsApiClient {
    interface Options {
        environment?: environments.BuntinglabsApiEnvironment | string;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class BuntinglabsApiClient {
    constructor(private readonly options: BuntinglabsApiClient.Options) {}

    #census: CensusClient | undefined;

    public get census(): CensusClient {
        return (this.#census ??= new CensusClient(this.options));
    }

    #osm: OsmClient | undefined;

    public get osm(): OsmClient {
        return (this.#osm ??= new OsmClient(this.options));
    }

    #plss: PlssClient | undefined;

    public get plss(): PlssClient {
        return (this.#plss ??= new PlssClient(this.options));
    }

    #poi: PoiClient | undefined;

    public get poi(): PoiClient {
        return (this.#poi ??= new PoiClient(this.options));
    }
}
