//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Query {
    /** Returns list of `Authorization`, granted to the grantee by the granter. */
    static Grants(request, initRequest) {
        return fm.fetchReq(`/cosmos/authz/v1beta1/grants?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * GranterGrants returns list of `GrantAuthorization`, granted by granter.
     *
     * Since: cosmos-sdk 0.46
     */
    static GranterGrants(request, initRequest) {
        return fm.fetchReq(`/cosmos/authz/v1beta1/grants/granter/${request["granter"]}?${fm.renderURLSearchParams({
            ...request
        }, ["granter"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * GranteeGrants returns a list of `GrantAuthorization` by grantee.
     *
     * Since: cosmos-sdk 0.46
     */
    static GranteeGrants(request, initRequest) {
        return fm.fetchReq(`/cosmos/authz/v1beta1/grants/grantee/${request["grantee"]}?${fm.renderURLSearchParams({
            ...request
        }, ["grantee"])}`, {
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
    /** Returns list of `Authorization`, granted to the grantee by the granter. */
    async Grants(req, headers) {
        return Query.Grants(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * GranterGrants returns list of `GrantAuthorization`, granted by granter.
     *
     * Since: cosmos-sdk 0.46
     */
    async GranterGrants(req, headers) {
        return Query.GranterGrants(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * GranteeGrants returns a list of `GrantAuthorization` by grantee.
     *
     * Since: cosmos-sdk 0.46
     */
    async GranteeGrants(req, headers) {
        return Query.GranteeGrants(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map