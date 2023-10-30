//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Storage, StorageAmino, StorageSDKType } from "./storage";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  type_url: "/blit.storage.QueryParamsRequest";
  value: Uint8Array;
}
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
export interface QueryGetStorageRequest {
  address: string;
  index: string;
}
export interface QueryGetStorageRequestProtoMsg {
  type_url: "/blit.storage.QueryGetStorageRequest";
  value: Uint8Array;
}
export interface QueryGetStorageRequestProtoMsg {
  type_url: "/blit.storage.QueryGetStorageRequest";
  value: Uint8Array;
}
export interface QueryGetStorageRequestAmino {
  address: string;
  index: string;
}
export interface QueryGetStorageRequestAminoMsg {
  type: "/blit.storage.QueryGetStorageRequest";
  value: QueryGetStorageRequestAmino;
}
export interface QueryGetStorageRequestSDKType {
  address: string;
  index: string;
}
export interface QueryGetStorageResponse {
  storage: Storage;
}
export interface QueryGetStorageResponseProtoMsg {
  type_url: "/blit.storage.QueryGetStorageResponse";
  value: Uint8Array;
}
export interface QueryGetStorageResponseProtoMsg {
  type_url: "/blit.storage.QueryGetStorageResponse";
  value: Uint8Array;
}
export interface QueryGetStorageResponseAmino {
  storage?: StorageAmino;
}
export interface QueryGetStorageResponseAminoMsg {
  type: "/blit.storage.QueryGetStorageResponse";
  value: QueryGetStorageResponseAmino;
}
export interface QueryGetStorageResponseSDKType {
  storage: StorageSDKType;
}
export interface QueryAllStorageRequest {
  filter_address: string;
  filter_index_prefix: string;
  pagination?: PageRequest;
}
export interface QueryAllStorageRequestProtoMsg {
  type_url: "/blit.storage.QueryAllStorageRequest";
  value: Uint8Array;
}
export interface QueryAllStorageRequestProtoMsg {
  type_url: "/blit.storage.QueryAllStorageRequest";
  value: Uint8Array;
}
export interface QueryAllStorageRequestAmino {
  filter_address: string;
  filter_index_prefix: string;
  pagination?: PageRequestAmino;
}
export interface QueryAllStorageRequestAminoMsg {
  type: "/blit.storage.QueryAllStorageRequest";
  value: QueryAllStorageRequestAmino;
}
export interface QueryAllStorageRequestSDKType {
  filter_address: string;
  filter_index_prefix: string;
  pagination?: PageRequestSDKType;
}
export interface QueryAllStorageResponse {
  storage: Storage[];
  pagination?: PageResponse;
}
export interface QueryAllStorageResponseProtoMsg {
  type_url: "/blit.storage.QueryAllStorageResponse";
  value: Uint8Array;
}
export interface QueryAllStorageResponseProtoMsg {
  type_url: "/blit.storage.QueryAllStorageResponse";
  value: Uint8Array;
}
export interface QueryAllStorageResponseAmino {
  storage: StorageAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllStorageResponseAminoMsg {
  type: "/blit.storage.QueryAllStorageResponse";
  value: QueryAllStorageResponseAmino;
}
export interface QueryAllStorageResponseSDKType {
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
      typeUrl: "/blit.storage.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetStorageRequest(): QueryGetStorageRequest {
  return {
    address: "",
    index: ""
  };
}
export const QueryGetStorageRequest = {
  typeUrl: "/blit.storage.QueryGetStorageRequest",
  encode(message: QueryGetStorageRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetStorageRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStorageRequest();
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
  fromJSON(object: any): QueryGetStorageRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      index: isSet(object.index) ? String(object.index) : ""
    };
  },
  toJSON(message: QueryGetStorageRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },
  fromPartial(object: Partial<QueryGetStorageRequest>): QueryGetStorageRequest {
    const message = createBaseQueryGetStorageRequest();
    message.address = object.address ?? "";
    message.index = object.index ?? "";
    return message;
  },
  fromSDK(object: QueryGetStorageRequestSDKType): QueryGetStorageRequest {
    return {
      address: object?.address,
      index: object?.index
    };
  },
  toSDK(message: QueryGetStorageRequest): QueryGetStorageRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.index = message.index;
    return obj;
  },
  fromAmino(object: QueryGetStorageRequestAmino): QueryGetStorageRequest {
    return {
      address: object.address,
      index: object.index
    };
  },
  toAmino(message: QueryGetStorageRequest): QueryGetStorageRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.index = message.index;
    return obj;
  },
  fromAminoMsg(object: QueryGetStorageRequestAminoMsg): QueryGetStorageRequest {
    return QueryGetStorageRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetStorageRequestProtoMsg): QueryGetStorageRequest {
    return QueryGetStorageRequest.decode(message.value);
  },
  toProto(message: QueryGetStorageRequest): Uint8Array {
    return QueryGetStorageRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetStorageRequest): QueryGetStorageRequestProtoMsg {
    return {
      typeUrl: "/blit.storage.QueryGetStorageRequest",
      value: QueryGetStorageRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetStorageResponse(): QueryGetStorageResponse {
  return {
    storage: Storage.fromPartial({})
  };
}
export const QueryGetStorageResponse = {
  typeUrl: "/blit.storage.QueryGetStorageResponse",
  encode(message: QueryGetStorageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.storage !== undefined) {
      Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetStorageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStorageResponse();
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
  fromJSON(object: any): QueryGetStorageResponse {
    return {
      storage: isSet(object.storage) ? Storage.fromJSON(object.storage) : undefined
    };
  },
  toJSON(message: QueryGetStorageResponse): unknown {
    const obj: any = {};
    message.storage !== undefined && (obj.storage = message.storage ? Storage.toJSON(message.storage) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetStorageResponse>): QueryGetStorageResponse {
    const message = createBaseQueryGetStorageResponse();
    message.storage = object.storage !== undefined && object.storage !== null ? Storage.fromPartial(object.storage) : undefined;
    return message;
  },
  fromSDK(object: QueryGetStorageResponseSDKType): QueryGetStorageResponse {
    return {
      storage: object.storage ? Storage.fromSDK(object.storage) : undefined
    };
  },
  toSDK(message: QueryGetStorageResponse): QueryGetStorageResponseSDKType {
    const obj: any = {};
    message.storage !== undefined && (obj.storage = message.storage ? Storage.toSDK(message.storage) : undefined);
    return obj;
  },
  fromAmino(object: QueryGetStorageResponseAmino): QueryGetStorageResponse {
    return {
      storage: object?.storage ? Storage.fromAmino(object.storage) : undefined
    };
  },
  toAmino(message: QueryGetStorageResponse): QueryGetStorageResponseAmino {
    const obj: any = {};
    obj.storage = message.storage ? Storage.toAmino(message.storage) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetStorageResponseAminoMsg): QueryGetStorageResponse {
    return QueryGetStorageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetStorageResponseProtoMsg): QueryGetStorageResponse {
    return QueryGetStorageResponse.decode(message.value);
  },
  toProto(message: QueryGetStorageResponse): Uint8Array {
    return QueryGetStorageResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetStorageResponse): QueryGetStorageResponseProtoMsg {
    return {
      typeUrl: "/blit.storage.QueryGetStorageResponse",
      value: QueryGetStorageResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllStorageRequest(): QueryAllStorageRequest {
  return {
    filter_address: "",
    filter_index_prefix: "",
    pagination: undefined
  };
}
export const QueryAllStorageRequest = {
  typeUrl: "/blit.storage.QueryAllStorageRequest",
  encode(message: QueryAllStorageRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStorageRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStorageRequest();
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
  fromJSON(object: any): QueryAllStorageRequest {
    return {
      filter_address: isSet(object.filter_address) ? String(object.filter_address) : "",
      filter_index_prefix: isSet(object.filter_index_prefix) ? String(object.filter_index_prefix) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllStorageRequest): unknown {
    const obj: any = {};
    message.filter_address !== undefined && (obj.filter_address = message.filter_address);
    message.filter_index_prefix !== undefined && (obj.filter_index_prefix = message.filter_index_prefix);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllStorageRequest>): QueryAllStorageRequest {
    const message = createBaseQueryAllStorageRequest();
    message.filter_address = object.filter_address ?? "";
    message.filter_index_prefix = object.filter_index_prefix ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAllStorageRequestSDKType): QueryAllStorageRequest {
    return {
      filter_address: object?.filter_address,
      filter_index_prefix: object?.filter_index_prefix,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllStorageRequest): QueryAllStorageRequestSDKType {
    const obj: any = {};
    obj.filter_address = message.filter_address;
    obj.filter_index_prefix = message.filter_index_prefix;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllStorageRequestAmino): QueryAllStorageRequest {
    return {
      filter_address: object.filter_address,
      filter_index_prefix: object.filter_index_prefix,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllStorageRequest): QueryAllStorageRequestAmino {
    const obj: any = {};
    obj.filter_address = message.filter_address;
    obj.filter_index_prefix = message.filter_index_prefix;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllStorageRequestAminoMsg): QueryAllStorageRequest {
    return QueryAllStorageRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllStorageRequestProtoMsg): QueryAllStorageRequest {
    return QueryAllStorageRequest.decode(message.value);
  },
  toProto(message: QueryAllStorageRequest): Uint8Array {
    return QueryAllStorageRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllStorageRequest): QueryAllStorageRequestProtoMsg {
    return {
      typeUrl: "/blit.storage.QueryAllStorageRequest",
      value: QueryAllStorageRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllStorageResponse(): QueryAllStorageResponse {
  return {
    storage: [],
    pagination: undefined
  };
}
export const QueryAllStorageResponse = {
  typeUrl: "/blit.storage.QueryAllStorageResponse",
  encode(message: QueryAllStorageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.storage) {
      Storage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStorageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStorageResponse();
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
  fromJSON(object: any): QueryAllStorageResponse {
    return {
      storage: Array.isArray(object?.storage) ? object.storage.map((e: any) => Storage.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllStorageResponse): unknown {
    const obj: any = {};
    if (message.storage) {
      obj.storage = message.storage.map(e => e ? Storage.toJSON(e) : undefined);
    } else {
      obj.storage = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllStorageResponse>): QueryAllStorageResponse {
    const message = createBaseQueryAllStorageResponse();
    message.storage = object.storage?.map(e => Storage.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAllStorageResponseSDKType): QueryAllStorageResponse {
    return {
      storage: Array.isArray(object?.storage) ? object.storage.map((e: any) => Storage.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllStorageResponse): QueryAllStorageResponseSDKType {
    const obj: any = {};
    if (message.storage) {
      obj.storage = message.storage.map(e => e ? Storage.toSDK(e) : undefined);
    } else {
      obj.storage = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllStorageResponseAmino): QueryAllStorageResponse {
    return {
      storage: Array.isArray(object?.storage) ? object.storage.map((e: any) => Storage.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllStorageResponse): QueryAllStorageResponseAmino {
    const obj: any = {};
    if (message.storage) {
      obj.storage = message.storage.map(e => e ? Storage.toAmino(e) : undefined);
    } else {
      obj.storage = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllStorageResponseAminoMsg): QueryAllStorageResponse {
    return QueryAllStorageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllStorageResponseProtoMsg): QueryAllStorageResponse {
    return QueryAllStorageResponse.decode(message.value);
  },
  toProto(message: QueryAllStorageResponse): Uint8Array {
    return QueryAllStorageResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllStorageResponse): QueryAllStorageResponseProtoMsg {
    return {
      typeUrl: "/blit.storage.QueryAllStorageResponse",
      value: QueryAllStorageResponse.encode(message).finish()
    };
  }
};