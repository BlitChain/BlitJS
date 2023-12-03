import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Storage, StorageAmino, StorageSDKType } from "./storage";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "blit.storage";
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
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromSDK(object: GenesisStateSDKType): GenesisState;
    toSDK(message: GenesisState): GenesisStateSDKType;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
