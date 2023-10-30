import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
}
export interface ParamsProtoMsg {
    type_url: "/blit.script.Params";
    value: Uint8Array;
}
export interface ParamsProtoMsg {
    type_url: "/blit.script.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
}
export interface ParamsAminoMsg {
    type: "blit/x/script/Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
}
export declare const Params: {
    typeUrl: string;
    encode(_: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(_: any): Params;
    toJSON(_: Params): unknown;
    fromPartial(_: Partial<Params>): Params;
    fromSDK(_: ParamsSDKType): Params;
    toSDK(_: Params): ParamsSDKType;
    fromAmino(_: ParamsAmino): Params;
    toAmino(_: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
