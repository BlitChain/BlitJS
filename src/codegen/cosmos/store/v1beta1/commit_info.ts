//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp, bytesFromBase64, base64FromBytes } from "../../../helpers";
export const protobufPackage = "cosmos.store.v1beta1";
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */
export interface CommitInfo {
  version: bigint;
  store_infos: StoreInfo[];
  timestamp: Date;
}
export interface CommitInfoProtoMsg {
  type_url: "/cosmos.store.v1beta1.CommitInfo";
  value: Uint8Array;
}
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */
export interface CommitInfoAmino {
  version?: string;
  store_infos?: StoreInfoAmino[];
  timestamp?: string;
}
export interface CommitInfoAminoMsg {
  type: "cosmos-sdk/CommitInfo";
  value: CommitInfoAmino;
}
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */
export interface CommitInfoSDKType {
  version: bigint;
  store_infos: StoreInfoSDKType[];
  timestamp: Date;
}
/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */
export interface StoreInfo {
  name: string;
  commit_id: CommitID;
}
export interface StoreInfoProtoMsg {
  type_url: "/cosmos.store.v1beta1.StoreInfo";
  value: Uint8Array;
}
/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */
export interface StoreInfoAmino {
  name?: string;
  commit_id?: CommitIDAmino;
}
export interface StoreInfoAminoMsg {
  type: "cosmos-sdk/StoreInfo";
  value: StoreInfoAmino;
}
/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */
export interface StoreInfoSDKType {
  name: string;
  commit_id: CommitIDSDKType;
}
/**
 * CommitID defines the commitment information when a specific store is
 * committed.
 */
export interface CommitID {
  version: bigint;
  hash: Uint8Array;
}
export interface CommitIDProtoMsg {
  type_url: "/cosmos.store.v1beta1.CommitID";
  value: Uint8Array;
}
/**
 * CommitID defines the commitment information when a specific store is
 * committed.
 */
export interface CommitIDAmino {
  version?: string;
  hash?: string;
}
export interface CommitIDAminoMsg {
  type: "cosmos-sdk/CommitID";
  value: CommitIDAmino;
}
/**
 * CommitID defines the commitment information when a specific store is
 * committed.
 */
