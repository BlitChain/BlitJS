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
export interface QueryGetScriptRequest {
  address: string;
}
export interface QueryGetScriptRequestProtoMsg {
  type_url: "/blit.script.QueryGetScriptRequest";
  value: Uint8Array;
}
export interface QueryGetScriptRequestProtoMsg {
  type_url: "/blit.script.QueryGetScriptRequest";
  value: Uint8Array;
}
export interface QueryGetScriptRequestAmino {
  address: string;
}
export interface QueryGetScriptRequestAminoMsg {
  type: "/blit.script.QueryGetScriptRequest";
  value: QueryGetScriptRequestAmino;
}
export interface QueryGetScriptRequestSDKType {
  address: string;
}
export interface QueryGetScriptResponse {
  script: Script;
}
export interface QueryGetScriptResponseProtoMsg {
  type_url: "/blit.script.QueryGetScriptResponse";
  value: Uint8Array;
}
export interface QueryGetScriptResponseProtoMsg {
  type_url: "/blit.script.QueryGetScriptResponse";
  value: Uint8Array;
}
export interface QueryGetScriptResponseAmino {
  script?: ScriptAmino;
}
export interface QueryGetScriptResponseAminoMsg {
  type: "/blit.script.QueryGetScriptResponse";
  value: QueryGetScriptResponseAmino;
}
export interface QueryGetScriptResponseSDKType {
  script: ScriptSDKType;
}
export interface QueryAllScriptRequest {
  pagination?: PageRequest;
}
export interface QueryAllScriptRequestProtoMsg {
  type_url: "/blit.script.QueryAllScriptRequest";
  value: Uint8Array;
}
export interface QueryAllScriptRequestProtoMsg {
  type_url: "/blit.script.QueryAllScriptRequest";
  value: Uint8Array;
}
export interface QueryAllScriptRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllScriptRequestAminoMsg {
  type: "/blit.script.QueryAllScriptRequest";
  value: QueryAllScriptRequestAmino;
}
export interface QueryAllScriptRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllScriptResponse {
  script: Script[];
  pagination?: PageResponse;
}
export interface QueryAllScriptResponseProtoMsg {
  type_url: "/blit.script.QueryAllScriptResponse";
  value: Uint8Array;
}
export interface QueryAllScriptResponseProtoMsg {
  type_url: "/blit.script.QueryAllScriptResponse";
  value: Uint8Array;
}
export interface QueryAllScriptResponseAmino {
  script: ScriptAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllScriptResponseAminoMsg {
  type: "/blit.script.QueryAllScriptResponse";
  value: QueryAllScriptResponseAmino;
}
export interface QueryAllScriptResponseSDKType {
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
function createBaseQueryGetScriptRequest(): QueryGetScriptRequest {
  return {
    address: ""
  };
}
export const QueryGetScriptRequest = {
  typeUrl: "/blit.script.QueryGetScriptRequest",
  encode(message: QueryGetScriptRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetScriptRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetScriptRequest();
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
  fromJSON(object: any): QueryGetScriptRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryGetScriptRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryGetScriptRequest>): QueryGetScriptRequest {
    const message = createBaseQueryGetScriptRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: QueryGetScriptRequestSDKType): QueryGetScriptRequest {
    return {
      address: object?.address
    };
  },
  toSDK(message: QueryGetScriptRequest): QueryGetScriptRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAmino(object: QueryGetScriptRequestAmino): QueryGetScriptRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryGetScriptRequest): QueryGetScriptRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryGetScriptRequestAminoMsg): QueryGetScriptRequest {
    return QueryGetScriptRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetScriptRequestProtoMsg): QueryGetScriptRequest {
    return QueryGetScriptRequest.decode(message.value);
  },
  toProto(message: QueryGetScriptRequest): Uint8Array {
    return QueryGetScriptRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetScriptRequest): QueryGetScriptRequestProtoMsg {
    return {
      typeUrl: "/blit.script.QueryGetScriptRequest",
      value: QueryGetScriptRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetScriptResponse(): QueryGetScriptResponse {
  return {
    script: Script.fromPartial({})
  };
}
export const QueryGetScriptResponse = {
  typeUrl: "/blit.script.QueryGetScriptResponse",
  encode(message: QueryGetScriptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.script !== undefined) {
      Script.encode(message.script, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetScriptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetScriptResponse();
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
  fromJSON(object: any): QueryGetScriptResponse {
    return {
      script: isSet(object.script) ? Script.fromJSON(object.script) : undefined
    };
  },
  toJSON(message: QueryGetScriptResponse): unknown {
    const obj: any = {};
    message.script !== undefined && (obj.script = message.script ? Script.toJSON(message.script) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetScriptResponse>): QueryGetScriptResponse {
    const message = createBaseQueryGetScriptResponse();
    message.script = object.script !== undefined && object.script !== null ? Script.fromPartial(object.script) : undefined;
    return message;
  },
  fromSDK(object: QueryGetScriptResponseSDKType): QueryGetScriptResponse {
    return {
      script: object.script ? Script.fromSDK(object.script) : undefined
    };
  },
  toSDK(message: QueryGetScriptResponse): QueryGetScriptResponseSDKType {
    const obj: any = {};
    message.script !== undefined && (obj.script = message.script ? Script.toSDK(message.script) : undefined);
    return obj;
  },
  fromAmino(object: QueryGetScriptResponseAmino): QueryGetScriptResponse {
    return {
      script: object?.script ? Script.fromAmino(object.script) : undefined
    };
  },
  toAmino(message: QueryGetScriptResponse): QueryGetScriptResponseAmino {
    const obj: any = {};
    obj.script = message.script ? Script.toAmino(message.script) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetScriptResponseAminoMsg): QueryGetScriptResponse {
    return QueryGetScriptResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetScriptResponseProtoMsg): QueryGetScriptResponse {
    return QueryGetScriptResponse.decode(message.value);
  },
  toProto(message: QueryGetScriptResponse): Uint8Array {
    return QueryGetScriptResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetScriptResponse): QueryGetScriptResponseProtoMsg {
    return {
      typeUrl: "/blit.script.QueryGetScriptResponse",
      value: QueryGetScriptResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllScriptRequest(): QueryAllScriptRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllScriptRequest = {
  typeUrl: "/blit.script.QueryAllScriptRequest",
  encode(message: QueryAllScriptRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllScriptRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllScriptRequest();
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
  fromJSON(object: any): QueryAllScriptRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllScriptRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllScriptRequest>): QueryAllScriptRequest {
    const message = createBaseQueryAllScriptRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAllScriptRequestSDKType): QueryAllScriptRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllScriptRequest): QueryAllScriptRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllScriptRequestAmino): QueryAllScriptRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllScriptRequest): QueryAllScriptRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllScriptRequestAminoMsg): QueryAllScriptRequest {
    return QueryAllScriptRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllScriptRequestProtoMsg): QueryAllScriptRequest {
    return QueryAllScriptRequest.decode(message.value);
  },
  toProto(message: QueryAllScriptRequest): Uint8Array {
    return QueryAllScriptRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllScriptRequest): QueryAllScriptRequestProtoMsg {
    return {
      typeUrl: "/blit.script.QueryAllScriptRequest",
      value: QueryAllScriptRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllScriptResponse(): QueryAllScriptResponse {
  return {
    script: [],
    pagination: undefined
  };
}
export const QueryAllScriptResponse = {
  typeUrl: "/blit.script.QueryAllScriptResponse",
  encode(message: QueryAllScriptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.script) {
      Script.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllScriptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllScriptResponse();
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
  fromJSON(object: any): QueryAllScriptResponse {
    return {
      script: Array.isArray(object?.script) ? object.script.map((e: any) => Script.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllScriptResponse): unknown {
    const obj: any = {};
    if (message.script) {
      obj.script = message.script.map(e => e ? Script.toJSON(e) : undefined);
    } else {
      obj.script = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllScriptResponse>): QueryAllScriptResponse {
    const message = createBaseQueryAllScriptResponse();
    message.script = object.script?.map(e => Script.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAllScriptResponseSDKType): QueryAllScriptResponse {
    return {
      script: Array.isArray(object?.script) ? object.script.map((e: any) => Script.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllScriptResponse): QueryAllScriptResponseSDKType {
    const obj: any = {};
    if (message.script) {
      obj.script = message.script.map(e => e ? Script.toSDK(e) : undefined);
    } else {
      obj.script = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllScriptResponseAmino): QueryAllScriptResponse {
    return {
      script: Array.isArray(object?.script) ? object.script.map((e: any) => Script.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllScriptResponse): QueryAllScriptResponseAmino {
    const obj: any = {};
    if (message.script) {
      obj.script = message.script.map(e => e ? Script.toAmino(e) : undefined);
    } else {
      obj.script = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllScriptResponseAminoMsg): QueryAllScriptResponse {
    return QueryAllScriptResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllScriptResponseProtoMsg): QueryAllScriptResponse {
    return QueryAllScriptResponse.decode(message.value);
  },
  toProto(message: QueryAllScriptResponse): Uint8Array {
    return QueryAllScriptResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllScriptResponse): QueryAllScriptResponseProtoMsg {
    return {
      typeUrl: "/blit.script.QueryAllScriptResponse",
      value: QueryAllScriptResponse.encode(message).finish()
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