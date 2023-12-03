//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Storage, StorageAmino, StorageSDKType } from "./storage";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export const protobufPackage = "blit.storage";
/** GenesisState defines the storage module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  storageList: Storage[];
}
export interface GenesisStateProtoMsg {
  type_url: "/blit.storage.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the storage module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of the module. */
  params?: ParamsAmino;
  storageList: StorageAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/blit.storage.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the storage module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  storageList: StorageSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    storageList: []
  };
}
export const GenesisState = {
  typeUrl: "/blit.storage.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.storageList) {
      Storage.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.storageList.push(Storage.decode(reader, reader.uint32()));
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
      storageList: Array.isArray(object?.storageList) ? object.storageList.map((e: any) => Storage.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.storageList) {
      obj.storageList = message.storageList.map(e => e ? Storage.toJSON(e) : undefined);
    } else {
      obj.storageList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.storageList = object.storageList?.map(e => Storage.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      storageList: Array.isArray(object?.storageList) ? object.storageList.map((e: any) => Storage.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.storageList) {
      obj.storageList = message.storageList.map(e => e ? Storage.toSDK(e) : undefined);
    } else {
      obj.storageList = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      storageList: Array.isArray(object?.storageList) ? object.storageList.map((e: any) => Storage.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.storageList) {
      obj.storageList = message.storageList.map(e => e ? Storage.toAmino(e) : undefined);
    } else {
      obj.storageList = [];
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
      typeUrl: "/blit.storage.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};