"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.Query = void 0;
//@ts-nocheck
const fm = __importStar(require("../../../grpc-gateway"));
class Query {
    /** Validators queries all validators that match the given status. */
    static Validators(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/validators?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Validator queries validator info for given validator address. */
    static Validator(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${request["validator_addr"]}?${fm.renderURLSearchParams({
            ...request
        }, ["validator_addr"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ValidatorDelegations queries delegate info for given validator. */
    static ValidatorDelegations(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${request["validator_addr"]}/delegations?${fm.renderURLSearchParams({
            ...request
        }, ["validator_addr"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
    static ValidatorUnbondingDelegations(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${request["validator_addr"]}/unbonding_delegations?${fm.renderURLSearchParams({
            ...request
        }, ["validator_addr"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Delegation queries delegate info for given validator delegator pair. */
    static Delegation(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${request["validator_addr"]}/delegations/${request["delegator_addr"]}?${fm.renderURLSearchParams({
            ...request
        }, ["validator_addr", "delegator_addr"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * UnbondingDelegation queries unbonding info for given validator delegator
     * pair.
     */
    static UnbondingDelegation(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${request["validator_addr"]}/delegations/${request["delegator_addr"]}/unbonding_delegation?${fm.renderURLSearchParams({
            ...request
        }, ["validator_addr", "delegator_addr"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** DelegatorDelegations queries all delegations of a given delegator address. */
    static DelegatorDelegations(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/delegations/${request["delegator_addr"]}?${fm.renderURLSearchParams({
            ...request
        }, ["delegator_addr"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * DelegatorUnbondingDelegations queries all unbonding delegations of a given
     * delegator address.
     */
    static DelegatorUnbondingDelegations(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${request["delegator_addr"]}/unbonding_delegations?${fm.renderURLSearchParams({
            ...request
        }, ["delegator_addr"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Redelegations queries redelegations of given address. */
    static Redelegations(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${request["delegator_addr"]}/redelegations?${fm.renderURLSearchParams({
            ...request
        }, ["delegator_addr"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * DelegatorValidators queries all validators info for given delegator
     * address.
     */
    static DelegatorValidators(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${request["delegator_addr"]}/validators?${fm.renderURLSearchParams({
            ...request
        }, ["delegator_addr"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * DelegatorValidator queries validator info for given delegator validator
     * pair.
     */
    static DelegatorValidator(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${request["delegator_addr"]}/validators/${request["validator_addr"]}?${fm.renderURLSearchParams({
            ...request
        }, ["delegator_addr", "validator_addr"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** HistoricalInfo queries the historical info for given height. */
    static HistoricalInfo(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/historical_info/${request["height"]}?${fm.renderURLSearchParams({
            ...request
        }, ["height"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Pool queries the pool info. */
    static Pool(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/pool?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Parameters queries the staking parameters. */
    static Params(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
}
exports.Query = Query;
class QueryClientImpl {
    url;
    constructor(url) {
        this.url = url;
    }
    /** Validators queries all validators that match the given status. */
    async Validators(req, headers) {
        return Query.Validators(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Validator queries validator info for given validator address. */
    async Validator(req, headers) {
        return Query.Validator(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ValidatorDelegations queries delegate info for given validator. */
    async ValidatorDelegations(req, headers) {
        return Query.ValidatorDelegations(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
    async ValidatorUnbondingDelegations(req, headers) {
        return Query.ValidatorUnbondingDelegations(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Delegation queries delegate info for given validator delegator pair. */
    async Delegation(req, headers) {
        return Query.Delegation(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * UnbondingDelegation queries unbonding info for given validator delegator
     * pair.
     */
    async UnbondingDelegation(req, headers) {
        return Query.UnbondingDelegation(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** DelegatorDelegations queries all delegations of a given delegator address. */
    async DelegatorDelegations(req, headers) {
        return Query.DelegatorDelegations(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * DelegatorUnbondingDelegations queries all unbonding delegations of a given
     * delegator address.
     */
    async DelegatorUnbondingDelegations(req, headers) {
        return Query.DelegatorUnbondingDelegations(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Redelegations queries redelegations of given address. */
    async Redelegations(req, headers) {
        return Query.Redelegations(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * DelegatorValidators queries all validators info for given delegator
     * address.
     */
    async DelegatorValidators(req, headers) {
        return Query.DelegatorValidators(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * DelegatorValidator queries validator info for given delegator validator
     * pair.
     */
    async DelegatorValidator(req, headers) {
        return Query.DelegatorValidator(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** HistoricalInfo queries the historical info for given height. */
    async HistoricalInfo(req, headers) {
        return Query.HistoricalInfo(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Pool queries the pool info. */
    async Pool(req, headers) {
        return Query.Pool(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Parameters queries the staking parameters. */
    async Params(req, headers) {
        return Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.rpc.Query.js.map