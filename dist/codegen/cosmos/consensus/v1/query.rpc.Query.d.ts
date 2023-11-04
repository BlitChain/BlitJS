import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
export declare class Query {
    /** Params queries the parameters of x/consensus_param module. */
    static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Params queries the parameters of x/consensus_param module. */
    Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
}
