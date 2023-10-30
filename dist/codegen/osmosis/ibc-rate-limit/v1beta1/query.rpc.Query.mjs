//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Query {
    /**
     * Params defines a gRPC query method that returns the ibc-rate-limit module's
     * parameters.
     */
    static Params(request, initRequest) {
        return fm.fetchReq(`/osmosis/ibc-rate-limit/v1beta1/params?${fm.renderURLSearchParams({
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
     * Params defines a gRPC query method that returns the ibc-rate-limit module's
     * parameters.
     */
    async Params(req, headers) {
        return Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map