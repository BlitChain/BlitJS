"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceClientImpl = exports.Service = exports.QueryClientImpl = exports.Query = void 0;
//@ts-nocheck
const fm = __importStar(require("../../grpc-gateway"));
class Query {
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
exports.Query = Query;
class QueryClientImpl {
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
exports.QueryClientImpl = QueryClientImpl;
class Service {
    /** Config queries for the operator configuration. */
    static Endpoints(request, initRequest) {
        return fm.fetchReq(`/blit/blit/Endpoints`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
exports.Service = Service;
class ServiceClientImpl {
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
exports.ServiceClientImpl = ServiceClientImpl;
//# sourceMappingURL=query.rpc.Service.js.map