import { PoolParams, PoolParamsAmino, PoolParamsSDKType, PoolAsset, PoolAssetAmino, PoolAssetSDKType } from "../balancerPool";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
/** ===================== MsgCreatePool */
export interface MsgCreateBalancerPool {
    sender: string;
    pool_params?: PoolParams;
    pool_assets: PoolAsset[];
    future_pool_governor: string;
}
export interface MsgCreateBalancerPoolProtoMsg {
    type_url: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool";
    value: Uint8Array;
}
export interface MsgCreateBalancerPoolProtoMsg {
    type_url: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool";
    value: Uint8Array;
}
/** ===================== MsgCreatePool */
export interface MsgCreateBalancerPoolAmino {
    sender: string;
    pool_params?: PoolParamsAmino;
    pool_assets: PoolAssetAmino[];
    future_pool_governor: string;
}
export interface MsgCreateBalancerPoolAminoMsg {
    type: "osmosis/gamm/create-balancer-pool";
    value: MsgCreateBalancerPoolAmino;
}
/** ===================== MsgCreatePool */
export interface MsgCreateBalancerPoolSDKType {
    sender: string;
    pool_params?: PoolParamsSDKType;
    pool_assets: PoolAssetSDKType[];
    future_pool_governor: string;
}
/** Returns the poolID */
export interface MsgCreateBalancerPoolResponse {
    pool_id: bigint;
}
export interface MsgCreateBalancerPoolResponseProtoMsg {
    type_url: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPoolResponse";
    value: Uint8Array;
}
export interface MsgCreateBalancerPoolResponseProtoMsg {
    type_url: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPoolResponse";
    value: Uint8Array;
}
/** Returns the poolID */
export interface MsgCreateBalancerPoolResponseAmino {
    pool_id: string;
}
export interface MsgCreateBalancerPoolResponseAminoMsg {
    type: "osmosis/gamm/poolmodels/balancer/create-balancer-pool-response";
    value: MsgCreateBalancerPoolResponseAmino;
}
/** Returns the poolID */
export interface MsgCreateBalancerPoolResponseSDKType {
    pool_id: bigint;
}
export declare const MsgCreateBalancerPool: {
    typeUrl: string;
    encode(message: MsgCreateBalancerPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBalancerPool;
    fromJSON(object: any): MsgCreateBalancerPool;
    toJSON(message: MsgCreateBalancerPool): unknown;
    fromPartial(object: Partial<MsgCreateBalancerPool>): MsgCreateBalancerPool;
    fromSDK(object: MsgCreateBalancerPoolSDKType): MsgCreateBalancerPool;
    toSDK(message: MsgCreateBalancerPool): MsgCreateBalancerPoolSDKType;
    fromAmino(object: MsgCreateBalancerPoolAmino): MsgCreateBalancerPool;
    toAmino(message: MsgCreateBalancerPool): MsgCreateBalancerPoolAmino;
    fromAminoMsg(object: MsgCreateBalancerPoolAminoMsg): MsgCreateBalancerPool;
    toAminoMsg(message: MsgCreateBalancerPool): MsgCreateBalancerPoolAminoMsg;
    fromProtoMsg(message: MsgCreateBalancerPoolProtoMsg): MsgCreateBalancerPool;
    toProto(message: MsgCreateBalancerPool): Uint8Array;
    toProtoMsg(message: MsgCreateBalancerPool): MsgCreateBalancerPoolProtoMsg;
};
export declare const MsgCreateBalancerPoolResponse: {
    typeUrl: string;
    encode(message: MsgCreateBalancerPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBalancerPoolResponse;
    fromJSON(object: any): MsgCreateBalancerPoolResponse;
    toJSON(message: MsgCreateBalancerPoolResponse): unknown;
    fromPartial(object: Partial<MsgCreateBalancerPoolResponse>): MsgCreateBalancerPoolResponse;
    fromSDK(object: MsgCreateBalancerPoolResponseSDKType): MsgCreateBalancerPoolResponse;
    toSDK(message: MsgCreateBalancerPoolResponse): MsgCreateBalancerPoolResponseSDKType;
    fromAmino(object: MsgCreateBalancerPoolResponseAmino): MsgCreateBalancerPoolResponse;
    toAmino(message: MsgCreateBalancerPoolResponse): MsgCreateBalancerPoolResponseAmino;
    fromAminoMsg(object: MsgCreateBalancerPoolResponseAminoMsg): MsgCreateBalancerPoolResponse;
    toAminoMsg(message: MsgCreateBalancerPoolResponse): MsgCreateBalancerPoolResponseAminoMsg;
    fromProtoMsg(message: MsgCreateBalancerPoolResponseProtoMsg): MsgCreateBalancerPoolResponse;
    toProto(message: MsgCreateBalancerPoolResponse): Uint8Array;
    toProtoMsg(message: MsgCreateBalancerPoolResponse): MsgCreateBalancerPoolResponseProtoMsg;
};
