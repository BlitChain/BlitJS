//@ts-nocheck
import { PoolParams, PoolParamsAmino, PoolParamsSDKType, PoolAsset, PoolAssetAmino, PoolAssetSDKType } from "../balancerPool";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { isSet } from "../../../../../helpers";
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
function createBaseMsgCreateBalancerPool(): MsgCreateBalancerPool {
  return {
    sender: "",
    pool_params: undefined,
    pool_assets: [],
    future_pool_governor: ""
  };
}
export const MsgCreateBalancerPool = {
  typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
  encode(message: MsgCreateBalancerPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.pool_params !== undefined) {
      PoolParams.encode(message.pool_params, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.pool_assets) {
      PoolAsset.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.future_pool_governor !== "") {
      writer.uint32(34).string(message.future_pool_governor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBalancerPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBalancerPool();
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
          message.pool_assets.push(PoolAsset.decode(reader, reader.uint32()));
          break;
        case 4:
          message.future_pool_governor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateBalancerPool {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      pool_params: isSet(object.pool_params) ? PoolParams.fromJSON(object.pool_params) : undefined,
      pool_assets: Array.isArray(object?.pool_assets) ? object.pool_assets.map((e: any) => PoolAsset.fromJSON(e)) : [],
      future_pool_governor: isSet(object.future_pool_governor) ? String(object.future_pool_governor) : ""
    };
  },
  toJSON(message: MsgCreateBalancerPool): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.pool_params !== undefined && (obj.pool_params = message.pool_params ? PoolParams.toJSON(message.pool_params) : undefined);
    if (message.pool_assets) {
      obj.pool_assets = message.pool_assets.map(e => e ? PoolAsset.toJSON(e) : undefined);
    } else {
      obj.pool_assets = [];
    }
    message.future_pool_governor !== undefined && (obj.future_pool_governor = message.future_pool_governor);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateBalancerPool>): MsgCreateBalancerPool {
    const message = createBaseMsgCreateBalancerPool();
    message.sender = object.sender ?? "";
    message.pool_params = object.pool_params !== undefined && object.pool_params !== null ? PoolParams.fromPartial(object.pool_params) : undefined;
    message.pool_assets = object.pool_assets?.map(e => PoolAsset.fromPartial(e)) || [];
    message.future_pool_governor = object.future_pool_governor ?? "";
    return message;
  },
  fromSDK(object: MsgCreateBalancerPoolSDKType): MsgCreateBalancerPool {
    return {
      sender: object?.sender,
      pool_params: object.pool_params ? PoolParams.fromSDK(object.pool_params) : undefined,
      pool_assets: Array.isArray(object?.pool_assets) ? object.pool_assets.map((e: any) => PoolAsset.fromSDK(e)) : [],
      future_pool_governor: object?.future_pool_governor
    };
  },
  toSDK(message: MsgCreateBalancerPool): MsgCreateBalancerPoolSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    message.pool_params !== undefined && (obj.pool_params = message.pool_params ? PoolParams.toSDK(message.pool_params) : undefined);
    if (message.pool_assets) {
      obj.pool_assets = message.pool_assets.map(e => e ? PoolAsset.toSDK(e) : undefined);
    } else {
      obj.pool_assets = [];
    }
    obj.future_pool_governor = message.future_pool_governor;
    return obj;
  },
  fromAmino(object: MsgCreateBalancerPoolAmino): MsgCreateBalancerPool {
    return {
      sender: object.sender,
      pool_params: object?.pool_params ? PoolParams.fromAmino(object.pool_params) : undefined,
      pool_assets: Array.isArray(object?.pool_assets) ? object.pool_assets.map((e: any) => PoolAsset.fromAmino(e)) : [],
      future_pool_governor: object.future_pool_governor
    };
  },
  toAmino(message: MsgCreateBalancerPool): MsgCreateBalancerPoolAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_params = message.pool_params ? PoolParams.toAmino(message.pool_params) : undefined;
    if (message.pool_assets) {
      obj.pool_assets = message.pool_assets.map(e => e ? PoolAsset.toAmino(e) : undefined);
    } else {
      obj.pool_assets = [];
    }
    obj.future_pool_governor = message.future_pool_governor;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBalancerPoolAminoMsg): MsgCreateBalancerPool {
    return MsgCreateBalancerPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateBalancerPool): MsgCreateBalancerPoolAminoMsg {
    return {
      type: "osmosis/gamm/create-balancer-pool",
      value: MsgCreateBalancerPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateBalancerPoolProtoMsg): MsgCreateBalancerPool {
    return MsgCreateBalancerPool.decode(message.value);
  },
  toProto(message: MsgCreateBalancerPool): Uint8Array {
    return MsgCreateBalancerPool.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBalancerPool): MsgCreateBalancerPoolProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
      value: MsgCreateBalancerPool.encode(message).finish()
    };
  }
};
function createBaseMsgCreateBalancerPoolResponse(): MsgCreateBalancerPoolResponse {
  return {
    pool_id: BigInt(0)
  };
}
export const MsgCreateBalancerPoolResponse = {
  typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPoolResponse",
  encode(message: MsgCreateBalancerPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.pool_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBalancerPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBalancerPoolResponse();
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
  fromJSON(object: any): MsgCreateBalancerPoolResponse {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCreateBalancerPoolResponse): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCreateBalancerPoolResponse>): MsgCreateBalancerPoolResponse {
    const message = createBaseMsgCreateBalancerPoolResponse();
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: MsgCreateBalancerPoolResponseSDKType): MsgCreateBalancerPoolResponse {
    return {
      pool_id: object?.pool_id
    };
  },
  toSDK(message: MsgCreateBalancerPoolResponse): MsgCreateBalancerPoolResponseSDKType {
    const obj: any = {};
    obj.pool_id = message.pool_id;
    return obj;
  },
  fromAmino(object: MsgCreateBalancerPoolResponseAmino): MsgCreateBalancerPoolResponse {
    return {
      pool_id: BigInt(object.pool_id)
    };
  },
  toAmino(message: MsgCreateBalancerPoolResponse): MsgCreateBalancerPoolResponseAmino {
    const obj: any = {};
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBalancerPoolResponseAminoMsg): MsgCreateBalancerPoolResponse {
    return MsgCreateBalancerPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateBalancerPoolResponse): MsgCreateBalancerPoolResponseAminoMsg {
    return {
      type: "osmosis/gamm/poolmodels/balancer/create-balancer-pool-response",
      value: MsgCreateBalancerPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateBalancerPoolResponseProtoMsg): MsgCreateBalancerPoolResponse {
    return MsgCreateBalancerPoolResponse.decode(message.value);
  },
  toProto(message: MsgCreateBalancerPoolResponse): Uint8Array {
    return MsgCreateBalancerPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBalancerPoolResponse): MsgCreateBalancerPoolResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPoolResponse",
      value: MsgCreateBalancerPoolResponse.encode(message).finish()
    };
  }
};