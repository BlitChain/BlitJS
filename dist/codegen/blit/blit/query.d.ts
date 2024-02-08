import { Params, ParamsAmino, ParamsSDKType } from "./params";
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
    api_url: string;
    /** rpc_url is the url of the rpc service. It can be set with the ENV variable BLIT_PUBLIC_RPC_URL. */
    rpc_url: string;
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
