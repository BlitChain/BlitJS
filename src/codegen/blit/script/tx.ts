//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export const protobufPackage = "blit.script";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  type_url: "/blit.script.MsgUpdateParams";
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
  type: "blit/x/script/MsgUpdateParams";
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
  type_url: "/blit.script.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/blit.script.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgCreateScript {
  creator: string;
  code: string;
  /** The list of MsgUrls the create will be granted access to via authz initially */
  msg_type_permissions: string[];
  grantee: string;
}
export interface MsgCreateScriptProtoMsg {
  type_url: "/blit.script.MsgCreateScript";
  value: Uint8Array;
}
export interface MsgCreateScriptAmino {
  creator: string;
  code: string;
  /** The list of MsgUrls the create will be granted access to via authz initially */
  msg_type_permissions: string[];
  grantee: string;
}
export interface MsgCreateScriptAminoMsg {
  type: "/blit.script.MsgCreateScript";
  value: MsgCreateScriptAmino;
}
export interface MsgCreateScriptSDKType {
  creator: string;
  code: string;
  msg_type_permissions: string[];
  grantee: string;
}
export interface MsgCreateScriptResponse {
  address: string;
}
export interface MsgCreateScriptResponseProtoMsg {
  type_url: "/blit.script.MsgCreateScriptResponse";
  value: Uint8Array;
}
export interface MsgCreateScriptResponseAmino {
  address: string;
}
export interface MsgCreateScriptResponseAminoMsg {
  type: "/blit.script.MsgCreateScriptResponse";
  value: MsgCreateScriptResponseAmino;
}
export interface MsgCreateScriptResponseSDKType {
  address: string;
}
export interface MsgUpdateScript {
  address: string;
  code: string;
  grantee: string;
}
export interface MsgUpdateScriptProtoMsg {
  type_url: "/blit.script.MsgUpdateScript";
  value: Uint8Array;
}
export interface MsgUpdateScriptAmino {
  address: string;
  code: string;
  grantee: string;
}
export interface MsgUpdateScriptAminoMsg {
  type: "/blit.script.MsgUpdateScript";
  value: MsgUpdateScriptAmino;
}
export interface MsgUpdateScriptSDKType {
  address: string;
  code: string;
  grantee: string;
}
export interface MsgUpdateScriptResponse {
  version: bigint;
}
export interface MsgUpdateScriptResponseProtoMsg {
  type_url: "/blit.script.MsgUpdateScriptResponse";
  value: Uint8Array;
}
export interface MsgUpdateScriptResponseAmino {
  version: string;
}
export interface MsgUpdateScriptResponseAminoMsg {
  type: "/blit.script.MsgUpdateScriptResponse";
  value: MsgUpdateScriptResponseAmino;
}
export interface MsgUpdateScriptResponseSDKType {
  version: bigint;
}
export interface MsgDeleteScript {
  address: string;
  index: string;
}
export interface MsgDeleteScriptProtoMsg {
  type_url: "/blit.script.MsgDeleteScript";
  value: Uint8Array;
}
export interface MsgDeleteScriptAmino {
  address: string;
  index: string;
}
export interface MsgDeleteScriptAminoMsg {
  type: "/blit.script.MsgDeleteScript";
  value: MsgDeleteScriptAmino;
}
export interface MsgDeleteScriptSDKType {
  address: string;
  index: string;
}
export interface MsgDeleteScriptResponse {}
export interface MsgDeleteScriptResponseProtoMsg {
  type_url: "/blit.script.MsgDeleteScriptResponse";
  value: Uint8Array;
}
export interface MsgDeleteScriptResponseAmino {}
export interface MsgDeleteScriptResponseAminoMsg {
  type: "/blit.script.MsgDeleteScriptResponse";
  value: MsgDeleteScriptResponseAmino;
}
export interface MsgDeleteScriptResponseSDKType {}
/** MsgRun runs a script at a specific address */
export interface MsgRun {
  caller_address: string;
  script_address: string;
  extra_code: string;
  function_name: string;
  kwargs: string;
  grantee: string;
  attached_messages: string;
}
export interface MsgRunProtoMsg {
  type_url: "/blit.script.MsgRun";
  value: Uint8Array;
}
/** MsgRun runs a script at a specific address */
export interface MsgRunAmino {
  caller_address: string;
  script_address: string;
  extra_code: string;
  function_name: string;
  kwargs: string;
  grantee: string;
  attached_messages: string;
}
export interface MsgRunAminoMsg {
  type: "/blit.script.MsgRun";
  value: MsgRunAmino;
}
/** MsgRun runs a script at a specific address */
export interface MsgRunSDKType {
  caller_address: string;
  script_address: string;
  extra_code: string;
  function_name: string;
  kwargs: string;
  grantee: string;
  attached_messages: string;
}
export interface MsgRunResponse {
  response: string;
}
export interface MsgRunResponseProtoMsg {
  type_url: "/blit.script.MsgRunResponse";
  value: Uint8Array;
}
export interface MsgRunResponseAmino {
  response: string;
}
export interface MsgRunResponseAminoMsg {
  type: "/blit.script.MsgRunResponse";
  value: MsgRunResponseAmino;
}
export interface MsgRunResponseSDKType {
  response: string;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/blit.script.MsgUpdateParams",
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
      type: "blit/x/script/MsgUpdateParams",
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
      typeUrl: "/blit.script.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/blit.script.MsgUpdateParamsResponse",
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
      typeUrl: "/blit.script.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateScript(): MsgCreateScript {
  return {
    creator: "",
    code: "",
    msg_type_permissions: [],
    grantee: ""
  };
}
export const MsgCreateScript = {
  typeUrl: "/blit.script.MsgCreateScript",
  encode(message: MsgCreateScript, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    for (const v of message.msg_type_permissions) {
      writer.uint32(26).string(v!);
    }
    if (message.grantee !== "") {
      writer.uint32(34).string(message.grantee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateScript {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateScript();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.code = reader.string();
          break;
        case 3:
          message.msg_type_permissions.push(reader.string());
          break;
        case 4:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateScript {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      code: isSet(object.code) ? String(object.code) : "",
      msg_type_permissions: Array.isArray(object?.msg_type_permissions) ? object.msg_type_permissions.map((e: any) => String(e)) : [],
      grantee: isSet(object.grantee) ? String(object.grantee) : ""
    };
  },
  toJSON(message: MsgCreateScript): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.code !== undefined && (obj.code = message.code);
    if (message.msg_type_permissions) {
      obj.msg_type_permissions = message.msg_type_permissions.map(e => e);
    } else {
      obj.msg_type_permissions = [];
    }
    message.grantee !== undefined && (obj.grantee = message.grantee);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateScript>): MsgCreateScript {
    const message = createBaseMsgCreateScript();
    message.creator = object.creator ?? "";
    message.code = object.code ?? "";
    message.msg_type_permissions = object.msg_type_permissions?.map(e => e) || [];
    message.grantee = object.grantee ?? "";
    return message;
  },
  fromAmino(object: MsgCreateScriptAmino): MsgCreateScript {
    return {
      creator: object.creator,
      code: object.code,
      msg_type_permissions: Array.isArray(object?.msg_type_permissions) ? object.msg_type_permissions.map((e: any) => e) : [],
      grantee: object.grantee
    };
  },
  toAmino(message: MsgCreateScript): MsgCreateScriptAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.code = message.code;
    if (message.msg_type_permissions) {
      obj.msg_type_permissions = message.msg_type_permissions.map(e => e);
    } else {
      obj.msg_type_permissions = [];
    }
    obj.grantee = message.grantee;
    return obj;
  },
  fromAminoMsg(object: MsgCreateScriptAminoMsg): MsgCreateScript {
    return MsgCreateScript.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateScriptProtoMsg): MsgCreateScript {
    return MsgCreateScript.decode(message.value);
  },
  toProto(message: MsgCreateScript): Uint8Array {
    return MsgCreateScript.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateScript): MsgCreateScriptProtoMsg {
    return {
      typeUrl: "/blit.script.MsgCreateScript",
      value: MsgCreateScript.encode(message).finish()
    };
  }
};
function createBaseMsgCreateScriptResponse(): MsgCreateScriptResponse {
  return {
    address: ""
  };
}
export const MsgCreateScriptResponse = {
  typeUrl: "/blit.script.MsgCreateScriptResponse",
  encode(message: MsgCreateScriptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateScriptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateScriptResponse();
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
  fromJSON(object: any): MsgCreateScriptResponse {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: MsgCreateScriptResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateScriptResponse>): MsgCreateScriptResponse {
    const message = createBaseMsgCreateScriptResponse();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgCreateScriptResponseAmino): MsgCreateScriptResponse {
    return {
      address: object.address
    };
  },
  toAmino(message: MsgCreateScriptResponse): MsgCreateScriptResponseAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: MsgCreateScriptResponseAminoMsg): MsgCreateScriptResponse {
    return MsgCreateScriptResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateScriptResponseProtoMsg): MsgCreateScriptResponse {
    return MsgCreateScriptResponse.decode(message.value);
  },
  toProto(message: MsgCreateScriptResponse): Uint8Array {
    return MsgCreateScriptResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateScriptResponse): MsgCreateScriptResponseProtoMsg {
    return {
      typeUrl: "/blit.script.MsgCreateScriptResponse",
      value: MsgCreateScriptResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateScript(): MsgUpdateScript {
  return {
    address: "",
    code: "",
    grantee: ""
  };
}
export const MsgUpdateScript = {
  typeUrl: "/blit.script.MsgUpdateScript",
  encode(message: MsgUpdateScript, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.grantee !== "") {
      writer.uint32(26).string(message.grantee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateScript {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateScript();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.code = reader.string();
          break;
        case 3:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateScript {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      code: isSet(object.code) ? String(object.code) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : ""
    };
  },
  toJSON(message: MsgUpdateScript): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.code !== undefined && (obj.code = message.code);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateScript>): MsgUpdateScript {
    const message = createBaseMsgUpdateScript();
    message.address = object.address ?? "";
    message.code = object.code ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateScriptAmino): MsgUpdateScript {
    return {
      address: object.address,
      code: object.code,
      grantee: object.grantee
    };
  },
  toAmino(message: MsgUpdateScript): MsgUpdateScriptAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.code = message.code;
    obj.grantee = message.grantee;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateScriptAminoMsg): MsgUpdateScript {
    return MsgUpdateScript.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateScriptProtoMsg): MsgUpdateScript {
    return MsgUpdateScript.decode(message.value);
  },
  toProto(message: MsgUpdateScript): Uint8Array {
    return MsgUpdateScript.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateScript): MsgUpdateScriptProtoMsg {
    return {
      typeUrl: "/blit.script.MsgUpdateScript",
      value: MsgUpdateScript.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateScriptResponse(): MsgUpdateScriptResponse {
  return {
    version: BigInt(0)
  };
}
export const MsgUpdateScriptResponse = {
  typeUrl: "/blit.script.MsgUpdateScriptResponse",
  encode(message: MsgUpdateScriptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.version !== BigInt(0)) {
      writer.uint32(8).int64(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateScriptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateScriptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateScriptResponse {
    return {
      version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgUpdateScriptResponse): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = (message.version || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateScriptResponse>): MsgUpdateScriptResponse {
    const message = createBaseMsgUpdateScriptResponse();
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateScriptResponseAmino): MsgUpdateScriptResponse {
    return {
      version: BigInt(object.version)
    };
  },
  toAmino(message: MsgUpdateScriptResponse): MsgUpdateScriptResponseAmino {
    const obj: any = {};
    obj.version = message.version ? message.version.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateScriptResponseAminoMsg): MsgUpdateScriptResponse {
    return MsgUpdateScriptResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateScriptResponseProtoMsg): MsgUpdateScriptResponse {
    return MsgUpdateScriptResponse.decode(message.value);
  },
  toProto(message: MsgUpdateScriptResponse): Uint8Array {
    return MsgUpdateScriptResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateScriptResponse): MsgUpdateScriptResponseProtoMsg {
    return {
      typeUrl: "/blit.script.MsgUpdateScriptResponse",
      value: MsgUpdateScriptResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteScript(): MsgDeleteScript {
  return {
    address: "",
    index: ""
  };
}
export const MsgDeleteScript = {
  typeUrl: "/blit.script.MsgDeleteScript",
  encode(message: MsgDeleteScript, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteScript {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteScript();
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
  fromJSON(object: any): MsgDeleteScript {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      index: isSet(object.index) ? String(object.index) : ""
    };
  },
  toJSON(message: MsgDeleteScript): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },
  fromPartial(object: Partial<MsgDeleteScript>): MsgDeleteScript {
    const message = createBaseMsgDeleteScript();
    message.address = object.address ?? "";
    message.index = object.index ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteScriptAmino): MsgDeleteScript {
    return {
      address: object.address,
      index: object.index
    };
  },
  toAmino(message: MsgDeleteScript): MsgDeleteScriptAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.index = message.index;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteScriptAminoMsg): MsgDeleteScript {
    return MsgDeleteScript.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteScriptProtoMsg): MsgDeleteScript {
    return MsgDeleteScript.decode(message.value);
  },
  toProto(message: MsgDeleteScript): Uint8Array {
    return MsgDeleteScript.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteScript): MsgDeleteScriptProtoMsg {
    return {
      typeUrl: "/blit.script.MsgDeleteScript",
      value: MsgDeleteScript.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteScriptResponse(): MsgDeleteScriptResponse {
  return {};
}
export const MsgDeleteScriptResponse = {
  typeUrl: "/blit.script.MsgDeleteScriptResponse",
  encode(_: MsgDeleteScriptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteScriptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteScriptResponse();
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
  fromJSON(_: any): MsgDeleteScriptResponse {
    return {};
  },
  toJSON(_: MsgDeleteScriptResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgDeleteScriptResponse>): MsgDeleteScriptResponse {
    const message = createBaseMsgDeleteScriptResponse();
    return message;
  },
  fromAmino(_: MsgDeleteScriptResponseAmino): MsgDeleteScriptResponse {
    return {};
  },
  toAmino(_: MsgDeleteScriptResponse): MsgDeleteScriptResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteScriptResponseAminoMsg): MsgDeleteScriptResponse {
    return MsgDeleteScriptResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteScriptResponseProtoMsg): MsgDeleteScriptResponse {
    return MsgDeleteScriptResponse.decode(message.value);
  },
  toProto(message: MsgDeleteScriptResponse): Uint8Array {
    return MsgDeleteScriptResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteScriptResponse): MsgDeleteScriptResponseProtoMsg {
    return {
      typeUrl: "/blit.script.MsgDeleteScriptResponse",
      value: MsgDeleteScriptResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRun(): MsgRun {
  return {
    caller_address: "",
    script_address: "",
    extra_code: "",
    function_name: "",
    kwargs: "",
    grantee: "",
    attached_messages: ""
  };
}
export const MsgRun = {
  typeUrl: "/blit.script.MsgRun",
  encode(message: MsgRun, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.attached_messages !== "") {
      writer.uint32(10).string(message.attached_messages);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRun {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRun();
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
        case 1:
          message.attached_messages = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRun {
    return {
      caller_address: isSet(object.caller_address) ? String(object.caller_address) : "",
      script_address: isSet(object.script_address) ? String(object.script_address) : "",
      extra_code: isSet(object.extra_code) ? String(object.extra_code) : "",
      function_name: isSet(object.function_name) ? String(object.function_name) : "",
      kwargs: isSet(object.kwargs) ? String(object.kwargs) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      attached_messages: isSet(object.attached_messages) ? String(object.attached_messages) : ""
    };
  },
  toJSON(message: MsgRun): unknown {
    const obj: any = {};
    message.caller_address !== undefined && (obj.caller_address = message.caller_address);
    message.script_address !== undefined && (obj.script_address = message.script_address);
    message.extra_code !== undefined && (obj.extra_code = message.extra_code);
    message.function_name !== undefined && (obj.function_name = message.function_name);
    message.kwargs !== undefined && (obj.kwargs = message.kwargs);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.attached_messages !== undefined && (obj.attached_messages = message.attached_messages);
    return obj;
  },
  fromPartial(object: Partial<MsgRun>): MsgRun {
    const message = createBaseMsgRun();
    message.caller_address = object.caller_address ?? "";
    message.script_address = object.script_address ?? "";
    message.extra_code = object.extra_code ?? "";
    message.function_name = object.function_name ?? "";
    message.kwargs = object.kwargs ?? "";
    message.grantee = object.grantee ?? "";
    message.attached_messages = object.attached_messages ?? "";
    return message;
  },
  fromAmino(object: MsgRunAmino): MsgRun {
    return {
      caller_address: object.caller_address,
      script_address: object.script_address,
      extra_code: object.extra_code,
      function_name: object.function_name,
      kwargs: object.kwargs,
      grantee: object.grantee,
      attached_messages: object.attached_messages
    };
  },
  toAmino(message: MsgRun): MsgRunAmino {
    const obj: any = {};
    obj.caller_address = message.caller_address;
    obj.script_address = message.script_address;
    obj.extra_code = message.extra_code;
    obj.function_name = message.function_name;
    obj.kwargs = message.kwargs;
    obj.grantee = message.grantee;
    obj.attached_messages = message.attached_messages;
    return obj;
  },
  fromAminoMsg(object: MsgRunAminoMsg): MsgRun {
    return MsgRun.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRunProtoMsg): MsgRun {
    return MsgRun.decode(message.value);
  },
  toProto(message: MsgRun): Uint8Array {
    return MsgRun.encode(message).finish();
  },
  toProtoMsg(message: MsgRun): MsgRunProtoMsg {
    return {
      typeUrl: "/blit.script.MsgRun",
      value: MsgRun.encode(message).finish()
    };
  }
};
function createBaseMsgRunResponse(): MsgRunResponse {
  return {
    response: ""
  };
}
export const MsgRunResponse = {
  typeUrl: "/blit.script.MsgRunResponse",
  encode(message: MsgRunResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.response !== "") {
      writer.uint32(10).string(message.response);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRunResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRunResponse();
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
  fromJSON(object: any): MsgRunResponse {
    return {
      response: isSet(object.response) ? String(object.response) : ""
    };
  },
  toJSON(message: MsgRunResponse): unknown {
    const obj: any = {};
    message.response !== undefined && (obj.response = message.response);
    return obj;
  },
  fromPartial(object: Partial<MsgRunResponse>): MsgRunResponse {
    const message = createBaseMsgRunResponse();
    message.response = object.response ?? "";
    return message;
  },
  fromAmino(object: MsgRunResponseAmino): MsgRunResponse {
    return {
      response: object.response
    };
  },
  toAmino(message: MsgRunResponse): MsgRunResponseAmino {
    const obj: any = {};
    obj.response = message.response;
    return obj;
  },
  fromAminoMsg(object: MsgRunResponseAminoMsg): MsgRunResponse {
    return MsgRunResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRunResponseProtoMsg): MsgRunResponse {
    return MsgRunResponse.decode(message.value);
  },
  toProto(message: MsgRunResponse): Uint8Array {
    return MsgRunResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRunResponse): MsgRunResponseProtoMsg {
    return {
      typeUrl: "/blit.script.MsgRunResponse",
      value: MsgRunResponse.encode(message).finish()
    };
  }
};