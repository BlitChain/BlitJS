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
const fm = __importStar(require("../../../../grpc-gateway"));
class Query {
    /** DenomTraces queries all denomination traces. */
    static DenomTraces(request, initRequest) {
        return fm.fetchReq(`/ibc/apps/transfer/v1/denom_traces?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** DenomTrace queries a denomination trace information. */
    static DenomTrace(request, initRequest) {
        return fm.fetchReq(`/ibc/apps/transfer/v1/denom_traces/${request["hash=**"]}?${fm.renderURLSearchParams({
            ...request
        }, ["hash=**"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Params queries all parameters of the ibc-transfer module. */
    static Params(request, initRequest) {
        return fm.fetchReq(`/ibc/apps/transfer/v1/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** DenomHash queries a denomination hash information. */
    static DenomHash(request, initRequest) {
        return fm.fetchReq(`/ibc/apps/transfer/v1/denom_hashes/${request["trace=**"]}?${fm.renderURLSearchParams({
            ...request
        }, ["trace=**"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** EscrowAddress returns the escrow address for a particular port and channel id. */
    static EscrowAddress(request, initRequest) {
        return fm.fetchReq(`/ibc/apps/transfer/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/escrow_address?${fm.renderURLSearchParams({
            ...request
        }, ["channel_id", "port_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */
    static TotalEscrowForDenom(request, initRequest) {
        return fm.fetchReq(`/ibc/apps/transfer/v1/denoms/${request["denom=**"]}/total_escrow?${fm.renderURLSearchParams({
            ...request
        }, ["denom=**"])}`, {
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
    /** DenomTraces queries all denomination traces. */
    async DenomTraces(req, headers) {
        return Query.DenomTraces(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** DenomTrace queries a denomination trace information. */
    async DenomTrace(req, headers) {
        return Query.DenomTrace(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Params queries all parameters of the ibc-transfer module. */
    async Params(req, headers) {
        return Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** DenomHash queries a denomination hash information. */
    async DenomHash(req, headers) {
        return Query.DenomHash(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** EscrowAddress returns the escrow address for a particular port and channel id. */
    async EscrowAddress(req, headers) {
        return Query.EscrowAddress(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */
    async TotalEscrowForDenom(req, headers) {
        return Query.TotalEscrowForDenom(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.rpc.Query.js.map