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
    /** Get a specific Storage by addres and index */
    static StorageDetail(request, initRequest) {
        return fm.fetchReq(`/blit/storage/storage?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Filters by address and index prefix. */
    static FilterStorage(request, initRequest) {
        return fm.fetchReq(`/blit/storage/filter?${fm.renderURLSearchParams({
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
    /** Get a specific Storage by addres and index */
    async StorageDetail(req, headers) {
        return Query.StorageDetail(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Filters by address and index prefix. */
    async FilterStorage(req, headers) {
        return Query.FilterStorage(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map