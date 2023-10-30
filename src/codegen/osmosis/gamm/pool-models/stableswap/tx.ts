//@ts-nocheck
import { PoolParams, PoolParamsAmino, PoolParamsSDKType } from "./stableswap_pool";
import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
/** ===================== MsgCreatePool */
export interface MsgCreateStableswapPool {
  sender: string;
  pool_params?: PoolParams;
  initial_pool_liquidity: Coin[];
  scaling_factors: bigint[];
  future_pool_governor: string;
  scaling_factor_controller: string;
}
export interface MsgCreateStableswapPoolProtoMsg {
  type_url: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool";
  value: Uint8Array;
}
export interface MsgCreateStableswapPoolProtoMsg {
  type_url: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool";
  value: Uint8Array;
}
/** ===================== MsgCreatePool */
export interface MsgCreateStableswapPoolAmino {
  sender: string;
  pool_params?: PoolParamsAmino;
  initial_pool_liquidity: CoinAmino[];
  scaling_factors: string[];
  future_pool_governor: string;
  scaling_factor_controller: string;
}
export interface MsgCreateStableswapPoolAminoMsg {
  type: "osmosis/gamm/create-stableswap-pool";
  value: MsgCreateStableswapPoolAmino;
}
/** ===================== MsgCreatePool */
export interface MsgCreateStableswapPoolSDKType {
  sender: string;
  pool_params?: PoolParamsSDKType;
  initial_pool_liquidity: CoinSDKType[];
  scaling_factors: bigint[];
  future_pool_governor: string;
  scaling_factor_controller: string;
}
/** Returns a poolID with custom poolName. */
export interface MsgCreateStableswapPoolResponse {
  pool_id: bigint;
}
export interface MsgCreateStableswapPoolResponseProtoMsg {
  type_url: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPoolResponse";
  value: Uint8Array;
}
export interface MsgCreateStableswapPoolResponseProtoMsg {
  type_url: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPoolResponse";
  value: Uint8Array;
}
/** Returns a poolID with custom poolName. */
export interface MsgCreateStableswapPoolResponseAmino {
  pool_id: string;
}
export interface MsgCreateStableswapPoolResponseAminoMsg {
  type: "osmosis/gamm/create-stableswap-pool-response";
  value: MsgCreateStableswapPoolResponseAmino;
}
/** Returns a poolID with custom poolName. */
export interface MsgCreateStableswapPoolResponseSDKType {
  pool_id: bigint;
}
/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 */
export interface MsgStableSwapAdjustScalingFactors {
  sender: string;
  pool_id: bigint;
  scaling_factors: bigint[];
}
export interface MsgStableSwapAdjustScalingFactorsProtoMsg {
  type_url: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors";
  value: Uint8Array;
}
export interface MsgStableSwapAdjustScalingFactorsProtoMsg {
  type_url: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors";
  value: Uint8Array;
}
/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 */
export interface MsgStableSwapAdjustScalingFactorsAmino {
  sender: string;
  pool_id: string;
  scaling_factors: string[];
}
export interface MsgStableSwapAdjustScalingFactorsAminoMsg {
  type: "osmosis/gamm/stableswap-adjust-scaling-factors";
  value: MsgStableSwapAdjustScalingFactorsAmino;
}
/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 */
export interface MsgStableSwapAdjustScalingFactorsSDKType {
  sender: string;
  pool_id: bigint;
  scaling_factors: bigint[];
}
export interface MsgStableSwapAdjustScalingFactorsResponse {}
export interface MsgStableSwapAdjustScalingFactorsResponseProtoMsg {
  type_url: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactorsResponse";
  value: Uint8Array;
}
export interface MsgStableSwapAdjustScalingFactorsResponseProtoMsg {
  type_url: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactorsResponse";
  value: Uint8Array;
}
export interface MsgStableSwapAdjustScalingFactorsResponseAmino {}
export interface MsgStableSwapAdjustScalingFactorsResponseAminoMsg {
  type: "osmosis/gamm/stable-swap-adjust-scaling-factors-response";
  value: MsgStableSwapAdjustScalingFactorsResponseAmino;
}
export interface MsgStableSwapAdjustScalingFactorsResponseSDKType {}
function createBaseMsgCreateStableswapPool(): MsgCreateStableswapPool {
  return {
    sender: "",
    pool_params: undefined,
    initial_pool_liquidity: [],
    scaling_factors: [],
    future_pool_governor: "",
    scaling_factor_controller: ""
  };
}
export const MsgCreateStableswapPool = {
  typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
  encode(message: MsgCreateStableswapPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.pool_params !== undefined) {
      PoolParams.encode(message.pool_params, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.initial_pool_liquidity) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.scaling_factors) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.future_pool_governor !== "") {
      writer.uint32(42).string(message.future_pool_governor);
    }
    if (message.scaling_factor_controller !== "") {
      writer.uint32(50).string(message.scaling_factor_controller);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateStableswapPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStableswapPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.pool_params = PoolParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.initial_pool_liquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.scaling_factors.push(reader.uint64());
            }
          } else {
            message.scaling_factors.push(reader.uint64());
          }
          break;
        case 5:
          message.future_pool_governor = reader.string();
          break;
        case 6:
          message.scaling_factor_controller = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateStableswapPool {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      pool_params: isSet(object.pool_params) ? PoolParams.fromJSON(object.pool_params) : undefined,
      initial_pool_liquidity: Array.isArray(object?.initial_pool_liquidity) ? object.initial_pool_liquidity.map((e: any) => Coin.fromJSON(e)) : [],
      scaling_factors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e: any) => BigInt(e.toString())) : [],
      future_pool_governor: isSet(object.future_pool_governor) ? String(object.future_pool_governor) : "",
      scaling_factor_controller: isSet(object.scaling_factor_controller) ? String(object.scaling_factor_controller) : ""
    };
  },
  toJSON(message: MsgCreateStableswapPool): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.pool_params !== undefined && (obj.pool_params = message.pool_params ? PoolParams.toJSON(message.pool_params) : undefined);
    if (message.initial_pool_liquidity) {
      obj.initial_pool_liquidity = message.initial_pool_liquidity.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.initial_pool_liquidity = [];
    }
    if (message.scaling_factors) {
      obj.scaling_factors = message.scaling_factors.map(e => (e || BigInt(0)).toString());
    } else {
      obj.scaling_factors = [];
    }
    message.future_pool_governor !== undefined && (obj.future_pool_governor = message.future_pool_governor);
    message.scaling_factor_controller !== undefined && (obj.scaling_factor_controller = message.scaling_factor_controller);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateStableswapPool>): MsgCreateStableswapPool {
    const message = createBaseMsgCreateStableswapPool();
    message.sender = object.sender ?? "";
    message.pool_params = object.pool_params !== undefined && object.pool_params !== null ? PoolParams.fromPartial(object.pool_params) : undefined;
    message.initial_pool_liquidity = object.initial_pool_liquidity?.map(e => Coin.fromPartial(e)) || [];
    message.scaling_factors = object.scaling_factors?.map(e => BigInt(e.toString())) || [];
    message.future_pool_governor = object.future_pool_governor ?? "";
    message.scaling_factor_controller = object.scaling_factor_controller ?? "";
    return message;
  },
  fromSDK(object: MsgCreateStableswapPoolSDKType): MsgCreateStableswapPool {
    return {
      sender: object?.sender,
      pool_params: object.pool_params ? PoolParams.fromSDK(object.pool_params) : undefined,
      initial_pool_liquidity: Array.isArray(object?.initial_pool_liquidity) ? object.initial_pool_liquidity.map((e: any) => Coin.fromSDK(e)) : [],
      scaling_factors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e: any) => e) : [],
      future_pool_governor: object?.future_pool_governor,
      scaling_factor_controller: object?.scaling_factor_controller
    };
  },
  toSDK(message: MsgCreateStableswapPool): MsgCreateStableswapPoolSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    message.pool_params !== undefined && (obj.pool_params = message.pool_params ? PoolParams.toSDK(message.pool_params) : undefined);
    if (message.initial_pool_liquidity) {
      obj.initial_pool_liquidity = message.initial_pool_liquidity.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.initial_pool_liquidity = [];
    }
    if (message.scaling_factors) {
      obj.scaling_factors = message.scaling_factors.map(e => e);
    } else {
      obj.scaling_factors = [];
    }
    obj.future_pool_governor = message.future_pool_governor;
    obj.scaling_factor_controller = message.scaling_factor_controller;
    return obj;
  },
  fromAmino(object: MsgCreateStableswapPoolAmino): MsgCreateStableswapPool {
    return {
      sender: object.sender,
      pool_params: object?.pool_params ? PoolParams.fromAmino(object.pool_params) : undefined,
      initial_pool_liquidity: Array.isArray(object?.initial_pool_liquidity) ? object.initial_pool_liquidity.map((e: any) => Coin.fromAmino(e)) : [],
      scaling_factors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e: any) => BigInt(e)) : [],
      future_pool_governor: object.future_pool_governor,
      scaling_factor_controller: object.scaling_factor_controller
    };
  },
  toAmino(message: MsgCreateStableswapPool): MsgCreateStableswapPoolAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_params = message.pool_params ? PoolParams.toAmino(message.pool_params) : undefined;
    if (message.initial_pool_liquidity) {
      obj.initial_pool_liquidity = message.initial_pool_liquidity.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.initial_pool_liquidity = [];
    }
    if (message.scaling_factors) {
      obj.scaling_factors = message.scaling_factors.map(e => e.toString());
    } else {
      obj.scaling_factors = [];
    }
    obj.future_pool_governor = message.future_pool_governor;
    obj.scaling_factor_controller = message.scaling_factor_controller;
    return obj;
  },
  fromAminoMsg(object: MsgCreateStableswapPoolAminoMsg): MsgCreateStableswapPool {
    return MsgCreateStableswapPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateStableswapPool): MsgCreateStableswapPoolAminoMsg {
    return {
      type: "osmosis/gamm/create-stableswap-pool",
      value: MsgCreateStableswapPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateStableswapPoolProtoMsg): MsgCreateStableswapPool {
    return MsgCreateStableswapPool.decode(message.value);
  },
  toProto(message: MsgCreateStableswapPool): Uint8Array {
    return MsgCreateStableswapPool.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateStableswapPool): MsgCreateStableswapPoolProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
      value: MsgCreateStableswapPool.encode(message).finish()
    };
  }
};
function createBaseMsgCreateStableswapPoolResponse(): MsgCreateStableswapPoolResponse {
  return {
    pool_id: BigInt(0)
  };
}
export const MsgCreateStableswapPoolResponse = {
  typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPoolResponse",
  encode(message: MsgCreateStableswapPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.pool_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateStableswapPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStableswapPoolResponse();
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
  fromJSON(object: any): MsgCreateStableswapPoolResponse {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCreateStableswapPoolResponse): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCreateStableswapPoolResponse>): MsgCreateStableswapPoolResponse {
    const message = createBaseMsgCreateStableswapPoolResponse();
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: MsgCreateStableswapPoolResponseSDKType): MsgCreateStableswapPoolResponse {
    return {
      pool_id: object?.pool_id
    };
  },
  toSDK(message: MsgCreateStableswapPoolResponse): MsgCreateStableswapPoolResponseSDKType {
    const obj: any = {};
    obj.pool_id = message.pool_id;
    return obj;
  },
  fromAmino(object: MsgCreateStableswapPoolResponseAmino): MsgCreateStableswapPoolResponse {
    return {
      pool_id: BigInt(object.pool_id)
    };
  },
  toAmino(message: MsgCreateStableswapPoolResponse): MsgCreateStableswapPoolResponseAmino {
    const obj: any = {};
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateStableswapPoolResponseAminoMsg): MsgCreateStableswapPoolResponse {
    return MsgCreateStableswapPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateStableswapPoolResponse): MsgCreateStableswapPoolResponseAminoMsg {
    return {
      type: "osmosis/gamm/create-stableswap-pool-response",
      value: MsgCreateStableswapPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateStableswapPoolResponseProtoMsg): MsgCreateStableswapPoolResponse {
    return MsgCreateStableswapPoolResponse.decode(message.value);
  },
  toProto(message: MsgCreateStableswapPoolResponse): Uint8Array {
    return MsgCreateStableswapPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateStableswapPoolResponse): MsgCreateStableswapPoolResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPoolResponse",
      value: MsgCreateStableswapPoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgStableSwapAdjustScalingFactors(): MsgStableSwapAdjustScalingFactors {
  return {
    sender: "",
    pool_id: BigInt(0),
    scaling_factors: []
  };
}
export const MsgStableSwapAdjustScalingFactors = {
  typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
  encode(message: MsgStableSwapAdjustScalingFactors, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(16).uint64(message.pool_id);
    }
    writer.uint32(26).fork();
    for (const v of message.scaling_factors) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStableSwapAdjustScalingFactors {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStableSwapAdjustScalingFactors();
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
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.scaling_factors.push(reader.uint64());
            }
          } else {
            message.scaling_factors.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStableSwapAdjustScalingFactors {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      scaling_factors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: MsgStableSwapAdjustScalingFactors): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    if (message.scaling_factors) {
      obj.scaling_factors = message.scaling_factors.map(e => (e || BigInt(0)).toString());
    } else {
      obj.scaling_factors = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgStableSwapAdjustScalingFactors>): MsgStableSwapAdjustScalingFactors {
    const message = createBaseMsgStableSwapAdjustScalingFactors();
    message.sender = object.sender ?? "";
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.scaling_factors = object.scaling_factors?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromSDK(object: MsgStableSwapAdjustScalingFactorsSDKType): MsgStableSwapAdjustScalingFactors {
    return {
      sender: object?.sender,
      pool_id: object?.pool_id,
      scaling_factors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e: any) => e) : []
    };
  },
  toSDK(message: MsgStableSwapAdjustScalingFactors): MsgStableSwapAdjustScalingFactorsSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.pool_id;
    if (message.scaling_factors) {
      obj.scaling_factors = message.scaling_factors.map(e => e);
    } else {
      obj.scaling_factors = [];
    }
    return obj;
  },
  fromAmino(object: MsgStableSwapAdjustScalingFactorsAmino): MsgStableSwapAdjustScalingFactors {
    return {
      sender: object.sender,
      pool_id: BigInt(object.pool_id),
      scaling_factors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e: any) => BigInt(e)) : []
    };
  },
  toAmino(message: MsgStableSwapAdjustScalingFactors): MsgStableSwapAdjustScalingFactorsAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    if (message.scaling_factors) {
      obj.scaling_factors = message.scaling_factors.map(e => e.toString());
    } else {
      obj.scaling_factors = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgStableSwapAdjustScalingFactorsAminoMsg): MsgStableSwapAdjustScalingFactors {
    return MsgStableSwapAdjustScalingFactors.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStableSwapAdjustScalingFactors): MsgStableSwapAdjustScalingFactorsAminoMsg {
    return {
      type: "osmosis/gamm/stableswap-adjust-scaling-factors",
      value: MsgStableSwapAdjustScalingFactors.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgStableSwapAdjustScalingFactorsProtoMsg): MsgStableSwapAdjustScalingFactors {
    return MsgStableSwapAdjustScalingFactors.decode(message.value);
  },
  toProto(message: MsgStableSwapAdjustScalingFactors): Uint8Array {
    return MsgStableSwapAdjustScalingFactors.encode(message).finish();
  },
  toProtoMsg(message: MsgStableSwapAdjustScalingFactors): MsgStableSwapAdjustScalingFactorsProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
      value: MsgStableSwapAdjustScalingFactors.encode(message).finish()
    };
  }
};
function createBaseMsgStableSwapAdjustScalingFactorsResponse(): MsgStableSwapAdjustScalingFactorsResponse {
  return {};
}
export const MsgStableSwapAdjustScalingFactorsResponse = {
  typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactorsResponse",
  encode(_: MsgStableSwapAdjustScalingFactorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStableSwapAdjustScalingFactorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStableSwapAdjustScalingFactorsResponse();
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
  fromJSON(_: any): MsgStableSwapAdjustScalingFactorsResponse {
    return {};
  },
  toJSON(_: MsgStableSwapAdjustScalingFactorsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgStableSwapAdjustScalingFactorsResponse>): MsgStableSwapAdjustScalingFactorsResponse {
    const message = createBaseMsgStableSwapAdjustScalingFactorsResponse();
    return message;
  },
  fromSDK(_: MsgStableSwapAdjustScalingFactorsResponseSDKType): MsgStableSwapAdjustScalingFactorsResponse {
    return {};
  },
  toSDK(_: MsgStableSwapAdjustScalingFactorsResponse): MsgStableSwapAdjustScalingFactorsResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgStableSwapAdjustScalingFactorsResponseAmino): MsgStableSwapAdjustScalingFactorsResponse {
    return {};
  },
  toAmino(_: MsgStableSwapAdjustScalingFactorsResponse): MsgStableSwapAdjustScalingFactorsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgStableSwapAdjustScalingFactorsResponseAminoMsg): MsgStableSwapAdjustScalingFactorsResponse {
    return MsgStableSwapAdjustScalingFactorsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStableSwapAdjustScalingFactorsResponse): MsgStableSwapAdjustScalingFactorsResponseAminoMsg {
    return {
      type: "osmosis/gamm/stable-swap-adjust-scaling-factors-response",
      value: MsgStableSwapAdjustScalingFactorsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgStableSwapAdjustScalingFactorsResponseProtoMsg): MsgStableSwapAdjustScalingFactorsResponse {
    return MsgStableSwapAdjustScalingFactorsResponse.decode(message.value);
  },
  toProto(message: MsgStableSwapAdjustScalingFactorsResponse): Uint8Array {
    return MsgStableSwapAdjustScalingFactorsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStableSwapAdjustScalingFactorsResponse): MsgStableSwapAdjustScalingFactorsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactorsResponse",
      value: MsgStableSwapAdjustScalingFactorsResponse.encode(message).finish()
    };
  }
};