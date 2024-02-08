//@ts-nocheck
import * as fm from "../../grpc-gateway";
export class Query {
    /** Parameters queries the parameters of the module. */
    static Params(request, initRequest) {
        return fm.fetchReq(`/blit/blit/params?${fm.renderURLSearchParams({
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
}
export class Service {
    /** Config queries for the operator configuration. */
    static Endpoints(request, initRequest) {
        return fm.fetchReq(`/blit/blit/Endpoints`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
export class ServiceClientImpl {
    url;
    constructor(url) {
        this.url = url;
    }
    /** Config queries for the operator configuration. */
    async Endpoints(req, headers) {
        return Service.Endpoints(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Service.js.map