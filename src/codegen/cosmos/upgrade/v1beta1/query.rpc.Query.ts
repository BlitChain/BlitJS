//@ts-nocheck
import * as fm from "../../../grpc-gateway";
import { QueryCurrentPlanRequest, QueryCurrentPlanResponse, QueryAppliedPlanRequest, QueryAppliedPlanResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryModuleVersionsRequest, QueryModuleVersionsResponse, QueryAuthorityRequest, QueryAuthorityResponse } from "./query";
export class Query {
  /** CurrentPlan queries the current upgrade plan. */
  static CurrentPlan(request: QueryCurrentPlanRequest, initRequest?: fm.InitReq): Promise<QueryCurrentPlanResponse> {
    return fm.fetchReq(`/cosmos/upgrade/v1beta1/current_plan?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** AppliedPlan queries a previously applied upgrade plan by its name. */
  static AppliedPlan(request: QueryAppliedPlanRequest, initRequest?: fm.InitReq): Promise<QueryAppliedPlanResponse> {
    return fm.fetchReq(`/cosmos/upgrade/v1beta1/applied_plan/${request["name"]}?${fm.renderURLSearchParams({
      ...request
    }, ["name"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * UpgradedConsensusState queries the consensus state that will serve
   * as a trusted kernel for the next version of this chain. It will only be
   * stored at the last height of this chain.
   * UpgradedConsensusState RPC not supported with legacy querier
   * This rpc is deprecated now that IBC has its own replacement
   * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
   */
  static UpgradedConsensusState(request: QueryUpgradedConsensusStateRequest, initRequest?: fm.InitReq): Promise<QueryUpgradedConsensusStateResponse> {
    return fm.fetchReq(`/cosmos/upgrade/v1beta1/upgraded_consensus_state/${request["last_height"]}?${fm.renderURLSearchParams({
      ...request
    }, ["last_height"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * ModuleVersions queries the list of module versions from state.
   * 
   * Since: cosmos-sdk 0.43
   */
  static ModuleVersions(request: QueryModuleVersionsRequest, initRequest?: fm.InitReq): Promise<QueryModuleVersionsResponse> {
    return fm.fetchReq(`/cosmos/upgrade/v1beta1/module_versions?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * Returns the account with authority to conduct upgrades
   * 
   * Since: cosmos-sdk 0.46
   */
  static Authority(request: QueryAuthorityRequest, initRequest?: fm.InitReq): Promise<QueryAuthorityResponse> {
    return fm.fetchReq(`/cosmos/upgrade/v1beta1/authority?${fm.renderURLSearchParams({
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
  /** CurrentPlan queries the current upgrade plan. */
  async CurrentPlan(req: QueryCurrentPlanRequest, headers?: HeadersInit): Promise<QueryCurrentPlanResponse> {
    return Query.CurrentPlan(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** AppliedPlan queries a previously applied upgrade plan by its name. */
  async AppliedPlan(req: QueryAppliedPlanRequest, headers?: HeadersInit): Promise<QueryAppliedPlanResponse> {
    return Query.AppliedPlan(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * UpgradedConsensusState queries the consensus state that will serve
   * as a trusted kernel for the next version of this chain. It will only be
   * stored at the last height of this chain.
   * UpgradedConsensusState RPC not supported with legacy querier
   * This rpc is deprecated now that IBC has its own replacement
   * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
   */
  async UpgradedConsensusState(req: QueryUpgradedConsensusStateRequest, headers?: HeadersInit): Promise<QueryUpgradedConsensusStateResponse> {
    return Query.UpgradedConsensusState(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * ModuleVersions queries the list of module versions from state.
   * 
   * Since: cosmos-sdk 0.43
   */
  async ModuleVersions(req: QueryModuleVersionsRequest, headers?: HeadersInit): Promise<QueryModuleVersionsResponse> {
    return Query.ModuleVersions(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * Returns the account with authority to conduct upgrades
   * 
   * Since: cosmos-sdk 0.46
   */
  async Authority(req: QueryAuthorityRequest, headers?: HeadersInit): Promise<QueryAuthorityResponse> {
    return Query.Authority(req, {
      headers,
      pathPrefix: this.url
    });
  }
}