import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse, QuerySubspacesRequest, QuerySubspacesResponse } from "./query";
export declare class Query {
    /**
     * Params queries a specific parameter of a module, given its subspace and
     * key.
     */
    static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
    /**
     * Subspaces queries for all registered subspaces and all keys for a subspace.
     *
     * Since: cosmos-sdk 0.46
     */
    static Subspaces(request: QuerySubspacesRequest, initRequest?: fm.InitReq): Promise<QuerySubspacesResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /**
     * Params queries a specific parameter of a module, given its subspace and
     * key.
     */
    Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    /**
     * Subspaces queries for all registered subspaces and all keys for a subspace.
     *
     * Since: cosmos-sdk 0.46
     */
    Subspaces(req: QuerySubspacesRequest, headers?: HeadersInit): Promise<QuerySubspacesResponse>;
}
