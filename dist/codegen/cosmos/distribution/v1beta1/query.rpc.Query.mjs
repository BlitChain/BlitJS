//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Query {
    /** Params queries params of the distribution module. */
    static Params(request, initRequest) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator */
    static ValidatorDistributionInfo(request, initRequest) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/validators/${request["validator_address"]}?${fm.renderURLSearchParams({
            ...request
        }, ["validator_address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ValidatorOutstandingRewards queries rewards of a validator address. */
    static ValidatorOutstandingRewards(request, initRequest) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/validators/${request["validator_address"]}/outstanding_rewards?${fm.renderURLSearchParams({
            ...request
        }, ["validator_address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ValidatorCommission queries accumulated commission for a validator. */
    static ValidatorCommission(request, initRequest) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/validators/${request["validator_address"]}/commission?${fm.renderURLSearchParams({
            ...request
        }, ["validator_address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ValidatorSlashes queries slash events of a validator. */
    static ValidatorSlashes(request, initRequest) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/validators/${request["validator_address"]}/slashes?${fm.renderURLSearchParams({
            ...request
        }, ["validator_address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** DelegationRewards queries the total rewards accrued by a delegation. */
    static DelegationRewards(request, initRequest) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${request["delegator_address"]}/rewards/${request["validator_address"]}?${fm.renderURLSearchParams({
            ...request
        }, ["delegator_address", "validator_address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * DelegationTotalRewards queries the total rewards accrued by each
     * validator.
     */
    static DelegationTotalRewards(request, initRequest) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${request["delegator_address"]}/rewards?${fm.renderURLSearchParams({
            ...request
        }, ["delegator_address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** DelegatorValidators queries the validators of a delegator. */
    static DelegatorValidators(request, initRequest) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${request["delegator_address"]}/validators?${fm.renderURLSearchParams({
            ...request
        }, ["delegator_address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
    static DelegatorWithdrawAddress(request, initRequest) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${request["delegator_address"]}/withdraw_address?${fm.renderURLSearchParams({
            ...request
        }, ["delegator_address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** CommunityPool queries the community pool coins. */
    static CommunityPool(request, initRequest) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/community_pool?${fm.renderURLSearchParams({
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
    /** Params queries params of the distribution module. */
    async Params(req, headers) {
        return Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator */
    async ValidatorDistributionInfo(req, headers) {
        return Query.ValidatorDistributionInfo(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ValidatorOutstandingRewards queries rewards of a validator address. */
    async ValidatorOutstandingRewards(req, headers) {
        return Query.ValidatorOutstandingRewards(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ValidatorCommission queries accumulated commission for a validator. */
    async ValidatorCommission(req, headers) {
        return Query.ValidatorCommission(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ValidatorSlashes queries slash events of a validator. */
    async ValidatorSlashes(req, headers) {
        return Query.ValidatorSlashes(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** DelegationRewards queries the total rewards accrued by a delegation. */
    async DelegationRewards(req, headers) {
        return Query.DelegationRewards(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * DelegationTotalRewards queries the total rewards accrued by each
     * validator.
     */
    async DelegationTotalRewards(req, headers) {
        return Query.DelegationTotalRewards(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** DelegatorValidators queries the validators of a delegator. */
    async DelegatorValidators(req, headers) {
        return Query.DelegatorValidators(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
    async DelegatorWithdrawAddress(req, headers) {
        return Query.DelegatorWithdrawAddress(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** CommunityPool queries the community pool coins. */
    async CommunityPool(req, headers) {
        return Query.CommunityPool(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map