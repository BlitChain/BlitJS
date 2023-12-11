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
exports.QueryClientImpl = exports.Query = void 0;
//@ts-nocheck
const fm = __importStar(require("../../grpc-gateway"));
class Query {
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
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.rpc.Query.js.map