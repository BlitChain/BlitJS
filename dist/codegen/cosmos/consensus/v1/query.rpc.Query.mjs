//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Query {
    /** Params queries the parameters of x/consensus_param module. */
    static Params(request, initRequest) {
        return fm.fetchReq(`/cosmos/consensus/v1/params?${fm.renderURLSearchParams({
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
    /** Params queries the parameters of x/consensus_param module. */
    async Params(req, headers) {
        return Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map