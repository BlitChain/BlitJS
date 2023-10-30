"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryEvalResponse = exports.QueryEval = exports.QueryWebResponse = exports.QueryWebRequest = exports.QueryAllScriptResponse = exports.QueryAllScriptRequest = exports.QueryGetScriptResponse = exports.QueryGetScriptRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
const params_1 = require("./params");
const script_1 = require("./script");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
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
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
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
    fromSDK(object) {
        return {
            params: object.params ? params_1.Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            params: object?.params ? params_1.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
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
function createBaseQueryGetScriptRequest() {
    return {
        address: ""
    };
}
exports.QueryGetScriptRequest = {
    typeUrl: "/blit.script.QueryGetScriptRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetScriptRequest();
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
        const message = createBaseQueryGetScriptRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAmino(object) {
        return {
            address: object.address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetScriptRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGetScriptRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetScriptRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryGetScriptRequest",
            value: exports.QueryGetScriptRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetScriptResponse() {
    return {
        script: script_1.Script.fromPartial({})
    };
}
exports.QueryGetScriptResponse = {
    typeUrl: "/blit.script.QueryGetScriptResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.script !== undefined) {
            script_1.Script.encode(message.script, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetScriptResponse();
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
        const message = createBaseQueryGetScriptResponse();
        message.script = object.script !== undefined && object.script !== null ? script_1.Script.fromPartial(object.script) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            script: object.script ? script_1.Script.fromSDK(object.script) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.script !== undefined && (obj.script = message.script ? script_1.Script.toSDK(message.script) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            script: object?.script ? script_1.Script.fromAmino(object.script) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.script = message.script ? script_1.Script.toAmino(message.script) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetScriptResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGetScriptResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetScriptResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryGetScriptResponse",
            value: exports.QueryGetScriptResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllScriptRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAllScriptRequest = {
    typeUrl: "/blit.script.QueryAllScriptRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllScriptRequest();
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
        const message = createBaseQueryAllScriptRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllScriptRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllScriptRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllScriptRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryAllScriptRequest",
            value: exports.QueryAllScriptRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllScriptResponse() {
    return {
        script: [],
        pagination: undefined
    };
}
exports.QueryAllScriptResponse = {
    typeUrl: "/blit.script.QueryAllScriptResponse",
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
        const message = createBaseQueryAllScriptResponse();
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
        const message = createBaseQueryAllScriptResponse();
        message.script = object.script?.map(e => script_1.Script.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            script: Array.isArray(object?.script) ? object.script.map((e) => script_1.Script.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.script) {
            obj.script = message.script.map(e => e ? script_1.Script.toSDK(e) : undefined);
        }
        else {
            obj.script = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            script: Array.isArray(object?.script) ? object.script.map((e) => script_1.Script.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
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
        return exports.QueryAllScriptResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllScriptResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllScriptResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryAllScriptResponse",
            value: exports.QueryAllScriptResponse.encode(message).finish()
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
    fromSDK(object) {
        return {
            address: object?.address,
            httprequest: object?.httprequest
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        obj.httprequest = message.httprequest;
        return obj;
    },
    fromAmino(object) {
        return {
            address: object.address,
            httprequest: object.httprequest
        };
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
    fromSDK(object) {
        return {
            httpresponse: object?.httpresponse
        };
    },
    toSDK(message) {
        const obj = {};
        obj.httpresponse = message.httpresponse;
        return obj;
    },
    fromAmino(object) {
        return {
            httpresponse: object.httpresponse
        };
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
function createBaseQueryEval() {
    return {
        caller_address: "",
        script_address: "",
        extra_code: "",
        function_name: "",
        kwargs: "",
        grantee: ""
    };
}
exports.QueryEval = {
    typeUrl: "/blit.script.QueryEval",
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEval();
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
            grantee: (0, helpers_1.isSet)(object.grantee) ? String(object.grantee) : ""
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
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryEval();
        message.caller_address = object.caller_address ?? "";
        message.script_address = object.script_address ?? "";
        message.extra_code = object.extra_code ?? "";
        message.function_name = object.function_name ?? "";
        message.kwargs = object.kwargs ?? "";
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            caller_address: object?.caller_address,
            script_address: object?.script_address,
            extra_code: object?.extra_code,
            function_name: object?.function_name,
            kwargs: object?.kwargs,
            grantee: object?.grantee
        };
    },
    toSDK(message) {
        const obj = {};
        obj.caller_address = message.caller_address;
        obj.script_address = message.script_address;
        obj.extra_code = message.extra_code;
        obj.function_name = message.function_name;
        obj.kwargs = message.kwargs;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAmino(object) {
        return {
            caller_address: object.caller_address,
            script_address: object.script_address,
            extra_code: object.extra_code,
            function_name: object.function_name,
            kwargs: object.kwargs,
            grantee: object.grantee
        };
    },
    toAmino(message) {
        const obj = {};
        obj.caller_address = message.caller_address;
        obj.script_address = message.script_address;
        obj.extra_code = message.extra_code;
        obj.function_name = message.function_name;
        obj.kwargs = message.kwargs;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryEval.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryEval.decode(message.value);
    },
    toProto(message) {
        return exports.QueryEval.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryEval",
            value: exports.QueryEval.encode(message).finish()
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
    fromSDK(object) {
        return {
            response: object?.response
        };
    },
    toSDK(message) {
        const obj = {};
        obj.response = message.response;
        return obj;
    },
    fromAmino(object) {
        return {
            response: object.response
        };
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