//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Script, ScriptAmino, ScriptSDKType } from "./script";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export const protobufPackage = "blit.script";
/** GenesisState defines the script module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  scriptList: Script[];
}
export interface GenesisStateProtoMsg {
  type_url: "/blit.script.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the script module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of the module. */
  params?: ParamsAmino;
  scriptList: ScriptAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/blit.script.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the script module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  scriptList: ScriptSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    scriptList: []
  };
}
export const GenesisState = {
  typeUrl: "/blit.script.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.scriptList) {
      Script.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.scriptList.push(Script.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      scriptList: Array.isArray(object?.scriptList) ? object.scriptList.map((e: any) => Script.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.scriptList) {
      obj.scriptList = message.scriptList.map(e => e ? Script.toJSON(e) : undefined);
    } else {
      obj.scriptList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.scriptList = object.scriptList?.map(e => Script.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      scriptList: Array.isArray(object?.scriptList) ? object.scriptList.map((e: any) => Script.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.scriptList) {
      obj.scriptList = message.scriptList.map(e => e ? Script.toSDK(e) : undefined);
    } else {
      obj.scriptList = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      scriptList: Array.isArray(object?.scriptList) ? object.scriptList.map((e: any) => Script.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.scriptList) {
      obj.scriptList = message.scriptList.map(e => e ? Script.toAmino(e) : undefined);
    } else {
      obj.scriptList = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/blit.script.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};