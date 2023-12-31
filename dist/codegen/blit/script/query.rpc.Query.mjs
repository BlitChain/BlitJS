//@ts-nocheck
import * as fm from "../../grpc-gateway";
export class Query {
    /** Parameters queries the parameters of the module. */
    static Params(request, initRequest) {
        return fm.fetchReq(`/blit/script/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Queries a specific Script item. */
    static Script(request, initRequest) {
        return fm.fetchReq(`/blit/script/script/${request["address"]}?${fm.renderURLSearchParams({
            ...request
        }, ["address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Queries a list of Script items. */
    static Scripts(request, initRequest) {
        return fm.fetchReq(`/blit/script/scripts?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Runs the function and returns the result. */
    static Eval(request, initRequest) {
        return fm.fetchReq(`/blit/script/eval/${request["script_address"]}?${fm.renderURLSearchParams({
            ...request
        }, ["script_address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Queries the WSGI web application function of a script. */
    static Web(request, initRequest) {
        return fm.fetchReq(`/blit/script/web/${request["address"]}?${fm.renderURLSearchParams({
            ...request
        }, ["address"])}`, {
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
    /** Queries a specific Script item. */
    async Script(req, headers) {
        return Query.Script(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Queries a list of Script items. */
    async Scripts(req, headers) {
        return Query.Scripts(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Runs the function and returns the result. */
    async Eval(req, headers) {
        return Query.Eval(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Queries the WSGI web application function of a script. */
    async Web(req, headers) {
        return Query.Web(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map