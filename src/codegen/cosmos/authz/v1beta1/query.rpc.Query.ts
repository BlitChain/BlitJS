//@ts-nocheck
import * as fm from "../../../grpc-gateway";
import { QueryGrantsRequest, QueryGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGranteeGrantsRequest, QueryGranteeGrantsResponse } from "./query";
export class Query {
  /** Returns list of `Authorization`, granted to the grantee by the granter. */
  static Grants(request: QueryGrantsRequest, initRequest?: fm.InitReq): Promise<QueryGrantsResponse> {
    return fm.fetchReq(`/cosmos/authz/v1beta1/grants?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * GranterGrants returns list of `GrantAuthorization`, granted by granter.
   * 
   * Since: cosmos-sdk 0.46
   */
  static GranterGrants(request: QueryGranterGrantsRequest, initRequest?: fm.InitReq): Promise<QueryGranterGrantsResponse> {
    return fm.fetchReq(`/cosmos/authz/v1beta1/grants/granter/${request["granter"]}?${fm.renderURLSearchParams({
      ...request
    }, ["granter"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * GranteeGrants returns a list of `GrantAuthorization` by grantee.
   * 
   * Since: cosmos-sdk 0.46
   */
  static GranteeGrants(request: QueryGranteeGrantsRequest, initRequest?: fm.InitReq): Promise<QueryGranteeGrantsResponse> {
    return fm.fetchReq(`/cosmos/authz/v1beta1/grants/grantee/${request["grantee"]}?${fm.renderURLSearchParams({
      ...request
    }, ["grantee"])}`, {
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
  /** Returns list of `Authorization`, granted to the grantee by the granter. */
  async Grants(req: QueryGrantsRequest, headers?: HeadersInit): Promise<QueryGrantsResponse> {
    return Query.Grants(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * GranterGrants returns list of `GrantAuthorization`, granted by granter.
   * 
   * Since: cosmos-sdk 0.46
   */
  async GranterGrants(req: QueryGranterGrantsRequest, headers?: HeadersInit): Promise<QueryGranterGrantsResponse> {
    return Query.GranterGrants(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * GranteeGrants returns a list of `GrantAuthorization` by grantee.
   * 
   * Since: cosmos-sdk 0.46
   */
  async GranteeGrants(req: QueryGranteeGrantsRequest, headers?: HeadersInit): Promise<QueryGranteeGrantsResponse> {
    return Query.GranteeGrants(req, {
      headers,
      pathPrefix: this.url
    });
  }
}