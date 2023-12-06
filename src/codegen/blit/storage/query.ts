//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Storage, StorageAmino, StorageSDKType } from "./storage";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export const protobufPackage = "blit.storage";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  type_url: "/blit.storage.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/blit.storage.QueryParamsRequest";
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
  type_url: "/blit.storage.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/blit.storage.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryStorageDetailRequest {
  address: string;
  index: string;
}
export interface QueryStorageDetailRequestProtoMsg {
  type_url: "/blit.storage.QueryStorageDetailRequest";
  value: Uint8Array;
}
export interface QueryStorageDetailRequestAmino {
  address: string;
  index: string;
}
export interface QueryStorageDetailRequestAminoMsg {
  type: "/blit.storage.QueryStorageDetailRequest";
  value: QueryStorageDetailRequestAmino;
}
export interface QueryStorageDetailRequestSDKType {
  address: string;
  index: string;
}
export interface QueryStorageDetailResponse {
  storage: Storage;
}
export interface QueryStorageDetailResponseProtoMsg {
  type_url: "/blit.storage.QueryStorageDetailResponse";
  value: Uint8Array;
}
export interface QueryStorageDetailResponseAmino {
  storage?: StorageAmino;
}
export interface QueryStorageDetailResponseAminoMsg {
  type: "/blit.storage.QueryStorageDetailResponse";
  value: QueryStorageDetailResponseAmino;
}
export interface QueryStorageDetailResponseSDKType {
  storage: StorageSDKType;
}
export interface QueryFilterStorageRequest {
  filter_address: string;
  filter_index_prefix: string;
  pagination?: PageRequest;
}
export interface QueryFilterStorageRequestProtoMsg {
  type_url: "/blit.storage.QueryFilterStorageRequest";
  value: Uint8Array;
}
export interface QueryFilterStorageRequestAmino {
  filter_address: string;
  filter_index_prefix: string;
  pagination?: PageRequestAmino;
}
export interface QueryFilterStorageRequestAminoMsg {
  type: "/blit.storage.QueryFilterStorageRequest";
  value: QueryFilterStorageRequestAmino;
}
export interface QueryFilterStorageRequestSDKType {
  filter_address: string;
  filter_index_prefix: string;
  pagination?: PageRequestSDKType;
}
export interface QueryFilterStorageResponse {
  storage: Storage[];
  pagination?: PageResponse;
}
export interface QueryFilterStorageResponseProtoMsg {
  type_url: "/blit.storage.QueryFilterStorageResponse";
  value: Uint8Array;
}
export interface QueryFilterStorageResponseAmino {
  storage: StorageAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryFilterStorageResponseAminoMsg {
  type: "/blit.storage.QueryFilterStorageResponse";
  value: QueryFilterStorageResponseAmino;
}
export interface QueryFilterStorageResponseSDKType {
  storage: StorageSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/blit.storage.QueryParamsRequest",
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
      typeUrl: "/blit.storage.QueryParamsRequest",
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
  typeUrl: "/blit.storage.QueryParamsResponse",
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
      typeUrl: "/blit.storage.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStorageDetailRequest(): QueryStorageDetailRequest {
  return {
    address: "",
    index: ""
  };
}
export const QueryStorageDetailRequest = {
  typeUrl: "/blit.storage.QueryStorageDetailRequest",
  encode(message: QueryStorageDetailRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStorageDetailRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorageDetailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryStorageDetailRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      index: isSet(object.index) ? String(object.index) : ""
    };
  },
  toJSON(message: QueryStorageDetailRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },
  fromPartial(object: Partial<QueryStorageDetailRequest>): QueryStorageDetailRequest {
    const message = createBaseQueryStorageDetailRequest();
    message.address = object.address ?? "";
    message.index = object.index ?? "";
    return message;
  },
  fromAmino(object: QueryStorageDetailRequestAmino): QueryStorageDetailRequest {
    return {
      address: object.address,
      index: object.index
    };
  },
  toAmino(message: QueryStorageDetailRequest): QueryStorageDetailRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.index = message.index;
    return obj;
  },
  fromAminoMsg(object: QueryStorageDetailRequestAminoMsg): QueryStorageDetailRequest {
    return QueryStorageDetailRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStorageDetailRequestProtoMsg): QueryStorageDetailRequest {
    return QueryStorageDetailRequest.decode(message.value);
  },
  toProto(message: QueryStorageDetailRequest): Uint8Array {
    return QueryStorageDetailRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStorageDetailRequest): QueryStorageDetailRequestProtoMsg {
    return {
      typeUrl: "/blit.storage.QueryStorageDetailRequest",
      value: QueryStorageDetailRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStorageDetailResponse(): QueryStorageDetailResponse {
  return {
    storage: Storage.fromPartial({})
  };
}
export const QueryStorageDetailResponse = {
  typeUrl: "/blit.storage.QueryStorageDetailResponse",
  encode(message: QueryStorageDetailResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.storage !== undefined) {
      Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStorageDetailResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorageDetailResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storage = Storage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryStorageDetailResponse {
    return {
      storage: isSet(object.storage) ? Storage.fromJSON(object.storage) : undefined
    };
  },
  toJSON(message: QueryStorageDetailResponse): unknown {
    const obj: any = {};
    message.storage !== undefined && (obj.storage = message.storage ? Storage.toJSON(message.storage) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryStorageDetailResponse>): QueryStorageDetailResponse {
    const message = createBaseQueryStorageDetailResponse();
    message.storage = object.storage !== undefined && object.storage !== null ? Storage.fromPartial(object.storage) : undefined;
    return message;
  },
  fromAmino(object: QueryStorageDetailResponseAmino): QueryStorageDetailResponse {
    return {
      storage: object?.storage ? Storage.fromAmino(object.storage) : undefined
    };
  },
  toAmino(message: QueryStorageDetailResponse): QueryStorageDetailResponseAmino {
    const obj: any = {};
    obj.storage = message.storage ? Storage.toAmino(message.storage) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStorageDetailResponseAminoMsg): QueryStorageDetailResponse {
    return QueryStorageDetailResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStorageDetailResponseProtoMsg): QueryStorageDetailResponse {
    return QueryStorageDetailResponse.decode(message.value);
  },
  toProto(message: QueryStorageDetailResponse): Uint8Array {
    return QueryStorageDetailResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStorageDetailResponse): QueryStorageDetailResponseProtoMsg {
    return {
      typeUrl: "/blit.storage.QueryStorageDetailResponse",
      value: QueryStorageDetailResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFilterStorageRequest(): QueryFilterStorageRequest {
  return {
    filter_address: "",
    filter_index_prefix: "",
    pagination: undefined
  };
}
export const QueryFilterStorageRequest = {
  typeUrl: "/blit.storage.QueryFilterStorageRequest",
  encode(message: QueryFilterStorageRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.filter_address !== "") {
      writer.uint32(10).string(message.filter_address);
    }
    if (message.filter_index_prefix !== "") {
      writer.uint32(18).string(message.filter_index_prefix);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFilterStorageRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFilterStorageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filter_address = reader.string();
          break;
        case 2:
          message.filter_index_prefix = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFilterStorageRequest {
    return {
      filter_address: isSet(object.filter_address) ? String(object.filter_address) : "",
      filter_index_prefix: isSet(object.filter_index_prefix) ? String(object.filter_index_prefix) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryFilterStorageRequest): unknown {
    const obj: any = {};
    message.filter_address !== undefined && (obj.filter_address = message.filter_address);
    message.filter_index_prefix !== undefined && (obj.filter_index_prefix = message.filter_index_prefix);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryFilterStorageRequest>): QueryFilterStorageRequest {
    const message = createBaseQueryFilterStorageRequest();
    message.filter_address = object.filter_address ?? "";
    message.filter_index_prefix = object.filter_index_prefix ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFilterStorageRequestAmino): QueryFilterStorageRequest {
    return {
      filter_address: object.filter_address,
      filter_index_prefix: object.filter_index_prefix,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryFilterStorageRequest): QueryFilterStorageRequestAmino {
    const obj: any = {};
    obj.filter_address = message.filter_address;
    obj.filter_index_prefix = message.filter_index_prefix;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFilterStorageRequestAminoMsg): QueryFilterStorageRequest {
    return QueryFilterStorageRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFilterStorageRequestProtoMsg): QueryFilterStorageRequest {
    return QueryFilterStorageRequest.decode(message.value);
  },
  toProto(message: QueryFilterStorageRequest): Uint8Array {
    return QueryFilterStorageRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFilterStorageRequest): QueryFilterStorageRequestProtoMsg {
    return {
      typeUrl: "/blit.storage.QueryFilterStorageRequest",
      value: QueryFilterStorageRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFilterStorageResponse(): QueryFilterStorageResponse {
  return {
    storage: [],
    pagination: undefined
  };
}
export const QueryFilterStorageResponse = {
  typeUrl: "/blit.storage.QueryFilterStorageResponse",
  encode(message: QueryFilterStorageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.storage) {
      Storage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFilterStorageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFilterStorageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storage.push(Storage.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryFilterStorageResponse {
    return {
      storage: Array.isArray(object?.storage) ? object.storage.map((e: any) => Storage.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryFilterStorageResponse): unknown {
    const obj: any = {};
    if (message.storage) {
      obj.storage = message.storage.map(e => e ? Storage.toJSON(e) : undefined);
    } else {
      obj.storage = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryFilterStorageResponse>): QueryFilterStorageResponse {
    const message = createBaseQueryFilterStorageResponse();
    message.storage = object.storage?.map(e => Storage.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFilterStorageResponseAmino): QueryFilterStorageResponse {
    return {
      storage: Array.isArray(object?.storage) ? object.storage.map((e: any) => Storage.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryFilterStorageResponse): QueryFilterStorageResponseAmino {
    const obj: any = {};
    if (message.storage) {
      obj.storage = message.storage.map(e => e ? Storage.toAmino(e) : undefined);
    } else {
      obj.storage = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFilterStorageResponseAminoMsg): QueryFilterStorageResponse {
    return QueryFilterStorageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFilterStorageResponseProtoMsg): QueryFilterStorageResponse {
    return QueryFilterStorageResponse.decode(message.value);
  },
  toProto(message: QueryFilterStorageResponse): Uint8Array {
    return QueryFilterStorageResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFilterStorageResponse): QueryFilterStorageResponseProtoMsg {
    return {
      typeUrl: "/blit.storage.QueryFilterStorageResponse",
      value: QueryFilterStorageResponse.encode(message).finish()
    };
  }
};