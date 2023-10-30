//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Query {
    static Pools(request, initRequest) {
        return fm.fetchReq(`/osmosis/gamm/v1beta1/pools?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    static NumPools(request, initRequest) {
        return fm.fetchReq(`/osmosis/gamm/v1beta1/num_pools?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    static TotalLiquidity(request, initRequest) {
        return fm.fetchReq(`/osmosis/gamm/v1beta1/total_liquidity?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * PoolsWithFilter allows you to query specific pools with requested
     * parameters
     */
    static PoolsWithFilter(request, initRequest) {
        return fm.fetchReq(`/osmosis/gamm/v1beta1/filtered_pools?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Per Pool gRPC Endpoints */
    static Pool(request, initRequest) {
        return fm.fetchReq(`/osmosis/gamm/v1beta1/pools/${request["pool_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["pool_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * PoolType returns the type of the pool.
     * Returns "Balancer" as a string literal when the pool is a balancer pool.
     * Errors if the pool is failed to be type caseted.
     */
    static PoolType(request, initRequest) {
        return fm.fetchReq(`/osmosis/gamm/v1beta1/pool_type/${request["pool_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["pool_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * Simulates joining pool without a swap. Returns the amount of shares you'd
     * get and tokens needed to provide
     */
    static CalcJoinPoolNoSwapShares(request, initRequest) {
        return fm.fetchReq(`osmosis.gamm.v1beta1.CalcJoinPoolNoSwapShares?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    static CalcJoinPoolShares(request, initRequest) {
        return fm.fetchReq(`/osmosis/gamm/v1beta1/pools/${request["pool_id"]}/join_swap_exact_in?${fm.renderURLSearchParams({
            ...request
        }, ["pool_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    static CalcExitPoolCoinsFromShares(request, initRequest) {
        return fm.fetchReq(`/osmosis/gamm/v1beta1/pools/${request["pool_id"]}/exit_swap_share_amount_in?${fm.renderURLSearchParams({
            ...request
        }, ["pool_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    static PoolParams(request, initRequest) {
        return fm.fetchReq(`/osmosis/gamm/v1beta1/pools/${request["pool_id"]}/params?${fm.renderURLSearchParams({
            ...request
        }, ["pool_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    static TotalPoolLiquidity(request, initRequest) {
        return fm.fetchReq(`/osmosis/gamm/v1beta1/pools/${request["pool_id"]}/total_pool_liquidity?${fm.renderURLSearchParams({
            ...request
        }, ["pool_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    static TotalShares(request, initRequest) {
        return fm.fetchReq(`/osmosis/gamm/v1beta1/pools/${request["pool_id"]}/total_shares?${fm.renderURLSearchParams({
            ...request
        }, ["pool_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
    static SpotPrice(request, initRequest) {
        return fm.fetchReq(`/osmosis/gamm/v1beta1/pools/${request["pool_id"]}/prices?${fm.renderURLSearchParams({
            ...request
        }, ["pool_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Estimate the swap. */
    static EstimateSwapExactAmountIn(request, initRequest) {
        return fm.fetchReq(`/osmosis/gamm/v1beta1/${request["pool_id"]}/estimate/swap_exact_amount_in?${fm.renderURLSearchParams({
            ...request
        }, ["pool_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    static EstimateSwapExactAmountOut(request, initRequest) {
        return fm.fetchReq(`/osmosis/gamm/v1beta1/${request["pool_id"]}/estimate/swap_exact_amount_out?${fm.renderURLSearchParams({
            ...request
        }, ["pool_id"])}`, {
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
    async Pools(req, headers) {
        return Query.Pools(req, {
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
    async TotalLiquidity(req, headers) {
        return Query.TotalLiquidity(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * PoolsWithFilter allows you to query specific pools with requested
     * parameters
     */
    async PoolsWithFilter(req, headers) {
        return Query.PoolsWithFilter(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Per Pool gRPC Endpoints */
    async Pool(req, headers) {
        return Query.Pool(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * PoolType returns the type of the pool.
     * Returns "Balancer" as a string literal when the pool is a balancer pool.
     * Errors if the pool is failed to be type caseted.
     */
    async PoolType(req, headers) {
        return Query.PoolType(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * Simulates joining pool without a swap. Returns the amount of shares you'd
     * get and tokens needed to provide
     */
    async CalcJoinPoolNoSwapShares(req, headers) {
        return Query.CalcJoinPoolNoSwapShares(req, {
            headers,
            pathPrefix: this.url
        });
    }
    async CalcJoinPoolShares(req, headers) {
        return Query.CalcJoinPoolShares(req, {
            headers,
            pathPrefix: this.url
        });
    }
    async CalcExitPoolCoinsFromShares(req, headers) {
        return Query.CalcExitPoolCoinsFromShares(req, {
            headers,
            pathPrefix: this.url
        });
    }
    async PoolParams(req, headers) {
        return Query.PoolParams(req, {
            headers,
            pathPrefix: this.url
        });
    }
    async TotalPoolLiquidity(req, headers) {
        return Query.TotalPoolLiquidity(req, {
            headers,
            pathPrefix: this.url
        });
    }
    async TotalShares(req, headers) {
        return Query.TotalShares(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
    async SpotPrice(req, headers) {
        return Query.SpotPrice(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Estimate the swap. */
    async EstimateSwapExactAmountIn(req, headers) {
        return Query.EstimateSwapExactAmountIn(req, {
            headers,
            pathPrefix: this.url
        });
    }
    async EstimateSwapExactAmountOut(req, headers) {
        return Query.EstimateSwapExactAmountOut(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map