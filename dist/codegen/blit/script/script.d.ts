import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "blit.script";
export interface Script {
    address: string;
    code: string;
    version: bigint;
}
export interface ScriptProtoMsg {
    type_url: "/blit.script.Script";
    value: Uint8Array;
}
export interface ScriptAmino {
    address: string;
    code: string;
    version: string;
}
export interface ScriptAminoMsg {
    type: "/blit.script.Script";
    value: ScriptAmino;
}
export interface ScriptSDKType {
    address: string;
    code: string;
    version: bigint;
}
export declare const Script: {
    typeUrl: string;
    encode(message: Script, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Script;
    fromJSON(object: any): Script;
    toJSON(message: Script): unknown;
    fromPartial(object: Partial<Script>): Script;
    fromSDK(object: ScriptSDKType): Script;
    toSDK(message: Script): ScriptSDKType;
    fromAmino(object: ScriptAmino): Script;
    toAmino(message: Script): ScriptAmino;
    fromAminoMsg(object: ScriptAminoMsg): Script;
    fromProtoMsg(message: ScriptProtoMsg): Script;
    toProto(message: Script): Uint8Array;
    toProtoMsg(message: Script): ScriptProtoMsg;
};
