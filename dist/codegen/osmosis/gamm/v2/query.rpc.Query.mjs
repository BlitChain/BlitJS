//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Query {
    /**
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
    static SpotPrice(request, initRequest) {
        return fm.fetchReq(`/osmosis/gamm/v2/pools/${request["pool_id"]}/prices?${fm.renderURLSearchParams({
            ...request
        }, ["pool_id"])}`, {
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
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
    async SpotPrice(req, headers) {
        return Query.SpotPrice(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map