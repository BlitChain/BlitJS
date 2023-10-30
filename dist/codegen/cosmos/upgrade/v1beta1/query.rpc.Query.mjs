//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Query {
    /** CurrentPlan queries the current upgrade plan. */
    static CurrentPlan(request, initRequest) {
        return fm.fetchReq(`/cosmos/upgrade/v1beta1/current_plan?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** AppliedPlan queries a previously applied upgrade plan by its name. */
    static AppliedPlan(request, initRequest) {
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
    static UpgradedConsensusState(request, initRequest) {
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
    static ModuleVersions(request, initRequest) {
        return fm.fetchReq(`/cosmos/upgrade/v1beta1/module_versions?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns the account with authority to conduct upgrades */
    static Authority(request, initRequest) {
        return fm.fetchReq(`/cosmos/upgrade/v1beta1/authority?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
}
export class QueryClientImpl {
    url;
    constructor(url) {
        this.url = url;
    }
    /** CurrentPlan queries the current upgrade plan. */
    async CurrentPlan(req, headers) {
        return Query.CurrentPlan(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** AppliedPlan queries a previously applied upgrade plan by its name. */
    async AppliedPlan(req, headers) {
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
    async UpgradedConsensusState(req, headers) {
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
    async ModuleVersions(req, headers) {
        return Query.ModuleVersions(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns the account with authority to conduct upgrades */
    async Authority(req, headers) {
        return Query.Authority(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map