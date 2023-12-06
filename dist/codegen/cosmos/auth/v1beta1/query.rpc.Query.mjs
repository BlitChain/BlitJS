//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Query {
    /**
     * Accounts returns all the existing accounts.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     *
     * Since: cosmos-sdk 0.43
     */
    static Accounts(request, initRequest) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/accounts?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Account returns account details based on address. */
    static Account(request, initRequest) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/accounts/${request["address"]}?${fm.renderURLSearchParams({
            ...request
        }, ["address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * AccountAddressByID returns account address based on account number.
     *
     * Since: cosmos-sdk 0.46.2
     */
    static AccountAddressByID(request, initRequest) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/address_by_id/${request["id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Params queries all parameters. */
    static Params(request, initRequest) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * ModuleAccounts returns all the existing module accounts.
     *
     * Since: cosmos-sdk 0.46
     */
    static ModuleAccounts(request, initRequest) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/module_accounts?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ModuleAccountByName returns the module account info by module name */
    static ModuleAccountByName(request, initRequest) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/module_accounts/${request["name"]}?${fm.renderURLSearchParams({
            ...request
        }, ["name"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * Bech32Prefix queries bech32Prefix
     *
     * Since: cosmos-sdk 0.46
     */
    static Bech32Prefix(request, initRequest) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/bech32?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * AddressBytesToString converts Account Address bytes to string
     *
     * Since: cosmos-sdk 0.46
     */
    static AddressBytesToString(request, initRequest) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/bech32/${request["address_bytes"]}?${fm.renderURLSearchParams({
            ...request
        }, ["address_bytes"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * AddressStringToBytes converts Address string to bytes
     *
     * Since: cosmos-sdk 0.46
     */
    static AddressStringToBytes(request, initRequest) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/bech32/${request["address_string"]}?${fm.renderURLSearchParams({
            ...request
        }, ["address_string"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * AccountInfo queries account info which is common to all account types.
     *
     * Since: cosmos-sdk 0.47
     */
    static AccountInfo(request, initRequest) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/account_info/${request["address"]}?${fm.renderURLSearchParams({
            ...request
        }, ["address"])}`, {
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
    /**
     * Accounts returns all the existing accounts.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     *
     * Since: cosmos-sdk 0.43
     */
    async Accounts(req, headers) {
        return Query.Accounts(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Account returns account details based on address. */
    async Account(req, headers) {
        return Query.Account(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * AccountAddressByID returns account address based on account number.
     *
     * Since: cosmos-sdk 0.46.2
     */
    async AccountAddressByID(req, headers) {
        return Query.AccountAddressByID(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Params queries all parameters. */
    async Params(req, headers) {
        return Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * ModuleAccounts returns all the existing module accounts.
     *
     * Since: cosmos-sdk 0.46
     */
    async ModuleAccounts(req, headers) {
        return Query.ModuleAccounts(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ModuleAccountByName returns the module account info by module name */
    async ModuleAccountByName(req, headers) {
        return Query.ModuleAccountByName(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * Bech32Prefix queries bech32Prefix
     *
     * Since: cosmos-sdk 0.46
     */
    async Bech32Prefix(req, headers) {
        return Query.Bech32Prefix(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * AddressBytesToString converts Account Address bytes to string
     *
     * Since: cosmos-sdk 0.46
     */
    async AddressBytesToString(req, headers) {
        return Query.AddressBytesToString(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * AddressStringToBytes converts Address string to bytes
     *
     * Since: cosmos-sdk 0.46
     */
    async AddressStringToBytes(req, headers) {
        return Query.AddressStringToBytes(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * AccountInfo queries account info which is common to all account types.
     *
     * Since: cosmos-sdk 0.47
     */
    async AccountInfo(req, headers) {
        return Query.AccountInfo(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map