import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "blit.blit";
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
export declare const EndpointsRequest: {
    typeUrl: string;
    is(o: any): o is EndpointsRequest;
    isSDK(o: any): o is EndpointsRequestSDKType;
    isAmino(o: any): o is EndpointsRequestAmino;
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
    is(o: any): o is EndpointsResponse;
    isSDK(o: any): o is EndpointsResponseSDKType;
    isAmino(o: any): o is EndpointsResponseAmino;
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
