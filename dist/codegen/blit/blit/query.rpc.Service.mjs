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
    /** Queries a list of Task items. */
    static Task(request, initRequest) {
        return fm.fetchReq(`/blit/blit/task?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    static TaskAll(request, initRequest) {
        return fm.fetchReq(`/blit/blit/all-tasks?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Queries a list of FutureTask items. */
    static FutureTask(request, initRequest) {
        return fm.fetchReq(`/blit/blit/future-task?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    static FutureTaskAll(request, initRequest) {
        return fm.fetchReq(`/blit/blit/all-future-tasks?${fm.renderURLSearchParams({
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
    /** Queries a list of Task items. */
    async Task(req, headers) {
        return Query.Task(req, {
            headers,
            pathPrefix: this.url
        });
    }
    async TaskAll(req, headers) {
        return Query.TaskAll(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Queries a list of FutureTask items. */
    async FutureTask(req, headers) {
        return Query.FutureTask(req, {
            headers,
            pathPrefix: this.url
        });
    }
    async FutureTaskAll(req, headers) {
        return Query.FutureTaskAll(req, {
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