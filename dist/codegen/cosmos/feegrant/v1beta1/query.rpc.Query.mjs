//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Query {
    /** Allowance returns fee granted to the grantee by the granter. */
    static Allowance(request, initRequest) {
        return fm.fetchReq(`/cosmos/feegrant/v1beta1/allowance/${request["granter"]}/${request["grantee"]}?${fm.renderURLSearchParams({
            ...request
        }, ["granter", "grantee"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Allowances returns all the grants for address. */
    static Allowances(request, initRequest) {
        return fm.fetchReq(`/cosmos/feegrant/v1beta1/allowances/${request["grantee"]}?${fm.renderURLSearchParams({
            ...request
        }, ["grantee"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * AllowancesByGranter returns all the grants given by an address
     * Since v0.46
     */
    static AllowancesByGranter(request, initRequest) {
        return fm.fetchReq(`/cosmos/feegrant/v1beta1/issued/${request["granter"]}?${fm.renderURLSearchParams({
            ...request
        }, ["granter"])}`, {
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
    /** Allowance returns fee granted to the grantee by the granter. */
    async Allowance(req, headers) {
        return Query.Allowance(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Allowances returns all the grants for address. */
    async Allowances(req, headers) {
        return Query.Allowances(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * AllowancesByGranter returns all the grants given by an address
     * Since v0.46
     */
    async AllowancesByGranter(req, headers) {
        return Query.AllowancesByGranter(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map