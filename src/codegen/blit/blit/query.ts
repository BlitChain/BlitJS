//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export const protobufPackage = "blit.blit";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  type_url: "/blit.blit.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/blit.blit.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  type_url: "/blit.blit.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/blit.blit.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
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
  api_url: string;
  /** rpc_url is the url of the rpc service. It can be set with the ENV variable BLIT_PUBLIC_RPC_URL. */
  rpc_url: string;
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
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/blit.blit.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/blit.blit.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/blit.blit.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
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
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/blit.blit.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseEndpointsRequest(): EndpointsRequest {
  return {};
}
export const EndpointsRequest = {
  typeUrl: "/blit.blit.EndpointsRequest",
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
    return {};
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
function createBaseEndpointsResponse(): EndpointsResponse {
  return {
    api_url: "",
    rpc_url: ""
  };
}
export const EndpointsResponse = {
  typeUrl: "/blit.blit.EndpointsResponse",
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
    return {
      api_url: object.api_url,
      rpc_url: object.rpc_url
    };
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