//@ts-nocheck
import * as fm from "../../../../grpc-gateway";
export class Service {
    /** Config queries for the operator configuration. */
    static Config(request, initRequest) {
        return fm.fetchReq(`/cosmos/base/node/v1beta1/Config`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** Status queries for the node status. */
    static Status(request, initRequest) {
        return fm.fetchReq(`/cosmos/base/node/v1beta1/Status`, {
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
    async Config(req, headers) {
        return Service.Config(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Status queries for the node status. */
    async Status(req, headers) {
        return Service.Status(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Service.js.map