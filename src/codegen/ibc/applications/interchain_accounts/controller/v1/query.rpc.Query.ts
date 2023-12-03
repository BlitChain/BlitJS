//@ts-nocheck
import * as fm from "../../../../../grpc-gateway";
import { QueryInterchainAccountRequest, QueryInterchainAccountResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export class Query {
  /** InterchainAccount returns the interchain account address for a given owner address on a given connection */
  static InterchainAccount(request: QueryInterchainAccountRequest, initRequest?: fm.InitReq): Promise<QueryInterchainAccountResponse> {
    return fm.fetchReq(`/ibc/apps/interchain_accounts/controller/v1/owners/${request["owner"]}/connections/${request["connection_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["owner", "connection_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Params queries all parameters of the ICA controller submodule. */
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/ibc/apps/interchain_accounts/controller/v1/params?${fm.renderURLSearchParams({
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
  /** InterchainAccount returns the interchain account address for a given owner address on a given connection */
  async InterchainAccount(req: QueryInterchainAccountRequest, headers?: HeadersInit): Promise<QueryInterchainAccountResponse> {
    return Query.InterchainAccount(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Params queries all parameters of the ICA controller submodule. */
  async Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.Params(req, {
      headers,
      pathPrefix: this.url
    });
  }
}