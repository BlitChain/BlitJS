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
    static Params(request, initRequest) {
        return fm.fetchReq(`/osmosis/swaprouter/v1beta1/Params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Estimates swap amount out given in. */
    static EstimateSwapExactAmountIn(request, initRequest) {
        return fm.fetchReq(`/osmosis/gamm/v1beta1/${request["pool_id"]}/estimate/swap_exact_amount_in?${fm.renderURLSearchParams({
            ...request
        }, ["pool_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Estimates swap amount in given out. */
    static EstimateSwapExactAmountOut(request, initRequest) {
        return fm.fetchReq(`/osmosis/gamm/v1beta1/${request["pool_id"]}/estimate/swap_exact_amount_out?${fm.renderURLSearchParams({
            ...request
        }, ["pool_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    static NumPools(request, initRequest) {
        return fm.fetchReq(`/osmosis/swaprouter/v1beta1/num_pools?${fm.renderURLSearchParams({
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
    async Params(req, headers) {
        return Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Estimates swap amount out given in. */
    async EstimateSwapExactAmountIn(req, headers) {
        return Query.EstimateSwapExactAmountIn(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Estimates swap amount in given out. */
    async EstimateSwapExactAmountOut(req, headers) {
        return Query.EstimateSwapExactAmountOut(req, {
            headers,
            pathPrefix: this.url
        });
    }
    async NumPools(req, headers) {
        return Query.NumPools(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.rpc.Query.js.map