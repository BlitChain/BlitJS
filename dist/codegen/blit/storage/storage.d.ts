import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "blit.storage";
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
    address?: string;
    index?: string;
    data?: string;
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
export declare const Storage: {
    typeUrl: string;
    is(o: any): o is Storage;
    isSDK(o: any): o is StorageSDKType;
    isAmino(o: any): o is StorageAmino;
    encode(message: Storage, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Storage;
    fromJSON(object: any): Storage;
    toJSON(message: Storage): unknown;
    fromPartial(object: Partial<Storage>): Storage;
    fromAmino(object: StorageAmino): Storage;
    toAmino(message: Storage): StorageAmino;
    fromAminoMsg(object: StorageAminoMsg): Storage;
    fromProtoMsg(message: StorageProtoMsg): Storage;
    toProto(message: Storage): Uint8Array;
    toProtoMsg(message: Storage): StorageProtoMsg;
};
