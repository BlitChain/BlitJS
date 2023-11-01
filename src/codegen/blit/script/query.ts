//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Script, ScriptAmino, ScriptSDKType } from "./script";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export const protobufPackage = "blit.script";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  type_url: "/blit.script.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestProtoMsg {
  type_url: "/blit.script.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/blit.script.QueryParamsRequest";
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
  type_url: "/blit.script.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseProtoMsg {
  type_url: "/blit.script.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/blit.script.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryScriptRequest {
  address: string;
}
export interface QueryScriptRequestProtoMsg {
  type_url: "/blit.script.QueryScriptRequest";
  value: Uint8Array;
}
export interface QueryScriptRequestProtoMsg {
  type_url: "/blit.script.QueryScriptRequest";
  value: Uint8Array;
}
export interface QueryScriptRequestAmino {
  address: string;
}
export interface QueryScriptRequestAminoMsg {
  type: "/blit.script.QueryScriptRequest";
  value: QueryScriptRequestAmino;
}
export interface QueryScriptRequestSDKType {
  address: string;
}
export interface QueryScriptResponse {
  script: Script;
}
export interface QueryScriptResponseProtoMsg {
  type_url: "/blit.script.QueryScriptResponse";
  value: Uint8Array;
}
export interface QueryScriptResponseProtoMsg {
  type_url: "/blit.script.QueryScriptResponse";
  value: Uint8Array;
}
export interface QueryScriptResponseAmino {
  script?: ScriptAmino;
}
export interface QueryScriptResponseAminoMsg {
  type: "/blit.script.QueryScriptResponse";
  value: QueryScriptResponseAmino;
}
export interface QueryScriptResponseSDKType {
  script: ScriptSDKType;
}
export interface QueryScriptsRequest {
  pagination?: PageRequest;
}
export interface QueryScriptsRequestProtoMsg {
  type_url: "/blit.script.QueryScriptsRequest";
  value: Uint8Array;
}
export interface QueryScriptsRequestProtoMsg {
  type_url: "/blit.script.QueryScriptsRequest";
  value: Uint8Array;
}
export interface QueryScriptsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryScriptsRequestAminoMsg {
  type: "/blit.script.QueryScriptsRequest";
  value: QueryScriptsRequestAmino;
}
export interface QueryScriptsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryScriptsResponse {
  script: Script[];
  pagination?: PageResponse;
}
export interface QueryScriptsResponseProtoMsg {
  type_url: "/blit.script.QueryScriptsResponse";
  value: Uint8Array;
}
export interface QueryScriptsResponseProtoMsg {
  type_url: "/blit.script.QueryScriptsResponse";
  value: Uint8Array;
}
export interface QueryScriptsResponseAmino {
  script: ScriptAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryScriptsResponseAminoMsg {
  type: "/blit.script.QueryScriptsResponse";
  value: QueryScriptsResponseAmino;
}
export interface QueryScriptsResponseSDKType {
  script: ScriptSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryWebRequest {
  address: string;
  httprequest: string;
}
export interface QueryWebRequestProtoMsg {
  type_url: "/blit.script.QueryWebRequest";
  value: Uint8Array;
}
export interface QueryWebRequestProtoMsg {
  type_url: "/blit.script.QueryWebRequest";
  value: Uint8Array;
}
export interface QueryWebRequestAmino {
  address: string;
  httprequest: string;
}
export interface QueryWebRequestAminoMsg {
  type: "/blit.script.QueryWebRequest";
  value: QueryWebRequestAmino;
}
export interface QueryWebRequestSDKType {
  address: string;
  httprequest: string;
}
export interface QueryWebResponse {
  httpresponse: string;
}
export interface QueryWebResponseProtoMsg {
  type_url: "/blit.script.QueryWebResponse";
  value: Uint8Array;
}
export interface QueryWebResponseProtoMsg {
  type_url: "/blit.script.QueryWebResponse";
  value: Uint8Array;
}
export interface QueryWebResponseAmino {
  httpresponse: string;
}
export interface QueryWebResponseAminoMsg {
  type: "/blit.script.QueryWebResponse";
  value: QueryWebResponseAmino;
}
export interface QueryWebResponseSDKType {
  httpresponse: string;
}
export interface QueryEvalRequest {
  caller_address: string;
  script_address: string;
  extra_code: string;
  function_name: string;
  kwargs: string;
  grantee: string;
}
export interface QueryEvalRequestProtoMsg {
  type_url: "/blit.script.QueryEvalRequest";
  value: Uint8Array;
}
export interface QueryEvalRequestProtoMsg {
  type_url: "/blit.script.QueryEvalRequest";
  value: Uint8Array;
}
export interface QueryEvalRequestAmino {
  caller_address: string;
  script_address: string;
  extra_code: string;
  function_name: string;
  kwargs: string;
  grantee: string;
}
export interface QueryEvalRequestAminoMsg {
  type: "/blit.script.QueryEvalRequest";
  value: QueryEvalRequestAmino;
}
export interface QueryEvalRequestSDKType {
  caller_address: string;
  script_address: string;
  extra_code: string;
  function_name: string;
  kwargs: string;
  grantee: string;
}
export interface QueryEvalResponse {
  response: string;
}
export interface QueryEvalResponseProtoMsg {
  type_url: "/blit.script.QueryEvalResponse";
  value: Uint8Array;
}
export interface QueryEvalResponseProtoMsg {
  type_url: "/blit.script.QueryEvalResponse";
  value: Uint8Array;
}
export interface QueryEvalResponseAmino {
  response: string;
}
export interface QueryEvalResponseAminoMsg {
  type: "/blit.script.QueryEvalResponse";
  value: QueryEvalResponseAmino;
}
export interface QueryEvalResponseSDKType {
  response: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/blit.script.QueryParamsRequest",
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
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/blit.script.QueryParamsRequest",
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
  typeUrl: "/blit.script.QueryParamsResponse",
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
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/blit.script.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryScriptRequest(): QueryScriptRequest {
  return {
    address: ""
  };
}
export const QueryScriptRequest = {
  typeUrl: "/blit.script.QueryScriptRequest",
  encode(message: QueryScriptRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryScriptRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryScriptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryScriptRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryScriptRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryScriptRequest>): QueryScriptRequest {
    const message = createBaseQueryScriptRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: QueryScriptRequestSDKType): QueryScriptRequest {
    return {
      address: object?.address
    };
  },
  toSDK(message: QueryScriptRequest): QueryScriptRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAmino(object: QueryScriptRequestAmino): QueryScriptRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryScriptRequest): QueryScriptRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryScriptRequestAminoMsg): QueryScriptRequest {
    return QueryScriptRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryScriptRequestProtoMsg): QueryScriptRequest {
    return QueryScriptRequest.decode(message.value);
  },
  toProto(message: QueryScriptRequest): Uint8Array {
    return QueryScriptRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryScriptRequest): QueryScriptRequestProtoMsg {
    return {
      typeUrl: "/blit.script.QueryScriptRequest",
      value: QueryScriptRequest.encode(message).finish()
    };
  }
};
function createBaseQueryScriptResponse(): QueryScriptResponse {
  return {
    script: Script.fromPartial({})
  };
}
export const QueryScriptResponse = {
  typeUrl: "/blit.script.QueryScriptResponse",
  encode(message: QueryScriptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.script !== undefined) {
      Script.encode(message.script, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryScriptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryScriptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.script = Script.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryScriptResponse {
    return {
      script: isSet(object.script) ? Script.fromJSON(object.script) : undefined
    };
  },
  toJSON(message: QueryScriptResponse): unknown {
    const obj: any = {};
    message.script !== undefined && (obj.script = message.script ? Script.toJSON(message.script) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryScriptResponse>): QueryScriptResponse {
    const message = createBaseQueryScriptResponse();
    message.script = object.script !== undefined && object.script !== null ? Script.fromPartial(object.script) : undefined;
    return message;
  },
  fromSDK(object: QueryScriptResponseSDKType): QueryScriptResponse {
    return {
      script: object.script ? Script.fromSDK(object.script) : undefined
    };
  },
  toSDK(message: QueryScriptResponse): QueryScriptResponseSDKType {
    const obj: any = {};
    message.script !== undefined && (obj.script = message.script ? Script.toSDK(message.script) : undefined);
    return obj;
  },
  fromAmino(object: QueryScriptResponseAmino): QueryScriptResponse {
    return {
      script: object?.script ? Script.fromAmino(object.script) : undefined
    };
  },
  toAmino(message: QueryScriptResponse): QueryScriptResponseAmino {
    const obj: any = {};
    obj.script = message.script ? Script.toAmino(message.script) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryScriptResponseAminoMsg): QueryScriptResponse {
    return QueryScriptResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryScriptResponseProtoMsg): QueryScriptResponse {
    return QueryScriptResponse.decode(message.value);
  },
  toProto(message: QueryScriptResponse): Uint8Array {
    return QueryScriptResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryScriptResponse): QueryScriptResponseProtoMsg {
    return {
      typeUrl: "/blit.script.QueryScriptResponse",
      value: QueryScriptResponse.encode(message).finish()
    };
  }
};
function createBaseQueryScriptsRequest(): QueryScriptsRequest {
  return {
    pagination: undefined
  };
}
export const QueryScriptsRequest = {
  typeUrl: "/blit.script.QueryScriptsRequest",
  encode(message: QueryScriptsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryScriptsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryScriptsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryScriptsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryScriptsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryScriptsRequest>): QueryScriptsRequest {
    const message = createBaseQueryScriptsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryScriptsRequestSDKType): QueryScriptsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryScriptsRequest): QueryScriptsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryScriptsRequestAmino): QueryScriptsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryScriptsRequest): QueryScriptsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryScriptsRequestAminoMsg): QueryScriptsRequest {
    return QueryScriptsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryScriptsRequestProtoMsg): QueryScriptsRequest {
    return QueryScriptsRequest.decode(message.value);
  },
  toProto(message: QueryScriptsRequest): Uint8Array {
    return QueryScriptsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryScriptsRequest): QueryScriptsRequestProtoMsg {
    return {
      typeUrl: "/blit.script.QueryScriptsRequest",
      value: QueryScriptsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryScriptsResponse(): QueryScriptsResponse {
  return {
    script: [],
    pagination: undefined
  };
}
export const QueryScriptsResponse = {
  typeUrl: "/blit.script.QueryScriptsResponse",
  encode(message: QueryScriptsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.script) {
      Script.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryScriptsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryScriptsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.script.push(Script.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryScriptsResponse {
    return {
      script: Array.isArray(object?.script) ? object.script.map((e: any) => Script.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryScriptsResponse): unknown {
    const obj: any = {};
    if (message.script) {
      obj.script = message.script.map(e => e ? Script.toJSON(e) : undefined);
    } else {
      obj.script = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryScriptsResponse>): QueryScriptsResponse {
    const message = createBaseQueryScriptsResponse();
    message.script = object.script?.map(e => Script.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryScriptsResponseSDKType): QueryScriptsResponse {
    return {
      script: Array.isArray(object?.script) ? object.script.map((e: any) => Script.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryScriptsResponse): QueryScriptsResponseSDKType {
    const obj: any = {};
    if (message.script) {
      obj.script = message.script.map(e => e ? Script.toSDK(e) : undefined);
    } else {
      obj.script = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryScriptsResponseAmino): QueryScriptsResponse {
    return {
      script: Array.isArray(object?.script) ? object.script.map((e: any) => Script.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryScriptsResponse): QueryScriptsResponseAmino {
    const obj: any = {};
    if (message.script) {
      obj.script = message.script.map(e => e ? Script.toAmino(e) : undefined);
    } else {
      obj.script = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryScriptsResponseAminoMsg): QueryScriptsResponse {
    return QueryScriptsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryScriptsResponseProtoMsg): QueryScriptsResponse {
    return QueryScriptsResponse.decode(message.value);
  },
  toProto(message: QueryScriptsResponse): Uint8Array {
    return QueryScriptsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryScriptsResponse): QueryScriptsResponseProtoMsg {
    return {
      typeUrl: "/blit.script.QueryScriptsResponse",
      value: QueryScriptsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryWebRequest(): QueryWebRequest {
  return {
    address: "",
    httprequest: ""
  };
}
export const QueryWebRequest = {
  typeUrl: "/blit.script.QueryWebRequest",
  encode(message: QueryWebRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.httprequest !== "") {
      writer.uint32(18).string(message.httprequest);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWebRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWebRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.httprequest = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryWebRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      httprequest: isSet(object.httprequest) ? String(object.httprequest) : ""
    };
  },
  toJSON(message: QueryWebRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.httprequest !== undefined && (obj.httprequest = message.httprequest);
    return obj;
  },
  fromPartial(object: Partial<QueryWebRequest>): QueryWebRequest {
    const message = createBaseQueryWebRequest();
    message.address = object.address ?? "";
    message.httprequest = object.httprequest ?? "";
    return message;
  },
  fromSDK(object: QueryWebRequestSDKType): QueryWebRequest {
    return {
      address: object?.address,
      httprequest: object?.httprequest
    };
  },
  toSDK(message: QueryWebRequest): QueryWebRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.httprequest = message.httprequest;
    return obj;
  },
  fromAmino(object: QueryWebRequestAmino): QueryWebRequest {
    return {
      address: object.address,
      httprequest: object.httprequest
    };
  },
  toAmino(message: QueryWebRequest): QueryWebRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.httprequest = message.httprequest;
    return obj;
  },
  fromAminoMsg(object: QueryWebRequestAminoMsg): QueryWebRequest {
    return QueryWebRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWebRequestProtoMsg): QueryWebRequest {
    return QueryWebRequest.decode(message.value);
  },
  toProto(message: QueryWebRequest): Uint8Array {
    return QueryWebRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryWebRequest): QueryWebRequestProtoMsg {
    return {
      typeUrl: "/blit.script.QueryWebRequest",
      value: QueryWebRequest.encode(message).finish()
    };
  }
};
function createBaseQueryWebResponse(): QueryWebResponse {
  return {
    httpresponse: ""
  };
}
export const QueryWebResponse = {
  typeUrl: "/blit.script.QueryWebResponse",
  encode(message: QueryWebResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.httpresponse !== "") {
      writer.uint32(10).string(message.httpresponse);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWebResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWebResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.httpresponse = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryWebResponse {
    return {
      httpresponse: isSet(object.httpresponse) ? String(object.httpresponse) : ""
    };
  },
  toJSON(message: QueryWebResponse): unknown {
    const obj: any = {};
    message.httpresponse !== undefined && (obj.httpresponse = message.httpresponse);
    return obj;
  },
  fromPartial(object: Partial<QueryWebResponse>): QueryWebResponse {
    const message = createBaseQueryWebResponse();
    message.httpresponse = object.httpresponse ?? "";
    return message;
  },
  fromSDK(object: QueryWebResponseSDKType): QueryWebResponse {
    return {
      httpresponse: object?.httpresponse
    };
  },
  toSDK(message: QueryWebResponse): QueryWebResponseSDKType {
    const obj: any = {};
    obj.httpresponse = message.httpresponse;
    return obj;
  },
  fromAmino(object: QueryWebResponseAmino): QueryWebResponse {
    return {
      httpresponse: object.httpresponse
    };
  },
  toAmino(message: QueryWebResponse): QueryWebResponseAmino {
    const obj: any = {};
    obj.httpresponse = message.httpresponse;
    return obj;
  },
  fromAminoMsg(object: QueryWebResponseAminoMsg): QueryWebResponse {
    return QueryWebResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWebResponseProtoMsg): QueryWebResponse {
    return QueryWebResponse.decode(message.value);
  },
  toProto(message: QueryWebResponse): Uint8Array {
    return QueryWebResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWebResponse): QueryWebResponseProtoMsg {
    return {
      typeUrl: "/blit.script.QueryWebResponse",
      value: QueryWebResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEvalRequest(): QueryEvalRequest {
  return {
    caller_address: "",
    script_address: "",
    extra_code: "",
    function_name: "",
    kwargs: "",
    grantee: ""
  };
}
export const QueryEvalRequest = {
  typeUrl: "/blit.script.QueryEvalRequest",
  encode(message: QueryEvalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.caller_address !== "") {
      writer.uint32(18).string(message.caller_address);
    }
    if (message.script_address !== "") {
      writer.uint32(26).string(message.script_address);
    }
    if (message.extra_code !== "") {
      writer.uint32(34).string(message.extra_code);
    }
    if (message.function_name !== "") {
      writer.uint32(42).string(message.function_name);
    }
    if (message.kwargs !== "") {
      writer.uint32(50).string(message.kwargs);
    }
    if (message.grantee !== "") {
      writer.uint32(58).string(message.grantee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEvalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEvalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.caller_address = reader.string();
          break;
        case 3:
          message.script_address = reader.string();
          break;
        case 4:
          message.extra_code = reader.string();
          break;
        case 5:
          message.function_name = reader.string();
          break;
        case 6:
          message.kwargs = reader.string();
          break;
        case 7:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEvalRequest {
    return {
      caller_address: isSet(object.caller_address) ? String(object.caller_address) : "",
      script_address: isSet(object.script_address) ? String(object.script_address) : "",
      extra_code: isSet(object.extra_code) ? String(object.extra_code) : "",
      function_name: isSet(object.function_name) ? String(object.function_name) : "",
      kwargs: isSet(object.kwargs) ? String(object.kwargs) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : ""
    };
  },
  toJSON(message: QueryEvalRequest): unknown {
    const obj: any = {};
    message.caller_address !== undefined && (obj.caller_address = message.caller_address);
    message.script_address !== undefined && (obj.script_address = message.script_address);
    message.extra_code !== undefined && (obj.extra_code = message.extra_code);
    message.function_name !== undefined && (obj.function_name = message.function_name);
    message.kwargs !== undefined && (obj.kwargs = message.kwargs);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    return obj;
  },
  fromPartial(object: Partial<QueryEvalRequest>): QueryEvalRequest {
    const message = createBaseQueryEvalRequest();
    message.caller_address = object.caller_address ?? "";
    message.script_address = object.script_address ?? "";
    message.extra_code = object.extra_code ?? "";
    message.function_name = object.function_name ?? "";
    message.kwargs = object.kwargs ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },
  fromSDK(object: QueryEvalRequestSDKType): QueryEvalRequest {
    return {
      caller_address: object?.caller_address,
      script_address: object?.script_address,
      extra_code: object?.extra_code,
      function_name: object?.function_name,
      kwargs: object?.kwargs,
      grantee: object?.grantee
    };
  },
  toSDK(message: QueryEvalRequest): QueryEvalRequestSDKType {
    const obj: any = {};
    obj.caller_address = message.caller_address;
    obj.script_address = message.script_address;
    obj.extra_code = message.extra_code;
    obj.function_name = message.function_name;
    obj.kwargs = message.kwargs;
    obj.grantee = message.grantee;
    return obj;
  },
  fromAmino(object: QueryEvalRequestAmino): QueryEvalRequest {
    return {
      caller_address: object.caller_address,
      script_address: object.script_address,
      extra_code: object.extra_code,
      function_name: object.function_name,
      kwargs: object.kwargs,
      grantee: object.grantee
    };
  },
  toAmino(message: QueryEvalRequest): QueryEvalRequestAmino {
    const obj: any = {};
    obj.caller_address = message.caller_address;
    obj.script_address = message.script_address;
    obj.extra_code = message.extra_code;
    obj.function_name = message.function_name;
    obj.kwargs = message.kwargs;
    obj.grantee = message.grantee;
    return obj;
  },
  fromAminoMsg(object: QueryEvalRequestAminoMsg): QueryEvalRequest {
    return QueryEvalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEvalRequestProtoMsg): QueryEvalRequest {
    return QueryEvalRequest.decode(message.value);
  },
  toProto(message: QueryEvalRequest): Uint8Array {
    return QueryEvalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEvalRequest): QueryEvalRequestProtoMsg {
    return {
      typeUrl: "/blit.script.QueryEvalRequest",
      value: QueryEvalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEvalResponse(): QueryEvalResponse {
  return {
    response: ""
  };
}
export const QueryEvalResponse = {
  typeUrl: "/blit.script.QueryEvalResponse",
  encode(message: QueryEvalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.response !== "") {
      writer.uint32(10).string(message.response);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEvalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEvalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEvalResponse {
    return {
      response: isSet(object.response) ? String(object.response) : ""
    };
  },
  toJSON(message: QueryEvalResponse): unknown {
    const obj: any = {};
    message.response !== undefined && (obj.response = message.response);
    return obj;
  },
  fromPartial(object: Partial<QueryEvalResponse>): QueryEvalResponse {
    const message = createBaseQueryEvalResponse();
    message.response = object.response ?? "";
    return message;
  },
  fromSDK(object: QueryEvalResponseSDKType): QueryEvalResponse {
    return {
      response: object?.response
    };
  },
  toSDK(message: QueryEvalResponse): QueryEvalResponseSDKType {
    const obj: any = {};
    obj.response = message.response;
    return obj;
  },
  fromAmino(object: QueryEvalResponseAmino): QueryEvalResponse {
    return {
      response: object.response
    };
  },
  toAmino(message: QueryEvalResponse): QueryEvalResponseAmino {
    const obj: any = {};
    obj.response = message.response;
    return obj;
  },
  fromAminoMsg(object: QueryEvalResponseAminoMsg): QueryEvalResponse {
    return QueryEvalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEvalResponseProtoMsg): QueryEvalResponse {
    return QueryEvalResponse.decode(message.value);
  },
  toProto(message: QueryEvalResponse): Uint8Array {
    return QueryEvalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEvalResponse): QueryEvalResponseProtoMsg {
    return {
      typeUrl: "/blit.script.QueryEvalResponse",
      value: QueryEvalResponse.encode(message).finish()
    };
  }
};