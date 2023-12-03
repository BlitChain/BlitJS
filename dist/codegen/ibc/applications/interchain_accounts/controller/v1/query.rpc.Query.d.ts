import * as fm from "../../../../../grpc-gateway";
import { QueryInterchainAccountRequest, QueryInterchainAccountResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export declare class Query {
    /** InterchainAccount returns the interchain account address for a given owner address on a given connection */
    static InterchainAccount(request: QueryInterchainAccountRequest, initRequest?: fm.InitReq): Promise<QueryInterchainAccountResponse>;
    /** Params queries all parameters of the ICA controller submodule. */
    static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** InterchainAccount returns the interchain account address for a given owner address on a given connection */
    InterchainAccount(req: QueryInterchainAccountRequest, headers?: HeadersInit): Promise<QueryInterchainAccountResponse>;
    /** Params queries all parameters of the ICA controller submodule. */
    Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
}
