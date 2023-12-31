//@ts-nocheck
import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse, QuerySubspacesRequest, QuerySubspacesResponse } from "./query";
export class Query {
  /**
   * Params queries a specific parameter of a module, given its subspace and
   * key.
   */
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/cosmos/params/v1beta1/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * Subspaces queries for all registered subspaces and all keys for a subspace.
   * 
   * Since: cosmos-sdk 0.46
   */
  static Subspaces(request: QuerySubspacesRequest, initRequest?: fm.InitReq): Promise<QuerySubspacesResponse> {
    return fm.fetchReq(`/cosmos/params/v1beta1/subspaces?${fm.renderURLSearchParams({
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
  /**
   * Params queries a specific parameter of a module, given its subspace and
   * key.
   */
  async Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.Params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * Subspaces queries for all registered subspaces and all keys for a subspace.
   * 
   * Since: cosmos-sdk 0.46
   */
  async Subspaces(req: QuerySubspacesRequest, headers?: HeadersInit): Promise<QuerySubspacesResponse> {
    return Query.Subspaces(req, {
      headers,
      pathPrefix: this.url
    });
  }
}