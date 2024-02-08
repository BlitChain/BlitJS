import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "blit.storage";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /** NOTE: All parameters must be supplied. */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    type_url: "/blit.storage.MsgUpdateParams";
    value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority?: string;
    /** NOTE: All parameters must be supplied. */
    params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "blit/x/storage/MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    type_url: "/blit.storage.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/blit.storage.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {
}
export interface MsgCreateStorage {
    address: string;
    index: string;
    data: string;
    grantee: string;
    force: boolean;
}
export interface MsgCreateStorageProtoMsg {
    type_url: "/blit.storage.MsgCreateStorage";
    value: Uint8Array;
}
export interface MsgCreateStorageAmino {
    address?: string;
    index?: string;
    data?: string;
    grantee?: string;
    force?: boolean;
}
export interface MsgCreateStorageAminoMsg {
    type: "/blit.storage.MsgCreateStorage";
    value: MsgCreateStorageAmino;
}
export interface MsgCreateStorageSDKType {
    address: string;
    index: string;
    data: string;
    grantee: string;
    force: boolean;
}
export interface MsgCreateStorageResponse {
}
export interface MsgCreateStorageResponseProtoMsg {
    type_url: "/blit.storage.MsgCreateStorageResponse";
    value: Uint8Array;
}
export interface MsgCreateStorageResponseAmino {
}
export interface MsgCreateStorageResponseAminoMsg {
    type: "/blit.storage.MsgCreateStorageResponse";
    value: MsgCreateStorageResponseAmino;
}
export interface MsgCreateStorageResponseSDKType {
}
export interface MsgUpdateStorage {
    address: string;
    index: string;
    data: string;
    grantee: string;
    force: boolean;
}
export interface MsgUpdateStorageProtoMsg {
    type_url: "/blit.storage.MsgUpdateStorage";
    value: Uint8Array;
}
export interface MsgUpdateStorageAmino {
    address?: string;
    index?: string;
    data?: string;
    grantee?: string;
    force?: boolean;
}
export interface MsgUpdateStorageAminoMsg {
    type: "/blit.storage.MsgUpdateStorage";
    value: MsgUpdateStorageAmino;
}
export interface MsgUpdateStorageSDKType {
    address: string;
    index: string;
    data: string;
    grantee: string;
    force: boolean;
}
export interface MsgUpdateStorageResponse {
}
export interface MsgUpdateStorageResponseProtoMsg {
    type_url: "/blit.storage.MsgUpdateStorageResponse";
    value: Uint8Array;
}
export interface MsgUpdateStorageResponseAmino {
}
export interface MsgUpdateStorageResponseAminoMsg {
    type: "/blit.storage.MsgUpdateStorageResponse";
    value: MsgUpdateStorageResponseAmino;
}
export interface MsgUpdateStorageResponseSDKType {
}
export interface MsgDeleteStorage {
    address: string;
    index: string;
    grantee: string;
    force: boolean;
}
export interface MsgDeleteStorageProtoMsg {
    type_url: "/blit.storage.MsgDeleteStorage";
    value: Uint8Array;
}
export interface MsgDeleteStorageAmino {
    address?: string;
    index?: string;
    grantee?: string;
    force?: boolean;
}
export interface MsgDeleteStorageAminoMsg {
    type: "/blit.storage.MsgDeleteStorage";
    value: MsgDeleteStorageAmino;
}
export interface MsgDeleteStorageSDKType {
    address: string;
    index: string;
    grantee: string;
    force: boolean;
}
export interface MsgDeleteStorageResponse {
}
export interface MsgDeleteStorageResponseProtoMsg {
    type_url: "/blit.storage.MsgDeleteStorageResponse";
    value: Uint8Array;
}
export interface MsgDeleteStorageResponseAmino {
}
export interface MsgDeleteStorageResponseAminoMsg {
    type: "/blit.storage.MsgDeleteStorageResponse";
    value: MsgDeleteStorageResponseAmino;
}
export interface MsgDeleteStorageResponseSDKType {
}
export declare const MsgUpdateParams: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateParams;
    isSDK(o: any): o is MsgUpdateParamsSDKType;
    isAmino(o: any): o is MsgUpdateParamsAmino;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
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
    is(o: any): o is MsgUpdateParamsResponse;
    isSDK(o: any): o is MsgUpdateParamsResponseSDKType;
    isAmino(o: any): o is MsgUpdateParamsResponseAmino;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
