import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetStorageRequest, QueryGetStorageResponseSDKType, QueryAllStorageRequest, QueryAllStorageResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    storage(params: QueryGetStorageRequest): Promise<QueryGetStorageResponseSDKType>;
    storageAll(params: QueryAllStorageRequest): Promise<QueryAllStorageResponseSDKType>;
}
