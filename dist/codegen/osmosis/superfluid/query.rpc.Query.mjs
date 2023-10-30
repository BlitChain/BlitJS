//@ts-nocheck
import * as fm from "../../grpc-gateway";
export class Query {
    /** Params returns the total set of superfluid parameters. */
    static Params(request, initRequest) {
        return fm.fetchReq(`/osmosis/superfluid/v1beta1/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * Returns superfluid asset type, whether if it's a native asset or an lp
     * share.
     */
    static AssetType(request, initRequest) {
        return fm.fetchReq(`/osmosis/superfluid/v1beta1/asset_type?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns all registered superfluid assets. */
    static AllAssets(request, initRequest) {
        return fm.fetchReq(`/osmosis/superfluid/v1beta1/all_assets?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns the osmo equivalent multiplier used in the most recent epoch. */
    static AssetMultiplier(request, initRequest) {
        return fm.fetchReq(`/osmosis/superfluid/v1beta1/asset_multiplier?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns all superfluid intermediary accounts. */
    static AllIntermediaryAccounts(request, initRequest) {
        return fm.fetchReq(`/osmosis/superfluid/v1beta1/all_intermediary_accounts?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns intermediary account connected to a superfluid staked lock by id */
    static ConnectedIntermediaryAccount(request, initRequest) {
        return fm.fetchReq(`/osmosis/superfluid/v1beta1/connected_intermediary_account/${request["lock_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["lock_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns the amount of delegations of specific denom for all validators */
    static TotalDelegationByValidatorForDenom(request, initRequest) {
        return fm.fetchReq(`osmosis.superfluid.TotalDelegationByValidatorForDenom?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * Returns the total amount of osmo superfluidly staked.
     * Response is denominated in uosmo.
     */
    static TotalSuperfluidDelegations(request, initRequest) {
        return fm.fetchReq(`/osmosis/superfluid/v1beta1/all_superfluid_delegations?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * Returns the coins superfluid delegated for the delegator, validator, denom
     * triplet
     */
    static SuperfluidDelegationAmount(request, initRequest) {
        return fm.fetchReq(`/osmosis/superfluid/v1beta1/superfluid_delegation_amount?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns all the delegated superfluid poistions for a specific delegator. */
    static SuperfluidDelegationsByDelegator(request, initRequest) {
        return fm.fetchReq(`/osmosis/superfluid/v1beta1/superfluid_delegations/${request["delegator_address"]}?${fm.renderURLSearchParams({
            ...request
        }, ["delegator_address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns all the undelegating superfluid poistions for a specific delegator. */
    static SuperfluidUndelegationsByDelegator(request, initRequest) {
        return fm.fetchReq(`/osmosis/superfluid/v1beta1/superfluid_undelegations_by_delegator/${request["delegator_address"]}?${fm.renderURLSearchParams({
            ...request
        }, ["delegator_address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * Returns all the superfluid positions of a specific denom delegated to one
     * validator
     */
    static SuperfluidDelegationsByValidatorDenom(request, initRequest) {
        return fm.fetchReq(`/osmosis/superfluid/v1beta1/superfluid_delegations_by_validator_denom?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * Returns the amount of a specific denom delegated to a specific validator
     * This is labeled an estimate, because the way it calculates the amount can
     * lead rounding errors from the true delegated amount
     */
    static EstimateSuperfluidDelegatedAmountByValidatorDenom(request, initRequest) {
        return fm.fetchReq(`/osmosis/superfluid/v1beta1/estimate_superfluid_delegation_amount_by_validator_denom?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns the specified delegations for a specific delegator */
    static TotalDelegationByDelegator(request, initRequest) {
        return fm.fetchReq(`/osmosis/superfluid/v1beta1/total_delegation_by_delegator/${request["delegator_address"]}?${fm.renderURLSearchParams({
            ...request
        }, ["delegator_address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns a list of whitelisted pool ids to unpool. */
    static UnpoolWhitelist(request, initRequest) {
        return fm.fetchReq(`/osmosis/superfluid/v1beta1/unpool_whitelist?${fm.renderURLSearchParams({
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
    /** Params returns the total set of superfluid parameters. */
    async Params(req, headers) {
        return Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * Returns superfluid asset type, whether if it's a native asset or an lp
     * share.
     */
    async AssetType(req, headers) {
        return Query.AssetType(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns all registered superfluid assets. */
    async AllAssets(req, headers) {
        return Query.AllAssets(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns the osmo equivalent multiplier used in the most recent epoch. */
    async AssetMultiplier(req, headers) {
        return Query.AssetMultiplier(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns all superfluid intermediary accounts. */
    async AllIntermediaryAccounts(req, headers) {
        return Query.AllIntermediaryAccounts(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns intermediary account connected to a superfluid staked lock by id */
    async ConnectedIntermediaryAccount(req, headers) {
        return Query.ConnectedIntermediaryAccount(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns the amount of delegations of specific denom for all validators */
    async TotalDelegationByValidatorForDenom(req, headers) {
        return Query.TotalDelegationByValidatorForDenom(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * Returns the total amount of osmo superfluidly staked.
     * Response is denominated in uosmo.
     */
    async TotalSuperfluidDelegations(req, headers) {
        return Query.TotalSuperfluidDelegations(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * Returns the coins superfluid delegated for the delegator, validator, denom
     * triplet
     */
    async SuperfluidDelegationAmount(req, headers) {
        return Query.SuperfluidDelegationAmount(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns all the delegated superfluid poistions for a specific delegator. */
    async SuperfluidDelegationsByDelegator(req, headers) {
        return Query.SuperfluidDelegationsByDelegator(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns all the undelegating superfluid poistions for a specific delegator. */
    async SuperfluidUndelegationsByDelegator(req, headers) {
        return Query.SuperfluidUndelegationsByDelegator(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * Returns all the superfluid positions of a specific denom delegated to one
     * validator
     */
    async SuperfluidDelegationsByValidatorDenom(req, headers) {
        return Query.SuperfluidDelegationsByValidatorDenom(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * Returns the amount of a specific denom delegated to a specific validator
     * This is labeled an estimate, because the way it calculates the amount can
     * lead rounding errors from the true delegated amount
     */
    async EstimateSuperfluidDelegatedAmountByValidatorDenom(req, headers) {
        return Query.EstimateSuperfluidDelegatedAmountByValidatorDenom(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns the specified delegations for a specific delegator */
    async TotalDelegationByDelegator(req, headers) {
        return Query.TotalDelegationByDelegator(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns a list of whitelisted pool ids to unpool. */
    async UnpoolWhitelist(req, headers) {
        return Query.UnpoolWhitelist(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map