export declare const MsgCreateStorage: {
    typeUrl: string;
    is(o: any): o is MsgCreateStorage;
    isSDK(o: any): o is MsgCreateStorageSDKType;
    isAmino(o: any): o is MsgCreateStorageAmino;
    encode(message: MsgCreateStorage, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateStorage;
    fromJSON(object: any): MsgCreateStorage;
    toJSON(message: MsgCreateStorage): unknown;
    fromPartial(object: Partial<MsgCreateStorage>): MsgCreateStorage;
    fromAmino(object: MsgCreateStorageAmino): MsgCreateStorage;
    toAmino(message: MsgCreateStorage): MsgCreateStorageAmino;
    fromAminoMsg(object: MsgCreateStorageAminoMsg): MsgCreateStorage;
    fromProtoMsg(message: MsgCreateStorageProtoMsg): MsgCreateStorage;
    toProto(message: MsgCreateStorage): Uint8Array;
    toProtoMsg(message: MsgCreateStorage): MsgCreateStorageProtoMsg;
};
export declare const MsgCreateStorageResponse: {
    typeUrl: string;
    is(o: any): o is MsgCreateStorageResponse;
    isSDK(o: any): o is MsgCreateStorageResponseSDKType;
    isAmino(o: any): o is MsgCreateStorageResponseAmino;
    encode(_: MsgCreateStorageResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateStorageResponse;
    fromJSON(_: any): MsgCreateStorageResponse;
    toJSON(_: MsgCreateStorageResponse): unknown;
    fromPartial(_: Partial<MsgCreateStorageResponse>): MsgCreateStorageResponse;
    fromAmino(_: MsgCreateStorageResponseAmino): MsgCreateStorageResponse;
    toAmino(_: MsgCreateStorageResponse): MsgCreateStorageResponseAmino;
    fromAminoMsg(object: MsgCreateStorageResponseAminoMsg): MsgCreateStorageResponse;
    fromProtoMsg(message: MsgCreateStorageResponseProtoMsg): MsgCreateStorageResponse;
    toProto(message: MsgCreateStorageResponse): Uint8Array;
    toProtoMsg(message: MsgCreateStorageResponse): MsgCreateStorageResponseProtoMsg;
};
export declare const MsgUpdateStorage: {
    typeUrl: string;
    is(o: any): o is MsgUpdateStorage;
    isSDK(o: any): o is MsgUpdateStorageSDKType;
    isAmino(o: any): o is MsgUpdateStorageAmino;
    encode(message: MsgUpdateStorage, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateStorage;
    fromJSON(object: any): MsgUpdateStorage;
    toJSON(message: MsgUpdateStorage): unknown;
    fromPartial(object: Partial<MsgUpdateStorage>): MsgUpdateStorage;
    fromAmino(object: MsgUpdateStorageAmino): MsgUpdateStorage;
    toAmino(message: MsgUpdateStorage): MsgUpdateStorageAmino;
    fromAminoMsg(object: MsgUpdateStorageAminoMsg): MsgUpdateStorage;
    fromProtoMsg(message: MsgUpdateStorageProtoMsg): MsgUpdateStorage;
    toProto(message: MsgUpdateStorage): Uint8Array;
    toProtoMsg(message: MsgUpdateStorage): MsgUpdateStorageProtoMsg;
};
export declare const MsgUpdateStorageResponse: {
    typeUrl: string;
    is(o: any): o is MsgUpdateStorageResponse;
    isSDK(o: any): o is MsgUpdateStorageResponseSDKType;
    isAmino(o: any): o is MsgUpdateStorageResponseAmino;
    encode(_: MsgUpdateStorageResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateStorageResponse;
    fromJSON(_: any): MsgUpdateStorageResponse;
    toJSON(_: MsgUpdateStorageResponse): unknown;
    fromPartial(_: Partial<MsgUpdateStorageResponse>): MsgUpdateStorageResponse;
    fromAmino(_: MsgUpdateStorageResponseAmino): MsgUpdateStorageResponse;
    toAmino(_: MsgUpdateStorageResponse): MsgUpdateStorageResponseAmino;
    fromAminoMsg(object: MsgUpdateStorageResponseAminoMsg): MsgUpdateStorageResponse;
    fromProtoMsg(message: MsgUpdateStorageResponseProtoMsg): MsgUpdateStorageResponse;
    toProto(message: MsgUpdateStorageResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateStorageResponse): MsgUpdateStorageResponseProtoMsg;
};
export declare const MsgDeleteStorage: {
    typeUrl: string;
    is(o: any): o is MsgDeleteStorage;
    isSDK(o: any): o is MsgDeleteStorageSDKType;
    isAmino(o: any): o is MsgDeleteStorageAmino;
    encode(message: MsgDeleteStorage, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteStorage;
    fromJSON(object: any): MsgDeleteStorage;
    toJSON(message: MsgDeleteStorage): unknown;
    fromPartial(object: Partial<MsgDeleteStorage>): MsgDeleteStorage;
    fromAmino(object: MsgDeleteStorageAmino): MsgDeleteStorage;
    toAmino(message: MsgDeleteStorage): MsgDeleteStorageAmino;
    fromAminoMsg(object: MsgDeleteStorageAminoMsg): MsgDeleteStorage;
    fromProtoMsg(message: MsgDeleteStorageProtoMsg): MsgDeleteStorage;
    toProto(message: MsgDeleteStorage): Uint8Array;
    toProtoMsg(message: MsgDeleteStorage): MsgDeleteStorageProtoMsg;
};
export declare const MsgDeleteStorageResponse: {
    typeUrl: string;
    is(o: any): o is MsgDeleteStorageResponse;
    isSDK(o: any): o is MsgDeleteStorageResponseSDKType;
    isAmino(o: any): o is MsgDeleteStorageResponseAmino;
    encode(_: MsgDeleteStorageResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteStorageResponse;
    fromJSON(_: any): MsgDeleteStorageResponse;
    toJSON(_: MsgDeleteStorageResponse): unknown;
    fromPartial(_: Partial<MsgDeleteStorageResponse>): MsgDeleteStorageResponse;
    fromAmino(_: MsgDeleteStorageResponseAmino): MsgDeleteStorageResponse;
    toAmino(_: MsgDeleteStorageResponse): MsgDeleteStorageResponseAmino;
    fromAminoMsg(object: MsgDeleteStorageResponseAminoMsg): MsgDeleteStorageResponse;
    fromProtoMsg(message: MsgDeleteStorageResponseProtoMsg): MsgDeleteStorageResponse;
    toProto(message: MsgDeleteStorageResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteStorageResponse): MsgDeleteStorageResponseProtoMsg;
};
