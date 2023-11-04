//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
export const protobufPackage = "cosmos.base.node.v1beta1";
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequest {}
export interface ConfigRequestProtoMsg {
  type_url: "/cosmos.base.node.v1beta1.ConfigRequest";
  value: Uint8Array;
}
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
}
export interface ConfigResponseProtoMsg {
  type_url: "/cosmos.base.node.v1beta1.ConfigResponse";
  value: Uint8Array;
}
export interface ConfigResponseProtoMsg {
  type_url: "/cosmos.base.node.v1beta1.ConfigResponse";
  value: Uint8Array;
}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponseAmino {
  minimum_gas_price: string;
}
export interface ConfigResponseAminoMsg {
  type: "cosmos-sdk/ConfigResponse";
  value: ConfigResponseAmino;
}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponseSDKType {
  minimum_gas_price: string;
}
function createBaseConfigRequest(): ConfigRequest {
  return {};
}
export const ConfigRequest = {
  typeUrl: "/cosmos.base.node.v1beta1.ConfigRequest",
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
  fromSDK(_: ConfigRequestSDKType): ConfigRequest {
    return {};
  },
  toSDK(_: ConfigRequest): ConfigRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: ConfigRequestAmino): ConfigRequest {
    return {};
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
function createBaseConfigResponse(): ConfigResponse {
  return {
    minimum_gas_price: ""
  };
}
export const ConfigResponse = {
  typeUrl: "/cosmos.base.node.v1beta1.ConfigResponse",
  encode(message: ConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minimum_gas_price !== "") {
      writer.uint32(10).string(message.minimum_gas_price);
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConfigResponse {
    return {
      minimum_gas_price: isSet(object.minimum_gas_price) ? String(object.minimum_gas_price) : ""
    };
  },
  toJSON(message: ConfigResponse): unknown {
    const obj: any = {};
    message.minimum_gas_price !== undefined && (obj.minimum_gas_price = message.minimum_gas_price);
    return obj;
  },
  fromPartial(object: Partial<ConfigResponse>): ConfigResponse {
    const message = createBaseConfigResponse();
    message.minimum_gas_price = object.minimum_gas_price ?? "";
    return message;
  },
  fromSDK(object: ConfigResponseSDKType): ConfigResponse {
    return {
      minimum_gas_price: object?.minimum_gas_price
    };
  },
  toSDK(message: ConfigResponse): ConfigResponseSDKType {
    const obj: any = {};
    obj.minimum_gas_price = message.minimum_gas_price;
    return obj;
  },
  fromAmino(object: ConfigResponseAmino): ConfigResponse {
    return {
      minimum_gas_price: object.minimum_gas_price
    };
  },
  toAmino(message: ConfigResponse): ConfigResponseAmino {
    const obj: any = {};
    obj.minimum_gas_price = message.minimum_gas_price;
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