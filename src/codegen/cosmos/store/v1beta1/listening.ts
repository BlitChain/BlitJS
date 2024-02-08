//@ts-nocheck
import { ResponseCommit, ResponseCommitAmino, ResponseCommitSDKType, RequestFinalizeBlock, RequestFinalizeBlockAmino, RequestFinalizeBlockSDKType, ResponseFinalizeBlock, ResponseFinalizeBlockAmino, ResponseFinalizeBlockSDKType } from "../../../tendermint/abci/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.store.v1beta1";
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 * 
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPair {
  /** the store key for the KVStore this pair originates from */
  store_key: string;
  /** true indicates a delete operation, false indicates a set operation */
  delete: boolean;
  key: Uint8Array;
  value: Uint8Array;
}
export interface StoreKVPairProtoMsg {
  type_url: "/cosmos.store.v1beta1.StoreKVPair";
  value: Uint8Array;
}
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 * 
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPairAmino {
  /** the store key for the KVStore this pair originates from */
  store_key?: string;
  /** true indicates a delete operation, false indicates a set operation */
  delete?: boolean;
  key?: string;
  value?: string;
}
export interface StoreKVPairAminoMsg {
  type: "cosmos-sdk/StoreKVPair";
  value: StoreKVPairAmino;
}
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 * 
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPairSDKType {
  store_key: string;
  delete: boolean;
  key: Uint8Array;
  value: Uint8Array;
}
/**
 * BlockMetadata contains all the abci event data of a block
 * the file streamer dump them into files together with the state changes.
 */
export interface BlockMetadata {
  response_commit?: ResponseCommit;
  request_finalize_block?: RequestFinalizeBlock;
  /** TODO: should we renumber this? */
  response_finalize_block?: ResponseFinalizeBlock;
}
export interface BlockMetadataProtoMsg {
  type_url: "/cosmos.store.v1beta1.BlockMetadata";
  value: Uint8Array;
}
/**
 * BlockMetadata contains all the abci event data of a block
 * the file streamer dump them into files together with the state changes.
 */
export interface BlockMetadataAmino {
  response_commit?: ResponseCommitAmino;
  request_finalize_block?: RequestFinalizeBlockAmino;
  /** TODO: should we renumber this? */
  response_finalize_block?: ResponseFinalizeBlockAmino;
}
export interface BlockMetadataAminoMsg {
  type: "cosmos-sdk/BlockMetadata";
  value: BlockMetadataAmino;
}
/**
 * BlockMetadata contains all the abci event data of a block
 * the file streamer dump them into files together with the state changes.
 */
