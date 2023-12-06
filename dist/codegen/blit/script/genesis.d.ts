import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Script, ScriptAmino, ScriptSDKType } from "./script";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "blit.script";
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
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
