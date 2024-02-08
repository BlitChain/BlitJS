"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryEvalResponse = exports.QueryEvalRequest = exports.QueryWebResponse = exports.QueryWebRequest = exports.QueryScriptsResponse = exports.QueryScriptsRequest = exports.QueryScriptResponse = exports.QueryScriptRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
//@ts-nocheck
const pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
const params_1 = require("./params");
const script_1 = require("./script");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "blit.script";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/blit.script.QueryParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: params_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/blit.script.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? params_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : params_1.Params.fromPartial({});
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryScriptRequest() {
    return {
        address: ""
    };
}
exports.QueryScriptRequest = {
    typeUrl: "/blit.script.QueryScriptRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : ""
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
        return exports.QueryScriptRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryScriptRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryScriptRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryScriptRequest",
            value: exports.QueryScriptRequest.encode(message).finish()
        };
    }
};
function createBaseQueryScriptResponse() {
    return {
        script: script_1.Script.fromPartial({})
    };
}
exports.QueryScriptResponse = {
    typeUrl: "/blit.script.QueryScriptResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.script !== undefined) {
            script_1.Script.encode(message.script, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryScriptResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.script = script_1.Script.decode(reader, reader.uint32());
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
            script: (0, helpers_1.isSet)(object.script) ? script_1.Script.fromJSON(object.script) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.script !== undefined && (obj.script = message.script ? script_1.Script.toJSON(message.script) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryScriptResponse();
        message.script = object.script !== undefined && object.script !== null ? script_1.Script.fromPartial(object.script) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryScriptResponse();
        if (object.script !== undefined && object.script !== null) {
            message.script = script_1.Script.fromAmino(object.script);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.script = message.script ? script_1.Script.toAmino(message.script) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryScriptResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryScriptResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryScriptResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryScriptResponse",
            value: exports.QueryScriptResponse.encode(message).finish()
        };
    }
};
function createBaseQueryScriptsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryScriptsRequest = {
    typeUrl: "/blit.script.QueryScriptsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryScriptsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryScriptsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryScriptsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryScriptsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryScriptsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryScriptsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryScriptsRequest",
            value: exports.QueryScriptsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryScriptsResponse() {
    return {
        script: [],
        pagination: undefined
    };
}
exports.QueryScriptsResponse = {
    typeUrl: "/blit.script.QueryScriptsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.script) {
            script_1.Script.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryScriptsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.script.push(script_1.Script.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            script: Array.isArray(object?.script) ? object.script.map((e) => script_1.Script.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.script) {
            obj.script = message.script.map(e => e ? script_1.Script.toJSON(e) : undefined);
        }
        else {
            obj.script = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryScriptsResponse();
        message.script = object.script?.map(e => script_1.Script.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryScriptsResponse();
        message.script = object.script?.map(e => script_1.Script.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.script) {
            obj.script = message.script.map(e => e ? script_1.Script.toAmino(e) : undefined);
        }
        else {
            obj.script = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryScriptsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryScriptsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryScriptsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryScriptsResponse",
            value: exports.QueryScriptsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryWebRequest() {
    return {
        address: "",
        httprequest: ""
    };
}
exports.QueryWebRequest = {
    typeUrl: "/blit.script.QueryWebRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.httprequest !== "") {
            writer.uint32(18).string(message.httprequest);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            httprequest: (0, helpers_1.isSet)(object.httprequest) ? String(object.httprequest) : ""
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
        return exports.QueryWebRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryWebRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryWebRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryWebRequest",
            value: exports.QueryWebRequest.encode(message).finish()
        };
    }
};
function createBaseQueryWebResponse() {
    return {
        httpresponse: ""
    };
}
exports.QueryWebResponse = {
    typeUrl: "/blit.script.QueryWebResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.httpresponse !== "") {
            writer.uint32(10).string(message.httpresponse);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            httpresponse: (0, helpers_1.isSet)(object.httpresponse) ? String(object.httpresponse) : ""
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
        return exports.QueryWebResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryWebResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryWebResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryWebResponse",
            value: exports.QueryWebResponse.encode(message).finish()
        };
    }
};
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
exports.QueryEvalRequest = {
    typeUrl: "/blit.script.QueryEvalRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            caller_address: (0, helpers_1.isSet)(object.caller_address) ? String(object.caller_address) : "",
            script_address: (0, helpers_1.isSet)(object.script_address) ? String(object.script_address) : "",
            extra_code: (0, helpers_1.isSet)(object.extra_code) ? String(object.extra_code) : "",
            function_name: (0, helpers_1.isSet)(object.function_name) ? String(object.function_name) : "",
            kwargs: (0, helpers_1.isSet)(object.kwargs) ? String(object.kwargs) : "",
            grantee: (0, helpers_1.isSet)(object.grantee) ? String(object.grantee) : "",
            attached_messages: (0, helpers_1.isSet)(object.attached_messages) ? String(object.attached_messages) : ""
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
        return exports.QueryEvalRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryEvalRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryEvalRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryEvalRequest",
            value: exports.QueryEvalRequest.encode(message).finish()
        };
    }
};
function createBaseQueryEvalResponse() {
    return {
        response: ""
    };
}
exports.QueryEvalResponse = {
    typeUrl: "/blit.script.QueryEvalResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.response !== "") {
            writer.uint32(10).string(message.response);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            response: (0, helpers_1.isSet)(object.response) ? String(object.response) : ""
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
        return exports.QueryEvalResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryEvalResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryEvalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryEvalResponse",
            value: exports.QueryEvalResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map