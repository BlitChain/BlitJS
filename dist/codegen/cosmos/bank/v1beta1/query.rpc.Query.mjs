//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Query {
    /** Balance queries the balance of a single coin for a single account. */
    static Balance(request, initRequest) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/balances/${request["address"]}/by_denom?${fm.renderURLSearchParams({
            ...request
        }, ["address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** AllBalances queries the balance of all coins for a single account. */
    static AllBalances(request, initRequest) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/balances/${request["address"]}?${fm.renderURLSearchParams({
            ...request
        }, ["address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * SpendableBalances queries the spenable balance of all coins for a single
     * account.
     */
    static SpendableBalances(request, initRequest) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/spendable_balances/${request["address"]}?${fm.renderURLSearchParams({
            ...request
        }, ["address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** TotalSupply queries the total supply of all coins. */
    static TotalSupply(request, initRequest) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/supply?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** SupplyOf queries the supply of a single coin. */
    static SupplyOf(request, initRequest) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/supply/by_denom?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Params queries the parameters of x/bank module. */
    static Params(request, initRequest) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** DenomsMetadata queries the client metadata of a given coin denomination. */
    static DenomMetadata(request, initRequest) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/denoms_metadata/${request["denom"]}?${fm.renderURLSearchParams({
            ...request
        }, ["denom"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * DenomsMetadata queries the client metadata for all registered coin
     * denominations.
     */
    static DenomsMetadata(request, initRequest) {
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
     */
    static DenomOwners(request, initRequest) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/denom_owners/${request["denom"]}?${fm.renderURLSearchParams({
            ...request
        }, ["denom"])}`, {
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
    /** Balance queries the balance of a single coin for a single account. */
    async Balance(req, headers) {
        return Query.Balance(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** AllBalances queries the balance of all coins for a single account. */
    async AllBalances(req, headers) {
        return Query.AllBalances(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * SpendableBalances queries the spenable balance of all coins for a single
     * account.
     */
    async SpendableBalances(req, headers) {
        return Query.SpendableBalances(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** TotalSupply queries the total supply of all coins. */
    async TotalSupply(req, headers) {
        return Query.TotalSupply(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** SupplyOf queries the supply of a single coin. */
    async SupplyOf(req, headers) {
        return Query.SupplyOf(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Params queries the parameters of x/bank module. */
    async Params(req, headers) {
        return Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** DenomsMetadata queries the client metadata of a given coin denomination. */
    async DenomMetadata(req, headers) {
        return Query.DenomMetadata(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * DenomsMetadata queries the client metadata for all registered coin
     * denominations.
     */
    async DenomsMetadata(req, headers) {
        return Query.DenomsMetadata(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * DenomOwners queries for all account addresses that own a particular token
     * denomination.
     */
    async DenomOwners(req, headers) {
        return Query.DenomOwners(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map