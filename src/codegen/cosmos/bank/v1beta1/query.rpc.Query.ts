//@ts-nocheck
import * as fm from "../../../grpc-gateway";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QuerySpendableBalanceByDenomRequest, QuerySpendableBalanceByDenomResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomMetadataByQueryStringRequest, QueryDenomMetadataByQueryStringResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse, QuerySendEnabledRequest, QuerySendEnabledResponse } from "./query";
export class Query {
  /** Balance queries the balance of a single coin for a single account. */
  static Balance(request: QueryBalanceRequest, initRequest?: fm.InitReq): Promise<QueryBalanceResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/balances/${request["address"]}/by_denom?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * AllBalances queries the balance of all coins for a single account.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  static AllBalances(request: QueryAllBalancesRequest, initRequest?: fm.InitReq): Promise<QueryAllBalancesResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/balances/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * SpendableBalances queries the spendable balance of all coins for a single
   * account.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   * 
   * Since: cosmos-sdk 0.46
   */
  static SpendableBalances(request: QuerySpendableBalancesRequest, initRequest?: fm.InitReq): Promise<QuerySpendableBalancesResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/spendable_balances/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * SpendableBalanceByDenom queries the spendable balance of a single denom for
   * a single account.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   * 
   * Since: cosmos-sdk 0.47
   */
  static SpendableBalanceByDenom(request: QuerySpendableBalanceByDenomRequest, initRequest?: fm.InitReq): Promise<QuerySpendableBalanceByDenomResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/spendable_balances/${request["address"]}/by_denom?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * TotalSupply queries the total supply of all coins.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  static TotalSupply(request: QueryTotalSupplyRequest, initRequest?: fm.InitReq): Promise<QueryTotalSupplyResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/supply?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * SupplyOf queries the supply of a single coin.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  static SupplyOf(request: QuerySupplyOfRequest, initRequest?: fm.InitReq): Promise<QuerySupplyOfResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/supply/by_denom?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Params queries the parameters of x/bank module. */
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** DenomsMetadata queries the client metadata of a given coin denomination. */
  static DenomMetadata(request: QueryDenomMetadataRequest, initRequest?: fm.InitReq): Promise<QueryDenomMetadataResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/denoms_metadata/${request["denom"]}?${fm.renderURLSearchParams({
      ...request
    }, ["denom"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** DenomsMetadata queries the client metadata of a given coin denomination. */
  static DenomMetadataByQueryString(request: QueryDenomMetadataByQueryStringRequest, initRequest?: fm.InitReq): Promise<QueryDenomMetadataByQueryStringResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/denoms_metadata_by_query_string?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * DenomsMetadata queries the client metadata for all registered coin
   * denominations.
   */
  static DenomsMetadata(request: QueryDenomsMetadataRequest, initRequest?: fm.InitReq): Promise<QueryDenomsMetadataResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/denoms_metadata?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * DenomOwners queries for all account addresses that own a particular token
   * denomination.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   * 
   * Since: cosmos-sdk 0.46
   */
  static DenomOwners(request: QueryDenomOwnersRequest, initRequest?: fm.InitReq): Promise<QueryDenomOwnersResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/denom_owners/${request["denom"]}?${fm.renderURLSearchParams({
      ...request
    }, ["denom"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * SendEnabled queries for SendEnabled entries.
   * 
   * This query only returns denominations that have specific SendEnabled settings.
   * Any denomination that does not have a specific setting will use the default
   * params.default_send_enabled, and will not be returned by this query.
   * 
   * Since: cosmos-sdk 0.47
   */
  static SendEnabled(request: QuerySendEnabledRequest, initRequest?: fm.InitReq): Promise<QuerySendEnabledResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/send_enabled?${fm.renderURLSearchParams({
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
  /** Balance queries the balance of a single coin for a single account. */
  async Balance(req: QueryBalanceRequest, headers?: HeadersInit): Promise<QueryBalanceResponse> {
    return Query.Balance(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * AllBalances queries the balance of all coins for a single account.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  async AllBalances(req: QueryAllBalancesRequest, headers?: HeadersInit): Promise<QueryAllBalancesResponse> {
    return Query.AllBalances(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * SpendableBalances queries the spendable balance of all coins for a single
   * account.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   * 
   * Since: cosmos-sdk 0.46
   */
  async SpendableBalances(req: QuerySpendableBalancesRequest, headers?: HeadersInit): Promise<QuerySpendableBalancesResponse> {
    return Query.SpendableBalances(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * SpendableBalanceByDenom queries the spendable balance of a single denom for
   * a single account.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   * 
   * Since: cosmos-sdk 0.47
   */
  async SpendableBalanceByDenom(req: QuerySpendableBalanceByDenomRequest, headers?: HeadersInit): Promise<QuerySpendableBalanceByDenomResponse> {
    return Query.SpendableBalanceByDenom(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * TotalSupply queries the total supply of all coins.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  async TotalSupply(req: QueryTotalSupplyRequest, headers?: HeadersInit): Promise<QueryTotalSupplyResponse> {
    return Query.TotalSupply(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * SupplyOf queries the supply of a single coin.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  async SupplyOf(req: QuerySupplyOfRequest, headers?: HeadersInit): Promise<QuerySupplyOfResponse> {
    return Query.SupplyOf(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Params queries the parameters of x/bank module. */
  async Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.Params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** DenomsMetadata queries the client metadata of a given coin denomination. */
  async DenomMetadata(req: QueryDenomMetadataRequest, headers?: HeadersInit): Promise<QueryDenomMetadataResponse> {
    return Query.DenomMetadata(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** DenomsMetadata queries the client metadata of a given coin denomination. */
  async DenomMetadataByQueryString(req: QueryDenomMetadataByQueryStringRequest, headers?: HeadersInit): Promise<QueryDenomMetadataByQueryStringResponse> {
    return Query.DenomMetadataByQueryString(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * DenomsMetadata queries the client metadata for all registered coin
   * denominations.
   */
  async DenomsMetadata(req: QueryDenomsMetadataRequest, headers?: HeadersInit): Promise<QueryDenomsMetadataResponse> {
    return Query.DenomsMetadata(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * DenomOwners queries for all account addresses that own a particular token
   * denomination.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   * 
   * Since: cosmos-sdk 0.46
   */
  async DenomOwners(req: QueryDenomOwnersRequest, headers?: HeadersInit): Promise<QueryDenomOwnersResponse> {
    return Query.DenomOwners(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * SendEnabled queries for SendEnabled entries.
   * 
   * This query only returns denominations that have specific SendEnabled settings.
   * Any denomination that does not have a specific setting will use the default
   * params.default_send_enabled, and will not be returned by this query.
   * 
   * Since: cosmos-sdk 0.47
   */
  async SendEnabled(req: QuerySendEnabledRequest, headers?: HeadersInit): Promise<QuerySendEnabledResponse> {
    return Query.SendEnabled(req, {
      headers,
      pathPrefix: this.url
    });
  }
}