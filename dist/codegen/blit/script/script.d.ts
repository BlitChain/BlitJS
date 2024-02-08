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
    address?: string;
    code?: string;
    version?: string;
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
    is(o: any): o is Script;
    isSDK(o: any): o is ScriptSDKType;
    isAmino(o: any): o is ScriptAmino;
    encode(message: Script, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Script;
    fromJSON(object: any): Script;
    toJSON(message: Script): unknown;
    fromPartial(object: Partial<Script>): Script;
    fromAmino(object: ScriptAmino): Script;
    toAmino(message: Script): ScriptAmino;
    fromAminoMsg(object: ScriptAminoMsg): Script;
    fromProtoMsg(message: ScriptProtoMsg): Script;
    toProto(message: Script): Uint8Array;
    toProtoMsg(message: Script): ScriptProtoMsg;
};
