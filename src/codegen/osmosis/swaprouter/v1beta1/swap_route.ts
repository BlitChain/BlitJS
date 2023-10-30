//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface SwapAmountInRoute {
  pool_id: bigint;
  token_out_denom: string;
}
export interface SwapAmountInRouteProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.SwapAmountInRoute";
  value: Uint8Array;
}
export interface SwapAmountInRouteProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.SwapAmountInRoute";
  value: Uint8Array;
}
export interface SwapAmountInRouteAmino {
  pool_id: string;
  token_out_denom: string;
}
export interface SwapAmountInRouteAminoMsg {
  type: "osmosis/swaprouter/swap-amount-in-route";
  value: SwapAmountInRouteAmino;
}
export interface SwapAmountInRouteSDKType {
  pool_id: bigint;
  token_out_denom: string;
}
export interface SwapAmountOutRoute {
  pool_id: bigint;
  token_in_denom: string;
}
export interface SwapAmountOutRouteProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.SwapAmountOutRoute";
  value: Uint8Array;
}
export interface SwapAmountOutRouteProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.SwapAmountOutRoute";
  value: Uint8Array;
}
export interface SwapAmountOutRouteAmino {
  pool_id: string;
  token_in_denom: string;
}
export interface SwapAmountOutRouteAminoMsg {
  type: "osmosis/swaprouter/swap-amount-out-route";
  value: SwapAmountOutRouteAmino;
}
export interface SwapAmountOutRouteSDKType {
  pool_id: bigint;
  token_in_denom: string;
}
function createBaseSwapAmountInRoute(): SwapAmountInRoute {
  return {
    pool_id: BigInt(0),
    token_out_denom: ""
  };
}
export const SwapAmountInRoute = {
  typeUrl: "/osmosis.swaprouter.v1beta1.SwapAmountInRoute",
  encode(message: SwapAmountInRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.token_out_denom !== "") {
      writer.uint32(18).string(message.token_out_denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountInRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapAmountInRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = reader.uint64();
          break;
        case 2:
          message.token_out_denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SwapAmountInRoute {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      token_out_denom: isSet(object.token_out_denom) ? String(object.token_out_denom) : ""
    };
  },
  toJSON(message: SwapAmountInRoute): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    message.token_out_denom !== undefined && (obj.token_out_denom = message.token_out_denom);
    return obj;
  },
  fromPartial(object: Partial<SwapAmountInRoute>): SwapAmountInRoute {
    const message = createBaseSwapAmountInRoute();
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.token_out_denom = object.token_out_denom ?? "";
    return message;
  },
  fromSDK(object: SwapAmountInRouteSDKType): SwapAmountInRoute {
    return {
      pool_id: object?.pool_id,
      token_out_denom: object?.token_out_denom
    };
  },
  toSDK(message: SwapAmountInRoute): SwapAmountInRouteSDKType {
    const obj: any = {};
    obj.pool_id = message.pool_id;
    obj.token_out_denom = message.token_out_denom;
    return obj;
  },
  fromAmino(object: SwapAmountInRouteAmino): SwapAmountInRoute {
    return {
      pool_id: BigInt(object.pool_id),
      token_out_denom: object.token_out_denom
    };
  },
  toAmino(message: SwapAmountInRoute): SwapAmountInRouteAmino {
    const obj: any = {};
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    obj.token_out_denom = message.token_out_denom;
    return obj;
  },
  fromAminoMsg(object: SwapAmountInRouteAminoMsg): SwapAmountInRoute {
    return SwapAmountInRoute.fromAmino(object.value);
  },
  toAminoMsg(message: SwapAmountInRoute): SwapAmountInRouteAminoMsg {
    return {
      type: "osmosis/swaprouter/swap-amount-in-route",
      value: SwapAmountInRoute.toAmino(message)
    };
  },
  fromProtoMsg(message: SwapAmountInRouteProtoMsg): SwapAmountInRoute {
    return SwapAmountInRoute.decode(message.value);
  },
  toProto(message: SwapAmountInRoute): Uint8Array {
    return SwapAmountInRoute.encode(message).finish();
  },
  toProtoMsg(message: SwapAmountInRoute): SwapAmountInRouteProtoMsg {
    return {
      typeUrl: "/osmosis.swaprouter.v1beta1.SwapAmountInRoute",
      value: SwapAmountInRoute.encode(message).finish()
    };
  }
};
function createBaseSwapAmountOutRoute(): SwapAmountOutRoute {
  return {
    pool_id: BigInt(0),
    token_in_denom: ""
  };
}
export const SwapAmountOutRoute = {
  typeUrl: "/osmosis.swaprouter.v1beta1.SwapAmountOutRoute",
  encode(message: SwapAmountOutRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.token_in_denom !== "") {
      writer.uint32(18).string(message.token_in_denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountOutRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapAmountOutRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = reader.uint64();
          break;
        case 2:
          message.token_in_denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SwapAmountOutRoute {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      token_in_denom: isSet(object.token_in_denom) ? String(object.token_in_denom) : ""
    };
  },
  toJSON(message: SwapAmountOutRoute): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    message.token_in_denom !== undefined && (obj.token_in_denom = message.token_in_denom);
    return obj;
  },
  fromPartial(object: Partial<SwapAmountOutRoute>): SwapAmountOutRoute {
    const message = createBaseSwapAmountOutRoute();
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.token_in_denom = object.token_in_denom ?? "";
    return message;
  },
  fromSDK(object: SwapAmountOutRouteSDKType): SwapAmountOutRoute {
    return {
      pool_id: object?.pool_id,
      token_in_denom: object?.token_in_denom
    };
  },
  toSDK(message: SwapAmountOutRoute): SwapAmountOutRouteSDKType {
    const obj: any = {};
    obj.pool_id = message.pool_id;
    obj.token_in_denom = message.token_in_denom;
    return obj;
  },
  fromAmino(object: SwapAmountOutRouteAmino): SwapAmountOutRoute {
    return {
      pool_id: BigInt(object.pool_id),
      token_in_denom: object.token_in_denom
    };
  },
  toAmino(message: SwapAmountOutRoute): SwapAmountOutRouteAmino {
    const obj: any = {};
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    obj.token_in_denom = message.token_in_denom;
    return obj;
  },
  fromAminoMsg(object: SwapAmountOutRouteAminoMsg): SwapAmountOutRoute {
    return SwapAmountOutRoute.fromAmino(object.value);
  },
  toAminoMsg(message: SwapAmountOutRoute): SwapAmountOutRouteAminoMsg {
    return {
      type: "osmosis/swaprouter/swap-amount-out-route",
      value: SwapAmountOutRoute.toAmino(message)
    };
  },
  fromProtoMsg(message: SwapAmountOutRouteProtoMsg): SwapAmountOutRoute {
    return SwapAmountOutRoute.decode(message.value);
  },
  toProto(message: SwapAmountOutRoute): Uint8Array {
    return SwapAmountOutRoute.encode(message).finish();
  },
  toProtoMsg(message: SwapAmountOutRoute): SwapAmountOutRouteProtoMsg {
    return {
      typeUrl: "/osmosis.swaprouter.v1beta1.SwapAmountOutRoute",
      value: SwapAmountOutRoute.encode(message).finish()
    };
  }
};