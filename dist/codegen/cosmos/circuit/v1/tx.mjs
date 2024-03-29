//@ts-nocheck
import { Permissions } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "cosmos.circuit.v1";
function createBaseMsgAuthorizeCircuitBreaker() {
    return {
        granter: "",
        grantee: "",
        permissions: undefined
    };
}
export const MsgAuthorizeCircuitBreaker = {
    typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
    encode(message, writer = BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.permissions !== undefined) {
            Permissions.encode(message.permissions, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.permissions = Permissions.decode(reader, reader.uint32());
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
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
            permissions: isSet(object.permissions) ? Permissions.fromJSON(object.permissions) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.permissions !== undefined && (obj.permissions = message.permissions ? Permissions.toJSON(message.permissions) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAuthorizeCircuitBreaker();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.permissions = object.permissions !== undefined && object.permissions !== null ? Permissions.fromPartial(object.permissions) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAuthorizeCircuitBreaker();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            message.permissions = Permissions.fromAmino(object.permissions);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        obj.permissions = message.permissions ? Permissions.toAmino(message.permissions) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAuthorizeCircuitBreaker.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgAuthorizeCircuitBreaker",
            value: MsgAuthorizeCircuitBreaker.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgAuthorizeCircuitBreaker.decode(message.value);
    },
    toProto(message) {
        return MsgAuthorizeCircuitBreaker.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
            value: MsgAuthorizeCircuitBreaker.encode(message).finish()
        };
    }
};
function createBaseMsgAuthorizeCircuitBreakerResponse() {
    return {
        success: false
    };
}
export const MsgAuthorizeCircuitBreakerResponse = {
    typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreakerResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            success: isSet(object.success) ? Boolean(object.success) : false
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
        const message = createBaseMsgAuthorizeCircuitBreakerResponse();
        if (object.success !== undefined && object.success !== null) {
            message.success = object.success;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.success = message.success;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAuthorizeCircuitBreakerResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgAuthorizeCircuitBreakerResponse",
            value: MsgAuthorizeCircuitBreakerResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgAuthorizeCircuitBreakerResponse.decode(message.value);
    },
    toProto(message) {
        return MsgAuthorizeCircuitBreakerResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreakerResponse",
            value: MsgAuthorizeCircuitBreakerResponse.encode(message).finish()
        };
    }
};
function createBaseMsgTripCircuitBreaker() {
    return {
        authority: "",
        msg_type_urls: []
    };
}
export const MsgTripCircuitBreaker = {
    typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
    encode(message, writer = BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        for (const v of message.msg_type_urls) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            authority: isSet(object.authority) ? String(object.authority) : "",
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
        const message = createBaseMsgTripCircuitBreaker();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        message.msg_type_urls = object.msg_type_urls?.map(e => e) || [];
        return message;
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
        return MsgTripCircuitBreaker.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTripCircuitBreaker",
            value: MsgTripCircuitBreaker.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgTripCircuitBreaker.decode(message.value);
    },
    toProto(message) {
        return MsgTripCircuitBreaker.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
            value: MsgTripCircuitBreaker.encode(message).finish()
        };
    }
};
function createBaseMsgTripCircuitBreakerResponse() {
    return {
        success: false
    };
}
export const MsgTripCircuitBreakerResponse = {
    typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreakerResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            success: isSet(object.success) ? Boolean(object.success) : false
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
        const message = createBaseMsgTripCircuitBreakerResponse();
        if (object.success !== undefined && object.success !== null) {
            message.success = object.success;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.success = message.success;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTripCircuitBreakerResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTripCircuitBreakerResponse",
            value: MsgTripCircuitBreakerResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgTripCircuitBreakerResponse.decode(message.value);
    },
    toProto(message) {
        return MsgTripCircuitBreakerResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreakerResponse",
            value: MsgTripCircuitBreakerResponse.encode(message).finish()
        };
    }
};
function createBaseMsgResetCircuitBreaker() {
    return {
        authority: "",
        msg_type_urls: []
    };
}
export const MsgResetCircuitBreaker = {
    typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
    encode(message, writer = BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        for (const v of message.msg_type_urls) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            authority: isSet(object.authority) ? String(object.authority) : "",
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
        const message = createBaseMsgResetCircuitBreaker();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        message.msg_type_urls = object.msg_type_urls?.map(e => e) || [];
        return message;
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
        return MsgResetCircuitBreaker.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgResetCircuitBreaker",
            value: MsgResetCircuitBreaker.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgResetCircuitBreaker.decode(message.value);
    },
    toProto(message) {
        return MsgResetCircuitBreaker.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
            value: MsgResetCircuitBreaker.encode(message).finish()
        };
    }
};
function createBaseMsgResetCircuitBreakerResponse() {
    return {
        success: false
    };
}
export const MsgResetCircuitBreakerResponse = {
    typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreakerResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            success: isSet(object.success) ? Boolean(object.success) : false
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
        const message = createBaseMsgResetCircuitBreakerResponse();
        if (object.success !== undefined && object.success !== null) {
            message.success = object.success;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.success = message.success;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgResetCircuitBreakerResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgResetCircuitBreakerResponse",
            value: MsgResetCircuitBreakerResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgResetCircuitBreakerResponse.decode(message.value);
    },
    toProto(message) {
        return MsgResetCircuitBreakerResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreakerResponse",
            value: MsgResetCircuitBreakerResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map