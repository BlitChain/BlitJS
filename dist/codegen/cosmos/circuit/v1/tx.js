"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgResetCircuitBreakerResponse = exports.MsgResetCircuitBreaker = exports.MsgTripCircuitBreakerResponse = exports.MsgTripCircuitBreaker = exports.MsgAuthorizeCircuitBreakerResponse = exports.MsgAuthorizeCircuitBreaker = exports.protobufPackage = void 0;
//@ts-nocheck
const types_1 = require("./types");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.circuit.v1";
function createBaseMsgAuthorizeCircuitBreaker() {
    return {
        granter: "",
        grantee: "",
        permissions: undefined
    };
}
exports.MsgAuthorizeCircuitBreaker = {
    typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.permissions !== undefined) {
            types_1.Permissions.encode(message.permissions, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAuthorizeCircuitBreaker();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.permissions = types_1.Permissions.decode(reader, reader.uint32());
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
            granter: (0, helpers_1.isSet)(object.granter) ? String(object.granter) : "",
            grantee: (0, helpers_1.isSet)(object.grantee) ? String(object.grantee) : "",
            permissions: (0, helpers_1.isSet)(object.permissions) ? types_1.Permissions.fromJSON(object.permissions) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.permissions !== undefined && (obj.permissions = message.permissions ? types_1.Permissions.toJSON(message.permissions) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAuthorizeCircuitBreaker();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.permissions = object.permissions !== undefined && object.permissions !== null ? types_1.Permissions.fromPartial(object.permissions) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            granter: object.granter,
            grantee: object.grantee,
            permissions: object?.permissions ? types_1.Permissions.fromAmino(object.permissions) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        obj.permissions = message.permissions ? types_1.Permissions.toAmino(message.permissions) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgAuthorizeCircuitBreaker.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgAuthorizeCircuitBreaker",
            value: exports.MsgAuthorizeCircuitBreaker.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgAuthorizeCircuitBreaker.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAuthorizeCircuitBreaker.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
            value: exports.MsgAuthorizeCircuitBreaker.encode(message).finish()
        };
    }
};
function createBaseMsgAuthorizeCircuitBreakerResponse() {
    return {
        success: false
    };
}
exports.MsgAuthorizeCircuitBreakerResponse = {
    typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreakerResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAuthorizeCircuitBreakerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
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
            success: (0, helpers_1.isSet)(object.success) ? Boolean(object.success) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.success !== undefined && (obj.success = message.success);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAuthorizeCircuitBreakerResponse();
        message.success = object.success ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            success: object.success
        };
    },
    toAmino(message) {
        const obj = {};
        obj.success = message.success;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgAuthorizeCircuitBreakerResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgAuthorizeCircuitBreakerResponse",
            value: exports.MsgAuthorizeCircuitBreakerResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgAuthorizeCircuitBreakerResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAuthorizeCircuitBreakerResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreakerResponse",
            value: exports.MsgAuthorizeCircuitBreakerResponse.encode(message).finish()
        };
    }
};
function createBaseMsgTripCircuitBreaker() {
    return {
        authority: "",
        msg_type_urls: []
    };
}
exports.MsgTripCircuitBreaker = {
    typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        for (const v of message.msg_type_urls) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTripCircuitBreaker();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.msg_type_urls.push(reader.string());
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
            msg_type_urls: Array.isArray(object?.msg_type_urls) ? object.msg_type_urls.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        if (message.msg_type_urls) {
            obj.msg_type_urls = message.msg_type_urls.map(e => e);
        }
        else {
            obj.msg_type_urls = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgTripCircuitBreaker();
        message.authority = object.authority ?? "";
        message.msg_type_urls = object.msg_type_urls?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            authority: object.authority,
            msg_type_urls: Array.isArray(object?.msg_type_urls) ? object.msg_type_urls.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority;
        if (message.msg_type_urls) {
            obj.msg_type_urls = message.msg_type_urls.map(e => e);
        }
        else {
            obj.msg_type_urls = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTripCircuitBreaker.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTripCircuitBreaker",
            value: exports.MsgTripCircuitBreaker.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTripCircuitBreaker.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTripCircuitBreaker.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
            value: exports.MsgTripCircuitBreaker.encode(message).finish()
        };
    }
};
function createBaseMsgTripCircuitBreakerResponse() {
    return {
        success: false
    };
}
exports.MsgTripCircuitBreakerResponse = {
    typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreakerResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTripCircuitBreakerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
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
            success: (0, helpers_1.isSet)(object.success) ? Boolean(object.success) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.success !== undefined && (obj.success = message.success);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgTripCircuitBreakerResponse();
        message.success = object.success ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            success: object.success
        };
    },
    toAmino(message) {
        const obj = {};
        obj.success = message.success;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTripCircuitBreakerResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTripCircuitBreakerResponse",
            value: exports.MsgTripCircuitBreakerResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTripCircuitBreakerResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTripCircuitBreakerResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreakerResponse",
            value: exports.MsgTripCircuitBreakerResponse.encode(message).finish()
        };
    }
};
function createBaseMsgResetCircuitBreaker() {
    return {
        authority: "",
        msg_type_urls: []
    };
}
exports.MsgResetCircuitBreaker = {
    typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        for (const v of message.msg_type_urls) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgResetCircuitBreaker();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 3:
                    message.msg_type_urls.push(reader.string());
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
            msg_type_urls: Array.isArray(object?.msg_type_urls) ? object.msg_type_urls.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        if (message.msg_type_urls) {
            obj.msg_type_urls = message.msg_type_urls.map(e => e);
        }
        else {
            obj.msg_type_urls = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgResetCircuitBreaker();
        message.authority = object.authority ?? "";
        message.msg_type_urls = object.msg_type_urls?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            authority: object.authority,
            msg_type_urls: Array.isArray(object?.msg_type_urls) ? object.msg_type_urls.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority;
        if (message.msg_type_urls) {
            obj.msg_type_urls = message.msg_type_urls.map(e => e);
        }
        else {
            obj.msg_type_urls = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgResetCircuitBreaker.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgResetCircuitBreaker",
            value: exports.MsgResetCircuitBreaker.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgResetCircuitBreaker.decode(message.value);
    },
    toProto(message) {
        return exports.MsgResetCircuitBreaker.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
            value: exports.MsgResetCircuitBreaker.encode(message).finish()
        };
    }
};
function createBaseMsgResetCircuitBreakerResponse() {
    return {
        success: false
    };
}
exports.MsgResetCircuitBreakerResponse = {
    typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreakerResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgResetCircuitBreakerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
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
            success: (0, helpers_1.isSet)(object.success) ? Boolean(object.success) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.success !== undefined && (obj.success = message.success);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgResetCircuitBreakerResponse();
        message.success = object.success ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            success: object.success
        };
    },
    toAmino(message) {
        const obj = {};
        obj.success = message.success;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgResetCircuitBreakerResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgResetCircuitBreakerResponse",
            value: exports.MsgResetCircuitBreakerResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgResetCircuitBreakerResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgResetCircuitBreakerResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreakerResponse",
            value: exports.MsgResetCircuitBreakerResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map