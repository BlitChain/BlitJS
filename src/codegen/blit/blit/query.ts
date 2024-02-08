//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Task, TaskAmino, TaskSDKType } from "./task";
import { FutureTask, FutureTaskAmino, FutureTaskSDKType } from "./future_task";
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
export interface QueryGetTaskRequest {
  id: bigint;
}
export interface QueryGetTaskRequestProtoMsg {
  type_url: "/blit.blit.QueryGetTaskRequest";
  value: Uint8Array;
}
export interface QueryGetTaskRequestAmino {
  id?: string;
}
export interface QueryGetTaskRequestAminoMsg {
  type: "/blit.blit.QueryGetTaskRequest";
  value: QueryGetTaskRequestAmino;
}
export interface QueryGetTaskRequestSDKType {
  id: bigint;
}
export interface QueryGetTaskResponse {
  task: Task;
}
export interface QueryGetTaskResponseProtoMsg {
  type_url: "/blit.blit.QueryGetTaskResponse";
  value: Uint8Array;
}
export interface QueryGetTaskResponseAmino {
  task?: TaskAmino;
}
export interface QueryGetTaskResponseAminoMsg {
  type: "/blit.blit.QueryGetTaskResponse";
  value: QueryGetTaskResponseAmino;
}
export interface QueryGetTaskResponseSDKType {
  task: TaskSDKType;
}
export interface QueryAllTaskRequest {
  address: string;
  pagination?: PageRequest;
}
export interface QueryAllTaskRequestProtoMsg {
  type_url: "/blit.blit.QueryAllTaskRequest";
  value: Uint8Array;
}
export interface QueryAllTaskRequestAmino {
  address?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAllTaskRequestAminoMsg {
  type: "/blit.blit.QueryAllTaskRequest";
  value: QueryAllTaskRequestAmino;
}
export interface QueryAllTaskRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
export interface QueryAllTaskResponse {
  task: Task[];
  pagination?: PageResponse;
}
export interface QueryAllTaskResponseProtoMsg {
  type_url: "/blit.blit.QueryAllTaskResponse";
  value: Uint8Array;
}
export interface QueryAllTaskResponseAmino {
  task?: TaskAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllTaskResponseAminoMsg {
  type: "/blit.blit.QueryAllTaskResponse";
  value: QueryAllTaskResponseAmino;
}
export interface QueryAllTaskResponseSDKType {
  task: TaskSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetFutureTaskRequest {
  index: string;
}
export interface QueryGetFutureTaskRequestProtoMsg {
  type_url: "/blit.blit.QueryGetFutureTaskRequest";
  value: Uint8Array;
}
export interface QueryGetFutureTaskRequestAmino {
  index?: string;
}
export interface QueryGetFutureTaskRequestAminoMsg {
  type: "/blit.blit.QueryGetFutureTaskRequest";
  value: QueryGetFutureTaskRequestAmino;
}
export interface QueryGetFutureTaskRequestSDKType {
  index: string;
}
export interface QueryGetFutureTaskResponse {
  futureTask: FutureTask;
}
export interface QueryGetFutureTaskResponseProtoMsg {
  type_url: "/blit.blit.QueryGetFutureTaskResponse";
  value: Uint8Array;
}
export interface QueryGetFutureTaskResponseAmino {
  futureTask?: FutureTaskAmino;
}
export interface QueryGetFutureTaskResponseAminoMsg {
  type: "/blit.blit.QueryGetFutureTaskResponse";
  value: QueryGetFutureTaskResponseAmino;
}
export interface QueryGetFutureTaskResponseSDKType {
  futureTask: FutureTaskSDKType;
}
export interface QueryAllFutureTaskRequest {
  /** Prefix queries the future tasks with indexs with the given prefix. */
  prefix: string;
  pagination?: PageRequest;
}
export interface QueryAllFutureTaskRequestProtoMsg {
  type_url: "/blit.blit.QueryAllFutureTaskRequest";
  value: Uint8Array;
}
export interface QueryAllFutureTaskRequestAmino {
  /** Prefix queries the future tasks with indexs with the given prefix. */
  prefix?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAllFutureTaskRequestAminoMsg {
  type: "/blit.blit.QueryAllFutureTaskRequest";
  value: QueryAllFutureTaskRequestAmino;
}
export interface QueryAllFutureTaskRequestSDKType {
  prefix: string;
  pagination?: PageRequestSDKType;
}
export interface QueryAllFutureTaskResponse {
  futureTask: FutureTask[];
  pagination?: PageResponse;
}
export interface QueryAllFutureTaskResponseProtoMsg {
  type_url: "/blit.blit.QueryAllFutureTaskResponse";
  value: Uint8Array;
}
export interface QueryAllFutureTaskResponseAmino {
  futureTask?: FutureTaskAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllFutureTaskResponseAminoMsg {
  type: "/blit.blit.QueryAllFutureTaskResponse";
  value: QueryAllFutureTaskResponseAmino;
}
export interface QueryAllFutureTaskResponseSDKType {
  futureTask: FutureTaskSDKType[];
  pagination?: PageResponseSDKType;
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
    const message = createBaseQueryParamsRequest();
    return message;
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
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
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
function createBaseQueryGetTaskRequest(): QueryGetTaskRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryGetTaskRequest = {
  typeUrl: "/blit.blit.QueryGetTaskRequest",
  encode(message: QueryGetTaskRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTaskRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTaskRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetTaskRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetTaskRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetTaskRequest>): QueryGetTaskRequest {
    const message = createBaseQueryGetTaskRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetTaskRequestAmino): QueryGetTaskRequest {
    const message = createBaseQueryGetTaskRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetTaskRequest): QueryGetTaskRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTaskRequestAminoMsg): QueryGetTaskRequest {
    return QueryGetTaskRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTaskRequestProtoMsg): QueryGetTaskRequest {
    return QueryGetTaskRequest.decode(message.value);
  },
  toProto(message: QueryGetTaskRequest): Uint8Array {
    return QueryGetTaskRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTaskRequest): QueryGetTaskRequestProtoMsg {
    return {
      typeUrl: "/blit.blit.QueryGetTaskRequest",
      value: QueryGetTaskRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetTaskResponse(): QueryGetTaskResponse {
  return {
    task: Task.fromPartial({})
  };
}
export const QueryGetTaskResponse = {
  typeUrl: "/blit.blit.QueryGetTaskResponse",
  encode(message: QueryGetTaskResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.task !== undefined) {
      Task.encode(message.task, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTaskResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTaskResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.task = Task.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetTaskResponse {
    return {
      task: isSet(object.task) ? Task.fromJSON(object.task) : undefined
    };
  },
  toJSON(message: QueryGetTaskResponse): unknown {
    const obj: any = {};
    message.task !== undefined && (obj.task = message.task ? Task.toJSON(message.task) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetTaskResponse>): QueryGetTaskResponse {
    const message = createBaseQueryGetTaskResponse();
    message.task = object.task !== undefined && object.task !== null ? Task.fromPartial(object.task) : undefined;
    return message;
  },
  fromAmino(object: QueryGetTaskResponseAmino): QueryGetTaskResponse {
    const message = createBaseQueryGetTaskResponse();
    if (object.task !== undefined && object.task !== null) {
      message.task = Task.fromAmino(object.task);
    }
    return message;
  },
  toAmino(message: QueryGetTaskResponse): QueryGetTaskResponseAmino {
    const obj: any = {};
    obj.task = message.task ? Task.toAmino(message.task) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTaskResponseAminoMsg): QueryGetTaskResponse {
    return QueryGetTaskResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTaskResponseProtoMsg): QueryGetTaskResponse {
    return QueryGetTaskResponse.decode(message.value);
  },
  toProto(message: QueryGetTaskResponse): Uint8Array {
    return QueryGetTaskResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTaskResponse): QueryGetTaskResponseProtoMsg {
    return {
      typeUrl: "/blit.blit.QueryGetTaskResponse",
      value: QueryGetTaskResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllTaskRequest(): QueryAllTaskRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QueryAllTaskRequest = {
  typeUrl: "/blit.blit.QueryAllTaskRequest",
  encode(message: QueryAllTaskRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTaskRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTaskRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllTaskRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllTaskRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllTaskRequest>): QueryAllTaskRequest {
    const message = createBaseQueryAllTaskRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTaskRequestAmino): QueryAllTaskRequest {
    const message = createBaseQueryAllTaskRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTaskRequest): QueryAllTaskRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTaskRequestAminoMsg): QueryAllTaskRequest {
    return QueryAllTaskRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTaskRequestProtoMsg): QueryAllTaskRequest {
    return QueryAllTaskRequest.decode(message.value);
  },
  toProto(message: QueryAllTaskRequest): Uint8Array {
    return QueryAllTaskRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTaskRequest): QueryAllTaskRequestProtoMsg {
    return {
      typeUrl: "/blit.blit.QueryAllTaskRequest",
      value: QueryAllTaskRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllTaskResponse(): QueryAllTaskResponse {
  return {
    task: [],
    pagination: undefined
  };
}
export const QueryAllTaskResponse = {
  typeUrl: "/blit.blit.QueryAllTaskResponse",
  encode(message: QueryAllTaskResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.task) {
      Task.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTaskResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTaskResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.task.push(Task.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllTaskResponse {
    return {
      task: Array.isArray(object?.task) ? object.task.map((e: any) => Task.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllTaskResponse): unknown {
    const obj: any = {};
    if (message.task) {
      obj.task = message.task.map(e => e ? Task.toJSON(e) : undefined);
    } else {
      obj.task = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllTaskResponse>): QueryAllTaskResponse {
    const message = createBaseQueryAllTaskResponse();
    message.task = object.task?.map(e => Task.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTaskResponseAmino): QueryAllTaskResponse {
    const message = createBaseQueryAllTaskResponse();
    message.task = object.task?.map(e => Task.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTaskResponse): QueryAllTaskResponseAmino {
    const obj: any = {};
    if (message.task) {
      obj.task = message.task.map(e => e ? Task.toAmino(e) : undefined);
    } else {
      obj.task = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTaskResponseAminoMsg): QueryAllTaskResponse {
    return QueryAllTaskResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTaskResponseProtoMsg): QueryAllTaskResponse {
    return QueryAllTaskResponse.decode(message.value);
  },
  toProto(message: QueryAllTaskResponse): Uint8Array {
    return QueryAllTaskResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTaskResponse): QueryAllTaskResponseProtoMsg {
    return {
      typeUrl: "/blit.blit.QueryAllTaskResponse",
      value: QueryAllTaskResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetFutureTaskRequest(): QueryGetFutureTaskRequest {
  return {
    index: ""
  };
}
export const QueryGetFutureTaskRequest = {
  typeUrl: "/blit.blit.QueryGetFutureTaskRequest",
  encode(message: QueryGetFutureTaskRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetFutureTaskRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFutureTaskRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetFutureTaskRequest {
    return {
      index: isSet(object.index) ? String(object.index) : ""
    };
  },
  toJSON(message: QueryGetFutureTaskRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },
  fromPartial(object: Partial<QueryGetFutureTaskRequest>): QueryGetFutureTaskRequest {
    const message = createBaseQueryGetFutureTaskRequest();
    message.index = object.index ?? "";
    return message;
  },
  fromAmino(object: QueryGetFutureTaskRequestAmino): QueryGetFutureTaskRequest {
    const message = createBaseQueryGetFutureTaskRequest();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    return message;
  },
  toAmino(message: QueryGetFutureTaskRequest): QueryGetFutureTaskRequestAmino {
    const obj: any = {};
    obj.index = message.index;
    return obj;
  },
  fromAminoMsg(object: QueryGetFutureTaskRequestAminoMsg): QueryGetFutureTaskRequest {
    return QueryGetFutureTaskRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetFutureTaskRequestProtoMsg): QueryGetFutureTaskRequest {
    return QueryGetFutureTaskRequest.decode(message.value);
  },
  toProto(message: QueryGetFutureTaskRequest): Uint8Array {
    return QueryGetFutureTaskRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetFutureTaskRequest): QueryGetFutureTaskRequestProtoMsg {
    return {
      typeUrl: "/blit.blit.QueryGetFutureTaskRequest",
      value: QueryGetFutureTaskRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetFutureTaskResponse(): QueryGetFutureTaskResponse {
  return {
    futureTask: FutureTask.fromPartial({})
  };
}
export const QueryGetFutureTaskResponse = {
  typeUrl: "/blit.blit.QueryGetFutureTaskResponse",
  encode(message: QueryGetFutureTaskResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.futureTask !== undefined) {
      FutureTask.encode(message.futureTask, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetFutureTaskResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFutureTaskResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.futureTask = FutureTask.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetFutureTaskResponse {
    return {
      futureTask: isSet(object.futureTask) ? FutureTask.fromJSON(object.futureTask) : undefined
    };
  },
  toJSON(message: QueryGetFutureTaskResponse): unknown {
    const obj: any = {};
    message.futureTask !== undefined && (obj.futureTask = message.futureTask ? FutureTask.toJSON(message.futureTask) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetFutureTaskResponse>): QueryGetFutureTaskResponse {
    const message = createBaseQueryGetFutureTaskResponse();
    message.futureTask = object.futureTask !== undefined && object.futureTask !== null ? FutureTask.fromPartial(object.futureTask) : undefined;
    return message;
  },
  fromAmino(object: QueryGetFutureTaskResponseAmino): QueryGetFutureTaskResponse {
    const message = createBaseQueryGetFutureTaskResponse();
    if (object.futureTask !== undefined && object.futureTask !== null) {
      message.futureTask = FutureTask.fromAmino(object.futureTask);
    }
    return message;
  },
  toAmino(message: QueryGetFutureTaskResponse): QueryGetFutureTaskResponseAmino {
    const obj: any = {};
    obj.futureTask = message.futureTask ? FutureTask.toAmino(message.futureTask) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetFutureTaskResponseAminoMsg): QueryGetFutureTaskResponse {
    return QueryGetFutureTaskResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetFutureTaskResponseProtoMsg): QueryGetFutureTaskResponse {
    return QueryGetFutureTaskResponse.decode(message.value);
  },
  toProto(message: QueryGetFutureTaskResponse): Uint8Array {
    return QueryGetFutureTaskResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetFutureTaskResponse): QueryGetFutureTaskResponseProtoMsg {
    return {
      typeUrl: "/blit.blit.QueryGetFutureTaskResponse",
      value: QueryGetFutureTaskResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllFutureTaskRequest(): QueryAllFutureTaskRequest {
  return {
    prefix: "",
    pagination: undefined
  };
}
export const QueryAllFutureTaskRequest = {
  typeUrl: "/blit.blit.QueryAllFutureTaskRequest",
  encode(message: QueryAllFutureTaskRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.prefix !== "") {
      writer.uint32(10).string(message.prefix);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllFutureTaskRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFutureTaskRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prefix = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllFutureTaskRequest {
    return {
      prefix: isSet(object.prefix) ? String(object.prefix) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllFutureTaskRequest): unknown {
    const obj: any = {};
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllFutureTaskRequest>): QueryAllFutureTaskRequest {
    const message = createBaseQueryAllFutureTaskRequest();
    message.prefix = object.prefix ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllFutureTaskRequestAmino): QueryAllFutureTaskRequest {
    const message = createBaseQueryAllFutureTaskRequest();
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = object.prefix;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllFutureTaskRequest): QueryAllFutureTaskRequestAmino {
    const obj: any = {};
    obj.prefix = message.prefix;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllFutureTaskRequestAminoMsg): QueryAllFutureTaskRequest {
    return QueryAllFutureTaskRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllFutureTaskRequestProtoMsg): QueryAllFutureTaskRequest {
    return QueryAllFutureTaskRequest.decode(message.value);
  },
  toProto(message: QueryAllFutureTaskRequest): Uint8Array {
    return QueryAllFutureTaskRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllFutureTaskRequest): QueryAllFutureTaskRequestProtoMsg {
    return {
      typeUrl: "/blit.blit.QueryAllFutureTaskRequest",
      value: QueryAllFutureTaskRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllFutureTaskResponse(): QueryAllFutureTaskResponse {
  return {
    futureTask: [],
    pagination: undefined
  };
}
export const QueryAllFutureTaskResponse = {
  typeUrl: "/blit.blit.QueryAllFutureTaskResponse",
  encode(message: QueryAllFutureTaskResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.futureTask) {
      FutureTask.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllFutureTaskResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFutureTaskResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.futureTask.push(FutureTask.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllFutureTaskResponse {
    return {
      futureTask: Array.isArray(object?.futureTask) ? object.futureTask.map((e: any) => FutureTask.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllFutureTaskResponse): unknown {
    const obj: any = {};
    if (message.futureTask) {
      obj.futureTask = message.futureTask.map(e => e ? FutureTask.toJSON(e) : undefined);
    } else {
      obj.futureTask = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllFutureTaskResponse>): QueryAllFutureTaskResponse {
    const message = createBaseQueryAllFutureTaskResponse();
    message.futureTask = object.futureTask?.map(e => FutureTask.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllFutureTaskResponseAmino): QueryAllFutureTaskResponse {
    const message = createBaseQueryAllFutureTaskResponse();
    message.futureTask = object.futureTask?.map(e => FutureTask.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllFutureTaskResponse): QueryAllFutureTaskResponseAmino {
    const obj: any = {};
    if (message.futureTask) {
      obj.futureTask = message.futureTask.map(e => e ? FutureTask.toAmino(e) : undefined);
    } else {
      obj.futureTask = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllFutureTaskResponseAminoMsg): QueryAllFutureTaskResponse {
    return QueryAllFutureTaskResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllFutureTaskResponseProtoMsg): QueryAllFutureTaskResponse {
    return QueryAllFutureTaskResponse.decode(message.value);
  },
  toProto(message: QueryAllFutureTaskResponse): Uint8Array {
    return QueryAllFutureTaskResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllFutureTaskResponse): QueryAllFutureTaskResponseProtoMsg {
    return {
      typeUrl: "/blit.blit.QueryAllFutureTaskResponse",
      value: QueryAllFutureTaskResponse.encode(message).finish()
    };
  }
};