import { BinaryReader, BinaryWriter } from "../../../../binary";
export declare const protobufPackage = "cosmos.base.node.v1beta1";
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequest {
}
export interface ConfigRequestProtoMsg {
    type_url: "/cosmos.base.node.v1beta1.ConfigRequest";
    value: Uint8Array;
}
export interface ConfigRequestProtoMsg {
    type_url: "/cosmos.base.node.v1beta1.ConfigRequest";
    value: Uint8Array;
}
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequestAmino {
}
export interface ConfigRequestAminoMsg {
    type: "cosmos-sdk/ConfigRequest";
    value: ConfigRequestAmino;
}
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequestSDKType {
}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponse {
    minimum_gas_price: string;
}
export interface ConfigResponseProtoMsg {
    type_url: "/cosmos.base.node.v1beta1.ConfigResponse";
    value: Uint8Array;
}
export interface ConfigResponseProtoMsg {
    type_url: "/cosmos.base.node.v1beta1.ConfigResponse";
    value: Uint8Array;
}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponseAmino {
    minimum_gas_price: string;
}
export interface ConfigResponseAminoMsg {
    type: "cosmos-sdk/ConfigResponse";
    value: ConfigResponseAmino;
}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponseSDKType {
    minimum_gas_price: string;
}
export declare const ConfigRequest: {
    typeUrl: string;
    encode(_: ConfigRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ConfigRequest;
    fromJSON(_: any): ConfigRequest;
    toJSON(_: ConfigRequest): unknown;
    fromPartial(_: Partial<ConfigRequest>): ConfigRequest;
    fromSDK(_: ConfigRequestSDKType): ConfigRequest;
    toSDK(_: ConfigRequest): ConfigRequestSDKType;
    fromAmino(_: ConfigRequestAmino): ConfigRequest;
    toAmino(_: ConfigRequest): ConfigRequestAmino;
    fromAminoMsg(object: ConfigRequestAminoMsg): ConfigRequest;
    toAminoMsg(message: ConfigRequest): ConfigRequestAminoMsg;
    fromProtoMsg(message: ConfigRequestProtoMsg): ConfigRequest;
    toProto(message: ConfigRequest): Uint8Array;
    toProtoMsg(message: ConfigRequest): ConfigRequestProtoMsg;
};
export declare const ConfigResponse: {
    typeUrl: string;
    encode(message: ConfigResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ConfigResponse;
    fromJSON(object: any): ConfigResponse;
    toJSON(message: ConfigResponse): unknown;
    fromPartial(object: Partial<ConfigResponse>): ConfigResponse;
    fromSDK(object: ConfigResponseSDKType): ConfigResponse;
    toSDK(message: ConfigResponse): ConfigResponseSDKType;
    fromAmino(object: ConfigResponseAmino): ConfigResponse;
    toAmino(message: ConfigResponse): ConfigResponseAmino;
    fromAminoMsg(object: ConfigResponseAminoMsg): ConfigResponse;
    toAminoMsg(message: ConfigResponse): ConfigResponseAminoMsg;
    fromProtoMsg(message: ConfigResponseProtoMsg): ConfigResponse;
    toProto(message: ConfigResponse): Uint8Array;
    toProtoMsg(message: ConfigResponse): ConfigResponseProtoMsg;
};
