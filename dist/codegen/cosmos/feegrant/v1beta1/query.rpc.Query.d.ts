import * as fm from "../../../grpc-gateway";
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse } from "./query";
export declare class Query {
    /** Allowance returns fee granted to the grantee by the granter. */
    static Allowance(request: QueryAllowanceRequest, initRequest?: fm.InitReq): Promise<QueryAllowanceResponse>;
    /** Allowances returns all the grants for address. */
    static Allowances(request: QueryAllowancesRequest, initRequest?: fm.InitReq): Promise<QueryAllowancesResponse>;
    /**
     * AllowancesByGranter returns all the grants given by an address
     * Since v0.46
     */
    static AllowancesByGranter(request: QueryAllowancesByGranterRequest, initRequest?: fm.InitReq): Promise<QueryAllowancesByGranterResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Allowance returns fee granted to the grantee by the granter. */
    Allowance(req: QueryAllowanceRequest, headers?: HeadersInit): Promise<QueryAllowanceResponse>;
    /** Allowances returns all the grants for address. */
    Allowances(req: QueryAllowancesRequest, headers?: HeadersInit): Promise<QueryAllowancesResponse>;
    /**
     * AllowancesByGranter returns all the grants given by an address
     * Since v0.46
     */
    AllowancesByGranter(req: QueryAllowancesByGranterRequest, headers?: HeadersInit): Promise<QueryAllowancesByGranterResponse>;
}
