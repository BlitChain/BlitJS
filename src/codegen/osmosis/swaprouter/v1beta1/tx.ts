//@ts-nocheck
import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteSDKType } from "./swap_route";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** ===================== MsgSwapExactAmountIn */
export interface MsgSwapExactAmountIn {
  sender: string;
  routes: SwapAmountInRoute[];
  token_in: Coin;
  token_out_min_amount: string;
}
export interface MsgSwapExactAmountInProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn";
  value: Uint8Array;
}
export interface MsgSwapExactAmountInProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn";
  value: Uint8Array;
}
/** ===================== MsgSwapExactAmountIn */
export interface MsgSwapExactAmountInAmino {
  sender: string;
  routes: SwapAmountInRouteAmino[];
  token_in?: CoinAmino;
  token_out_min_amount: string;
}
export interface MsgSwapExactAmountInAminoMsg {
  type: "osmosis/swaprouter/swap-exact-amount-in";
  value: MsgSwapExactAmountInAmino;
}
/** ===================== MsgSwapExactAmountIn */
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
  type_url: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountInResponse";
  value: Uint8Array;
}
export interface MsgSwapExactAmountInResponseProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountInResponse";
  value: Uint8Array;
}
export interface MsgSwapExactAmountInResponseAmino {
  token_out_amount: string;
}
export interface MsgSwapExactAmountInResponseAminoMsg {
  type: "osmosis/swaprouter/swap-exact-amount-in-response";
  value: MsgSwapExactAmountInResponseAmino;
}
export interface MsgSwapExactAmountInResponseSDKType {
  token_out_amount: string;
}
/** ===================== MsgSwapExactAmountOut */
export interface MsgSwapExactAmountOut {
  sender: string;
  routes: SwapAmountOutRoute[];
  token_in_max_amount: string;
  token_out: Coin;
}
export interface MsgSwapExactAmountOutProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut";
  value: Uint8Array;
}
export interface MsgSwapExactAmountOutProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut";
  value: Uint8Array;
}
/** ===================== MsgSwapExactAmountOut */
export interface MsgSwapExactAmountOutAmino {
  sender: string;
  routes: SwapAmountOutRouteAmino[];
  token_in_max_amount: string;
  token_out?: CoinAmino;
}
export interface MsgSwapExactAmountOutAminoMsg {
  type: "osmosis/swaprouter/swap-exact-amount-out";
  value: MsgSwapExactAmountOutAmino;
}
/** ===================== MsgSwapExactAmountOut */
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
  type_url: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOutResponse";
  value: Uint8Array;
}
export interface MsgSwapExactAmountOutResponseProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOutResponse";
  value: Uint8Array;
}
export interface MsgSwapExactAmountOutResponseAmino {
  token_in_amount: string;
}
export interface MsgSwapExactAmountOutResponseAminoMsg {
  type: "osmosis/swaprouter/swap-exact-amount-out-response";
  value: MsgSwapExactAmountOutResponseAmino;
}
export interface MsgSwapExactAmountOutResponseSDKType {
  token_in_amount: string;
}
function createBaseMsgSwapExactAmountIn(): MsgSwapExactAmountIn {
  return {
    sender: "",
    routes: [],
    token_in: Coin.fromPartial({}),
    token_out_min_amount: ""
  };
}
export const MsgSwapExactAmountIn = {
  typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn",
  encode(message: MsgSwapExactAmountIn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.routes) {
      SwapAmountInRoute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.token_in !== undefined) {
      Coin.encode(message.token_in, writer.uint32(26).fork()).ldelim();
    }
    if (message.token_out_min_amount !== "") {
      writer.uint32(34).string(message.token_out_min_amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountIn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.token_in = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.token_out_min_amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSwapExactAmountIn {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromJSON(e)) : [],
      token_in: isSet(object.token_in) ? Coin.fromJSON(object.token_in) : undefined,
      token_out_min_amount: isSet(object.token_out_min_amount) ? String(object.token_out_min_amount) : ""
    };
  },
  toJSON(message: MsgSwapExactAmountIn): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }
    message.token_in !== undefined && (obj.token_in = message.token_in ? Coin.toJSON(message.token_in) : undefined);
    message.token_out_min_amount !== undefined && (obj.token_out_min_amount = message.token_out_min_amount);
    return obj;
  },
  fromPartial(object: Partial<MsgSwapExactAmountIn>): MsgSwapExactAmountIn {
    const message = createBaseMsgSwapExactAmountIn();
    message.sender = object.sender ?? "";
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
    message.token_in = object.token_in !== undefined && object.token_in !== null ? Coin.fromPartial(object.token_in) : undefined;
    message.token_out_min_amount = object.token_out_min_amount ?? "";
    return message;
  },
  fromSDK(object: MsgSwapExactAmountInSDKType): MsgSwapExactAmountIn {
    return {
      sender: object?.sender,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromSDK(e)) : [],
      token_in: object.token_in ? Coin.fromSDK(object.token_in) : undefined,
      token_out_min_amount: object?.token_out_min_amount
    };
  },
  toSDK(message: MsgSwapExactAmountIn): MsgSwapExactAmountInSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toSDK(e) : undefined);
    } else {
      obj.routes = [];
    }
    message.token_in !== undefined && (obj.token_in = message.token_in ? Coin.toSDK(message.token_in) : undefined);
    obj.token_out_min_amount = message.token_out_min_amount;
    return obj;
  },
  fromAmino(object: MsgSwapExactAmountInAmino): MsgSwapExactAmountIn {
    return {
      sender: object.sender,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromAmino(e)) : [],
      token_in: object?.token_in ? Coin.fromAmino(object.token_in) : undefined,
      token_out_min_amount: object.token_out_min_amount
    };
  },
  toAmino(message: MsgSwapExactAmountIn): MsgSwapExactAmountInAmino {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
    } else {
      obj.routes = [];
    }
    obj.token_in = message.token_in ? Coin.toAmino(message.token_in) : undefined;
    obj.token_out_min_amount = message.token_out_min_amount;
    return obj;
  },
  fromAminoMsg(object: MsgSwapExactAmountInAminoMsg): MsgSwapExactAmountIn {
    return MsgSwapExactAmountIn.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSwapExactAmountIn): MsgSwapExactAmountInAminoMsg {
    return {
      type: "osmosis/swaprouter/swap-exact-amount-in",
      value: MsgSwapExactAmountIn.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSwapExactAmountInProtoMsg): MsgSwapExactAmountIn {
    return MsgSwapExactAmountIn.decode(message.value);
  },
  toProto(message: MsgSwapExactAmountIn): Uint8Array {
    return MsgSwapExactAmountIn.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapExactAmountIn): MsgSwapExactAmountInProtoMsg {
    return {
      typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn",
      value: MsgSwapExactAmountIn.encode(message).finish()
    };
  }
};
function createBaseMsgSwapExactAmountInResponse(): MsgSwapExactAmountInResponse {
  return {
    token_out_amount: ""
  };
}
export const MsgSwapExactAmountInResponse = {
  typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountInResponse",
  encode(message: MsgSwapExactAmountInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token_out_amount !== "") {
      writer.uint32(10).string(message.token_out_amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountInResponse();
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
  fromJSON(object: any): MsgSwapExactAmountInResponse {
    return {
      token_out_amount: isSet(object.token_out_amount) ? String(object.token_out_amount) : ""
    };
  },
  toJSON(message: MsgSwapExactAmountInResponse): unknown {
    const obj: any = {};
    message.token_out_amount !== undefined && (obj.token_out_amount = message.token_out_amount);
    return obj;
  },
  fromPartial(object: Partial<MsgSwapExactAmountInResponse>): MsgSwapExactAmountInResponse {
    const message = createBaseMsgSwapExactAmountInResponse();
    message.token_out_amount = object.token_out_amount ?? "";
    return message;
  },
  fromSDK(object: MsgSwapExactAmountInResponseSDKType): MsgSwapExactAmountInResponse {
    return {
      token_out_amount: object?.token_out_amount
    };
  },
  toSDK(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseSDKType {
    const obj: any = {};
    obj.token_out_amount = message.token_out_amount;
    return obj;
  },
  fromAmino(object: MsgSwapExactAmountInResponseAmino): MsgSwapExactAmountInResponse {
    return {
      token_out_amount: object.token_out_amount
    };
  },
  toAmino(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseAmino {
    const obj: any = {};
    obj.token_out_amount = message.token_out_amount;
    return obj;
  },
  fromAminoMsg(object: MsgSwapExactAmountInResponseAminoMsg): MsgSwapExactAmountInResponse {
    return MsgSwapExactAmountInResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseAminoMsg {
    return {
      type: "osmosis/swaprouter/swap-exact-amount-in-response",
      value: MsgSwapExactAmountInResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSwapExactAmountInResponseProtoMsg): MsgSwapExactAmountInResponse {
    return MsgSwapExactAmountInResponse.decode(message.value);
  },
  toProto(message: MsgSwapExactAmountInResponse): Uint8Array {
    return MsgSwapExactAmountInResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseProtoMsg {
    return {
      typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountInResponse",
      value: MsgSwapExactAmountInResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSwapExactAmountOut(): MsgSwapExactAmountOut {
  return {
    sender: "",
    routes: [],
    token_in_max_amount: "",
    token_out: Coin.fromPartial({})
  };
}
export const MsgSwapExactAmountOut = {
  typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut",
  encode(message: MsgSwapExactAmountOut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.routes) {
      SwapAmountOutRoute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.token_in_max_amount !== "") {
      writer.uint32(26).string(message.token_in_max_amount);
    }
    if (message.token_out !== undefined) {
      Coin.encode(message.token_out, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountOut {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.token_in_max_amount = reader.string();
          break;
        case 4:
          message.token_out = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSwapExactAmountOut {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromJSON(e)) : [],
      token_in_max_amount: isSet(object.token_in_max_amount) ? String(object.token_in_max_amount) : "",
      token_out: isSet(object.token_out) ? Coin.fromJSON(object.token_out) : undefined
    };
  },
  toJSON(message: MsgSwapExactAmountOut): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }
    message.token_in_max_amount !== undefined && (obj.token_in_max_amount = message.token_in_max_amount);
    message.token_out !== undefined && (obj.token_out = message.token_out ? Coin.toJSON(message.token_out) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSwapExactAmountOut>): MsgSwapExactAmountOut {
    const message = createBaseMsgSwapExactAmountOut();
    message.sender = object.sender ?? "";
    message.routes = object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
    message.token_in_max_amount = object.token_in_max_amount ?? "";
    message.token_out = object.token_out !== undefined && object.token_out !== null ? Coin.fromPartial(object.token_out) : undefined;
    return message;
  },
  fromSDK(object: MsgSwapExactAmountOutSDKType): MsgSwapExactAmountOut {
    return {
      sender: object?.sender,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromSDK(e)) : [],
      token_in_max_amount: object?.token_in_max_amount,
      token_out: object.token_out ? Coin.fromSDK(object.token_out) : undefined
    };
  },
  toSDK(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toSDK(e) : undefined);
    } else {
      obj.routes = [];
    }
    obj.token_in_max_amount = message.token_in_max_amount;
    message.token_out !== undefined && (obj.token_out = message.token_out ? Coin.toSDK(message.token_out) : undefined);
    return obj;
  },
  fromAmino(object: MsgSwapExactAmountOutAmino): MsgSwapExactAmountOut {
    return {
      sender: object.sender,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromAmino(e)) : [],
      token_in_max_amount: object.token_in_max_amount,
      token_out: object?.token_out ? Coin.fromAmino(object.token_out) : undefined
    };
  },
  toAmino(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutAmino {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
    } else {
      obj.routes = [];
    }
    obj.token_in_max_amount = message.token_in_max_amount;
    obj.token_out = message.token_out ? Coin.toAmino(message.token_out) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSwapExactAmountOutAminoMsg): MsgSwapExactAmountOut {
    return MsgSwapExactAmountOut.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutAminoMsg {
    return {
      type: "osmosis/swaprouter/swap-exact-amount-out",
      value: MsgSwapExactAmountOut.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSwapExactAmountOutProtoMsg): MsgSwapExactAmountOut {
    return MsgSwapExactAmountOut.decode(message.value);
  },
  toProto(message: MsgSwapExactAmountOut): Uint8Array {
    return MsgSwapExactAmountOut.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutProtoMsg {
    return {
      typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut",
      value: MsgSwapExactAmountOut.encode(message).finish()
    };
  }
};
function createBaseMsgSwapExactAmountOutResponse(): MsgSwapExactAmountOutResponse {
  return {
    token_in_amount: ""
  };
}
export const MsgSwapExactAmountOutResponse = {
  typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOutResponse",
  encode(message: MsgSwapExactAmountOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token_in_amount !== "") {
      writer.uint32(10).string(message.token_in_amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountOutResponse();
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
  fromJSON(object: any): MsgSwapExactAmountOutResponse {
    return {
      token_in_amount: isSet(object.token_in_amount) ? String(object.token_in_amount) : ""
    };
  },
  toJSON(message: MsgSwapExactAmountOutResponse): unknown {
    const obj: any = {};
    message.token_in_amount !== undefined && (obj.token_in_amount = message.token_in_amount);
    return obj;
  },
  fromPartial(object: Partial<MsgSwapExactAmountOutResponse>): MsgSwapExactAmountOutResponse {
    const message = createBaseMsgSwapExactAmountOutResponse();
    message.token_in_amount = object.token_in_amount ?? "";
    return message;
  },
  fromSDK(object: MsgSwapExactAmountOutResponseSDKType): MsgSwapExactAmountOutResponse {
    return {
      token_in_amount: object?.token_in_amount
    };
  },
  toSDK(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseSDKType {
    const obj: any = {};
    obj.token_in_amount = message.token_in_amount;
    return obj;
  },
  fromAmino(object: MsgSwapExactAmountOutResponseAmino): MsgSwapExactAmountOutResponse {
    return {
      token_in_amount: object.token_in_amount
    };
  },
  toAmino(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseAmino {
    const obj: any = {};
    obj.token_in_amount = message.token_in_amount;
    return obj;
  },
  fromAminoMsg(object: MsgSwapExactAmountOutResponseAminoMsg): MsgSwapExactAmountOutResponse {
    return MsgSwapExactAmountOutResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseAminoMsg {
    return {
      type: "osmosis/swaprouter/swap-exact-amount-out-response",
      value: MsgSwapExactAmountOutResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSwapExactAmountOutResponseProtoMsg): MsgSwapExactAmountOutResponse {
    return MsgSwapExactAmountOutResponse.decode(message.value);
  },
  toProto(message: MsgSwapExactAmountOutResponse): Uint8Array {
    return MsgSwapExactAmountOutResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseProtoMsg {
    return {
      typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOutResponse",
      value: MsgSwapExactAmountOutResponse.encode(message).finish()
    };
  }
};