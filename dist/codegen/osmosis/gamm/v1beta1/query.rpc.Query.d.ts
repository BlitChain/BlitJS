import * as fm from "../../../grpc-gateway";
import { QueryPoolsRequest, QueryPoolsResponse, QueryNumPoolsRequest, QueryNumPoolsResponse, QueryTotalLiquidityRequest, QueryTotalLiquidityResponse, QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolTypeRequest, QueryPoolTypeResponse, QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesResponse, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponse, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponse, QueryPoolParamsRequest, QueryPoolParamsResponse, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse, QueryTotalSharesRequest, QueryTotalSharesResponse, QuerySpotPriceRequest, QuerySpotPriceResponse, QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse } from "./query";
export declare class Query {
    static Pools(request: QueryPoolsRequest, initRequest?: fm.InitReq): Promise<QueryPoolsResponse>;
    static NumPools(request: QueryNumPoolsRequest, initRequest?: fm.InitReq): Promise<QueryNumPoolsResponse>;
    static TotalLiquidity(request: QueryTotalLiquidityRequest, initRequest?: fm.InitReq): Promise<QueryTotalLiquidityResponse>;
    /**
     * PoolsWithFilter allows you to query specific pools with requested
     * parameters
     */
    static PoolsWithFilter(request: QueryPoolsWithFilterRequest, initRequest?: fm.InitReq): Promise<QueryPoolsWithFilterResponse>;
    /** Per Pool gRPC Endpoints */
    static Pool(request: QueryPoolRequest, initRequest?: fm.InitReq): Promise<QueryPoolResponse>;
    /**
     * PoolType returns the type of the pool.
     * Returns "Balancer" as a string literal when the pool is a balancer pool.
     * Errors if the pool is failed to be type caseted.
     */
    static PoolType(request: QueryPoolTypeRequest, initRequest?: fm.InitReq): Promise<QueryPoolTypeResponse>;
    /**
     * Simulates joining pool without a swap. Returns the amount of shares you'd
     * get and tokens needed to provide
     */
    static CalcJoinPoolNoSwapShares(request: QueryCalcJoinPoolNoSwapSharesRequest, initRequest?: fm.InitReq): Promise<QueryCalcJoinPoolNoSwapSharesResponse>;
    static CalcJoinPoolShares(request: QueryCalcJoinPoolSharesRequest, initRequest?: fm.InitReq): Promise<QueryCalcJoinPoolSharesResponse>;
    static CalcExitPoolCoinsFromShares(request: QueryCalcExitPoolCoinsFromSharesRequest, initRequest?: fm.InitReq): Promise<QueryCalcExitPoolCoinsFromSharesResponse>;
    static PoolParams(request: QueryPoolParamsRequest, initRequest?: fm.InitReq): Promise<QueryPoolParamsResponse>;
    static TotalPoolLiquidity(request: QueryTotalPoolLiquidityRequest, initRequest?: fm.InitReq): Promise<QueryTotalPoolLiquidityResponse>;
    static TotalShares(request: QueryTotalSharesRequest, initRequest?: fm.InitReq): Promise<QueryTotalSharesResponse>;
    /**
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
    static SpotPrice(request: QuerySpotPriceRequest, initRequest?: fm.InitReq): Promise<QuerySpotPriceResponse>;
    /** Estimate the swap. */
    static EstimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest, initRequest?: fm.InitReq): Promise<QuerySwapExactAmountInResponse>;
    static EstimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest, initRequest?: fm.InitReq): Promise<QuerySwapExactAmountOutResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    Pools(req: QueryPoolsRequest, headers?: HeadersInit): Promise<QueryPoolsResponse>;
    NumPools(req: QueryNumPoolsRequest, headers?: HeadersInit): Promise<QueryNumPoolsResponse>;
    TotalLiquidity(req: QueryTotalLiquidityRequest, headers?: HeadersInit): Promise<QueryTotalLiquidityResponse>;
    /**
     * PoolsWithFilter allows you to query specific pools with requested
     * parameters
     */
    PoolsWithFilter(req: QueryPoolsWithFilterRequest, headers?: HeadersInit): Promise<QueryPoolsWithFilterResponse>;
    /** Per Pool gRPC Endpoints */
    Pool(req: QueryPoolRequest, headers?: HeadersInit): Promise<QueryPoolResponse>;
    /**
     * PoolType returns the type of the pool.
     * Returns "Balancer" as a string literal when the pool is a balancer pool.
     * Errors if the pool is failed to be type caseted.
     */
    PoolType(req: QueryPoolTypeRequest, headers?: HeadersInit): Promise<QueryPoolTypeResponse>;
    /**
     * Simulates joining pool without a swap. Returns the amount of shares you'd
     * get and tokens needed to provide
     */
    CalcJoinPoolNoSwapShares(req: QueryCalcJoinPoolNoSwapSharesRequest, headers?: HeadersInit): Promise<QueryCalcJoinPoolNoSwapSharesResponse>;
    CalcJoinPoolShares(req: QueryCalcJoinPoolSharesRequest, headers?: HeadersInit): Promise<QueryCalcJoinPoolSharesResponse>;
    CalcExitPoolCoinsFromShares(req: QueryCalcExitPoolCoinsFromSharesRequest, headers?: HeadersInit): Promise<QueryCalcExitPoolCoinsFromSharesResponse>;
    PoolParams(req: QueryPoolParamsRequest, headers?: HeadersInit): Promise<QueryPoolParamsResponse>;
    TotalPoolLiquidity(req: QueryTotalPoolLiquidityRequest, headers?: HeadersInit): Promise<QueryTotalPoolLiquidityResponse>;
    TotalShares(req: QueryTotalSharesRequest, headers?: HeadersInit): Promise<QueryTotalSharesResponse>;
    /**
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
    SpotPrice(req: QuerySpotPriceRequest, headers?: HeadersInit): Promise<QuerySpotPriceResponse>;
    /** Estimate the swap. */
    EstimateSwapExactAmountIn(req: QuerySwapExactAmountInRequest, headers?: HeadersInit): Promise<QuerySwapExactAmountInResponse>;
    EstimateSwapExactAmountOut(req: QuerySwapExactAmountOutRequest, headers?: HeadersInit): Promise<QuerySwapExactAmountOutResponse>;
}
