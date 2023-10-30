//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteSDKType } from "./tx";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Pool as Pool1 } from "../pool-models/balancer/balancerPool";
import { PoolProtoMsg as Pool1ProtoMsg } from "../pool-models/balancer/balancerPool";
import { PoolSDKType as Pool1SDKType } from "../pool-models/balancer/balancerPool";
import { Pool as Pool2 } from "../pool-models/stableswap/stableswap_pool";
import { PoolProtoMsg as Pool2ProtoMsg } from "../pool-models/stableswap/stableswap_pool";
import { PoolSDKType as Pool2SDKType } from "../pool-models/stableswap/stableswap_pool";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** =============================== Pool */
export interface QueryPoolRequest {
  pool_id: bigint;
}
export interface QueryPoolRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryPoolRequest";
  value: Uint8Array;
}
export interface QueryPoolRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryPoolRequest";
  value: Uint8Array;
}
/** =============================== Pool */
export interface QueryPoolRequestAmino {
  pool_id: string;
}
export interface QueryPoolRequestAminoMsg {
  type: "osmosis/gamm/query-pool-request";
  value: QueryPoolRequestAmino;
}
/** =============================== Pool */
export interface QueryPoolRequestSDKType {
  pool_id: bigint;
}
export interface QueryPoolResponse {
  pool?: (Pool1 & Pool2 & Any) | undefined;
}
export interface QueryPoolResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryPoolResponse";
  value: Uint8Array;
}
export interface QueryPoolResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryPoolResponse";
  value: Uint8Array;
}
export type QueryPoolResponseEncoded = Omit<QueryPoolResponse, "pool"> & {
  pool?: Pool1ProtoMsg | Pool2ProtoMsg | AnyProtoMsg | undefined;
};
export interface QueryPoolResponseAmino {
  pool?: AnyAmino;
}
export interface QueryPoolResponseAminoMsg {
  type: "osmosis/gamm/query-pool-response";
  value: QueryPoolResponseAmino;
}
export interface QueryPoolResponseSDKType {
  pool?: Pool1SDKType | Pool2SDKType | AnySDKType | undefined;
}
/** =============================== Pools */
export interface QueryPoolsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryPoolsRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryPoolsRequest";
  value: Uint8Array;
}
export interface QueryPoolsRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryPoolsRequest";
  value: Uint8Array;
}
/** =============================== Pools */
export interface QueryPoolsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryPoolsRequestAminoMsg {
  type: "osmosis/gamm/query-pools-request";
  value: QueryPoolsRequestAmino;
}
/** =============================== Pools */
export interface QueryPoolsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryPoolsResponse {
  pools: (Pool1 & Pool2 & Any)[] | Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryPoolsResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryPoolsResponse";
  value: Uint8Array;
}
export interface QueryPoolsResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryPoolsResponse";
  value: Uint8Array;
}
export type QueryPoolsResponseEncoded = Omit<QueryPoolsResponse, "pools"> & {
  pools: (Pool1ProtoMsg | Pool2ProtoMsg | AnyProtoMsg)[];
};
export interface QueryPoolsResponseAmino {
  pools: AnyAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryPoolsResponseAminoMsg {
  type: "osmosis/gamm/query-pools-response";
  value: QueryPoolsResponseAmino;
}
export interface QueryPoolsResponseSDKType {
  pools: (Pool1SDKType | Pool2SDKType | AnySDKType)[];
  pagination?: PageResponseSDKType;
}
/** =============================== NumPools */
export interface QueryNumPoolsRequest {}
export interface QueryNumPoolsRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryNumPoolsRequest";
  value: Uint8Array;
}
export interface QueryNumPoolsRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryNumPoolsRequest";
  value: Uint8Array;
}
/** =============================== NumPools */
export interface QueryNumPoolsRequestAmino {}
export interface QueryNumPoolsRequestAminoMsg {
  type: "osmosis/gamm/query-num-pools-request";
  value: QueryNumPoolsRequestAmino;
}
/** =============================== NumPools */
export interface QueryNumPoolsRequestSDKType {}
export interface QueryNumPoolsResponse {
  num_pools: bigint;
}
export interface QueryNumPoolsResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryNumPoolsResponse";
  value: Uint8Array;
}
export interface QueryNumPoolsResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryNumPoolsResponse";
  value: Uint8Array;
}
export interface QueryNumPoolsResponseAmino {
  num_pools: string;
}
export interface QueryNumPoolsResponseAminoMsg {
  type: "osmosis/gamm/query-num-pools-response";
  value: QueryNumPoolsResponseAmino;
}
export interface QueryNumPoolsResponseSDKType {
  num_pools: bigint;
}
/** =============================== PoolType */
export interface QueryPoolTypeRequest {
  pool_id: bigint;
}
export interface QueryPoolTypeRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryPoolTypeRequest";
  value: Uint8Array;
}
export interface QueryPoolTypeRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryPoolTypeRequest";
  value: Uint8Array;
}
/** =============================== PoolType */
export interface QueryPoolTypeRequestAmino {
  pool_id: string;
}
export interface QueryPoolTypeRequestAminoMsg {
  type: "osmosis/gamm/query-pool-type-request";
  value: QueryPoolTypeRequestAmino;
}
/** =============================== PoolType */
export interface QueryPoolTypeRequestSDKType {
  pool_id: bigint;
}
export interface QueryPoolTypeResponse {
  pool_type: string;
}
export interface QueryPoolTypeResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryPoolTypeResponse";
  value: Uint8Array;
}
export interface QueryPoolTypeResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryPoolTypeResponse";
  value: Uint8Array;
}
export interface QueryPoolTypeResponseAmino {
  pool_type: string;
}
export interface QueryPoolTypeResponseAminoMsg {
  type: "osmosis/gamm/query-pool-type-response";
  value: QueryPoolTypeResponseAmino;
}
export interface QueryPoolTypeResponseSDKType {
  pool_type: string;
}
/** =============================== CalcJoinPoolShares */
export interface QueryCalcJoinPoolSharesRequest {
  pool_id: bigint;
  tokens_in: Coin[];
}
export interface QueryCalcJoinPoolSharesRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest";
  value: Uint8Array;
}
export interface QueryCalcJoinPoolSharesRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest";
  value: Uint8Array;
}
/** =============================== CalcJoinPoolShares */
export interface QueryCalcJoinPoolSharesRequestAmino {
  pool_id: string;
  tokens_in: CoinAmino[];
}
export interface QueryCalcJoinPoolSharesRequestAminoMsg {
  type: "osmosis/gamm/query-calc-join-pool-shares-request";
  value: QueryCalcJoinPoolSharesRequestAmino;
}
/** =============================== CalcJoinPoolShares */
export interface QueryCalcJoinPoolSharesRequestSDKType {
  pool_id: bigint;
  tokens_in: CoinSDKType[];
}
export interface QueryCalcJoinPoolSharesResponse {
  share_out_amount: string;
  tokens_out: Coin[];
}
export interface QueryCalcJoinPoolSharesResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse";
  value: Uint8Array;
}
export interface QueryCalcJoinPoolSharesResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse";
  value: Uint8Array;
}
export interface QueryCalcJoinPoolSharesResponseAmino {
  share_out_amount: string;
  tokens_out: CoinAmino[];
}
export interface QueryCalcJoinPoolSharesResponseAminoMsg {
  type: "osmosis/gamm/query-calc-join-pool-shares-response";
  value: QueryCalcJoinPoolSharesResponseAmino;
}
export interface QueryCalcJoinPoolSharesResponseSDKType {
  share_out_amount: string;
  tokens_out: CoinSDKType[];
}
/** =============================== CalcExitPoolCoinsFromShares */
export interface QueryCalcExitPoolCoinsFromSharesRequest {
  pool_id: bigint;
  share_in_amount: string;
}
export interface QueryCalcExitPoolCoinsFromSharesRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest";
  value: Uint8Array;
}
export interface QueryCalcExitPoolCoinsFromSharesRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest";
  value: Uint8Array;
}
/** =============================== CalcExitPoolCoinsFromShares */
export interface QueryCalcExitPoolCoinsFromSharesRequestAmino {
  pool_id: string;
  share_in_amount: string;
}
export interface QueryCalcExitPoolCoinsFromSharesRequestAminoMsg {
  type: "osmosis/gamm/query-calc-exit-pool-coins-from-shares-request";
  value: QueryCalcExitPoolCoinsFromSharesRequestAmino;
}
/** =============================== CalcExitPoolCoinsFromShares */
export interface QueryCalcExitPoolCoinsFromSharesRequestSDKType {
  pool_id: bigint;
  share_in_amount: string;
}
export interface QueryCalcExitPoolCoinsFromSharesResponse {
  tokens_out: Coin[];
}
export interface QueryCalcExitPoolCoinsFromSharesResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse";
  value: Uint8Array;
}
export interface QueryCalcExitPoolCoinsFromSharesResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse";
  value: Uint8Array;
}
export interface QueryCalcExitPoolCoinsFromSharesResponseAmino {
  tokens_out: CoinAmino[];
}
export interface QueryCalcExitPoolCoinsFromSharesResponseAminoMsg {
  type: "osmosis/gamm/query-calc-exit-pool-coins-from-shares-response";
  value: QueryCalcExitPoolCoinsFromSharesResponseAmino;
}
export interface QueryCalcExitPoolCoinsFromSharesResponseSDKType {
  tokens_out: CoinSDKType[];
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequest {
  pool_id: bigint;
}
export interface QueryPoolParamsRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryPoolParamsRequest";
  value: Uint8Array;
}
export interface QueryPoolParamsRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryPoolParamsRequest";
  value: Uint8Array;
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequestAmino {
  pool_id: string;
}
export interface QueryPoolParamsRequestAminoMsg {
  type: "osmosis/gamm/query-pool-params-request";
  value: QueryPoolParamsRequestAmino;
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequestSDKType {
  pool_id: bigint;
}
export interface QueryPoolParamsResponse {
  params?: Any;
}
export interface QueryPoolParamsResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryPoolParamsResponse";
  value: Uint8Array;
}
export interface QueryPoolParamsResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryPoolParamsResponse";
  value: Uint8Array;
}
export interface QueryPoolParamsResponseAmino {
  params?: AnyAmino;
}
export interface QueryPoolParamsResponseAminoMsg {
  type: "osmosis/gamm/query-pool-params-response";
  value: QueryPoolParamsResponseAmino;
}
export interface QueryPoolParamsResponseSDKType {
  params?: AnySDKType;
}
/** =============================== PoolLiquidity */
export interface QueryTotalPoolLiquidityRequest {
  pool_id: bigint;
}
export interface QueryTotalPoolLiquidityRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest";
  value: Uint8Array;
}
export interface QueryTotalPoolLiquidityRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest";
  value: Uint8Array;
}
/** =============================== PoolLiquidity */
export interface QueryTotalPoolLiquidityRequestAmino {
  pool_id: string;
}
export interface QueryTotalPoolLiquidityRequestAminoMsg {
  type: "osmosis/gamm/query-total-pool-liquidity-request";
  value: QueryTotalPoolLiquidityRequestAmino;
}
/** =============================== PoolLiquidity */
export interface QueryTotalPoolLiquidityRequestSDKType {
  pool_id: bigint;
}
export interface QueryTotalPoolLiquidityResponse {
  liquidity: Coin[];
}
export interface QueryTotalPoolLiquidityResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse";
  value: Uint8Array;
}
export interface QueryTotalPoolLiquidityResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse";
  value: Uint8Array;
}
export interface QueryTotalPoolLiquidityResponseAmino {
  liquidity: CoinAmino[];
}
export interface QueryTotalPoolLiquidityResponseAminoMsg {
  type: "osmosis/gamm/query-total-pool-liquidity-response";
  value: QueryTotalPoolLiquidityResponseAmino;
}
export interface QueryTotalPoolLiquidityResponseSDKType {
  liquidity: CoinSDKType[];
}
/** =============================== TotalShares */
export interface QueryTotalSharesRequest {
  pool_id: bigint;
}
export interface QueryTotalSharesRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryTotalSharesRequest";
  value: Uint8Array;
}
export interface QueryTotalSharesRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryTotalSharesRequest";
  value: Uint8Array;
}
/** =============================== TotalShares */
export interface QueryTotalSharesRequestAmino {
  pool_id: string;
}
export interface QueryTotalSharesRequestAminoMsg {
  type: "osmosis/gamm/query-total-shares-request";
  value: QueryTotalSharesRequestAmino;
}
/** =============================== TotalShares */
export interface QueryTotalSharesRequestSDKType {
  pool_id: bigint;
}
export interface QueryTotalSharesResponse {
  total_shares: Coin;
}
export interface QueryTotalSharesResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryTotalSharesResponse";
  value: Uint8Array;
}
export interface QueryTotalSharesResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryTotalSharesResponse";
  value: Uint8Array;
}
export interface QueryTotalSharesResponseAmino {
  total_shares?: CoinAmino;
}
export interface QueryTotalSharesResponseAminoMsg {
  type: "osmosis/gamm/query-total-shares-response";
  value: QueryTotalSharesResponseAmino;
}
export interface QueryTotalSharesResponseSDKType {
  total_shares: CoinSDKType;
}
/** =============================== CalcJoinPoolNoSwapShares */
export interface QueryCalcJoinPoolNoSwapSharesRequest {
  pool_id: bigint;
  tokens_in: Coin[];
}
export interface QueryCalcJoinPoolNoSwapSharesRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest";
  value: Uint8Array;
}
export interface QueryCalcJoinPoolNoSwapSharesRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest";
  value: Uint8Array;
}
/** =============================== CalcJoinPoolNoSwapShares */
export interface QueryCalcJoinPoolNoSwapSharesRequestAmino {
  pool_id: string;
  tokens_in: CoinAmino[];
}
export interface QueryCalcJoinPoolNoSwapSharesRequestAminoMsg {
  type: "osmosis/gamm/query-calc-join-pool-no-swap-shares-request";
  value: QueryCalcJoinPoolNoSwapSharesRequestAmino;
}
/** =============================== CalcJoinPoolNoSwapShares */
export interface QueryCalcJoinPoolNoSwapSharesRequestSDKType {
  pool_id: bigint;
  tokens_in: CoinSDKType[];
}
export interface QueryCalcJoinPoolNoSwapSharesResponse {
  tokens_out: Coin[];
  shares_out: string;
}
export interface QueryCalcJoinPoolNoSwapSharesResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse";
  value: Uint8Array;
}
export interface QueryCalcJoinPoolNoSwapSharesResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse";
  value: Uint8Array;
}
export interface QueryCalcJoinPoolNoSwapSharesResponseAmino {
  tokens_out: CoinAmino[];
  shares_out: string;
}
export interface QueryCalcJoinPoolNoSwapSharesResponseAminoMsg {
  type: "osmosis/gamm/query-calc-join-pool-no-swap-shares-response";
  value: QueryCalcJoinPoolNoSwapSharesResponseAmino;
}
export interface QueryCalcJoinPoolNoSwapSharesResponseSDKType {
  tokens_out: CoinSDKType[];
  shares_out: string;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceRequest {
  pool_id: bigint;
  base_asset_denom: string;
  quote_asset_denom: string;
}
export interface QuerySpotPriceRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QuerySpotPriceRequest";
  value: Uint8Array;
}
export interface QuerySpotPriceRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QuerySpotPriceRequest";
  value: Uint8Array;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceRequestAmino {
  pool_id: string;
  base_asset_denom: string;
  quote_asset_denom: string;
}
export interface QuerySpotPriceRequestAminoMsg {
  type: "osmosis/gamm/query-spot-price-request";
  value: QuerySpotPriceRequestAmino;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceRequestSDKType {
  pool_id: bigint;
  base_asset_denom: string;
  quote_asset_denom: string;
}
export interface QueryPoolsWithFilterRequest {
  min_liquidity: Coin[];
  pool_type: string;
  pagination?: PageRequest;
}
export interface QueryPoolsWithFilterRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest";
  value: Uint8Array;
}
export interface QueryPoolsWithFilterRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest";
  value: Uint8Array;
}
export interface QueryPoolsWithFilterRequestAmino {
  min_liquidity: CoinAmino[];
  pool_type: string;
  pagination?: PageRequestAmino;
}
export interface QueryPoolsWithFilterRequestAminoMsg {
  type: "osmosis/gamm/query-pools-with-filter-request";
  value: QueryPoolsWithFilterRequestAmino;
}
export interface QueryPoolsWithFilterRequestSDKType {
  min_liquidity: CoinSDKType[];
  pool_type: string;
  pagination?: PageRequestSDKType;
}
export interface QueryPoolsWithFilterResponse {
  pools: (Pool1 & Pool2 & Any)[] | Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryPoolsWithFilterResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse";
  value: Uint8Array;
}
export interface QueryPoolsWithFilterResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse";
  value: Uint8Array;
}
export type QueryPoolsWithFilterResponseEncoded = Omit<QueryPoolsWithFilterResponse, "pools"> & {
  pools: (Pool1ProtoMsg | Pool2ProtoMsg | AnyProtoMsg)[];
};
export interface QueryPoolsWithFilterResponseAmino {
  pools: AnyAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryPoolsWithFilterResponseAminoMsg {
  type: "osmosis/gamm/query-pools-with-filter-response";
  value: QueryPoolsWithFilterResponseAmino;
}
export interface QueryPoolsWithFilterResponseSDKType {
  pools: (Pool1SDKType | Pool2SDKType | AnySDKType)[];
  pagination?: PageResponseSDKType;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceResponse {
  /** String of the Dec. Ex) 10.203uatom */
  spot_price: string;
}
export interface QuerySpotPriceResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QuerySpotPriceResponse";
  value: Uint8Array;
}
export interface QuerySpotPriceResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QuerySpotPriceResponse";
  value: Uint8Array;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceResponseAmino {
  /** String of the Dec. Ex) 10.203uatom */
  spot_price: string;
}
export interface QuerySpotPriceResponseAminoMsg {
  type: "osmosis/gamm/query-spot-price-response";
  value: QuerySpotPriceResponseAmino;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceResponseSDKType {
  spot_price: string;
}
/** =============================== EstimateSwapExactAmountIn */
export interface QuerySwapExactAmountInRequest {
  /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
  sender: string;
  pool_id: bigint;
  token_in: string;
  routes: SwapAmountInRoute[];
}
export interface QuerySwapExactAmountInRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest";
  value: Uint8Array;
}
export interface QuerySwapExactAmountInRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest";
  value: Uint8Array;
}
/** =============================== EstimateSwapExactAmountIn */
export interface QuerySwapExactAmountInRequestAmino {
  /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
  sender: string;
  pool_id: string;
  token_in: string;
  routes: SwapAmountInRouteAmino[];
}
export interface QuerySwapExactAmountInRequestAminoMsg {
  type: "osmosis/gamm/query-swap-exact-amount-in-request";
  value: QuerySwapExactAmountInRequestAmino;
}
/** =============================== EstimateSwapExactAmountIn */
export interface QuerySwapExactAmountInRequestSDKType {
  sender: string;
  pool_id: bigint;
  token_in: string;
  routes: SwapAmountInRouteSDKType[];
}
export interface QuerySwapExactAmountInResponse {
  token_out_amount: string;
}
export interface QuerySwapExactAmountInResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse";
  value: Uint8Array;
}
export interface QuerySwapExactAmountInResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse";
  value: Uint8Array;
}
export interface QuerySwapExactAmountInResponseAmino {
  token_out_amount: string;
}
export interface QuerySwapExactAmountInResponseAminoMsg {
  type: "osmosis/gamm/query-swap-exact-amount-in-response";
  value: QuerySwapExactAmountInResponseAmino;
}
export interface QuerySwapExactAmountInResponseSDKType {
  token_out_amount: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface QuerySwapExactAmountOutRequest {
  /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
  sender: string;
  pool_id: bigint;
  routes: SwapAmountOutRoute[];
  token_out: string;
}
export interface QuerySwapExactAmountOutRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest";
  value: Uint8Array;
}
export interface QuerySwapExactAmountOutRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest";
  value: Uint8Array;
}
/** =============================== EstimateSwapExactAmountOut */
export interface QuerySwapExactAmountOutRequestAmino {
  /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
  sender: string;
  pool_id: string;
  routes: SwapAmountOutRouteAmino[];
  token_out: string;
}
export interface QuerySwapExactAmountOutRequestAminoMsg {
  type: "osmosis/gamm/query-swap-exact-amount-out-request";
  value: QuerySwapExactAmountOutRequestAmino;
}
/** =============================== EstimateSwapExactAmountOut */
export interface QuerySwapExactAmountOutRequestSDKType {
  sender: string;
  pool_id: bigint;
  routes: SwapAmountOutRouteSDKType[];
  token_out: string;
}
export interface QuerySwapExactAmountOutResponse {
  token_in_amount: string;
}
export interface QuerySwapExactAmountOutResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse";
  value: Uint8Array;
}
export interface QuerySwapExactAmountOutResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse";
  value: Uint8Array;
}
export interface QuerySwapExactAmountOutResponseAmino {
  token_in_amount: string;
}
export interface QuerySwapExactAmountOutResponseAminoMsg {
  type: "osmosis/gamm/query-swap-exact-amount-out-response";
  value: QuerySwapExactAmountOutResponseAmino;
}
export interface QuerySwapExactAmountOutResponseSDKType {
  token_in_amount: string;
}
export interface QueryTotalLiquidityRequest {}
export interface QueryTotalLiquidityRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryTotalLiquidityRequest";
  value: Uint8Array;
}
export interface QueryTotalLiquidityRequestProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryTotalLiquidityRequest";
  value: Uint8Array;
}
export interface QueryTotalLiquidityRequestAmino {}
export interface QueryTotalLiquidityRequestAminoMsg {
  type: "osmosis/gamm/query-total-liquidity-request";
  value: QueryTotalLiquidityRequestAmino;
}
export interface QueryTotalLiquidityRequestSDKType {}
export interface QueryTotalLiquidityResponse {
  liquidity: Coin[];
}
export interface QueryTotalLiquidityResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryTotalLiquidityResponse";
  value: Uint8Array;
}
export interface QueryTotalLiquidityResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.QueryTotalLiquidityResponse";
  value: Uint8Array;
}
export interface QueryTotalLiquidityResponseAmino {
  liquidity: CoinAmino[];
}
export interface QueryTotalLiquidityResponseAminoMsg {
  type: "osmosis/gamm/query-total-liquidity-response";
  value: QueryTotalLiquidityResponseAmino;
}
export interface QueryTotalLiquidityResponseSDKType {
  liquidity: CoinSDKType[];
}
function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {
    pool_id: BigInt(0)
  };
}
export const QueryPoolRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolRequest",
  encode(message: QueryPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.pool_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolRequest {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryPoolRequest): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryPoolRequest>): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryPoolRequestSDKType): QueryPoolRequest {
    return {
      pool_id: object?.pool_id
    };
  },
  toSDK(message: QueryPoolRequest): QueryPoolRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.pool_id;
    return obj;
  },
  fromAmino(object: QueryPoolRequestAmino): QueryPoolRequest {
    return {
      pool_id: BigInt(object.pool_id)
    };
  },
  toAmino(message: QueryPoolRequest): QueryPoolRequestAmino {
    const obj: any = {};
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolRequestAminoMsg): QueryPoolRequest {
    return QueryPoolRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPoolRequest): QueryPoolRequestAminoMsg {
    return {
      type: "osmosis/gamm/query-pool-request",
      value: QueryPoolRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPoolRequestProtoMsg): QueryPoolRequest {
    return QueryPoolRequest.decode(message.value);
  },
  toProto(message: QueryPoolRequest): Uint8Array {
    return QueryPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolRequest): QueryPoolRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolRequest",
      value: QueryPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolResponse(): QueryPoolResponse {
  return {
    pool: undefined
  };
}
export const QueryPoolResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolResponse",
  encode(message: QueryPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Any.encode((message.pool as Any), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = (PoolI_InterfaceDecoder(reader) as Any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolResponse {
    return {
      pool: isSet(object.pool) ? Any.fromJSON(object.pool) : undefined
    };
  },
  toJSON(message: QueryPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Any.toJSON(message.pool) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Any.fromPartial(object.pool) : undefined;
    return message;
  },
  fromSDK(object: QueryPoolResponseSDKType): QueryPoolResponse {
    return {
      pool: object.pool ? Any.fromSDK(object.pool) : undefined
    };
  },
  toSDK(message: QueryPoolResponse): QueryPoolResponseSDKType {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Any.toSDK(message.pool) : undefined);
    return obj;
  },
  fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse {
    return {
      pool: object?.pool ? PoolI_FromAmino(object.pool) : undefined
    };
  },
  toAmino(message: QueryPoolResponse): QueryPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? PoolI_ToAmino((message.pool as Any)) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolResponseAminoMsg): QueryPoolResponse {
    return QueryPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPoolResponse): QueryPoolResponseAminoMsg {
    return {
      type: "osmosis/gamm/query-pool-response",
      value: QueryPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPoolResponseProtoMsg): QueryPoolResponse {
    return QueryPoolResponse.decode(message.value);
  },
  toProto(message: QueryPoolResponse): Uint8Array {
    return QueryPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolResponse): QueryPoolResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolResponse",
      value: QueryPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return {
    pagination: undefined
  };
}
export const QueryPoolsRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsRequest",
  encode(message: QueryPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPoolsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPoolsRequest>): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryPoolsRequestSDKType): QueryPoolsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryPoolsRequest): QueryPoolsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryPoolsRequestAmino): QueryPoolsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryPoolsRequest): QueryPoolsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolsRequestAminoMsg): QueryPoolsRequest {
    return QueryPoolsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPoolsRequest): QueryPoolsRequestAminoMsg {
    return {
      type: "osmosis/gamm/query-pools-request",
      value: QueryPoolsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPoolsRequestProtoMsg): QueryPoolsRequest {
    return QueryPoolsRequest.decode(message.value);
  },
  toProto(message: QueryPoolsRequest): Uint8Array {
    return QueryPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsRequest): QueryPoolsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsRequest",
      value: QueryPoolsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return {
    pools: [],
    pagination: undefined
  };
}
export const QueryPoolsResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsResponse",
  encode(message: QueryPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Any.encode((v! as Any), writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push((PoolI_InterfaceDecoder(reader) as Any));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPoolsResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryPoolsResponseSDKType): QueryPoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Any.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryPoolsResponse): QueryPoolsResponseSDKType {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryPoolsResponseAmino): QueryPoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => PoolI_FromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryPoolsResponse): QueryPoolsResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? PoolI_ToAmino((e as Any)) : undefined);
    } else {
      obj.pools = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolsResponseAminoMsg): QueryPoolsResponse {
    return QueryPoolsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPoolsResponse): QueryPoolsResponseAminoMsg {
    return {
      type: "osmosis/gamm/query-pools-response",
      value: QueryPoolsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPoolsResponseProtoMsg): QueryPoolsResponse {
    return QueryPoolsResponse.decode(message.value);
  },
  toProto(message: QueryPoolsResponse): Uint8Array {
    return QueryPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsResponse): QueryPoolsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsResponse",
      value: QueryPoolsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryNumPoolsRequest(): QueryNumPoolsRequest {
  return {};
}
export const QueryNumPoolsRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsRequest",
  encode(_: QueryNumPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNumPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNumPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryNumPoolsRequest {
    return {};
  },
  toJSON(_: QueryNumPoolsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryNumPoolsRequest>): QueryNumPoolsRequest {
    const message = createBaseQueryNumPoolsRequest();
    return message;
  },
  fromSDK(_: QueryNumPoolsRequestSDKType): QueryNumPoolsRequest {
    return {};
  },
  toSDK(_: QueryNumPoolsRequest): QueryNumPoolsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryNumPoolsRequestAmino): QueryNumPoolsRequest {
    return {};
  },
  toAmino(_: QueryNumPoolsRequest): QueryNumPoolsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryNumPoolsRequestAminoMsg): QueryNumPoolsRequest {
    return QueryNumPoolsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryNumPoolsRequest): QueryNumPoolsRequestAminoMsg {
    return {
      type: "osmosis/gamm/query-num-pools-request",
      value: QueryNumPoolsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryNumPoolsRequestProtoMsg): QueryNumPoolsRequest {
    return QueryNumPoolsRequest.decode(message.value);
  },
  toProto(message: QueryNumPoolsRequest): Uint8Array {
    return QueryNumPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNumPoolsRequest): QueryNumPoolsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsRequest",
      value: QueryNumPoolsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryNumPoolsResponse(): QueryNumPoolsResponse {
  return {
    num_pools: BigInt(0)
  };
}
export const QueryNumPoolsResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsResponse",
  encode(message: QueryNumPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.num_pools !== BigInt(0)) {
      writer.uint32(8).uint64(message.num_pools);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNumPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNumPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.num_pools = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNumPoolsResponse {
    return {
      num_pools: isSet(object.num_pools) ? BigInt(object.num_pools.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryNumPoolsResponse): unknown {
    const obj: any = {};
    message.num_pools !== undefined && (obj.num_pools = (message.num_pools || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryNumPoolsResponse>): QueryNumPoolsResponse {
    const message = createBaseQueryNumPoolsResponse();
    message.num_pools = object.num_pools !== undefined && object.num_pools !== null ? BigInt(object.num_pools.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryNumPoolsResponseSDKType): QueryNumPoolsResponse {
    return {
      num_pools: object?.num_pools
    };
  },
  toSDK(message: QueryNumPoolsResponse): QueryNumPoolsResponseSDKType {
    const obj: any = {};
    obj.num_pools = message.num_pools;
    return obj;
  },
  fromAmino(object: QueryNumPoolsResponseAmino): QueryNumPoolsResponse {
    return {
      num_pools: BigInt(object.num_pools)
    };
  },
  toAmino(message: QueryNumPoolsResponse): QueryNumPoolsResponseAmino {
    const obj: any = {};
    obj.num_pools = message.num_pools ? message.num_pools.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNumPoolsResponseAminoMsg): QueryNumPoolsResponse {
    return QueryNumPoolsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryNumPoolsResponse): QueryNumPoolsResponseAminoMsg {
    return {
      type: "osmosis/gamm/query-num-pools-response",
      value: QueryNumPoolsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryNumPoolsResponseProtoMsg): QueryNumPoolsResponse {
    return QueryNumPoolsResponse.decode(message.value);
  },
  toProto(message: QueryNumPoolsResponse): Uint8Array {
    return QueryNumPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNumPoolsResponse): QueryNumPoolsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsResponse",
      value: QueryNumPoolsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolTypeRequest(): QueryPoolTypeRequest {
  return {
    pool_id: BigInt(0)
  };
}
export const QueryPoolTypeRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeRequest",
  encode(message: QueryPoolTypeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.pool_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolTypeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolTypeRequest {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryPoolTypeRequest): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryPoolTypeRequest>): QueryPoolTypeRequest {
    const message = createBaseQueryPoolTypeRequest();
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryPoolTypeRequestSDKType): QueryPoolTypeRequest {
    return {
      pool_id: object?.pool_id
    };
  },
  toSDK(message: QueryPoolTypeRequest): QueryPoolTypeRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.pool_id;
    return obj;
  },
  fromAmino(object: QueryPoolTypeRequestAmino): QueryPoolTypeRequest {
    return {
      pool_id: BigInt(object.pool_id)
    };
  },
  toAmino(message: QueryPoolTypeRequest): QueryPoolTypeRequestAmino {
    const obj: any = {};
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolTypeRequestAminoMsg): QueryPoolTypeRequest {
    return QueryPoolTypeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPoolTypeRequest): QueryPoolTypeRequestAminoMsg {
    return {
      type: "osmosis/gamm/query-pool-type-request",
      value: QueryPoolTypeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPoolTypeRequestProtoMsg): QueryPoolTypeRequest {
    return QueryPoolTypeRequest.decode(message.value);
  },
  toProto(message: QueryPoolTypeRequest): Uint8Array {
    return QueryPoolTypeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolTypeRequest): QueryPoolTypeRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeRequest",
      value: QueryPoolTypeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolTypeResponse(): QueryPoolTypeResponse {
  return {
    pool_type: ""
  };
}
export const QueryPoolTypeResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeResponse",
  encode(message: QueryPoolTypeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool_type !== "") {
      writer.uint32(10).string(message.pool_type);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolTypeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolTypeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolTypeResponse {
    return {
      pool_type: isSet(object.pool_type) ? String(object.pool_type) : ""
    };
  },
  toJSON(message: QueryPoolTypeResponse): unknown {
    const obj: any = {};
    message.pool_type !== undefined && (obj.pool_type = message.pool_type);
    return obj;
  },
  fromPartial(object: Partial<QueryPoolTypeResponse>): QueryPoolTypeResponse {
    const message = createBaseQueryPoolTypeResponse();
    message.pool_type = object.pool_type ?? "";
    return message;
  },
  fromSDK(object: QueryPoolTypeResponseSDKType): QueryPoolTypeResponse {
    return {
      pool_type: object?.pool_type
    };
  },
  toSDK(message: QueryPoolTypeResponse): QueryPoolTypeResponseSDKType {
    const obj: any = {};
    obj.pool_type = message.pool_type;
    return obj;
  },
  fromAmino(object: QueryPoolTypeResponseAmino): QueryPoolTypeResponse {
    return {
      pool_type: object.pool_type
    };
  },
  toAmino(message: QueryPoolTypeResponse): QueryPoolTypeResponseAmino {
    const obj: any = {};
    obj.pool_type = message.pool_type;
    return obj;
  },
  fromAminoMsg(object: QueryPoolTypeResponseAminoMsg): QueryPoolTypeResponse {
    return QueryPoolTypeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPoolTypeResponse): QueryPoolTypeResponseAminoMsg {
    return {
      type: "osmosis/gamm/query-pool-type-response",
      value: QueryPoolTypeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPoolTypeResponseProtoMsg): QueryPoolTypeResponse {
    return QueryPoolTypeResponse.decode(message.value);
  },
  toProto(message: QueryPoolTypeResponse): Uint8Array {
    return QueryPoolTypeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolTypeResponse): QueryPoolTypeResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeResponse",
      value: QueryPoolTypeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCalcJoinPoolSharesRequest(): QueryCalcJoinPoolSharesRequest {
  return {
    pool_id: BigInt(0),
    tokens_in: []
  };
}
export const QueryCalcJoinPoolSharesRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest",
  encode(message: QueryCalcJoinPoolSharesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.pool_id);
    }
    for (const v of message.tokens_in) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcJoinPoolSharesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcJoinPoolSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = reader.uint64();
          break;
        case 2:
          message.tokens_in.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCalcJoinPoolSharesRequest {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      tokens_in: Array.isArray(object?.tokens_in) ? object.tokens_in.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryCalcJoinPoolSharesRequest): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    if (message.tokens_in) {
      obj.tokens_in = message.tokens_in.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokens_in = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryCalcJoinPoolSharesRequest>): QueryCalcJoinPoolSharesRequest {
    const message = createBaseQueryCalcJoinPoolSharesRequest();
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.tokens_in = object.tokens_in?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryCalcJoinPoolSharesRequestSDKType): QueryCalcJoinPoolSharesRequest {
    return {
      pool_id: object?.pool_id,
      tokens_in: Array.isArray(object?.tokens_in) ? object.tokens_in.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryCalcJoinPoolSharesRequest): QueryCalcJoinPoolSharesRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.pool_id;
    if (message.tokens_in) {
      obj.tokens_in = message.tokens_in.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.tokens_in = [];
    }
    return obj;
  },
  fromAmino(object: QueryCalcJoinPoolSharesRequestAmino): QueryCalcJoinPoolSharesRequest {
    return {
      pool_id: BigInt(object.pool_id),
      tokens_in: Array.isArray(object?.tokens_in) ? object.tokens_in.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryCalcJoinPoolSharesRequest): QueryCalcJoinPoolSharesRequestAmino {
    const obj: any = {};
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    if (message.tokens_in) {
      obj.tokens_in = message.tokens_in.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tokens_in = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryCalcJoinPoolSharesRequestAminoMsg): QueryCalcJoinPoolSharesRequest {
    return QueryCalcJoinPoolSharesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCalcJoinPoolSharesRequest): QueryCalcJoinPoolSharesRequestAminoMsg {
    return {
      type: "osmosis/gamm/query-calc-join-pool-shares-request",
      value: QueryCalcJoinPoolSharesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCalcJoinPoolSharesRequestProtoMsg): QueryCalcJoinPoolSharesRequest {
    return QueryCalcJoinPoolSharesRequest.decode(message.value);
  },
  toProto(message: QueryCalcJoinPoolSharesRequest): Uint8Array {
    return QueryCalcJoinPoolSharesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcJoinPoolSharesRequest): QueryCalcJoinPoolSharesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest",
      value: QueryCalcJoinPoolSharesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCalcJoinPoolSharesResponse(): QueryCalcJoinPoolSharesResponse {
  return {
    share_out_amount: "",
    tokens_out: []
  };
}
export const QueryCalcJoinPoolSharesResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse",
  encode(message: QueryCalcJoinPoolSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.share_out_amount !== "") {
      writer.uint32(10).string(message.share_out_amount);
    }
    for (const v of message.tokens_out) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcJoinPoolSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcJoinPoolSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.share_out_amount = reader.string();
          break;
        case 2:
          message.tokens_out.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCalcJoinPoolSharesResponse {
    return {
      share_out_amount: isSet(object.share_out_amount) ? String(object.share_out_amount) : "",
      tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryCalcJoinPoolSharesResponse): unknown {
    const obj: any = {};
    message.share_out_amount !== undefined && (obj.share_out_amount = message.share_out_amount);
    if (message.tokens_out) {
      obj.tokens_out = message.tokens_out.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokens_out = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryCalcJoinPoolSharesResponse>): QueryCalcJoinPoolSharesResponse {
    const message = createBaseQueryCalcJoinPoolSharesResponse();
    message.share_out_amount = object.share_out_amount ?? "";
    message.tokens_out = object.tokens_out?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryCalcJoinPoolSharesResponseSDKType): QueryCalcJoinPoolSharesResponse {
    return {
      share_out_amount: object?.share_out_amount,
      tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryCalcJoinPoolSharesResponse): QueryCalcJoinPoolSharesResponseSDKType {
    const obj: any = {};
    obj.share_out_amount = message.share_out_amount;
    if (message.tokens_out) {
      obj.tokens_out = message.tokens_out.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.tokens_out = [];
    }
    return obj;
  },
  fromAmino(object: QueryCalcJoinPoolSharesResponseAmino): QueryCalcJoinPoolSharesResponse {
    return {
      share_out_amount: object.share_out_amount,
      tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryCalcJoinPoolSharesResponse): QueryCalcJoinPoolSharesResponseAmino {
    const obj: any = {};
    obj.share_out_amount = message.share_out_amount;
    if (message.tokens_out) {
      obj.tokens_out = message.tokens_out.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tokens_out = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryCalcJoinPoolSharesResponseAminoMsg): QueryCalcJoinPoolSharesResponse {
    return QueryCalcJoinPoolSharesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCalcJoinPoolSharesResponse): QueryCalcJoinPoolSharesResponseAminoMsg {
    return {
      type: "osmosis/gamm/query-calc-join-pool-shares-response",
      value: QueryCalcJoinPoolSharesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCalcJoinPoolSharesResponseProtoMsg): QueryCalcJoinPoolSharesResponse {
    return QueryCalcJoinPoolSharesResponse.decode(message.value);
  },
  toProto(message: QueryCalcJoinPoolSharesResponse): Uint8Array {
    return QueryCalcJoinPoolSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcJoinPoolSharesResponse): QueryCalcJoinPoolSharesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse",
      value: QueryCalcJoinPoolSharesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCalcExitPoolCoinsFromSharesRequest(): QueryCalcExitPoolCoinsFromSharesRequest {
  return {
    pool_id: BigInt(0),
    share_in_amount: ""
  };
}
export const QueryCalcExitPoolCoinsFromSharesRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest",
  encode(message: QueryCalcExitPoolCoinsFromSharesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.share_in_amount !== "") {
      writer.uint32(18).string(message.share_in_amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcExitPoolCoinsFromSharesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = reader.uint64();
          break;
        case 2:
          message.share_in_amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCalcExitPoolCoinsFromSharesRequest {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      share_in_amount: isSet(object.share_in_amount) ? String(object.share_in_amount) : ""
    };
  },
  toJSON(message: QueryCalcExitPoolCoinsFromSharesRequest): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    message.share_in_amount !== undefined && (obj.share_in_amount = message.share_in_amount);
    return obj;
  },
  fromPartial(object: Partial<QueryCalcExitPoolCoinsFromSharesRequest>): QueryCalcExitPoolCoinsFromSharesRequest {
    const message = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.share_in_amount = object.share_in_amount ?? "";
    return message;
  },
  fromSDK(object: QueryCalcExitPoolCoinsFromSharesRequestSDKType): QueryCalcExitPoolCoinsFromSharesRequest {
    return {
      pool_id: object?.pool_id,
      share_in_amount: object?.share_in_amount
    };
  },
  toSDK(message: QueryCalcExitPoolCoinsFromSharesRequest): QueryCalcExitPoolCoinsFromSharesRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.pool_id;
    obj.share_in_amount = message.share_in_amount;
    return obj;
  },
  fromAmino(object: QueryCalcExitPoolCoinsFromSharesRequestAmino): QueryCalcExitPoolCoinsFromSharesRequest {
    return {
      pool_id: BigInt(object.pool_id),
      share_in_amount: object.share_in_amount
    };
  },
  toAmino(message: QueryCalcExitPoolCoinsFromSharesRequest): QueryCalcExitPoolCoinsFromSharesRequestAmino {
    const obj: any = {};
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    obj.share_in_amount = message.share_in_amount;
    return obj;
  },
  fromAminoMsg(object: QueryCalcExitPoolCoinsFromSharesRequestAminoMsg): QueryCalcExitPoolCoinsFromSharesRequest {
    return QueryCalcExitPoolCoinsFromSharesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCalcExitPoolCoinsFromSharesRequest): QueryCalcExitPoolCoinsFromSharesRequestAminoMsg {
    return {
      type: "osmosis/gamm/query-calc-exit-pool-coins-from-shares-request",
      value: QueryCalcExitPoolCoinsFromSharesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCalcExitPoolCoinsFromSharesRequestProtoMsg): QueryCalcExitPoolCoinsFromSharesRequest {
    return QueryCalcExitPoolCoinsFromSharesRequest.decode(message.value);
  },
  toProto(message: QueryCalcExitPoolCoinsFromSharesRequest): Uint8Array {
    return QueryCalcExitPoolCoinsFromSharesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcExitPoolCoinsFromSharesRequest): QueryCalcExitPoolCoinsFromSharesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest",
      value: QueryCalcExitPoolCoinsFromSharesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCalcExitPoolCoinsFromSharesResponse(): QueryCalcExitPoolCoinsFromSharesResponse {
  return {
    tokens_out: []
  };
}
export const QueryCalcExitPoolCoinsFromSharesResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse",
  encode(message: QueryCalcExitPoolCoinsFromSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokens_out) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcExitPoolCoinsFromSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens_out.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCalcExitPoolCoinsFromSharesResponse {
    return {
      tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryCalcExitPoolCoinsFromSharesResponse): unknown {
    const obj: any = {};
    if (message.tokens_out) {
      obj.tokens_out = message.tokens_out.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokens_out = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryCalcExitPoolCoinsFromSharesResponse>): QueryCalcExitPoolCoinsFromSharesResponse {
    const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
    message.tokens_out = object.tokens_out?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryCalcExitPoolCoinsFromSharesResponseSDKType): QueryCalcExitPoolCoinsFromSharesResponse {
    return {
      tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryCalcExitPoolCoinsFromSharesResponse): QueryCalcExitPoolCoinsFromSharesResponseSDKType {
    const obj: any = {};
    if (message.tokens_out) {
      obj.tokens_out = message.tokens_out.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.tokens_out = [];
    }
    return obj;
  },
  fromAmino(object: QueryCalcExitPoolCoinsFromSharesResponseAmino): QueryCalcExitPoolCoinsFromSharesResponse {
    return {
      tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryCalcExitPoolCoinsFromSharesResponse): QueryCalcExitPoolCoinsFromSharesResponseAmino {
    const obj: any = {};
    if (message.tokens_out) {
      obj.tokens_out = message.tokens_out.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tokens_out = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryCalcExitPoolCoinsFromSharesResponseAminoMsg): QueryCalcExitPoolCoinsFromSharesResponse {
    return QueryCalcExitPoolCoinsFromSharesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCalcExitPoolCoinsFromSharesResponse): QueryCalcExitPoolCoinsFromSharesResponseAminoMsg {
    return {
      type: "osmosis/gamm/query-calc-exit-pool-coins-from-shares-response",
      value: QueryCalcExitPoolCoinsFromSharesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCalcExitPoolCoinsFromSharesResponseProtoMsg): QueryCalcExitPoolCoinsFromSharesResponse {
    return QueryCalcExitPoolCoinsFromSharesResponse.decode(message.value);
  },
  toProto(message: QueryCalcExitPoolCoinsFromSharesResponse): Uint8Array {
    return QueryCalcExitPoolCoinsFromSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcExitPoolCoinsFromSharesResponse): QueryCalcExitPoolCoinsFromSharesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse",
      value: QueryCalcExitPoolCoinsFromSharesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolParamsRequest(): QueryPoolParamsRequest {
  return {
    pool_id: BigInt(0)
  };
}
export const QueryPoolParamsRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsRequest",
  encode(message: QueryPoolParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.pool_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolParamsRequest {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryPoolParamsRequest): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryPoolParamsRequest>): QueryPoolParamsRequest {
    const message = createBaseQueryPoolParamsRequest();
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryPoolParamsRequestSDKType): QueryPoolParamsRequest {
    return {
      pool_id: object?.pool_id
    };
  },
  toSDK(message: QueryPoolParamsRequest): QueryPoolParamsRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.pool_id;
    return obj;
  },
  fromAmino(object: QueryPoolParamsRequestAmino): QueryPoolParamsRequest {
    return {
      pool_id: BigInt(object.pool_id)
    };
  },
  toAmino(message: QueryPoolParamsRequest): QueryPoolParamsRequestAmino {
    const obj: any = {};
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolParamsRequestAminoMsg): QueryPoolParamsRequest {
    return QueryPoolParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPoolParamsRequest): QueryPoolParamsRequestAminoMsg {
    return {
      type: "osmosis/gamm/query-pool-params-request",
      value: QueryPoolParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPoolParamsRequestProtoMsg): QueryPoolParamsRequest {
    return QueryPoolParamsRequest.decode(message.value);
  },
  toProto(message: QueryPoolParamsRequest): Uint8Array {
    return QueryPoolParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolParamsRequest): QueryPoolParamsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsRequest",
      value: QueryPoolParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolParamsResponse(): QueryPoolParamsResponse {
  return {
    params: undefined
  };
}
export const QueryPoolParamsResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsResponse",
  encode(message: QueryPoolParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Any.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolParamsResponse {
    return {
      params: isSet(object.params) ? Any.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryPoolParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Any.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPoolParamsResponse>): QueryPoolParamsResponse {
    const message = createBaseQueryPoolParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Any.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: QueryPoolParamsResponseSDKType): QueryPoolParamsResponse {
    return {
      params: object.params ? Any.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: QueryPoolParamsResponse): QueryPoolParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Any.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryPoolParamsResponseAmino): QueryPoolParamsResponse {
    return {
      params: object?.params ? Any.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryPoolParamsResponse): QueryPoolParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Any.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolParamsResponseAminoMsg): QueryPoolParamsResponse {
    return QueryPoolParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPoolParamsResponse): QueryPoolParamsResponseAminoMsg {
    return {
      type: "osmosis/gamm/query-pool-params-response",
      value: QueryPoolParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPoolParamsResponseProtoMsg): QueryPoolParamsResponse {
    return QueryPoolParamsResponse.decode(message.value);
  },
  toProto(message: QueryPoolParamsResponse): Uint8Array {
    return QueryPoolParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolParamsResponse): QueryPoolParamsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsResponse",
      value: QueryPoolParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalPoolLiquidityRequest(): QueryTotalPoolLiquidityRequest {
  return {
    pool_id: BigInt(0)
  };
}
export const QueryTotalPoolLiquidityRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest",
  encode(message: QueryTotalPoolLiquidityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.pool_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalPoolLiquidityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalPoolLiquidityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalPoolLiquidityRequest {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryTotalPoolLiquidityRequest): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryTotalPoolLiquidityRequest>): QueryTotalPoolLiquidityRequest {
    const message = createBaseQueryTotalPoolLiquidityRequest();
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryTotalPoolLiquidityRequestSDKType): QueryTotalPoolLiquidityRequest {
    return {
      pool_id: object?.pool_id
    };
  },
  toSDK(message: QueryTotalPoolLiquidityRequest): QueryTotalPoolLiquidityRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.pool_id;
    return obj;
  },
  fromAmino(object: QueryTotalPoolLiquidityRequestAmino): QueryTotalPoolLiquidityRequest {
    return {
      pool_id: BigInt(object.pool_id)
    };
  },
  toAmino(message: QueryTotalPoolLiquidityRequest): QueryTotalPoolLiquidityRequestAmino {
    const obj: any = {};
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalPoolLiquidityRequestAminoMsg): QueryTotalPoolLiquidityRequest {
    return QueryTotalPoolLiquidityRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalPoolLiquidityRequest): QueryTotalPoolLiquidityRequestAminoMsg {
    return {
      type: "osmosis/gamm/query-total-pool-liquidity-request",
      value: QueryTotalPoolLiquidityRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalPoolLiquidityRequestProtoMsg): QueryTotalPoolLiquidityRequest {
    return QueryTotalPoolLiquidityRequest.decode(message.value);
  },
  toProto(message: QueryTotalPoolLiquidityRequest): Uint8Array {
    return QueryTotalPoolLiquidityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalPoolLiquidityRequest): QueryTotalPoolLiquidityRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest",
      value: QueryTotalPoolLiquidityRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalPoolLiquidityResponse(): QueryTotalPoolLiquidityResponse {
  return {
    liquidity: []
  };
}
export const QueryTotalPoolLiquidityResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse",
  encode(message: QueryTotalPoolLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalPoolLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalPoolLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalPoolLiquidityResponse {
    return {
      liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryTotalPoolLiquidityResponse): unknown {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.liquidity = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryTotalPoolLiquidityResponse>): QueryTotalPoolLiquidityResponse {
    const message = createBaseQueryTotalPoolLiquidityResponse();
    message.liquidity = object.liquidity?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryTotalPoolLiquidityResponseSDKType): QueryTotalPoolLiquidityResponse {
    return {
      liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryTotalPoolLiquidityResponse): QueryTotalPoolLiquidityResponseSDKType {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.liquidity = [];
    }
    return obj;
  },
  fromAmino(object: QueryTotalPoolLiquidityResponseAmino): QueryTotalPoolLiquidityResponse {
    return {
      liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryTotalPoolLiquidityResponse): QueryTotalPoolLiquidityResponseAmino {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.liquidity = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalPoolLiquidityResponseAminoMsg): QueryTotalPoolLiquidityResponse {
    return QueryTotalPoolLiquidityResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalPoolLiquidityResponse): QueryTotalPoolLiquidityResponseAminoMsg {
    return {
      type: "osmosis/gamm/query-total-pool-liquidity-response",
      value: QueryTotalPoolLiquidityResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalPoolLiquidityResponseProtoMsg): QueryTotalPoolLiquidityResponse {
    return QueryTotalPoolLiquidityResponse.decode(message.value);
  },
  toProto(message: QueryTotalPoolLiquidityResponse): Uint8Array {
    return QueryTotalPoolLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalPoolLiquidityResponse): QueryTotalPoolLiquidityResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse",
      value: QueryTotalPoolLiquidityResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalSharesRequest(): QueryTotalSharesRequest {
  return {
    pool_id: BigInt(0)
  };
}
export const QueryTotalSharesRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesRequest",
  encode(message: QueryTotalSharesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.pool_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSharesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalSharesRequest {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryTotalSharesRequest): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryTotalSharesRequest>): QueryTotalSharesRequest {
    const message = createBaseQueryTotalSharesRequest();
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryTotalSharesRequestSDKType): QueryTotalSharesRequest {
    return {
      pool_id: object?.pool_id
    };
  },
  toSDK(message: QueryTotalSharesRequest): QueryTotalSharesRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.pool_id;
    return obj;
  },
  fromAmino(object: QueryTotalSharesRequestAmino): QueryTotalSharesRequest {
    return {
      pool_id: BigInt(object.pool_id)
    };
  },
  toAmino(message: QueryTotalSharesRequest): QueryTotalSharesRequestAmino {
    const obj: any = {};
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalSharesRequestAminoMsg): QueryTotalSharesRequest {
    return QueryTotalSharesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalSharesRequest): QueryTotalSharesRequestAminoMsg {
    return {
      type: "osmosis/gamm/query-total-shares-request",
      value: QueryTotalSharesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalSharesRequestProtoMsg): QueryTotalSharesRequest {
    return QueryTotalSharesRequest.decode(message.value);
  },
  toProto(message: QueryTotalSharesRequest): Uint8Array {
    return QueryTotalSharesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalSharesRequest): QueryTotalSharesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesRequest",
      value: QueryTotalSharesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalSharesResponse(): QueryTotalSharesResponse {
  return {
    total_shares: Coin.fromPartial({})
  };
}
export const QueryTotalSharesResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesResponse",
  encode(message: QueryTotalSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.total_shares !== undefined) {
      Coin.encode(message.total_shares, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total_shares = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalSharesResponse {
    return {
      total_shares: isSet(object.total_shares) ? Coin.fromJSON(object.total_shares) : undefined
    };
  },
  toJSON(message: QueryTotalSharesResponse): unknown {
    const obj: any = {};
    message.total_shares !== undefined && (obj.total_shares = message.total_shares ? Coin.toJSON(message.total_shares) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryTotalSharesResponse>): QueryTotalSharesResponse {
    const message = createBaseQueryTotalSharesResponse();
    message.total_shares = object.total_shares !== undefined && object.total_shares !== null ? Coin.fromPartial(object.total_shares) : undefined;
    return message;
  },
  fromSDK(object: QueryTotalSharesResponseSDKType): QueryTotalSharesResponse {
    return {
      total_shares: object.total_shares ? Coin.fromSDK(object.total_shares) : undefined
    };
  },
  toSDK(message: QueryTotalSharesResponse): QueryTotalSharesResponseSDKType {
    const obj: any = {};
    message.total_shares !== undefined && (obj.total_shares = message.total_shares ? Coin.toSDK(message.total_shares) : undefined);
    return obj;
  },
  fromAmino(object: QueryTotalSharesResponseAmino): QueryTotalSharesResponse {
    return {
      total_shares: object?.total_shares ? Coin.fromAmino(object.total_shares) : undefined
    };
  },
  toAmino(message: QueryTotalSharesResponse): QueryTotalSharesResponseAmino {
    const obj: any = {};
    obj.total_shares = message.total_shares ? Coin.toAmino(message.total_shares) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalSharesResponseAminoMsg): QueryTotalSharesResponse {
    return QueryTotalSharesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalSharesResponse): QueryTotalSharesResponseAminoMsg {
    return {
      type: "osmosis/gamm/query-total-shares-response",
      value: QueryTotalSharesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalSharesResponseProtoMsg): QueryTotalSharesResponse {
    return QueryTotalSharesResponse.decode(message.value);
  },
  toProto(message: QueryTotalSharesResponse): Uint8Array {
    return QueryTotalSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalSharesResponse): QueryTotalSharesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesResponse",
      value: QueryTotalSharesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCalcJoinPoolNoSwapSharesRequest(): QueryCalcJoinPoolNoSwapSharesRequest {
  return {
    pool_id: BigInt(0),
    tokens_in: []
  };
}
export const QueryCalcJoinPoolNoSwapSharesRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest",
  encode(message: QueryCalcJoinPoolNoSwapSharesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.pool_id);
    }
    for (const v of message.tokens_in) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcJoinPoolNoSwapSharesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = reader.uint64();
          break;
        case 2:
          message.tokens_in.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCalcJoinPoolNoSwapSharesRequest {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      tokens_in: Array.isArray(object?.tokens_in) ? object.tokens_in.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryCalcJoinPoolNoSwapSharesRequest): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    if (message.tokens_in) {
      obj.tokens_in = message.tokens_in.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokens_in = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryCalcJoinPoolNoSwapSharesRequest>): QueryCalcJoinPoolNoSwapSharesRequest {
    const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.tokens_in = object.tokens_in?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryCalcJoinPoolNoSwapSharesRequestSDKType): QueryCalcJoinPoolNoSwapSharesRequest {
    return {
      pool_id: object?.pool_id,
      tokens_in: Array.isArray(object?.tokens_in) ? object.tokens_in.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryCalcJoinPoolNoSwapSharesRequest): QueryCalcJoinPoolNoSwapSharesRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.pool_id;
    if (message.tokens_in) {
      obj.tokens_in = message.tokens_in.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.tokens_in = [];
    }
    return obj;
  },
  fromAmino(object: QueryCalcJoinPoolNoSwapSharesRequestAmino): QueryCalcJoinPoolNoSwapSharesRequest {
    return {
      pool_id: BigInt(object.pool_id),
      tokens_in: Array.isArray(object?.tokens_in) ? object.tokens_in.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryCalcJoinPoolNoSwapSharesRequest): QueryCalcJoinPoolNoSwapSharesRequestAmino {
    const obj: any = {};
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    if (message.tokens_in) {
      obj.tokens_in = message.tokens_in.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tokens_in = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryCalcJoinPoolNoSwapSharesRequestAminoMsg): QueryCalcJoinPoolNoSwapSharesRequest {
    return QueryCalcJoinPoolNoSwapSharesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCalcJoinPoolNoSwapSharesRequest): QueryCalcJoinPoolNoSwapSharesRequestAminoMsg {
    return {
      type: "osmosis/gamm/query-calc-join-pool-no-swap-shares-request",
      value: QueryCalcJoinPoolNoSwapSharesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCalcJoinPoolNoSwapSharesRequestProtoMsg): QueryCalcJoinPoolNoSwapSharesRequest {
    return QueryCalcJoinPoolNoSwapSharesRequest.decode(message.value);
  },
  toProto(message: QueryCalcJoinPoolNoSwapSharesRequest): Uint8Array {
    return QueryCalcJoinPoolNoSwapSharesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcJoinPoolNoSwapSharesRequest): QueryCalcJoinPoolNoSwapSharesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest",
      value: QueryCalcJoinPoolNoSwapSharesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCalcJoinPoolNoSwapSharesResponse(): QueryCalcJoinPoolNoSwapSharesResponse {
  return {
    tokens_out: [],
    shares_out: ""
  };
}
export const QueryCalcJoinPoolNoSwapSharesResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse",
  encode(message: QueryCalcJoinPoolNoSwapSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokens_out) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.shares_out !== "") {
      writer.uint32(18).string(message.shares_out);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcJoinPoolNoSwapSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens_out.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.shares_out = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCalcJoinPoolNoSwapSharesResponse {
    return {
      tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e: any) => Coin.fromJSON(e)) : [],
      shares_out: isSet(object.shares_out) ? String(object.shares_out) : ""
    };
  },
  toJSON(message: QueryCalcJoinPoolNoSwapSharesResponse): unknown {
    const obj: any = {};
    if (message.tokens_out) {
      obj.tokens_out = message.tokens_out.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokens_out = [];
    }
    message.shares_out !== undefined && (obj.shares_out = message.shares_out);
    return obj;
  },
  fromPartial(object: Partial<QueryCalcJoinPoolNoSwapSharesResponse>): QueryCalcJoinPoolNoSwapSharesResponse {
    const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
    message.tokens_out = object.tokens_out?.map(e => Coin.fromPartial(e)) || [];
    message.shares_out = object.shares_out ?? "";
    return message;
  },
  fromSDK(object: QueryCalcJoinPoolNoSwapSharesResponseSDKType): QueryCalcJoinPoolNoSwapSharesResponse {
    return {
      tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e: any) => Coin.fromSDK(e)) : [],
      shares_out: object?.shares_out
    };
  },
  toSDK(message: QueryCalcJoinPoolNoSwapSharesResponse): QueryCalcJoinPoolNoSwapSharesResponseSDKType {
    const obj: any = {};
    if (message.tokens_out) {
      obj.tokens_out = message.tokens_out.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.tokens_out = [];
    }
    obj.shares_out = message.shares_out;
    return obj;
  },
  fromAmino(object: QueryCalcJoinPoolNoSwapSharesResponseAmino): QueryCalcJoinPoolNoSwapSharesResponse {
    return {
      tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e: any) => Coin.fromAmino(e)) : [],
      shares_out: object.shares_out
    };
  },
  toAmino(message: QueryCalcJoinPoolNoSwapSharesResponse): QueryCalcJoinPoolNoSwapSharesResponseAmino {
    const obj: any = {};
    if (message.tokens_out) {
      obj.tokens_out = message.tokens_out.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tokens_out = [];
    }
    obj.shares_out = message.shares_out;
    return obj;
  },
  fromAminoMsg(object: QueryCalcJoinPoolNoSwapSharesResponseAminoMsg): QueryCalcJoinPoolNoSwapSharesResponse {
    return QueryCalcJoinPoolNoSwapSharesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCalcJoinPoolNoSwapSharesResponse): QueryCalcJoinPoolNoSwapSharesResponseAminoMsg {
    return {
      type: "osmosis/gamm/query-calc-join-pool-no-swap-shares-response",
      value: QueryCalcJoinPoolNoSwapSharesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCalcJoinPoolNoSwapSharesResponseProtoMsg): QueryCalcJoinPoolNoSwapSharesResponse {
    return QueryCalcJoinPoolNoSwapSharesResponse.decode(message.value);
  },
  toProto(message: QueryCalcJoinPoolNoSwapSharesResponse): Uint8Array {
    return QueryCalcJoinPoolNoSwapSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcJoinPoolNoSwapSharesResponse): QueryCalcJoinPoolNoSwapSharesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse",
      value: QueryCalcJoinPoolNoSwapSharesResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySpotPriceRequest(): QuerySpotPriceRequest {
  return {
    pool_id: BigInt(0),
    base_asset_denom: "",
    quote_asset_denom: ""
  };
}
export const QuerySpotPriceRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceRequest",
  encode(message: QuerySpotPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.base_asset_denom !== "") {
      writer.uint32(18).string(message.base_asset_denom);
    }
    if (message.quote_asset_denom !== "") {
      writer.uint32(26).string(message.quote_asset_denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = reader.uint64();
          break;
        case 2:
          message.base_asset_denom = reader.string();
          break;
        case 3:
          message.quote_asset_denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpotPriceRequest {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      base_asset_denom: isSet(object.base_asset_denom) ? String(object.base_asset_denom) : "",
      quote_asset_denom: isSet(object.quote_asset_denom) ? String(object.quote_asset_denom) : ""
    };
  },
  toJSON(message: QuerySpotPriceRequest): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    message.base_asset_denom !== undefined && (obj.base_asset_denom = message.base_asset_denom);
    message.quote_asset_denom !== undefined && (obj.quote_asset_denom = message.quote_asset_denom);
    return obj;
  },
  fromPartial(object: Partial<QuerySpotPriceRequest>): QuerySpotPriceRequest {
    const message = createBaseQuerySpotPriceRequest();
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.base_asset_denom = object.base_asset_denom ?? "";
    message.quote_asset_denom = object.quote_asset_denom ?? "";
    return message;
  },
  fromSDK(object: QuerySpotPriceRequestSDKType): QuerySpotPriceRequest {
    return {
      pool_id: object?.pool_id,
      base_asset_denom: object?.base_asset_denom,
      quote_asset_denom: object?.quote_asset_denom
    };
  },
  toSDK(message: QuerySpotPriceRequest): QuerySpotPriceRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.pool_id;
    obj.base_asset_denom = message.base_asset_denom;
    obj.quote_asset_denom = message.quote_asset_denom;
    return obj;
  },
  fromAmino(object: QuerySpotPriceRequestAmino): QuerySpotPriceRequest {
    return {
      pool_id: BigInt(object.pool_id),
      base_asset_denom: object.base_asset_denom,
      quote_asset_denom: object.quote_asset_denom
    };
  },
  toAmino(message: QuerySpotPriceRequest): QuerySpotPriceRequestAmino {
    const obj: any = {};
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    obj.base_asset_denom = message.base_asset_denom;
    obj.quote_asset_denom = message.quote_asset_denom;
    return obj;
  },
  fromAminoMsg(object: QuerySpotPriceRequestAminoMsg): QuerySpotPriceRequest {
    return QuerySpotPriceRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySpotPriceRequest): QuerySpotPriceRequestAminoMsg {
    return {
      type: "osmosis/gamm/query-spot-price-request",
      value: QuerySpotPriceRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySpotPriceRequestProtoMsg): QuerySpotPriceRequest {
    return QuerySpotPriceRequest.decode(message.value);
  },
  toProto(message: QuerySpotPriceRequest): Uint8Array {
    return QuerySpotPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotPriceRequest): QuerySpotPriceRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceRequest",
      value: QuerySpotPriceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolsWithFilterRequest(): QueryPoolsWithFilterRequest {
  return {
    min_liquidity: [],
    pool_type: "",
    pagination: undefined
  };
}
export const QueryPoolsWithFilterRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest",
  encode(message: QueryPoolsWithFilterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.min_liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pool_type !== "") {
      writer.uint32(18).string(message.pool_type);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsWithFilterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsWithFilterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.min_liquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pool_type = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolsWithFilterRequest {
    return {
      min_liquidity: Array.isArray(object?.min_liquidity) ? object.min_liquidity.map((e: any) => Coin.fromJSON(e)) : [],
      pool_type: isSet(object.pool_type) ? String(object.pool_type) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPoolsWithFilterRequest): unknown {
    const obj: any = {};
    if (message.min_liquidity) {
      obj.min_liquidity = message.min_liquidity.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.min_liquidity = [];
    }
    message.pool_type !== undefined && (obj.pool_type = message.pool_type);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPoolsWithFilterRequest>): QueryPoolsWithFilterRequest {
    const message = createBaseQueryPoolsWithFilterRequest();
    message.min_liquidity = object.min_liquidity?.map(e => Coin.fromPartial(e)) || [];
    message.pool_type = object.pool_type ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryPoolsWithFilterRequestSDKType): QueryPoolsWithFilterRequest {
    return {
      min_liquidity: Array.isArray(object?.min_liquidity) ? object.min_liquidity.map((e: any) => Coin.fromSDK(e)) : [],
      pool_type: object?.pool_type,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryPoolsWithFilterRequest): QueryPoolsWithFilterRequestSDKType {
    const obj: any = {};
    if (message.min_liquidity) {
      obj.min_liquidity = message.min_liquidity.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.min_liquidity = [];
    }
    obj.pool_type = message.pool_type;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryPoolsWithFilterRequestAmino): QueryPoolsWithFilterRequest {
    return {
      min_liquidity: Array.isArray(object?.min_liquidity) ? object.min_liquidity.map((e: any) => Coin.fromAmino(e)) : [],
      pool_type: object.pool_type,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryPoolsWithFilterRequest): QueryPoolsWithFilterRequestAmino {
    const obj: any = {};
    if (message.min_liquidity) {
      obj.min_liquidity = message.min_liquidity.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.min_liquidity = [];
    }
    obj.pool_type = message.pool_type;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolsWithFilterRequestAminoMsg): QueryPoolsWithFilterRequest {
    return QueryPoolsWithFilterRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPoolsWithFilterRequest): QueryPoolsWithFilterRequestAminoMsg {
    return {
      type: "osmosis/gamm/query-pools-with-filter-request",
      value: QueryPoolsWithFilterRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPoolsWithFilterRequestProtoMsg): QueryPoolsWithFilterRequest {
    return QueryPoolsWithFilterRequest.decode(message.value);
  },
  toProto(message: QueryPoolsWithFilterRequest): Uint8Array {
    return QueryPoolsWithFilterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsWithFilterRequest): QueryPoolsWithFilterRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest",
      value: QueryPoolsWithFilterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolsWithFilterResponse(): QueryPoolsWithFilterResponse {
  return {
    pools: [],
    pagination: undefined
  };
}
export const QueryPoolsWithFilterResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse",
  encode(message: QueryPoolsWithFilterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Any.encode((v! as Any), writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsWithFilterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsWithFilterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push((PoolI_InterfaceDecoder(reader) as Any));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolsWithFilterResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPoolsWithFilterResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPoolsWithFilterResponse>): QueryPoolsWithFilterResponse {
    const message = createBaseQueryPoolsWithFilterResponse();
    message.pools = object.pools?.map(e => Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryPoolsWithFilterResponseSDKType): QueryPoolsWithFilterResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Any.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryPoolsWithFilterResponse): QueryPoolsWithFilterResponseSDKType {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryPoolsWithFilterResponseAmino): QueryPoolsWithFilterResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => PoolI_FromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryPoolsWithFilterResponse): QueryPoolsWithFilterResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? PoolI_ToAmino((e as Any)) : undefined);
    } else {
      obj.pools = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolsWithFilterResponseAminoMsg): QueryPoolsWithFilterResponse {
    return QueryPoolsWithFilterResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPoolsWithFilterResponse): QueryPoolsWithFilterResponseAminoMsg {
    return {
      type: "osmosis/gamm/query-pools-with-filter-response",
      value: QueryPoolsWithFilterResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPoolsWithFilterResponseProtoMsg): QueryPoolsWithFilterResponse {
    return QueryPoolsWithFilterResponse.decode(message.value);
  },
  toProto(message: QueryPoolsWithFilterResponse): Uint8Array {
    return QueryPoolsWithFilterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsWithFilterResponse): QueryPoolsWithFilterResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse",
      value: QueryPoolsWithFilterResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySpotPriceResponse(): QuerySpotPriceResponse {
  return {
    spot_price: ""
  };
}
export const QuerySpotPriceResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceResponse",
  encode(message: QuerySpotPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spot_price !== "") {
      writer.uint32(10).string(message.spot_price);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spot_price = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpotPriceResponse {
    return {
      spot_price: isSet(object.spot_price) ? String(object.spot_price) : ""
    };
  },
  toJSON(message: QuerySpotPriceResponse): unknown {
    const obj: any = {};
    message.spot_price !== undefined && (obj.spot_price = message.spot_price);
    return obj;
  },
  fromPartial(object: Partial<QuerySpotPriceResponse>): QuerySpotPriceResponse {
    const message = createBaseQuerySpotPriceResponse();
    message.spot_price = object.spot_price ?? "";
    return message;
  },
  fromSDK(object: QuerySpotPriceResponseSDKType): QuerySpotPriceResponse {
    return {
      spot_price: object?.spot_price
    };
  },
  toSDK(message: QuerySpotPriceResponse): QuerySpotPriceResponseSDKType {
    const obj: any = {};
    obj.spot_price = message.spot_price;
    return obj;
  },
  fromAmino(object: QuerySpotPriceResponseAmino): QuerySpotPriceResponse {
    return {
      spot_price: object.spot_price
    };
  },
  toAmino(message: QuerySpotPriceResponse): QuerySpotPriceResponseAmino {
    const obj: any = {};
    obj.spot_price = message.spot_price;
    return obj;
  },
  fromAminoMsg(object: QuerySpotPriceResponseAminoMsg): QuerySpotPriceResponse {
    return QuerySpotPriceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySpotPriceResponse): QuerySpotPriceResponseAminoMsg {
    return {
      type: "osmosis/gamm/query-spot-price-response",
      value: QuerySpotPriceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySpotPriceResponseProtoMsg): QuerySpotPriceResponse {
    return QuerySpotPriceResponse.decode(message.value);
  },
  toProto(message: QuerySpotPriceResponse): Uint8Array {
    return QuerySpotPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotPriceResponse): QuerySpotPriceResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceResponse",
      value: QuerySpotPriceResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySwapExactAmountInRequest(): QuerySwapExactAmountInRequest {
  return {
    sender: "",
    pool_id: BigInt(0),
    token_in: "",
    routes: []
  };
}
export const QuerySwapExactAmountInRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest",
  encode(message: QuerySwapExactAmountInRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(16).uint64(message.pool_id);
    }
    if (message.token_in !== "") {
      writer.uint32(26).string(message.token_in);
    }
    for (const v of message.routes) {
      SwapAmountInRoute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapExactAmountInRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.pool_id = reader.uint64();
          break;
        case 3:
          message.token_in = reader.string();
          break;
        case 4:
          message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySwapExactAmountInRequest {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      token_in: isSet(object.token_in) ? String(object.token_in) : "",
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySwapExactAmountInRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    message.token_in !== undefined && (obj.token_in = message.token_in);
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QuerySwapExactAmountInRequest>): QuerySwapExactAmountInRequest {
    const message = createBaseQuerySwapExactAmountInRequest();
    message.sender = object.sender ?? "";
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.token_in = object.token_in ?? "";
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QuerySwapExactAmountInRequestSDKType): QuerySwapExactAmountInRequest {
    return {
      sender: object?.sender,
      pool_id: object?.pool_id,
      token_in: object?.token_in,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromSDK(e)) : []
    };
  },
  toSDK(message: QuerySwapExactAmountInRequest): QuerySwapExactAmountInRequestSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.pool_id;
    obj.token_in = message.token_in;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toSDK(e) : undefined);
    } else {
      obj.routes = [];
    }
    return obj;
  },
  fromAmino(object: QuerySwapExactAmountInRequestAmino): QuerySwapExactAmountInRequest {
    return {
      sender: object.sender,
      pool_id: BigInt(object.pool_id),
      token_in: object.token_in,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromAmino(e)) : []
    };
  },
  toAmino(message: QuerySwapExactAmountInRequest): QuerySwapExactAmountInRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    obj.token_in = message.token_in;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
    } else {
      obj.routes = [];
    }
    return obj;
  },
  fromAminoMsg(object: QuerySwapExactAmountInRequestAminoMsg): QuerySwapExactAmountInRequest {
    return QuerySwapExactAmountInRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySwapExactAmountInRequest): QuerySwapExactAmountInRequestAminoMsg {
    return {
      type: "osmosis/gamm/query-swap-exact-amount-in-request",
      value: QuerySwapExactAmountInRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySwapExactAmountInRequestProtoMsg): QuerySwapExactAmountInRequest {
    return QuerySwapExactAmountInRequest.decode(message.value);
  },
  toProto(message: QuerySwapExactAmountInRequest): Uint8Array {
    return QuerySwapExactAmountInRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapExactAmountInRequest): QuerySwapExactAmountInRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest",
      value: QuerySwapExactAmountInRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySwapExactAmountInResponse(): QuerySwapExactAmountInResponse {
  return {
    token_out_amount: ""
  };
}
export const QuerySwapExactAmountInResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse",
  encode(message: QuerySwapExactAmountInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token_out_amount !== "") {
      writer.uint32(10).string(message.token_out_amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapExactAmountInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token_out_amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySwapExactAmountInResponse {
    return {
      token_out_amount: isSet(object.token_out_amount) ? String(object.token_out_amount) : ""
    };
  },
  toJSON(message: QuerySwapExactAmountInResponse): unknown {
    const obj: any = {};
    message.token_out_amount !== undefined && (obj.token_out_amount = message.token_out_amount);
    return obj;
  },
  fromPartial(object: Partial<QuerySwapExactAmountInResponse>): QuerySwapExactAmountInResponse {
    const message = createBaseQuerySwapExactAmountInResponse();
    message.token_out_amount = object.token_out_amount ?? "";
    return message;
  },
  fromSDK(object: QuerySwapExactAmountInResponseSDKType): QuerySwapExactAmountInResponse {
    return {
      token_out_amount: object?.token_out_amount
    };
  },
  toSDK(message: QuerySwapExactAmountInResponse): QuerySwapExactAmountInResponseSDKType {
    const obj: any = {};
    obj.token_out_amount = message.token_out_amount;
    return obj;
  },
  fromAmino(object: QuerySwapExactAmountInResponseAmino): QuerySwapExactAmountInResponse {
    return {
      token_out_amount: object.token_out_amount
    };
  },
  toAmino(message: QuerySwapExactAmountInResponse): QuerySwapExactAmountInResponseAmino {
    const obj: any = {};
    obj.token_out_amount = message.token_out_amount;
    return obj;
  },
  fromAminoMsg(object: QuerySwapExactAmountInResponseAminoMsg): QuerySwapExactAmountInResponse {
    return QuerySwapExactAmountInResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySwapExactAmountInResponse): QuerySwapExactAmountInResponseAminoMsg {
    return {
      type: "osmosis/gamm/query-swap-exact-amount-in-response",
      value: QuerySwapExactAmountInResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySwapExactAmountInResponseProtoMsg): QuerySwapExactAmountInResponse {
    return QuerySwapExactAmountInResponse.decode(message.value);
  },
  toProto(message: QuerySwapExactAmountInResponse): Uint8Array {
    return QuerySwapExactAmountInResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapExactAmountInResponse): QuerySwapExactAmountInResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse",
      value: QuerySwapExactAmountInResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySwapExactAmountOutRequest(): QuerySwapExactAmountOutRequest {
  return {
    sender: "",
    pool_id: BigInt(0),
    routes: [],
    token_out: ""
  };
}
export const QuerySwapExactAmountOutRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest",
  encode(message: QuerySwapExactAmountOutRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(16).uint64(message.pool_id);
    }
    for (const v of message.routes) {
      SwapAmountOutRoute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.token_out !== "") {
      writer.uint32(34).string(message.token_out);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapExactAmountOutRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.pool_id = reader.uint64();
          break;
        case 3:
          message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.token_out = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySwapExactAmountOutRequest {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromJSON(e)) : [],
      token_out: isSet(object.token_out) ? String(object.token_out) : ""
    };
  },
  toJSON(message: QuerySwapExactAmountOutRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }
    message.token_out !== undefined && (obj.token_out = message.token_out);
    return obj;
  },
  fromPartial(object: Partial<QuerySwapExactAmountOutRequest>): QuerySwapExactAmountOutRequest {
    const message = createBaseQuerySwapExactAmountOutRequest();
    message.sender = object.sender ?? "";
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.routes = object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
    message.token_out = object.token_out ?? "";
    return message;
  },
  fromSDK(object: QuerySwapExactAmountOutRequestSDKType): QuerySwapExactAmountOutRequest {
    return {
      sender: object?.sender,
      pool_id: object?.pool_id,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromSDK(e)) : [],
      token_out: object?.token_out
    };
  },
  toSDK(message: QuerySwapExactAmountOutRequest): QuerySwapExactAmountOutRequestSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.pool_id;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toSDK(e) : undefined);
    } else {
      obj.routes = [];
    }
    obj.token_out = message.token_out;
    return obj;
  },
  fromAmino(object: QuerySwapExactAmountOutRequestAmino): QuerySwapExactAmountOutRequest {
    return {
      sender: object.sender,
      pool_id: BigInt(object.pool_id),
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromAmino(e)) : [],
      token_out: object.token_out
    };
  },
  toAmino(message: QuerySwapExactAmountOutRequest): QuerySwapExactAmountOutRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
    } else {
      obj.routes = [];
    }
    obj.token_out = message.token_out;
    return obj;
  },
  fromAminoMsg(object: QuerySwapExactAmountOutRequestAminoMsg): QuerySwapExactAmountOutRequest {
    return QuerySwapExactAmountOutRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySwapExactAmountOutRequest): QuerySwapExactAmountOutRequestAminoMsg {
    return {
      type: "osmosis/gamm/query-swap-exact-amount-out-request",
      value: QuerySwapExactAmountOutRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySwapExactAmountOutRequestProtoMsg): QuerySwapExactAmountOutRequest {
    return QuerySwapExactAmountOutRequest.decode(message.value);
  },
  toProto(message: QuerySwapExactAmountOutRequest): Uint8Array {
    return QuerySwapExactAmountOutRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapExactAmountOutRequest): QuerySwapExactAmountOutRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest",
      value: QuerySwapExactAmountOutRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySwapExactAmountOutResponse(): QuerySwapExactAmountOutResponse {
  return {
    token_in_amount: ""
  };
}
export const QuerySwapExactAmountOutResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse",
  encode(message: QuerySwapExactAmountOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token_in_amount !== "") {
      writer.uint32(10).string(message.token_in_amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapExactAmountOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token_in_amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySwapExactAmountOutResponse {
    return {
      token_in_amount: isSet(object.token_in_amount) ? String(object.token_in_amount) : ""
    };
  },
  toJSON(message: QuerySwapExactAmountOutResponse): unknown {
    const obj: any = {};
    message.token_in_amount !== undefined && (obj.token_in_amount = message.token_in_amount);
    return obj;
  },
  fromPartial(object: Partial<QuerySwapExactAmountOutResponse>): QuerySwapExactAmountOutResponse {
    const message = createBaseQuerySwapExactAmountOutResponse();
    message.token_in_amount = object.token_in_amount ?? "";
    return message;
  },
  fromSDK(object: QuerySwapExactAmountOutResponseSDKType): QuerySwapExactAmountOutResponse {
    return {
      token_in_amount: object?.token_in_amount
    };
  },
  toSDK(message: QuerySwapExactAmountOutResponse): QuerySwapExactAmountOutResponseSDKType {
    const obj: any = {};
    obj.token_in_amount = message.token_in_amount;
    return obj;
  },
  fromAmino(object: QuerySwapExactAmountOutResponseAmino): QuerySwapExactAmountOutResponse {
    return {
      token_in_amount: object.token_in_amount
    };
  },
  toAmino(message: QuerySwapExactAmountOutResponse): QuerySwapExactAmountOutResponseAmino {
    const obj: any = {};
    obj.token_in_amount = message.token_in_amount;
    return obj;
  },
  fromAminoMsg(object: QuerySwapExactAmountOutResponseAminoMsg): QuerySwapExactAmountOutResponse {
    return QuerySwapExactAmountOutResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySwapExactAmountOutResponse): QuerySwapExactAmountOutResponseAminoMsg {
    return {
      type: "osmosis/gamm/query-swap-exact-amount-out-response",
      value: QuerySwapExactAmountOutResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySwapExactAmountOutResponseProtoMsg): QuerySwapExactAmountOutResponse {
    return QuerySwapExactAmountOutResponse.decode(message.value);
  },
  toProto(message: QuerySwapExactAmountOutResponse): Uint8Array {
    return QuerySwapExactAmountOutResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapExactAmountOutResponse): QuerySwapExactAmountOutResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse",
      value: QuerySwapExactAmountOutResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalLiquidityRequest(): QueryTotalLiquidityRequest {
  return {};
}
export const QueryTotalLiquidityRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityRequest",
  encode(_: QueryTotalLiquidityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLiquidityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryTotalLiquidityRequest {
    return {};
  },
  toJSON(_: QueryTotalLiquidityRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryTotalLiquidityRequest>): QueryTotalLiquidityRequest {
    const message = createBaseQueryTotalLiquidityRequest();
    return message;
  },
  fromSDK(_: QueryTotalLiquidityRequestSDKType): QueryTotalLiquidityRequest {
    return {};
  },
  toSDK(_: QueryTotalLiquidityRequest): QueryTotalLiquidityRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryTotalLiquidityRequestAmino): QueryTotalLiquidityRequest {
    return {};
  },
  toAmino(_: QueryTotalLiquidityRequest): QueryTotalLiquidityRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalLiquidityRequestAminoMsg): QueryTotalLiquidityRequest {
    return QueryTotalLiquidityRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalLiquidityRequest): QueryTotalLiquidityRequestAminoMsg {
    return {
      type: "osmosis/gamm/query-total-liquidity-request",
      value: QueryTotalLiquidityRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalLiquidityRequestProtoMsg): QueryTotalLiquidityRequest {
    return QueryTotalLiquidityRequest.decode(message.value);
  },
  toProto(message: QueryTotalLiquidityRequest): Uint8Array {
    return QueryTotalLiquidityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalLiquidityRequest): QueryTotalLiquidityRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityRequest",
      value: QueryTotalLiquidityRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalLiquidityResponse(): QueryTotalLiquidityResponse {
  return {
    liquidity: []
  };
}
export const QueryTotalLiquidityResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityResponse",
  encode(message: QueryTotalLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalLiquidityResponse {
    return {
      liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryTotalLiquidityResponse): unknown {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.liquidity = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryTotalLiquidityResponse>): QueryTotalLiquidityResponse {
    const message = createBaseQueryTotalLiquidityResponse();
    message.liquidity = object.liquidity?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryTotalLiquidityResponseSDKType): QueryTotalLiquidityResponse {
    return {
      liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryTotalLiquidityResponse): QueryTotalLiquidityResponseSDKType {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.liquidity = [];
    }
    return obj;
  },
  fromAmino(object: QueryTotalLiquidityResponseAmino): QueryTotalLiquidityResponse {
    return {
      liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryTotalLiquidityResponse): QueryTotalLiquidityResponseAmino {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.liquidity = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalLiquidityResponseAminoMsg): QueryTotalLiquidityResponse {
    return QueryTotalLiquidityResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalLiquidityResponse): QueryTotalLiquidityResponseAminoMsg {
    return {
      type: "osmosis/gamm/query-total-liquidity-response",
      value: QueryTotalLiquidityResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalLiquidityResponseProtoMsg): QueryTotalLiquidityResponse {
    return QueryTotalLiquidityResponse.decode(message.value);
  },
  toProto(message: QueryTotalLiquidityResponse): Uint8Array {
    return QueryTotalLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalLiquidityResponse): QueryTotalLiquidityResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityResponse",
      value: QueryTotalLiquidityResponse.encode(message).finish()
    };
  }
};
export const PoolI_InterfaceDecoder = (input: BinaryReader | Uint8Array): Pool1 | Pool2 | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/osmosis.gamm.v1beta1.Pool":
      return Pool1.decode(data.value);
    case "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool":
      return Pool2.decode(data.value);
    default:
      return data;
  }
};
export const PoolI_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "osmosis/gamm/BalancerPool":
      return Any.fromPartial({
        typeUrl: "/osmosis.gamm.v1beta1.Pool",
        value: Pool1.encode(Pool1.fromPartial(Pool1.fromAmino(content.value))).finish()
      });
    case "osmosis/gamm/StableswapPool":
      return Any.fromPartial({
        typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
        value: Pool2.encode(Pool2.fromPartial(Pool2.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const PoolI_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/osmosis.gamm.v1beta1.Pool":
      return {
        type: "osmosis/gamm/BalancerPool",
        value: Pool1.toAmino(Pool1.decode(content.value))
      };
    case "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool":
      return {
        type: "osmosis/gamm/StableswapPool",
        value: Pool2.toAmino(Pool2.decode(content.value))
      };
    default:
      return Any.toAmino(content);
  }
};