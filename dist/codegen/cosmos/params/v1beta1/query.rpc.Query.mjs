//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Query {
    /**
     * Params queries a specific parameter of a module, given its subspace and
     * key.
     */
    static Params(request, initRequest) {
        return fm.fetchReq(`/cosmos/params/v1beta1/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * Subspaces queries for all registered subspaces and all keys for a subspace.
     *
     * Since: cosmos-sdk 0.46
     */
    static Subspaces(request, initRequest) {
        return fm.fetchReq(`/cosmos/params/v1beta1/subspaces?${fm.renderURLSearchParams({
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
    /**
     * Params queries a specific parameter of a module, given its subspace and
     * key.
     */
    async Params(req, headers) {
        return Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * Subspaces queries for all registered subspaces and all keys for a subspace.
     *
     * Since: cosmos-sdk 0.46
     */
    async Subspaces(req, headers) {
        return Query.Subspaces(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map