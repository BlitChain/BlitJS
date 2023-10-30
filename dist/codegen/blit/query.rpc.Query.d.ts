import * as fm from "../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
export declare class Query {
    /** Parameters queries the parameters of the module. */
    static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Parameters queries the parameters of the module. */
    Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
}
