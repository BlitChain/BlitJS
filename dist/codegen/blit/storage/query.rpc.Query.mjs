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
    /** Queries a list of Storage items. */
    static Storage(request, initRequest) {
        return fm.fetchReq(`/blit/storage/storage/${request["address"]}/${request["index"]}?${fm.renderURLSearchParams({
            ...request
        }, ["address", "index"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    static StorageAll(request, initRequest) {
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
    /** Queries a list of Storage items. */
    async Storage(req, headers) {
        return Query.Storage(req, {
            headers,
            pathPrefix: this.url
        });
    }
    async StorageAll(req, headers) {
        return Query.StorageAll(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map