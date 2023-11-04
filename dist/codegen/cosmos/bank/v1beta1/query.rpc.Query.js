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
    /** Balance queries the balance of a single coin for a single account. */
    static Balance(request, initRequest) {
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
    static AllBalances(request, initRequest) {
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
    static SpendableBalances(request, initRequest) {
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
    static SpendableBalanceByDenom(request, initRequest) {
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
    static TotalSupply(request, initRequest) {
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
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     *
     * Since: cosmos-sdk 0.46
     */
    static DenomOwners(request, initRequest) {
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
    static SendEnabled(request, initRequest) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/send_enabled?${fm.renderURLSearchParams({
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
    /** Balance queries the balance of a single coin for a single account. */
    async Balance(req, headers) {
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
    async AllBalances(req, headers) {
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
    async SpendableBalances(req, headers) {
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
    async SpendableBalanceByDenom(req, headers) {
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
    async TotalSupply(req, headers) {
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
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     *
     * Since: cosmos-sdk 0.46
     */
    async DenomOwners(req, headers) {
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
    async SendEnabled(req, headers) {
        return Query.SendEnabled(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.rpc.Query.js.map