import * as fm from "../../../grpc-gateway";
import { QueryCurrentPlanRequest, QueryCurrentPlanResponse, QueryAppliedPlanRequest, QueryAppliedPlanResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryModuleVersionsRequest, QueryModuleVersionsResponse, QueryAuthorityRequest, QueryAuthorityResponse } from "./query";
export declare class Query {
    /** CurrentPlan queries the current upgrade plan. */
    static CurrentPlan(request: QueryCurrentPlanRequest, initRequest?: fm.InitReq): Promise<QueryCurrentPlanResponse>;
    /** AppliedPlan queries a previously applied upgrade plan by its name. */
    static AppliedPlan(request: QueryAppliedPlanRequest, initRequest?: fm.InitReq): Promise<QueryAppliedPlanResponse>;
    /**
     * UpgradedConsensusState queries the consensus state that will serve
     * as a trusted kernel for the next version of this chain. It will only be
     * stored at the last height of this chain.
     * UpgradedConsensusState RPC not supported with legacy querier
     * This rpc is deprecated now that IBC has its own replacement
     * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
     */
    static UpgradedConsensusState(request: QueryUpgradedConsensusStateRequest, initRequest?: fm.InitReq): Promise<QueryUpgradedConsensusStateResponse>;
    /**
     * ModuleVersions queries the list of module versions from state.
     *
     * Since: cosmos-sdk 0.43
     */
    static ModuleVersions(request: QueryModuleVersionsRequest, initRequest?: fm.InitReq): Promise<QueryModuleVersionsResponse>;
    /** Returns the account with authority to conduct upgrades */
    static Authority(request: QueryAuthorityRequest, initRequest?: fm.InitReq): Promise<QueryAuthorityResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** CurrentPlan queries the current upgrade plan. */
    CurrentPlan(req: QueryCurrentPlanRequest, headers?: HeadersInit): Promise<QueryCurrentPlanResponse>;
    /** AppliedPlan queries a previously applied upgrade plan by its name. */
    AppliedPlan(req: QueryAppliedPlanRequest, headers?: HeadersInit): Promise<QueryAppliedPlanResponse>;
    /**
     * UpgradedConsensusState queries the consensus state that will serve
     * as a trusted kernel for the next version of this chain. It will only be
     * stored at the last height of this chain.
     * UpgradedConsensusState RPC not supported with legacy querier
     * This rpc is deprecated now that IBC has its own replacement
     * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
     */
    UpgradedConsensusState(req: QueryUpgradedConsensusStateRequest, headers?: HeadersInit): Promise<QueryUpgradedConsensusStateResponse>;
    /**
     * ModuleVersions queries the list of module versions from state.
     *
     * Since: cosmos-sdk 0.43
     */
    ModuleVersions(req: QueryModuleVersionsRequest, headers?: HeadersInit): Promise<QueryModuleVersionsResponse>;
    /** Returns the account with authority to conduct upgrades */
    Authority(req: QueryAuthorityRequest, headers?: HeadersInit): Promise<QueryAuthorityResponse>;
}
