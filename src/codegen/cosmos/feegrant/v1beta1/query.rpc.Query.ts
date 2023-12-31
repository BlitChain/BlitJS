//@ts-nocheck
import * as fm from "../../../grpc-gateway";
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse } from "./query";
export class Query {
  /** Allowance returns granted allwance to the grantee by the granter. */
  static Allowance(request: QueryAllowanceRequest, initRequest?: fm.InitReq): Promise<QueryAllowanceResponse> {
    return fm.fetchReq(`/cosmos/feegrant/v1beta1/allowance/${request["granter"]}/${request["grantee"]}?${fm.renderURLSearchParams({
      ...request
    }, ["granter", "grantee"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Allowances returns all the grants for the given grantee address. */
  static Allowances(request: QueryAllowancesRequest, initRequest?: fm.InitReq): Promise<QueryAllowancesResponse> {
    return fm.fetchReq(`/cosmos/feegrant/v1beta1/allowances/${request["grantee"]}?${fm.renderURLSearchParams({
      ...request
    }, ["grantee"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * AllowancesByGranter returns all the grants given by an address
   * 
   * Since: cosmos-sdk 0.46
   */
  static AllowancesByGranter(request: QueryAllowancesByGranterRequest, initRequest?: fm.InitReq): Promise<QueryAllowancesByGranterResponse> {
    return fm.fetchReq(`/cosmos/feegrant/v1beta1/issued/${request["granter"]}?${fm.renderURLSearchParams({
      ...request
    }, ["granter"])}`, {
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
  /** Allowance returns granted allwance to the grantee by the granter. */
  async Allowance(req: QueryAllowanceRequest, headers?: HeadersInit): Promise<QueryAllowanceResponse> {
    return Query.Allowance(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Allowances returns all the grants for the given grantee address. */
  async Allowances(req: QueryAllowancesRequest, headers?: HeadersInit): Promise<QueryAllowancesResponse> {
    return Query.Allowances(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * AllowancesByGranter returns all the grants given by an address
   * 
   * Since: cosmos-sdk 0.46
   */
  async AllowancesByGranter(req: QueryAllowancesByGranterRequest, headers?: HeadersInit): Promise<QueryAllowancesByGranterResponse> {
    return Query.AllowancesByGranter(req, {
      headers,
      pathPrefix: this.url
    });
  }
}