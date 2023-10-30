import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse, QueryEpochProvisionsRequest, QueryEpochProvisionsResponse } from "./query";
export declare class Query {
    /** Params returns the total set of minting parameters. */
    static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
    /** EpochProvisions returns the current minting epoch provisions value. */
    static EpochProvisions(request: QueryEpochProvisionsRequest, initRequest?: fm.InitReq): Promise<QueryEpochProvisionsResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Params returns the total set of minting parameters. */
    Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    /** EpochProvisions returns the current minting epoch provisions value. */
    EpochProvisions(req: QueryEpochProvisionsRequest, headers?: HeadersInit): Promise<QueryEpochProvisionsResponse>;
}