export interface CommitIDSDKType {
  version: bigint;
  hash: Uint8Array;
}
function createBaseCommitInfo(): CommitInfo {
  return {
    version: BigInt(0),
    store_infos: [],
    timestamp: new Date()
  };
}
export const CommitInfo = {
  typeUrl: "/cosmos.store.v1beta1.CommitInfo",
  encode(message: CommitInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.version !== BigInt(0)) {
      writer.uint32(8).int64(message.version);
    }
    for (const v of message.store_infos) {
      StoreInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CommitInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int64();
          break;
        case 2:
          message.store_infos.push(StoreInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommitInfo {
    return {
      version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt(0),
      store_infos: Array.isArray(object?.store_infos) ? object.store_infos.map((e: any) => StoreInfo.fromJSON(e)) : [],
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  toJSON(message: CommitInfo): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = (message.version || BigInt(0)).toString());
    if (message.store_infos) {
      obj.store_infos = message.store_infos.map(e => e ? StoreInfo.toJSON(e) : undefined);
    } else {
      obj.store_infos = [];
    }
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },
  fromPartial(object: Partial<CommitInfo>): CommitInfo {
    const message = createBaseCommitInfo();
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.store_infos = object.store_infos?.map(e => StoreInfo.fromPartial(e)) || [];
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
  fromAmino(object: CommitInfoAmino): CommitInfo {
    const message = createBaseCommitInfo();
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version);
    }
    message.store_infos = object.store_infos?.map(e => StoreInfo.fromAmino(e)) || [];
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    return message;
  },
  toAmino(message: CommitInfo): CommitInfoAmino {
    const obj: any = {};
    obj.version = message.version ? message.version.toString() : undefined;
    if (message.store_infos) {
      obj.store_infos = message.store_infos.map(e => e ? StoreInfo.toAmino(e) : undefined);
    } else {
      obj.store_infos = [];
    }
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    return obj;
  },
  fromAminoMsg(object: CommitInfoAminoMsg): CommitInfo {
    return CommitInfo.fromAmino(object.value);
  },
  toAminoMsg(message: CommitInfo): CommitInfoAminoMsg {
    return {
      type: "cosmos-sdk/CommitInfo",
      value: CommitInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: CommitInfoProtoMsg): CommitInfo {
    return CommitInfo.decode(message.value);
  },
  toProto(message: CommitInfo): Uint8Array {
    return CommitInfo.encode(message).finish();
  },
  toProtoMsg(message: CommitInfo): CommitInfoProtoMsg {
    return {
      typeUrl: "/cosmos.store.v1beta1.CommitInfo",
      value: CommitInfo.encode(message).finish()
    };
  }
};
function createBaseStoreInfo(): StoreInfo {
  return {
    name: "",
    commit_id: CommitID.fromPartial({})
  };
}
export const StoreInfo = {
  typeUrl: "/cosmos.store.v1beta1.StoreInfo",
  encode(message: StoreInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.commit_id !== undefined) {
      CommitID.encode(message.commit_id, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StoreInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.commit_id = CommitID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StoreInfo {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      commit_id: isSet(object.commit_id) ? CommitID.fromJSON(object.commit_id) : undefined
    };
  },
  toJSON(message: StoreInfo): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.commit_id !== undefined && (obj.commit_id = message.commit_id ? CommitID.toJSON(message.commit_id) : undefined);
    return obj;
  },
  fromPartial(object: Partial<StoreInfo>): StoreInfo {
    const message = createBaseStoreInfo();
    message.name = object.name ?? "";
    message.commit_id = object.commit_id !== undefined && object.commit_id !== null ? CommitID.fromPartial(object.commit_id) : undefined;
    return message;
  },
  fromAmino(object: StoreInfoAmino): StoreInfo {
    const message = createBaseStoreInfo();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.commit_id !== undefined && object.commit_id !== null) {
      message.commit_id = CommitID.fromAmino(object.commit_id);
    }
    return message;
  },
  toAmino(message: StoreInfo): StoreInfoAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.commit_id = message.commit_id ? CommitID.toAmino(message.commit_id) : undefined;
    return obj;
  },
  fromAminoMsg(object: StoreInfoAminoMsg): StoreInfo {
    return StoreInfo.fromAmino(object.value);
  },
  toAminoMsg(message: StoreInfo): StoreInfoAminoMsg {
    return {
      type: "cosmos-sdk/StoreInfo",
      value: StoreInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: StoreInfoProtoMsg): StoreInfo {
    return StoreInfo.decode(message.value);
  },
  toProto(message: StoreInfo): Uint8Array {
    return StoreInfo.encode(message).finish();
  },
  toProtoMsg(message: StoreInfo): StoreInfoProtoMsg {
    return {
      typeUrl: "/cosmos.store.v1beta1.StoreInfo",
      value: StoreInfo.encode(message).finish()
    };
  }
};
function createBaseCommitID(): CommitID {
  return {
    version: BigInt(0),
    hash: new Uint8Array()
  };
}
export const CommitID = {
  typeUrl: "/cosmos.store.v1beta1.CommitID",
  encode(message: CommitID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.version !== BigInt(0)) {
      writer.uint32(8).int64(message.version);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CommitID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int64();
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommitID {
    return {
      version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt(0),
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
    };
  },
  toJSON(message: CommitID): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = (message.version || BigInt(0)).toString());
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<CommitID>): CommitID {
    const message = createBaseCommitID();
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: CommitIDAmino): CommitID {
    const message = createBaseCommitID();
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version);
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    return message;
  },
  toAmino(message: CommitID): CommitIDAmino {
    const obj: any = {};
    obj.version = message.version ? message.version.toString() : undefined;
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    return obj;
  },
  fromAminoMsg(object: CommitIDAminoMsg): CommitID {
    return CommitID.fromAmino(object.value);
  },
  toAminoMsg(message: CommitID): CommitIDAminoMsg {
    return {
      type: "cosmos-sdk/CommitID",
      value: CommitID.toAmino(message)
    };
  },
  fromProtoMsg(message: CommitIDProtoMsg): CommitID {
    return CommitID.decode(message.value);
  },
  toProto(message: CommitID): Uint8Array {
    return CommitID.encode(message).finish();
  },
  toProtoMsg(message: CommitID): CommitIDProtoMsg {
    return {
      typeUrl: "/cosmos.store.v1beta1.CommitID",
      value: CommitID.encode(message).finish()
    };
  }
};