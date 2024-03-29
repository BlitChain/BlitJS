"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosmosTx = exports.InterchainAccountPacketData = exports.typeToJSON = exports.typeFromJSON = exports.TypeAmino = exports.TypeSDKType = exports.Type = exports.protobufPackage = void 0;
//@ts-nocheck
const any_1 = require("../../../../google/protobuf/any");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "ibc.applications.interchain_accounts.v1";
/**
 * Type defines a classification of message issued from a controller chain to its associated interchain accounts
 * host
 */
var Type;
(function (Type) {
    /** TYPE_UNSPECIFIED - Default zero value enumeration */
    Type[Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /** TYPE_EXECUTE_TX - Execute a transaction on an interchain accounts host chain */
    Type[Type["TYPE_EXECUTE_TX"] = 1] = "TYPE_EXECUTE_TX";
    Type[Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Type || (exports.Type = Type = {}));
exports.TypeSDKType = Type;
exports.TypeAmino = Type;
function typeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return Type.TYPE_UNSPECIFIED;
        case 1:
        case "TYPE_EXECUTE_TX":
            return Type.TYPE_EXECUTE_TX;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Type.UNRECOGNIZED;
    }
}
exports.typeFromJSON = typeFromJSON;
function typeToJSON(object) {
    switch (object) {
        case Type.TYPE_UNSPECIFIED:
            return "TYPE_UNSPECIFIED";
        case Type.TYPE_EXECUTE_TX:
            return "TYPE_EXECUTE_TX";
        case Type.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.typeToJSON = typeToJSON;
function createBaseInterchainAccountPacketData() {
    return {
        type: 0,
        data: new Uint8Array(),
        memo: ""
    };
}
exports.InterchainAccountPacketData = {
    typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccountPacketData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.memo !== "") {
            writer.uint32(26).string(message.memo);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInterchainAccountPacketData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.memo = reader.string();
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
            type: (0, helpers_1.isSet)(object.type) ? typeFromJSON(object.type) : -1,
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array(),
            memo: (0, helpers_1.isSet)(object.memo) ? String(object.memo) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = typeToJSON(message.type));
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.memo !== undefined && (obj.memo = message.memo);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInterchainAccountPacketData();
        message.type = object.type ?? 0;
        message.data = object.data ?? new Uint8Array();
        message.memo = object.memo ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseInterchainAccountPacketData();
        if (object.type !== undefined && object.type !== null) {
            message.type = typeFromJSON(object.type);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        if (object.memo !== undefined && object.memo !== null) {
            message.memo = object.memo;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        obj.memo = message.memo;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.InterchainAccountPacketData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/InterchainAccountPacketData",
            value: exports.InterchainAccountPacketData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.InterchainAccountPacketData.decode(message.value);
    },
    toProto(message) {
        return exports.InterchainAccountPacketData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccountPacketData",
            value: exports.InterchainAccountPacketData.encode(message).finish()
        };
    }
};
function createBaseCosmosTx() {
    return {
        messages: []
    };
}
exports.CosmosTx = {
    typeUrl: "/ibc.applications.interchain_accounts.v1.CosmosTx",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.messages) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCosmosTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(any_1.Any.decode(reader, reader.uint32()));
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
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => any_1.Any.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCosmosTx();
        message.messages = object.messages?.map(e => any_1.Any.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCosmosTx();
        message.messages = object.messages?.map(e => any_1.Any.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CosmosTx.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CosmosTx",
            value: exports.CosmosTx.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CosmosTx.decode(message.value);
    },
    toProto(message) {
        return exports.CosmosTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.v1.CosmosTx",
            value: exports.CosmosTx.encode(message).finish()
        };
    }
};
//# sourceMappingURL=packet.js.map