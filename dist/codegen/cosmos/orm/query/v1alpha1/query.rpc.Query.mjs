//@ts-nocheck
import * as fm from "../../../../grpc-gateway";
export class Query {
    /** Get queries an ORM table against an unique index. */
    static Get(request, initRequest) {
        return fm.fetchReq(`cosmos.orm.query.v1alpha1.Get?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** List queries an ORM table against an index. */
    static List(request, initRequest) {
        return fm.fetchReq(`cosmos.orm.query.v1alpha1.List?${fm.renderURLSearchParams({
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
    /** Get queries an ORM table against an unique index. */
    async Get(req, headers) {
        return Query.Get(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** List queries an ORM table against an index. */
    async List(req, headers) {
        return Query.List(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map