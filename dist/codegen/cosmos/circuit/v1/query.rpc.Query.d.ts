import * as fm from "../../../grpc-gateway";
import { QueryAccountRequest, AccountResponse, QueryAccountsRequest, AccountsResponse, QueryDisabledListRequest, DisabledListResponse } from "./query";
export declare class Query {
    /** Account returns account permissions. */
    static Account(request: QueryAccountRequest, initRequest?: fm.InitReq): Promise<AccountResponse>;
    /** Account returns account permissions. */
    static Accounts(request: QueryAccountsRequest, initRequest?: fm.InitReq): Promise<AccountsResponse>;
    /** DisabledList returns a list of disabled message urls */
    static DisabledList(request: QueryDisabledListRequest, initRequest?: fm.InitReq): Promise<DisabledListResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Account returns account permissions. */
    Account(req: QueryAccountRequest, headers?: HeadersInit): Promise<AccountResponse>;
    /** Account returns account permissions. */
    Accounts(req: QueryAccountsRequest, headers?: HeadersInit): Promise<AccountsResponse>;
    /** DisabledList returns a list of disabled message urls */
    DisabledList(req: QueryDisabledListRequest, headers?: HeadersInit): Promise<DisabledListResponse>;
}
