import * as fm from "../../../grpc-gateway";
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse } from "./query";
export declare class Query {
    /** Allowance returns granted allwance to the grantee by the granter. */
    static Allowance(request: QueryAllowanceRequest, initRequest?: fm.InitReq): Promise<QueryAllowanceResponse>;
    /** Allowances returns all the grants for the given grantee address. */
    static Allowances(request: QueryAllowancesRequest, initRequest?: fm.InitReq): Promise<QueryAllowancesResponse>;
    /**
     * AllowancesByGranter returns all the grants given by an address
     *
     * Since: cosmos-sdk 0.46
     */
    static AllowancesByGranter(request: QueryAllowancesByGranterRequest, initRequest?: fm.InitReq): Promise<QueryAllowancesByGranterResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Allowance returns granted allwance to the grantee by the granter. */
    Allowance(req: QueryAllowanceRequest, headers?: HeadersInit): Promise<QueryAllowanceResponse>;
    /** Allowances returns all the grants for the given grantee address. */
    Allowances(req: QueryAllowancesRequest, headers?: HeadersInit): Promise<QueryAllowancesResponse>;
    /**
     * AllowancesByGranter returns all the grants given by an address
     *
     * Since: cosmos-sdk 0.46
     */
    AllowancesByGranter(req: QueryAllowancesByGranterRequest, headers?: HeadersInit): Promise<QueryAllowancesByGranterResponse>;
}
