import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * ===================== MsgJoinPool
 * This is really MsgJoinPoolNoSwap
 */
export interface MsgJoinPool {
    sender: string;
    pool_id: bigint;
    share_out_amount: string;
    token_in_maxs: Coin[];
}
export interface MsgJoinPoolProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgJoinPool";
    value: Uint8Array;
}
export interface MsgJoinPoolProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgJoinPool";
    value: Uint8Array;
}
/**
 * ===================== MsgJoinPool
 * This is really MsgJoinPoolNoSwap
 */
export interface MsgJoinPoolAmino {
    sender: string;
    pool_id: string;
    share_out_amount: string;
    token_in_maxs: CoinAmino[];
}
export interface MsgJoinPoolAminoMsg {
    type: "osmosis/gamm/join-pool";
    value: MsgJoinPoolAmino;
}
/**
 * ===================== MsgJoinPool
 * This is really MsgJoinPoolNoSwap
 */
export interface MsgJoinPoolSDKType {
    sender: string;
    pool_id: bigint;
    share_out_amount: string;
    token_in_maxs: CoinSDKType[];
}
export interface MsgJoinPoolResponse {
    share_out_amount: string;
    token_in: Coin[];
}
export interface MsgJoinPoolResponseProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgJoinPoolResponse";
    value: Uint8Array;
}
export interface MsgJoinPoolResponseProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgJoinPoolResponse";
    value: Uint8Array;
}
export interface MsgJoinPoolResponseAmino {
    share_out_amount: string;
    token_in: CoinAmino[];
}
export interface MsgJoinPoolResponseAminoMsg {
    type: "osmosis/gamm/join-pool-response";
    value: MsgJoinPoolResponseAmino;
}
export interface MsgJoinPoolResponseSDKType {
    share_out_amount: string;
    token_in: CoinSDKType[];
}
/** ===================== MsgExitPool */
export interface MsgExitPool {
    sender: string;
    pool_id: bigint;
    share_in_amount: string;
    token_out_mins: Coin[];
}
export interface MsgExitPoolProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgExitPool";
    value: Uint8Array;
}
export interface MsgExitPoolProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgExitPool";
    value: Uint8Array;
}
/** ===================== MsgExitPool */
export interface MsgExitPoolAmino {
    sender: string;
    pool_id: string;
    share_in_amount: string;
    token_out_mins: CoinAmino[];
}
export interface MsgExitPoolAminoMsg {
    type: "osmosis/gamm/exit-pool";
    value: MsgExitPoolAmino;
}
/** ===================== MsgExitPool */
export interface MsgExitPoolSDKType {
    sender: string;
    pool_id: bigint;
    share_in_amount: string;
    token_out_mins: CoinSDKType[];
}
export interface MsgExitPoolResponse {
    token_out: Coin[];
}
export interface MsgExitPoolResponseProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgExitPoolResponse";
    value: Uint8Array;
}
export interface MsgExitPoolResponseProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgExitPoolResponse";
    value: Uint8Array;
}
export interface MsgExitPoolResponseAmino {
    token_out: CoinAmino[];
}
export interface MsgExitPoolResponseAminoMsg {
    type: "osmosis/gamm/exit-pool-response";
    value: MsgExitPoolResponseAmino;
}
export interface MsgExitPoolResponseSDKType {
    token_out: CoinSDKType[];
}
/** ===================== MsgSwapExactAmountIn */
export interface SwapAmountInRoute {
    pool_id: bigint;
    token_out_denom: string;
}
export interface SwapAmountInRouteProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.SwapAmountInRoute";
    value: Uint8Array;
}
export interface SwapAmountInRouteProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.SwapAmountInRoute";
    value: Uint8Array;
}
/** ===================== MsgSwapExactAmountIn */
export interface SwapAmountInRouteAmino {
    pool_id: string;
    token_out_denom: string;
}
export interface SwapAmountInRouteAminoMsg {
    type: "osmosis/gamm/swap-amount-in-route";
    value: SwapAmountInRouteAmino;
}
/** ===================== MsgSwapExactAmountIn */
export interface SwapAmountInRouteSDKType {
    pool_id: bigint;
    token_out_denom: string;
}
export interface MsgSwapExactAmountIn {
    sender: string;
    routes: SwapAmountInRoute[];
    token_in: Coin;
    token_out_min_amount: string;
}
export interface MsgSwapExactAmountInProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn";
    value: Uint8Array;
}
export interface MsgSwapExactAmountInProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn";
    value: Uint8Array;
}
export interface MsgSwapExactAmountInAmino {
    sender: string;
    routes: SwapAmountInRouteAmino[];
    token_in?: CoinAmino;
    token_out_min_amount: string;
}
export interface MsgSwapExactAmountInAminoMsg {
    type: "osmosis/gamm/swap-exact-amount-in";
    value: MsgSwapExactAmountInAmino;
}
export interface MsgSwapExactAmountInSDKType {
    sender: string;
    routes: SwapAmountInRouteSDKType[];
    token_in: CoinSDKType;
    token_out_min_amount: string;
}
export interface MsgSwapExactAmountInResponse {
    token_out_amount: string;
}
export interface MsgSwapExactAmountInResponseProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgSwapExactAmountInResponse";
    value: Uint8Array;
}
export interface MsgSwapExactAmountInResponseProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgSwapExactAmountInResponse";
    value: Uint8Array;
}
export interface MsgSwapExactAmountInResponseAmino {
    token_out_amount: string;
}
export interface MsgSwapExactAmountInResponseAminoMsg {
    type: "osmosis/gamm/swap-exact-amount-in-response";
    value: MsgSwapExactAmountInResponseAmino;
}
export interface MsgSwapExactAmountInResponseSDKType {
    token_out_amount: string;
}
/** ===================== MsgSwapExactAmountOut */
export interface SwapAmountOutRoute {
    pool_id: bigint;
    token_in_denom: string;
}
export interface SwapAmountOutRouteProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.SwapAmountOutRoute";
    value: Uint8Array;
}
export interface SwapAmountOutRouteProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.SwapAmountOutRoute";
    value: Uint8Array;
}
/** ===================== MsgSwapExactAmountOut */
export interface SwapAmountOutRouteAmino {
    pool_id: string;
    token_in_denom: string;
}
export interface SwapAmountOutRouteAminoMsg {
    type: "osmosis/gamm/swap-amount-out-route";
    value: SwapAmountOutRouteAmino;
}
/** ===================== MsgSwapExactAmountOut */
export interface SwapAmountOutRouteSDKType {
    pool_id: bigint;
    token_in_denom: string;
}
export interface MsgSwapExactAmountOut {
    sender: string;
    routes: SwapAmountOutRoute[];
    token_in_max_amount: string;
    token_out: Coin;
}
export interface MsgSwapExactAmountOutProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut";
    value: Uint8Array;
}
export interface MsgSwapExactAmountOutProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut";
    value: Uint8Array;
}
export interface MsgSwapExactAmountOutAmino {
    sender: string;
    routes: SwapAmountOutRouteAmino[];
    token_in_max_amount: string;
    token_out?: CoinAmino;
}
export interface MsgSwapExactAmountOutAminoMsg {
    type: "osmosis/gamm/swap-exact-amount-out";
    value: MsgSwapExactAmountOutAmino;
}
export interface MsgSwapExactAmountOutSDKType {
    sender: string;
    routes: SwapAmountOutRouteSDKType[];
    token_in_max_amount: string;
    token_out: CoinSDKType;
}
export interface MsgSwapExactAmountOutResponse {
    token_in_amount: string;
}
export interface MsgSwapExactAmountOutResponseProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOutResponse";
    value: Uint8Array;
}
export interface MsgSwapExactAmountOutResponseProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOutResponse";
    value: Uint8Array;
}
export interface MsgSwapExactAmountOutResponseAmino {
    token_in_amount: string;
}
export interface MsgSwapExactAmountOutResponseAminoMsg {
    type: "osmosis/gamm/swap-exact-amount-out-response";
    value: MsgSwapExactAmountOutResponseAmino;
}
export interface MsgSwapExactAmountOutResponseSDKType {
    token_in_amount: string;
}
/**
 * ===================== MsgJoinSwapExternAmountIn
 * TODO: Rename to MsgJoinSwapExactAmountIn
 */
