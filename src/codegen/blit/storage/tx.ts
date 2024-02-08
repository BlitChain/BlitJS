//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export const protobufPackage = "blit.storage";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  type_url: "/blit.storage.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "blit/x/storage/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  type_url: "/blit.storage.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/blit.storage.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgCreateStorage {
  address: string;
  index: string;
  data: string;
  grantee: string;
  force: boolean;
}
export interface MsgCreateStorageProtoMsg {
  type_url: "/blit.storage.MsgCreateStorage";
  value: Uint8Array;
}
export interface MsgCreateStorageAmino {
  address: string;
  index: string;
  data: string;
  grantee: string;
  force: boolean;
}
export interface MsgCreateStorageAminoMsg {
  type: "/blit.storage.MsgCreateStorage";
  value: MsgCreateStorageAmino;
}
export interface MsgCreateStorageSDKType {
  address: string;
  index: string;
  data: string;
  grantee: string;
  force: boolean;
}
export interface MsgCreateStorageResponse {}
export interface MsgCreateStorageResponseProtoMsg {
  type_url: "/blit.storage.MsgCreateStorageResponse";
  value: Uint8Array;
}
export interface MsgCreateStorageResponseAmino {}
export interface MsgCreateStorageResponseAminoMsg {
  type: "/blit.storage.MsgCreateStorageResponse";
  value: MsgCreateStorageResponseAmino;
}
export interface MsgCreateStorageResponseSDKType {}
export interface MsgUpdateStorage {
  address: string;
  index: string;
  data: string;
  grantee: string;
  force: boolean;
}
export interface MsgUpdateStorageProtoMsg {
  type_url: "/blit.storage.MsgUpdateStorage";
  value: Uint8Array;
}
export interface MsgUpdateStorageAmino {
  address: string;
  index: string;
  data: string;
  grantee: string;
  force: boolean;
}
export interface MsgUpdateStorageAminoMsg {
  type: "/blit.storage.MsgUpdateStorage";
  value: MsgUpdateStorageAmino;
}
export interface MsgUpdateStorageSDKType {
  address: string;
  index: string;
  data: string;
  grantee: string;
  force: boolean;
}
export interface MsgUpdateStorageResponse {}
export interface MsgUpdateStorageResponseProtoMsg {
  type_url: "/blit.storage.MsgUpdateStorageResponse";
  value: Uint8Array;
}
export interface MsgUpdateStorageResponseAmino {}
export interface MsgUpdateStorageResponseAminoMsg {
  type: "/blit.storage.MsgUpdateStorageResponse";
  value: MsgUpdateStorageResponseAmino;
}
export interface MsgUpdateStorageResponseSDKType {}
export interface MsgDeleteStorage {
  address: string;
  index: string;
  grantee: string;
  force: boolean;
}
export interface MsgDeleteStorageProtoMsg {
  type_url: "/blit.storage.MsgDeleteStorage";
  value: Uint8Array;
}
export interface MsgDeleteStorageAmino {
  address: string;
  index: string;
  grantee: string;
  force: boolean;
}
export interface MsgDeleteStorageAminoMsg {
  type: "/blit.storage.MsgDeleteStorage";
  value: MsgDeleteStorageAmino;
}
export interface MsgDeleteStorageSDKType {
  address: string;
  index: string;
  grantee: string;
  force: boolean;
}
export interface MsgDeleteStorageResponse {}
export interface MsgDeleteStorageResponseProtoMsg {
  type_url: "/blit.storage.MsgDeleteStorageResponse";
  value: Uint8Array;
}
export interface MsgDeleteStorageResponseAmino {}
export interface MsgDeleteStorageResponseAminoMsg {
  type: "/blit.storage.MsgDeleteStorageResponse";
  value: MsgDeleteStorageResponseAmino;
}
export interface MsgDeleteStorageResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/blit.storage.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    return {
      authority: object.authority,
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "blit/x/storage/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/blit.storage.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/blit.storage.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    return {};
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/blit.storage.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateStorage(): MsgCreateStorage {
  return {
    address: "",
    index: "",
    data: "",
    grantee: "",
    force: false
  };
}
export const MsgCreateStorage = {
  typeUrl: "/blit.storage.MsgCreateStorage",
  encode(message: MsgCreateStorage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.data !== "") {
      writer.uint32(26).string(message.data);
    }
    if (message.grantee !== "") {
      writer.uint32(34).string(message.grantee);
    }
    if (message.force === true) {
      writer.uint32(40).bool(message.force);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateStorage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.data = reader.string();
          break;
        case 4:
          message.grantee = reader.string();
          break;
        case 5:
          message.force = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateStorage {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      index: isSet(object.index) ? String(object.index) : "",
      data: isSet(object.data) ? String(object.data) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      force: isSet(object.force) ? Boolean(object.force) : false
    };
  },
  toJSON(message: MsgCreateStorage): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.index !== undefined && (obj.index = message.index);
    message.data !== undefined && (obj.data = message.data);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.force !== undefined && (obj.force = message.force);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateStorage>): MsgCreateStorage {
    const message = createBaseMsgCreateStorage();
    message.address = object.address ?? "";
    message.index = object.index ?? "";
    message.data = object.data ?? "";
    message.grantee = object.grantee ?? "";
    message.force = object.force ?? false;
    return message;
  },
  fromAmino(object: MsgCreateStorageAmino): MsgCreateStorage {
    return {
      address: object.address,
      index: object.index,
      data: object.data,
      grantee: object.grantee,
      force: object.force
    };
  },
  toAmino(message: MsgCreateStorage): MsgCreateStorageAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.index = message.index;
    obj.data = message.data;
    obj.grantee = message.grantee;
    obj.force = message.force;
    return obj;
  },
  fromAminoMsg(object: MsgCreateStorageAminoMsg): MsgCreateStorage {
    return MsgCreateStorage.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateStorageProtoMsg): MsgCreateStorage {
    return MsgCreateStorage.decode(message.value);
  },
  toProto(message: MsgCreateStorage): Uint8Array {
    return MsgCreateStorage.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateStorage): MsgCreateStorageProtoMsg {
    return {
      typeUrl: "/blit.storage.MsgCreateStorage",
      value: MsgCreateStorage.encode(message).finish()
    };
  }
};
function createBaseMsgCreateStorageResponse(): MsgCreateStorageResponse {
  return {};
}
export const MsgCreateStorageResponse = {
  typeUrl: "/blit.storage.MsgCreateStorageResponse",
  encode(_: MsgCreateStorageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateStorageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStorageResponse();
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
  fromJSON(_: any): MsgCreateStorageResponse {
    return {};
  },
  toJSON(_: MsgCreateStorageResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCreateStorageResponse>): MsgCreateStorageResponse {
    const message = createBaseMsgCreateStorageResponse();
    return message;
  },
  fromAmino(_: MsgCreateStorageResponseAmino): MsgCreateStorageResponse {
    return {};
  },
  toAmino(_: MsgCreateStorageResponse): MsgCreateStorageResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateStorageResponseAminoMsg): MsgCreateStorageResponse {
    return MsgCreateStorageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateStorageResponseProtoMsg): MsgCreateStorageResponse {
    return MsgCreateStorageResponse.decode(message.value);
  },
  toProto(message: MsgCreateStorageResponse): Uint8Array {
    return MsgCreateStorageResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateStorageResponse): MsgCreateStorageResponseProtoMsg {
    return {
      typeUrl: "/blit.storage.MsgCreateStorageResponse",
      value: MsgCreateStorageResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateStorage(): MsgUpdateStorage {
  return {
    address: "",
    index: "",
    data: "",
    grantee: "",
    force: false
  };
}
export const MsgUpdateStorage = {
  typeUrl: "/blit.storage.MsgUpdateStorage",
  encode(message: MsgUpdateStorage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.data !== "") {
      writer.uint32(26).string(message.data);
    }
    if (message.grantee !== "") {
      writer.uint32(34).string(message.grantee);
    }
    if (message.force === true) {
      writer.uint32(40).bool(message.force);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateStorage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.data = reader.string();
          break;
        case 4:
          message.grantee = reader.string();
          break;
        case 5:
          message.force = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateStorage {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      index: isSet(object.index) ? String(object.index) : "",
      data: isSet(object.data) ? String(object.data) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      force: isSet(object.force) ? Boolean(object.force) : false
    };
  },
  toJSON(message: MsgUpdateStorage): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.index !== undefined && (obj.index = message.index);
    message.data !== undefined && (obj.data = message.data);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.force !== undefined && (obj.force = message.force);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateStorage>): MsgUpdateStorage {
    const message = createBaseMsgUpdateStorage();
    message.address = object.address ?? "";
    message.index = object.index ?? "";
    message.data = object.data ?? "";
    message.grantee = object.grantee ?? "";
    message.force = object.force ?? false;
    return message;
  },
  fromAmino(object: MsgUpdateStorageAmino): MsgUpdateStorage {
    return {
      address: object.address,
      index: object.index,
      data: object.data,
      grantee: object.grantee,
      force: object.force
    };
  },
  toAmino(message: MsgUpdateStorage): MsgUpdateStorageAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.index = message.index;
    obj.data = message.data;
    obj.grantee = message.grantee;
    obj.force = message.force;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateStorageAminoMsg): MsgUpdateStorage {
    return MsgUpdateStorage.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateStorageProtoMsg): MsgUpdateStorage {
    return MsgUpdateStorage.decode(message.value);
  },
  toProto(message: MsgUpdateStorage): Uint8Array {
    return MsgUpdateStorage.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateStorage): MsgUpdateStorageProtoMsg {
    return {
      typeUrl: "/blit.storage.MsgUpdateStorage",
      value: MsgUpdateStorage.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateStorageResponse(): MsgUpdateStorageResponse {
  return {};
}
export const MsgUpdateStorageResponse = {
  typeUrl: "/blit.storage.MsgUpdateStorageResponse",
  encode(_: MsgUpdateStorageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateStorageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateStorageResponse();
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
  fromJSON(_: any): MsgUpdateStorageResponse {
    return {};
  },
  toJSON(_: MsgUpdateStorageResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateStorageResponse>): MsgUpdateStorageResponse {
    const message = createBaseMsgUpdateStorageResponse();
    return message;
  },
  fromAmino(_: MsgUpdateStorageResponseAmino): MsgUpdateStorageResponse {
    return {};
  },
  toAmino(_: MsgUpdateStorageResponse): MsgUpdateStorageResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateStorageResponseAminoMsg): MsgUpdateStorageResponse {
    return MsgUpdateStorageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateStorageResponseProtoMsg): MsgUpdateStorageResponse {
    return MsgUpdateStorageResponse.decode(message.value);
  },
  toProto(message: MsgUpdateStorageResponse): Uint8Array {
    return MsgUpdateStorageResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateStorageResponse): MsgUpdateStorageResponseProtoMsg {
    return {
      typeUrl: "/blit.storage.MsgUpdateStorageResponse",
      value: MsgUpdateStorageResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteStorage(): MsgDeleteStorage {
  return {
    address: "",
    index: "",
    grantee: "",
    force: false
  };
}
export const MsgDeleteStorage = {
  typeUrl: "/blit.storage.MsgDeleteStorage",
  encode(message: MsgDeleteStorage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.grantee !== "") {
      writer.uint32(26).string(message.grantee);
    }
    if (message.force === true) {
      writer.uint32(40).bool(message.force);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteStorage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.grantee = reader.string();
          break;
        case 5:
          message.force = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeleteStorage {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      index: isSet(object.index) ? String(object.index) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      force: isSet(object.force) ? Boolean(object.force) : false
    };
  },
  toJSON(message: MsgDeleteStorage): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.index !== undefined && (obj.index = message.index);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.force !== undefined && (obj.force = message.force);
    return obj;
  },
  fromPartial(object: Partial<MsgDeleteStorage>): MsgDeleteStorage {
    const message = createBaseMsgDeleteStorage();
    message.address = object.address ?? "";
    message.index = object.index ?? "";
    message.grantee = object.grantee ?? "";
    message.force = object.force ?? false;
    return message;
  },
  fromAmino(object: MsgDeleteStorageAmino): MsgDeleteStorage {
    return {
      address: object.address,
      index: object.index,
      grantee: object.grantee,
      force: object.force
    };
  },
  toAmino(message: MsgDeleteStorage): MsgDeleteStorageAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.index = message.index;
    obj.grantee = message.grantee;
    obj.force = message.force;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteStorageAminoMsg): MsgDeleteStorage {
    return MsgDeleteStorage.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteStorageProtoMsg): MsgDeleteStorage {
    return MsgDeleteStorage.decode(message.value);
  },
  toProto(message: MsgDeleteStorage): Uint8Array {
    return MsgDeleteStorage.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteStorage): MsgDeleteStorageProtoMsg {
    return {
      typeUrl: "/blit.storage.MsgDeleteStorage",
      value: MsgDeleteStorage.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteStorageResponse(): MsgDeleteStorageResponse {
  return {};
}
export const MsgDeleteStorageResponse = {
  typeUrl: "/blit.storage.MsgDeleteStorageResponse",
  encode(_: MsgDeleteStorageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteStorageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteStorageResponse();
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
  fromJSON(_: any): MsgDeleteStorageResponse {
    return {};
  },
  toJSON(_: MsgDeleteStorageResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgDeleteStorageResponse>): MsgDeleteStorageResponse {
    const message = createBaseMsgDeleteStorageResponse();
    return message;
  },
  fromAmino(_: MsgDeleteStorageResponseAmino): MsgDeleteStorageResponse {
    return {};
  },
  toAmino(_: MsgDeleteStorageResponse): MsgDeleteStorageResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteStorageResponseAminoMsg): MsgDeleteStorageResponse {
    return MsgDeleteStorageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteStorageResponseProtoMsg): MsgDeleteStorageResponse {
    return MsgDeleteStorageResponse.decode(message.value);
  },
  toProto(message: MsgDeleteStorageResponse): Uint8Array {
    return MsgDeleteStorageResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteStorageResponse): MsgDeleteStorageResponseProtoMsg {
    return {
      typeUrl: "/blit.storage.MsgDeleteStorageResponse",
      value: MsgDeleteStorageResponse.encode(message).finish()
    };
  }
};