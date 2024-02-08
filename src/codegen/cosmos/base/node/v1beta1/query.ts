//@ts-nocheck
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { isSet, toTimestamp, fromTimestamp, fromJsonTimestamp, bytesFromBase64, base64FromBytes } from "../../../../helpers";
export const protobufPackage = "cosmos.base.node.v1beta1";
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequest {}
export interface ConfigRequestProtoMsg {
  type_url: "/cosmos.base.node.v1beta1.ConfigRequest";
  value: Uint8Array;
}
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequestAmino {}
export interface ConfigRequestAminoMsg {
  type: "cosmos-sdk/ConfigRequest";
  value: ConfigRequestAmino;
}
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequestSDKType {}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponse {
  minimum_gas_price: string;
  /** pruning settings */
  pruning_keep_recent: string;
  pruning_interval: string;
}
export interface ConfigResponseProtoMsg {
  type_url: "/cosmos.base.node.v1beta1.ConfigResponse";
  value: Uint8Array;
}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponseAmino {
  minimum_gas_price?: string;
  /** pruning settings */
  pruning_keep_recent?: string;
  pruning_interval?: string;
}
export interface ConfigResponseAminoMsg {
  type: "cosmos-sdk/ConfigResponse";
  value: ConfigResponseAmino;
}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponseSDKType {
  minimum_gas_price: string;
  pruning_keep_recent: string;
  pruning_interval: string;
}
/** StateRequest defines the request structure for the status of a node. */
export interface StatusRequest {}
export interface StatusRequestProtoMsg {
  type_url: "/cosmos.base.node.v1beta1.StatusRequest";
  value: Uint8Array;
}
/** StateRequest defines the request structure for the status of a node. */
export interface StatusRequestAmino {}
export interface StatusRequestAminoMsg {
  type: "cosmos-sdk/StatusRequest";
  value: StatusRequestAmino;
}
/** StateRequest defines the request structure for the status of a node. */
export interface StatusRequestSDKType {}
/** StateResponse defines the response structure for the status of a node. */
export interface StatusResponse {
  /** earliest block height available in the store */
  earliest_store_height: bigint;
  /** current block height */
  height: bigint;
  /** block height timestamp */
  timestamp?: Date;
  /** app hash of the current block */
  app_hash: Uint8Array;
  /** validator hash provided by the consensus header */
  validator_hash: Uint8Array;
}
export interface StatusResponseProtoMsg {
  type_url: "/cosmos.base.node.v1beta1.StatusResponse";
  value: Uint8Array;
}
/** StateResponse defines the response structure for the status of a node. */
export interface StatusResponseAmino {
  /** earliest block height available in the store */
  earliest_store_height?: string;
  /** current block height */
  height?: string;
  /** block height timestamp */
  timestamp?: string;
  /** app hash of the current block */
  app_hash?: string;
  /** validator hash provided by the consensus header */
  validator_hash?: string;
}
export interface StatusResponseAminoMsg {
  type: "cosmos-sdk/StatusResponse";
  value: StatusResponseAmino;
}
/** StateResponse defines the response structure for the status of a node. */
export interface StatusResponseSDKType {
  earliest_store_height: bigint;
  height: bigint;
  timestamp?: Date;
  app_hash: Uint8Array;
  validator_hash: Uint8Array;
}
function createBaseConfigRequest(): ConfigRequest {
  return {};
}
export const ConfigRequest = {
  typeUrl: "/cosmos.base.node.v1beta1.ConfigRequest",
  aminoType: "cosmos-sdk/ConfigRequest",
  is(o: any): o is ConfigRequest {
    return o && o.$typeUrl === ConfigRequest.typeUrl;
  },
  isSDK(o: any): o is ConfigRequestSDKType {
    return o && o.$typeUrl === ConfigRequest.typeUrl;
  },
  isAmino(o: any): o is ConfigRequestAmino {
    return o && o.$typeUrl === ConfigRequest.typeUrl;
  },
  encode(_: ConfigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigRequest();
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
  fromJSON(_: any): ConfigRequest {
    return {};
  },
  toJSON(_: ConfigRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<ConfigRequest>): ConfigRequest {
    const message = createBaseConfigRequest();
    return message;
  },
  fromAmino(_: ConfigRequestAmino): ConfigRequest {
    const message = createBaseConfigRequest();
    return message;
  },
  toAmino(_: ConfigRequest): ConfigRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ConfigRequestAminoMsg): ConfigRequest {
    return ConfigRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ConfigRequest): ConfigRequestAminoMsg {
    return {
      type: "cosmos-sdk/ConfigRequest",
      value: ConfigRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ConfigRequestProtoMsg): ConfigRequest {
    return ConfigRequest.decode(message.value);
  },
  toProto(message: ConfigRequest): Uint8Array {
    return ConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: ConfigRequest): ConfigRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.node.v1beta1.ConfigRequest",
      value: ConfigRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ConfigRequest.typeUrl, ConfigRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ConfigRequest.aminoType, ConfigRequest.typeUrl);
function createBaseConfigResponse(): ConfigResponse {
  return {
    minimum_gas_price: "",
    pruning_keep_recent: "",
    pruning_interval: ""
  };
}
export const ConfigResponse = {
  typeUrl: "/cosmos.base.node.v1beta1.ConfigResponse",
  aminoType: "cosmos-sdk/ConfigResponse",
  is(o: any): o is ConfigResponse {
    return o && (o.$typeUrl === ConfigResponse.typeUrl || typeof o.minimum_gas_price === "string" && typeof o.pruning_keep_recent === "string" && typeof o.pruning_interval === "string");
  },
  isSDK(o: any): o is ConfigResponseSDKType {
    return o && (o.$typeUrl === ConfigResponse.typeUrl || typeof o.minimum_gas_price === "string" && typeof o.pruning_keep_recent === "string" && typeof o.pruning_interval === "string");
  },
  isAmino(o: any): o is ConfigResponseAmino {
    return o && (o.$typeUrl === ConfigResponse.typeUrl || typeof o.minimum_gas_price === "string" && typeof o.pruning_keep_recent === "string" && typeof o.pruning_interval === "string");
  },
  encode(message: ConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minimum_gas_price !== "") {
      writer.uint32(10).string(message.minimum_gas_price);
    }
    if (message.pruning_keep_recent !== "") {
      writer.uint32(18).string(message.pruning_keep_recent);
    }
    if (message.pruning_interval !== "") {
      writer.uint32(26).string(message.pruning_interval);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minimum_gas_price = reader.string();
          break;
        case 2:
          message.pruning_keep_recent = reader.string();
          break;
        case 3:
          message.pruning_interval = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConfigResponse {
    return {
      minimum_gas_price: isSet(object.minimum_gas_price) ? String(object.minimum_gas_price) : "",
      pruning_keep_recent: isSet(object.pruning_keep_recent) ? String(object.pruning_keep_recent) : "",
      pruning_interval: isSet(object.pruning_interval) ? String(object.pruning_interval) : ""
    };
  },
  toJSON(message: ConfigResponse): unknown {
    const obj: any = {};
    message.minimum_gas_price !== undefined && (obj.minimum_gas_price = message.minimum_gas_price);
    message.pruning_keep_recent !== undefined && (obj.pruning_keep_recent = message.pruning_keep_recent);
    message.pruning_interval !== undefined && (obj.pruning_interval = message.pruning_interval);
    return obj;
  },
  fromPartial(object: Partial<ConfigResponse>): ConfigResponse {
    const message = createBaseConfigResponse();
    message.minimum_gas_price = object.minimum_gas_price ?? "";
    message.pruning_keep_recent = object.pruning_keep_recent ?? "";
    message.pruning_interval = object.pruning_interval ?? "";
    return message;
  },
  fromAmino(object: ConfigResponseAmino): ConfigResponse {
    const message = createBaseConfigResponse();
    if (object.minimum_gas_price !== undefined && object.minimum_gas_price !== null) {
      message.minimum_gas_price = object.minimum_gas_price;
    }
    if (object.pruning_keep_recent !== undefined && object.pruning_keep_recent !== null) {
      message.pruning_keep_recent = object.pruning_keep_recent;
    }
    if (object.pruning_interval !== undefined && object.pruning_interval !== null) {
      message.pruning_interval = object.pruning_interval;
    }
    return message;
  },
  toAmino(message: ConfigResponse): ConfigResponseAmino {
    const obj: any = {};
    obj.minimum_gas_price = message.minimum_gas_price;
    obj.pruning_keep_recent = message.pruning_keep_recent;
    obj.pruning_interval = message.pruning_interval;
    return obj;
  },
  fromAminoMsg(object: ConfigResponseAminoMsg): ConfigResponse {
    return ConfigResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ConfigResponse): ConfigResponseAminoMsg {
    return {
      type: "cosmos-sdk/ConfigResponse",
      value: ConfigResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ConfigResponseProtoMsg): ConfigResponse {
    return ConfigResponse.decode(message.value);
  },
  toProto(message: ConfigResponse): Uint8Array {
    return ConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: ConfigResponse): ConfigResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.node.v1beta1.ConfigResponse",
      value: ConfigResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ConfigResponse.typeUrl, ConfigResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ConfigResponse.aminoType, ConfigResponse.typeUrl);
function createBaseStatusRequest(): StatusRequest {
  return {};
}
export const StatusRequest = {
  typeUrl: "/cosmos.base.node.v1beta1.StatusRequest",
  aminoType: "cosmos-sdk/StatusRequest",
  is(o: any): o is StatusRequest {
    return o && o.$typeUrl === StatusRequest.typeUrl;
  },
  isSDK(o: any): o is StatusRequestSDKType {
    return o && o.$typeUrl === StatusRequest.typeUrl;
  },
  isAmino(o: any): o is StatusRequestAmino {
    return o && o.$typeUrl === StatusRequest.typeUrl;
  },
  encode(_: StatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusRequest();
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
  fromJSON(_: any): StatusRequest {
    return {};
  },
  toJSON(_: StatusRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<StatusRequest>): StatusRequest {
    const message = createBaseStatusRequest();
    return message;
  },
  fromAmino(_: StatusRequestAmino): StatusRequest {
    const message = createBaseStatusRequest();
    return message;
  },
  toAmino(_: StatusRequest): StatusRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: StatusRequestAminoMsg): StatusRequest {
    return StatusRequest.fromAmino(object.value);
  },
  toAminoMsg(message: StatusRequest): StatusRequestAminoMsg {
    return {
      type: "cosmos-sdk/StatusRequest",
      value: StatusRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: StatusRequestProtoMsg): StatusRequest {
    return StatusRequest.decode(message.value);
  },
  toProto(message: StatusRequest): Uint8Array {
    return StatusRequest.encode(message).finish();
  },
  toProtoMsg(message: StatusRequest): StatusRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.node.v1beta1.StatusRequest",
      value: StatusRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StatusRequest.typeUrl, StatusRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(StatusRequest.aminoType, StatusRequest.typeUrl);
function createBaseStatusResponse(): StatusResponse {
  return {
    earliest_store_height: BigInt(0),
    height: BigInt(0),
    timestamp: undefined,
    app_hash: new Uint8Array(),
    validator_hash: new Uint8Array()
  };
}
export const StatusResponse = {
  typeUrl: "/cosmos.base.node.v1beta1.StatusResponse",
  aminoType: "cosmos-sdk/StatusResponse",
  is(o: any): o is StatusResponse {
    return o && (o.$typeUrl === StatusResponse.typeUrl || typeof o.earliest_store_height === "bigint" && typeof o.height === "bigint" && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string") && (o.validator_hash instanceof Uint8Array || typeof o.validator_hash === "string"));
  },
  isSDK(o: any): o is StatusResponseSDKType {
    return o && (o.$typeUrl === StatusResponse.typeUrl || typeof o.earliest_store_height === "bigint" && typeof o.height === "bigint" && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string") && (o.validator_hash instanceof Uint8Array || typeof o.validator_hash === "string"));
  },
  isAmino(o: any): o is StatusResponseAmino {
    return o && (o.$typeUrl === StatusResponse.typeUrl || typeof o.earliest_store_height === "bigint" && typeof o.height === "bigint" && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string") && (o.validator_hash instanceof Uint8Array || typeof o.validator_hash === "string"));
  },
  encode(message: StatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.earliest_store_height !== BigInt(0)) {
      writer.uint32(8).uint64(message.earliest_store_height);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
    }
    if (message.app_hash.length !== 0) {
      writer.uint32(34).bytes(message.app_hash);
    }
    if (message.validator_hash.length !== 0) {
      writer.uint32(42).bytes(message.validator_hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.earliest_store_height = reader.uint64();
          break;
        case 2:
          message.height = reader.uint64();
          break;
        case 3:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.app_hash = reader.bytes();
          break;
        case 5:
          message.validator_hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StatusResponse {
    return {
      earliest_store_height: isSet(object.earliest_store_height) ? BigInt(object.earliest_store_height.toString()) : BigInt(0),
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      app_hash: isSet(object.app_hash) ? bytesFromBase64(object.app_hash) : new Uint8Array(),
      validator_hash: isSet(object.validator_hash) ? bytesFromBase64(object.validator_hash) : new Uint8Array()
    };
  },
  toJSON(message: StatusResponse): unknown {
    const obj: any = {};
    message.earliest_store_height !== undefined && (obj.earliest_store_height = (message.earliest_store_height || BigInt(0)).toString());
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.app_hash !== undefined && (obj.app_hash = base64FromBytes(message.app_hash !== undefined ? message.app_hash : new Uint8Array()));
    message.validator_hash !== undefined && (obj.validator_hash = base64FromBytes(message.validator_hash !== undefined ? message.validator_hash : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<StatusResponse>): StatusResponse {
    const message = createBaseStatusResponse();
    message.earliest_store_height = object.earliest_store_height !== undefined && object.earliest_store_height !== null ? BigInt(object.earliest_store_height.toString()) : BigInt(0);
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.timestamp = object.timestamp ?? undefined;
    message.app_hash = object.app_hash ?? new Uint8Array();
    message.validator_hash = object.validator_hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: StatusResponseAmino): StatusResponse {
    const message = createBaseStatusResponse();
    if (object.earliest_store_height !== undefined && object.earliest_store_height !== null) {
      message.earliest_store_height = BigInt(object.earliest_store_height);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    if (object.app_hash !== undefined && object.app_hash !== null) {
      message.app_hash = bytesFromBase64(object.app_hash);
    }
    if (object.validator_hash !== undefined && object.validator_hash !== null) {
      message.validator_hash = bytesFromBase64(object.validator_hash);
    }
    return message;
  },
  toAmino(message: StatusResponse): StatusResponseAmino {
    const obj: any = {};
    obj.earliest_store_height = message.earliest_store_height ? message.earliest_store_height.toString() : undefined;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    obj.app_hash = message.app_hash ? base64FromBytes(message.app_hash) : undefined;
    obj.validator_hash = message.validator_hash ? base64FromBytes(message.validator_hash) : undefined;
    return obj;
  },
  fromAminoMsg(object: StatusResponseAminoMsg): StatusResponse {
    return StatusResponse.fromAmino(object.value);
  },
  toAminoMsg(message: StatusResponse): StatusResponseAminoMsg {
    return {
      type: "cosmos-sdk/StatusResponse",
      value: StatusResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: StatusResponseProtoMsg): StatusResponse {
    return StatusResponse.decode(message.value);
  },
  toProto(message: StatusResponse): Uint8Array {
    return StatusResponse.encode(message).finish();
  },
  toProtoMsg(message: StatusResponse): StatusResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.node.v1beta1.StatusResponse",
      value: StatusResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StatusResponse.typeUrl, StatusResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(StatusResponse.aminoType, StatusResponse.typeUrl);