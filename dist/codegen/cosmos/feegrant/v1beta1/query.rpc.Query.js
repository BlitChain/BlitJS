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
const fm = __importStar(require("../../../grpc-gateway"));
class Query {
    /** Allowance returns fee granted to the grantee by the granter. */
    static Allowance(request, initRequest) {
        return fm.fetchReq(`/cosmos/feegrant/v1beta1/allowance/${request["granter"]}/${request["grantee"]}?${fm.renderURLSearchParams({
            ...request
        }, ["granter", "grantee"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Allowances returns all the grants for address. */
    static Allowances(request, initRequest) {
        return fm.fetchReq(`/cosmos/feegrant/v1beta1/allowances/${request["grantee"]}?${fm.renderURLSearchParams({
            ...request
        }, ["grantee"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * AllowancesByGranter returns all the grants given by an address
     * Since v0.46
     */
    static AllowancesByGranter(request, initRequest) {
        return fm.fetchReq(`/cosmos/feegrant/v1beta1/issued/${request["granter"]}?${fm.renderURLSearchParams({
            ...request
        }, ["granter"])}`, {
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
    /** Allowance returns fee granted to the grantee by the granter. */
    async Allowance(req, headers) {
        return Query.Allowance(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Allowances returns all the grants for address. */
    async Allowances(req, headers) {
        return Query.Allowances(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * AllowancesByGranter returns all the grants given by an address
     * Since v0.46
     */
    async AllowancesByGranter(req, headers) {
        return Query.AllowancesByGranter(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.rpc.Query.js.map