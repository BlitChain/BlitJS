//@ts-nocheck
import * as fm from "../../../../../grpc-gateway";
export class Query {
    /** Params queries all parameters of the ICA host submodule. */
    static Params(request, initRequest) {
        return fm.fetchReq(`/ibc/apps/interchain_accounts/host/v1/params?${fm.renderURLSearchParams({
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
    /** Params queries all parameters of the ICA host submodule. */
    async Params(req, headers) {
        return Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map