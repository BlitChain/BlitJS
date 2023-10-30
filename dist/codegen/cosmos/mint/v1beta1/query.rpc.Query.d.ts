import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse, QueryInflationRequest, QueryInflationResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse } from "./query";
export declare class Query {
    /** Params returns the total set of minting parameters. */
    static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
    /** Inflation returns the current minting inflation value. */
    static Inflation(request: QueryInflationRequest, initRequest?: fm.InitReq): Promise<QueryInflationResponse>;
    /** AnnualProvisions current minting annual provisions value. */
    static AnnualProvisions(request: QueryAnnualProvisionsRequest, initRequest?: fm.InitReq): Promise<QueryAnnualProvisionsResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Params returns the total set of minting parameters. */
    Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    /** Inflation returns the current minting inflation value. */
    Inflation(req: QueryInflationRequest, headers?: HeadersInit): Promise<QueryInflationResponse>;
    /** AnnualProvisions current minting annual provisions value. */
    AnnualProvisions(req: QueryAnnualProvisionsRequest, headers?: HeadersInit): Promise<QueryAnnualProvisionsResponse>;
}
