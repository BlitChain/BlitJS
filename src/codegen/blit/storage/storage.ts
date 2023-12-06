//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export const protobufPackage = "blit.storage";
export interface Storage {
  address: string;
  index: string;
  data: string;
}
export interface StorageProtoMsg {
  type_url: "/blit.storage.Storage";
  value: Uint8Array;
}
export interface StorageAmino {
  address: string;
  index: string;
  data: string;
}
export interface StorageAminoMsg {
  type: "/blit.storage.Storage";
  value: StorageAmino;
}
export interface StorageSDKType {
  address: string;
  index: string;
  data: string;
}
function createBaseStorage(): Storage {
  return {
    address: "",
    index: "",
    data: ""
  };
}
export const Storage = {
  typeUrl: "/blit.storage.Storage",
  encode(message: Storage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.data !== "") {
      writer.uint32(26).string(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Storage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorage();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Storage {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      index: isSet(object.index) ? String(object.index) : "",
      data: isSet(object.data) ? String(object.data) : ""
    };
  },
  toJSON(message: Storage): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.index !== undefined && (obj.index = message.index);
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },
  fromPartial(object: Partial<Storage>): Storage {
    const message = createBaseStorage();
    message.address = object.address ?? "";
    message.index = object.index ?? "";
    message.data = object.data ?? "";
    return message;
  },
  fromAmino(object: StorageAmino): Storage {
    return {
      address: object.address,
      index: object.index,
      data: object.data
    };
  },
  toAmino(message: Storage): StorageAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.index = message.index;
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg(object: StorageAminoMsg): Storage {
    return Storage.fromAmino(object.value);
  },
  fromProtoMsg(message: StorageProtoMsg): Storage {
    return Storage.decode(message.value);
  },
  toProto(message: Storage): Uint8Array {
    return Storage.encode(message).finish();
  },
  toProtoMsg(message: Storage): StorageProtoMsg {
    return {
      typeUrl: "/blit.storage.Storage",
      value: Storage.encode(message).finish()
    };
  }
};