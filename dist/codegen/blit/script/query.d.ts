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
export interface QueryScriptRequest {
    address: string;
}
export interface QueryScriptRequestProtoMsg {
    type_url: "/blit.script.QueryScriptRequest";
    value: Uint8Array;
}
export interface QueryScriptRequestAmino {
    address: string;
}
export interface QueryScriptRequestAminoMsg {
    type: "/blit.script.QueryScriptRequest";
    value: QueryScriptRequestAmino;
}
export interface QueryScriptRequestSDKType {
    address: string;
}
export interface QueryScriptResponse {
    script: Script;
}
export interface QueryScriptResponseProtoMsg {
    type_url: "/blit.script.QueryScriptResponse";
    value: Uint8Array;
}
export interface QueryScriptResponseAmino {
    script?: ScriptAmino;
}
export interface QueryScriptResponseAminoMsg {
    type: "/blit.script.QueryScriptResponse";
    value: QueryScriptResponseAmino;
}
export interface QueryScriptResponseSDKType {
    script: ScriptSDKType;
}
export interface QueryScriptsRequest {
    pagination?: PageRequest;
}
export interface QueryScriptsRequestProtoMsg {
    type_url: "/blit.script.QueryScriptsRequest";
    value: Uint8Array;
}
export interface QueryScriptsRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryScriptsRequestAminoMsg {
    type: "/blit.script.QueryScriptsRequest";
    value: QueryScriptsRequestAmino;
}
export interface QueryScriptsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryScriptsResponse {
    script: Script[];
    pagination?: PageResponse;
}
export interface QueryScriptsResponseProtoMsg {
    type_url: "/blit.script.QueryScriptsResponse";
    value: Uint8Array;
}
export interface QueryScriptsResponseAmino {
    script: ScriptAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryScriptsResponseAminoMsg {
    type: "/blit.script.QueryScriptsResponse";
    value: QueryScriptsResponseAmino;
}
export interface QueryScriptsResponseSDKType {
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
    attached_messages: string;
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
    attached_messages: string;
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
    attached_messages: string;
}
export interface QueryEvalResponse {
    response: string;
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
export declare const QueryScriptRequest: {
    typeUrl: string;
    encode(message: QueryScriptRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryScriptRequest;
    fromJSON(object: any): QueryScriptRequest;
    toJSON(message: QueryScriptRequest): unknown;
    fromPartial(object: Partial<QueryScriptRequest>): QueryScriptRequest;
    fromAmino(object: QueryScriptRequestAmino): QueryScriptRequest;
    toAmino(message: QueryScriptRequest): QueryScriptRequestAmino;
    fromAminoMsg(object: QueryScriptRequestAminoMsg): QueryScriptRequest;
    fromProtoMsg(message: QueryScriptRequestProtoMsg): QueryScriptRequest;
    toProto(message: QueryScriptRequest): Uint8Array;
    toProtoMsg(message: QueryScriptRequest): QueryScriptRequestProtoMsg;
};
export declare const QueryScriptResponse: {
    typeUrl: string;
    encode(message: QueryScriptResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryScriptResponse;
    fromJSON(object: any): QueryScriptResponse;
    toJSON(message: QueryScriptResponse): unknown;
    fromPartial(object: Partial<QueryScriptResponse>): QueryScriptResponse;
    fromAmino(object: QueryScriptResponseAmino): QueryScriptResponse;
    toAmino(message: QueryScriptResponse): QueryScriptResponseAmino;
    fromAminoMsg(object: QueryScriptResponseAminoMsg): QueryScriptResponse;
    fromProtoMsg(message: QueryScriptResponseProtoMsg): QueryScriptResponse;
    toProto(message: QueryScriptResponse): Uint8Array;
    toProtoMsg(message: QueryScriptResponse): QueryScriptResponseProtoMsg;
};
export declare const QueryScriptsRequest: {
    typeUrl: string;
    encode(message: QueryScriptsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryScriptsRequest;
    fromJSON(object: any): QueryScriptsRequest;
    toJSON(message: QueryScriptsRequest): unknown;
    fromPartial(object: Partial<QueryScriptsRequest>): QueryScriptsRequest;
    fromAmino(object: QueryScriptsRequestAmino): QueryScriptsRequest;
    toAmino(message: QueryScriptsRequest): QueryScriptsRequestAmino;
    fromAminoMsg(object: QueryScriptsRequestAminoMsg): QueryScriptsRequest;
    fromProtoMsg(message: QueryScriptsRequestProtoMsg): QueryScriptsRequest;
    toProto(message: QueryScriptsRequest): Uint8Array;
    toProtoMsg(message: QueryScriptsRequest): QueryScriptsRequestProtoMsg;
};
export declare const QueryScriptsResponse: {
    typeUrl: string;
    encode(message: QueryScriptsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryScriptsResponse;
    fromJSON(object: any): QueryScriptsResponse;
    toJSON(message: QueryScriptsResponse): unknown;
    fromPartial(object: Partial<QueryScriptsResponse>): QueryScriptsResponse;
    fromAmino(object: QueryScriptsResponseAmino): QueryScriptsResponse;
    toAmino(message: QueryScriptsResponse): QueryScriptsResponseAmino;
    fromAminoMsg(object: QueryScriptsResponseAminoMsg): QueryScriptsResponse;
    fromProtoMsg(message: QueryScriptsResponseProtoMsg): QueryScriptsResponse;
    toProto(message: QueryScriptsResponse): Uint8Array;
    toProtoMsg(message: QueryScriptsResponse): QueryScriptsResponseProtoMsg;
};
export declare const QueryWebRequest: {
    typeUrl: string;
    encode(message: QueryWebRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryWebRequest;
    fromJSON(object: any): QueryWebRequest;
    toJSON(message: QueryWebRequest): unknown;
    fromPartial(object: Partial<QueryWebRequest>): QueryWebRequest;
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
    fromAmino(object: QueryEvalResponseAmino): QueryEvalResponse;
    toAmino(message: QueryEvalResponse): QueryEvalResponseAmino;
    fromAminoMsg(object: QueryEvalResponseAminoMsg): QueryEvalResponse;
    fromProtoMsg(message: QueryEvalResponseProtoMsg): QueryEvalResponse;
    toProto(message: QueryEvalResponse): Uint8Array;
    toProtoMsg(message: QueryEvalResponse): QueryEvalResponseProtoMsg;
};
