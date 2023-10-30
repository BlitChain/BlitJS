"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
//@ts-nocheck
const helpers_1 = require("../../../helpers");
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.pools = this.pools.bind(this);
        this.numPools = this.numPools.bind(this);
        this.totalLiquidity = this.totalLiquidity.bind(this);
        this.poolsWithFilter = this.poolsWithFilter.bind(this);
        this.pool = this.pool.bind(this);
        this.poolType = this.poolType.bind(this);
        this.calcJoinPoolShares = this.calcJoinPoolShares.bind(this);
        this.calcExitPoolCoinsFromShares = this.calcExitPoolCoinsFromShares.bind(this);
        this.poolParams = this.poolParams.bind(this);
        this.totalPoolLiquidity = this.totalPoolLiquidity.bind(this);
        this.totalShares = this.totalShares.bind(this);
        this.spotPrice = this.spotPrice.bind(this);
        this.estimateSwapExactAmountIn = this.estimateSwapExactAmountIn.bind(this);
        this.estimateSwapExactAmountOut = this.estimateSwapExactAmountOut.bind(this);
    }
    /* Pools */
    async pools(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `osmosis/gamm/v1beta1/pools`;
        return await this.req.get(endpoint, options);
    }
    /* NumPools */
    async numPools(_params = {}) {
        const endpoint = `osmosis/gamm/v1beta1/num_pools`;
        return await this.req.get(endpoint);
    }
    /* TotalLiquidity */
    async totalLiquidity(_params = {}) {
        const endpoint = `osmosis/gamm/v1beta1/total_liquidity`;
        return await this.req.get(endpoint);
    }
    /* PoolsWithFilter allows you to query specific pools with requested
     parameters */
    async poolsWithFilter(params) {
        const options = {
            params: {}
        };
        if (typeof params?.min_liquidity !== "undefined") {
            options.params.min_liquidity = params.min_liquidity;
        }
        if (typeof params?.pool_type !== "undefined") {
            options.params.pool_type = params.pool_type;
        }
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `osmosis/gamm/v1beta1/filtered_pools`;
        return await this.req.get(endpoint, options);
    }
    /* Per Pool gRPC Endpoints */
    async pool(params) {
        const endpoint = `osmosis/gamm/v1beta1/pools/${params.pool_id}`;
        return await this.req.get(endpoint);
    }
    /* PoolType returns the type of the pool.
     Returns "Balancer" as a string literal when the pool is a balancer pool.
     Errors if the pool is failed to be type caseted. */
    async poolType(params) {
        const endpoint = `osmosis/gamm/v1beta1/pool_type/${params.pool_id}`;
        return await this.req.get(endpoint);
    }
    /* CalcJoinPoolShares */
    async calcJoinPoolShares(params) {
        const options = {
            params: {}
        };
        if (typeof params?.tokens_in !== "undefined") {
            options.params.tokens_in = params.tokens_in;
        }
        const endpoint = `osmosis/gamm/v1beta1/pools/${params.pool_id}/join_swap_exact_in`;
        return await this.req.get(endpoint, options);
    }
    /* CalcExitPoolCoinsFromShares */
    async calcExitPoolCoinsFromShares(params) {
        const options = {
            params: {}
        };
        if (typeof params?.share_in_amount !== "undefined") {
            options.params.share_in_amount = params.share_in_amount;
        }
        const endpoint = `osmosis/gamm/v1beta1/pools/${params.pool_id}/exit_swap_share_amount_in`;
        return await this.req.get(endpoint, options);
    }
    /* PoolParams */
    async poolParams(params) {
        const endpoint = `osmosis/gamm/v1beta1/pools/${params.pool_id}/params`;
        return await this.req.get(endpoint);
    }
    /* TotalPoolLiquidity */
    async totalPoolLiquidity(params) {
        const endpoint = `osmosis/gamm/v1beta1/pools/${params.pool_id}/total_pool_liquidity`;
        return await this.req.get(endpoint);
    }
    /* TotalShares */
    async totalShares(params) {
        const endpoint = `osmosis/gamm/v1beta1/pools/${params.pool_id}/total_shares`;
        return await this.req.get(endpoint);
    }
    /* SpotPrice defines a gRPC query handler that returns the spot price given
     a base denomination and a quote denomination. */
    async spotPrice(params) {
        const options = {
            params: {}
        };
        if (typeof params?.base_asset_denom !== "undefined") {
            options.params.base_asset_denom = params.base_asset_denom;
        }
        if (typeof params?.quote_asset_denom !== "undefined") {
            options.params.quote_asset_denom = params.quote_asset_denom;
        }
        const endpoint = `osmosis/gamm/v1beta1/pools/${params.pool_id}/prices`;
        return await this.req.get(endpoint, options);
    }
    /* Estimate the swap. */
    async estimateSwapExactAmountIn(params) {
        const options = {
            params: {}
        };
        if (typeof params?.sender !== "undefined") {
            options.params.sender = params.sender;
        }
        if (typeof params?.token_in !== "undefined") {
            options.params.token_in = params.token_in;
        }
        if (typeof params?.routes !== "undefined") {
            options.params.routes = params.routes;
        }
        const endpoint = `osmosis/gamm/v1beta1/${params.pool_id}/estimate/swap_exact_amount_in`;
        return await this.req.get(endpoint, options);
    }
    /* EstimateSwapExactAmountOut */
    async estimateSwapExactAmountOut(params) {
        const options = {
            params: {}
        };
        if (typeof params?.sender !== "undefined") {
            options.params.sender = params.sender;
        }
        if (typeof params?.routes !== "undefined") {
            options.params.routes = params.routes;
        }
        if (typeof params?.token_out !== "undefined") {
            options.params.token_out = params.token_out;
        }
        const endpoint = `osmosis/gamm/v1beta1/${params.pool_id}/estimate/swap_exact_amount_out`;
        return await this.req.get(endpoint, options);
    }
}
exports.LCDQueryClient = LCDQueryClient;
//# sourceMappingURL=query.lcd.js.map