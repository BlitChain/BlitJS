//@ts-nocheck
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Script } from "./script";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { isSet } from "../../helpers";
export const protobufPackage = "blit.script";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/blit.script.QueryParamsRequest",
    is(o) {
        return o && o.$typeUrl === QueryParamsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryParamsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryParamsRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/blit.script.QueryParamsResponse",
    is(o) {
        return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : Params.fromPartial({});
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryScriptRequest() {
    return {
        address: ""
    };
}
export const QueryScriptRequest = {
    typeUrl: "/blit.script.QueryScriptRequest",
    is(o) {
        return o && (o.$typeUrl === QueryScriptRequest.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryScriptRequest.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryScriptRequest.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryScriptRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryScriptRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryScriptRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryScriptRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryScriptRequest.decode(message.value);
    },
    toProto(message) {
        return QueryScriptRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryScriptRequest",
            value: QueryScriptRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryScriptRequest.typeUrl, QueryScriptRequest);
function createBaseQueryScriptResponse() {
    return {
        script: Script.fromPartial({})
    };
}
export const QueryScriptResponse = {
    typeUrl: "/blit.script.QueryScriptResponse",
    is(o) {
        return o && (o.$typeUrl === QueryScriptResponse.typeUrl || Script.is(o.script));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryScriptResponse.typeUrl || Script.isSDK(o.script));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryScriptResponse.typeUrl || Script.isAmino(o.script));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.script !== undefined) {
            Script.encode(message.script, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryScriptResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.script = Script.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            script: isSet(object.script) ? Script.fromJSON(object.script) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.script !== undefined && (obj.script = message.script ? Script.toJSON(message.script) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryScriptResponse();
        message.script = object.script !== undefined && object.script !== null ? Script.fromPartial(object.script) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryScriptResponse();
        if (object.script !== undefined && object.script !== null) {
            message.script = Script.fromAmino(object.script);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.script = message.script ? Script.toAmino(message.script) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryScriptResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryScriptResponse.decode(message.value);
    },
    toProto(message) {
        return QueryScriptResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryScriptResponse",
            value: QueryScriptResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryScriptResponse.typeUrl, QueryScriptResponse);
function createBaseQueryScriptsRequest() {
    return {
        pagination: undefined
    };
}
export const QueryScriptsRequest = {
    typeUrl: "/blit.script.QueryScriptsRequest",
    is(o) {
        return o && o.$typeUrl === QueryScriptsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryScriptsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryScriptsRequest.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryScriptsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryScriptsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryScriptsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryScriptsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryScriptsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryScriptsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryScriptsRequest",
            value: QueryScriptsRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryScriptsRequest.typeUrl, QueryScriptsRequest);
function createBaseQueryScriptsResponse() {
    return {
        script: [],
        pagination: undefined
    };
}
export const QueryScriptsResponse = {
    typeUrl: "/blit.script.QueryScriptsResponse",
    is(o) {
        return o && (o.$typeUrl === QueryScriptsResponse.typeUrl || Array.isArray(o.script) && (!o.script.length || Script.is(o.script[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryScriptsResponse.typeUrl || Array.isArray(o.script) && (!o.script.length || Script.isSDK(o.script[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryScriptsResponse.typeUrl || Array.isArray(o.script) && (!o.script.length || Script.isAmino(o.script[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.script) {
            Script.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryScriptsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.script.push(Script.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            script: Array.isArray(object?.script) ? object.script.map((e) => Script.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.script) {
            obj.script = message.script.map(e => e ? Script.toJSON(e) : undefined);
        }
        else {
            obj.script = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryScriptsResponse();
        message.script = object.script?.map(e => Script.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryScriptsResponse();
        message.script = object.script?.map(e => Script.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.script) {
            obj.script = message.script.map(e => e ? Script.toAmino(e) : undefined);
        }
        else {
            obj.script = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryScriptsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryScriptsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryScriptsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryScriptsResponse",
            value: QueryScriptsResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryScriptsResponse.typeUrl, QueryScriptsResponse);
function createBaseQueryWebRequest() {
    return {
        address: "",
        httprequest: ""
    };
}
export const QueryWebRequest = {
    typeUrl: "/blit.script.QueryWebRequest",
    is(o) {
        return o && (o.$typeUrl === QueryWebRequest.typeUrl || typeof o.address === "string" && typeof o.httprequest === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryWebRequest.typeUrl || typeof o.address === "string" && typeof o.httprequest === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryWebRequest.typeUrl || typeof o.address === "string" && typeof o.httprequest === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.httprequest !== "") {
            writer.uint32(18).string(message.httprequest);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWebRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.httprequest = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            httprequest: isSet(object.httprequest) ? String(object.httprequest) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.httprequest !== undefined && (obj.httprequest = message.httprequest);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryWebRequest();
        message.address = object.address ?? "";
        message.httprequest = object.httprequest ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryWebRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.httprequest !== undefined && object.httprequest !== null) {
            message.httprequest = object.httprequest;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.httprequest = message.httprequest;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryWebRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryWebRequest.decode(message.value);
    },
    toProto(message) {
        return QueryWebRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryWebRequest",
            value: QueryWebRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryWebRequest.typeUrl, QueryWebRequest);
function createBaseQueryWebResponse() {
    return {
        httpresponse: ""
    };
}
export const QueryWebResponse = {
    typeUrl: "/blit.script.QueryWebResponse",
    is(o) {
        return o && (o.$typeUrl === QueryWebResponse.typeUrl || typeof o.httpresponse === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryWebResponse.typeUrl || typeof o.httpresponse === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryWebResponse.typeUrl || typeof o.httpresponse === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.httpresponse !== "") {
            writer.uint32(10).string(message.httpresponse);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWebResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpresponse = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            httpresponse: isSet(object.httpresponse) ? String(object.httpresponse) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.httpresponse !== undefined && (obj.httpresponse = message.httpresponse);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryWebResponse();
        message.httpresponse = object.httpresponse ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryWebResponse();
        if (object.httpresponse !== undefined && object.httpresponse !== null) {
            message.httpresponse = object.httpresponse;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.httpresponse = message.httpresponse;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryWebResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryWebResponse.decode(message.value);
    },
    toProto(message) {
        return QueryWebResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryWebResponse",
            value: QueryWebResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryWebResponse.typeUrl, QueryWebResponse);
function createBaseQueryEvalRequest() {
    return {
        caller_address: "",
        script_address: "",
        extra_code: "",
        function_name: "",
        kwargs: "",
        grantee: "",
        attached_messages: ""
    };
}
export const QueryEvalRequest = {
    typeUrl: "/blit.script.QueryEvalRequest",
    is(o) {
        return o && (o.$typeUrl === QueryEvalRequest.typeUrl || typeof o.caller_address === "string" && typeof o.script_address === "string" && typeof o.extra_code === "string" && typeof o.function_name === "string" && typeof o.kwargs === "string" && typeof o.grantee === "string" && typeof o.attached_messages === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryEvalRequest.typeUrl || typeof o.caller_address === "string" && typeof o.script_address === "string" && typeof o.extra_code === "string" && typeof o.function_name === "string" && typeof o.kwargs === "string" && typeof o.grantee === "string" && typeof o.attached_messages === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryEvalRequest.typeUrl || typeof o.caller_address === "string" && typeof o.script_address === "string" && typeof o.extra_code === "string" && typeof o.function_name === "string" && typeof o.kwargs === "string" && typeof o.grantee === "string" && typeof o.attached_messages === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.caller_address !== "") {
            writer.uint32(18).string(message.caller_address);
        }
        if (message.script_address !== "") {
            writer.uint32(26).string(message.script_address);
        }
        if (message.extra_code !== "") {
            writer.uint32(34).string(message.extra_code);
        }
        if (message.function_name !== "") {
            writer.uint32(42).string(message.function_name);
        }
        if (message.kwargs !== "") {
            writer.uint32(50).string(message.kwargs);
        }
        if (message.grantee !== "") {
            writer.uint32(58).string(message.grantee);
        }
        if (message.attached_messages !== "") {
            writer.uint32(66).string(message.attached_messages);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEvalRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.caller_address = reader.string();
                    break;
                case 3:
                    message.script_address = reader.string();
                    break;
                case 4:
                    message.extra_code = reader.string();
                    break;
                case 5:
                    message.function_name = reader.string();
                    break;
                case 6:
                    message.kwargs = reader.string();
                    break;
                case 7:
                    message.grantee = reader.string();
                    break;
                case 8:
                    message.attached_messages = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            caller_address: isSet(object.caller_address) ? String(object.caller_address) : "",
            script_address: isSet(object.script_address) ? String(object.script_address) : "",
            extra_code: isSet(object.extra_code) ? String(object.extra_code) : "",
            function_name: isSet(object.function_name) ? String(object.function_name) : "",
            kwargs: isSet(object.kwargs) ? String(object.kwargs) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
            attached_messages: isSet(object.attached_messages) ? String(object.attached_messages) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.caller_address !== undefined && (obj.caller_address = message.caller_address);
        message.script_address !== undefined && (obj.script_address = message.script_address);
        message.extra_code !== undefined && (obj.extra_code = message.extra_code);
        message.function_name !== undefined && (obj.function_name = message.function_name);
        message.kwargs !== undefined && (obj.kwargs = message.kwargs);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.attached_messages !== undefined && (obj.attached_messages = message.attached_messages);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryEvalRequest();
        message.caller_address = object.caller_address ?? "";
        message.script_address = object.script_address ?? "";
        message.extra_code = object.extra_code ?? "";
        message.function_name = object.function_name ?? "";
        message.kwargs = object.kwargs ?? "";
        message.grantee = object.grantee ?? "";
        message.attached_messages = object.attached_messages ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryEvalRequest();
        if (object.caller_address !== undefined && object.caller_address !== null) {
            message.caller_address = object.caller_address;
        }
        if (object.script_address !== undefined && object.script_address !== null) {
            message.script_address = object.script_address;
        }
        if (object.extra_code !== undefined && object.extra_code !== null) {
            message.extra_code = object.extra_code;
        }
        if (object.function_name !== undefined && object.function_name !== null) {
            message.function_name = object.function_name;
        }
        if (object.kwargs !== undefined && object.kwargs !== null) {
            message.kwargs = object.kwargs;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.attached_messages !== undefined && object.attached_messages !== null) {
            message.attached_messages = object.attached_messages;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.caller_address = message.caller_address;
        obj.script_address = message.script_address;
        obj.extra_code = message.extra_code;
        obj.function_name = message.function_name;
        obj.kwargs = message.kwargs;
        obj.grantee = message.grantee;
        obj.attached_messages = message.attached_messages;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryEvalRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryEvalRequest.decode(message.value);
    },
    toProto(message) {
        return QueryEvalRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryEvalRequest",
            value: QueryEvalRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryEvalRequest.typeUrl, QueryEvalRequest);
function createBaseQueryEvalResponse() {
    return {
        response: ""
    };
}
export const QueryEvalResponse = {
    typeUrl: "/blit.script.QueryEvalResponse",
    is(o) {
        return o && (o.$typeUrl === QueryEvalResponse.typeUrl || typeof o.response === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryEvalResponse.typeUrl || typeof o.response === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryEvalResponse.typeUrl || typeof o.response === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.response !== "") {
            writer.uint32(10).string(message.response);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEvalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            response: isSet(object.response) ? String(object.response) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.response !== undefined && (obj.response = message.response);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryEvalResponse();
        message.response = object.response ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryEvalResponse();
        if (object.response !== undefined && object.response !== null) {
            message.response = object.response;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.response = message.response;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryEvalResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryEvalResponse.decode(message.value);
    },
    toProto(message) {
        return QueryEvalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryEvalResponse",
            value: QueryEvalResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryEvalResponse.typeUrl, QueryEvalResponse);
//# sourceMappingURL=query.js.map