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
    /**
     * FeeTokens returns a list of all the whitelisted fee tokens and their
     * corresponding pools. It does not include the BaseDenom, which has its own
     * query endpoint
     */
    static FeeTokens(request, initRequest) {
        return fm.fetchReq(`/osmosis/txfees/v1beta1/fee_tokens?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** DenomSpotPrice returns all spot prices by each registered token denom. */
    static DenomSpotPrice(request, initRequest) {
        return fm.fetchReq(`/osmosis/txfees/v1beta1/spot_price_by_denom?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns the poolID for a specified denom input. */
    static DenomPoolId(request, initRequest) {
        return fm.fetchReq(`/osmosis/txfees/v1beta1/denom_pool_id/${request["denom"]}?${fm.renderURLSearchParams({
            ...request
        }, ["denom"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns a list of all base denom tokens and their corresponding pools. */
    static BaseDenom(request, initRequest) {
        return fm.fetchReq(`/osmosis/txfees/v1beta1/base_denom?${fm.renderURLSearchParams({
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
    /**
     * FeeTokens returns a list of all the whitelisted fee tokens and their
     * corresponding pools. It does not include the BaseDenom, which has its own
     * query endpoint
     */
    async FeeTokens(req, headers) {
        return Query.FeeTokens(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** DenomSpotPrice returns all spot prices by each registered token denom. */
    async DenomSpotPrice(req, headers) {
        return Query.DenomSpotPrice(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns the poolID for a specified denom input. */
    async DenomPoolId(req, headers) {
        return Query.DenomPoolId(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns a list of all base denom tokens and their corresponding pools. */
    async BaseDenom(req, headers) {
        return Query.BaseDenom(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.rpc.Query.js.map