//@ts-nocheck
import * as fm from "../../grpc-gateway";
export class Query {
    /** EpochInfos provide running epochInfos */
    static EpochInfos(request, initRequest) {
        return fm.fetchReq(`/osmosis/epochs/v1beta1/epochs?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** CurrentEpoch provide current epoch of specified identifier */
    static CurrentEpoch(request, initRequest) {
        return fm.fetchReq(`/osmosis/epochs/v1beta1/current_epoch?${fm.renderURLSearchParams({
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
    /** EpochInfos provide running epochInfos */
    async EpochInfos(req, headers) {
        return Query.EpochInfos(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** CurrentEpoch provide current epoch of specified identifier */
    async CurrentEpoch(req, headers) {
        return Query.CurrentEpoch(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map