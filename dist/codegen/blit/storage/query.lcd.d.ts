import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryStorageDetailRequest, QueryStorageDetailResponseSDKType, QueryFilterStorageRequest, QueryFilterStorageResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    storageDetail(params: QueryStorageDetailRequest): Promise<QueryStorageDetailResponseSDKType>;
    filterStorage(params: QueryFilterStorageRequest): Promise<QueryFilterStorageResponseSDKType>;
}
