//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./mint";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  type_url: "/osmosis.mint.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestProtoMsg {
  type_url: "/osmosis.mint.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "osmosis/mint/query-params-request";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  type_url: "/osmosis.mint.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseProtoMsg {
  type_url: "/osmosis.mint.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "osmosis/mint/query-params-response";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryEpochProvisionsRequest is the request type for the
 * Query/EpochProvisions RPC method.
 */
export interface QueryEpochProvisionsRequest {}
export interface QueryEpochProvisionsRequestProtoMsg {
  type_url: "/osmosis.mint.v1beta1.QueryEpochProvisionsRequest";
  value: Uint8Array;
}
export interface QueryEpochProvisionsRequestProtoMsg {
  type_url: "/osmosis.mint.v1beta1.QueryEpochProvisionsRequest";
  value: Uint8Array;
}
/**
 * QueryEpochProvisionsRequest is the request type for the
 * Query/EpochProvisions RPC method.
 */
export interface QueryEpochProvisionsRequestAmino {}
export interface QueryEpochProvisionsRequestAminoMsg {
  type: "osmosis/mint/query-epoch-provisions-request";
  value: QueryEpochProvisionsRequestAmino;
}
/**
 * QueryEpochProvisionsRequest is the request type for the
 * Query/EpochProvisions RPC method.
 */
export interface QueryEpochProvisionsRequestSDKType {}
/**
 * QueryEpochProvisionsResponse is the response type for the
 * Query/EpochProvisions RPC method.
 */
export interface QueryEpochProvisionsResponse {
  /** epoch_provisions is the current minting per epoch provisions value. */
  epoch_provisions: Uint8Array;
}
export interface QueryEpochProvisionsResponseProtoMsg {
  type_url: "/osmosis.mint.v1beta1.QueryEpochProvisionsResponse";
  value: Uint8Array;
}
export interface QueryEpochProvisionsResponseProtoMsg {
  type_url: "/osmosis.mint.v1beta1.QueryEpochProvisionsResponse";
  value: Uint8Array;
}
/**
 * QueryEpochProvisionsResponse is the response type for the
 * Query/EpochProvisions RPC method.
 */
export interface QueryEpochProvisionsResponseAmino {
  /** epoch_provisions is the current minting per epoch provisions value. */
  epoch_provisions: Uint8Array;
}
export interface QueryEpochProvisionsResponseAminoMsg {
  type: "osmosis/mint/query-epoch-provisions-response";
  value: QueryEpochProvisionsResponseAmino;
}
/**
 * QueryEpochProvisionsResponse is the response type for the
 * Query/EpochProvisions RPC method.
 */
export interface QueryEpochProvisionsResponseSDKType {
  epoch_provisions: Uint8Array;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/osmosis.mint.v1beta1.QueryParamsRequest",
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
  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },
  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
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
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "osmosis/mint/query-params-request",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.mint.v1beta1.QueryParamsRequest",
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
  typeUrl: "/osmosis.mint.v1beta1.QueryParamsResponse",
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
  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
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
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "osmosis/mint/query-params-response",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.mint.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEpochProvisionsRequest(): QueryEpochProvisionsRequest {
  return {};
}
export const QueryEpochProvisionsRequest = {
  typeUrl: "/osmosis.mint.v1beta1.QueryEpochProvisionsRequest",
  encode(_: QueryEpochProvisionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochProvisionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochProvisionsRequest();
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
  fromJSON(_: any): QueryEpochProvisionsRequest {
    return {};
  },
  toJSON(_: QueryEpochProvisionsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryEpochProvisionsRequest>): QueryEpochProvisionsRequest {
    const message = createBaseQueryEpochProvisionsRequest();
    return message;
  },
  fromSDK(_: QueryEpochProvisionsRequestSDKType): QueryEpochProvisionsRequest {
    return {};
  },
  toSDK(_: QueryEpochProvisionsRequest): QueryEpochProvisionsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryEpochProvisionsRequestAmino): QueryEpochProvisionsRequest {
    return {};
  },
  toAmino(_: QueryEpochProvisionsRequest): QueryEpochProvisionsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryEpochProvisionsRequestAminoMsg): QueryEpochProvisionsRequest {
    return QueryEpochProvisionsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryEpochProvisionsRequest): QueryEpochProvisionsRequestAminoMsg {
    return {
      type: "osmosis/mint/query-epoch-provisions-request",
      value: QueryEpochProvisionsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryEpochProvisionsRequestProtoMsg): QueryEpochProvisionsRequest {
    return QueryEpochProvisionsRequest.decode(message.value);
  },
  toProto(message: QueryEpochProvisionsRequest): Uint8Array {
    return QueryEpochProvisionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochProvisionsRequest): QueryEpochProvisionsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.mint.v1beta1.QueryEpochProvisionsRequest",
      value: QueryEpochProvisionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEpochProvisionsResponse(): QueryEpochProvisionsResponse {
  return {
    epoch_provisions: new Uint8Array()
  };
}
export const QueryEpochProvisionsResponse = {
  typeUrl: "/osmosis.mint.v1beta1.QueryEpochProvisionsResponse",
  encode(message: QueryEpochProvisionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epoch_provisions.length !== 0) {
      writer.uint32(10).bytes(message.epoch_provisions);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochProvisionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochProvisionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch_provisions = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEpochProvisionsResponse {
    return {
      epoch_provisions: isSet(object.epoch_provisions) ? bytesFromBase64(object.epoch_provisions) : new Uint8Array()
    };
  },
  toJSON(message: QueryEpochProvisionsResponse): unknown {
    const obj: any = {};
    message.epoch_provisions !== undefined && (obj.epoch_provisions = base64FromBytes(message.epoch_provisions !== undefined ? message.epoch_provisions : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<QueryEpochProvisionsResponse>): QueryEpochProvisionsResponse {
    const message = createBaseQueryEpochProvisionsResponse();
    message.epoch_provisions = object.epoch_provisions ?? new Uint8Array();
    return message;
  },
  fromSDK(object: QueryEpochProvisionsResponseSDKType): QueryEpochProvisionsResponse {
    return {
      epoch_provisions: object?.epoch_provisions
    };
  },
  toSDK(message: QueryEpochProvisionsResponse): QueryEpochProvisionsResponseSDKType {
    const obj: any = {};
    obj.epoch_provisions = message.epoch_provisions;
    return obj;
  },
  fromAmino(object: QueryEpochProvisionsResponseAmino): QueryEpochProvisionsResponse {
    return {
      epoch_provisions: object.epoch_provisions
    };
  },
  toAmino(message: QueryEpochProvisionsResponse): QueryEpochProvisionsResponseAmino {
    const obj: any = {};
    obj.epoch_provisions = message.epoch_provisions;
    return obj;
  },
  fromAminoMsg(object: QueryEpochProvisionsResponseAminoMsg): QueryEpochProvisionsResponse {
    return QueryEpochProvisionsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryEpochProvisionsResponse): QueryEpochProvisionsResponseAminoMsg {
    return {
      type: "osmosis/mint/query-epoch-provisions-response",
      value: QueryEpochProvisionsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryEpochProvisionsResponseProtoMsg): QueryEpochProvisionsResponse {
    return QueryEpochProvisionsResponse.decode(message.value);
  },
  toProto(message: QueryEpochProvisionsResponse): Uint8Array {
    return QueryEpochProvisionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochProvisionsResponse): QueryEpochProvisionsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.mint.v1beta1.QueryEpochProvisionsResponse",
      value: QueryEpochProvisionsResponse.encode(message).finish()
    };
  }
};