"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgRunResponse = exports.MsgRun = exports.MsgDeleteScriptResponse = exports.MsgDeleteScript = exports.MsgUpdateScriptResponse = exports.MsgUpdateScript = exports.MsgCreateScriptResponse = exports.MsgCreateScript = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.protobufPackage = void 0;
//@ts-nocheck
const params_1 = require("./params");
const any_1 = require("../../google/protobuf/any");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
exports.protobufPackage = "blit.script";
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: params_1.Params.fromPartial({})
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/blit.script.MsgUpdateParams",
    aminoType: "blit/x/script/MsgUpdateParams",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && params_1.Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && params_1.Params.isSDK(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && params_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
            authority: (0, helpers_1.isSet)(object.authority) ? String(object.authority) : "",
            params: (0, helpers_1.isSet)(object.params) ? params_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority;
        obj.params = message.params ? params_1.Params.toAmino(message.params) : params_1.Params.fromPartial({});
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "blit/x/script/MsgUpdateParams",
            value: exports.MsgUpdateParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.MsgUpdateParams",
            value: exports.MsgUpdateParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateParams.typeUrl, exports.MsgUpdateParams);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateParams.aminoType, exports.MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    typeUrl: "/blit.script.MsgUpdateParamsResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
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
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateParamsResponse.typeUrl, exports.MsgUpdateParamsResponse);
function createBaseMsgCreateScript() {
    return {
        creator: "",
        code: "",
        msg_type_permissions: [],
        grantee: ""
    };
}
exports.MsgCreateScript = {
    typeUrl: "/blit.script.MsgCreateScript",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCreateScript.typeUrl || typeof o.creator === "string" && typeof o.code === "string" && Array.isArray(o.msg_type_permissions) && (!o.msg_type_permissions.length || typeof o.msg_type_permissions[0] === "string") && typeof o.grantee === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgCreateScript.typeUrl || typeof o.creator === "string" && typeof o.code === "string" && Array.isArray(o.msg_type_permissions) && (!o.msg_type_permissions.length || typeof o.msg_type_permissions[0] === "string") && typeof o.grantee === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCreateScript.typeUrl || typeof o.creator === "string" && typeof o.code === "string" && Array.isArray(o.msg_type_permissions) && (!o.msg_type_permissions.length || typeof o.msg_type_permissions[0] === "string") && typeof o.grantee === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.code !== "") {
            writer.uint32(18).string(message.code);
        }
        for (const v of message.msg_type_permissions) {
            writer.uint32(26).string(v);
        }
        if (message.grantee !== "") {
            writer.uint32(34).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateScript();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.code = reader.string();
                    break;
                case 3:
                    message.msg_type_permissions.push(reader.string());
                    break;
                case 4:
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
            creator: (0, helpers_1.isSet)(object.creator) ? String(object.creator) : "",
            code: (0, helpers_1.isSet)(object.code) ? String(object.code) : "",
            msg_type_permissions: Array.isArray(object?.msg_type_permissions) ? object.msg_type_permissions.map((e) => String(e)) : [],
            grantee: (0, helpers_1.isSet)(object.grantee) ? String(object.grantee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.code !== undefined && (obj.code = message.code);
        if (message.msg_type_permissions) {
            obj.msg_type_permissions = message.msg_type_permissions.map(e => e);
        }
        else {
            obj.msg_type_permissions = [];
        }
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateScript();
        message.creator = object.creator ?? "";
        message.code = object.code ?? "";
        message.msg_type_permissions = object.msg_type_permissions?.map(e => e) || [];
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateScript();
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        message.msg_type_permissions = object.msg_type_permissions?.map(e => e) || [];
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator;
        obj.code = message.code;
        if (message.msg_type_permissions) {
            obj.msg_type_permissions = message.msg_type_permissions.map(e => e);
        }
        else {
            obj.msg_type_permissions = [];
        }
        obj.grantee = message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateScript.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateScript.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateScript.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.MsgCreateScript",
            value: exports.MsgCreateScript.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateScript.typeUrl, exports.MsgCreateScript);
function createBaseMsgCreateScriptResponse() {
    return {
        address: ""
    };
}
exports.MsgCreateScriptResponse = {
    typeUrl: "/blit.script.MsgCreateScriptResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCreateScriptResponse.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgCreateScriptResponse.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCreateScriptResponse.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateScriptResponse();
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
        const message = createBaseMsgCreateScriptResponse();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateScriptResponse();
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
        return exports.MsgCreateScriptResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateScriptResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateScriptResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.MsgCreateScriptResponse",
            value: exports.MsgCreateScriptResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateScriptResponse.typeUrl, exports.MsgCreateScriptResponse);
function createBaseMsgUpdateScript() {
    return {
        address: "",
        code: "",
        grantee: ""
    };
}
exports.MsgUpdateScript = {
    typeUrl: "/blit.script.MsgUpdateScript",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUpdateScript.typeUrl || typeof o.address === "string" && typeof o.code === "string" && typeof o.grantee === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgUpdateScript.typeUrl || typeof o.address === "string" && typeof o.code === "string" && typeof o.grantee === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUpdateScript.typeUrl || typeof o.address === "string" && typeof o.code === "string" && typeof o.grantee === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.code !== "") {
            writer.uint32(18).string(message.code);
        }
        if (message.grantee !== "") {
            writer.uint32(26).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateScript();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.code = reader.string();
                    break;
                case 3:
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            code: (0, helpers_1.isSet)(object.code) ? String(object.code) : "",
            grantee: (0, helpers_1.isSet)(object.grantee) ? String(object.grantee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.code !== undefined && (obj.code = message.code);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateScript();
        message.address = object.address ?? "";
        message.code = object.code ?? "";
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateScript();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.code = message.code;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateScript.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateScript.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateScript.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.MsgUpdateScript",
            value: exports.MsgUpdateScript.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateScript.typeUrl, exports.MsgUpdateScript);
function createBaseMsgUpdateScriptResponse() {
    return {
        version: BigInt(0)
    };
}
exports.MsgUpdateScriptResponse = {
    typeUrl: "/blit.script.MsgUpdateScriptResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUpdateScriptResponse.typeUrl || typeof o.version === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgUpdateScriptResponse.typeUrl || typeof o.version === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUpdateScriptResponse.typeUrl || typeof o.version === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.version !== BigInt(0)) {
            writer.uint32(8).int64(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateScriptResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.int64();
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
            version: (0, helpers_1.isSet)(object.version) ? BigInt(object.version.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = (message.version || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateScriptResponse();
        message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateScriptResponse();
        if (object.version !== undefined && object.version !== null) {
            message.version = BigInt(object.version);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version ? message.version.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateScriptResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateScriptResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateScriptResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.MsgUpdateScriptResponse",
            value: exports.MsgUpdateScriptResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateScriptResponse.typeUrl, exports.MsgUpdateScriptResponse);
function createBaseMsgDeleteScript() {
    return {
        address: "",
        index: ""
    };
}
exports.MsgDeleteScript = {
    typeUrl: "/blit.script.MsgDeleteScript",
    is(o) {
        return o && (o.$typeUrl === exports.MsgDeleteScript.typeUrl || typeof o.address === "string" && typeof o.index === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgDeleteScript.typeUrl || typeof o.address === "string" && typeof o.index === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgDeleteScript.typeUrl || typeof o.address === "string" && typeof o.index === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteScript();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
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
            index: (0, helpers_1.isSet)(object.index) ? String(object.index) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDeleteScript();
        message.address = object.address ?? "";
        message.index = object.index ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDeleteScript();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.index = message.index;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDeleteScript.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDeleteScript.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDeleteScript.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.MsgDeleteScript",
            value: exports.MsgDeleteScript.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgDeleteScript.typeUrl, exports.MsgDeleteScript);
function createBaseMsgDeleteScriptResponse() {
    return {};
}
exports.MsgDeleteScriptResponse = {
    typeUrl: "/blit.script.MsgDeleteScriptResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgDeleteScriptResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgDeleteScriptResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgDeleteScriptResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteScriptResponse();
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
        const message = createBaseMsgDeleteScriptResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgDeleteScriptResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDeleteScriptResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDeleteScriptResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDeleteScriptResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.MsgDeleteScriptResponse",
            value: exports.MsgDeleteScriptResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgDeleteScriptResponse.typeUrl, exports.MsgDeleteScriptResponse);
function createBaseMsgRun() {
    return {
        caller_address: "",
        script_address: "",
        extra_code: "",
        function_name: "",
        kwargs: "",
        grantee: "",
        attached_messages: []
    };
}
exports.MsgRun = {
    typeUrl: "/blit.script.MsgRun",
    is(o) {
        return o && (o.$typeUrl === exports.MsgRun.typeUrl || typeof o.caller_address === "string" && typeof o.script_address === "string" && typeof o.extra_code === "string" && typeof o.function_name === "string" && typeof o.kwargs === "string" && typeof o.grantee === "string" && Array.isArray(o.attached_messages) && (!o.attached_messages.length || any_1.Any.is(o.attached_messages[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgRun.typeUrl || typeof o.caller_address === "string" && typeof o.script_address === "string" && typeof o.extra_code === "string" && typeof o.function_name === "string" && typeof o.kwargs === "string" && typeof o.grantee === "string" && Array.isArray(o.attached_messages) && (!o.attached_messages.length || any_1.Any.isSDK(o.attached_messages[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgRun.typeUrl || typeof o.caller_address === "string" && typeof o.script_address === "string" && typeof o.extra_code === "string" && typeof o.function_name === "string" && typeof o.kwargs === "string" && typeof o.grantee === "string" && Array.isArray(o.attached_messages) && (!o.attached_messages.length || any_1.Any.isAmino(o.attached_messages[0])));
    },
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
        for (const v of message.attached_messages) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(v), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRun();
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
                case 1:
                    message.attached_messages.push(registry_1.GlobalDecoderRegistry.unwrapAny(reader));
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
            attached_messages: Array.isArray(object?.attached_messages) ? object.attached_messages.map((e) => registry_1.GlobalDecoderRegistry.fromJSON(e)) : []
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
        if (message.attached_messages) {
            obj.attached_messages = message.attached_messages.map(e => e ? registry_1.GlobalDecoderRegistry.toJSON(e) : undefined);
        }
        else {
            obj.attached_messages = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRun();
        message.caller_address = object.caller_address ?? "";
        message.script_address = object.script_address ?? "";
        message.extra_code = object.extra_code ?? "";
        message.function_name = object.function_name ?? "";
        message.kwargs = object.kwargs ?? "";
        message.grantee = object.grantee ?? "";
        message.attached_messages = object.attached_messages?.map(e => registry_1.GlobalDecoderRegistry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRun();
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
        message.attached_messages = object.attached_messages?.map(e => registry_1.GlobalDecoderRegistry.fromAminoMsg(e)) || [];
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
        if (message.attached_messages) {
            obj.attached_messages = message.attached_messages.map(e => e ? registry_1.GlobalDecoderRegistry.toAminoMsg(e) : undefined);
        }
        else {
            obj.attached_messages = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRun.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRun.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRun.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.MsgRun",
            value: exports.MsgRun.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgRun.typeUrl, exports.MsgRun);
function createBaseMsgRunResponse() {
    return {
        response: ""
    };
}
exports.MsgRunResponse = {
    typeUrl: "/blit.script.MsgRunResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgRunResponse.typeUrl || typeof o.response === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgRunResponse.typeUrl || typeof o.response === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgRunResponse.typeUrl || typeof o.response === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.response !== "") {
            writer.uint32(10).string(message.response);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRunResponse();
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
        const message = createBaseMsgRunResponse();
        message.response = object.response ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRunResponse();
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
        return exports.MsgRunResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRunResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRunResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.MsgRunResponse",
            value: exports.MsgRunResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgRunResponse.typeUrl, exports.MsgRunResponse);
//# sourceMappingURL=tx.js.map