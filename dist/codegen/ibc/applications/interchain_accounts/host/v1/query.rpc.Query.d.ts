import * as fm from "../../../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
export declare class Query {
    /** Params queries all parameters of the ICA host submodule. */
    static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Params queries all parameters of the ICA host submodule. */
    Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
}
