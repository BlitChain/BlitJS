//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Query {
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
export class QueryClientImpl {
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
//# sourceMappingURL=query.rpc.Query.js.map