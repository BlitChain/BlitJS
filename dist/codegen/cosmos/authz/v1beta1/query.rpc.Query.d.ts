import * as fm from "../../../grpc-gateway";
import { QueryGrantsRequest, QueryGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGranteeGrantsRequest, QueryGranteeGrantsResponse } from "./query";
export declare class Query {
    /** Returns list of `Authorization`, granted to the grantee by the granter. */
    static Grants(request: QueryGrantsRequest, initRequest?: fm.InitReq): Promise<QueryGrantsResponse>;
    /**
     * GranterGrants returns list of `GrantAuthorization`, granted by granter.
     *
     * Since: cosmos-sdk 0.46
     */
    static GranterGrants(request: QueryGranterGrantsRequest, initRequest?: fm.InitReq): Promise<QueryGranterGrantsResponse>;
    /**
     * GranteeGrants returns a list of `GrantAuthorization` by grantee.
     *
     * Since: cosmos-sdk 0.46
     */
    static GranteeGrants(request: QueryGranteeGrantsRequest, initRequest?: fm.InitReq): Promise<QueryGranteeGrantsResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Returns list of `Authorization`, granted to the grantee by the granter. */
    Grants(req: QueryGrantsRequest, headers?: HeadersInit): Promise<QueryGrantsResponse>;
    /**
     * GranterGrants returns list of `GrantAuthorization`, granted by granter.
     *
     * Since: cosmos-sdk 0.46
     */
    GranterGrants(req: QueryGranterGrantsRequest, headers?: HeadersInit): Promise<QueryGranterGrantsResponse>;
    /**
     * GranteeGrants returns a list of `GrantAuthorization` by grantee.
     *
     * Since: cosmos-sdk 0.46
     */
    GranteeGrants(req: QueryGranteeGrantsRequest, headers?: HeadersInit): Promise<QueryGranteeGrantsResponse>;
}
