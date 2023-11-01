import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Script, ScriptAmino, ScriptSDKType } from "./script";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "blit.script";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    type_url: "/blit.script.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestProtoMsg {
    type_url: "/blit.script.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/blit.script.QueryParamsRequest";
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
    type_url: "/blit.script.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseProtoMsg {
    type_url: "/blit.script.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/blit.script.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryGetScriptRequest {
    address: string;
}
export interface QueryGetScriptRequestProtoMsg {
    type_url: "/blit.script.QueryGetScriptRequest";
    value: Uint8Array;
}
export interface QueryGetScriptRequestProtoMsg {
    type_url: "/blit.script.QueryGetScriptRequest";
    value: Uint8Array;
}
export interface QueryGetScriptRequestAmino {
    address: string;
}
export interface QueryGetScriptRequestAminoMsg {
    type: "/blit.script.QueryGetScriptRequest";
    value: QueryGetScriptRequestAmino;
}
export interface QueryGetScriptRequestSDKType {
    address: string;
}
export interface QueryGetScriptResponse {
    script: Script;
}
export interface QueryGetScriptResponseProtoMsg {
    type_url: "/blit.script.QueryGetScriptResponse";
    value: Uint8Array;
}
export interface QueryGetScriptResponseProtoMsg {
    type_url: "/blit.script.QueryGetScriptResponse";
    value: Uint8Array;
}
export interface QueryGetScriptResponseAmino {
    script?: ScriptAmino;
}
export interface QueryGetScriptResponseAminoMsg {
    type: "/blit.script.QueryGetScriptResponse";
    value: QueryGetScriptResponseAmino;
}
export interface QueryGetScriptResponseSDKType {
    script: ScriptSDKType;
}
export interface QueryAllScriptRequest {
    pagination?: PageRequest;
}
export interface QueryAllScriptRequestProtoMsg {
    type_url: "/blit.script.QueryAllScriptRequest";
    value: Uint8Array;
}
export interface QueryAllScriptRequestProtoMsg {
    type_url: "/blit.script.QueryAllScriptRequest";
    value: Uint8Array;
}
export interface QueryAllScriptRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllScriptRequestAminoMsg {
    type: "/blit.script.QueryAllScriptRequest";
    value: QueryAllScriptRequestAmino;
}
export interface QueryAllScriptRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllScriptResponse {
    script: Script[];
    pagination?: PageResponse;
}
export interface QueryAllScriptResponseProtoMsg {
    type_url: "/blit.script.QueryAllScriptResponse";
    value: Uint8Array;
}
export interface QueryAllScriptResponseProtoMsg {
    type_url: "/blit.script.QueryAllScriptResponse";
    value: Uint8Array;
}
export interface QueryAllScriptResponseAmino {
    script: ScriptAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllScriptResponseAminoMsg {
    type: "/blit.script.QueryAllScriptResponse";
    value: QueryAllScriptResponseAmino;
}
export interface QueryAllScriptResponseSDKType {
    script: ScriptSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryWebRequest {
    address: string;
    httprequest: string;
}
export interface QueryWebRequestProtoMsg {
    type_url: "/blit.script.QueryWebRequest";
    value: Uint8Array;
}
export interface QueryWebRequestProtoMsg {
    type_url: "/blit.script.QueryWebRequest";
    value: Uint8Array;
}
export interface QueryWebRequestAmino {
    address: string;
    httprequest: string;
}
export interface QueryWebRequestAminoMsg {
    type: "/blit.script.QueryWebRequest";
    value: QueryWebRequestAmino;
}
export interface QueryWebRequestSDKType {
    address: string;
    httprequest: string;
}
export interface QueryWebResponse {
    httpresponse: string;
}
export interface QueryWebResponseProtoMsg {
    type_url: "/blit.script.QueryWebResponse";
    value: Uint8Array;
}
export interface QueryWebResponseProtoMsg {
    type_url: "/blit.script.QueryWebResponse";
    value: Uint8Array;
}
export interface QueryWebResponseAmino {
    httpresponse: string;
}
export interface QueryWebResponseAminoMsg {
    type: "/blit.script.QueryWebResponse";
    value: QueryWebResponseAmino;
}
export interface QueryWebResponseSDKType {
    httpresponse: string;
}
export interface QueryEvalRequest {
    caller_address: string;
    script_address: string;
    extra_code: string;
    function_name: string;
    kwargs: string;
    grantee: string;
}
export interface QueryEvalRequestProtoMsg {
    type_url: "/blit.script.QueryEvalRequest";
    value: Uint8Array;
}
export interface QueryEvalRequestProtoMsg {
    type_url: "/blit.script.QueryEvalRequest";
    value: Uint8Array;
}
export interface QueryEvalRequestAmino {
    caller_address: string;
    script_address: string;
    extra_code: string;
    function_name: string;
    kwargs: string;
    grantee: string;
}
export interface QueryEvalRequestAminoMsg {
    type: "/blit.script.QueryEvalRequest";
    value: QueryEvalRequestAmino;
}
export interface QueryEvalRequestSDKType {
    caller_address: string;
    script_address: string;
    extra_code: string;
    function_name: string;
    kwargs: string;
    grantee: string;
}
export interface QueryEvalResponse {
    response: string;
}
export interface QueryEvalResponseProtoMsg {
    type_url: "/blit.script.QueryEvalResponse";
    value: Uint8Array;
}
export interface QueryEvalResponseProtoMsg {
    type_url: "/blit.script.QueryEvalResponse";
    value: Uint8Array;
}
export interface QueryEvalResponseAmino {
    response: string;
}
export interface QueryEvalResponseAminoMsg {
    type: "/blit.script.QueryEvalResponse";
    value: QueryEvalResponseAmino;
}
export interface QueryEvalResponseSDKType {
    response: string;
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
export declare const QueryGetScriptRequest: {
    typeUrl: string;
    encode(message: QueryGetScriptRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetScriptRequest;
    fromJSON(object: any): QueryGetScriptRequest;
    toJSON(message: QueryGetScriptRequest): unknown;
    fromPartial(object: Partial<QueryGetScriptRequest>): QueryGetScriptRequest;
    fromSDK(object: QueryGetScriptRequestSDKType): QueryGetScriptRequest;
    toSDK(message: QueryGetScriptRequest): QueryGetScriptRequestSDKType;
    fromAmino(object: QueryGetScriptRequestAmino): QueryGetScriptRequest;
    toAmino(message: QueryGetScriptRequest): QueryGetScriptRequestAmino;
    fromAminoMsg(object: QueryGetScriptRequestAminoMsg): QueryGetScriptRequest;
    fromProtoMsg(message: QueryGetScriptRequestProtoMsg): QueryGetScriptRequest;
    toProto(message: QueryGetScriptRequest): Uint8Array;
    toProtoMsg(message: QueryGetScriptRequest): QueryGetScriptRequestProtoMsg;
};
export declare const QueryGetScriptResponse: {
    typeUrl: string;
    encode(message: QueryGetScriptResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetScriptResponse;
    fromJSON(object: any): QueryGetScriptResponse;
    toJSON(message: QueryGetScriptResponse): unknown;
    fromPartial(object: Partial<QueryGetScriptResponse>): QueryGetScriptResponse;
    fromSDK(object: QueryGetScriptResponseSDKType): QueryGetScriptResponse;
    toSDK(message: QueryGetScriptResponse): QueryGetScriptResponseSDKType;
    fromAmino(object: QueryGetScriptResponseAmino): QueryGetScriptResponse;
    toAmino(message: QueryGetScriptResponse): QueryGetScriptResponseAmino;
    fromAminoMsg(object: QueryGetScriptResponseAminoMsg): QueryGetScriptResponse;
    fromProtoMsg(message: QueryGetScriptResponseProtoMsg): QueryGetScriptResponse;
    toProto(message: QueryGetScriptResponse): Uint8Array;
    toProtoMsg(message: QueryGetScriptResponse): QueryGetScriptResponseProtoMsg;
};
export declare const QueryAllScriptRequest: {
    typeUrl: string;
    encode(message: QueryAllScriptRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllScriptRequest;
    fromJSON(object: any): QueryAllScriptRequest;
    toJSON(message: QueryAllScriptRequest): unknown;
    fromPartial(object: Partial<QueryAllScriptRequest>): QueryAllScriptRequest;
    fromSDK(object: QueryAllScriptRequestSDKType): QueryAllScriptRequest;
    toSDK(message: QueryAllScriptRequest): QueryAllScriptRequestSDKType;
    fromAmino(object: QueryAllScriptRequestAmino): QueryAllScriptRequest;
    toAmino(message: QueryAllScriptRequest): QueryAllScriptRequestAmino;
    fromAminoMsg(object: QueryAllScriptRequestAminoMsg): QueryAllScriptRequest;
    fromProtoMsg(message: QueryAllScriptRequestProtoMsg): QueryAllScriptRequest;
    toProto(message: QueryAllScriptRequest): Uint8Array;
    toProtoMsg(message: QueryAllScriptRequest): QueryAllScriptRequestProtoMsg;
};
export declare const QueryAllScriptResponse: {
    typeUrl: string;
    encode(message: QueryAllScriptResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllScriptResponse;
    fromJSON(object: any): QueryAllScriptResponse;
    toJSON(message: QueryAllScriptResponse): unknown;
    fromPartial(object: Partial<QueryAllScriptResponse>): QueryAllScriptResponse;
    fromSDK(object: QueryAllScriptResponseSDKType): QueryAllScriptResponse;
    toSDK(message: QueryAllScriptResponse): QueryAllScriptResponseSDKType;
    fromAmino(object: QueryAllScriptResponseAmino): QueryAllScriptResponse;
    toAmino(message: QueryAllScriptResponse): QueryAllScriptResponseAmino;
    fromAminoMsg(object: QueryAllScriptResponseAminoMsg): QueryAllScriptResponse;
    fromProtoMsg(message: QueryAllScriptResponseProtoMsg): QueryAllScriptResponse;
    toProto(message: QueryAllScriptResponse): Uint8Array;
    toProtoMsg(message: QueryAllScriptResponse): QueryAllScriptResponseProtoMsg;
};
export declare const QueryWebRequest: {
    typeUrl: string;
    encode(message: QueryWebRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryWebRequest;
    fromJSON(object: any): QueryWebRequest;
    toJSON(message: QueryWebRequest): unknown;
    fromPartial(object: Partial<QueryWebRequest>): QueryWebRequest;
    fromSDK(object: QueryWebRequestSDKType): QueryWebRequest;
    toSDK(message: QueryWebRequest): QueryWebRequestSDKType;
    fromAmino(object: QueryWebRequestAmino): QueryWebRequest;
    toAmino(message: QueryWebRequest): QueryWebRequestAmino;
    fromAminoMsg(object: QueryWebRequestAminoMsg): QueryWebRequest;
    fromProtoMsg(message: QueryWebRequestProtoMsg): QueryWebRequest;
    toProto(message: QueryWebRequest): Uint8Array;
    toProtoMsg(message: QueryWebRequest): QueryWebRequestProtoMsg;
};
export declare const QueryWebResponse: {
    typeUrl: string;
    encode(message: QueryWebResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryWebResponse;
    fromJSON(object: any): QueryWebResponse;
    toJSON(message: QueryWebResponse): unknown;
    fromPartial(object: Partial<QueryWebResponse>): QueryWebResponse;
    fromSDK(object: QueryWebResponseSDKType): QueryWebResponse;
    toSDK(message: QueryWebResponse): QueryWebResponseSDKType;
    fromAmino(object: QueryWebResponseAmino): QueryWebResponse;
    toAmino(message: QueryWebResponse): QueryWebResponseAmino;
    fromAminoMsg(object: QueryWebResponseAminoMsg): QueryWebResponse;
    fromProtoMsg(message: QueryWebResponseProtoMsg): QueryWebResponse;
    toProto(message: QueryWebResponse): Uint8Array;
    toProtoMsg(message: QueryWebResponse): QueryWebResponseProtoMsg;
};
export declare const QueryEvalRequest: {
    typeUrl: string;
    encode(message: QueryEvalRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEvalRequest;
    fromJSON(object: any): QueryEvalRequest;
    toJSON(message: QueryEvalRequest): unknown;
    fromPartial(object: Partial<QueryEvalRequest>): QueryEvalRequest;
    fromSDK(object: QueryEvalRequestSDKType): QueryEvalRequest;
    toSDK(message: QueryEvalRequest): QueryEvalRequestSDKType;
    fromAmino(object: QueryEvalRequestAmino): QueryEvalRequest;
    toAmino(message: QueryEvalRequest): QueryEvalRequestAmino;
    fromAminoMsg(object: QueryEvalRequestAminoMsg): QueryEvalRequest;
    fromProtoMsg(message: QueryEvalRequestProtoMsg): QueryEvalRequest;
    toProto(message: QueryEvalRequest): Uint8Array;
    toProtoMsg(message: QueryEvalRequest): QueryEvalRequestProtoMsg;
};
export declare const QueryEvalResponse: {
    typeUrl: string;
    encode(message: QueryEvalResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEvalResponse;
    fromJSON(object: any): QueryEvalResponse;
    toJSON(message: QueryEvalResponse): unknown;
    fromPartial(object: Partial<QueryEvalResponse>): QueryEvalResponse;
    fromSDK(object: QueryEvalResponseSDKType): QueryEvalResponse;
    toSDK(message: QueryEvalResponse): QueryEvalResponseSDKType;
    fromAmino(object: QueryEvalResponseAmino): QueryEvalResponse;
    toAmino(message: QueryEvalResponse): QueryEvalResponseAmino;
    fromAminoMsg(object: QueryEvalResponseAminoMsg): QueryEvalResponse;
    fromProtoMsg(message: QueryEvalResponseProtoMsg): QueryEvalResponse;
    toProto(message: QueryEvalResponse): Uint8Array;
    toProtoMsg(message: QueryEvalResponse): QueryEvalResponseProtoMsg;
};
