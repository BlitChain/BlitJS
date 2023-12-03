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
const fm = __importStar(require("../../../../../grpc-gateway"));
class Query {
    /** InterchainAccount returns the interchain account address for a given owner address on a given connection */
    static InterchainAccount(request, initRequest) {
        return fm.fetchReq(`/ibc/apps/interchain_accounts/controller/v1/owners/${request["owner"]}/connections/${request["connection_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["owner", "connection_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Params queries all parameters of the ICA controller submodule. */
    static Params(request, initRequest) {
        return fm.fetchReq(`/ibc/apps/interchain_accounts/controller/v1/params?${fm.renderURLSearchParams({
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
    /** InterchainAccount returns the interchain account address for a given owner address on a given connection */
    async InterchainAccount(req, headers) {
        return Query.InterchainAccount(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Params queries all parameters of the ICA controller submodule. */
    async Params(req, headers) {
        return Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.rpc.Query.js.map