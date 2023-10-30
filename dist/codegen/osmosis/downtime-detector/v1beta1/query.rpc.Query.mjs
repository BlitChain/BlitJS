//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Query {
    static RecoveredSinceDowntimeOfLength(request, initRequest) {
        return fm.fetchReq(`/osmosis/downtime-detector/v1beta1/RecoveredSinceDowntimeOfLength?${fm.renderURLSearchParams({
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
    async RecoveredSinceDowntimeOfLength(req, headers) {
        return Query.RecoveredSinceDowntimeOfLength(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map