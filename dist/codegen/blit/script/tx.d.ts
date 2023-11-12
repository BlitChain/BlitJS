import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "blit.script";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /** NOTE: All parameters must be supplied. */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    type_url: "/blit.script.MsgUpdateParams";
    value: Uint8Array;
}
export interface MsgUpdateParamsProtoMsg {
    type_url: "/blit.script.MsgUpdateParams";
    value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /** NOTE: All parameters must be supplied. */
    params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "blit/x/script/MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    type_url: "/blit.script.MsgUpdateParamsResponse";
    value: Uint8Array;
}
export interface MsgUpdateParamsResponseProtoMsg {
    type_url: "/blit.script.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/blit.script.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {
}
export interface MsgCreateScript {
    creator: string;
    code: string;
    /** The list of MsgUrls the create will be granted access to via authz initially */
    msg_type_permissions: string[];
    grantee: string;
}
export interface MsgCreateScriptProtoMsg {
    type_url: "/blit.script.MsgCreateScript";
    value: Uint8Array;
}
export interface MsgCreateScriptProtoMsg {
    type_url: "/blit.script.MsgCreateScript";
    value: Uint8Array;
}
export interface MsgCreateScriptAmino {
    creator: string;
    code: string;
    /** The list of MsgUrls the create will be granted access to via authz initially */
    msg_type_permissions: string[];
    grantee: string;
}
export interface MsgCreateScriptAminoMsg {
    type: "/blit.script.MsgCreateScript";
    value: MsgCreateScriptAmino;
}
export interface MsgCreateScriptSDKType {
    creator: string;
    code: string;
    msg_type_permissions: string[];
    grantee: string;
}
export interface MsgCreateScriptResponse {
    address: string;
}
export interface MsgCreateScriptResponseProtoMsg {
    type_url: "/blit.script.MsgCreateScriptResponse";
    value: Uint8Array;
}
export interface MsgCreateScriptResponseProtoMsg {
    type_url: "/blit.script.MsgCreateScriptResponse";
    value: Uint8Array;
}
export interface MsgCreateScriptResponseAmino {
    address: string;
}
export interface MsgCreateScriptResponseAminoMsg {
    type: "/blit.script.MsgCreateScriptResponse";
    value: MsgCreateScriptResponseAmino;
}
export interface MsgCreateScriptResponseSDKType {
    address: string;
}
export interface MsgUpdateScript {
    address: string;
    code: string;
    grantee: string;
}
export interface MsgUpdateScriptProtoMsg {
    type_url: "/blit.script.MsgUpdateScript";
    value: Uint8Array;
}
export interface MsgUpdateScriptProtoMsg {
    type_url: "/blit.script.MsgUpdateScript";
    value: Uint8Array;
}
export interface MsgUpdateScriptAmino {
    address: string;
    code: string;
    grantee: string;
}
export interface MsgUpdateScriptAminoMsg {
    type: "/blit.script.MsgUpdateScript";
    value: MsgUpdateScriptAmino;
}
export interface MsgUpdateScriptSDKType {
    address: string;
    code: string;
    grantee: string;
}
export interface MsgUpdateScriptResponse {
    version: bigint;
}
export interface MsgUpdateScriptResponseProtoMsg {
    type_url: "/blit.script.MsgUpdateScriptResponse";
    value: Uint8Array;
}
export interface MsgUpdateScriptResponseProtoMsg {
    type_url: "/blit.script.MsgUpdateScriptResponse";
    value: Uint8Array;
}
export interface MsgUpdateScriptResponseAmino {
    version: string;
}
export interface MsgUpdateScriptResponseAminoMsg {
    type: "/blit.script.MsgUpdateScriptResponse";
    value: MsgUpdateScriptResponseAmino;
}
export interface MsgUpdateScriptResponseSDKType {
    version: bigint;
}
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromSDK(object: MsgUpdateParamsSDKType): MsgUpdateParams;
    toSDK(message: MsgUpdateParams): MsgUpdateParamsSDKType;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromSDK(_: MsgUpdateParamsResponseSDKType): MsgUpdateParamsResponse;
    toSDK(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseSDKType;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
export declare const MsgCreateScript: {
    typeUrl: string;
    encode(message: MsgCreateScript, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateScript;
    fromJSON(object: any): MsgCreateScript;
    toJSON(message: MsgCreateScript): unknown;
    fromPartial(object: Partial<MsgCreateScript>): MsgCreateScript;
    fromSDK(object: MsgCreateScriptSDKType): MsgCreateScript;
    toSDK(message: MsgCreateScript): MsgCreateScriptSDKType;
    fromAmino(object: MsgCreateScriptAmino): MsgCreateScript;
    toAmino(message: MsgCreateScript): MsgCreateScriptAmino;
    fromAminoMsg(object: MsgCreateScriptAminoMsg): MsgCreateScript;
    fromProtoMsg(message: MsgCreateScriptProtoMsg): MsgCreateScript;
    toProto(message: MsgCreateScript): Uint8Array;
    toProtoMsg(message: MsgCreateScript): MsgCreateScriptProtoMsg;
};
export declare const MsgCreateScriptResponse: {
    typeUrl: string;
    encode(message: MsgCreateScriptResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateScriptResponse;
    fromJSON(object: any): MsgCreateScriptResponse;
    toJSON(message: MsgCreateScriptResponse): unknown;
    fromPartial(object: Partial<MsgCreateScriptResponse>): MsgCreateScriptResponse;
    fromSDK(object: MsgCreateScriptResponseSDKType): MsgCreateScriptResponse;
    toSDK(message: MsgCreateScriptResponse): MsgCreateScriptResponseSDKType;
    fromAmino(object: MsgCreateScriptResponseAmino): MsgCreateScriptResponse;
    toAmino(message: MsgCreateScriptResponse): MsgCreateScriptResponseAmino;
    fromAminoMsg(object: MsgCreateScriptResponseAminoMsg): MsgCreateScriptResponse;
    fromProtoMsg(message: MsgCreateScriptResponseProtoMsg): MsgCreateScriptResponse;
    toProto(message: MsgCreateScriptResponse): Uint8Array;
    toProtoMsg(message: MsgCreateScriptResponse): MsgCreateScriptResponseProtoMsg;
};
export declare const MsgUpdateScript: {
    typeUrl: string;
    encode(message: MsgUpdateScript, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateScript;
    fromJSON(object: any): MsgUpdateScript;
    toJSON(message: MsgUpdateScript): unknown;
    fromPartial(object: Partial<MsgUpdateScript>): MsgUpdateScript;
    fromSDK(object: MsgUpdateScriptSDKType): MsgUpdateScript;
    toSDK(message: MsgUpdateScript): MsgUpdateScriptSDKType;
    fromAmino(object: MsgUpdateScriptAmino): MsgUpdateScript;
    toAmino(message: MsgUpdateScript): MsgUpdateScriptAmino;
    fromAminoMsg(object: MsgUpdateScriptAminoMsg): MsgUpdateScript;
    fromProtoMsg(message: MsgUpdateScriptProtoMsg): MsgUpdateScript;
    toProto(message: MsgUpdateScript): Uint8Array;
    toProtoMsg(message: MsgUpdateScript): MsgUpdateScriptProtoMsg;
};
export declare const MsgUpdateScriptResponse: {
    typeUrl: string;
    encode(message: MsgUpdateScriptResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateScriptResponse;
    fromJSON(object: any): MsgUpdateScriptResponse;
    toJSON(message: MsgUpdateScriptResponse): unknown;
    fromPartial(object: Partial<MsgUpdateScriptResponse>): MsgUpdateScriptResponse;
    fromSDK(object: MsgUpdateScriptResponseSDKType): MsgUpdateScriptResponse;
    toSDK(message: MsgUpdateScriptResponse): MsgUpdateScriptResponseSDKType;
    fromAmino(object: MsgUpdateScriptResponseAmino): MsgUpdateScriptResponse;
    toAmino(message: MsgUpdateScriptResponse): MsgUpdateScriptResponseAmino;
    fromAminoMsg(object: MsgUpdateScriptResponseAminoMsg): MsgUpdateScriptResponse;
    fromProtoMsg(message: MsgUpdateScriptResponseProtoMsg): MsgUpdateScriptResponse;
    toProto(message: MsgUpdateScriptResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateScriptResponse): MsgUpdateScriptResponseProtoMsg;
};
