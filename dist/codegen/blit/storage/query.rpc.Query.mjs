//@ts-nocheck
import * as fm from "../../grpc-gateway";
export class Query {
    /** Parameters queries the parameters of the module. */
    static Params(request, initRequest) {
        return fm.fetchReq(`/blit/storage/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    static StorageDetail(request, initRequest) {
        return fm.fetchReq(`/blit/storage/storage/${request["address"]}/${request["index"]}?${fm.renderURLSearchParams({
            ...request
        }, ["address", "index"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Queries a list of Storage items. */
    static FilterStorage(request, initRequest) {
        return fm.fetchReq(`/blit/storage/storage?${fm.renderURLSearchParams({
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
    /** Parameters queries the parameters of the module. */
    async Params(req, headers) {
        return Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    async StorageDetail(req, headers) {
        return Query.StorageDetail(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Queries a list of Storage items. */
    async FilterStorage(req, headers) {
        return Query.FilterStorage(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map