export interface MsgJoinSwapExternAmountIn {
    sender: string;
    pool_id: bigint;
    token_in: Coin;
    share_out_min_amount: string;
}
export interface MsgJoinSwapExternAmountInProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn";
    value: Uint8Array;
}
export interface MsgJoinSwapExternAmountInProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn";
    value: Uint8Array;
}
/**
 * ===================== MsgJoinSwapExternAmountIn
 * TODO: Rename to MsgJoinSwapExactAmountIn
 */
export interface MsgJoinSwapExternAmountInAmino {
    sender: string;
    pool_id: string;
    token_in?: CoinAmino;
    share_out_min_amount: string;
}
export interface MsgJoinSwapExternAmountInAminoMsg {
    type: "osmosis/gamm/join-swap-extern-amount-in";
    value: MsgJoinSwapExternAmountInAmino;
}
/**
 * ===================== MsgJoinSwapExternAmountIn
 * TODO: Rename to MsgJoinSwapExactAmountIn
 */
export interface MsgJoinSwapExternAmountInSDKType {
    sender: string;
    pool_id: bigint;
    token_in: CoinSDKType;
    share_out_min_amount: string;
}
export interface MsgJoinSwapExternAmountInResponse {
    share_out_amount: string;
}
export interface MsgJoinSwapExternAmountInResponseProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountInResponse";
    value: Uint8Array;
}
export interface MsgJoinSwapExternAmountInResponseProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountInResponse";
    value: Uint8Array;
}
export interface MsgJoinSwapExternAmountInResponseAmino {
    share_out_amount: string;
}
export interface MsgJoinSwapExternAmountInResponseAminoMsg {
    type: "osmosis/gamm/join-swap-extern-amount-in-response";
    value: MsgJoinSwapExternAmountInResponseAmino;
}
export interface MsgJoinSwapExternAmountInResponseSDKType {
    share_out_amount: string;
}
/** ===================== MsgJoinSwapShareAmountOut */
export interface MsgJoinSwapShareAmountOut {
    sender: string;
    pool_id: bigint;
    token_in_denom: string;
    share_out_amount: string;
    token_in_max_amount: string;
}
export interface MsgJoinSwapShareAmountOutProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut";
    value: Uint8Array;
}
export interface MsgJoinSwapShareAmountOutProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut";
    value: Uint8Array;
}
/** ===================== MsgJoinSwapShareAmountOut */
export interface MsgJoinSwapShareAmountOutAmino {
    sender: string;
    pool_id: string;
    token_in_denom: string;
    share_out_amount: string;
    token_in_max_amount: string;
}
export interface MsgJoinSwapShareAmountOutAminoMsg {
    type: "osmosis/gamm/join-swap-share-amount-out";
    value: MsgJoinSwapShareAmountOutAmino;
}
/** ===================== MsgJoinSwapShareAmountOut */
export interface MsgJoinSwapShareAmountOutSDKType {
    sender: string;
    pool_id: bigint;
    token_in_denom: string;
    share_out_amount: string;
    token_in_max_amount: string;
}
export interface MsgJoinSwapShareAmountOutResponse {
    token_in_amount: string;
}
export interface MsgJoinSwapShareAmountOutResponseProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse";
    value: Uint8Array;
}
export interface MsgJoinSwapShareAmountOutResponseProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse";
    value: Uint8Array;
}
export interface MsgJoinSwapShareAmountOutResponseAmino {
    token_in_amount: string;
}
export interface MsgJoinSwapShareAmountOutResponseAminoMsg {
    type: "osmosis/gamm/join-swap-share-amount-out-response";
    value: MsgJoinSwapShareAmountOutResponseAmino;
}
export interface MsgJoinSwapShareAmountOutResponseSDKType {
    token_in_amount: string;
}
/** ===================== MsgExitSwapShareAmountIn */
export interface MsgExitSwapShareAmountIn {
    sender: string;
    pool_id: bigint;
    token_out_denom: string;
    share_in_amount: string;
    token_out_min_amount: string;
}
export interface MsgExitSwapShareAmountInProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn";
    value: Uint8Array;
}
export interface MsgExitSwapShareAmountInProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn";
    value: Uint8Array;
}
/** ===================== MsgExitSwapShareAmountIn */
export interface MsgExitSwapShareAmountInAmino {
    sender: string;
    pool_id: string;
    token_out_denom: string;
    share_in_amount: string;
    token_out_min_amount: string;
}
export interface MsgExitSwapShareAmountInAminoMsg {
    type: "osmosis/gamm/exit-swap-share-amount-in";
    value: MsgExitSwapShareAmountInAmino;
}
/** ===================== MsgExitSwapShareAmountIn */
export interface MsgExitSwapShareAmountInSDKType {
    sender: string;
    pool_id: bigint;
    token_out_denom: string;
    share_in_amount: string;
    token_out_min_amount: string;
}
export interface MsgExitSwapShareAmountInResponse {
    token_out_amount: string;
}
export interface MsgExitSwapShareAmountInResponseProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountInResponse";
    value: Uint8Array;
}
export interface MsgExitSwapShareAmountInResponseProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountInResponse";
    value: Uint8Array;
}
export interface MsgExitSwapShareAmountInResponseAmino {
    token_out_amount: string;
}
export interface MsgExitSwapShareAmountInResponseAminoMsg {
    type: "osmosis/gamm/exit-swap-share-amount-in-response";
    value: MsgExitSwapShareAmountInResponseAmino;
}
export interface MsgExitSwapShareAmountInResponseSDKType {
    token_out_amount: string;
}
/** ===================== MsgExitSwapExternAmountOut */
export interface MsgExitSwapExternAmountOut {
    sender: string;
    pool_id: bigint;
    token_out: Coin;
    share_in_max_amount: string;
}
export interface MsgExitSwapExternAmountOutProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut";
    value: Uint8Array;
}
export interface MsgExitSwapExternAmountOutProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut";
    value: Uint8Array;
}
/** ===================== MsgExitSwapExternAmountOut */
export interface MsgExitSwapExternAmountOutAmino {
    sender: string;
    pool_id: string;
    token_out?: CoinAmino;
    share_in_max_amount: string;
}
export interface MsgExitSwapExternAmountOutAminoMsg {
    type: "osmosis/gamm/exit-swap-extern-amount-out";
    value: MsgExitSwapExternAmountOutAmino;
}
/** ===================== MsgExitSwapExternAmountOut */
export interface MsgExitSwapExternAmountOutSDKType {
    sender: string;
    pool_id: bigint;
    token_out: CoinSDKType;
    share_in_max_amount: string;
}
export interface MsgExitSwapExternAmountOutResponse {
    share_in_amount: string;
}
export interface MsgExitSwapExternAmountOutResponseProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOutResponse";
    value: Uint8Array;
}
export interface MsgExitSwapExternAmountOutResponseProtoMsg {
    type_url: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOutResponse";
    value: Uint8Array;
}
export interface MsgExitSwapExternAmountOutResponseAmino {
    share_in_amount: string;
}
export interface MsgExitSwapExternAmountOutResponseAminoMsg {
    type: "osmosis/gamm/exit-swap-extern-amount-out-response";
    value: MsgExitSwapExternAmountOutResponseAmino;
}
export interface MsgExitSwapExternAmountOutResponseSDKType {
    share_in_amount: string;
}
export declare const MsgJoinPool: {
    typeUrl: string;
    encode(message: MsgJoinPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinPool;
    fromJSON(object: any): MsgJoinPool;
    toJSON(message: MsgJoinPool): unknown;
    fromPartial(object: Partial<MsgJoinPool>): MsgJoinPool;
    fromSDK(object: MsgJoinPoolSDKType): MsgJoinPool;
    toSDK(message: MsgJoinPool): MsgJoinPoolSDKType;
    fromAmino(object: MsgJoinPoolAmino): MsgJoinPool;
    toAmino(message: MsgJoinPool): MsgJoinPoolAmino;
    fromAminoMsg(object: MsgJoinPoolAminoMsg): MsgJoinPool;
    toAminoMsg(message: MsgJoinPool): MsgJoinPoolAminoMsg;
    fromProtoMsg(message: MsgJoinPoolProtoMsg): MsgJoinPool;
    toProto(message: MsgJoinPool): Uint8Array;
    toProtoMsg(message: MsgJoinPool): MsgJoinPoolProtoMsg;
};
export declare const MsgJoinPoolResponse: {
    typeUrl: string;
    encode(message: MsgJoinPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinPoolResponse;
    fromJSON(object: any): MsgJoinPoolResponse;
    toJSON(message: MsgJoinPoolResponse): unknown;
    fromPartial(object: Partial<MsgJoinPoolResponse>): MsgJoinPoolResponse;
    fromSDK(object: MsgJoinPoolResponseSDKType): MsgJoinPoolResponse;
    toSDK(message: MsgJoinPoolResponse): MsgJoinPoolResponseSDKType;
    fromAmino(object: MsgJoinPoolResponseAmino): MsgJoinPoolResponse;
    toAmino(message: MsgJoinPoolResponse): MsgJoinPoolResponseAmino;
    fromAminoMsg(object: MsgJoinPoolResponseAminoMsg): MsgJoinPoolResponse;
    toAminoMsg(message: MsgJoinPoolResponse): MsgJoinPoolResponseAminoMsg;
    fromProtoMsg(message: MsgJoinPoolResponseProtoMsg): MsgJoinPoolResponse;
    toProto(message: MsgJoinPoolResponse): Uint8Array;
    toProtoMsg(message: MsgJoinPoolResponse): MsgJoinPoolResponseProtoMsg;
};
export declare const MsgExitPool: {
    typeUrl: string;
    encode(message: MsgExitPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExitPool;
    fromJSON(object: any): MsgExitPool;
    toJSON(message: MsgExitPool): unknown;
    fromPartial(object: Partial<MsgExitPool>): MsgExitPool;
    fromSDK(object: MsgExitPoolSDKType): MsgExitPool;
    toSDK(message: MsgExitPool): MsgExitPoolSDKType;
    fromAmino(object: MsgExitPoolAmino): MsgExitPool;
    toAmino(message: MsgExitPool): MsgExitPoolAmino;
    fromAminoMsg(object: MsgExitPoolAminoMsg): MsgExitPool;
    toAminoMsg(message: MsgExitPool): MsgExitPoolAminoMsg;
    fromProtoMsg(message: MsgExitPoolProtoMsg): MsgExitPool;
    toProto(message: MsgExitPool): Uint8Array;
    toProtoMsg(message: MsgExitPool): MsgExitPoolProtoMsg;
};
export declare const MsgExitPoolResponse: {
    typeUrl: string;
    encode(message: MsgExitPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExitPoolResponse;
    fromJSON(object: any): MsgExitPoolResponse;
    toJSON(message: MsgExitPoolResponse): unknown;
    fromPartial(object: Partial<MsgExitPoolResponse>): MsgExitPoolResponse;
    fromSDK(object: MsgExitPoolResponseSDKType): MsgExitPoolResponse;
    toSDK(message: MsgExitPoolResponse): MsgExitPoolResponseSDKType;
    fromAmino(object: MsgExitPoolResponseAmino): MsgExitPoolResponse;
    toAmino(message: MsgExitPoolResponse): MsgExitPoolResponseAmino;
    fromAminoMsg(object: MsgExitPoolResponseAminoMsg): MsgExitPoolResponse;
    toAminoMsg(message: MsgExitPoolResponse): MsgExitPoolResponseAminoMsg;
    fromProtoMsg(message: MsgExitPoolResponseProtoMsg): MsgExitPoolResponse;
    toProto(message: MsgExitPoolResponse): Uint8Array;
    toProtoMsg(message: MsgExitPoolResponse): MsgExitPoolResponseProtoMsg;
};
export declare const SwapAmountInRoute: {
    typeUrl: string;
    encode(message: SwapAmountInRoute, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountInRoute;
    fromJSON(object: any): SwapAmountInRoute;
    toJSON(message: SwapAmountInRoute): unknown;
    fromPartial(object: Partial<SwapAmountInRoute>): SwapAmountInRoute;
    fromSDK(object: SwapAmountInRouteSDKType): SwapAmountInRoute;
    toSDK(message: SwapAmountInRoute): SwapAmountInRouteSDKType;
    fromAmino(object: SwapAmountInRouteAmino): SwapAmountInRoute;
    toAmino(message: SwapAmountInRoute): SwapAmountInRouteAmino;
    fromAminoMsg(object: SwapAmountInRouteAminoMsg): SwapAmountInRoute;
    toAminoMsg(message: SwapAmountInRoute): SwapAmountInRouteAminoMsg;
    fromProtoMsg(message: SwapAmountInRouteProtoMsg): SwapAmountInRoute;
    toProto(message: SwapAmountInRoute): Uint8Array;
    toProtoMsg(message: SwapAmountInRoute): SwapAmountInRouteProtoMsg;
};
export declare const MsgSwapExactAmountIn: {
    typeUrl: string;
    encode(message: MsgSwapExactAmountIn, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountIn;
    fromJSON(object: any): MsgSwapExactAmountIn;
    toJSON(message: MsgSwapExactAmountIn): unknown;
    fromPartial(object: Partial<MsgSwapExactAmountIn>): MsgSwapExactAmountIn;
    fromSDK(object: MsgSwapExactAmountInSDKType): MsgSwapExactAmountIn;
    toSDK(message: MsgSwapExactAmountIn): MsgSwapExactAmountInSDKType;
    fromAmino(object: MsgSwapExactAmountInAmino): MsgSwapExactAmountIn;
    toAmino(message: MsgSwapExactAmountIn): MsgSwapExactAmountInAmino;
    fromAminoMsg(object: MsgSwapExactAmountInAminoMsg): MsgSwapExactAmountIn;
    toAminoMsg(message: MsgSwapExactAmountIn): MsgSwapExactAmountInAminoMsg;
    fromProtoMsg(message: MsgSwapExactAmountInProtoMsg): MsgSwapExactAmountIn;
    toProto(message: MsgSwapExactAmountIn): Uint8Array;
    toProtoMsg(message: MsgSwapExactAmountIn): MsgSwapExactAmountInProtoMsg;
};
export declare const MsgSwapExactAmountInResponse: {
    typeUrl: string;
    encode(message: MsgSwapExactAmountInResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountInResponse;
    fromJSON(object: any): MsgSwapExactAmountInResponse;
    toJSON(message: MsgSwapExactAmountInResponse): unknown;
    fromPartial(object: Partial<MsgSwapExactAmountInResponse>): MsgSwapExactAmountInResponse;
    fromSDK(object: MsgSwapExactAmountInResponseSDKType): MsgSwapExactAmountInResponse;
    toSDK(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseSDKType;
    fromAmino(object: MsgSwapExactAmountInResponseAmino): MsgSwapExactAmountInResponse;
    toAmino(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseAmino;
    fromAminoMsg(object: MsgSwapExactAmountInResponseAminoMsg): MsgSwapExactAmountInResponse;
    toAminoMsg(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseAminoMsg;
    fromProtoMsg(message: MsgSwapExactAmountInResponseProtoMsg): MsgSwapExactAmountInResponse;
    toProto(message: MsgSwapExactAmountInResponse): Uint8Array;
    toProtoMsg(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseProtoMsg;
};
export declare const SwapAmountOutRoute: {
    typeUrl: string;
    encode(message: SwapAmountOutRoute, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountOutRoute;
    fromJSON(object: any): SwapAmountOutRoute;
    toJSON(message: SwapAmountOutRoute): unknown;
    fromPartial(object: Partial<SwapAmountOutRoute>): SwapAmountOutRoute;
    fromSDK(object: SwapAmountOutRouteSDKType): SwapAmountOutRoute;
    toSDK(message: SwapAmountOutRoute): SwapAmountOutRouteSDKType;
    fromAmino(object: SwapAmountOutRouteAmino): SwapAmountOutRoute;
    toAmino(message: SwapAmountOutRoute): SwapAmountOutRouteAmino;
    fromAminoMsg(object: SwapAmountOutRouteAminoMsg): SwapAmountOutRoute;
    toAminoMsg(message: SwapAmountOutRoute): SwapAmountOutRouteAminoMsg;
    fromProtoMsg(message: SwapAmountOutRouteProtoMsg): SwapAmountOutRoute;
    toProto(message: SwapAmountOutRoute): Uint8Array;
    toProtoMsg(message: SwapAmountOutRoute): SwapAmountOutRouteProtoMsg;
};
export declare const MsgSwapExactAmountOut: {
    typeUrl: string;
    encode(message: MsgSwapExactAmountOut, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountOut;
    fromJSON(object: any): MsgSwapExactAmountOut;
    toJSON(message: MsgSwapExactAmountOut): unknown;
    fromPartial(object: Partial<MsgSwapExactAmountOut>): MsgSwapExactAmountOut;
    fromSDK(object: MsgSwapExactAmountOutSDKType): MsgSwapExactAmountOut;
    toSDK(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutSDKType;
    fromAmino(object: MsgSwapExactAmountOutAmino): MsgSwapExactAmountOut;
    toAmino(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutAmino;
    fromAminoMsg(object: MsgSwapExactAmountOutAminoMsg): MsgSwapExactAmountOut;
    toAminoMsg(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutAminoMsg;
    fromProtoMsg(message: MsgSwapExactAmountOutProtoMsg): MsgSwapExactAmountOut;
    toProto(message: MsgSwapExactAmountOut): Uint8Array;
    toProtoMsg(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutProtoMsg;
};
export declare const MsgSwapExactAmountOutResponse: {
    typeUrl: string;
    encode(message: MsgSwapExactAmountOutResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountOutResponse;
    fromJSON(object: any): MsgSwapExactAmountOutResponse;
    toJSON(message: MsgSwapExactAmountOutResponse): unknown;
    fromPartial(object: Partial<MsgSwapExactAmountOutResponse>): MsgSwapExactAmountOutResponse;
    fromSDK(object: MsgSwapExactAmountOutResponseSDKType): MsgSwapExactAmountOutResponse;
    toSDK(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseSDKType;
    fromAmino(object: MsgSwapExactAmountOutResponseAmino): MsgSwapExactAmountOutResponse;
    toAmino(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseAmino;
    fromAminoMsg(object: MsgSwapExactAmountOutResponseAminoMsg): MsgSwapExactAmountOutResponse;
    toAminoMsg(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseAminoMsg;
    fromProtoMsg(message: MsgSwapExactAmountOutResponseProtoMsg): MsgSwapExactAmountOutResponse;
    toProto(message: MsgSwapExactAmountOutResponse): Uint8Array;
    toProtoMsg(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseProtoMsg;
};
export declare const MsgJoinSwapExternAmountIn: {
    typeUrl: string;
    encode(message: MsgJoinSwapExternAmountIn, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinSwapExternAmountIn;
    fromJSON(object: any): MsgJoinSwapExternAmountIn;
    toJSON(message: MsgJoinSwapExternAmountIn): unknown;
    fromPartial(object: Partial<MsgJoinSwapExternAmountIn>): MsgJoinSwapExternAmountIn;
    fromSDK(object: MsgJoinSwapExternAmountInSDKType): MsgJoinSwapExternAmountIn;
    toSDK(message: MsgJoinSwapExternAmountIn): MsgJoinSwapExternAmountInSDKType;
    fromAmino(object: MsgJoinSwapExternAmountInAmino): MsgJoinSwapExternAmountIn;
    toAmino(message: MsgJoinSwapExternAmountIn): MsgJoinSwapExternAmountInAmino;
    fromAminoMsg(object: MsgJoinSwapExternAmountInAminoMsg): MsgJoinSwapExternAmountIn;
    toAminoMsg(message: MsgJoinSwapExternAmountIn): MsgJoinSwapExternAmountInAminoMsg;
    fromProtoMsg(message: MsgJoinSwapExternAmountInProtoMsg): MsgJoinSwapExternAmountIn;
    toProto(message: MsgJoinSwapExternAmountIn): Uint8Array;
    toProtoMsg(message: MsgJoinSwapExternAmountIn): MsgJoinSwapExternAmountInProtoMsg;
};
export declare const MsgJoinSwapExternAmountInResponse: {
    typeUrl: string;
    encode(message: MsgJoinSwapExternAmountInResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinSwapExternAmountInResponse;
    fromJSON(object: any): MsgJoinSwapExternAmountInResponse;
    toJSON(message: MsgJoinSwapExternAmountInResponse): unknown;
    fromPartial(object: Partial<MsgJoinSwapExternAmountInResponse>): MsgJoinSwapExternAmountInResponse;
    fromSDK(object: MsgJoinSwapExternAmountInResponseSDKType): MsgJoinSwapExternAmountInResponse;
    toSDK(message: MsgJoinSwapExternAmountInResponse): MsgJoinSwapExternAmountInResponseSDKType;
    fromAmino(object: MsgJoinSwapExternAmountInResponseAmino): MsgJoinSwapExternAmountInResponse;
    toAmino(message: MsgJoinSwapExternAmountInResponse): MsgJoinSwapExternAmountInResponseAmino;
    fromAminoMsg(object: MsgJoinSwapExternAmountInResponseAminoMsg): MsgJoinSwapExternAmountInResponse;
    toAminoMsg(message: MsgJoinSwapExternAmountInResponse): MsgJoinSwapExternAmountInResponseAminoMsg;
    fromProtoMsg(message: MsgJoinSwapExternAmountInResponseProtoMsg): MsgJoinSwapExternAmountInResponse;
    toProto(message: MsgJoinSwapExternAmountInResponse): Uint8Array;
    toProtoMsg(message: MsgJoinSwapExternAmountInResponse): MsgJoinSwapExternAmountInResponseProtoMsg;
};
export declare const MsgJoinSwapShareAmountOut: {
    typeUrl: string;
    encode(message: MsgJoinSwapShareAmountOut, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinSwapShareAmountOut;
    fromJSON(object: any): MsgJoinSwapShareAmountOut;
    toJSON(message: MsgJoinSwapShareAmountOut): unknown;
    fromPartial(object: Partial<MsgJoinSwapShareAmountOut>): MsgJoinSwapShareAmountOut;
    fromSDK(object: MsgJoinSwapShareAmountOutSDKType): MsgJoinSwapShareAmountOut;
    toSDK(message: MsgJoinSwapShareAmountOut): MsgJoinSwapShareAmountOutSDKType;
    fromAmino(object: MsgJoinSwapShareAmountOutAmino): MsgJoinSwapShareAmountOut;
    toAmino(message: MsgJoinSwapShareAmountOut): MsgJoinSwapShareAmountOutAmino;
    fromAminoMsg(object: MsgJoinSwapShareAmountOutAminoMsg): MsgJoinSwapShareAmountOut;
    toAminoMsg(message: MsgJoinSwapShareAmountOut): MsgJoinSwapShareAmountOutAminoMsg;
    fromProtoMsg(message: MsgJoinSwapShareAmountOutProtoMsg): MsgJoinSwapShareAmountOut;
    toProto(message: MsgJoinSwapShareAmountOut): Uint8Array;
    toProtoMsg(message: MsgJoinSwapShareAmountOut): MsgJoinSwapShareAmountOutProtoMsg;
};
export declare const MsgJoinSwapShareAmountOutResponse: {
    typeUrl: string;
    encode(message: MsgJoinSwapShareAmountOutResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinSwapShareAmountOutResponse;
    fromJSON(object: any): MsgJoinSwapShareAmountOutResponse;
    toJSON(message: MsgJoinSwapShareAmountOutResponse): unknown;
    fromPartial(object: Partial<MsgJoinSwapShareAmountOutResponse>): MsgJoinSwapShareAmountOutResponse;
    fromSDK(object: MsgJoinSwapShareAmountOutResponseSDKType): MsgJoinSwapShareAmountOutResponse;
    toSDK(message: MsgJoinSwapShareAmountOutResponse): MsgJoinSwapShareAmountOutResponseSDKType;
    fromAmino(object: MsgJoinSwapShareAmountOutResponseAmino): MsgJoinSwapShareAmountOutResponse;
    toAmino(message: MsgJoinSwapShareAmountOutResponse): MsgJoinSwapShareAmountOutResponseAmino;
    fromAminoMsg(object: MsgJoinSwapShareAmountOutResponseAminoMsg): MsgJoinSwapShareAmountOutResponse;
    toAminoMsg(message: MsgJoinSwapShareAmountOutResponse): MsgJoinSwapShareAmountOutResponseAminoMsg;
    fromProtoMsg(message: MsgJoinSwapShareAmountOutResponseProtoMsg): MsgJoinSwapShareAmountOutResponse;
    toProto(message: MsgJoinSwapShareAmountOutResponse): Uint8Array;
    toProtoMsg(message: MsgJoinSwapShareAmountOutResponse): MsgJoinSwapShareAmountOutResponseProtoMsg;
};
export declare const MsgExitSwapShareAmountIn: {
    typeUrl: string;
    encode(message: MsgExitSwapShareAmountIn, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExitSwapShareAmountIn;
    fromJSON(object: any): MsgExitSwapShareAmountIn;
    toJSON(message: MsgExitSwapShareAmountIn): unknown;
    fromPartial(object: Partial<MsgExitSwapShareAmountIn>): MsgExitSwapShareAmountIn;
    fromSDK(object: MsgExitSwapShareAmountInSDKType): MsgExitSwapShareAmountIn;
    toSDK(message: MsgExitSwapShareAmountIn): MsgExitSwapShareAmountInSDKType;
    fromAmino(object: MsgExitSwapShareAmountInAmino): MsgExitSwapShareAmountIn;
    toAmino(message: MsgExitSwapShareAmountIn): MsgExitSwapShareAmountInAmino;
    fromAminoMsg(object: MsgExitSwapShareAmountInAminoMsg): MsgExitSwapShareAmountIn;
    toAminoMsg(message: MsgExitSwapShareAmountIn): MsgExitSwapShareAmountInAminoMsg;
    fromProtoMsg(message: MsgExitSwapShareAmountInProtoMsg): MsgExitSwapShareAmountIn;
    toProto(message: MsgExitSwapShareAmountIn): Uint8Array;
    toProtoMsg(message: MsgExitSwapShareAmountIn): MsgExitSwapShareAmountInProtoMsg;
};
export declare const MsgExitSwapShareAmountInResponse: {
    typeUrl: string;
    encode(message: MsgExitSwapShareAmountInResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExitSwapShareAmountInResponse;
    fromJSON(object: any): MsgExitSwapShareAmountInResponse;
    toJSON(message: MsgExitSwapShareAmountInResponse): unknown;
    fromPartial(object: Partial<MsgExitSwapShareAmountInResponse>): MsgExitSwapShareAmountInResponse;
    fromSDK(object: MsgExitSwapShareAmountInResponseSDKType): MsgExitSwapShareAmountInResponse;
    toSDK(message: MsgExitSwapShareAmountInResponse): MsgExitSwapShareAmountInResponseSDKType;
    fromAmino(object: MsgExitSwapShareAmountInResponseAmino): MsgExitSwapShareAmountInResponse;
    toAmino(message: MsgExitSwapShareAmountInResponse): MsgExitSwapShareAmountInResponseAmino;
    fromAminoMsg(object: MsgExitSwapShareAmountInResponseAminoMsg): MsgExitSwapShareAmountInResponse;
    toAminoMsg(message: MsgExitSwapShareAmountInResponse): MsgExitSwapShareAmountInResponseAminoMsg;
    fromProtoMsg(message: MsgExitSwapShareAmountInResponseProtoMsg): MsgExitSwapShareAmountInResponse;
    toProto(message: MsgExitSwapShareAmountInResponse): Uint8Array;
    toProtoMsg(message: MsgExitSwapShareAmountInResponse): MsgExitSwapShareAmountInResponseProtoMsg;
};
export declare const MsgExitSwapExternAmountOut: {
    typeUrl: string;
    encode(message: MsgExitSwapExternAmountOut, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExitSwapExternAmountOut;
    fromJSON(object: any): MsgExitSwapExternAmountOut;
    toJSON(message: MsgExitSwapExternAmountOut): unknown;
    fromPartial(object: Partial<MsgExitSwapExternAmountOut>): MsgExitSwapExternAmountOut;
    fromSDK(object: MsgExitSwapExternAmountOutSDKType): MsgExitSwapExternAmountOut;
    toSDK(message: MsgExitSwapExternAmountOut): MsgExitSwapExternAmountOutSDKType;
    fromAmino(object: MsgExitSwapExternAmountOutAmino): MsgExitSwapExternAmountOut;
    toAmino(message: MsgExitSwapExternAmountOut): MsgExitSwapExternAmountOutAmino;
    fromAminoMsg(object: MsgExitSwapExternAmountOutAminoMsg): MsgExitSwapExternAmountOut;
    toAminoMsg(message: MsgExitSwapExternAmountOut): MsgExitSwapExternAmountOutAminoMsg;
    fromProtoMsg(message: MsgExitSwapExternAmountOutProtoMsg): MsgExitSwapExternAmountOut;
    toProto(message: MsgExitSwapExternAmountOut): Uint8Array;
    toProtoMsg(message: MsgExitSwapExternAmountOut): MsgExitSwapExternAmountOutProtoMsg;
};
export declare const MsgExitSwapExternAmountOutResponse: {
    typeUrl: string;
    encode(message: MsgExitSwapExternAmountOutResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExitSwapExternAmountOutResponse;
    fromJSON(object: any): MsgExitSwapExternAmountOutResponse;
    toJSON(message: MsgExitSwapExternAmountOutResponse): unknown;
    fromPartial(object: Partial<MsgExitSwapExternAmountOutResponse>): MsgExitSwapExternAmountOutResponse;
    fromSDK(object: MsgExitSwapExternAmountOutResponseSDKType): MsgExitSwapExternAmountOutResponse;
    toSDK(message: MsgExitSwapExternAmountOutResponse): MsgExitSwapExternAmountOutResponseSDKType;
    fromAmino(object: MsgExitSwapExternAmountOutResponseAmino): MsgExitSwapExternAmountOutResponse;
    toAmino(message: MsgExitSwapExternAmountOutResponse): MsgExitSwapExternAmountOutResponseAmino;
    fromAminoMsg(object: MsgExitSwapExternAmountOutResponseAminoMsg): MsgExitSwapExternAmountOutResponse;
    toAminoMsg(message: MsgExitSwapExternAmountOutResponse): MsgExitSwapExternAmountOutResponseAminoMsg;
    fromProtoMsg(message: MsgExitSwapExternAmountOutResponseProtoMsg): MsgExitSwapExternAmountOutResponse;
    toProto(message: MsgExitSwapExternAmountOutResponse): Uint8Array;
    toProtoMsg(message: MsgExitSwapExternAmountOutResponse): MsgExitSwapExternAmountOutResponseProtoMsg;
};
