import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Task, TaskAmino, TaskSDKType } from "./task";
import { FutureTask, FutureTaskAmino, FutureTaskSDKType } from "./future_task";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "blit.blit";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    type_url: "/blit.blit.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/blit.blit.QueryParamsRequest";
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
    type_url: "/blit.blit.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/blit.blit.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface EndpointsRequest {
}
export interface EndpointsRequestProtoMsg {
    type_url: "/blit.blit.EndpointsRequest";
    value: Uint8Array;
}
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface EndpointsRequestAmino {
}
export interface EndpointsRequestAminoMsg {
    type: "/blit.blit.EndpointsRequest";
    value: EndpointsRequestAmino;
}
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface EndpointsRequestSDKType {
}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface EndpointsResponse {
    /** api_url is the url of the api service. It can be set with the ENV variable BLIT_PUBLIC_API_URL. */
    api_url: string;
    /** rpc_url is the url of the rpc service. It can be set with the ENV variable BLIT_PUBLIC_RPC_URL. */
    rpc_url: string;
}
export interface EndpointsResponseProtoMsg {
    type_url: "/blit.blit.EndpointsResponse";
    value: Uint8Array;
}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface EndpointsResponseAmino {
    /** api_url is the url of the api service. It can be set with the ENV variable BLIT_PUBLIC_API_URL. */
    api_url?: string;
    /** rpc_url is the url of the rpc service. It can be set with the ENV variable BLIT_PUBLIC_RPC_URL. */
    rpc_url?: string;
}
export interface EndpointsResponseAminoMsg {
    type: "/blit.blit.EndpointsResponse";
    value: EndpointsResponseAmino;
}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface EndpointsResponseSDKType {
    api_url: string;
    rpc_url: string;
}
export interface QueryGetTaskRequest {
    id: bigint;
}
export interface QueryGetTaskRequestProtoMsg {
    type_url: "/blit.blit.QueryGetTaskRequest";
    value: Uint8Array;
}
export interface QueryGetTaskRequestAmino {
    id?: string;
}
export interface QueryGetTaskRequestAminoMsg {
    type: "/blit.blit.QueryGetTaskRequest";
    value: QueryGetTaskRequestAmino;
}
export interface QueryGetTaskRequestSDKType {
    id: bigint;
}
export interface QueryGetTaskResponse {
    task: Task;
}
export interface QueryGetTaskResponseProtoMsg {
    type_url: "/blit.blit.QueryGetTaskResponse";
    value: Uint8Array;
}
export interface QueryGetTaskResponseAmino {
    task?: TaskAmino;
}
export interface QueryGetTaskResponseAminoMsg {
    type: "/blit.blit.QueryGetTaskResponse";
    value: QueryGetTaskResponseAmino;
}
export interface QueryGetTaskResponseSDKType {
    task: TaskSDKType;
}
export interface QueryAllTaskRequest {
    address: string;
    pagination?: PageRequest;
}
export interface QueryAllTaskRequestProtoMsg {
    type_url: "/blit.blit.QueryAllTaskRequest";
    value: Uint8Array;
}
export interface QueryAllTaskRequestAmino {
    address?: string;
    pagination?: PageRequestAmino;
}
export interface QueryAllTaskRequestAminoMsg {
    type: "/blit.blit.QueryAllTaskRequest";
    value: QueryAllTaskRequestAmino;
}
export interface QueryAllTaskRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType;
}
export interface QueryAllTaskResponse {
    task: Task[];
    pagination?: PageResponse;
}
export interface QueryAllTaskResponseProtoMsg {
    type_url: "/blit.blit.QueryAllTaskResponse";
    value: Uint8Array;
}
export interface QueryAllTaskResponseAmino {
    task?: TaskAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllTaskResponseAminoMsg {
    type: "/blit.blit.QueryAllTaskResponse";
    value: QueryAllTaskResponseAmino;
}
export interface QueryAllTaskResponseSDKType {
    task: TaskSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetFutureTaskRequest {
    index: string;
}
export interface QueryGetFutureTaskRequestProtoMsg {
    type_url: "/blit.blit.QueryGetFutureTaskRequest";
    value: Uint8Array;
}
export interface QueryGetFutureTaskRequestAmino {
    index?: string;
}
export interface QueryGetFutureTaskRequestAminoMsg {
    type: "/blit.blit.QueryGetFutureTaskRequest";
    value: QueryGetFutureTaskRequestAmino;
}
export interface QueryGetFutureTaskRequestSDKType {
    index: string;
}
export interface QueryGetFutureTaskResponse {
    futureTask: FutureTask;
}
export interface QueryGetFutureTaskResponseProtoMsg {
    type_url: "/blit.blit.QueryGetFutureTaskResponse";
    value: Uint8Array;
}
export interface QueryGetFutureTaskResponseAmino {
    futureTask?: FutureTaskAmino;
}
export interface QueryGetFutureTaskResponseAminoMsg {
    type: "/blit.blit.QueryGetFutureTaskResponse";
    value: QueryGetFutureTaskResponseAmino;
}
export interface QueryGetFutureTaskResponseSDKType {
    futureTask: FutureTaskSDKType;
}
export interface QueryAllFutureTaskRequest {
    /** Prefix queries the future tasks with indexs with the given prefix. */
    prefix: string;
    pagination?: PageRequest;
}
export interface QueryAllFutureTaskRequestProtoMsg {
    type_url: "/blit.blit.QueryAllFutureTaskRequest";
    value: Uint8Array;
}
export interface QueryAllFutureTaskRequestAmino {
    /** Prefix queries the future tasks with indexs with the given prefix. */
    prefix?: string;
    pagination?: PageRequestAmino;
}
export interface QueryAllFutureTaskRequestAminoMsg {
    type: "/blit.blit.QueryAllFutureTaskRequest";
    value: QueryAllFutureTaskRequestAmino;
}
export interface QueryAllFutureTaskRequestSDKType {
    prefix: string;
    pagination?: PageRequestSDKType;
}
export interface QueryAllFutureTaskResponse {
    futureTask: FutureTask[];
    pagination?: PageResponse;
}
export interface QueryAllFutureTaskResponseProtoMsg {
    type_url: "/blit.blit.QueryAllFutureTaskResponse";
    value: Uint8Array;
}
export interface QueryAllFutureTaskResponseAmino {
    futureTask?: FutureTaskAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllFutureTaskResponseAminoMsg {
    type: "/blit.blit.QueryAllFutureTaskResponse";
    value: QueryAllFutureTaskResponseAmino;
}
export interface QueryAllFutureTaskResponseSDKType {
    futureTask: FutureTaskSDKType[];
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
export declare const EndpointsRequest: {
    typeUrl: string;
    encode(_: EndpointsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EndpointsRequest;
    fromJSON(_: any): EndpointsRequest;
    toJSON(_: EndpointsRequest): unknown;
    fromPartial(_: Partial<EndpointsRequest>): EndpointsRequest;
    fromAmino(_: EndpointsRequestAmino): EndpointsRequest;
    toAmino(_: EndpointsRequest): EndpointsRequestAmino;
    fromAminoMsg(object: EndpointsRequestAminoMsg): EndpointsRequest;
    fromProtoMsg(message: EndpointsRequestProtoMsg): EndpointsRequest;
    toProto(message: EndpointsRequest): Uint8Array;
    toProtoMsg(message: EndpointsRequest): EndpointsRequestProtoMsg;
};
export declare const EndpointsResponse: {
    typeUrl: string;
    encode(message: EndpointsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EndpointsResponse;
    fromJSON(object: any): EndpointsResponse;
    toJSON(message: EndpointsResponse): unknown;
    fromPartial(object: Partial<EndpointsResponse>): EndpointsResponse;
    fromAmino(object: EndpointsResponseAmino): EndpointsResponse;
    toAmino(message: EndpointsResponse): EndpointsResponseAmino;
    fromAminoMsg(object: EndpointsResponseAminoMsg): EndpointsResponse;
    fromProtoMsg(message: EndpointsResponseProtoMsg): EndpointsResponse;
    toProto(message: EndpointsResponse): Uint8Array;
    toProtoMsg(message: EndpointsResponse): EndpointsResponseProtoMsg;
};
export declare const QueryGetTaskRequest: {
    typeUrl: string;
    encode(message: QueryGetTaskRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTaskRequest;
    fromJSON(object: any): QueryGetTaskRequest;
    toJSON(message: QueryGetTaskRequest): unknown;
    fromPartial(object: Partial<QueryGetTaskRequest>): QueryGetTaskRequest;
    fromAmino(object: QueryGetTaskRequestAmino): QueryGetTaskRequest;
    toAmino(message: QueryGetTaskRequest): QueryGetTaskRequestAmino;
    fromAminoMsg(object: QueryGetTaskRequestAminoMsg): QueryGetTaskRequest;
    fromProtoMsg(message: QueryGetTaskRequestProtoMsg): QueryGetTaskRequest;
    toProto(message: QueryGetTaskRequest): Uint8Array;
    toProtoMsg(message: QueryGetTaskRequest): QueryGetTaskRequestProtoMsg;
};
export declare const QueryGetTaskResponse: {
    typeUrl: string;
    encode(message: QueryGetTaskResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTaskResponse;
    fromJSON(object: any): QueryGetTaskResponse;
    toJSON(message: QueryGetTaskResponse): unknown;
    fromPartial(object: Partial<QueryGetTaskResponse>): QueryGetTaskResponse;
    fromAmino(object: QueryGetTaskResponseAmino): QueryGetTaskResponse;
    toAmino(message: QueryGetTaskResponse): QueryGetTaskResponseAmino;
    fromAminoMsg(object: QueryGetTaskResponseAminoMsg): QueryGetTaskResponse;
    fromProtoMsg(message: QueryGetTaskResponseProtoMsg): QueryGetTaskResponse;
    toProto(message: QueryGetTaskResponse): Uint8Array;
    toProtoMsg(message: QueryGetTaskResponse): QueryGetTaskResponseProtoMsg;
};
export declare const QueryAllTaskRequest: {
    typeUrl: string;
    encode(message: QueryAllTaskRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTaskRequest;
    fromJSON(object: any): QueryAllTaskRequest;
    toJSON(message: QueryAllTaskRequest): unknown;
    fromPartial(object: Partial<QueryAllTaskRequest>): QueryAllTaskRequest;
    fromAmino(object: QueryAllTaskRequestAmino): QueryAllTaskRequest;
    toAmino(message: QueryAllTaskRequest): QueryAllTaskRequestAmino;
    fromAminoMsg(object: QueryAllTaskRequestAminoMsg): QueryAllTaskRequest;
    fromProtoMsg(message: QueryAllTaskRequestProtoMsg): QueryAllTaskRequest;
    toProto(message: QueryAllTaskRequest): Uint8Array;
    toProtoMsg(message: QueryAllTaskRequest): QueryAllTaskRequestProtoMsg;
};
export declare const QueryAllTaskResponse: {
    typeUrl: string;
    encode(message: QueryAllTaskResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTaskResponse;
    fromJSON(object: any): QueryAllTaskResponse;
    toJSON(message: QueryAllTaskResponse): unknown;
    fromPartial(object: Partial<QueryAllTaskResponse>): QueryAllTaskResponse;
    fromAmino(object: QueryAllTaskResponseAmino): QueryAllTaskResponse;
    toAmino(message: QueryAllTaskResponse): QueryAllTaskResponseAmino;
    fromAminoMsg(object: QueryAllTaskResponseAminoMsg): QueryAllTaskResponse;
    fromProtoMsg(message: QueryAllTaskResponseProtoMsg): QueryAllTaskResponse;
    toProto(message: QueryAllTaskResponse): Uint8Array;
    toProtoMsg(message: QueryAllTaskResponse): QueryAllTaskResponseProtoMsg;
};
export declare const QueryGetFutureTaskRequest: {
    typeUrl: string;
    encode(message: QueryGetFutureTaskRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetFutureTaskRequest;
    fromJSON(object: any): QueryGetFutureTaskRequest;
    toJSON(message: QueryGetFutureTaskRequest): unknown;
    fromPartial(object: Partial<QueryGetFutureTaskRequest>): QueryGetFutureTaskRequest;
    fromAmino(object: QueryGetFutureTaskRequestAmino): QueryGetFutureTaskRequest;
    toAmino(message: QueryGetFutureTaskRequest): QueryGetFutureTaskRequestAmino;
    fromAminoMsg(object: QueryGetFutureTaskRequestAminoMsg): QueryGetFutureTaskRequest;
    fromProtoMsg(message: QueryGetFutureTaskRequestProtoMsg): QueryGetFutureTaskRequest;
    toProto(message: QueryGetFutureTaskRequest): Uint8Array;
    toProtoMsg(message: QueryGetFutureTaskRequest): QueryGetFutureTaskRequestProtoMsg;
};
export declare const QueryGetFutureTaskResponse: {
    typeUrl: string;
    encode(message: QueryGetFutureTaskResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetFutureTaskResponse;
    fromJSON(object: any): QueryGetFutureTaskResponse;
    toJSON(message: QueryGetFutureTaskResponse): unknown;
    fromPartial(object: Partial<QueryGetFutureTaskResponse>): QueryGetFutureTaskResponse;
    fromAmino(object: QueryGetFutureTaskResponseAmino): QueryGetFutureTaskResponse;
    toAmino(message: QueryGetFutureTaskResponse): QueryGetFutureTaskResponseAmino;
    fromAminoMsg(object: QueryGetFutureTaskResponseAminoMsg): QueryGetFutureTaskResponse;
    fromProtoMsg(message: QueryGetFutureTaskResponseProtoMsg): QueryGetFutureTaskResponse;
    toProto(message: QueryGetFutureTaskResponse): Uint8Array;
    toProtoMsg(message: QueryGetFutureTaskResponse): QueryGetFutureTaskResponseProtoMsg;
};
export declare const QueryAllFutureTaskRequest: {
    typeUrl: string;
    encode(message: QueryAllFutureTaskRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllFutureTaskRequest;
    fromJSON(object: any): QueryAllFutureTaskRequest;
    toJSON(message: QueryAllFutureTaskRequest): unknown;
    fromPartial(object: Partial<QueryAllFutureTaskRequest>): QueryAllFutureTaskRequest;
    fromAmino(object: QueryAllFutureTaskRequestAmino): QueryAllFutureTaskRequest;
    toAmino(message: QueryAllFutureTaskRequest): QueryAllFutureTaskRequestAmino;
    fromAminoMsg(object: QueryAllFutureTaskRequestAminoMsg): QueryAllFutureTaskRequest;
    fromProtoMsg(message: QueryAllFutureTaskRequestProtoMsg): QueryAllFutureTaskRequest;
    toProto(message: QueryAllFutureTaskRequest): Uint8Array;
    toProtoMsg(message: QueryAllFutureTaskRequest): QueryAllFutureTaskRequestProtoMsg;
};
export declare const QueryAllFutureTaskResponse: {
    typeUrl: string;
    encode(message: QueryAllFutureTaskResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllFutureTaskResponse;
    fromJSON(object: any): QueryAllFutureTaskResponse;
    toJSON(message: QueryAllFutureTaskResponse): unknown;
    fromPartial(object: Partial<QueryAllFutureTaskResponse>): QueryAllFutureTaskResponse;
    fromAmino(object: QueryAllFutureTaskResponseAmino): QueryAllFutureTaskResponse;
    toAmino(message: QueryAllFutureTaskResponse): QueryAllFutureTaskResponseAmino;
    fromAminoMsg(object: QueryAllFutureTaskResponseAminoMsg): QueryAllFutureTaskResponse;
    fromProtoMsg(message: QueryAllFutureTaskResponseProtoMsg): QueryAllFutureTaskResponse;
    toProto(message: QueryAllFutureTaskResponse): Uint8Array;
    toProtoMsg(message: QueryAllFutureTaskResponse): QueryAllFutureTaskResponseProtoMsg;
};
