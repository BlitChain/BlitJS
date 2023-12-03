import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "blit.script";
/** MsgRun runs a script at a specific address */
export interface MsgRun {
    caller_address: string;
    script_address: string;
    extra_code: string;
    function_name: string;
    kwargs: string;
    grantee: string;
    attached_messages: string;
}
export interface MsgRunProtoMsg {
    type_url: "/blit.script.MsgRun";
    value: Uint8Array;
}
/** MsgRun runs a script at a specific address */
export interface MsgRunAmino {
    caller_address: string;
    script_address: string;
    extra_code: string;
    function_name: string;
    kwargs: string;
    grantee: string;
    attached_messages: string;
}
export interface MsgRunAminoMsg {
    type: "/blit.script.MsgRun";
    value: MsgRunAmino;
}
/** MsgRun runs a script at a specific address */
export interface MsgRunSDKType {
    caller_address: string;
    script_address: string;
    extra_code: string;
    function_name: string;
    kwargs: string;
    grantee: string;
    attached_messages: string;
}
export interface MsgRunResponse {
    response: string;
}
export interface MsgRunResponseProtoMsg {
    type_url: "/blit.script.MsgRunResponse";
    value: Uint8Array;
}
export interface MsgRunResponseAmino {
    response: string;
}
export interface MsgRunResponseAminoMsg {
    type: "/blit.script.MsgRunResponse";
    value: MsgRunResponseAmino;
}
export interface MsgRunResponseSDKType {
    response: string;
}
export declare const MsgRun: {
    typeUrl: string;
    encode(message: MsgRun, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRun;
    fromJSON(object: any): MsgRun;
    toJSON(message: MsgRun): unknown;
    fromPartial(object: Partial<MsgRun>): MsgRun;
    fromSDK(object: MsgRunSDKType): MsgRun;
    toSDK(message: MsgRun): MsgRunSDKType;
    fromAmino(object: MsgRunAmino): MsgRun;
    toAmino(message: MsgRun): MsgRunAmino;
    fromAminoMsg(object: MsgRunAminoMsg): MsgRun;
    fromProtoMsg(message: MsgRunProtoMsg): MsgRun;
    toProto(message: MsgRun): Uint8Array;
    toProtoMsg(message: MsgRun): MsgRunProtoMsg;
};
export declare const MsgRunResponse: {
    typeUrl: string;
    encode(message: MsgRunResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRunResponse;
    fromJSON(object: any): MsgRunResponse;
    toJSON(message: MsgRunResponse): unknown;
    fromPartial(object: Partial<MsgRunResponse>): MsgRunResponse;
    fromSDK(object: MsgRunResponseSDKType): MsgRunResponse;
    toSDK(message: MsgRunResponse): MsgRunResponseSDKType;
    fromAmino(object: MsgRunResponseAmino): MsgRunResponse;
    toAmino(message: MsgRunResponse): MsgRunResponseAmino;
    fromAminoMsg(object: MsgRunResponseAminoMsg): MsgRunResponse;
    fromProtoMsg(message: MsgRunResponseProtoMsg): MsgRunResponse;
    toProto(message: MsgRunResponse): Uint8Array;
    toProtoMsg(message: MsgRunResponse): MsgRunResponseProtoMsg;
};