export interface BlockMetadataSDKType {
  response_commit?: ResponseCommitSDKType;
  request_finalize_block?: RequestFinalizeBlockSDKType;
  response_finalize_block?: ResponseFinalizeBlockSDKType;
}
function createBaseStoreKVPair(): StoreKVPair {
  return {
    store_key: "",
    delete: false,
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
export const StoreKVPair = {
  typeUrl: "/cosmos.store.v1beta1.StoreKVPair",
  aminoType: "cosmos-sdk/StoreKVPair",
  is(o: any): o is StoreKVPair {
    return o && (o.$typeUrl === StoreKVPair.typeUrl || typeof o.store_key === "string" && typeof o.delete === "boolean" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string"));
  },
  isSDK(o: any): o is StoreKVPairSDKType {
    return o && (o.$typeUrl === StoreKVPair.typeUrl || typeof o.store_key === "string" && typeof o.delete === "boolean" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string"));
  },
  isAmino(o: any): o is StoreKVPairAmino {
    return o && (o.$typeUrl === StoreKVPair.typeUrl || typeof o.store_key === "string" && typeof o.delete === "boolean" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string"));
  },
  encode(message: StoreKVPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.store_key !== "") {
      writer.uint32(10).string(message.store_key);
    }
    if (message.delete === true) {
      writer.uint32(16).bool(message.delete);
    }
    if (message.key.length !== 0) {
      writer.uint32(26).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(34).bytes(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StoreKVPair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreKVPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.store_key = reader.string();
          break;
        case 2:
          message.delete = reader.bool();
          break;
        case 3:
          message.key = reader.bytes();
          break;
        case 4:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StoreKVPair {
    return {
      store_key: isSet(object.store_key) ? String(object.store_key) : "",
      delete: isSet(object.delete) ? Boolean(object.delete) : false,
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  toJSON(message: StoreKVPair): unknown {
    const obj: any = {};
    message.store_key !== undefined && (obj.store_key = message.store_key);
    message.delete !== undefined && (obj.delete = message.delete);
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<StoreKVPair>): StoreKVPair {
    const message = createBaseStoreKVPair();
    message.store_key = object.store_key ?? "";
    message.delete = object.delete ?? false;
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object: StoreKVPairAmino): StoreKVPair {
    const message = createBaseStoreKVPair();
    if (object.store_key !== undefined && object.store_key !== null) {
      message.store_key = object.store_key;
    }
    if (object.delete !== undefined && object.delete !== null) {
      message.delete = object.delete;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: StoreKVPair): StoreKVPairAmino {
    const obj: any = {};
    obj.store_key = message.store_key;
    obj.delete = message.delete;
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: StoreKVPairAminoMsg): StoreKVPair {
    return StoreKVPair.fromAmino(object.value);
  },
  toAminoMsg(message: StoreKVPair): StoreKVPairAminoMsg {
    return {
      type: "cosmos-sdk/StoreKVPair",
      value: StoreKVPair.toAmino(message)
    };
  },
  fromProtoMsg(message: StoreKVPairProtoMsg): StoreKVPair {
    return StoreKVPair.decode(message.value);
  },
  toProto(message: StoreKVPair): Uint8Array {
    return StoreKVPair.encode(message).finish();
  },
  toProtoMsg(message: StoreKVPair): StoreKVPairProtoMsg {
    return {
      typeUrl: "/cosmos.store.v1beta1.StoreKVPair",
      value: StoreKVPair.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StoreKVPair.typeUrl, StoreKVPair);
GlobalDecoderRegistry.registerAminoProtoMapping(StoreKVPair.aminoType, StoreKVPair.typeUrl);
function createBaseBlockMetadata(): BlockMetadata {
  return {
    response_commit: undefined,
    request_finalize_block: undefined,
    response_finalize_block: undefined
  };
}
export const BlockMetadata = {
  typeUrl: "/cosmos.store.v1beta1.BlockMetadata",
  aminoType: "cosmos-sdk/BlockMetadata",
  is(o: any): o is BlockMetadata {
    return o && o.$typeUrl === BlockMetadata.typeUrl;
  },
  isSDK(o: any): o is BlockMetadataSDKType {
    return o && o.$typeUrl === BlockMetadata.typeUrl;
  },
  isAmino(o: any): o is BlockMetadataAmino {
    return o && o.$typeUrl === BlockMetadata.typeUrl;
  },
  encode(message: BlockMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.response_commit !== undefined) {
      ResponseCommit.encode(message.response_commit, writer.uint32(50).fork()).ldelim();
    }
    if (message.request_finalize_block !== undefined) {
      RequestFinalizeBlock.encode(message.request_finalize_block, writer.uint32(58).fork()).ldelim();
    }
    if (message.response_finalize_block !== undefined) {
      ResponseFinalizeBlock.encode(message.response_finalize_block, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          message.response_commit = ResponseCommit.decode(reader, reader.uint32());
          break;
        case 7:
          message.request_finalize_block = RequestFinalizeBlock.decode(reader, reader.uint32());
          break;
        case 8:
          message.response_finalize_block = ResponseFinalizeBlock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockMetadata {
    return {
      response_commit: isSet(object.response_commit) ? ResponseCommit.fromJSON(object.response_commit) : undefined,
      request_finalize_block: isSet(object.request_finalize_block) ? RequestFinalizeBlock.fromJSON(object.request_finalize_block) : undefined,
      response_finalize_block: isSet(object.response_finalize_block) ? ResponseFinalizeBlock.fromJSON(object.response_finalize_block) : undefined
    };
  },
  toJSON(message: BlockMetadata): unknown {
    const obj: any = {};
    message.response_commit !== undefined && (obj.response_commit = message.response_commit ? ResponseCommit.toJSON(message.response_commit) : undefined);
    message.request_finalize_block !== undefined && (obj.request_finalize_block = message.request_finalize_block ? RequestFinalizeBlock.toJSON(message.request_finalize_block) : undefined);
    message.response_finalize_block !== undefined && (obj.response_finalize_block = message.response_finalize_block ? ResponseFinalizeBlock.toJSON(message.response_finalize_block) : undefined);
    return obj;
  },
  fromPartial(object: Partial<BlockMetadata>): BlockMetadata {
    const message = createBaseBlockMetadata();
    message.response_commit = object.response_commit !== undefined && object.response_commit !== null ? ResponseCommit.fromPartial(object.response_commit) : undefined;
    message.request_finalize_block = object.request_finalize_block !== undefined && object.request_finalize_block !== null ? RequestFinalizeBlock.fromPartial(object.request_finalize_block) : undefined;
    message.response_finalize_block = object.response_finalize_block !== undefined && object.response_finalize_block !== null ? ResponseFinalizeBlock.fromPartial(object.response_finalize_block) : undefined;
    return message;
  },
  fromAmino(object: BlockMetadataAmino): BlockMetadata {
    const message = createBaseBlockMetadata();
    if (object.response_commit !== undefined && object.response_commit !== null) {
      message.response_commit = ResponseCommit.fromAmino(object.response_commit);
    }
    if (object.request_finalize_block !== undefined && object.request_finalize_block !== null) {
      message.request_finalize_block = RequestFinalizeBlock.fromAmino(object.request_finalize_block);
    }
    if (object.response_finalize_block !== undefined && object.response_finalize_block !== null) {
      message.response_finalize_block = ResponseFinalizeBlock.fromAmino(object.response_finalize_block);
    }
    return message;
  },
  toAmino(message: BlockMetadata): BlockMetadataAmino {
    const obj: any = {};
    obj.response_commit = message.response_commit ? ResponseCommit.toAmino(message.response_commit) : undefined;
    obj.request_finalize_block = message.request_finalize_block ? RequestFinalizeBlock.toAmino(message.request_finalize_block) : undefined;
    obj.response_finalize_block = message.response_finalize_block ? ResponseFinalizeBlock.toAmino(message.response_finalize_block) : undefined;
    return obj;
  },
  fromAminoMsg(object: BlockMetadataAminoMsg): BlockMetadata {
    return BlockMetadata.fromAmino(object.value);
  },
  toAminoMsg(message: BlockMetadata): BlockMetadataAminoMsg {
    return {
      type: "cosmos-sdk/BlockMetadata",
      value: BlockMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message: BlockMetadataProtoMsg): BlockMetadata {
    return BlockMetadata.decode(message.value);
  },
  toProto(message: BlockMetadata): Uint8Array {
    return BlockMetadata.encode(message).finish();
  },
  toProtoMsg(message: BlockMetadata): BlockMetadataProtoMsg {
    return {
      typeUrl: "/cosmos.store.v1beta1.BlockMetadata",
      value: BlockMetadata.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BlockMetadata.typeUrl, BlockMetadata);
GlobalDecoderRegistry.registerAminoProtoMapping(BlockMetadata.aminoType, BlockMetadata.typeUrl);