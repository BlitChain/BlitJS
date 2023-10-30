//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Params holds parameters for the swaprouter module */
export interface Params {
  pool_creation_fee: Coin[];
}
export interface ParamsProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the swaprouter module */
export interface ParamsAmino {
  pool_creation_fee: CoinAmino[];
}
export interface ParamsAminoMsg {
  type: "osmosis/swaprouter/params";
  value: ParamsAmino;
}
/** Params holds parameters for the swaprouter module */
export interface ParamsSDKType {
  pool_creation_fee: CoinSDKType[];
}
/** GenesisState defines the swaprouter module's genesis state. */
export interface GenesisState {
  /** the next_pool_id */
  next_pool_id: bigint;
  /** params is the container of swaprouter parameters. */
  params: Params;
}
export interface GenesisStateProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the swaprouter module's genesis state. */
export interface GenesisStateAmino {
  /** the next_pool_id */
  next_pool_id: string;
  /** params is the container of swaprouter parameters. */
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/swaprouter/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the swaprouter module's genesis state. */
export interface GenesisStateSDKType {
  next_pool_id: bigint;
  params: ParamsSDKType;
}
function createBaseParams(): Params {
  return {
    pool_creation_fee: []
  };
}
export const Params = {
  typeUrl: "/osmosis.swaprouter.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pool_creation_fee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_creation_fee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      pool_creation_fee: Array.isArray(object?.pool_creation_fee) ? object.pool_creation_fee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.pool_creation_fee) {
      obj.pool_creation_fee = message.pool_creation_fee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.pool_creation_fee = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.pool_creation_fee = object.pool_creation_fee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      pool_creation_fee: Array.isArray(object?.pool_creation_fee) ? object.pool_creation_fee.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    if (message.pool_creation_fee) {
      obj.pool_creation_fee = message.pool_creation_fee.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.pool_creation_fee = [];
    }
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      pool_creation_fee: Array.isArray(object?.pool_creation_fee) ? object.pool_creation_fee.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.pool_creation_fee) {
      obj.pool_creation_fee = message.pool_creation_fee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.pool_creation_fee = [];
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "osmosis/swaprouter/params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.swaprouter.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    next_pool_id: BigInt(0),
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.swaprouter.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.next_pool_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.next_pool_id);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next_pool_id = reader.uint64();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      next_pool_id: isSet(object.next_pool_id) ? BigInt(object.next_pool_id.toString()) : BigInt(0),
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.next_pool_id !== undefined && (obj.next_pool_id = (message.next_pool_id || BigInt(0)).toString());
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.next_pool_id = object.next_pool_id !== undefined && object.next_pool_id !== null ? BigInt(object.next_pool_id.toString()) : BigInt(0);
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      next_pool_id: object?.next_pool_id,
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    obj.next_pool_id = message.next_pool_id;
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      next_pool_id: BigInt(object.next_pool_id),
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.next_pool_id = message.next_pool_id ? message.next_pool_id.toString() : undefined;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/swaprouter/genesis-state",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/osmosis.swaprouter.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};