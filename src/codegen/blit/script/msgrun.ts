//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export const protobufPackage = "blit.script";
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
  fromSDK(object: MsgRunSDKType): MsgRun {
    return {
      caller_address: object?.caller_address,
      script_address: object?.script_address,
      extra_code: object?.extra_code,
      function_name: object?.function_name,
      kwargs: object?.kwargs,
      grantee: object?.grantee,
      attached_messages: object?.attached_messages
    };
  },
  toSDK(message: MsgRun): MsgRunSDKType {
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
  fromSDK(object: MsgRunResponseSDKType): MsgRunResponse {
    return {
      response: object?.response
    };
  },
  toSDK(message: MsgRunResponse): MsgRunResponseSDKType {
    const obj: any = {};
    obj.response = message.response;
    return obj;
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