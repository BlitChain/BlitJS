//@ts-nocheck
import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteSDKType } from "./swap_route";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** =============================== Params */
export interface ParamsRequest {}
export interface ParamsRequestProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.ParamsRequest";
  value: Uint8Array;
}
export interface ParamsRequestProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.ParamsRequest";
  value: Uint8Array;
}
/** =============================== Params */
export interface ParamsRequestAmino {}
export interface ParamsRequestAminoMsg {
  type: "osmosis/swaprouter/params-request";
  value: ParamsRequestAmino;
}
/** =============================== Params */
export interface ParamsRequestSDKType {}
export interface ParamsResponse {
  params: Params;
}
export interface ParamsResponseProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.ParamsResponse";
  value: Uint8Array;
}
export interface ParamsResponseProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.ParamsResponse";
  value: Uint8Array;
}
export interface ParamsResponseAmino {
  params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
  type: "osmosis/swaprouter/params-response";
  value: ParamsResponseAmino;
}
export interface ParamsResponseSDKType {
  params: ParamsSDKType;
}
/** =============================== EstimateSwapExactAmountIn */
export interface EstimateSwapExactAmountInRequest {
  /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
  sender: string;
  pool_id: bigint;
  token_in: string;
  routes: SwapAmountInRoute[];
}
export interface EstimateSwapExactAmountInRequestProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountInRequest";
  value: Uint8Array;
}
export interface EstimateSwapExactAmountInRequestProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountInRequest";
  value: Uint8Array;
}
/** =============================== EstimateSwapExactAmountIn */
export interface EstimateSwapExactAmountInRequestAmino {
  /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
  sender: string;
  pool_id: string;
  token_in: string;
  routes: SwapAmountInRouteAmino[];
}
export interface EstimateSwapExactAmountInRequestAminoMsg {
  type: "osmosis/swaprouter/estimate-swap-exact-amount-in-request";
  value: EstimateSwapExactAmountInRequestAmino;
}
/** =============================== EstimateSwapExactAmountIn */
export interface EstimateSwapExactAmountInRequestSDKType {
  sender: string;
  pool_id: bigint;
  token_in: string;
  routes: SwapAmountInRouteSDKType[];
}
export interface EstimateSwapExactAmountInResponse {
  token_out_amount: string;
}
export interface EstimateSwapExactAmountInResponseProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountInResponse";
  value: Uint8Array;
}
export interface EstimateSwapExactAmountInResponseProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountInResponse";
  value: Uint8Array;
}
export interface EstimateSwapExactAmountInResponseAmino {
  token_out_amount: string;
}
export interface EstimateSwapExactAmountInResponseAminoMsg {
  type: "osmosis/swaprouter/estimate-swap-exact-amount-in-response";
  value: EstimateSwapExactAmountInResponseAmino;
}
export interface EstimateSwapExactAmountInResponseSDKType {
  token_out_amount: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface EstimateSwapExactAmountOutRequest {
  /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
  sender: string;
  pool_id: bigint;
  routes: SwapAmountOutRoute[];
  token_out: string;
}
export interface EstimateSwapExactAmountOutRequestProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountOutRequest";
  value: Uint8Array;
}
export interface EstimateSwapExactAmountOutRequestProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountOutRequest";
  value: Uint8Array;
}
/** =============================== EstimateSwapExactAmountOut */
export interface EstimateSwapExactAmountOutRequestAmino {
  /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
  sender: string;
  pool_id: string;
  routes: SwapAmountOutRouteAmino[];
  token_out: string;
}
export interface EstimateSwapExactAmountOutRequestAminoMsg {
  type: "osmosis/swaprouter/estimate-swap-exact-amount-out-request";
  value: EstimateSwapExactAmountOutRequestAmino;
}
/** =============================== EstimateSwapExactAmountOut */
export interface EstimateSwapExactAmountOutRequestSDKType {
  sender: string;
  pool_id: bigint;
  routes: SwapAmountOutRouteSDKType[];
  token_out: string;
}
export interface EstimateSwapExactAmountOutResponse {
  token_in_amount: string;
}
export interface EstimateSwapExactAmountOutResponseProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountOutResponse";
  value: Uint8Array;
}
export interface EstimateSwapExactAmountOutResponseProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountOutResponse";
  value: Uint8Array;
}
export interface EstimateSwapExactAmountOutResponseAmino {
  token_in_amount: string;
}
export interface EstimateSwapExactAmountOutResponseAminoMsg {
  type: "osmosis/swaprouter/estimate-swap-exact-amount-out-response";
  value: EstimateSwapExactAmountOutResponseAmino;
}
export interface EstimateSwapExactAmountOutResponseSDKType {
  token_in_amount: string;
}
/** =============================== NumPools */
export interface NumPoolsRequest {}
export interface NumPoolsRequestProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.NumPoolsRequest";
  value: Uint8Array;
}
export interface NumPoolsRequestProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.NumPoolsRequest";
  value: Uint8Array;
}
/** =============================== NumPools */
export interface NumPoolsRequestAmino {}
export interface NumPoolsRequestAminoMsg {
  type: "osmosis/swaprouter/num-pools-request";
  value: NumPoolsRequestAmino;
}
/** =============================== NumPools */
export interface NumPoolsRequestSDKType {}
export interface NumPoolsResponse {
  num_pools: bigint;
}
export interface NumPoolsResponseProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.NumPoolsResponse";
  value: Uint8Array;
}
export interface NumPoolsResponseProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.NumPoolsResponse";
  value: Uint8Array;
}
export interface NumPoolsResponseAmino {
  num_pools: string;
}
export interface NumPoolsResponseAminoMsg {
  type: "osmosis/swaprouter/num-pools-response";
  value: NumPoolsResponseAmino;
}
export interface NumPoolsResponseSDKType {
  num_pools: bigint;
}
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/osmosis.swaprouter.v1beta1.ParamsRequest",
  encode(_: ParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRequest();
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
  fromJSON(_: any): ParamsRequest {
    return {};
  },
  toJSON(_: ParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<ParamsRequest>): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  fromSDK(_: ParamsRequestSDKType): ParamsRequest {
    return {};
  },
  toSDK(_: ParamsRequest): ParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: ParamsRequestAmino): ParamsRequest {
    return {};
  },
  toAmino(_: ParamsRequest): ParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest {
    return ParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ParamsRequest): ParamsRequestAminoMsg {
    return {
      type: "osmosis/swaprouter/params-request",
      value: ParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest {
    return ParamsRequest.decode(message.value);
  },
  toProto(message: ParamsRequest): Uint8Array {
    return ParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.swaprouter.v1beta1.ParamsRequest",
      value: ParamsRequest.encode(message).finish()
    };
  }
};
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const ParamsResponse = {
  typeUrl: "/osmosis.swaprouter.v1beta1.ParamsResponse",
  encode(message: ParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: ParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ParamsResponse>): ParamsResponse {
    const message = createBaseParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: ParamsResponseSDKType): ParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: ParamsResponse): ParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: ParamsResponseAmino): ParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: ParamsResponse): ParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse {
    return ParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ParamsResponse): ParamsResponseAminoMsg {
    return {
      type: "osmosis/swaprouter/params-response",
      value: ParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse {
    return ParamsResponse.decode(message.value);
  },
  toProto(message: ParamsResponse): Uint8Array {
    return ParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.swaprouter.v1beta1.ParamsResponse",
      value: ParamsResponse.encode(message).finish()
    };
  }
};
function createBaseEstimateSwapExactAmountInRequest(): EstimateSwapExactAmountInRequest {
  return {
    sender: "",
    pool_id: BigInt(0),
    token_in: "",
    routes: []
  };
}
export const EstimateSwapExactAmountInRequest = {
  typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountInRequest",
  encode(message: EstimateSwapExactAmountInRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountInRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountInRequest();
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
  fromJSON(object: any): EstimateSwapExactAmountInRequest {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      token_in: isSet(object.token_in) ? String(object.token_in) : "",
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromJSON(e)) : []
    };
  },
  toJSON(message: EstimateSwapExactAmountInRequest): unknown {
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
  fromPartial(object: Partial<EstimateSwapExactAmountInRequest>): EstimateSwapExactAmountInRequest {
    const message = createBaseEstimateSwapExactAmountInRequest();
    message.sender = object.sender ?? "";
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.token_in = object.token_in ?? "";
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: EstimateSwapExactAmountInRequestSDKType): EstimateSwapExactAmountInRequest {
    return {
      sender: object?.sender,
      pool_id: object?.pool_id,
      token_in: object?.token_in,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromSDK(e)) : []
    };
  },
  toSDK(message: EstimateSwapExactAmountInRequest): EstimateSwapExactAmountInRequestSDKType {
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
  fromAmino(object: EstimateSwapExactAmountInRequestAmino): EstimateSwapExactAmountInRequest {
    return {
      sender: object.sender,
      pool_id: BigInt(object.pool_id),
      token_in: object.token_in,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromAmino(e)) : []
    };
  },
  toAmino(message: EstimateSwapExactAmountInRequest): EstimateSwapExactAmountInRequestAmino {
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
  fromAminoMsg(object: EstimateSwapExactAmountInRequestAminoMsg): EstimateSwapExactAmountInRequest {
    return EstimateSwapExactAmountInRequest.fromAmino(object.value);
  },
  toAminoMsg(message: EstimateSwapExactAmountInRequest): EstimateSwapExactAmountInRequestAminoMsg {
    return {
      type: "osmosis/swaprouter/estimate-swap-exact-amount-in-request",
      value: EstimateSwapExactAmountInRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: EstimateSwapExactAmountInRequestProtoMsg): EstimateSwapExactAmountInRequest {
    return EstimateSwapExactAmountInRequest.decode(message.value);
  },
  toProto(message: EstimateSwapExactAmountInRequest): Uint8Array {
    return EstimateSwapExactAmountInRequest.encode(message).finish();
  },
  toProtoMsg(message: EstimateSwapExactAmountInRequest): EstimateSwapExactAmountInRequestProtoMsg {
    return {
      typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountInRequest",
      value: EstimateSwapExactAmountInRequest.encode(message).finish()
    };
  }
};
function createBaseEstimateSwapExactAmountInResponse(): EstimateSwapExactAmountInResponse {
  return {
    token_out_amount: ""
  };
}
export const EstimateSwapExactAmountInResponse = {
  typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountInResponse",
  encode(message: EstimateSwapExactAmountInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token_out_amount !== "") {
      writer.uint32(10).string(message.token_out_amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountInResponse();
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
  fromJSON(object: any): EstimateSwapExactAmountInResponse {
    return {
      token_out_amount: isSet(object.token_out_amount) ? String(object.token_out_amount) : ""
    };
  },
  toJSON(message: EstimateSwapExactAmountInResponse): unknown {
    const obj: any = {};
    message.token_out_amount !== undefined && (obj.token_out_amount = message.token_out_amount);
    return obj;
  },
  fromPartial(object: Partial<EstimateSwapExactAmountInResponse>): EstimateSwapExactAmountInResponse {
    const message = createBaseEstimateSwapExactAmountInResponse();
    message.token_out_amount = object.token_out_amount ?? "";
    return message;
  },
  fromSDK(object: EstimateSwapExactAmountInResponseSDKType): EstimateSwapExactAmountInResponse {
    return {
      token_out_amount: object?.token_out_amount
    };
  },
  toSDK(message: EstimateSwapExactAmountInResponse): EstimateSwapExactAmountInResponseSDKType {
    const obj: any = {};
    obj.token_out_amount = message.token_out_amount;
    return obj;
  },
  fromAmino(object: EstimateSwapExactAmountInResponseAmino): EstimateSwapExactAmountInResponse {
    return {
      token_out_amount: object.token_out_amount
    };
  },
  toAmino(message: EstimateSwapExactAmountInResponse): EstimateSwapExactAmountInResponseAmino {
    const obj: any = {};
    obj.token_out_amount = message.token_out_amount;
    return obj;
  },
  fromAminoMsg(object: EstimateSwapExactAmountInResponseAminoMsg): EstimateSwapExactAmountInResponse {
    return EstimateSwapExactAmountInResponse.fromAmino(object.value);
  },
  toAminoMsg(message: EstimateSwapExactAmountInResponse): EstimateSwapExactAmountInResponseAminoMsg {
    return {
      type: "osmosis/swaprouter/estimate-swap-exact-amount-in-response",
      value: EstimateSwapExactAmountInResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: EstimateSwapExactAmountInResponseProtoMsg): EstimateSwapExactAmountInResponse {
    return EstimateSwapExactAmountInResponse.decode(message.value);
  },
  toProto(message: EstimateSwapExactAmountInResponse): Uint8Array {
    return EstimateSwapExactAmountInResponse.encode(message).finish();
  },
  toProtoMsg(message: EstimateSwapExactAmountInResponse): EstimateSwapExactAmountInResponseProtoMsg {
    return {
      typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountInResponse",
      value: EstimateSwapExactAmountInResponse.encode(message).finish()
    };
  }
};
function createBaseEstimateSwapExactAmountOutRequest(): EstimateSwapExactAmountOutRequest {
  return {
    sender: "",
    pool_id: BigInt(0),
    routes: [],
    token_out: ""
  };
}
export const EstimateSwapExactAmountOutRequest = {
  typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountOutRequest",
  encode(message: EstimateSwapExactAmountOutRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountOutRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountOutRequest();
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
  fromJSON(object: any): EstimateSwapExactAmountOutRequest {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromJSON(e)) : [],
      token_out: isSet(object.token_out) ? String(object.token_out) : ""
    };
  },
  toJSON(message: EstimateSwapExactAmountOutRequest): unknown {
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
  fromPartial(object: Partial<EstimateSwapExactAmountOutRequest>): EstimateSwapExactAmountOutRequest {
    const message = createBaseEstimateSwapExactAmountOutRequest();
    message.sender = object.sender ?? "";
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.routes = object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
    message.token_out = object.token_out ?? "";
    return message;
  },
  fromSDK(object: EstimateSwapExactAmountOutRequestSDKType): EstimateSwapExactAmountOutRequest {
    return {
      sender: object?.sender,
      pool_id: object?.pool_id,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromSDK(e)) : [],
      token_out: object?.token_out
    };
  },
  toSDK(message: EstimateSwapExactAmountOutRequest): EstimateSwapExactAmountOutRequestSDKType {
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
  fromAmino(object: EstimateSwapExactAmountOutRequestAmino): EstimateSwapExactAmountOutRequest {
    return {
      sender: object.sender,
      pool_id: BigInt(object.pool_id),
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromAmino(e)) : [],
      token_out: object.token_out
    };
  },
  toAmino(message: EstimateSwapExactAmountOutRequest): EstimateSwapExactAmountOutRequestAmino {
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
  fromAminoMsg(object: EstimateSwapExactAmountOutRequestAminoMsg): EstimateSwapExactAmountOutRequest {
    return EstimateSwapExactAmountOutRequest.fromAmino(object.value);
  },
  toAminoMsg(message: EstimateSwapExactAmountOutRequest): EstimateSwapExactAmountOutRequestAminoMsg {
    return {
      type: "osmosis/swaprouter/estimate-swap-exact-amount-out-request",
      value: EstimateSwapExactAmountOutRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: EstimateSwapExactAmountOutRequestProtoMsg): EstimateSwapExactAmountOutRequest {
    return EstimateSwapExactAmountOutRequest.decode(message.value);
  },
  toProto(message: EstimateSwapExactAmountOutRequest): Uint8Array {
    return EstimateSwapExactAmountOutRequest.encode(message).finish();
  },
  toProtoMsg(message: EstimateSwapExactAmountOutRequest): EstimateSwapExactAmountOutRequestProtoMsg {
    return {
      typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountOutRequest",
      value: EstimateSwapExactAmountOutRequest.encode(message).finish()
    };
  }
};
function createBaseEstimateSwapExactAmountOutResponse(): EstimateSwapExactAmountOutResponse {
  return {
    token_in_amount: ""
  };
}
export const EstimateSwapExactAmountOutResponse = {
  typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountOutResponse",
  encode(message: EstimateSwapExactAmountOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token_in_amount !== "") {
      writer.uint32(10).string(message.token_in_amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountOutResponse();
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
  fromJSON(object: any): EstimateSwapExactAmountOutResponse {
    return {
      token_in_amount: isSet(object.token_in_amount) ? String(object.token_in_amount) : ""
    };
  },
  toJSON(message: EstimateSwapExactAmountOutResponse): unknown {
    const obj: any = {};
    message.token_in_amount !== undefined && (obj.token_in_amount = message.token_in_amount);
    return obj;
  },
  fromPartial(object: Partial<EstimateSwapExactAmountOutResponse>): EstimateSwapExactAmountOutResponse {
    const message = createBaseEstimateSwapExactAmountOutResponse();
    message.token_in_amount = object.token_in_amount ?? "";
    return message;
  },
  fromSDK(object: EstimateSwapExactAmountOutResponseSDKType): EstimateSwapExactAmountOutResponse {
    return {
      token_in_amount: object?.token_in_amount
    };
  },
  toSDK(message: EstimateSwapExactAmountOutResponse): EstimateSwapExactAmountOutResponseSDKType {
    const obj: any = {};
    obj.token_in_amount = message.token_in_amount;
    return obj;
  },
  fromAmino(object: EstimateSwapExactAmountOutResponseAmino): EstimateSwapExactAmountOutResponse {
    return {
      token_in_amount: object.token_in_amount
    };
  },
  toAmino(message: EstimateSwapExactAmountOutResponse): EstimateSwapExactAmountOutResponseAmino {
    const obj: any = {};
    obj.token_in_amount = message.token_in_amount;
    return obj;
  },
  fromAminoMsg(object: EstimateSwapExactAmountOutResponseAminoMsg): EstimateSwapExactAmountOutResponse {
    return EstimateSwapExactAmountOutResponse.fromAmino(object.value);
  },
  toAminoMsg(message: EstimateSwapExactAmountOutResponse): EstimateSwapExactAmountOutResponseAminoMsg {
    return {
      type: "osmosis/swaprouter/estimate-swap-exact-amount-out-response",
      value: EstimateSwapExactAmountOutResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: EstimateSwapExactAmountOutResponseProtoMsg): EstimateSwapExactAmountOutResponse {
    return EstimateSwapExactAmountOutResponse.decode(message.value);
  },
  toProto(message: EstimateSwapExactAmountOutResponse): Uint8Array {
    return EstimateSwapExactAmountOutResponse.encode(message).finish();
  },
  toProtoMsg(message: EstimateSwapExactAmountOutResponse): EstimateSwapExactAmountOutResponseProtoMsg {
    return {
      typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountOutResponse",
      value: EstimateSwapExactAmountOutResponse.encode(message).finish()
    };
  }
};
function createBaseNumPoolsRequest(): NumPoolsRequest {
  return {};
}
export const NumPoolsRequest = {
  typeUrl: "/osmosis.swaprouter.v1beta1.NumPoolsRequest",
  encode(_: NumPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NumPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumPoolsRequest();
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
  fromJSON(_: any): NumPoolsRequest {
    return {};
  },
  toJSON(_: NumPoolsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<NumPoolsRequest>): NumPoolsRequest {
    const message = createBaseNumPoolsRequest();
    return message;
  },
  fromSDK(_: NumPoolsRequestSDKType): NumPoolsRequest {
    return {};
  },
  toSDK(_: NumPoolsRequest): NumPoolsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: NumPoolsRequestAmino): NumPoolsRequest {
    return {};
  },
  toAmino(_: NumPoolsRequest): NumPoolsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: NumPoolsRequestAminoMsg): NumPoolsRequest {
    return NumPoolsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: NumPoolsRequest): NumPoolsRequestAminoMsg {
    return {
      type: "osmosis/swaprouter/num-pools-request",
      value: NumPoolsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: NumPoolsRequestProtoMsg): NumPoolsRequest {
    return NumPoolsRequest.decode(message.value);
  },
  toProto(message: NumPoolsRequest): Uint8Array {
    return NumPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: NumPoolsRequest): NumPoolsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.swaprouter.v1beta1.NumPoolsRequest",
      value: NumPoolsRequest.encode(message).finish()
    };
  }
};
function createBaseNumPoolsResponse(): NumPoolsResponse {
  return {
    num_pools: BigInt(0)
  };
}
export const NumPoolsResponse = {
  typeUrl: "/osmosis.swaprouter.v1beta1.NumPoolsResponse",
  encode(message: NumPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.num_pools !== BigInt(0)) {
      writer.uint32(8).uint64(message.num_pools);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NumPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumPoolsResponse();
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
  fromJSON(object: any): NumPoolsResponse {
    return {
      num_pools: isSet(object.num_pools) ? BigInt(object.num_pools.toString()) : BigInt(0)
    };
  },
  toJSON(message: NumPoolsResponse): unknown {
    const obj: any = {};
    message.num_pools !== undefined && (obj.num_pools = (message.num_pools || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<NumPoolsResponse>): NumPoolsResponse {
    const message = createBaseNumPoolsResponse();
    message.num_pools = object.num_pools !== undefined && object.num_pools !== null ? BigInt(object.num_pools.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: NumPoolsResponseSDKType): NumPoolsResponse {
    return {
      num_pools: object?.num_pools
    };
  },
  toSDK(message: NumPoolsResponse): NumPoolsResponseSDKType {
    const obj: any = {};
    obj.num_pools = message.num_pools;
    return obj;
  },
  fromAmino(object: NumPoolsResponseAmino): NumPoolsResponse {
    return {
      num_pools: BigInt(object.num_pools)
    };
  },
  toAmino(message: NumPoolsResponse): NumPoolsResponseAmino {
    const obj: any = {};
    obj.num_pools = message.num_pools ? message.num_pools.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: NumPoolsResponseAminoMsg): NumPoolsResponse {
    return NumPoolsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: NumPoolsResponse): NumPoolsResponseAminoMsg {
    return {
      type: "osmosis/swaprouter/num-pools-response",
      value: NumPoolsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: NumPoolsResponseProtoMsg): NumPoolsResponse {
    return NumPoolsResponse.decode(message.value);
  },
  toProto(message: NumPoolsResponse): Uint8Array {
    return NumPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: NumPoolsResponse): NumPoolsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.swaprouter.v1beta1.NumPoolsResponse",
      value: NumPoolsResponse.encode(message).finish()
    };
  }
};