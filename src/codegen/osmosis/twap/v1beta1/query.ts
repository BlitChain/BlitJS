//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export interface ArithmeticTwapRequest {
  pool_id: bigint;
  base_asset: string;
  quote_asset: string;
  start_time: Date;
  end_time?: Date;
}
export interface ArithmeticTwapRequestProtoMsg {
  type_url: "/osmosis.twap.v1beta1.ArithmeticTwapRequest";
  value: Uint8Array;
}
export interface ArithmeticTwapRequestProtoMsg {
  type_url: "/osmosis.twap.v1beta1.ArithmeticTwapRequest";
  value: Uint8Array;
}
export interface ArithmeticTwapRequestAmino {
  pool_id: string;
  base_asset: string;
  quote_asset: string;
  start_time?: Date;
  end_time?: Date;
}
export interface ArithmeticTwapRequestAminoMsg {
  type: "osmosis/twap/arithmetic-twap-request";
  value: ArithmeticTwapRequestAmino;
}
export interface ArithmeticTwapRequestSDKType {
  pool_id: bigint;
  base_asset: string;
  quote_asset: string;
  start_time: Date;
  end_time?: Date;
}
export interface ArithmeticTwapResponse {
  arithmetic_twap: string;
}
export interface ArithmeticTwapResponseProtoMsg {
  type_url: "/osmosis.twap.v1beta1.ArithmeticTwapResponse";
  value: Uint8Array;
}
export interface ArithmeticTwapResponseProtoMsg {
  type_url: "/osmosis.twap.v1beta1.ArithmeticTwapResponse";
  value: Uint8Array;
}
export interface ArithmeticTwapResponseAmino {
  arithmetic_twap: string;
}
export interface ArithmeticTwapResponseAminoMsg {
  type: "osmosis/twap/arithmetic-twap-response";
  value: ArithmeticTwapResponseAmino;
}
export interface ArithmeticTwapResponseSDKType {
  arithmetic_twap: string;
}
export interface ArithmeticTwapToNowRequest {
  pool_id: bigint;
  base_asset: string;
  quote_asset: string;
  start_time: Date;
}
export interface ArithmeticTwapToNowRequestProtoMsg {
  type_url: "/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest";
  value: Uint8Array;
}
export interface ArithmeticTwapToNowRequestProtoMsg {
  type_url: "/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest";
  value: Uint8Array;
}
export interface ArithmeticTwapToNowRequestAmino {
  pool_id: string;
  base_asset: string;
  quote_asset: string;
  start_time?: Date;
}
export interface ArithmeticTwapToNowRequestAminoMsg {
  type: "osmosis/twap/arithmetic-twap-to-now-request";
  value: ArithmeticTwapToNowRequestAmino;
}
export interface ArithmeticTwapToNowRequestSDKType {
  pool_id: bigint;
  base_asset: string;
  quote_asset: string;
  start_time: Date;
}
export interface ArithmeticTwapToNowResponse {
  arithmetic_twap: string;
}
export interface ArithmeticTwapToNowResponseProtoMsg {
  type_url: "/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse";
  value: Uint8Array;
}
export interface ArithmeticTwapToNowResponseProtoMsg {
  type_url: "/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse";
  value: Uint8Array;
}
export interface ArithmeticTwapToNowResponseAmino {
  arithmetic_twap: string;
}
export interface ArithmeticTwapToNowResponseAminoMsg {
  type: "osmosis/twap/arithmetic-twap-to-now-response";
  value: ArithmeticTwapToNowResponseAmino;
}
export interface ArithmeticTwapToNowResponseSDKType {
  arithmetic_twap: string;
}
export interface ParamsRequest {}
export interface ParamsRequestProtoMsg {
  type_url: "/osmosis.twap.v1beta1.ParamsRequest";
  value: Uint8Array;
}
export interface ParamsRequestProtoMsg {
  type_url: "/osmosis.twap.v1beta1.ParamsRequest";
  value: Uint8Array;
}
export interface ParamsRequestAmino {}
export interface ParamsRequestAminoMsg {
  type: "osmosis/twap/params-request";
  value: ParamsRequestAmino;
}
export interface ParamsRequestSDKType {}
export interface ParamsResponse {
  params: Params;
}
export interface ParamsResponseProtoMsg {
  type_url: "/osmosis.twap.v1beta1.ParamsResponse";
  value: Uint8Array;
}
export interface ParamsResponseProtoMsg {
  type_url: "/osmosis.twap.v1beta1.ParamsResponse";
  value: Uint8Array;
}
export interface ParamsResponseAmino {
  params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
  type: "osmosis/twap/params-response";
  value: ParamsResponseAmino;
}
export interface ParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseArithmeticTwapRequest(): ArithmeticTwapRequest {
  return {
    pool_id: BigInt(0),
    base_asset: "",
    quote_asset: "",
    start_time: new Date(),
    end_time: undefined
  };
}
export const ArithmeticTwapRequest = {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapRequest",
  encode(message: ArithmeticTwapRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.base_asset !== "") {
      writer.uint32(18).string(message.base_asset);
    }
    if (message.quote_asset !== "") {
      writer.uint32(26).string(message.quote_asset);
    }
    if (message.start_time !== undefined) {
      Timestamp.encode(toTimestamp(message.start_time), writer.uint32(34).fork()).ldelim();
    }
    if (message.end_time !== undefined) {
      Timestamp.encode(toTimestamp(message.end_time), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ArithmeticTwapRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArithmeticTwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = reader.uint64();
          break;
        case 2:
          message.base_asset = reader.string();
          break;
        case 3:
          message.quote_asset = reader.string();
          break;
        case 4:
          message.start_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.end_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ArithmeticTwapRequest {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      base_asset: isSet(object.base_asset) ? String(object.base_asset) : "",
      quote_asset: isSet(object.quote_asset) ? String(object.quote_asset) : "",
      start_time: isSet(object.start_time) ? fromJsonTimestamp(object.start_time) : undefined,
      end_time: isSet(object.end_time) ? fromJsonTimestamp(object.end_time) : undefined
    };
  },
  toJSON(message: ArithmeticTwapRequest): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    message.base_asset !== undefined && (obj.base_asset = message.base_asset);
    message.quote_asset !== undefined && (obj.quote_asset = message.quote_asset);
    message.start_time !== undefined && (obj.start_time = message.start_time.toISOString());
    message.end_time !== undefined && (obj.end_time = message.end_time.toISOString());
    return obj;
  },
  fromPartial(object: Partial<ArithmeticTwapRequest>): ArithmeticTwapRequest {
    const message = createBaseArithmeticTwapRequest();
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.base_asset = object.base_asset ?? "";
    message.quote_asset = object.quote_asset ?? "";
    message.start_time = object.start_time ?? undefined;
    message.end_time = object.end_time ?? undefined;
    return message;
  },
  fromSDK(object: ArithmeticTwapRequestSDKType): ArithmeticTwapRequest {
    return {
      pool_id: object?.pool_id,
      base_asset: object?.base_asset,
      quote_asset: object?.quote_asset,
      start_time: object.start_time ? Timestamp.fromSDK(object.start_time) : undefined,
      end_time: object.end_time ? Timestamp.fromSDK(object.end_time) : undefined
    };
  },
  toSDK(message: ArithmeticTwapRequest): ArithmeticTwapRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.pool_id;
    obj.base_asset = message.base_asset;
    obj.quote_asset = message.quote_asset;
    message.start_time !== undefined && (obj.start_time = message.start_time ? Timestamp.toSDK(message.start_time) : undefined);
    message.end_time !== undefined && (obj.end_time = message.end_time ? Timestamp.toSDK(message.end_time) : undefined);
    return obj;
  },
  fromAmino(object: ArithmeticTwapRequestAmino): ArithmeticTwapRequest {
    return {
      pool_id: BigInt(object.pool_id),
      base_asset: object.base_asset,
      quote_asset: object.quote_asset,
      start_time: object.start_time,
      end_time: object?.end_time
    };
  },
  toAmino(message: ArithmeticTwapRequest): ArithmeticTwapRequestAmino {
    const obj: any = {};
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    obj.base_asset = message.base_asset;
    obj.quote_asset = message.quote_asset;
    obj.start_time = message.start_time;
    obj.end_time = message.end_time;
    return obj;
  },
  fromAminoMsg(object: ArithmeticTwapRequestAminoMsg): ArithmeticTwapRequest {
    return ArithmeticTwapRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ArithmeticTwapRequest): ArithmeticTwapRequestAminoMsg {
    return {
      type: "osmosis/twap/arithmetic-twap-request",
      value: ArithmeticTwapRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ArithmeticTwapRequestProtoMsg): ArithmeticTwapRequest {
    return ArithmeticTwapRequest.decode(message.value);
  },
  toProto(message: ArithmeticTwapRequest): Uint8Array {
    return ArithmeticTwapRequest.encode(message).finish();
  },
  toProtoMsg(message: ArithmeticTwapRequest): ArithmeticTwapRequestProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapRequest",
      value: ArithmeticTwapRequest.encode(message).finish()
    };
  }
};
function createBaseArithmeticTwapResponse(): ArithmeticTwapResponse {
  return {
    arithmetic_twap: ""
  };
}
export const ArithmeticTwapResponse = {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapResponse",
  encode(message: ArithmeticTwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.arithmetic_twap !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.arithmetic_twap, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ArithmeticTwapResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArithmeticTwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.arithmetic_twap = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ArithmeticTwapResponse {
    return {
      arithmetic_twap: isSet(object.arithmetic_twap) ? String(object.arithmetic_twap) : ""
    };
  },
  toJSON(message: ArithmeticTwapResponse): unknown {
    const obj: any = {};
    message.arithmetic_twap !== undefined && (obj.arithmetic_twap = message.arithmetic_twap);
    return obj;
  },
  fromPartial(object: Partial<ArithmeticTwapResponse>): ArithmeticTwapResponse {
    const message = createBaseArithmeticTwapResponse();
    message.arithmetic_twap = object.arithmetic_twap ?? "";
    return message;
  },
  fromSDK(object: ArithmeticTwapResponseSDKType): ArithmeticTwapResponse {
    return {
      arithmetic_twap: object?.arithmetic_twap
    };
  },
  toSDK(message: ArithmeticTwapResponse): ArithmeticTwapResponseSDKType {
    const obj: any = {};
    obj.arithmetic_twap = message.arithmetic_twap;
    return obj;
  },
  fromAmino(object: ArithmeticTwapResponseAmino): ArithmeticTwapResponse {
    return {
      arithmetic_twap: object.arithmetic_twap
    };
  },
  toAmino(message: ArithmeticTwapResponse): ArithmeticTwapResponseAmino {
    const obj: any = {};
    obj.arithmetic_twap = message.arithmetic_twap;
    return obj;
  },
  fromAminoMsg(object: ArithmeticTwapResponseAminoMsg): ArithmeticTwapResponse {
    return ArithmeticTwapResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ArithmeticTwapResponse): ArithmeticTwapResponseAminoMsg {
    return {
      type: "osmosis/twap/arithmetic-twap-response",
      value: ArithmeticTwapResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ArithmeticTwapResponseProtoMsg): ArithmeticTwapResponse {
    return ArithmeticTwapResponse.decode(message.value);
  },
  toProto(message: ArithmeticTwapResponse): Uint8Array {
    return ArithmeticTwapResponse.encode(message).finish();
  },
  toProtoMsg(message: ArithmeticTwapResponse): ArithmeticTwapResponseProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapResponse",
      value: ArithmeticTwapResponse.encode(message).finish()
    };
  }
};
function createBaseArithmeticTwapToNowRequest(): ArithmeticTwapToNowRequest {
  return {
    pool_id: BigInt(0),
    base_asset: "",
    quote_asset: "",
    start_time: new Date()
  };
}
export const ArithmeticTwapToNowRequest = {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest",
  encode(message: ArithmeticTwapToNowRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.base_asset !== "") {
      writer.uint32(18).string(message.base_asset);
    }
    if (message.quote_asset !== "") {
      writer.uint32(26).string(message.quote_asset);
    }
    if (message.start_time !== undefined) {
      Timestamp.encode(toTimestamp(message.start_time), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ArithmeticTwapToNowRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArithmeticTwapToNowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = reader.uint64();
          break;
        case 2:
          message.base_asset = reader.string();
          break;
        case 3:
          message.quote_asset = reader.string();
          break;
        case 4:
          message.start_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ArithmeticTwapToNowRequest {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      base_asset: isSet(object.base_asset) ? String(object.base_asset) : "",
      quote_asset: isSet(object.quote_asset) ? String(object.quote_asset) : "",
      start_time: isSet(object.start_time) ? fromJsonTimestamp(object.start_time) : undefined
    };
  },
  toJSON(message: ArithmeticTwapToNowRequest): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    message.base_asset !== undefined && (obj.base_asset = message.base_asset);
    message.quote_asset !== undefined && (obj.quote_asset = message.quote_asset);
    message.start_time !== undefined && (obj.start_time = message.start_time.toISOString());
    return obj;
  },
  fromPartial(object: Partial<ArithmeticTwapToNowRequest>): ArithmeticTwapToNowRequest {
    const message = createBaseArithmeticTwapToNowRequest();
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.base_asset = object.base_asset ?? "";
    message.quote_asset = object.quote_asset ?? "";
    message.start_time = object.start_time ?? undefined;
    return message;
  },
  fromSDK(object: ArithmeticTwapToNowRequestSDKType): ArithmeticTwapToNowRequest {
    return {
      pool_id: object?.pool_id,
      base_asset: object?.base_asset,
      quote_asset: object?.quote_asset,
      start_time: object.start_time ? Timestamp.fromSDK(object.start_time) : undefined
    };
  },
  toSDK(message: ArithmeticTwapToNowRequest): ArithmeticTwapToNowRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.pool_id;
    obj.base_asset = message.base_asset;
    obj.quote_asset = message.quote_asset;
    message.start_time !== undefined && (obj.start_time = message.start_time ? Timestamp.toSDK(message.start_time) : undefined);
    return obj;
  },
  fromAmino(object: ArithmeticTwapToNowRequestAmino): ArithmeticTwapToNowRequest {
    return {
      pool_id: BigInt(object.pool_id),
      base_asset: object.base_asset,
      quote_asset: object.quote_asset,
      start_time: object.start_time
    };
  },
  toAmino(message: ArithmeticTwapToNowRequest): ArithmeticTwapToNowRequestAmino {
    const obj: any = {};
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    obj.base_asset = message.base_asset;
    obj.quote_asset = message.quote_asset;
    obj.start_time = message.start_time;
    return obj;
  },
  fromAminoMsg(object: ArithmeticTwapToNowRequestAminoMsg): ArithmeticTwapToNowRequest {
    return ArithmeticTwapToNowRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ArithmeticTwapToNowRequest): ArithmeticTwapToNowRequestAminoMsg {
    return {
      type: "osmosis/twap/arithmetic-twap-to-now-request",
      value: ArithmeticTwapToNowRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ArithmeticTwapToNowRequestProtoMsg): ArithmeticTwapToNowRequest {
    return ArithmeticTwapToNowRequest.decode(message.value);
  },
  toProto(message: ArithmeticTwapToNowRequest): Uint8Array {
    return ArithmeticTwapToNowRequest.encode(message).finish();
  },
  toProtoMsg(message: ArithmeticTwapToNowRequest): ArithmeticTwapToNowRequestProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest",
      value: ArithmeticTwapToNowRequest.encode(message).finish()
    };
  }
};
function createBaseArithmeticTwapToNowResponse(): ArithmeticTwapToNowResponse {
  return {
    arithmetic_twap: ""
  };
}
export const ArithmeticTwapToNowResponse = {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse",
  encode(message: ArithmeticTwapToNowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.arithmetic_twap !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.arithmetic_twap, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ArithmeticTwapToNowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArithmeticTwapToNowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.arithmetic_twap = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ArithmeticTwapToNowResponse {
    return {
      arithmetic_twap: isSet(object.arithmetic_twap) ? String(object.arithmetic_twap) : ""
    };
  },
  toJSON(message: ArithmeticTwapToNowResponse): unknown {
    const obj: any = {};
    message.arithmetic_twap !== undefined && (obj.arithmetic_twap = message.arithmetic_twap);
    return obj;
  },
  fromPartial(object: Partial<ArithmeticTwapToNowResponse>): ArithmeticTwapToNowResponse {
    const message = createBaseArithmeticTwapToNowResponse();
    message.arithmetic_twap = object.arithmetic_twap ?? "";
    return message;
  },
  fromSDK(object: ArithmeticTwapToNowResponseSDKType): ArithmeticTwapToNowResponse {
    return {
      arithmetic_twap: object?.arithmetic_twap
    };
  },
  toSDK(message: ArithmeticTwapToNowResponse): ArithmeticTwapToNowResponseSDKType {
    const obj: any = {};
    obj.arithmetic_twap = message.arithmetic_twap;
    return obj;
  },
  fromAmino(object: ArithmeticTwapToNowResponseAmino): ArithmeticTwapToNowResponse {
    return {
      arithmetic_twap: object.arithmetic_twap
    };
  },
  toAmino(message: ArithmeticTwapToNowResponse): ArithmeticTwapToNowResponseAmino {
    const obj: any = {};
    obj.arithmetic_twap = message.arithmetic_twap;
    return obj;
  },
  fromAminoMsg(object: ArithmeticTwapToNowResponseAminoMsg): ArithmeticTwapToNowResponse {
    return ArithmeticTwapToNowResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ArithmeticTwapToNowResponse): ArithmeticTwapToNowResponseAminoMsg {
    return {
      type: "osmosis/twap/arithmetic-twap-to-now-response",
      value: ArithmeticTwapToNowResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ArithmeticTwapToNowResponseProtoMsg): ArithmeticTwapToNowResponse {
    return ArithmeticTwapToNowResponse.decode(message.value);
  },
  toProto(message: ArithmeticTwapToNowResponse): Uint8Array {
    return ArithmeticTwapToNowResponse.encode(message).finish();
  },
  toProtoMsg(message: ArithmeticTwapToNowResponse): ArithmeticTwapToNowResponseProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse",
      value: ArithmeticTwapToNowResponse.encode(message).finish()
    };
  }
};
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/osmosis.twap.v1beta1.ParamsRequest",
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
      type: "osmosis/twap/params-request",
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
      typeUrl: "/osmosis.twap.v1beta1.ParamsRequest",
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
  typeUrl: "/osmosis.twap.v1beta1.ParamsResponse",
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
      type: "osmosis/twap/params-response",
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
      typeUrl: "/osmosis.twap.v1beta1.ParamsResponse",
      value: ParamsResponse.encode(message).finish()
    };
  }
};