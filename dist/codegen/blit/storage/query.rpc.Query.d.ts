import * as fm from "../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse, QueryGetStorageRequest, QueryGetStorageResponse, QueryAllStorageRequest, QueryAllStorageResponse } from "./query";
export declare class Query {
    /** Parameters queries the parameters of the module. */
    static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
    /** Queries a list of Storage items. */
    static Storage(request: QueryGetStorageRequest, initRequest?: fm.InitReq): Promise<QueryGetStorageResponse>;
    static StorageAll(request: QueryAllStorageRequest, initRequest?: fm.InitReq): Promise<QueryAllStorageResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Parameters queries the parameters of the module. */
    Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    /** Queries a list of Storage items. */
    Storage(req: QueryGetStorageRequest, headers?: HeadersInit): Promise<QueryGetStorageResponse>;
    StorageAll(req: QueryAllStorageRequest, headers?: HeadersInit): Promise<QueryAllStorageResponse>;
}
