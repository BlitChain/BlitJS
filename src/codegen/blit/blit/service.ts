//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { isSet } from "../../helpers";
export const protobufPackage = "blit.blit";
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface EndpointsRequest {}
export interface EndpointsRequestProtoMsg {
  type_url: "/blit.blit.EndpointsRequest";
  value: Uint8Array;
}
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface EndpointsRequestAmino {}
export interface EndpointsRequestAminoMsg {
  type: "/blit.blit.EndpointsRequest";
  value: EndpointsRequestAmino;
}
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface EndpointsRequestSDKType {}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface EndpointsResponse {
  /** api_url is the url of the api service. It can be set with the ENV variable BLIT_PUBLIC_API_URL. */
  api_url: string;
  /** rpc_url is the url of the rpc service. It can be set with the ENV variable BLIT_PUBLIC_RPC_URL. */
  rpc_url: string;
}
export interface EndpointsResponseProtoMsg {
  type_url: "/blit.blit.EndpointsResponse";
  value: Uint8Array;
}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface EndpointsResponseAmino {
  /** api_url is the url of the api service. It can be set with the ENV variable BLIT_PUBLIC_API_URL. */
  api_url?: string;
  /** rpc_url is the url of the rpc service. It can be set with the ENV variable BLIT_PUBLIC_RPC_URL. */
  rpc_url?: string;
}
export interface EndpointsResponseAminoMsg {
  type: "/blit.blit.EndpointsResponse";
  value: EndpointsResponseAmino;
}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface EndpointsResponseSDKType {
  api_url: string;
  rpc_url: string;
}
function createBaseEndpointsRequest(): EndpointsRequest {
  return {};
}
export const EndpointsRequest = {
  typeUrl: "/blit.blit.EndpointsRequest",
  is(o: any): o is EndpointsRequest {
    return o && o.$typeUrl === EndpointsRequest.typeUrl;
  },
  isSDK(o: any): o is EndpointsRequestSDKType {
    return o && o.$typeUrl === EndpointsRequest.typeUrl;
  },
  isAmino(o: any): o is EndpointsRequestAmino {
    return o && o.$typeUrl === EndpointsRequest.typeUrl;
  },
  encode(_: EndpointsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EndpointsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndpointsRequest();
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
  fromJSON(_: any): EndpointsRequest {
    return {};
  },
  toJSON(_: EndpointsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<EndpointsRequest>): EndpointsRequest {
    const message = createBaseEndpointsRequest();
    return message;
  },
  fromAmino(_: EndpointsRequestAmino): EndpointsRequest {
    const message = createBaseEndpointsRequest();
    return message;
  },
  toAmino(_: EndpointsRequest): EndpointsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: EndpointsRequestAminoMsg): EndpointsRequest {
    return EndpointsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: EndpointsRequestProtoMsg): EndpointsRequest {
    return EndpointsRequest.decode(message.value);
  },
  toProto(message: EndpointsRequest): Uint8Array {
    return EndpointsRequest.encode(message).finish();
  },
  toProtoMsg(message: EndpointsRequest): EndpointsRequestProtoMsg {
    return {
      typeUrl: "/blit.blit.EndpointsRequest",
      value: EndpointsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EndpointsRequest.typeUrl, EndpointsRequest);
function createBaseEndpointsResponse(): EndpointsResponse {
  return {
    api_url: "",
    rpc_url: ""
  };
}
export const EndpointsResponse = {
  typeUrl: "/blit.blit.EndpointsResponse",
  is(o: any): o is EndpointsResponse {
    return o && (o.$typeUrl === EndpointsResponse.typeUrl || typeof o.api_url === "string" && typeof o.rpc_url === "string");
  },
  isSDK(o: any): o is EndpointsResponseSDKType {
    return o && (o.$typeUrl === EndpointsResponse.typeUrl || typeof o.api_url === "string" && typeof o.rpc_url === "string");
  },
  isAmino(o: any): o is EndpointsResponseAmino {
    return o && (o.$typeUrl === EndpointsResponse.typeUrl || typeof o.api_url === "string" && typeof o.rpc_url === "string");
  },
  encode(message: EndpointsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.api_url !== "") {
      writer.uint32(10).string(message.api_url);
    }
    if (message.rpc_url !== "") {
      writer.uint32(18).string(message.rpc_url);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EndpointsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndpointsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.api_url = reader.string();
          break;
        case 2:
          message.rpc_url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EndpointsResponse {
    return {
      api_url: isSet(object.api_url) ? String(object.api_url) : "",
      rpc_url: isSet(object.rpc_url) ? String(object.rpc_url) : ""
    };
  },
  toJSON(message: EndpointsResponse): unknown {
    const obj: any = {};
    message.api_url !== undefined && (obj.api_url = message.api_url);
    message.rpc_url !== undefined && (obj.rpc_url = message.rpc_url);
    return obj;
  },
  fromPartial(object: Partial<EndpointsResponse>): EndpointsResponse {
    const message = createBaseEndpointsResponse();
    message.api_url = object.api_url ?? "";
    message.rpc_url = object.rpc_url ?? "";
    return message;
  },
  fromAmino(object: EndpointsResponseAmino): EndpointsResponse {
    const message = createBaseEndpointsResponse();
    if (object.api_url !== undefined && object.api_url !== null) {
      message.api_url = object.api_url;
    }
    if (object.rpc_url !== undefined && object.rpc_url !== null) {
      message.rpc_url = object.rpc_url;
    }
    return message;
  },
  toAmino(message: EndpointsResponse): EndpointsResponseAmino {
    const obj: any = {};
    obj.api_url = message.api_url;
    obj.rpc_url = message.rpc_url;
    return obj;
  },
  fromAminoMsg(object: EndpointsResponseAminoMsg): EndpointsResponse {
    return EndpointsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: EndpointsResponseProtoMsg): EndpointsResponse {
    return EndpointsResponse.decode(message.value);
  },
  toProto(message: EndpointsResponse): Uint8Array {
    return EndpointsResponse.encode(message).finish();
  },
  toProtoMsg(message: EndpointsResponse): EndpointsResponseProtoMsg {
    return {
      typeUrl: "/blit.blit.EndpointsResponse",
      value: EndpointsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EndpointsResponse.typeUrl, EndpointsResponse);