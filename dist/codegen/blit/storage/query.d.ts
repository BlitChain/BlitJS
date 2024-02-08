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
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/blit.storage.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryStorageDetailRequest {
    address: string;
    index: string;
}
export interface QueryStorageDetailRequestProtoMsg {
    type_url: "/blit.storage.QueryStorageDetailRequest";
    value: Uint8Array;
}
export interface QueryStorageDetailRequestAmino {
    address?: string;
    index?: string;
}
export interface QueryStorageDetailRequestAminoMsg {
    type: "/blit.storage.QueryStorageDetailRequest";
    value: QueryStorageDetailRequestAmino;
}
export interface QueryStorageDetailRequestSDKType {
    address: string;
    index: string;
}
export interface QueryStorageDetailResponse {
    storage: Storage;
}
export interface QueryStorageDetailResponseProtoMsg {
    type_url: "/blit.storage.QueryStorageDetailResponse";
    value: Uint8Array;
}
export interface QueryStorageDetailResponseAmino {
    storage?: StorageAmino;
}
export interface QueryStorageDetailResponseAminoMsg {
    type: "/blit.storage.QueryStorageDetailResponse";
    value: QueryStorageDetailResponseAmino;
}
export interface QueryStorageDetailResponseSDKType {
    storage: StorageSDKType;
}
export interface QueryFilterStorageRequest {
    filter_address: string;
    filter_index_prefix: string;
    pagination?: PageRequest;
}
export interface QueryFilterStorageRequestProtoMsg {
    type_url: "/blit.storage.QueryFilterStorageRequest";
    value: Uint8Array;
}
export interface QueryFilterStorageRequestAmino {
    filter_address?: string;
    filter_index_prefix?: string;
    pagination?: PageRequestAmino;
}
export interface QueryFilterStorageRequestAminoMsg {
    type: "/blit.storage.QueryFilterStorageRequest";
    value: QueryFilterStorageRequestAmino;
}
export interface QueryFilterStorageRequestSDKType {
    filter_address: string;
    filter_index_prefix: string;
    pagination?: PageRequestSDKType;
}
export interface QueryFilterStorageResponse {
    storage: Storage[];
    pagination?: PageResponse;
}
export interface QueryFilterStorageResponseProtoMsg {
    type_url: "/blit.storage.QueryFilterStorageResponse";
    value: Uint8Array;
}
export interface QueryFilterStorageResponseAmino {
    storage?: StorageAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryFilterStorageResponseAminoMsg {
    type: "/blit.storage.QueryFilterStorageResponse";
    value: QueryFilterStorageResponseAmino;
}
export interface QueryFilterStorageResponseSDKType {
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
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryStorageDetailRequest: {
    typeUrl: string;
    encode(message: QueryStorageDetailRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryStorageDetailRequest;
    fromJSON(object: any): QueryStorageDetailRequest;
    toJSON(message: QueryStorageDetailRequest): unknown;
    fromPartial(object: Partial<QueryStorageDetailRequest>): QueryStorageDetailRequest;
    fromAmino(object: QueryStorageDetailRequestAmino): QueryStorageDetailRequest;
    toAmino(message: QueryStorageDetailRequest): QueryStorageDetailRequestAmino;
    fromAminoMsg(object: QueryStorageDetailRequestAminoMsg): QueryStorageDetailRequest;
    fromProtoMsg(message: QueryStorageDetailRequestProtoMsg): QueryStorageDetailRequest;
    toProto(message: QueryStorageDetailRequest): Uint8Array;
    toProtoMsg(message: QueryStorageDetailRequest): QueryStorageDetailRequestProtoMsg;
};
export declare const QueryStorageDetailResponse: {
    typeUrl: string;
    encode(message: QueryStorageDetailResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryStorageDetailResponse;
    fromJSON(object: any): QueryStorageDetailResponse;
    toJSON(message: QueryStorageDetailResponse): unknown;
    fromPartial(object: Partial<QueryStorageDetailResponse>): QueryStorageDetailResponse;
    fromAmino(object: QueryStorageDetailResponseAmino): QueryStorageDetailResponse;
    toAmino(message: QueryStorageDetailResponse): QueryStorageDetailResponseAmino;
    fromAminoMsg(object: QueryStorageDetailResponseAminoMsg): QueryStorageDetailResponse;
    fromProtoMsg(message: QueryStorageDetailResponseProtoMsg): QueryStorageDetailResponse;
    toProto(message: QueryStorageDetailResponse): Uint8Array;
    toProtoMsg(message: QueryStorageDetailResponse): QueryStorageDetailResponseProtoMsg;
};
export declare const QueryFilterStorageRequest: {
    typeUrl: string;
    encode(message: QueryFilterStorageRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFilterStorageRequest;
    fromJSON(object: any): QueryFilterStorageRequest;
    toJSON(message: QueryFilterStorageRequest): unknown;
    fromPartial(object: Partial<QueryFilterStorageRequest>): QueryFilterStorageRequest;
    fromAmino(object: QueryFilterStorageRequestAmino): QueryFilterStorageRequest;
    toAmino(message: QueryFilterStorageRequest): QueryFilterStorageRequestAmino;
    fromAminoMsg(object: QueryFilterStorageRequestAminoMsg): QueryFilterStorageRequest;
    fromProtoMsg(message: QueryFilterStorageRequestProtoMsg): QueryFilterStorageRequest;
    toProto(message: QueryFilterStorageRequest): Uint8Array;
    toProtoMsg(message: QueryFilterStorageRequest): QueryFilterStorageRequestProtoMsg;
};
export declare const QueryFilterStorageResponse: {
    typeUrl: string;
    encode(message: QueryFilterStorageResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFilterStorageResponse;
    fromJSON(object: any): QueryFilterStorageResponse;
    toJSON(message: QueryFilterStorageResponse): unknown;
    fromPartial(object: Partial<QueryFilterStorageResponse>): QueryFilterStorageResponse;
    fromAmino(object: QueryFilterStorageResponseAmino): QueryFilterStorageResponse;
    toAmino(message: QueryFilterStorageResponse): QueryFilterStorageResponseAmino;
    fromAminoMsg(object: QueryFilterStorageResponseAminoMsg): QueryFilterStorageResponse;
    fromProtoMsg(message: QueryFilterStorageResponseProtoMsg): QueryFilterStorageResponse;
    toProto(message: QueryFilterStorageResponse): Uint8Array;
    toProtoMsg(message: QueryFilterStorageResponse): QueryFilterStorageResponseProtoMsg;
};
