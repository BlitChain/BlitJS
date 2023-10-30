import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
export declare class Query {
    /**
     * Params defines a gRPC query method that returns the ibc-rate-limit module's
     * parameters.
     */
    static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /**
     * Params defines a gRPC query method that returns the ibc-rate-limit module's
     * parameters.
     */
    Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
}
