import * as fm from "../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse, QueryStorageDetailRequest, QueryStorageDetailResponse, QueryFilterStorageRequest, QueryFilterStorageResponse } from "./query";
export declare class Query {
    /** Parameters queries the parameters of the module. */
    static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
    /** Get a specific Storage by addres and index */
    static StorageDetail(request: QueryStorageDetailRequest, initRequest?: fm.InitReq): Promise<QueryStorageDetailResponse>;
    /** Filters by address and index prefix. */
    static FilterStorage(request: QueryFilterStorageRequest, initRequest?: fm.InitReq): Promise<QueryFilterStorageResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Parameters queries the parameters of the module. */
    Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    /** Get a specific Storage by addres and index */
    StorageDetail(req: QueryStorageDetailRequest, headers?: HeadersInit): Promise<QueryStorageDetailResponse>;
    /** Filters by address and index prefix. */
    FilterStorage(req: QueryFilterStorageRequest, headers?: HeadersInit): Promise<QueryFilterStorageResponse>;
}
