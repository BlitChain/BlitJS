//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Query {
    /** Params returns the total set of minting parameters. */
    static Params(request, initRequest) {
        return fm.fetchReq(`/osmosis/mint/v1beta1/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** EpochProvisions returns the current minting epoch provisions value. */
    static EpochProvisions(request, initRequest) {
        return fm.fetchReq(`/osmosis/mint/v1beta1/epoch_provisions?${fm.renderURLSearchParams({
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
    /** Params returns the total set of minting parameters. */
    async Params(req, headers) {
        return Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** EpochProvisions returns the current minting epoch provisions value. */
    async EpochProvisions(req, headers) {
        return Query.EpochProvisions(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map