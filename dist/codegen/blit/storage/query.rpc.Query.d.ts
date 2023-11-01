import * as fm from "../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse, QueryStorageDetailRequest, QueryStorageDetailResponse, QueryFilterStorageRequest, QueryFilterStorageResponse } from "./query";
export declare class Query {
    /** Parameters queries the parameters of the module. */
    static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
    static StorageDetail(request: QueryStorageDetailRequest, initRequest?: fm.InitReq): Promise<QueryStorageDetailResponse>;
    /** Queries a list of Storage items. */
    static FilterStorage(request: QueryFilterStorageRequest, initRequest?: fm.InitReq): Promise<QueryFilterStorageResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Parameters queries the parameters of the module. */
    Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    StorageDetail(req: QueryStorageDetailRequest, headers?: HeadersInit): Promise<QueryStorageDetailResponse>;
    /** Queries a list of Storage items. */
    FilterStorage(req: QueryFilterStorageRequest, headers?: HeadersInit): Promise<QueryFilterStorageResponse>;
}
