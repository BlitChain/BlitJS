//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryPoolsRequest, QueryPoolsResponseSDKType, QueryNumPoolsRequest, QueryNumPoolsResponseSDKType, QueryTotalLiquidityRequest, QueryTotalLiquidityResponseSDKType, QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponseSDKType, QueryPoolRequest, QueryPoolResponseSDKType, QueryPoolTypeRequest, QueryPoolTypeResponseSDKType, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponseSDKType, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponseSDKType, QueryPoolParamsRequest, QueryPoolParamsResponseSDKType, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponseSDKType, QueryTotalSharesRequest, QueryTotalSharesResponseSDKType, QuerySpotPriceRequest, QuerySpotPriceResponseSDKType, QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponseSDKType, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
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
  async pools(params: QueryPoolsRequest = {
    pagination: undefined
  }): Promise<QueryPoolsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `osmosis/gamm/v1beta1/pools`;
    return await this.req.get<QueryPoolsResponseSDKType>(endpoint, options);
  }
  /* NumPools */
  async numPools(_params: QueryNumPoolsRequest = {}): Promise<QueryNumPoolsResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/num_pools`;
    return await this.req.get<QueryNumPoolsResponseSDKType>(endpoint);
  }
  /* TotalLiquidity */
  async totalLiquidity(_params: QueryTotalLiquidityRequest = {}): Promise<QueryTotalLiquidityResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/total_liquidity`;
    return await this.req.get<QueryTotalLiquidityResponseSDKType>(endpoint);
  }
  /* PoolsWithFilter allows you to query specific pools with requested
   parameters */
  async poolsWithFilter(params: QueryPoolsWithFilterRequest): Promise<QueryPoolsWithFilterResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.min_liquidity !== "undefined") {
      options.params.min_liquidity = params.min_liquidity;
    }
    if (typeof params?.pool_type !== "undefined") {
      options.params.pool_type = params.pool_type;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `osmosis/gamm/v1beta1/filtered_pools`;
    return await this.req.get<QueryPoolsWithFilterResponseSDKType>(endpoint, options);
  }
  /* Per Pool gRPC Endpoints */
  async pool(params: QueryPoolRequest): Promise<QueryPoolResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.pool_id}`;
    return await this.req.get<QueryPoolResponseSDKType>(endpoint);
  }
  /* PoolType returns the type of the pool.
   Returns "Balancer" as a string literal when the pool is a balancer pool.
   Errors if the pool is failed to be type caseted. */
  async poolType(params: QueryPoolTypeRequest): Promise<QueryPoolTypeResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/pool_type/${params.pool_id}`;
    return await this.req.get<QueryPoolTypeResponseSDKType>(endpoint);
  }
  /* CalcJoinPoolShares */
  async calcJoinPoolShares(params: QueryCalcJoinPoolSharesRequest): Promise<QueryCalcJoinPoolSharesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokens_in !== "undefined") {
      options.params.tokens_in = params.tokens_in;
    }
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.pool_id}/join_swap_exact_in`;
    return await this.req.get<QueryCalcJoinPoolSharesResponseSDKType>(endpoint, options);
  }
  /* CalcExitPoolCoinsFromShares */
  async calcExitPoolCoinsFromShares(params: QueryCalcExitPoolCoinsFromSharesRequest): Promise<QueryCalcExitPoolCoinsFromSharesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.share_in_amount !== "undefined") {
      options.params.share_in_amount = params.share_in_amount;
    }
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.pool_id}/exit_swap_share_amount_in`;
    return await this.req.get<QueryCalcExitPoolCoinsFromSharesResponseSDKType>(endpoint, options);
  }
  /* PoolParams */
  async poolParams(params: QueryPoolParamsRequest): Promise<QueryPoolParamsResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.pool_id}/params`;
    return await this.req.get<QueryPoolParamsResponseSDKType>(endpoint);
  }
  /* TotalPoolLiquidity */
  async totalPoolLiquidity(params: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.pool_id}/total_pool_liquidity`;
    return await this.req.get<QueryTotalPoolLiquidityResponseSDKType>(endpoint);
  }
  /* TotalShares */
  async totalShares(params: QueryTotalSharesRequest): Promise<QueryTotalSharesResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.pool_id}/total_shares`;
    return await this.req.get<QueryTotalSharesResponseSDKType>(endpoint);
  }
  /* SpotPrice defines a gRPC query handler that returns the spot price given
   a base denomination and a quote denomination. */
  async spotPrice(params: QuerySpotPriceRequest): Promise<QuerySpotPriceResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.base_asset_denom !== "undefined") {
      options.params.base_asset_denom = params.base_asset_denom;
    }
    if (typeof params?.quote_asset_denom !== "undefined") {
      options.params.quote_asset_denom = params.quote_asset_denom;
    }
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.pool_id}/prices`;
    return await this.req.get<QuerySpotPriceResponseSDKType>(endpoint, options);
  }
  /* Estimate the swap. */
  async estimateSwapExactAmountIn(params: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponseSDKType> {
    const options: any = {
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
    return await this.req.get<QuerySwapExactAmountInResponseSDKType>(endpoint, options);
  }
  /* EstimateSwapExactAmountOut */
  async estimateSwapExactAmountOut(params: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponseSDKType> {
    const options: any = {
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
    return await this.req.get<QuerySwapExactAmountOutResponseSDKType>(endpoint, options);
  }
}