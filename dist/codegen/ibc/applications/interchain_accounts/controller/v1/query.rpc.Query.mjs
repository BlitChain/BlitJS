//@ts-nocheck
import * as fm from "../../../../../grpc-gateway";
export class Query {
    /** InterchainAccount returns the interchain account address for a given owner address on a given connection */
    static InterchainAccount(request, initRequest) {
        return fm.fetchReq(`/ibc/apps/interchain_accounts/controller/v1/owners/${request["owner"]}/connections/${request["connection_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["owner", "connection_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Params queries all parameters of the ICA controller submodule. */
    static Params(request, initRequest) {
        return fm.fetchReq(`/ibc/apps/interchain_accounts/controller/v1/params?${fm.renderURLSearchParams({
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
    /** InterchainAccount returns the interchain account address for a given owner address on a given connection */
    async InterchainAccount(req, headers) {
        return Query.InterchainAccount(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Params queries all parameters of the ICA controller submodule. */
    async Params(req, headers) {
        return Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map