//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../../helpers";
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */
export interface PoolParams {
  swap_fee: string;
  exit_fee: string;
}
export interface PoolParamsProtoMsg {
  type_url: "/osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams";
  value: Uint8Array;
}
export interface PoolParamsProtoMsg {
  type_url: "/osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams";
  value: Uint8Array;
}
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */
export interface PoolParamsAmino {
  swap_fee: string;
  exit_fee: string;
}
export interface PoolParamsAminoMsg {
  type: "osmosis/gamm/StableswapPoolParams";
  value: PoolParamsAmino;
}
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */
export interface PoolParamsSDKType {
  swap_fee: string;
  exit_fee: string;
}
/** Pool is the stableswap Pool struct */
export interface Pool {
  $typeUrl?: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool";
  address: string;
  id: bigint;
  pool_params: PoolParams;
  /**
   * This string specifies who will govern the pool in the future.
   * Valid forms of this are:
   * {token name},{duration}
   * {duration}
   * where {token name} if specified is the token which determines the
   * governor, and if not specified is the LP token for this pool.duration is
   * a time specified as 0w,1w,2w, etc. which specifies how long the token
   * would need to be locked up to count in governance. 0w means no lockup.
   */
  future_pool_governor: string;
  /** sum of all LP shares */
  total_shares: Coin;
  /** assets in the pool */
  pool_liquidity: Coin[];
  /** for calculation amognst assets with different precisions */
  scaling_factors: bigint[];
  /** scaling_factor_controller is the address can adjust pool scaling factors */
  scaling_factor_controller: string;
}
export interface PoolProtoMsg {
  type_url: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool";
  value: Uint8Array;
}
export interface PoolProtoMsg {
  type_url: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool";
  value: Uint8Array;
}
/** Pool is the stableswap Pool struct */
export interface PoolAmino {
  address: string;
  id: string;
  pool_params?: PoolParamsAmino;
  /**
   * This string specifies who will govern the pool in the future.
   * Valid forms of this are:
   * {token name},{duration}
   * {duration}
   * where {token name} if specified is the token which determines the
   * governor, and if not specified is the LP token for this pool.duration is
   * a time specified as 0w,1w,2w, etc. which specifies how long the token
   * would need to be locked up to count in governance. 0w means no lockup.
   */
  future_pool_governor: string;
  /** sum of all LP shares */
  total_shares?: CoinAmino;
  /** assets in the pool */
  pool_liquidity: CoinAmino[];
  /** for calculation amognst assets with different precisions */
  scaling_factors: string[];
  /** scaling_factor_controller is the address can adjust pool scaling factors */
  scaling_factor_controller: string;
}
export interface PoolAminoMsg {
  type: "osmosis/gamm/StableswapPool";
  value: PoolAmino;
}
/** Pool is the stableswap Pool struct */
export interface PoolSDKType {
  $typeUrl?: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool";
  address: string;
  id: bigint;
  pool_params: PoolParamsSDKType;
  future_pool_governor: string;
  total_shares: CoinSDKType;
  pool_liquidity: CoinSDKType[];
  scaling_factors: bigint[];
  scaling_factor_controller: string;
}
function createBasePoolParams(): PoolParams {
  return {
    swap_fee: "",
    exit_fee: ""
  };
}
export const PoolParams = {
  typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams",
  encode(message: PoolParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.swap_fee !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.swap_fee, 18).atomics);
    }
    if (message.exit_fee !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.exit_fee, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swap_fee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.exit_fee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolParams {
    return {
      swap_fee: isSet(object.swap_fee) ? String(object.swap_fee) : "",
      exit_fee: isSet(object.exit_fee) ? String(object.exit_fee) : ""
    };
  },
  toJSON(message: PoolParams): unknown {
    const obj: any = {};
    message.swap_fee !== undefined && (obj.swap_fee = message.swap_fee);
    message.exit_fee !== undefined && (obj.exit_fee = message.exit_fee);
    return obj;
  },
  fromPartial(object: Partial<PoolParams>): PoolParams {
    const message = createBasePoolParams();
    message.swap_fee = object.swap_fee ?? "";
    message.exit_fee = object.exit_fee ?? "";
    return message;
  },
  fromSDK(object: PoolParamsSDKType): PoolParams {
    return {
      swap_fee: object?.swap_fee,
      exit_fee: object?.exit_fee
    };
  },
  toSDK(message: PoolParams): PoolParamsSDKType {
    const obj: any = {};
    obj.swap_fee = message.swap_fee;
    obj.exit_fee = message.exit_fee;
    return obj;
  },
  fromAmino(object: PoolParamsAmino): PoolParams {
    return {
      swap_fee: object.swap_fee,
      exit_fee: object.exit_fee
    };
  },
  toAmino(message: PoolParams): PoolParamsAmino {
    const obj: any = {};
    obj.swap_fee = message.swap_fee;
    obj.exit_fee = message.exit_fee;
    return obj;
  },
  fromAminoMsg(object: PoolParamsAminoMsg): PoolParams {
    return PoolParams.fromAmino(object.value);
  },
  toAminoMsg(message: PoolParams): PoolParamsAminoMsg {
    return {
      type: "osmosis/gamm/StableswapPoolParams",
      value: PoolParams.toAmino(message)
    };
  },
  fromProtoMsg(message: PoolParamsProtoMsg): PoolParams {
    return PoolParams.decode(message.value);
  },
  toProto(message: PoolParams): Uint8Array {
    return PoolParams.encode(message).finish();
  },
  toProtoMsg(message: PoolParams): PoolParamsProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams",
      value: PoolParams.encode(message).finish()
    };
  }
};
function createBasePool(): Pool {
  return {
    $typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
    address: "",
    id: BigInt(0),
    pool_params: PoolParams.fromPartial({}),
    future_pool_governor: "",
    total_shares: Coin.fromPartial({}),
    pool_liquidity: [],
    scaling_factors: [],
    scaling_factor_controller: ""
  };
}
export const Pool = {
  typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.pool_params !== undefined) {
      PoolParams.encode(message.pool_params, writer.uint32(26).fork()).ldelim();
    }
    if (message.future_pool_governor !== "") {
      writer.uint32(34).string(message.future_pool_governor);
    }
    if (message.total_shares !== undefined) {
      Coin.encode(message.total_shares, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.pool_liquidity) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(58).fork();
    for (const v of message.scaling_factors) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.scaling_factor_controller !== "") {
      writer.uint32(66).string(message.scaling_factor_controller);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Pool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.pool_params = PoolParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.future_pool_governor = reader.string();
          break;
        case 5:
          message.total_shares = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.pool_liquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.scaling_factors.push(reader.uint64());
            }
          } else {
            message.scaling_factors.push(reader.uint64());
          }
          break;
        case 8:
          message.scaling_factor_controller = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Pool {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      pool_params: isSet(object.pool_params) ? PoolParams.fromJSON(object.pool_params) : undefined,
      future_pool_governor: isSet(object.future_pool_governor) ? String(object.future_pool_governor) : "",
      total_shares: isSet(object.total_shares) ? Coin.fromJSON(object.total_shares) : undefined,
      pool_liquidity: Array.isArray(object?.pool_liquidity) ? object.pool_liquidity.map((e: any) => Coin.fromJSON(e)) : [],
      scaling_factors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e: any) => BigInt(e.toString())) : [],
      scaling_factor_controller: isSet(object.scaling_factor_controller) ? String(object.scaling_factor_controller) : ""
    };
  },
  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.pool_params !== undefined && (obj.pool_params = message.pool_params ? PoolParams.toJSON(message.pool_params) : undefined);
    message.future_pool_governor !== undefined && (obj.future_pool_governor = message.future_pool_governor);
    message.total_shares !== undefined && (obj.total_shares = message.total_shares ? Coin.toJSON(message.total_shares) : undefined);
    if (message.pool_liquidity) {
      obj.pool_liquidity = message.pool_liquidity.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.pool_liquidity = [];
    }
    if (message.scaling_factors) {
      obj.scaling_factors = message.scaling_factors.map(e => (e || BigInt(0)).toString());
    } else {
      obj.scaling_factors = [];
    }
    message.scaling_factor_controller !== undefined && (obj.scaling_factor_controller = message.scaling_factor_controller);
    return obj;
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.address = object.address ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.pool_params = object.pool_params !== undefined && object.pool_params !== null ? PoolParams.fromPartial(object.pool_params) : undefined;
    message.future_pool_governor = object.future_pool_governor ?? "";
    message.total_shares = object.total_shares !== undefined && object.total_shares !== null ? Coin.fromPartial(object.total_shares) : undefined;
    message.pool_liquidity = object.pool_liquidity?.map(e => Coin.fromPartial(e)) || [];
    message.scaling_factors = object.scaling_factors?.map(e => BigInt(e.toString())) || [];
    message.scaling_factor_controller = object.scaling_factor_controller ?? "";
    return message;
  },
  fromSDK(object: PoolSDKType): Pool {
    return {
      address: object?.address,
      id: object?.id,
      pool_params: object.pool_params ? PoolParams.fromSDK(object.pool_params) : undefined,
      future_pool_governor: object?.future_pool_governor,
      total_shares: object.total_shares ? Coin.fromSDK(object.total_shares) : undefined,
      pool_liquidity: Array.isArray(object?.pool_liquidity) ? object.pool_liquidity.map((e: any) => Coin.fromSDK(e)) : [],
      scaling_factors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e: any) => e) : [],
      scaling_factor_controller: object?.scaling_factor_controller
    };
  },
  toSDK(message: Pool): PoolSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.id = message.id;
    message.pool_params !== undefined && (obj.pool_params = message.pool_params ? PoolParams.toSDK(message.pool_params) : undefined);
    obj.future_pool_governor = message.future_pool_governor;
    message.total_shares !== undefined && (obj.total_shares = message.total_shares ? Coin.toSDK(message.total_shares) : undefined);
    if (message.pool_liquidity) {
      obj.pool_liquidity = message.pool_liquidity.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.pool_liquidity = [];
    }
    if (message.scaling_factors) {
      obj.scaling_factors = message.scaling_factors.map(e => e);
    } else {
      obj.scaling_factors = [];
    }
    obj.scaling_factor_controller = message.scaling_factor_controller;
    return obj;
  },
  fromAmino(object: PoolAmino): Pool {
    return {
      address: object.address,
      id: BigInt(object.id),
      pool_params: object?.pool_params ? PoolParams.fromAmino(object.pool_params) : undefined,
      future_pool_governor: object.future_pool_governor,
      total_shares: object?.total_shares ? Coin.fromAmino(object.total_shares) : undefined,
      pool_liquidity: Array.isArray(object?.pool_liquidity) ? object.pool_liquidity.map((e: any) => Coin.fromAmino(e)) : [],
      scaling_factors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e: any) => BigInt(e)) : [],
      scaling_factor_controller: object.scaling_factor_controller
    };
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.pool_params = message.pool_params ? PoolParams.toAmino(message.pool_params) : undefined;
    obj.future_pool_governor = message.future_pool_governor;
    obj.total_shares = message.total_shares ? Coin.toAmino(message.total_shares) : undefined;
    if (message.pool_liquidity) {
      obj.pool_liquidity = message.pool_liquidity.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.pool_liquidity = [];
    }
    if (message.scaling_factors) {
      obj.scaling_factors = message.scaling_factors.map(e => e.toString());
    } else {
      obj.scaling_factors = [];
    }
    obj.scaling_factor_controller = message.scaling_factor_controller;
    return obj;
  },
  fromAminoMsg(object: PoolAminoMsg): Pool {
    return Pool.fromAmino(object.value);
  },
  toAminoMsg(message: Pool): PoolAminoMsg {
    return {
      type: "osmosis/gamm/StableswapPool",
      value: Pool.toAmino(message)
    };
  },
  fromProtoMsg(message: PoolProtoMsg): Pool {
    return Pool.decode(message.value);
  },
  toProto(message: Pool): Uint8Array {
    return Pool.encode(message).finish();
  },
  toProtoMsg(message: Pool): PoolProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
      value: Pool.encode(message).finish()
    };
  }
};