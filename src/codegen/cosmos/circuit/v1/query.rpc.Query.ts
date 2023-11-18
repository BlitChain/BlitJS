//@ts-nocheck
import * as fm from "../../../grpc-gateway";
import { QueryAccountRequest, AccountResponse, QueryAccountsRequest, AccountsResponse, QueryDisabledListRequest, DisabledListResponse } from "./query";
export class Query {
  /** Account returns account permissions. */
  static Account(request: QueryAccountRequest, initRequest?: fm.InitReq): Promise<AccountResponse> {
    return fm.fetchReq(`/cosmos/circuit/v1/accounts/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Account returns account permissions. */
  static Accounts(request: QueryAccountsRequest, initRequest?: fm.InitReq): Promise<AccountsResponse> {
    return fm.fetchReq(`/cosmos/circuit/v1/accounts?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** DisabledList returns a list of disabled message urls */
  static DisabledList(request: QueryDisabledListRequest, initRequest?: fm.InitReq): Promise<DisabledListResponse> {
    return fm.fetchReq(`/cosmos/circuit/v1/disable_list?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class QueryClientImpl {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** Account returns account permissions. */
  async Account(req: QueryAccountRequest, headers?: HeadersInit): Promise<AccountResponse> {
    return Query.Account(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Account returns account permissions. */
  async Accounts(req: QueryAccountsRequest, headers?: HeadersInit): Promise<AccountsResponse> {
    return Query.Accounts(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** DisabledList returns a list of disabled message urls */
  async DisabledList(req: QueryDisabledListRequest, headers?: HeadersInit): Promise<DisabledListResponse> {
    return Query.DisabledList(req, {
      headers,
      pathPrefix: this.url
    });
  }
}