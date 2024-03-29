import { ResponseCommit, ResponseCommitAmino, ResponseCommitSDKType, RequestFinalizeBlock, RequestFinalizeBlockAmino, RequestFinalizeBlockSDKType, ResponseFinalizeBlock, ResponseFinalizeBlockAmino, ResponseFinalizeBlockSDKType } from "../../../tendermint/abci/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "cosmos.store.v1beta1";
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
export declare const StoreKVPair: {
    typeUrl: string;
    encode(message: StoreKVPair, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): StoreKVPair;
    fromJSON(object: any): StoreKVPair;
    toJSON(message: StoreKVPair): unknown;
    fromPartial(object: Partial<StoreKVPair>): StoreKVPair;
    fromAmino(object: StoreKVPairAmino): StoreKVPair;
    toAmino(message: StoreKVPair): StoreKVPairAmino;
    fromAminoMsg(object: StoreKVPairAminoMsg): StoreKVPair;
    toAminoMsg(message: StoreKVPair): StoreKVPairAminoMsg;
    fromProtoMsg(message: StoreKVPairProtoMsg): StoreKVPair;
    toProto(message: StoreKVPair): Uint8Array;
    toProtoMsg(message: StoreKVPair): StoreKVPairProtoMsg;
};
export declare const BlockMetadata: {
    typeUrl: string;
    encode(message: BlockMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BlockMetadata;
    fromJSON(object: any): BlockMetadata;
    toJSON(message: BlockMetadata): unknown;
    fromPartial(object: Partial<BlockMetadata>): BlockMetadata;
    fromAmino(object: BlockMetadataAmino): BlockMetadata;
    toAmino(message: BlockMetadata): BlockMetadataAmino;
    fromAminoMsg(object: BlockMetadataAminoMsg): BlockMetadata;
    toAminoMsg(message: BlockMetadata): BlockMetadataAminoMsg;
    fromProtoMsg(message: BlockMetadataProtoMsg): BlockMetadata;
    toProto(message: BlockMetadata): Uint8Array;
    toProtoMsg(message: BlockMetadata): BlockMetadataProtoMsg;
};
