import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Storage, StorageAmino, StorageSDKType } from "./storage";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "blit.storage";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    type_url: "/blit.storage.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestProtoMsg {
    type_url: "/blit.storage.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/blit.storage.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    type_url: "/blit.storage.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseProtoMsg {
    type_url: "/blit.storage.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/blit.storage.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryGetStorageRequest {
    address: string;
    index: string;
}
export interface QueryGetStorageRequestProtoMsg {
    type_url: "/blit.storage.QueryGetStorageRequest";
    value: Uint8Array;
}
export interface QueryGetStorageRequestProtoMsg {
    type_url: "/blit.storage.QueryGetStorageRequest";
    value: Uint8Array;
}
export interface QueryGetStorageRequestAmino {
    address: string;
    index: string;
}
export interface QueryGetStorageRequestAminoMsg {
    type: "/blit.storage.QueryGetStorageRequest";
    value: QueryGetStorageRequestAmino;
}
export interface QueryGetStorageRequestSDKType {
    address: string;
    index: string;
}
export interface QueryGetStorageResponse {
    storage: Storage;
}
export interface QueryGetStorageResponseProtoMsg {
    type_url: "/blit.storage.QueryGetStorageResponse";
    value: Uint8Array;
}
export interface QueryGetStorageResponseProtoMsg {
    type_url: "/blit.storage.QueryGetStorageResponse";
    value: Uint8Array;
}
export interface QueryGetStorageResponseAmino {
    storage?: StorageAmino;
}
export interface QueryGetStorageResponseAminoMsg {
    type: "/blit.storage.QueryGetStorageResponse";
    value: QueryGetStorageResponseAmino;
}
export interface QueryGetStorageResponseSDKType {
    storage: StorageSDKType;
}
export interface QueryAllStorageRequest {
    filter_address: string;
    filter_index_prefix: string;
    pagination?: PageRequest;
}
export interface QueryAllStorageRequestProtoMsg {
    type_url: "/blit.storage.QueryAllStorageRequest";
    value: Uint8Array;
}
export interface QueryAllStorageRequestProtoMsg {
    type_url: "/blit.storage.QueryAllStorageRequest";
    value: Uint8Array;
}
export interface QueryAllStorageRequestAmino {
    filter_address: string;
    filter_index_prefix: string;
    pagination?: PageRequestAmino;
}
export interface QueryAllStorageRequestAminoMsg {
    type: "/blit.storage.QueryAllStorageRequest";
    value: QueryAllStorageRequestAmino;
}
export interface QueryAllStorageRequestSDKType {
    filter_address: string;
    filter_index_prefix: string;
    pagination?: PageRequestSDKType;
}
export interface QueryAllStorageResponse {
    storage: Storage[];
    pagination?: PageResponse;
}
export interface QueryAllStorageResponseProtoMsg {
    type_url: "/blit.storage.QueryAllStorageResponse";
    value: Uint8Array;
}
export interface QueryAllStorageResponseProtoMsg {
    type_url: "/blit.storage.QueryAllStorageResponse";
    value: Uint8Array;
}
export interface QueryAllStorageResponseAmino {
    storage: StorageAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllStorageResponseAminoMsg {
    type: "/blit.storage.QueryAllStorageResponse";
    value: QueryAllStorageResponseAmino;
}
export interface QueryAllStorageResponseSDKType {
    storage: StorageSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest;
    toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse;
    toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryGetStorageRequest: {
    typeUrl: string;
    encode(message: QueryGetStorageRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetStorageRequest;
    fromJSON(object: any): QueryGetStorageRequest;
    toJSON(message: QueryGetStorageRequest): unknown;
    fromPartial(object: Partial<QueryGetStorageRequest>): QueryGetStorageRequest;
    fromSDK(object: QueryGetStorageRequestSDKType): QueryGetStorageRequest;
    toSDK(message: QueryGetStorageRequest): QueryGetStorageRequestSDKType;
    fromAmino(object: QueryGetStorageRequestAmino): QueryGetStorageRequest;
    toAmino(message: QueryGetStorageRequest): QueryGetStorageRequestAmino;
    fromAminoMsg(object: QueryGetStorageRequestAminoMsg): QueryGetStorageRequest;
    fromProtoMsg(message: QueryGetStorageRequestProtoMsg): QueryGetStorageRequest;
    toProto(message: QueryGetStorageRequest): Uint8Array;
    toProtoMsg(message: QueryGetStorageRequest): QueryGetStorageRequestProtoMsg;
};
export declare const QueryGetStorageResponse: {
    typeUrl: string;
    encode(message: QueryGetStorageResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetStorageResponse;
    fromJSON(object: any): QueryGetStorageResponse;
    toJSON(message: QueryGetStorageResponse): unknown;
    fromPartial(object: Partial<QueryGetStorageResponse>): QueryGetStorageResponse;
    fromSDK(object: QueryGetStorageResponseSDKType): QueryGetStorageResponse;
    toSDK(message: QueryGetStorageResponse): QueryGetStorageResponseSDKType;
    fromAmino(object: QueryGetStorageResponseAmino): QueryGetStorageResponse;
    toAmino(message: QueryGetStorageResponse): QueryGetStorageResponseAmino;
    fromAminoMsg(object: QueryGetStorageResponseAminoMsg): QueryGetStorageResponse;
    fromProtoMsg(message: QueryGetStorageResponseProtoMsg): QueryGetStorageResponse;
    toProto(message: QueryGetStorageResponse): Uint8Array;
    toProtoMsg(message: QueryGetStorageResponse): QueryGetStorageResponseProtoMsg;
};
export declare const QueryAllStorageRequest: {
    typeUrl: string;
    encode(message: QueryAllStorageRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStorageRequest;
    fromJSON(object: any): QueryAllStorageRequest;
    toJSON(message: QueryAllStorageRequest): unknown;
    fromPartial(object: Partial<QueryAllStorageRequest>): QueryAllStorageRequest;
    fromSDK(object: QueryAllStorageRequestSDKType): QueryAllStorageRequest;
    toSDK(message: QueryAllStorageRequest): QueryAllStorageRequestSDKType;
    fromAmino(object: QueryAllStorageRequestAmino): QueryAllStorageRequest;
    toAmino(message: QueryAllStorageRequest): QueryAllStorageRequestAmino;
    fromAminoMsg(object: QueryAllStorageRequestAminoMsg): QueryAllStorageRequest;
    fromProtoMsg(message: QueryAllStorageRequestProtoMsg): QueryAllStorageRequest;
    toProto(message: QueryAllStorageRequest): Uint8Array;
    toProtoMsg(message: QueryAllStorageRequest): QueryAllStorageRequestProtoMsg;
};
export declare const QueryAllStorageResponse: {
    typeUrl: string;
    encode(message: QueryAllStorageResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStorageResponse;
    fromJSON(object: any): QueryAllStorageResponse;
    toJSON(message: QueryAllStorageResponse): unknown;
    fromPartial(object: Partial<QueryAllStorageResponse>): QueryAllStorageResponse;
    fromSDK(object: QueryAllStorageResponseSDKType): QueryAllStorageResponse;
    toSDK(message: QueryAllStorageResponse): QueryAllStorageResponseSDKType;
    fromAmino(object: QueryAllStorageResponseAmino): QueryAllStorageResponse;
    toAmino(message: QueryAllStorageResponse): QueryAllStorageResponseAmino;
    fromAminoMsg(object: QueryAllStorageResponseAminoMsg): QueryAllStorageResponse;
    fromProtoMsg(message: QueryAllStorageResponseProtoMsg): QueryAllStorageResponse;
    toProto(message: QueryAllStorageResponse): Uint8Array;
    toProtoMsg(message: QueryAllStorageResponse): QueryAllStorageResponseProtoMsg;
};
